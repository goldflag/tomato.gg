import React from 'react';
import WN8 from '../data/wn8';

function calculateWN8(id, avgDamage, avgDef, avgFrag, avgSpots, winrate) {
    const exp = WN8[id];
    
    const rDAMAGE = avgDamage / exp.expDamage;
    const rSPOT   = avgSpots  / exp.expSpot;
    const rFRAG   = avgFrag   / exp.expFrag;
    const rDEF    = avgDef    / exp.expDef;
    const rWIN    = winrate   / exp.expWinRate;

    const rWINc    = Math.max(0,                          (rWIN    - 0.71) / (1 - 0.71) );
    const rDAMAGEc = Math.max(0,                          (rDAMAGE - 0.22) / (1 - 0.22) );
    const rFRAGc   = Math.max(0, Math.min(rDAMAGEc + 0.2, (rFRAG   - 0.12) / (1 - 0.12)));
    const rSPOTc   = Math.max(0, Math.min(rDAMAGEc + 0.1, (rSPOT   - 0.38) / (1 - 0.38)));
    const rDEFc    = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF    - 0.10) / (1 - 0.10)));

    const overallWN8 = 980*rDAMAGEc + 210*rDAMAGEc*rFRAGc + 155*rFRAGc*rSPOTc + 75*rDEFc*rFRAGc + 145*Math.min(1.8,rWINc);
    
    return overallWN8;
}

const Conversion = {
    'lightTank' : 'LT',
    'mediumTank' : 'MT',
    'heavyTank' : 'HT',
    'AT-SPG' : 'TD',
    'SPG' : 'SPG',
}

const NationConversion = {
    'lightTank' : 'LT',
    'mediumTank' : 'MT',
    'heavyTank' : 'HT',
    'AT-SPG' : 'TD',
    'SPG' : 'SPG',
}

export default function TankStats(tankNames, stats, MOEstats) {
    let counter = 0;
    let jsonStats = [];
    stats.map((row) => {
        if (tankNames[row.tank_id]) {
            const avgDamage = row.all.damage_dealt / row.all.battles;
            const avgDef = row.all.dropped_capture_points / row.all.battles;
            const avgFrag = row.all.frags / row.all.battles;
            const avgSpots = row.all.spotted / row.all.battles;
            const winrate = row.all.wins * 100 / row.all.battles;
            const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);

            const survived = row.all.survived_battles;
            const destroyed = row.all.battles - survived;

            let MOE = 0;
            if (MOEstats[counter].achievements.marksOnGun) {
                MOE = MOEstats[counter].achievements.marksOnGun;
            }
            
            let vehicleStats = [
                <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} />,
                tankNames[row.tank_id]['short_name'],
                tankNames[row.tank_id]['nation'].charAt(0).toUpperCase() + tankNames[row.tank_id]['nation'].slice(1),
                tankNames[row.tank_id]['tier'],
                Conversion[tankNames[row.tank_id]['type']],
                row.all.battles,
                winrate.toFixed(2) + '%',
                parseInt(WN8),
                parseInt(avgDamage),
                avgFrag.toFixed(2),
                (row.all.damage_dealt/row.all.damage_received).toFixed(2),
                (row.all.frags/destroyed).toFixed(2),
                parseInt(row.all.battle_avg_xp), 
                row.all.hits_percents + '%',
                avgSpots.toFixed(2),
                row.all.tanking_factor,
                MOE
            ];
            jsonStats.push(vehicleStats);
        }
        ++counter;
        }
    );
    return jsonStats;
}