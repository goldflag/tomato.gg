import React from 'react';
import WN8 from '../data/wn8';
import tankNames from '../data/tankNames';
import nationConversion from '../data/nationConversion';
import BattleTrackerTemplate from '../templates/BattleTrackerTemplate';
import EXPTrackerTemplate from '../templates/EXPTrackerTemplate';
import clonedeep from 'lodash.clonedeep';
import CDF from '../data/CDF.json';
import jStat from 'jstat';


function WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN) {
    const rWINc    = Math.max(0,                          (rWIN    - 0.71) / (1 - 0.71) );
    const rDAMAGEc = Math.max(0,                          (rDAMAGE - 0.22) / (1 - 0.22) );
    const rFRAGc   = Math.max(0, Math.min(rDAMAGEc + 0.2, (rFRAG   - 0.12) / (1 - 0.12)));
    const rSPOTc   = Math.max(0, Math.min(rDAMAGEc + 0.1, (rSPOT   - 0.38) / (1 - 0.38)));
    const rDEFc    = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF    - 0.10) / (1 - 0.10)));
    const WN8 = 980*rDAMAGEc + 210*rDAMAGEc*rFRAGc + 155*rFRAGc*rSPOTc + 75*rDEFc*rFRAGc + 145*Math.min(1.8,rWINc);
    return WN8;
}

function calculateWN8(id, avgDamage, avgDef, avgFrag, avgSpots, winrate) {
    const exp = WN8[id];
    const rDAMAGE = avgDamage / exp.expDamage;
    const rSPOT   = avgSpots  / exp.expSpot;
    const rFRAG   = avgFrag   / exp.expFrag;
    const rDEF    = avgDef    / exp.expDef;
    const rWIN    = winrate   / exp.expWinRate;
    return WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN);
}

