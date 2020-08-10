import React from 'react';

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
        { "id": "Italy", "value": 1 }
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

export default function GraphCalculator(stats, OS) {

    console.log(OS);


    const data = {
        'overallStats' : [
            {'name': 'Battles', 'Overall': OS.battles, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': <span style={{ color: (190000 > OS.battles ? 'green' : 'red')}}> 190000 </span>},
            {'name': 'Avg Tier', 'Overall': 7.6, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': <span style={{ color: (9.4 > 7.6 ? 'green' : 'red')}}> 9.6 </span>},
            {'name': 'WN8', 'Overall': 0, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Wins', 'Overall': OS.wins, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': <>641<span style={{ float: 'right', color: (0.641 > 0.54 ? 'green' : 'red')}}> 64% </span></>},
            {'name': 'Losses', 'Overall': OS.losses, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Draws', 'Overall': (OS.battles - OS.wins - OS.losses), '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Damage', 'Overall': OS.damage_dealt, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Frags', 'Overall': OS.frags, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'K/D Ratio', 'Overall': (OS.frags/(OS.battles - OS.survived_battles)).toFixed(2), '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Damage Ratio', 'Overall': (OS.damage_dealt/OS.damage_received).toFixed(2), '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Survived', 'Overall': OS.survived_battles, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Detected', 'Overall': OS.spotted, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Cap Points', 'Overall': OS.capture_points, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Def Points', 'Overall': OS.dropped_capture_points, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Experience', 'Overall': OS.battle_avg_xp, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
            {'name': 'Trees Fallen', 'Overall': 0, '24 Hours': 0, '7 Days': 0, '30 Days': 0, '60 Days': 0, '100 Games': 0, '500 Games': 0, '1000 Games': 0},
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
        'WN8Dist' : [
            { "Tier": "I", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "II", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "III", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "IV", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "V", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VI", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VII", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "VIII", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "IX", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
            { "Tier": "X", "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        ],
        'NationDist' : {
            "Usa": 0, "Ussr": 0, "France": 0, "Germany": 0, "Uk": 0, "China": 0, "Japan": 0, "Czech": 0, "Sweden": 0, "Poland": 0, "Italy": 0,
        },
        'ClassDist' : {
            "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0,
        }
    };

    const BattleTracker = [
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 },
        { "Overall" : 0, "HT": 0, "MT": 0, "TD": 0, "LT": 0, "SPG": 0 }
    ];

    stats.map((row) => {
        data.tierDist[row[3] - 1][row[4]] += row[5];
        data.WN8Dist[row[3] - 1][row[4]] += (row[7]*row[5]);
        data.WN8Dist.Overall += (row[7]*row[5]);
        BattleTracker[row[3] - 1][row[4]] += row[5];
        BattleTracker[row[3] - 1].Overall += row[5];
        data.NationDist[row[2]] += row[5];
        data.ClassDist[row[4]] += row[5];
    });

    for (let i = 0; i < 10; ++i) {
        data.WN8Dist[i].Overall = parseInt(data.WN8Dist[i].Overall / BattleTracker[i].Overall);
        data.WN8Dist[i].HT = parseInt(data.WN8Dist[i].HT / BattleTracker[i].HT);
        data.WN8Dist[i].MT = parseInt(data.WN8Dist[i].MT / BattleTracker[i].MT);
        data.WN8Dist[i].TD = parseInt(data.WN8Dist[i].TD / BattleTracker[i].TD);
        data.WN8Dist[i].LT = parseInt(data.WN8Dist[i].LT / BattleTracker[i].LT);
        data.WN8Dist[i].SPG = parseInt(data.WN8Dist[i].SPG / BattleTracker[i].SPG);
    }
    NationDistCalculator(data);
    ClassDistCalculator(data);

    console.log(data);
    return data;
}