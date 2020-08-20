import React from 'react';
import TankStats from './TankStatsCalculator';
import zeroBattles from './GraphFunctions';
import WN8 from '../data/wn8';
import tankNames from '../data/tankNames';
import nationConversion from '../data/nationConversion';
import compressedRoot2 from '../data/compressedRoot2';

import compressedRoot from '../data/compressedRoot';
import compressed1month from '../data/compressed1month';
import compressed1week from '../data/compressed1week';
import compressed1day from '../data/compressed1day';


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

function calculatePeriodWN8(overall, historical) {
    let weighedExpDamage = 0, weighedExpSpots = 0, weighedExpFrag = 0, weighedExpDef = 0, weighedExpWinrate = 0;
    let weighedDamage = 0, weighedSpots = 0, weighedFrag = 0, weighedDef = 0, weighedWinrate = 0;

    let index = 0;
    overall.map((row) => {
        const exp = WN8[row[0]];
        if (row[0] !== historical[index][0]) {
            weighedExpDamage += row[1]*exp.expDamage;
            weighedExpSpots += row[1]*exp.expSpot;
            weighedExpFrag += row[1]*exp.expFrag;    
            weighedExpDef += row[1]*exp.expDef;    
            weighedExpWinrate += row[1]*exp.expWinRate;
        
            weighedDamage += row[2];
            weighedSpots += row[5];
            weighedFrag += row[4];
            weighedDef += row[6];
            weighedWinrate += 100*row[3];
        }
        else {
            if (row[1] !== historical[index][1]) {
                const battlesDiff = row[1] - historical[index][1];
                weighedExpDamage += battlesDiff*exp.expDamage;
                weighedExpSpots += battlesDiff*exp.expSpot;
                weighedExpFrag += battlesDiff*exp.expFrag;    
                weighedExpDef += battlesDiff*exp.expDef;    
                weighedExpWinrate += battlesDiff*exp.expWinRate;

                weighedDamage += row[2] - historical[index][2];
                weighedSpots += row[5] - historical[index][5];
                weighedFrag += row[4] - historical[index][4];
                weighedDef += row[6] - historical[index][6];
                weighedWinrate += 100*row[3] - historical[index][3];
            }
            ++index;
        }
    });
    const rDAMAGE = weighedDamage / weighedExpDamage;
    const rSPOT   = weighedSpots  / weighedExpSpots;
    const rFRAG   = weighedFrag   / weighedExpFrag;
    const rDEF    = weighedDef    / weighedExpDef;
    const rWIN    = weighedWinrate   / weighedExpWinrate;
    return WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN);
}

