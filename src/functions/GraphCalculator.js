import React from 'react';
import TankStats from './TankStatsCalculator';
import WN8 from '../data/wn8';
import tankNames from '../data/tankNames';
import nationConversion from '../data/nationConversion';
import stats1 from '../data/stats1';
import stats2 from '../data/stats2';
import stats3 from '../data/stats3';

import goldflag1 from '../data/goldflag1';
import goldflag2 from '../data/goldflag2';
import goldflag3 from '../data/goldflag3';


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

    let index = 0;
    overall.map((row) => {
        const exp = WN8[row.tank_id];
        if (row.tank_id !== historical[index].tank_id) {
            weighedExpDamage += row.all.battles*exp.expDamage;
            weighedExpSpots += row.all.battles*exp.expSpot;
            weighedExpFrag += row.all.battles*exp.expFrag;    
            weighedExpDef += row.all.battles*exp.expDef;    
            weighedExpWinrate += row.all.battles*exp.expWinRate;
        
            weighedDamage += row.all.damage_dealt;
            weighedSpots += row.all.spotted;
            weighedFrag += row.all.frags;
            weighedDef += row.all.dropped_capture_points;
            weighedWinrate += 100*row.all.wins;
        }
        else {
            if (row.all.battles !== historical[index].all.battles) {
                const battlesDiff = row.all.battles - historical[index].all.battles;
                weighedExpDamage += battlesDiff*exp.expDamage;
                weighedExpSpots += battlesDiff*exp.expSpot;
                weighedExpFrag += battlesDiff*exp.expFrag;    
                weighedExpDef += battlesDiff*exp.expDef;    
                weighedExpWinrate += battlesDiff*exp.expWinRate;

                weighedDamage += row.all.damage_dealt - historical[index].all.damage_dealt;
                weighedSpots += row.all.spotted - historical[index].all.spotted;
                weighedFrag += row.all.frags - historical[index].all.frags;
                weighedDef += row.all.dropped_capture_points - historical[index].all.dropped_capture_points;
                weighedWinrate += 100*row.all.wins - historical[index].all.wins;
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
    let sorted1 = goldflag3;
    sorted1.sort((a, b) => Number(a.tank_id) - Number(b.tank_id));
    //the historical snapshot
    let sorted2 = statsSnapshot;
    sorted2.sort((a, b) => Number(a.tank_id) - Number(b.tank_id));

    let index = 0;
    let calculatedStats = {
        battles: 0,
        tier: 0,
        overallWN8: 0,
        wins: 0,
        losses: 0,
        draws: 0,
        damage: 0,
        damage_received: 0,
        frags: 0,
        destroyed: 0,
        survived: 0,
        spotted: 0,
        cap: 0,
        def: 0,
        xp: 0,
        tankStats: []
    };

    const overallWN8 =  calculatePeriodWN8(sorted1, sorted2);
    console.log(overallWN8);

    calculatedStats.overallWN8 = overallWN8;

    sorted1.map((row) => {
        if (row.tank_id !== sorted2[index].tank_id) {
            const avgDamage = row.all.damage_dealt / row.all.battles;
            const avgDef = row.all.dropped_capture_points / row.all.battles;
            const avgFrag = row.all.frags / row.all.battles;
            const avgSpots = row.all.spotted / row.all.battles;
            const winrate = row.all.wins * 100 / row.all.battles;
            const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);
            const destroyed = row.all.battles - row.all.survived_battles;

            let vehicleRecentStats = [
                <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} alt={row.tank_id}/>,
                tankNames[row.tank_id]['short_name'],
                nationConversion[tankNames[row.tank_id]['nation']],
                tankNames[row.tank_id]['tier'],
                Conversion[tankNames[row.tank_id]['type']],
                row.all.battles,
                (winrate).toFixed(2) + '%',
                parseInt(WN8),
                parseInt(avgDamage),
                (avgFrag).toFixed(2),
                (row.all.damage_dealt/row.all.damage_received).toFixed(2),
                (row.all.frags/destroyed).toFixed(2),
                parseInt(row.all.battle_avg_xp), 
                row.all.hits_percents + '%',
                avgSpots.toFixed(2),
            ];
            calculatedStats.tankStats.push(vehicleRecentStats);
            calculatedStats.battles += row.all.battles;
            calculatedStats.tier += tankNames[row.tank_id]['tier']*row.all.battles;
            calculatedStats.wins += row.all.wins;
            calculatedStats.losses += row.all.losses;
            calculatedStats.draws += row.all.draws;
            calculatedStats.damage += row.all.damage_dealt;
            calculatedStats.damage_received += row.all.damage_received;
            calculatedStats.frags += row.all.frags;
            calculatedStats.destroyed += destroyed;
            calculatedStats.survived += row.all.survived_battles;
            calculatedStats.spotted += row.all.spotted;
            calculatedStats.cap += row.all.capture_points;
            calculatedStats.def += row.all.dropped_capture_points;
            calculatedStats.xp += row.all.xp;

        }
        else {
            if (row.all.battles !== sorted2[index].all.battles) {
                const battlesDiff = row.all.battles - sorted2[index].all.battles;
                const dmgDiff = row.all.damage_dealt - sorted2[index].all.damage_dealt;
                const defDiff = row.all.dropped_capture_points - sorted2[index].all.dropped_capture_points;
                const fragDiff = row.all.frags - sorted2[index].all.frags;
                const spotsDiff = row.all.spotted - sorted2[index].all.spotted;
                const winsDiff = row.all.wins - sorted2[index].all.wins;

                const avgDamage = dmgDiff / battlesDiff;
                const avgDef = defDiff / battlesDiff;
                const avgFrag = fragDiff / battlesDiff;
                const avgSpots = spotsDiff / battlesDiff;
                const winrate = winsDiff * 100 / battlesDiff;
                const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);

                const destroyedDiff = (row.all.battles - row.all.survived_battles) - (sorted2[index].all.battles - sorted2[index].all.survived_battles);
                const xpDiff = (row.all.xp) - (sorted2[index].all.xp);
                const hitRatio = (row.all.hits - sorted2[index].all.hits) / (row.all.shots - sorted2[index].all.shots);

                let DMGRatio;
                if (row.all.damage_received === 0) { DMGRatio = 'No Damage Recieved' }
                else { DMGRatio = (row.all.damage_dealt/row.all.damage_received).toFixed(2) }
                let KDRatio;
                if (destroyedDiff === 0) { KDRatio = 'No Deaths' }
                else { KDRatio = (fragDiff/destroyedDiff).toFixed(2) }

                let vehicleRecentStats = [
                    <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} alt={row.tank_id}/>,
                    tankNames[row.tank_id]['short_name'],
                    nationConversion[tankNames[row.tank_id]['nation']],
                    tankNames[row.tank_id]['tier'],
                    Conversion[tankNames[row.tank_id]['type']],
                    battlesDiff,
                    (winrate).toFixed(2) + '%',
                    parseInt(WN8),
                    parseInt(avgDamage),
                    (avgFrag).toFixed(2),
                    DMGRatio,
                    KDRatio,
                    parseInt(xpDiff/battlesDiff), 
                    parseInt(hitRatio*100)  + '%',
                    avgSpots.toFixed(2),
                ];
                calculatedStats.tankStats.push(vehicleRecentStats);
                calculatedStats.battles += battlesDiff;
                calculatedStats.tier += tankNames[row.tank_id]['tier']*battlesDiff;
                calculatedStats.wins += winsDiff;
                calculatedStats.losses += row.all.losses - sorted2[index].all.losses;
                calculatedStats.draws += row.all.draws - sorted2[index].all.draws;
                calculatedStats.damage += row.all.damage_dealt - sorted2[index].all.damage_dealt;
                calculatedStats.damage_received += row.all.damage_received - sorted2[index].all.damage_received;
                calculatedStats.frags += row.all.frags - sorted2[index].all.frags;
                calculatedStats.destroyed += destroyedDiff;
                calculatedStats.survived += row.all.survived_battles - sorted2[index].all.survived_battles;
                calculatedStats.spotted += row.all.spotted - sorted2[index].all.spotted;
                calculatedStats.cap += row.all.capture_points - sorted2[index].all.capture_points;
                calculatedStats.def += row.all.dropped_capture_points - sorted2[index].all.dropped_capture_points;
                calculatedStats.xp += row.all.xp - sorted2[index].all.xp;

            }
            ++index;
        }
    });
    calculatedStats.tier = (calculatedStats.tier/calculatedStats.battles).toFixed(2);
    return(calculatedStats);
}

