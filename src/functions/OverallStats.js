//this function is deprecated

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

export default function OverallStats( tankNames, stats, MOEstats) {
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
            
            let vehicleStats = {
                'Icon' : <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} alt={row.tank_id}/>,
                'Name': tankNames[row.tank_id]['short_name'],
                'Tier' : tankNames[row.tank_id]['tier'],
                'Class' : Conversion[tankNames[row.tank_id]['type']],
                'Games' : row.all.battles,
                'Winrate': winrate.toFixed(2) + '%',
                'DPG' : parseInt(avgDamage),
                'KPG' : avgFrag.toFixed(2),
                'DMG Ratio' : (row.all.damage_dealt/row.all.damage_received).toFixed(2),
                'K/D' : (row.all.frags/destroyed).toFixed(2),
                'WN8': parseInt(WN8),
                'XP' : parseInt(row.all.battle_avg_xp), 
                'Hitratio' : row.all.hits_percents + '%',
                'Spots' : avgSpots.toFixed(2),
                'Armor Eff' : row.all.tanking_factor,
                'MOE' : MOE,
            }

            jsonStats.push(vehicleStats);
            }
            ++counter;
        }
    );

    return jsonStats;

}