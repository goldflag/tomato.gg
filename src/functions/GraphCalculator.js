import React from 'react';
import TankStats from './TankStatsCalculator';
import WN8 from '../data/wn8';
import tankNames from '../data/tankNames';
import nationConversion from '../data/nationConversion';

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
    let overall = compressedRoot;
    //the historical snapshot
    let snapshotTanks = statsSnapshot.tankStats;
    let index = 0;
    let calculatedStats = {
        battles: 0,
        tier: compressedRoot.tier - statsSnapshot.tier,
        overallWN8: 0,
        wins: compressedRoot.wins - statsSnapshot.wins,
        losses: compressedRoot.losses - statsSnapshot.losses,
        draws: compressedRoot.draws - statsSnapshot.draws,
        damage: compressedRoot.damage - statsSnapshot.damage,
        damage_received: compressedRoot.damageR - statsSnapshot.damageR,
        frags: compressedRoot.frags - statsSnapshot.frags,
        destroyed: compressedRoot.deaths - statsSnapshot.deaths,
        survived: (compressedRoot.battles - compressedRoot.deaths) - (statsSnapshot.battles - statsSnapshot.deaths),
        spotted: 0,
        cap: compressedRoot.cap - statsSnapshot.cap,
        def: compressedRoot.def - statsSnapshot.def,
        xp: compressedRoot.xp - statsSnapshot.xp,
        tankStats: []
    };

    const overallWN8 =  calculatePeriodWN8(overall.tankStats, statsSnapshot.tankStats);

    calculatedStats.overallWN8 = overallWN8;

    overall.tankStats.map((row) => {
        if (row[0] !== snapshotTanks[index][0]) {
            const avgDamage = row[2] / row[1];
            const avgDef = row[6] / row[1];
            const avgFrag = row[4] / row[1];
            const avgSpots = row[5] / row[1];
            const winrate = row[3] * 100 / row[1];
            const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);
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
    calculatedStats.tier = calculatedStats.tier / calculatedStats.battles;
    return calculatedStats;
}

function calculate1day() { return calculateRecents(compressed1day) }

function calculate1week() { return calculateRecents(compressed1week) }

function calculate30days() { return calculateRecents(compressed1month) }

function calculate60days() { return calculateRecents() }

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

export default function GraphCalculator(stats, OS, overallWN8, avgTier) {

    const day1stats = calculate1day();
    const weekstats = calculate1week();
    const day30stats = calculate30days();

    console.log(OS);
    const data = {
        'overallWN8' : overallWN8,
        'day1' : day1stats.tankStats,
        'week1' : weekstats.tankStats,
        'days30' : day30stats.tankStats,
        'days60' : [],
        'battles500' : [],
        'battles1000' : [],
        'overallStats' : [
            {'name': 'Battles', 
                'Overall': OS.battles, 
                '24 Hours': day1stats.battles, 
                '7 Days': weekstats.battles, 
                '30 Days': day30stats.battles, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (190000 > OS.battles ? 'green' : 'red')}}> 190000 </span>},
            {'name': 'Avg Tier', 
                'Overall': avgTier.toFixed(2), 
                '24 Hours': day1stats.tier.toFixed(2), 
                '7 Days': weekstats.tier.toFixed(2), 
                '30 Days': day30stats.tier.toFixed(2),  
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (9.4 > 7.6 ? 'green' : 'red')}}> 9.6 </span>},
            {'name': 'WN8', 
                'Overall': overallWN8, 
                '24 Hours': parseInt(day1stats.overallWN8), 
                '7 Days': parseInt(weekstats.overallWN8), 
                '30 Days': parseInt(day30stats.overallWN8), 
                '60 Days': parseInt(0),
                '500 Games': parseInt(0), 
                '1000 Games': parseInt(0)},
            {'name': 'Wins', 
                'Overall': <>{OS.wins}<span style={{float: 'right'}}> {(OS.wins*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.wins}<span style={{ float: 'right', color: ((day1stats.wins/day1stats.battles) > (OS.wins/OS.battles) ? 'green' : 'red')}}>{(day1stats.wins*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.wins}<span style={{ float: 'right', color: ((weekstats.wins/weekstats.battles) > (OS.wins/OS.battles) ? 'green' : 'red')}}>{(weekstats.wins*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': <>{day30stats.wins}<span style={{ float: 'right', color: ((day30stats.wins/day30stats.battles) > (OS.wins/OS.battles) ? 'green' : 'red')}}>{(day30stats.wins*100/day30stats.battles).toFixed(2)}%</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <>641<span style={{ float: 'right', color: (0.641 > 0.54 ? 'green' : 'red')}}> 64% </span></>},
            {'name': 'Losses', 
                'Overall': <>{OS.losses} <span style={{float: 'right'}}> {(OS.losses*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.losses}<span style={{ float: 'right', color: ((day1stats.losses/day1stats.battles) > (OS.losses/OS.battles) ? 'red' : 'green')}}>{(day1stats.losses*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.losses}<span style={{ float: 'right', color: ((weekstats.losses/weekstats.battles) > (OS.losses/OS.battles) ? 'red' : 'green')}}>{(weekstats.losses*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': <>{day30stats.losses}<span style={{ float: 'right', color: ((day30stats.losses/day30stats.battles) > (OS.losses/OS.battles) ? 'red' : 'green')}}>{(day30stats.losses*100/day30stats.battles).toFixed(2)}%</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Draws', 
                'Overall': <>{OS.battles-OS.wins-OS.losses} <span style={{float: 'right'}}> {((OS.battles-OS.wins-OS.losses)*100/OS.losses).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.draws}<span style={{ float: 'right', color: ((day1stats.draws/day1stats.battles) > (OS.draws/OS.battles) ? 'red' : 'green')}}>{(day1stats.draws*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.draws}<span style={{ float: 'right', color: ((weekstats.draws/weekstats.battles) > (OS.draws/OS.battles) ? 'red' : 'green')}}>{(weekstats.draws*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': <>{day30stats.draws}<span style={{ float: 'right', color: ((day30stats.draws/day30stats.battles) > (OS.draws/OS.battles) ? 'red' : 'green')}}>{(day30stats.draws*100/day30stats.battles).toFixed(2)}%</span></>,  
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage', 
                'Overall': <>{OS.damage_dealt} <span style={{float: 'right'}}>{parseInt(OS.damage_dealt/OS.battles)}</span></>, 
                '24 Hours': <>{day1stats.damage}<span style={{ float: 'right', color: ((day1stats.damage/day1stats.battles) > (OS.damage_dealt/OS.battles) ? 'green' : 'red')}}>{(day1stats.damage/day1stats.battles).toFixed(0)}</span></>, 
                '7 Days': <>{weekstats.damage}<span style={{ float: 'right', color: ((weekstats.damage/weekstats.battles) > (OS.damage_dealt/OS.battles) ? 'green' : 'red')}}>{(weekstats.damage/weekstats.battles).toFixed(0)}</span></>, 
                '30 Days': <>{day30stats.damage}<span style={{ float: 'right', color: ((day30stats.damage/day30stats.battles) > (OS.damage_dealt/OS.battles) ? 'green' : 'red')}}>{(day30stats.damage/day30stats.battles).toFixed(0)}</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Frags', 
                'Overall': <>{OS.frags} <span style={{float: 'right'}}>{(OS.frags/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.frags}<span style={{ float: 'right', color: ((day1stats.frags/day1stats.battles) > (OS.frags/OS.battles) ? 'green' : 'red')}}>{(day1stats.frags/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.frags}<span style={{ float: 'right', color: ((weekstats.frags/weekstats.battles) > (OS.frags/OS.battles) ? 'green' : 'red')}}>{(weekstats.frags/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': <>{day30stats.frags}<span style={{ float: 'right', color: ((day30stats.frags/day30stats.battles) > (OS.frags/OS.battles) ? 'green' : 'red')}}>{(day30stats.frags/day30stats.battles).toFixed(2)}</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'K/D Ratio', 
                'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), 
                '24 Hours': <><span style={{ color: ((day1stats.frags/day1stats.destroyed) > (OS.frags/(OS.battles - OS.survived_battles)) ? 'green' : 'red')}}>{(day1stats.frags/day1stats.destroyed).toFixed(2)}</span></>, 
                '7 Days': <><span style={{ color: ((weekstats.frags/weekstats.destroyed) > (OS.frags/(OS.battles - OS.survived_battles)) ? 'green' : 'red')}}>{(weekstats.frags/weekstats.destroyed).toFixed(2)}</span></>, 
                '30 Days': <><span style={{ color: ((day30stats.frags/day30stats.destroyed) > (OS.frags/(OS.battles - OS.survived_battles)) ? 'green' : 'red')}}>{(day30stats.frags/day30stats.destroyed).toFixed(2)}</span></>, 
                '60 Days': 0, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage Ratio', 
                'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), 
                '24 Hours': <><span style={{ color: ((day1stats.damage/day1stats.damage_received) > (OS.damage_dealt/(OS.damage_received)) ? 'green' : 'red')}}>{(day1stats.damage/day1stats.damage_received).toFixed(2)}</span></>, 
                '7 Days': <><span style={{ color: ((weekstats.damage/weekstats.damage_received) > (OS.damage_dealt/(OS.damage_received)) ? 'green' : 'red')}}>{(weekstats.damage/weekstats.damage_received).toFixed(2)}</span></>, 
                '30 Days': <><span style={{ color: ((day30stats.damage/day30stats.damage_received) > (OS.damage_dealt/(OS.damage_received)) ? 'green' : 'red')}}>{(day30stats.damage/day30stats.damage_received).toFixed(2)}</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Survived', 
                'Overall': <>{OS.survived_battles} <span style={{float: 'right'}}>{(OS.survived_battles*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.survived}<span style={{ float: 'right', color: ((day1stats.survived/day1stats.battles) > (OS.survived_battles/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.survived*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.survived}<span style={{ float: 'right', color: ((weekstats.survived/weekstats.battles) > (OS.survived_battles/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.survived*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': <>{day30stats.survived}<span style={{ float: 'right', color: ((day30stats.survived/day30stats.battles) > (OS.survived_battles/(OS.battles)) ? 'green' : 'red')}}>{(day30stats.survived*100/day30stats.battles).toFixed(2)}%</span></>,
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Detected', 
                'Overall': <>{OS.spotted} <span style={{float: 'right'}}>{(OS.spotted/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.spotted}<span style={{ float: 'right', color: ((day1stats.spotted/day1stats.battles) > (OS.spotted/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.spotted/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.spotted}<span style={{ float: 'right', color: ((weekstats.spotted/weekstats.battles) > (OS.spotted/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.spotted/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': <>{day30stats.spotted}<span style={{ float: 'right', color: ((day30stats.spotted/day30stats.battles) > (OS.spotted/(OS.battles)) ? 'green' : 'red')}}>{(day30stats.spotted/day30stats.battles).toFixed(2)}</span></>,  
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Cap Points', 
                'Overall': <>{OS.capture_points} <span style={{float: 'right'}}>{(OS.capture_points/OS.battles).toFixed(2)}</span></> , 
                '24 Hours': <>{day1stats.cap}<span style={{ float: 'right', color: ((day1stats.cap/day1stats.battles) > (OS.capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.cap/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.cap}<span style={{ float: 'right', color: ((weekstats.cap/weekstats.battles) > (OS.capture_points/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.cap/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': <>{day30stats.cap}<span style={{ float: 'right', color: ((day30stats.cap/day30stats.battles) > (OS.capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day30stats.cap/day30stats.battles).toFixed(2)}</span></>, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Def Points', 
                'Overall': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.def}<span style={{ float: 'right', color: ((day1stats.def/day1stats.battles) > (OS.dropped_capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.def/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.def}<span style={{ float: 'right', color: ((weekstats.def/weekstats.battles) > (OS.dropped_capture_points/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.def/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': <>{day30stats.def}<span style={{ float: 'right', color: ((day30stats.def/day30stats.battles) > (OS.dropped_capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day30stats.def/day30stats.battles).toFixed(2)}</span></>, 
                '60 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>,
                '500 Games': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '1000 Games': 1},
            {'name': 'Experience', 
                'Overall': <>{OS.battle_avg_xp} <span style={{float: 'right'}}>{(OS.battle_avg_xp/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.xp}<span style={{ float: 'right', color: ((day1stats.xp/day1stats.battles) > (OS.battle_avg_xp) ? 'green' : 'red')}}>{(day1stats.xp/day1stats.battles).toFixed(0)}</span></>, 
                '7 Days': <>{weekstats.xp}<span style={{ float: 'right', color: ((weekstats.xp/weekstats.battles) > (OS.battle_avg_xp) ? 'green' : 'red')}}>{(weekstats.xp/weekstats.battles).toFixed(0)}</span></>,
                '30 Days': <>{day30stats.xp}<span style={{ float: 'right', color: ((day30stats.xp/day30stats.battles) > (OS.battle_avg_xp) ? 'green' : 'red')}}>{(day30stats.xp/day30stats.battles).toFixed(0)}</span></>, 
                '60 Days': 0,
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
    console.log(stats);
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