const Conversion = {
    'lightTank' : 'LT',
    'mediumTank' : 'MT',
    'heavyTank' : 'HT',
    'AT-SPG' : 'TD',
    'SPG' : 'SPG',
}
const classToIndex = { "HT" : 0, "MT" : 1, "TD" : 2, "LT" : 3, "SPG" : 4};
const tierToKey = { 1 : "I", 2 : "II", 3 : "III", 4 : "IV", 5 : "V", 6 : "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 10 : "X" };

export default function TankStats(stats, MOEstats, totalBattles) {

    let weighedExpDamage = 0;
    let weighedExpSpots = 0;
    let weighedExpFrag = 0;
    let weighedExpDef = 0;
    let weighedExpWinrate = 0;

    let weighedDamage = 0
    let weighedSpots = 0;
    let weighedFrag = 0;
    let weighedDef = 0;
    let weighedWinrate = 0;

    const BattleTracker = clonedeep(BattleTrackerTemplate);
    const EXPTracker = clonedeep(EXPTrackerTemplate);

    function calculateWeighedOverall(id, damage, def, frag, spots, wins, battles) {
        const exp = WN8[id];

        weighedExpDamage += battles*exp.expDamage;
        weighedExpSpots += battles*exp.expSpot;
        weighedExpFrag += battles*exp.expFrag;    
        weighedExpDef += battles*exp.expDef;    
        weighedExpWinrate += battles*exp.expWinRate;
    
        weighedDamage += damage;
        weighedSpots += spots;
        weighedFrag += frag;
        weighedDef += def;
        weighedWinrate += 100*wins;
    }
    
    function calculateOverallWN8() {
        const rDAMAGE = weighedDamage / weighedExpDamage;
        const rSPOT   = weighedSpots  / weighedExpSpots;
        const rFRAG   = weighedFrag   / weighedExpFrag;
        const rDEF    = weighedDef    / weighedExpDef;
        const rWIN    = weighedWinrate   / weighedExpWinrate;
        jsonStats.expectedRatios[0].player = (rDAMAGE).toFixed(2);
        jsonStats.expectedRatios[1].player = (rSPOT).toFixed(2);
        jsonStats.expectedRatios[2].player = (rFRAG).toFixed(2);
        jsonStats.expectedRatios[3].player = (rDEF).toFixed(2);
        jsonStats.expectedRatios[4].player = (rWIN).toFixed(2);
        return parseInt(WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN));
    }

    function simpleWN8(c, t) {
        const rDAMAGE = BattleTracker[c][tierToKey[t]].dmg / EXPTracker[c][tierToKey[t]].dmg;
        const rSPOT   = BattleTracker[c][tierToKey[t]].spot  / EXPTracker[c][tierToKey[t]].spot;
        const rFRAG   = BattleTracker[c][tierToKey[t]].frag   / EXPTracker[c][tierToKey[t]].frag;
        const rDEF    = BattleTracker[c][tierToKey[t]].def    / EXPTracker[c][tierToKey[t]].def;
        const rWIN    = BattleTracker[c][tierToKey[t]].wr   / EXPTracker[c][tierToKey[t]].wr;
        return WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN);
    }
    
    const BattleCount = [
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0}
    ];

    let counter = 0;
    let jsonStats = {
        battles: 0,
        overallWN8: 0,
        avgTier: 0,
        expectedRatios : [
            { 'stat': "rDAMAGE", 'player': 0 },
            { 'stat': "rSPOT", 'player': 0 },
            { 'stat': "rFRAG", 'player': 0 },
            { 'stat': "rDEF", 'player': 0 },
            { 'stat': "rWIN", 'player': 0 }
        ],
        tankWN8: [],
        tankWN8byClassTier: [
            { "Class": "HT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "MT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "TD", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "LT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "SPG", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "Overall", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0}
        ],
    };

    function calculateWN8Distribution() {
        for (let i = 0; i < 6; ++i) {
            for (let j = 1; j < 11; ++j) {
                if (EXPTracker[i][tierToKey[j]].dmg > 0) {
                    jsonStats.tankWN8byClassTier[i][tierToKey[j]] = parseInt(simpleWN8(i, j));
                }
                else {
                    jsonStats.tankWN8byClassTier[i][tierToKey[j]] = '-';
                }
            }
        }
    }

    function calcTrackingVals(row) {
        const battles = row.all.battles;

        const exp = WN8[row.tank_id];
        BattleCount[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]] += battles;

        BattleTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].dmg += row.all.damage_dealt;
        BattleTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].spot += row.all.spotted;
        BattleTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].frag += row.all.frags;
        BattleTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].def += row.all.dropped_capture_points;
        BattleTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].wr += (row.all.wins*100);

        BattleTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].dmg += row.all.damage_dealt;
        BattleTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].spot += row.all.spotted;
        BattleTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].frag += row.all.frags;
        BattleTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].def += row.all.dropped_capture_points;
        BattleTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].wr += (row.all.wins*100);

        EXPTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].dmg += exp.expDamage*battles;
        EXPTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].spot += exp.expSpot*battles;
        EXPTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].frag += exp.expFrag*battles;
        EXPTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].def += exp.expDef*battles;
        EXPTracker[classToIndex[Conversion[tankNames[row.tank_id]['type']]]][tierToKey[tankNames[row.tank_id]['tier']]].wr += exp.expWinRate*battles;

        EXPTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].dmg += exp.expDamage*battles;
        EXPTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].spot += exp.expSpot*battles;
        EXPTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].frag += exp.expFrag*battles;
        EXPTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].def += exp.expDef*battles;
        EXPTracker[5][tierToKey[tankNames[row.tank_id]['tier']]].wr += exp.expWinRate*battles;
    }

    stats.map((row) => {
        if (tankNames[row.tank_id]) {
            const avgDamage = row.all.damage_dealt / row.all.battles;
            const avgDef = row.all.dropped_capture_points / row.all.battles;
            const avgFrag = row.all.frags / row.all.battles;
            const avgSpots = row.all.spotted / row.all.battles;
            const winrate = row.all.wins*100/row.all.battles;
            const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);

            calculateWeighedOverall(row.tank_id, row.all.damage_dealt, row.all.dropped_capture_points, row.all.frags, row.all.spotted, row.all.wins, row.all.battles);
            
            const destroyed = row.all.battles - row.all.survived_battles;

            let MOE = 0;
            if (MOEstats[counter].achievements.marksOnGun) {
                MOE = MOEstats[counter].achievements.marksOnGun;
            }

            jsonStats.avgTier += row.all.battles*tankNames[row.tank_id]['tier'];
            jsonStats.battles += row.all.battles;

            calcTrackingVals(row);

            // <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} alt={row.tank_id}/>,
            // tankNames[row.tank_id]['short_name'],
            // <img src={require(`../assets/flagIcons/${nationConversion[tankNames[row.tank_id]['nation']]}.svg`)} style={{display: 'block', maxheight: '20px', maxWidth: '40px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[0]}/>,
            // tankNames[row.tank_id]['tier'],
            // <img src={require(`../assets/classIcons/${Conversion[tankNames[row.tank_id]['type']]}.png`)} style={{display: 'block', maxheight: '20px', maxWidth: '20px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[1]}/>,

            let vehicleStats = [
                <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} alt={row.tank_id}/>,
                tankNames[row.tank_id]['short_name'],
                nationConversion[tankNames[row.tank_id]['nation']],
                tankNames[row.tank_id]['tier'],
                Conversion[tankNames[row.tank_id]['type']],
                row.all.battles,
                winrate.toFixed(2) + '%',
                parseInt(WN8),
                parseInt(avgDamage),
                (jStat.gamma.cdf( WN8, CDF[row.tank_id].wn8.a, CDF[row.tank_id].wn8.b)*100).toFixed(2),
                (jStat.gamma.cdf( avgDamage, CDF[row.tank_id].dpg.a, CDF[row.tank_id].dpg.b)*100).toFixed(2),
                avgFrag.toFixed(2),
                (row.all.damage_dealt/row.all.damage_received).toFixed(2),
                (row.all.frags/destroyed).toFixed(2),
                parseInt(row.all.battle_avg_xp), 
                row.all.hits_percents + '%',
                avgSpots.toFixed(2),
                row.all.tanking_factor,
                MOE,
                row.mark_of_mastery,
            ];
            if (row.all.battles !== 0) {
                jsonStats.tankWN8.push(vehicleStats);
            }
        }
        ++counter;
        }
    );
    calculateWN8Distribution();
    jsonStats.overallWN8 = calculateOverallWN8();
    jsonStats.avgTier /= jsonStats.battles;
    return jsonStats;
}