function calculate1day() { return calculateRecents(goldflag2) }

function calculate1week() { return calculateRecents(goldflag1) }

function calculate30days() { return calculateRecents(stats3) }

function calculate60days() { return calculateRecents(stats3) }

function calculate500battles() { return calculateRecents(stats3) }

function calculate1000battles() { return calculateRecents(stats3) }

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

    NewNationDist[0].value = data.NationDist.Usa;
    NewNationDist[1].value = data.NationDist.Ussr;
    NewNationDist[2].value = data.NationDist.France;
    NewNationDist[3].value = data.NationDist.Germany;
    NewNationDist[4].value = data.NationDist.Uk;
    NewNationDist[5].value = data.NationDist.China;
    NewNationDist[6].value = data.NationDist.Czech;
    NewNationDist[7].value = data.NationDist.Sweden;
    NewNationDist[8].value = data.NationDist.Poland;
    NewNationDist[9].value = data.NationDist.Italy;
    NewNationDist[10].value = data.NationDist.Italy;

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

    console.log(OS);
    const data = {
        'overallWN8' : overallWN8,
        'day1' : day1stats.tankStats,
        'week1' : weekstats.tankStats,
        'days30' : [],
        'days60' : [],
        'battles500' : [],
        'battles1000' : [],
        'overallStats' : [
            {'name': 'Battles', 
                'Overall': OS.battles, 
                '24 Hours': day1stats.battles, 
                '7 Days': weekstats.battles, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (190000 > OS.battles ? 'green' : 'red')}}> 190000 </span>},
            {'name': 'Avg Tier', 
                'Overall': avgTier.toFixed(2), 
                '24 Hours': day1stats.tier, 
                '7 Days': weekstats.tier, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (9.4 > 7.6 ? 'green' : 'red')}}> 9.6 </span>},
            {'name': 'WN8', 
                'Overall': overallWN8, 
                '24 Hours': parseInt(day1stats.overallWN8), 
                '7 Days': parseInt(weekstats.overallWN8), 
                '30 Days': parseInt(0), 
                '60 Days': parseInt(0),
                '500 Games': parseInt(0), 
                '1000 Games': parseInt(0)},
            {'name': 'Wins', 
                'Overall': <>{OS.wins}<span style={{float: 'right'}}> {(OS.wins*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.wins}<span style={{ float: 'right', color: ((day1stats.wins/day1stats.battles) > (OS.wins/OS.battles) ? 'green' : 'red')}}>{(day1stats.wins*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.wins}<span style={{ float: 'right', color: ((weekstats.wins/weekstats.battles) > (OS.wins/OS.battles) ? 'green' : 'red')}}>{(weekstats.wins*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <>641<span style={{ float: 'right', color: (0.641 > 0.54 ? 'green' : 'red')}}> 64% </span></>},
            {'name': 'Losses', 
                'Overall': <>{OS.losses} <span style={{float: 'right'}}> {(OS.losses*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.losses}<span style={{ float: 'right', color: ((day1stats.losses/day1stats.battles) > (OS.losses/OS.battles) ? 'red' : 'green')}}>{(day1stats.losses*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.losses}<span style={{ float: 'right', color: ((weekstats.losses/weekstats.battles) > (OS.losses/OS.battles) ? 'red' : 'green')}}>{(weekstats.losses*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Draws', 
                'Overall': <>{OS.battles-OS.wins-OS.losses} <span style={{float: 'right'}}> {((OS.battles-OS.wins-OS.losses)*100/OS.losses).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.draws}<span style={{ float: 'right', color: ((day1stats.draws/day1stats.battles) > (OS.draws/OS.battles) ? 'red' : 'green')}}>{(day1stats.draws*100/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.draws}<span style={{ float: 'right', color: ((weekstats.draws/weekstats.battles) > (OS.draws/OS.battles) ? 'red' : 'green')}}>{(weekstats.draws*100/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage', 
                'Overall': <>{OS.damage_dealt} <span style={{float: 'right'}}>{parseInt(OS.damage_dealt/OS.battles)}</span></>, 
                '24 Hours': <>{day1stats.damage}<span style={{ float: 'right', color: ((day1stats.damage/day1stats.battles) > (OS.damage_dealt/OS.battles) ? 'green' : 'red')}}>{(day1stats.damage/day1stats.battles).toFixed(0)}</span></>, 
                '7 Days': <>{weekstats.damage}<span style={{ float: 'right', color: ((weekstats.damage/weekstats.battles) > (OS.damage_dealt/OS.battles) ? 'green' : 'red')}}>{(weekstats.damage/weekstats.battles).toFixed(0)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Frags', 
                'Overall': <>{OS.frags} <span style={{float: 'right'}}>{(OS.frags/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.frags}<span style={{ float: 'right', color: ((day1stats.frags/day1stats.battles) > (OS.frags/OS.battles) ? 'green' : 'red')}}>{(day1stats.frags/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.frags}<span style={{ float: 'right', color: ((weekstats.frags/weekstats.battles) > (OS.frags/OS.battles) ? 'green' : 'red')}}>{(weekstats.frags/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'K/D Ratio', 
                'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), 
                '24 Hours': <><span style={{ color: ((day1stats.frags/day1stats.destroyed) > (OS.frags/(OS.battles - OS.survived_battles)) ? 'green' : 'red')}}>{(day1stats.frags/day1stats.destroyed).toFixed(2)}</span></>, 
                '7 Days': <><span style={{ color: ((weekstats.frags/weekstats.destroyed) > (OS.frags/(OS.battles - OS.survived_battles)) ? 'green' : 'red')}}>{(weekstats.frags/weekstats.destroyed).toFixed(2)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage Ratio', 
                'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), 
                '24 Hours': <><span style={{ color: ((day1stats.damage/day1stats.damage_received) > (OS.damage_dealt/(OS.damage_received)) ? 'green' : 'red')}}>{(day1stats.damage/day1stats.damage_received).toFixed(2)}</span></>, 
                '7 Days': <><span style={{ color: ((weekstats.damage/weekstats.damage_received) > (OS.damage_dealt/(OS.damage_received)) ? 'green' : 'red')}}>{(weekstats.damage/weekstats.damage_received).toFixed(2)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Survived', 
                'Overall': <>{OS.survived_battles} <span style={{float: 'right'}}>{(OS.survived_battles*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': <>{day1stats.survived}<span style={{ float: 'right', color: ((day1stats.survived/day1stats.battles) > (OS.survived_battles/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.survived/day1stats.battles).toFixed(2)}%</span></>, 
                '7 Days': <>{weekstats.survived}<span style={{ float: 'right', color: ((weekstats.survived/weekstats.battles) > (OS.survived_battles/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.survived/weekstats.battles).toFixed(2)}%</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Detected', 
                'Overall': <>{OS.spotted} <span style={{float: 'right'}}>{(OS.spotted/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.spotted}<span style={{ float: 'right', color: ((day1stats.spotted/day1stats.battles) > (OS.spotted/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.spotted/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.spotted}<span style={{ float: 'right', color: ((weekstats.spotted/weekstats.battles) > (OS.spotted/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.spotted/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Cap Points', 
                'Overall': <>{OS.capture_points} <span style={{float: 'right'}}>{(OS.capture_points/OS.battles).toFixed(2)}</span></> , 
                '24 Hours': <>{day1stats.cap}<span style={{ float: 'right', color: ((day1stats.cap/day1stats.battles) > (OS.capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.cap/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.cap}<span style={{ float: 'right', color: ((weekstats.cap/weekstats.battles) > (OS.capture_points/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.cap/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': 0, 
                '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Def Points', 
                'Overall': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.def}<span style={{ float: 'right', color: ((day1stats.def/day1stats.battles) > (OS.dropped_capture_points/(OS.battles)) ? 'green' : 'red')}}>{(day1stats.def/day1stats.battles).toFixed(2)}</span></>, 
                '7 Days': <>{weekstats.def}<span style={{ float: 'right', color: ((weekstats.def/weekstats.battles) > (OS.dropped_capture_points/(OS.battles)) ? 'green' : 'red')}}>{(weekstats.def/weekstats.battles).toFixed(2)}</span></>, 
                '30 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '60 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>,
                '500 Games': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '1000 Games': 1},
            {'name': 'Experience', 
                'Overall': <>{OS.battle_avg_xp} <span style={{float: 'right'}}>{(OS.battle_avg_xp/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{day1stats.xp}<span style={{ float: 'right', color: ((day1stats.xp/day1stats.battles) > (OS.battle_avg_xp) ? 'green' : 'red')}}>{(day1stats.xp/day1stats.battles).toFixed(0)}</span></>, 
                '7 Days': <>{weekstats.xp}<span style={{ float: 'right', color: ((weekstats.xp/weekstats.battles) > (OS.battle_avg_xp) ? 'green' : 'red')}}>{(weekstats.xp/weekstats.battles).toFixed(0)}</span></>,
                '30 Days': 0, 
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
            "Usa": 0, "Ussr": 0, "France": 0, "Germany": 0, "Uk": 0, "China": 0, "Japan": 0, "Czech": 0, "Sweden": 0, "Poland": 0, "Italy": 0
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