function calculateRecents(statsSnapshot) {
    //the updated overall stats
    let overall = compressedRoot2;
    console.log(overall);
    //the historical snapshot
    let snapshotTanks = statsSnapshot.tankStats;
    let index = 0;
    let calculatedStats = {
        battles: 0,
        tier: overall.tier - statsSnapshot.tier,
        overallWN8: 0,
        wins: overall.wins - statsSnapshot.wins,
        losses: overall.losses - statsSnapshot.losses,
        draws: overall.draws - statsSnapshot.draws,
        damage: overall.damage - statsSnapshot.damage,
        damage_received: overall.damageR - statsSnapshot.damageR,
        frags: overall.frags - statsSnapshot.frags,
        destroyed: overall.deaths - statsSnapshot.deaths,
        survived: (overall.battles - overall.deaths) - (statsSnapshot.battles - statsSnapshot.deaths),
        spotted: 0,
        cap: overall.cap - statsSnapshot.cap,
        def: overall.def - statsSnapshot.def,
        xp: overall.xp - statsSnapshot.xp,
        tankStats: []
    };

    const overallWN8 = parseInt(calculatePeriodWN8(overall.tankStats, statsSnapshot.tankStats));

    calculatedStats.overallWN8 = overallWN8;

    overall.tankStats.map((row) => {
        if (row[0] !== snapshotTanks[index][0]) {
            const avgDamage = row[2] / row[1];
            const avgDef = row[6] / row[1];
            const avgFrag = row[4] / row[1];
            const avgSpots = row[5] / row[1];
            const winrate = row[3] * 100 / row[1];
            const WN8 = calculateWN8(row[0], avgDamage, avgDef, avgFrag, avgSpots, winrate);
            const destroyed = row[1] - row[7];

            let vehicleRecentStats = [
                <img src={require(`../assets/tankIcons/${row[0]}.png`)} alt={row[0]}/>,
                tankNames[row[0]]['short_name'],
                nationConversion[tankNames[row[0]]['nation']],
                tankNames[row[0]]['tier'],
                Conversion[tankNames[row[0]]['type']],
                row[1],
                (winrate).toFixed(2) + '%',
                parseInt(WN8),
                parseInt(avgDamage),
                (avgFrag).toFixed(2),
                (row[2]/row[8]).toFixed(2),
                (row[4]/destroyed).toFixed(2),
                avgSpots.toFixed(2),
            ];
            calculatedStats.tankStats.push(vehicleRecentStats);
            calculatedStats.battles += row[1];
        }
        else {
            if (row[1] !== snapshotTanks[index][1]) {
                const battlesDiff = row[1] - snapshotTanks[index][1];
                const dmgDiff = row[2] - snapshotTanks[index][2];
                const defDiff = row[6] - snapshotTanks[index][6];
                const fragDiff = row[4] - snapshotTanks[index][4];
                const spotsDiff = row[5] - snapshotTanks[index][5];
                const winsDiff = row[3] - snapshotTanks[index][3];

                const avgDamage = dmgDiff / battlesDiff;
                const avgDef = defDiff / battlesDiff;
                const avgFrag = fragDiff / battlesDiff;
                const avgSpots = spotsDiff / battlesDiff;
                const winrate = winsDiff * 100 / battlesDiff;
                const WN8 = calculateWN8(row[0], avgDamage, avgDef, avgFrag, avgSpots, winrate);

                const destroyedDiff = (row[1] - row[7]) - (snapshotTanks[index][1] - snapshotTanks[index][7]);

                let DMGRatio;
                if (row[8] - snapshotTanks[index][8] === 0) { DMGRatio = 'No Damage Recieved' }
                else { DMGRatio = ((row[2] - snapshotTanks[index][2])/(row[8] - snapshotTanks[index][8])).toFixed(2) }
                let KDRatio;
                if (destroyedDiff === 0) { KDRatio = 'No Deaths' }
                else { KDRatio = (fragDiff/destroyedDiff).toFixed(2) }

                let vehicleRecentStats = [
                    <img src={require(`../assets/tankIcons/${row[0]}.png`)} alt={row[0]}/>,
                    tankNames[row[0]]['short_name'],
                    nationConversion[tankNames[row[0]]['nation']],
                    tankNames[row[0]]['tier'],
                    Conversion[tankNames[row[0]]['type']],
                    battlesDiff,
                    (winrate).toFixed(2) + '%',
                    parseInt(WN8),
                    parseInt(avgDamage),
                    (avgFrag).toFixed(2),
                    DMGRatio,
                    KDRatio,
                    avgSpots.toFixed(2),
                ];
                calculatedStats.tankStats.push(vehicleRecentStats);
                calculatedStats.battles += battlesDiff;

            }
            ++index;
        }
    });
    // calculatedStats.tier = calculatedStats.tier / calculatedStats.battles;

    calculatedStats = zeroBattles(calculatedStats);

    return calculatedStats;
}

function calculate1day() { return calculateRecents(compressedRoot) }

function calculate1week() { return calculateRecents(compressed1day) }

function calculate30days() { return calculateRecents(compressed1week) }

function calculate60days() { return calculateRecents(compressed1month) }

function calculate500battles() { return calculateRecents() }

function calculate1000battles() { return calculateRecents() }

