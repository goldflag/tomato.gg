import React from 'react';
import TankStats from './TankStatsCalculator';
import WN8 from '../data/wn8';
import tankNames from '../data/tankNames';
import stats1 from '../data/stats1';
import stats2 from '../data/stats2';
import stats3 from '../data/stats3';

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

    const individualTankWN8 = 980*rDAMAGEc + 210*rDAMAGEc*rFRAGc + 155*rFRAGc*rSPOTc + 75*rDEFc*rFRAGc + 145*Math.min(1.8,rWINc);
    
    return individualTankWN8;
}

const Conversion = {
    'lightTank' : 'LT',
    'mediumTank' : 'MT',
    'heavyTank' : 'HT',
    'AT-SPG' : 'TD',
    'SPG' : 'SPG',
}

function calculateRecents(statsSnapshot) {
    let sorted1 = stats1;
    sorted1.sort((a, b) => Number(a.tank_id) - Number(b.tank_id));
    let sorted2 = statsSnapshot;
    sorted2.sort((a, b) => Number(a.tank_id) - Number(b.tank_id));

    let index = 0;
    let calculatedStats = [];
    sorted1.map((row) => {
        if (row.tank_id != sorted2[index].tank_id) {
            const avgDamage = row.all.damage_dealt / row.all.battles;
            const avgDef = row.all.dropped_capture_points / row.all.battles;
            const avgFrag = row.all.frags / row.all.battles;
            const avgSpots = row.all.spotted / row.all.battles;
            const winrate = row.all.wins * 100 / row.all.battles;
            const WN8 = calculateWN8(row.tank_id, avgDamage, avgDef, avgFrag, avgSpots, winrate);

            const destroyed = row.all.battles - row.all.survived_battles;

            let vehicleRecentStats = [
                <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} />,
                tankNames[row.tank_id]['short_name'],
                tankNames[row.tank_id]['nation'].charAt(0).toUpperCase() + tankNames[row.tank_id]['nation'].slice(1),
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
                avgSpots,
            ];
            calculatedStats.push(vehicleRecentStats);

        }
        else {
            if (row.all.battles != sorted2[index].all.battles) {
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

                let vehicleRecentStats = [
                    <img src={require(`../assets/tankIcons/${row.tank_id}.png`)} />,
                    tankNames[row.tank_id]['short_name'],
                    tankNames[row.tank_id]['nation'].charAt(0).toUpperCase() + tankNames[row.tank_id]['nation'].slice(1),
                    tankNames[row.tank_id]['tier'],
                    Conversion[tankNames[row.tank_id]['type']],
                    battlesDiff,
                    (winrate).toFixed(2) + '%',
                    parseInt(WN8),
                    parseInt(avgDamage),
                    (avgFrag).toFixed(2),
                    (row.all.damage_dealt/row.all.damage_received).toFixed(2),
                    (avgFrag/destroyedDiff).toFixed(2),
                    parseInt(xpDiff/battlesDiff), 
                    avgSpots,
                ];
                calculatedStats.push(vehicleRecentStats);
            }
            ++index;
        }
    });
    return(calculatedStats);
}

function calculate1day() {
    return calculateRecents(stats2)
}

function calculate1week() {
    return calculateRecents(stats3)
}

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



