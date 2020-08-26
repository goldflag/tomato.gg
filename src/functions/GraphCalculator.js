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

        if (historical.length < index + 1 || row[0] !== historical[index][0]) {
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

function calculateRecents(statsSnapshot, overall) {
    if (statsSnapshot === 'frog') {
        return {
            battles: 0, tier: '-', overallWN8: '-', wins: '-', losses: '-', draws: '-', damage: '-', damage_received: '-', frags: '-', destroyed: '-', survived: '-', spotted: '-', cap: '-', def: '-', xp: '-',
            winrate: '-', lossrate: '-', drawrate: '-', damagerate: '-', fragsrate: '-', survivedrate: '-', spottedrate: '-', caprate: '-', defrate: '-', xprate: '-', KD: '-', DMGratio: '-', tankStats: []
        };
    }
    console.log(overall);
    //the historical snapshot
    let snapshotTanks = statsSnapshot.tankStats;
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
        spotted: overall.spotted - statsSnapshot.spotted,
        cap: overall.cap - statsSnapshot.cap,
        def: overall.def - statsSnapshot.def,
        xp: overall.xp - statsSnapshot.xp,
        tankStats: []
    };

    console.log(overall.tankStats);
    console.log(statsSnapshot.tankStats);

    const overallWN8 = parseInt(calculatePeriodWN8(overall.tankStats, statsSnapshot.tankStats));
    calculatedStats.overallWN8 = overallWN8;
    let index = 0;
    overall.tankStats.map((row) => {
        if (snapshotTanks.length < index + 1 || row[0] !== snapshotTanks[index][0]) {
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
                    // <img src={require(`../assets/tankIcons/${row[0]}.png`)} alt={row[0]}/>,
                    // tankNames[row[0]]['short_name'],
                    // <img src={require(`../assets/flagIcons/${nationConversion[tankNames[row[0]]['nation']]}.svg`)} style={{display: 'block', maxheight: '20px', maxWidth: '40px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[0]}/>,                    
                    // tankNames[row[0]]['tier'],
                    // <img src={require(`../assets/classIcons/${Conversion[tankNames[row[0]]['type']]}.png`)} style={{display: 'block', maxheight: '20px', maxWidth: '20px', marginLeft: 'auto', marginRight: 'auto'}} alt={row[1]}/>,
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

// function calculate1day() { return calculateRecents(compressedRoot) }
// function calculate1week() { return calculateRecents(compressed1day) }
// function calculate30days() { return calculateRecents(compressed1week) }
// function calculate60days() { return calculateRecents(compressed1month) }
// function calculate500battles() { return calculateRecents() }
// function calculate1000battles() { return calculateRecents() }

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

export default function GraphCalculator(stats, OS, overallWN8, avgTier, recentStats) {

    console.log(recentStats);

    const recent24hr = calculateRecents(recentStats.recent24hr, recentStats.overall);
    const recent1week = calculateRecents(recentStats.recent1week, recentStats.overall);
    const recent30days = calculateRecents(recentStats.recent30days, recentStats.overall);
    const recent60days = calculateRecents(recentStats.recent60days, recentStats.overall);
    const recent500 = calculateRecents(recentStats.recent500, recentStats.overall);
    const recent1000 = calculateRecents(recentStats.recent1000, recentStats.overall);
    
    console.log(OS);
    const data = {
        'overallWN8' : overallWN8,
        'overallWinrate' : (OS.wins*100/OS.battles).toFixed(2),
        'recentWN8' : recent1000.overallWN8,
        'recentWinrate' : recent1000.winrate,
        'day1' : recent24hr.tankStats,
        'week1' : recent1week.tankStats,
        'days30' : recent30days.tankStats,
        'days60' : recent60days.tankStats,
        'battles500' : recent500.tankStats,
        'battles1000' : recent1000.tankStats,
        'overallStats' : [
            {'name': 'Battles', 
                'Overall': OS.battles, 
                '24 Hours': recent24hr.battles, 
                '7 Days': recent1week.battles, 
                '30 Days': recent30days.battles, 
                '60 Days': recent60days.battles,
                '500 Games': recent500.battles, 
                '1000 Games': recent1000.battles
            },
            {'name': 'Avg Tier', 
                'Overall': avgTier.toFixed(2), 
                '24 Hours': recent24hr.tier, 
                '7 Days': recent1week.tier, 
                '30 Days': recent30days.tier,  
                '60 Days': recent60days.tier,  
                '500 Games': recent500.tier, 
                '1000 Games': recent1000.tier
            },
            {'name': 'WN8', 
                'Overall': overallWN8, 
                '24 Hours': recent24hr.overallWN8, 
                '7 Days': recent1week.overallWN8, 
                '30 Days': recent30days.overallWN8, 
                '60 Days': recent60days.overallWN8, 
                '500 Games': recent500.overallWN8, 
                '1000 Games': recent1000.overallWN8
            },
            {'name': 'Wins', 
                'Overall': <>{OS.wins}<span style={{float: 'right'}}> {(OS.wins*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{recent24hr.wins}<span style={{ float: 'right', color: clr(recent24hr.winrate, (OS.wins*100/OS.battles))}}>{recent24hr.winrate}%</span></>, 
                '7 Days': <>{recent1week.wins}<span style={{ float: 'right', color: clr(recent1week.winrate, (OS.wins*100/OS.battles))}}>{recent1week.winrate}%</span></>, 
                '30 Days': <>{recent30days.wins}<span style={{ float: 'right', color: clr(recent30days.winrate, (OS.wins*100/OS.battles))}}>{recent30days.winrate}%</span></>, 
                '60 Days': <>{recent60days.wins}<span style={{ float: 'right', color: clr(recent60days.winrate, (OS.wins*100/OS.battles))}}>{recent60days.winrate}%</span></>, 
                '500 Games': <>{recent500.wins}<span style={{ float: 'right', color: clr(recent500.winrate, (OS.wins*100/OS.battles))}}>{recent500.winrate}%</span></>, 
                '1000 Games': <>{recent1000.wins}<span style={{ float: 'right', color: clr(recent1000.winrate, (OS.wins*100/OS.battles))}}>{recent1000.winrate}%</span></>
            },
            {'name': 'Losses', 
                'Overall': <>{OS.losses} <span style={{float: 'right'}}> {(OS.losses*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{recent24hr.losses}<span style={{ float: 'right', color: clr(recent24hr.lossrate, (OS.losses*100/OS.battles), true)}}>{recent24hr.lossrate}%</span></>, 
                '7 Days': <>{recent1week.losses}<span style={{ float: 'right', color: clr(recent1week.lossrate, (OS.losses*100/OS.battles), true)}}>{recent1week.lossrate}%</span></>, 
                '30 Days': <>{recent30days.losses}<span style={{ float: 'right', color: clr(recent30days.lossrate, (OS.losses*100/OS.battles), true)}}>{recent30days.lossrate}%</span></>, 
                '60 Days': <>{recent60days.losses}<span style={{ float: 'right', color: clr(recent60days.lossrate, (OS.losses*100/OS.battles), true)}}>{recent60days.lossrate}%</span></>, 
                '500 Games': <>{recent500.losses}<span style={{ float: 'right', color: clr(recent500.lossrate, (OS.losses*100/OS.battles), true)}}>{recent500.lossrate}%</span></>, 
                '1000 Games': <>{recent1000.losses}<span style={{ float: 'right', color: clr(recent1000.lossrate, (OS.losses*100/OS.battles), true)}}>{recent1000.lossrate}%</span></>
            },
            {'name': 'Draws', 
                'Overall': <>{OS.battles-OS.wins-OS.losses} <span style={{float: 'right'}}> {((OS.battles-OS.wins-OS.losses)*100/OS.losses).toFixed(2)}%</span></>, 
                '24 Hours': <>{recent24hr.draws}<span style={{ float: 'right', color: clr(recent24hr.drawrate, (OS.draws*100/OS.battles), true)}}>{recent24hr.drawrate}%</span></>, 
                '7 Days': <>{recent1week.draws}<span style={{ float: 'right', color: clr(recent1week.drawrate, (OS.draws*100/OS.battles), true)}}>{recent1week.drawrate}%</span></>, 
                '30 Days': <>{recent30days.draws}<span style={{ float: 'right', color: clr(recent30days.drawrate, (OS.draws*100/OS.battles), true)}}>{recent30days.drawrate}%</span></>,  
                '60 Days': <>{recent60days.draws}<span style={{ float: 'right', color: clr(recent60days.drawrate, (OS.draws*100/OS.battles), true)}}>{recent60days.drawrate}%</span></>,  
                '500 Games': <>{recent500.draws}<span style={{ float: 'right', color: clr(recent500.drawrate, (OS.draws*100/OS.battles), true)}}>{recent500.drawrate}%</span></>,  
                '1000 Games': <>{recent1000.draws}<span style={{ float: 'right', color: clr(recent1000.drawrate, (OS.draws*100/OS.battles), true)}}>{recent1000.drawrate}%</span></>
            },
            {'name': 'Damage', 
                'Overall': <>{OS.damage_dealt} <span style={{float: 'right'}}>{parseInt(OS.damage_dealt/OS.battles)}</span></>, 
                '24 Hours': <>{recent24hr.damage}<span style={{ float: 'right', color: clr(recent24hr.damagerate, (OS.damage_dealt/OS.battles))}}>{recent24hr.damagerate}</span></>, 
                '7 Days': <>{recent1week.damage}<span style={{ float: 'right', color: clr(recent1week.damagerate, (OS.damage_dealt/OS.battles))}}>{recent1week.damagerate}</span></>, 
                '30 Days': <>{recent30days.damage}<span style={{ float: 'right', color: clr(recent30days.damagerate, (OS.damage_dealt/OS.battles))}}>{recent30days.damagerate}</span></>, 
                '60 Days': <>{recent60days.damage}<span style={{ float: 'right', color: clr(recent60days.damagerate, (OS.damage_dealt/OS.battles))}}>{recent60days.damagerate}</span></>, 
                '500 Games': <>{recent500.damage}<span style={{ float: 'right', color: clr(recent500.damagerate, (OS.damage_dealt/OS.battles))}}>{recent500.damagerate}</span></>, 
                '1000 Games': <>{recent1000.damage}<span style={{ float: 'right', color: clr(recent1000.damagerate, (OS.damage_dealt/OS.battles))}}>{recent1000.damagerate}</span></>
            },
            {'name': 'Frags', 
                'Overall': <>{OS.frags} <span style={{float: 'right'}}>{(OS.frags/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{recent24hr.frags}<span style={{ float: 'right', color: clr(recent24hr.fragsrate, (OS.frags/OS.battles))}}>{recent24hr.fragsrate}</span></>, 
                '7 Days': <>{recent1week.frags}<span style={{ float: 'right', color: clr(recent1week.fragsrate, (OS.frags/OS.battles))}}>{recent1week.fragsrate}</span></>, 
                '30 Days': <>{recent30days.frags}<span style={{ float: 'right', color: clr(recent30days.fragsrate, (OS.frags/OS.battles))}}>{recent30days.fragsrate}</span></>, 
                '60 Days': <>{recent60days.frags}<span style={{ float: 'right', color: clr(recent60days.fragsrate, (OS.frags/OS.battles))}}>{recent60days.fragsrate}</span></>, 
                '500 Games': <>{recent500.frags}<span style={{ float: 'right', color: clr(recent500.fragsrate, (OS.frags/OS.battles))}}>{recent500.fragsrate}</span></>,  
                '1000 Games': <>{recent1000.frags}<span style={{ float: 'right', color: clr(recent1000.fragsrate, (OS.frags/OS.battles))}}>{recent1000.fragsrate}</span></>
            },
            {'name': 'K/D Ratio', 
                'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), 
                '24 Hours': <><span style={{ color: clr(recent24hr.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent24hr.KD}</span></>, 
                '7 Days': <><span style={{ color: clr(recent1week.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent1week.KD}</span></>, 
                '30 Days': <><span style={{ color: clr(recent30days.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent30days.KD}</span></>, 
                '60 Days': <><span style={{ color: clr(recent60days.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent60days.KD}</span></>, 
                '500 Games': <><span style={{ color: clr(recent500.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent500.KD}</span></>, 
                '1000 Games': <><span style={{ color: clr(recent1000.KD, (OS.frags/(OS.battles - OS.survived_battles)))}}>{recent1000.KD}</span></>
            },
            {'name': 'Damage Ratio', 
                'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), 
                '24 Hours': <><span style={{ color: clr(recent24hr.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent24hr.DMGratio}</span></>, 
                '7 Days': <><span style={{ color: clr(recent1week.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent1week.DMGratio}</span></>, 
                '30 Days': <><span style={{ color: clr(recent30days.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent30days.DMGratio}</span></>, 
                '60 Days': <><span style={{ color: clr(recent60days.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent60days.DMGratio}</span></>, 
                '500 Games': <><span style={{ color: clr(recent500.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent500.DMGratio}</span></>, 
                '1000 Games': <><span style={{ color: clr(recent1000.DMGratio, (OS.damage_dealt/(OS.damage_received)))}}>{recent1000.DMGratio}</span></>
            },
            {'name': 'Survived', 
                'Overall': <>{OS.survived_battles} <span style={{float: 'right'}}>{(OS.survived_battles*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{recent24hr.survived}<span style={{ float: 'right', color: clr(recent24hr.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent24hr.survivedrate}%</span></>, 
                '7 Days': <>{recent1week.survived}<span style={{ float: 'right', color: clr(recent1week.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent1week.survivedrate}%</span></>, 
                '30 Days': <>{recent30days.survived}<span style={{ float: 'right', color: clr(recent30days.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent30days.survivedrate}%</span></>,
                '60 Days': <>{recent60days.survived}<span style={{ float: 'right', color: clr(recent60days.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent60days.survivedrate}%</span></>,
                '500 Games': <>{recent500.survived}<span style={{ float: 'right', color: clr(recent500.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent500.survivedrate}%</span></>, 
                '1000 Games': <>{recent1000.survived}<span style={{ float: 'right', color: clr(recent1000.survivedrate, (OS.survived_battles*100/(OS.battles)))}}>{recent1000.survivedrate}%</span></>
            },
            {'name': 'Detected', 
                'Overall': <>{OS.spotted} <span style={{float: 'right'}}>{(OS.spotted/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{recent24hr.spotted}<span style={{ float: 'right', color: clr(recent24hr.spottedrate, (OS.spotted/(OS.battles)))}}>{recent24hr.spottedrate}</span></>, 
                '7 Days': <>{recent1week.spotted}<span style={{ float: 'right', color: clr(recent1week.spottedrate, (OS.spotted/(OS.battles)))}}>{recent1week.spottedrate}</span></>, 
                '30 Days': <>{recent30days.spotted}<span style={{ float: 'right', color: clr(recent30days.spottedrate, (OS.spotted/(OS.battles)))}}>{recent30days.spottedrate}</span></>,  
                '60 Days': <>{recent60days.spotted}<span style={{ float: 'right', color: clr(recent60days.spottedrate, (OS.spotted/(OS.battles)))}}>{recent60days.spottedrate}</span></>,
                '500 Games': <>{recent500.spotted}<span style={{ float: 'right', color: clr(recent500.spottedrate, (OS.spotted/(OS.battles)))}}>{recent500.spottedrate}</span></>, 
                '1000 Games': <>{recent1000.spotted}<span style={{ float: 'right', color: clr(recent1000.spottedrate, (OS.spotted/(OS.battles)))}}>{recent1000.spottedrate}</span></>
            },
            {'name': 'Cap Points', 
                'Overall': <>{OS.capture_points} <span style={{float: 'right'}}>{(OS.capture_points/OS.battles).toFixed(2)}</span></> , 
                '24 Hours': <>{recent24hr.cap}<span style={{ float: 'right', color: clr(recent24hr.caprate, (OS.capture_points/(OS.battles)))}}>{recent24hr.caprate}</span></>, 
                '7 Days': <>{recent1week.cap}<span style={{ float: 'right', color: clr(recent1week.caprate, (OS.capture_points/(OS.battles)))}}>{recent1week.caprate}</span></>, 
                '30 Days': <>{recent30days.cap}<span style={{ float: 'right', color: clr(recent30days.caprate, (OS.capture_points/(OS.battles)) )}}>{recent30days.caprate}</span></>, 
                '60 Days': <>{recent60days.cap}<span style={{ float: 'right', color: clr(recent60days.caprate, (OS.capture_points/(OS.battles)))}}>{recent60days.caprate}</span></>, 
                '500 Games': <>{recent500.cap}<span style={{ float: 'right', color: clr(recent500.caprate, (OS.capture_points/(OS.battles)))}}>{recent500.caprate}</span></>,
                '1000 Games': <>{recent1000.cap}<span style={{ float: 'right', color: clr(recent1000.caprate, (OS.capture_points/(OS.battles)))}}>{recent1000.caprate}</span></>
            },
            {'name': 'Def Points', 
                'Overall': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{recent24hr.def}<span style={{ float: 'right', color: clr(recent24hr.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent24hr.defrate}</span></>, 
                '7 Days': <>{recent1week.def}<span style={{ float: 'right', color: clr(recent1week.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent1week.defrate}</span></>, 
                '30 Days': <>{recent30days.def}<span style={{ float: 'right', color: clr(recent30days.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent30days.defrate}</span></>, 
                '60 Days': <>{recent60days.def}<span style={{ float: 'right', color: clr(recent60days.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent60days.defrate}</span></>,
                '500 Games': <>{recent500.def}<span style={{ float: 'right', color: clr(recent500.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent500.defrate}</span></>,
                '1000 Games': <>{recent1000.def}<span style={{ float: 'right', color: clr(recent1000.defrate, (OS.dropped_capture_points/(OS.battles)))}}>{recent1000.defrate}</span></>
            },
            {'name': 'Experience', 
                'Overall': <>{OS.battle_avg_xp} <span style={{float: 'right'}}>{(OS.battle_avg_xp/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{recent24hr.xp}<span style={{ float: 'right', color: clr(recent24hr.xprate, (OS.battle_avg_xp))}}>{recent24hr.xprate}</span></>, 
                '7 Days': <>{recent1week.xp}<span style={{ float: 'right', color: clr(recent1week.xprate, (OS.battle_avg_xp))}}>{recent1week.xprate}</span></>,
                '30 Days': <>{recent30days.xp}<span style={{ float: 'right', color: clr(recent30days.xprate, (OS.battle_avg_xp))}}>{recent30days.xprate}</span></>, 
                '60 Days': <>{recent60days.xp}<span style={{ float: 'right', color: clr(recent60days.xprate, (OS.battle_avg_xp))}}>{recent60days.xprate}</span></>, 
                '500 Games': <>{recent500.xp}<span style={{ float: 'right', color: clr(recent500.xprate, (OS.battle_avg_xp))}}>{recent500.xprate}</span></>,  
                '1000 Games': <>{recent1000.xp}<span style={{ float: 'right', color: clr(recent1000.xprate, (OS.battle_avg_xp))}}>{recent1000.xprate}</span></>
            },
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