function NationDistCalculator(data) {
    const NewNationDist = [
        { "id": "USA", "value": 1 },
        { "id": "USSR", "value": 1 },
        { "id": "France", "value": 1},
        { "id": "Germany", "value": 1 },
        { "id": "UK", "value": 1 },
        { "id": "China", "value": 1 },
        { "id": "Czech", "value": 1 },
        { "id": "Sweden", "value": 1 },
        { "id": "Poland", "value": 1 },
        { "id": "Italy", "value": 1 },
        { "id": "Japan", "value": 1 }
    ];

    NewNationDist[0].value = data.NationDist.USA;
    NewNationDist[1].value = data.NationDist.USSR;
    NewNationDist[2].value = data.NationDist.France;
    NewNationDist[3].value = data.NationDist.Germany;
    NewNationDist[4].value = data.NationDist.UK;
    NewNationDist[5].value = data.NationDist.China;
    NewNationDist[6].value = data.NationDist.Czech;
    NewNationDist[7].value = data.NationDist.Sweden;
    NewNationDist[8].value = data.NationDist.Poland;
    NewNationDist[9].value = data.NationDist.Italy;
    NewNationDist[10].value = data.NationDist.Japan;
    data.NationDist = NewNationDist;
}

function ClassDistCalculator(data) {
    const NewClassDist = [
        { "id": "HT", "value": 1 },
        { "id": "MT", "value": 1 },
        { "id": "TD", "value": 1 },
        { "id": "LT", "value": 1 },
        { "id": "SPG", "value": 1 },
    ];

    NewClassDist[0].value = data.ClassDist.HT;
    NewClassDist[1].value = data.ClassDist.MT;
    NewClassDist[2].value = data.ClassDist.TD;
    NewClassDist[3].value = data.ClassDist.LT;
    NewClassDist[4].value = data.ClassDist.SPG;
    data.ClassDist = NewClassDist;
}

function clr(recent, overall, flipped) {
    if (recent === '-') return 'rgb(50,50,50)';
    if (flipped) {
        if (overall < recent) return 'red';
        else return 'green';
    }
    if (overall > recent) return 'red';
    else return 'green';
}