export default function GraphCalculator(stats, OS, overallWN8) {

    console.log(OS);
    const data = {
        'overallWN8' : overallWN8,
        '1day' : [],
        '1week' : [],
        '30days' : [],
        '60days' : [],
        '500battles' : [],
        '1000battles' : [],
        'overallStats' : [
            {'name': 'Battles', 
                'Overall': OS.battles, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (190000 > OS.battles ? 'green' : 'red')}}> 190000 </span>},
            {'name': 'Avg Tier', 
                'Overall': 7.6, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <span style={{ color: (9.4 > 7.6 ? 'green' : 'red')}}> 9.6 </span>},
            {'name': 'WN8', 
                'Overall': overallWN8, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Wins', 
                'Overall': <>{OS.wins} <span style={{float: 'right'}}> {(OS.wins*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': <>641<span style={{ float: 'right', color: (0.641 > 0.54 ? 'green' : 'red')}}> 64% </span></>},
            {'name': 'Losses', 
                'Overall': <>{OS.losses} <span style={{float: 'right'}}> {(OS.losses*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Draws', 
                'Overall': <>{OS.battles-OS.wins-OS.losses} <span style={{float: 'right'}}> {((OS.battles-OS.wins-OS.losses)*100/OS.losses).toFixed(2)}%</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage', 
                'Overall': <>{OS.damage_dealt} <span style={{float: 'right'}}>{parseInt(OS.damage_dealt/OS.battles)}</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Frags', 
                'Overall': <>{OS.frags} <span style={{float: 'right'}}>{(OS.frags/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'K/D Ratio', 
                'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0, 
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Damage Ratio', 
                'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Survived', 
                'Overall': <>{OS.survived_battles} <span style={{float: 'right'}}>{(OS.survived_battles*100/OS.battles).toFixed(2)}%</span></>, 
                '24 Hours': 0,
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Detected', 
                'Overall': <>{OS.spotted} <span style={{float: 'right'}}>{(OS.spotted/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Cap Points', 
                'Overall': <>{OS.capture_points} <span style={{float: 'right'}}>{(OS.capture_points/OS.battles).toFixed(2)}</span></> , 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
                '500 Games': 0, 
                '1000 Games': 0},
            {'name': 'Def Points', 
                'Overall': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '7 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '30 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '60 Days': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>,
                '500 Games': <>{OS.dropped_capture_points} <span style={{float: 'right'}}>{(OS.dropped_capture_points/OS.battles).toFixed(2)}</span></>, 
                '1000 Games': 1},
            {'name': 'Experience', 
                'Overall': <>{OS.battle_avg_xp} <span style={{float: 'right'}}>{(OS.battle_avg_xp/OS.battles).toFixed(2)}</span></>, 
                '24 Hours': 0, 
                '7 Days': 0, '30 Days': 0, '60 Days': 0,
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
        // 'WN8Dist' : [
        //     { "Tier": "I", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "II", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "III", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "IV", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "V", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "VI", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "VII", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "VIII", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "IX", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        //     { "Tier": "X", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        // ],
        'WN8ClassDist' : [
            { "Class": "HT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "MT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "TD", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "LT", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "SPG", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
            { "Class": "Overall", "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0}

        ],
        'NationDist' : {
            "Usa": 0, "Ussr": 0, "France": 0, "Germany": 0, "Uk": 0, "China": 0, "Japan": 0, "Czech": 0, "Sweden": 0, "Poland": 0, "Italy": 0, "Japan": 0
        },
        'ClassDist' : {
            "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0,
        }

    };

    // const BattleTracker = [
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
    //     { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 }
    // ];

    const BattleTracker2 = [
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0},
        { "I": 0, "II": 0, "III": 0, "IV": 0, "V": 0, "VI": 0, "VII": 0, "VIII": 0, "IX": 0, "X": 0}
    ];

    const classToIndex = { "HT" : 0, "MT" : 1, "TD" : 2, "LT" : 3, "SPG" : 4};
    const tierToKey = { 1 : "I", 2 : "II", 3 : "III", 4 : "IV", 5 : "V", 6 : "VI", 7 : "VII", 8 : "VIII", 9 : "IX", 10 : "X" };
    const numToMastery = { 0 : "None", 1 : "3rd", 2 : "2nd", 3 : "1st", 4 : "Ace" };
    stats.map((row) => {
        data.tierDist[row[3] - 1][row[4]] += row[5];
        if (row[3] > 4) {
            data.tierMoeDist[row[3] - 5][row[16]] += 1;
        }
        data.tierMasteryDist[row[3] - 1][numToMastery[row[17]]] += 1;

        // data.WN8Dist[row[3] - 1][row[4]] += (row[7]*row[5]);
        // data.WN8Dist.Overall += (row[7]*row[5]);
        // BattleTracker[row[3] - 1][row[4]] += row[5];
        // BattleTracker[row[3] - 1].Overall += row[5];
        data.NationDist[row[2]] += row[5];
        data.ClassDist[row[4]] += row[5];
        // data.overallWN8 += row[5]*row[7];

        BattleTracker2[classToIndex[row[4]]][tierToKey[row[3]]] += row[5];
        data.WN8ClassDist[classToIndex[row[4]]][tierToKey[row[3]]] += (row[7]*row[5]);
        BattleTracker2[5][tierToKey[row[3]]] += row[5];
        data.WN8ClassDist[5][tierToKey[row[3]]] += (row[7]*row[5]);
    });

    // data.overallWN8 = parseInt(data.overallWN8/OS.battles);
    // data.overallStats[2].Overall = data.overallWN8;

    // for (let i = 0; i < 10; ++i) {
    //     data.WN8Dist[i].Overall = parseInt(data.WN8Dist[i].Overall / BattleTracker[i].Overall);
    //     data.WN8Dist[i].HT = parseInt(data.WN8Dist[i].HT / BattleTracker[i].HT);
    //     data.WN8Dist[i].MT = parseInt(data.WN8Dist[i].MT / BattleTracker[i].MT);
    //     data.WN8Dist[i].TD = parseInt(data.WN8Dist[i].TD / BattleTracker[i].TD);
    //     data.WN8Dist[i].LT = parseInt(data.WN8Dist[i].LT / BattleTracker[i].LT);
    //     data.WN8Dist[i].SPG = parseInt(data.WN8Dist[i].SPG / BattleTracker[i].SPG);
    // }

    for (let i = 0; i < 6; ++i) {
        for (let j = 1; j < 11; ++j) {
            if (data.WN8ClassDist[i][tierToKey[j]] > 0) {
                data.WN8ClassDist[i][tierToKey[j]] = parseInt(data.WN8ClassDist[i][tierToKey[j]] / BattleTracker2[i][tierToKey[j]]);
            }
            else {
                data.WN8ClassDist[i][tierToKey[j]] = '-';
            }
        }
    }
    NationDistCalculator(data);
    ClassDistCalculator(data);
    console.log(data);
    const output = calculate1day();
    console.log(calculate1day());

    return data;
}