export default function GraphCalculator(stats, OS, overallWN8, avgTier) {

    const day1stats = calculate1day();
    const weekstats = calculate1week();
    const day30stats = calculate30days();
    const day60stats = calculate60days();

    console.log(OS);
    const data = {
        'overallWN8' : overallWN8,
        'day1' : day1stats.tankStats,
        'week1' : weekstats.tankStats,
        'days30' : day30stats.tankStats,
        'days60' : day60stats.tankStats,
        'battles500' : [],
        'battles1000' : [],
        'overallStats' : [
            {'name': 'Battles', 
                'Overall': OS.battles, 
                '24 Hours': day1stats.battles, 
                '7 Days': weekstats.battles, 
                '30 Days': day30stats.battles, 
                '60 Days': day60stats.battles,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (190000 > OS.battles ? 'green' : 'red')}}> 190000 </span>},
            {'name': 'Avg Tier', 
                'Overall': avgTier.toFixed(2), 
                '24 Hours': day1stats.tier, 
                '7 Days': weekstats.tier, 
                '30 Days': day30stats.tier,  
                '60 Days': day60stats.tier,  
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (9.4 > 7.6 ? 'green' : 'red')}}> 9.6 </span>},
            {'name': 'WN8', 
                'Overall': overallWN8, 
                '24 Hours': day1stats.overallWN8, 
                '7 Days': weekstats.overallWN8, 
                '30 Days': day30stats.overallWN8, 
                '60 Days': day60stats.overallWN8, 
                '500 Games': parseInt(0), 
                '1000 Games': parseInt(0)},
            {'name': 'Wins', 
                'Overall': <>{OS.wins}<span style={{float: 'right'}}> {(OS.wins*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.wins}<span style={{ float: 'right', color: clr(day1stats.winrate, (OS.wins*100/OS.battles))}}>{day1stats.winrate}%</span></>, 
                '7 Days': <>{weekstats.wins}<span style={{ float: 'right', color: clr(weekstats.winrate, (OS.wins*100/OS.battles))}}>{weekstats.winrate}%</span></>, 
                '30 Days': <>{day30stats.wins}<span style={{ float: 'right', color: clr(day30stats.winrate, (OS.wins*100/OS.battles))}}>{day30stats.winrate}%</span></>, 
                '60 Days': <>{day60stats.wins}<span style={{ float: 'right', color: clr(day60stats.winrate, (OS.wins*100/OS.battles))}}>{day60stats.winrate}%</span></>, 
                '500 Games': 0, 
                '1000 Games': <>641<span style={{ float: 'right', color: (0.641 > 0.54 ? 'green' : 'red')}}> 64% </span></>},
            {'name': 'Losses', 
                'Overall': <>{OS.losses} <span style={{float: 'right'}}> {(OS.losses*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.losses}<span style={{ float: 'right', color: clr(day1stats.lossrate, (OS.losses*100/OS.battles), true)}}>{day1stats.lossrate}%</span></>, 
                '7 Days': <>{weekstats.losses}<span style={{ float: 'right', color: clr(weekstats.lossrate, (OS.losses*100/OS.battles), true)}}>{weekstats.lossrate}%</span></>, 
                '30 Days': <>{day30stats.losses}<span style={{ float: 'right', color: clr(day30stats.lossrate, (OS.losses*100/OS.battles), true)}}>{day30stats.lossrate}%</span></>, 
                '60 Days': <>{day60stats.losses}<span style={{ float: 'right', color: clr(day60stats.lossrate, (OS.losses*100/OS.battles), true)}}>{day60stats.lossrate}%</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Draws', 
                'Overall': <>{OS.battles-OS.wins-OS.losses} <span style={{float: 'right'}}> {((OS.battles-OS.wins-OS.losses)*100/OS.losses).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.draws}<span style={{ float: 'right', color: clr(day1stats.drawrate, (OS.draws*100/OS.battles), true)}}>{day1stats.drawrate}%</span></>, 
                '7 Days': <>{weekstats.draws}<span style={{ float: 'right', color: clr(weekstats.drawrate, (OS.draws*100/OS.battles), true)}}>{weekstats.drawrate}%</span></>, 
                '30 Days': <>{day30stats.draws}<span style={{ float: 'right', color: clr(day30stats.drawrate, (OS.draws*100/OS.battles), true)}}>{day30stats.drawrate}%</span></>,  
                '60 Days': <>{day60stats.draws}<span style={{ float: 'right', color: clr(day60stats.drawrate, (OS.draws*100/OS.battles), true)}}>{day60stats.drawrate}%</span></>,  
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage', 
                'Overall': <>{OS.damage_dealt} <span style={{float: 'right'}}>{parseInt(OS.damage_dealt/OS.battles)}</span></>, 
                '24 Hours': <>{day1stats.damage}<span style={{ float: 'right', color: clr(day1stats.damagerate, (OS.damage_dealt/OS.battles))}}>{day1stats.damagerate}</span></>, 
                '7 Days': <>{weekstats.damage}<span style={{ float: 'right', color: clr(weekstats.damagerate, (OS.damage_dealt/OS.battles))}}>{weekstats.damagerate}</span></>, 
                '30 Days': <>{day30stats.damage}<span style={{ float: 'right', color: clr(day30stats.damagerate, (OS.damage_dealt/OS.battles))}}>{day30stats.damagerate}</span></>, 
                '60 Days': <>{day60stats.damage}<span style={{ float: 'right', color: clr(day60stats.damagerate, (OS.damage_dealt/OS.battles))}}>{day60stats.damagerate}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Frags', 
                'Overall': <>{OS.frags} <span style={{float: 'right'}}>{(OS.frags/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.frags}<span style={{ float: 'right', color: clr(day1stats.fragsrate, (OS.frags/OS.battles))}}>{day1stats.fragsrate}</span></>, 
                '7 Days': <>{weekstats.frags}<span style={{ float: 'right', color: clr(weekstats.fragsrate, (OS.frags/OS.battles))}}>{weekstats.fragsrate}</span></>, 
                '30 Days': <>{day30stats.frags}<span style={{ float: 'right', color: clr(day30stats.fragsrate, (OS.frags/OS.battles))}}>{day30stats.fragsrate}</span></>, 
                '60 Days': <>{day60stats.frags}<span style={{ float: 'right', color: clr(day60stats.fragsrate, (OS.frags/OS.battles))}}>{day60stats.fragsrate}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'K/D Ratio', 
                'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), 
                '24 Hours': <><span style={{ color: clr(day1stats.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{day1stats.KD}</span></>, 
                '7 Days': <><span style={{ color: clr(weekstats.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{weekstats.KD}</span></>, 
                '30 Days': <><span style={{ color: clr(day30stats.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{day30stats.KD}</span></>, 
                '60 Days': <><span style={{ color: clr(day60stats.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{day60stats.KD}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage Ratio', 
                'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), 
                '24 Hours': <><span style={{ color: clr(day1stats.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{day1stats.DMGratio}</span></>, 
                '7 Days': <><span style={{ color: clr(weekstats.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{weekstats.DMGratio}</span></>, 
                '30 Days': <><span style={{ color: clr(day30stats.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{day30stats.DMGratio}</span></>, 
                '60 Days': <><span style={{ color: clr(day60stats.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{day60stats.DMGratio}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Survived', 
                'Overall': <>{OS.survived_battles} <span style={{float: 'right'}}>{(OS.survived_battles*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.survived}<span style={{ float: 'right', color: clr(day1stats.survivedrate, (OS.survived_battles/(OS.battles)))}}>{day1stats.survivedrate}%</span></>, 
                '7 Days': <>{weekstats.survived}<span style={{ float: 'right', color: clr(weekstats.survivedrate, (OS.survived_battles/(OS.battles)))}}>{weekstats.survivedrate}%</span></>, 
                '30 Days': <>{day30stats.survived}<span style={{ float: 'right', color: clr(day30stats.survivedrate, (OS.survived_battles/(OS.battles)))}}>{day30stats.survivedrate}%</span></>,
                '60 Days': <>{day60stats.survived}<span style={{ float: 'right', color: clr(day60stats.survivedrate, (OS.survived_battles/(OS.battles)))}}>{day60stats.survivedrate}%</span></>,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Detected', 
                'Overall': <>{OS.spotted} <span style={{float: 'right'}}>{(OS.spotted/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.spotted}<span style={{ float: 'right', color: clr(day1stats.spottedrate, (OS.spotted/(OS.battles)))}}>{day1stats.spottedrate}</span></>, 
                '7 Days': <>{weekstats.spotted}<span style={{ float: 'right', color: clr(weekstats.spottedrate, (OS.spotted/(OS.battles)))}}>{weekstats.spottedrate}</span></>, 
                '30 Days': <>{day30stats.spotted}<span style={{ float: 'right', color: clr(day30stats.spottedrate, (OS.spotted/(OS.battles)))}}>{day30stats.spottedrate}</span></>,  
                '60 Days': <>{day60stats.spotted}<span style={{ float: 'right', color: clr(day60stats.spottedrate, (OS.spotted/(OS.battles)))}}>{day60stats.spottedrate}</span></>,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Cap Points', 
                'Overall': <>{OS.capture_points} <span style={{float: 'right'}}>{(OS.capture_points/OS.battles).toFixed(2)}</span></> , 
                '24 Hours': <>{day1stats.cap}<span style={{ float: 'right', color: clr(day1stats.caprate, (OS.capture_points/(OS.battles)))}}>{day1stats.caprate}</span></>, 
                '7 Days': <>{weekstats.cap}<span style={{ float: 'right', color: clr(weekstats.caprate, (OS.capture_points/(OS.battles)))}}>{weekstats.caprate}</span></>, 
                '30 Days': <>{day30stats.cap}<span style={{ float: 'right', color: clr(day30stats.caprate, (OS.capture_points/(OS.battles)) )}}>{day30stats.caprate}</span></>, 
                '60 Days': <>{day60stats.cap}<span style={{ float: 'right', color: clr(day60stats.caprate, (OS.capture_points/(OS.battles)))}}>{day60stats.caprate}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Def Points', 
                'Overall': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.def}<span style={{ float: 'right', color: clr(day1stats.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{day1stats.defrate}</span></>, 
                '7 Days': <>{weekstats.def}<span style={{ float: 'right', color: clr(weekstats.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{weekstats.defrate}</span></>, 
                '30 Days': <>{day30stats.def}<span style={{ float: 'right', color: clr(day30stats.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{day30stats.defrate}</span></>, 
                '60 Days': <>{day60stats.def}<span style={{ float: 'right', color: clr(day60stats.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{day60stats.defrate}</span></>,
                '500 Games': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '1000 Games': 1},
            {'name': 'Experience', 
                'Overall': <>{OS.battle_avg_xp} <span style={{float: 'right'}}>{(OS.battle_avg_xp/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.xp}<span style={{ float: 'right', color: clr(day1stats.xprate, (OS.battle_avg_xp))}}>{day1stats.xprate}</span></>, 
                '7 Days': <>{weekstats.xp}<span style={{ float: 'right', color: clr(weekstats.xprate, (OS.battle_avg_xp))}}>{weekstats.xprate}</span></>,
                '30 Days': <>{day30stats.xp}<span style={{ float: 'right', color: clr(day30stats.xprate, (OS.battle_avg_xp))}}>{day30stats.xprate}</span></>, 
                '60 Days': <>{day60stats.xp}<span style={{ float: 'right', color: clr(day60stats.xprate, (OS.battle_avg_xp))}}>{day60stats.xprate}</span></>, 
                '500 Games': 0, 
                '1000 Games': 0},
        ],
        'tierDist' : [
            { "Tier": "I", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "II", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "III", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "IV", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "V", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VI", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VII", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VIII", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "IX", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "X", "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        ],
        'tierMoeDist' : [
            { "Tier": "V", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
            { "Tier": "VI", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
            { "Tier": "VII", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
            { "Tier": "VIII", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
            { "Tier": "IX", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
            { "Tier": "X", "0" : 0, "1" : 0, "2" : 0, "3" : 0},
        ],
        'tierMasteryDist' : [
            { "Tier": "I", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "II", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "III", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "IV", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "V", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "VI", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "VII", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "VIII", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "IX", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
            { "Tier": "X", "None": 0, "3rd": 0, "2nd": 0, "1st": 0, "Ace": 0 },
        ],
        'NationDist' : {
            "USA": 0, "USSR": 0, "France": 0, "Germany": 0, "UK": 0, "China": 0, "Japan": 0, "Czech": 0, "Sweden": 0, "Poland": 0, "Italy": 0
        },
        'ClassDist' : {
            "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0,
        }
    };

    const numToMastery = { 0 : "None", 1 : "3rd", 2 : "2nd", 3 : "1st", 4 : "Ace" };
    stats.map((row) => {
        data.tierDist[row[3] - 1][row[4]] += row[5];
        if (row[3] > 4) {
            data.tierMoeDist[row[3] - 5][row[16]] += 1;
        }
        data.tierMasteryDist[row[3] - 1][numToMastery[row[17]]] += 1;
        data.NationDist[row[2]] += row[5];
        data.ClassDist[row[4]] += row[5];
    });

    NationDistCalculator(data);
    ClassDistCalculator(data);

    console.log(data);
    return data;
}