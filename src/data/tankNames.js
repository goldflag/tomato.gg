const tankNames = {
    "1": {
        "is_gift": false,
        "short_name": "T-34",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "33": {
        "is_gift": false,
        "short_name": "T14",
        "nation": "usa",
        "is_premium": true,
        "tier": 5,
        "type": "heavyTank"
    },
    "49": {
        "is_gift": true,
        "short_name": "Type 59",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "81": {
        "is_gift": false,
        "short_name": "Medium I",
        "nation": "uk",
        "is_premium": false,
        "tier": 1,
        "type": "mediumTank"
    },
    "113": {
        "is_gift": false,
        "short_name": "K-housenka",
        "nation": "czech",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "129": {
        "is_gift": false,
        "short_name": "Strv fm/21",
        "nation": "sweden",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "145": {
        "is_gift": false,
        "short_name": "Pudel",
        "nation": "poland",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "161": {
        "is_gift": false,
        "short_name": "Fiat 3000",
        "nation": "italy",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "257": {
        "is_gift": false,
        "short_name": "SU-85",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "273": {
        "is_gift": false,
        "short_name": "Hummel",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "SPG"
    },
    "289": {
        "is_gift": false,
        "short_name": "M3 Stuart",
        "nation": "usa",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "305": {
        "is_gift": true,
        "short_name": "Type 62",
        "nation": "china",
        "is_premium": true,
        "tier": 7,
        "type": "lightTank"
    },
    "321": {
        "is_gift": false,
        "short_name": "D2",
        "nation": "france",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "337": {
        "is_gift": false,
        "short_name": "Medium II",
        "nation": "uk",
        "is_premium": false,
        "tier": 2,
        "type": "mediumTank"
    },
    "353": {
        "is_gift": false,
        "short_name": "Chi-Ni",
        "nation": "japan",
        "is_premium": false,
        "tier": 2,
        "type": "mediumTank"
    },
    "369": {
        "is_gift": false,
        "short_name": "LT vz. 35",
        "nation": "czech",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "385": {
        "is_gift": false,
        "short_name": "Strv m/38",
        "nation": "sweden",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "401": {
        "is_gift": false,
        "short_name": "TKS 20",
        "nation": "poland",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "417": {
        "is_gift": false,
        "short_name": "L6/40",
        "nation": "italy",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "513": {
        "is_gift": false,
        "short_name": "IS",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "529": {
        "is_gift": false,
        "short_name": "Tiger I",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "545": {
        "is_gift": false,
        "short_name": "T1",
        "nation": "usa",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "561": {
        "is_gift": false,
        "short_name": "Type 59 G",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "577": {
        "is_gift": false,
        "short_name": "FT",
        "nation": "france",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "593": {
        "is_gift": false,
        "short_name": "M2",
        "nation": "uk",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "609": {
        "is_gift": false,
        "short_name": "R. Otsu",
        "nation": "japan",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "625": {
        "is_gift": false,
        "short_name": "LT vz. 38",
        "nation": "czech",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "641": {
        "is_gift": false,
        "short_name": "Strv m/40L",
        "nation": "sweden",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "673": {
        "is_gift": false,
        "short_name": "M14/41",
        "nation": "italy",
        "is_premium": false,
        "tier": 2,
        "type": "mediumTank"
    },
    "769": {
        "is_gift": false,
        "short_name": "BT-7",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "785": {
        "is_gift": false,
        "short_name": "Pz. 35 (t)",
        "nation": "germany",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "801": {
        "is_gift": false,
        "short_name": "M6",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "817": {
        "is_gift": true,
        "short_name": "WZ-111",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "833": {
        "is_gift": false,
        "short_name": "FT BS",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "SPG"
    },
    "849": {
        "is_gift": false,
        "short_name": "Matilda",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "865": {
        "is_gift": false,
        "short_name": "Ha-Go",
        "nation": "japan",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "881": {
        "is_gift": false,
        "short_name": "ST vz. 39",
        "nation": "czech",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "897": {
        "is_gift": false,
        "short_name": "Lago",
        "nation": "sweden",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "913": {
        "is_gift": false,
        "short_name": "50TP pr.",
        "nation": "poland",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "929": {
        "is_gift": false,
        "short_name": "M15/42",
        "nation": "italy",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "1025": {
        "is_gift": false,
        "short_name": "BT-2",
        "nation": "ussr",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "1041": {
        "is_gift": false,
        "short_name": "StuG III G",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "1057": {
        "is_gift": false,
        "short_name": "M4A1",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "1073": {
        "is_gift": false,
        "short_name": "T-34-1",
        "nation": "china",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1089": {
        "is_gift": false,
        "short_name": "B1",
        "nation": "france",
        "is_premium": false,
        "tier": 4,
        "type": "heavyTank"
    },
    "1105": {
        "is_gift": false,
        "short_name": "Cromwell",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1121": {
        "is_gift": false,
        "short_name": "Chi-Ri",
        "nation": "japan",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1137": {
        "is_gift": false,
        "short_name": "Škoda T 24",
        "nation": "czech",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "1153": {
        "is_gift": false,
        "short_name": "Strv m/42",
        "nation": "sweden",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "1169": {
        "is_gift": false,
        "short_name": "4TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "1185": {
        "is_gift": false,
        "short_name": "P26/40",
        "nation": "italy",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "1297": {
        "is_gift": false,
        "short_name": "Panther",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1313": {
        "is_gift": false,
        "short_name": "M4A3E8",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1329": {
        "is_gift": false,
        "short_name": "NC-31",
        "nation": "china",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "1345": {
        "is_gift": false,
        "short_name": "H35",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "1361": {
        "is_gift": false,
        "short_name": "Stuart I-IV",
        "nation": "uk",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "1377": {
        "is_gift": false,
        "short_name": "Chi-Nu",
        "nation": "japan",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "1393": {
        "is_gift": false,
        "short_name": "Škoda T 25",
        "nation": "czech",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1409": {
        "is_gift": false,
        "short_name": "Strv 74",
        "nation": "sweden",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1425": {
        "is_gift": false,
        "short_name": "7TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "1441": {
        "is_gift": false,
        "short_name": "P.43",
        "nation": "italy",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "1537": {
        "is_gift": false,
        "short_name": "T-28",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "1553": {
        "is_gift": false,
        "short_name": "Jg.Pz. IV",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "1569": {
        "is_gift": false,
        "short_name": "T20",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1585": {
        "is_gift": false,
        "short_name": "T-34-2",
        "nation": "china",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "1601": {
        "is_gift": false,
        "short_name": "D1",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "1617": {
        "is_gift": false,
        "short_name": "Grant",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "1633": {
        "is_gift": false,
        "short_name": "Chi-He",
        "nation": "japan",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "1649": {
        "is_gift": false,
        "short_name": "T-34/100",
        "nation": "czech",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1665": {
        "is_gift": false,
        "short_name": "Leo",
        "nation": "sweden",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "1681": {
        "is_gift": false,
        "short_name": "10TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "1697": {
        "is_gift": false,
        "short_name": "P.43 bis",
        "nation": "italy",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1793": {
        "is_gift": false,
        "short_name": "S-51",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "1809": {
        "is_gift": false,
        "short_name": "Hetzer",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "1825": {
        "is_gift": false,
        "short_name": "M2 Light",
        "nation": "usa",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "1841": {
        "is_gift": false,
        "short_name": "WZ-120",
        "nation": "china",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "1889": {
        "is_gift": false,
        "short_name": "Chi-To",
        "nation": "japan",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "1905": {
        "is_gift": false,
        "short_name": "TVP VTU",
        "nation": "czech",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "1921": {
        "is_gift": false,
        "short_name": "Emil I",
        "nation": "sweden",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "1937": {
        "is_gift": false,
        "short_name": "14TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "1953": {
        "is_gift": false,
        "short_name": "P.43 ter",
        "nation": "italy",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "2049": {
        "is_gift": false,
        "short_name": "A-20",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "2065": {
        "is_gift": false,
        "short_name": "Pz. II",
        "nation": "germany",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "2081": {
        "is_gift": false,
        "short_name": "T1 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 2,
        "type": "SPG"
    },
    "2097": {
        "is_gift": false,
        "short_name": "WZ-111 1-4",
        "nation": "china",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "2113": {
        "is_gift": false,
        "short_name": "leFH18B2",
        "nation": "france",
        "is_premium": true,
        "tier": 5,
        "type": "SPG"
    },
    "2129": {
        "is_gift": false,
        "short_name": "Crusader",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "2145": {
        "is_gift": false,
        "short_name": "Chi-Ha",
        "nation": "japan",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "2161": {
        "is_gift": false,
        "short_name": "Škoda T 50",
        "nation": "czech",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "2177": {
        "is_gift": false,
        "short_name": "Emil II",
        "nation": "sweden",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "2193": {
        "is_gift": false,
        "short_name": "25TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "2209": {
        "is_gift": false,
        "short_name": "P.44 Pantera",
        "nation": "italy",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "2305": {
        "is_gift": false,
        "short_name": "SU-152",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "2321": {
        "is_gift": false,
        "short_name": "VK 36.01 H",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "2353": {
        "is_gift": false,
        "short_name": "VAE Type B",
        "nation": "china",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "2369": {
        "is_gift": false,
        "short_name": "FCM36Pak40",
        "nation": "france",
        "is_premium": true,
        "tier": 3,
        "type": "AT-SPG"
    },
    "2385": {
        "is_gift": false,
        "short_name": "Medium III",
        "nation": "uk",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "2401": {
        "is_gift": false,
        "short_name": "Ke-Ni",
        "nation": "japan",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "2417": {
        "is_gift": false,
        "short_name": "TVP T 50/51",
        "nation": "czech",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "2433": {
        "is_gift": false,
        "short_name": "Kranvagn",
        "nation": "sweden",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "2449": {
        "is_gift": false,
        "short_name": "40TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "2465": {
        "is_gift": false,
        "short_name": "Standard B",
        "nation": "italy",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "2561": {
        "is_gift": false,
        "short_name": "T-34-85",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "2577": {
        "is_gift": false,
        "short_name": "VK 30.01 H",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "2593": {
        "is_gift": false,
        "short_name": "T30",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "2625": {
        "is_gift": false,
        "short_name": "ARL 44",
        "nation": "france",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "2657": {
        "is_gift": false,
        "short_name": "STA-1",
        "nation": "japan",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "2689": {
        "is_gift": false,
        "short_name": "Pvlvv fm/42",
        "nation": "sweden",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "2705": {
        "is_gift": false,
        "short_name": "45TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "2721": {
        "is_gift": false,
        "short_name": "Progetto 65",
        "nation": "italy",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "2817": {
        "is_gift": false,
        "short_name": "KV-85",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "2833": {
        "is_gift": false,
        "short_name": "Bison",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "2849": {
        "is_gift": false,
        "short_name": "T34",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "2865": {
        "is_gift": false,
        "short_name": "110",
        "nation": "china",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "2881": {
        "is_gift": false,
        "short_name": "AMX 40",
        "nation": "france",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "2897": {
        "is_gift": false,
        "short_name": "Churchill I",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "heavyTank"
    },
    "2913": {
        "is_gift": false,
        "short_name": "Ke-Ho",
        "nation": "japan",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "2945": {
        "is_gift": false,
        "short_name": "Ikv 72",
        "nation": "sweden",
        "is_premium": false,
        "tier": 3,
        "type": "AT-SPG"
    },
    "2961": {
        "is_gift": false,
        "short_name": "53TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "3073": {
        "is_gift": false,
        "short_name": "T-46",
        "nation": "ussr",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "3089": {
        "is_gift": false,
        "short_name": "L.Tr.",
        "nation": "germany",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "3105": {
        "is_gift": false,
        "short_name": "M3 Lee",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "3121": {
        "is_gift": false,
        "short_name": "M5A1 Stuart",
        "nation": "china",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "3137": {
        "is_gift": false,
        "short_name": "AMX 50 100",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "3153": {
        "is_gift": false,
        "short_name": "Black Prince",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "3169": {
        "is_gift": false,
        "short_name": "Te-Ke",
        "nation": "japan",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "3201": {
        "is_gift": false,
        "short_name": "Sav m/43",
        "nation": "sweden",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "3217": {
        "is_gift": false,
        "short_name": "50TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "3329": {
        "is_gift": false,
        "short_name": "MS-1",
        "nation": "ussr",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "3345": {
        "is_gift": false,
        "short_name": "Pz. 38 (t)",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "3361": {
        "is_gift": false,
        "short_name": "T1 Heavy",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "heavyTank"
    },
    "3377": {
        "is_gift": false,
        "short_name": "WZ-131",
        "nation": "china",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "3393": {
        "is_gift": false,
        "short_name": "Lorr. 39L AM",
        "nation": "france",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "3409": {
        "is_gift": false,
        "short_name": "Sexton II",
        "nation": "uk",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "3425": {
        "is_gift": false,
        "short_name": "Type 61",
        "nation": "japan",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "3457": {
        "is_gift": false,
        "short_name": "Ikv 103",
        "nation": "sweden",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "3473": {
        "is_gift": false,
        "short_name": "60TP",
        "nation": "poland",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "3585": {
        "is_gift": false,
        "short_name": "SU-100",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "3601": {
        "is_gift": false,
        "short_name": "Pz.Jäg. I",
        "nation": "germany",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "3617": {
        "is_gift": false,
        "short_name": "M7 Priest",
        "nation": "usa",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "3633": {
        "is_gift": false,
        "short_name": "IS-2",
        "nation": "china",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "3649": {
        "is_gift": false,
        "short_name": "B-C 25 t",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "3665": {
        "is_gift": false,
        "short_name": "Firefly",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "3681": {
        "is_gift": false,
        "short_name": "STB-1",
        "nation": "japan",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "3713": {
        "is_gift": false,
        "short_name": "Ikv 65 II",
        "nation": "sweden",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "3729": {
        "is_gift": false,
        "short_name": "DS PZInż",
        "nation": "poland",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "3841": {
        "is_gift": false,
        "short_name": "SU-18",
        "nation": "ussr",
        "is_premium": false,
        "tier": 2,
        "type": "SPG"
    },
    "3857": {
        "is_gift": false,
        "short_name": "JPanther",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "3873": {
        "is_gift": false,
        "short_name": "T29",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "3889": {
        "is_gift": false,
        "short_name": "WZ-132",
        "nation": "china",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "3905": {
        "is_gift": false,
        "short_name": "AMX 50 120",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "3921": {
        "is_gift": false,
        "short_name": "Caernarvon",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "3937": {
        "is_gift": false,
        "short_name": "Type 5 Heavy",
        "nation": "japan",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "3969": {
        "is_gift": false,
        "short_name": "Ikv 90 B",
        "nation": "sweden",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "3985": {
        "is_gift": false,
        "short_name": "B.U.G.I.",
        "nation": "poland",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "4097": {
        "is_gift": false,
        "short_name": "SU-14-2",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "SPG"
    },
    "4113": {
        "is_gift": false,
        "short_name": "VK 30.02 D",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "4129": {
        "is_gift": false,
        "short_name": "M41 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "SPG"
    },
    "4145": {
        "is_gift": false,
        "short_name": "121",
        "nation": "china",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "4161": {
        "is_gift": false,
        "short_name": "AMX 13 AM",
        "nation": "france",
        "is_premium": false,
        "tier": 5,
        "type": "SPG"
    },
    "4193": {
        "is_gift": false,
        "short_name": "Type 4 Heavy",
        "nation": "japan",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "4225": {
        "is_gift": false,
        "short_name": "UDES 03",
        "nation": "sweden",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "4241": {
        "is_gift": false,
        "short_name": "CS-44",
        "nation": "poland",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "4353": {
        "is_gift": false,
        "short_name": "T-44",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "4369": {
        "is_gift": false,
        "short_name": "Pz. III J",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "4385": {
        "is_gift": false,
        "short_name": "T32",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "4401": {
        "is_gift": false,
        "short_name": "Chi-Ha",
        "nation": "china",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "4417": {
        "is_gift": false,
        "short_name": "G1 R",
        "nation": "france",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "4433": {
        "is_gift": false,
        "short_name": "Conqueror",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "4449": {
        "is_gift": false,
        "short_name": "Type 95",
        "nation": "japan",
        "is_premium": false,
        "tier": 4,
        "type": "heavyTank"
    },
    "4481": {
        "is_gift": false,
        "short_name": "Strv 103-0",
        "nation": "sweden",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "4497": {
        "is_gift": false,
        "short_name": "CS-53",
        "nation": "poland",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "4609": {
        "is_gift": false,
        "short_name": "T-26",
        "nation": "ussr",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "4625": {
        "is_gift": false,
        "short_name": "St.Pz. II",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "4641": {
        "is_gift": false,
        "short_name": "M37",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "4657": {
        "is_gift": false,
        "short_name": "Type T-34",
        "nation": "china",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "4673": {
        "is_gift": false,
        "short_name": "AMX 13 F3",
        "nation": "france",
        "is_premium": false,
        "tier": 6,
        "type": "SPG"
    },
    "4689": {
        "is_gift": false,
        "short_name": "Churchill VII",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "4705": {
        "is_gift": false,
        "short_name": "Type 91",
        "nation": "japan",
        "is_premium": false,
        "tier": 3,
        "type": "heavyTank"
    },
    "4737": {
        "is_gift": false,
        "short_name": "Strv 103B",
        "nation": "sweden",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "4865": {
        "is_gift": false,
        "short_name": "SU-5",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "4881": {
        "is_gift": false,
        "short_name": "Pz. III E",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "4897": {
        "is_gift": false,
        "short_name": "M2 Medium",
        "nation": "usa",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "4913": {
        "is_gift": false,
        "short_name": "59-16",
        "nation": "china",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "4929": {
        "is_gift": false,
        "short_name": "AMX 13 90",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "4945": {
        "is_gift": false,
        "short_name": "Valentine",
        "nation": "uk",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "4961": {
        "is_gift": false,
        "short_name": "O-Ho",
        "nation": "japan",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "4993": {
        "is_gift": false,
        "short_name": "UDES 14 5",
        "nation": "sweden",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "5121": {
        "is_gift": false,
        "short_name": "AT-1",
        "nation": "ussr",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "5137": {
        "is_gift": false,
        "short_name": "Tiger II",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "5153": {
        "is_gift": false,
        "short_name": "M5 Stuart",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "5169": {
        "is_gift": false,
        "short_name": "Type 58",
        "nation": "china",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "5185": {
        "is_gift": false,
        "short_name": "AMX 13 75",
        "nation": "france",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "5201": {
        "is_gift": false,
        "short_name": "Cruiser I",
        "nation": "uk",
        "is_premium": false,
        "tier": 1,
        "type": "lightTank"
    },
    "5217": {
        "is_gift": false,
        "short_name": "O-Ni",
        "nation": "japan",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "5249": {
        "is_gift": false,
        "short_name": "UDES 16",
        "nation": "sweden",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "5265": {
        "is_gift": false,
        "short_name": "CS-63",
        "nation": "poland",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "5377": {
        "is_gift": false,
        "short_name": "IS-3",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "5393": {
        "is_gift": false,
        "short_name": "Leopard",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "5409": {
        "is_gift": false,
        "short_name": "M7",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "5425": {
        "is_gift": false,
        "short_name": "113",
        "nation": "china",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "5457": {
        "is_gift": false,
        "short_name": "Comet",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "5473": {
        "is_gift": false,
        "short_name": "O-I",
        "nation": "japan",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "5505": {
        "is_gift": false,
        "short_name": "UDES 15/16",
        "nation": "sweden",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "5633": {
        "is_gift": false,
        "short_name": "SU-8",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "SPG"
    },
    "5649": {
        "is_gift": false,
        "short_name": "Grille",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "SPG"
    },
    "5665": {
        "is_gift": false,
        "short_name": "T2 Medium",
        "nation": "usa",
        "is_premium": false,
        "tier": 2,
        "type": "mediumTank"
    },
    "5681": {
        "is_gift": false,
        "short_name": "WZ-132A",
        "nation": "china",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "5697": {
        "is_gift": false,
        "short_name": "B-C 25 t AP",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "5713": {
        "is_gift": false,
        "short_name": "Centurion 7/1",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "5729": {
        "is_gift": false,
        "short_name": "O-I Exp.",
        "nation": "japan",
        "is_premium": false,
        "tier": 5,
        "type": "heavyTank"
    },
    "5889": {
        "is_gift": false,
        "short_name": "KV-3",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "5905": {
        "is_gift": false,
        "short_name": "Wespe",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "5921": {
        "is_gift": false,
        "short_name": "Pershing",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "5937": {
        "is_gift": false,
        "short_name": "WZ-132-1",
        "nation": "china",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "5953": {
        "is_gift": false,
        "short_name": "AMX 38",
        "nation": "france",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "5969": {
        "is_gift": false,
        "short_name": "Centurion I",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "5985": {
        "is_gift": false,
        "short_name": "I-Go/Chi-Ro",
        "nation": "japan",
        "is_premium": false,
        "tier": 2,
        "type": "mediumTank"
    },
    "6145": {
        "is_gift": false,
        "short_name": "IS-4",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "6161": {
        "is_gift": false,
        "short_name": "Luchs",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "6177": {
        "is_gift": false,
        "short_name": "T3 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "6193": {
        "is_gift": false,
        "short_name": "WZ-111 5A",
        "nation": "china",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "6209": {
        "is_gift": false,
        "short_name": "AMX 50 B",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "6225": {
        "is_gift": false,
        "short_name": "FV215b",
        "nation": "uk",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "6401": {
        "is_gift": false,
        "short_name": "SU-76M",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "6417": {
        "is_gift": false,
        "short_name": "Pz. III/IV",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "6433": {
        "is_gift": false,
        "short_name": "T56 GMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 3,
        "type": "AT-SPG"
    },
    "6449": {
        "is_gift": false,
        "short_name": "T-26G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "6465": {
        "is_gift": false,
        "short_name": "AMX 12 t",
        "nation": "france",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "6481": {
        "is_gift": false,
        "short_name": "Covenanter",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "6657": {
        "is_gift": false,
        "short_name": "T-43",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "6673": {
        "is_gift": false,
        "short_name": "Marder II",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "AT-SPG"
    },
    "6705": {
        "is_gift": false,
        "short_name": "M3G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 3,
        "type": "AT-SPG"
    },
    "6721": {
        "is_gift": false,
        "short_name": "BDR G1 B",
        "nation": "france",
        "is_premium": false,
        "tier": 5,
        "type": "heavyTank"
    },
    "6913": {
        "is_gift": false,
        "short_name": "SU-85B",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "6929": {
        "is_gift": false,
        "short_name": "Maus",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "6945": {
        "is_gift": false,
        "short_name": "Wolverine",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "6961": {
        "is_gift": false,
        "short_name": "SU-76G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "6977": {
        "is_gift": false,
        "short_name": "AMX M4 45",
        "nation": "france",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "6993": {
        "is_gift": false,
        "short_name": "Cruiser II",
        "nation": "uk",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "7169": {
        "is_gift": false,
        "short_name": "IS-7",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "7185": {
        "is_gift": false,
        "short_name": "VK 30.01 P",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "7201": {
        "is_gift": false,
        "short_name": "Jackson",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "7217": {
        "is_gift": false,
        "short_name": "60G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "7233": {
        "is_gift": false,
        "short_name": "Lorr. 155 50",
        "nation": "france",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "7249": {
        "is_gift": false,
        "short_name": "Centurion AX",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "7425": {
        "is_gift": false,
        "short_name": "ISU-152",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "7441": {
        "is_gift": false,
        "short_name": "VK 45.02 B",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "7457": {
        "is_gift": false,
        "short_name": "M40/M43",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "SPG"
    },
    "7473": {
        "is_gift": false,
        "short_name": "WZ-131G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "7489": {
        "is_gift": false,
        "short_name": "Lorr. 155 51",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "SPG"
    },
    "7505": {
        "is_gift": false,
        "short_name": "Cruiser IV",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "7681": {
        "is_gift": false,
        "short_name": "SU-26",
        "nation": "ussr",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "7697": {
        "is_gift": false,
        "short_name": "Ferdinand",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "7713": {
        "is_gift": false,
        "short_name": "T40",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "7729": {
        "is_gift": false,
        "short_name": "T-34-2G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "7745": {
        "is_gift": false,
        "short_name": "FT AC",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "7761": {
        "is_gift": false,
        "short_name": "Cruiser III",
        "nation": "uk",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "7937": {
        "is_gift": false,
        "short_name": "T-54",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "7953": {
        "is_gift": false,
        "short_name": "Jagdtiger",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "7969": {
        "is_gift": false,
        "short_name": "M12",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "7985": {
        "is_gift": false,
        "short_name": "WZ-111-1 FT",
        "nation": "china",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "8017": {
        "is_gift": false,
        "short_name": "Valentine AT",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "8081": {
        "is_gift": false,
        "short_name": "CS-59",
        "nation": "poland",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "8193": {
        "is_gift": false,
        "short_name": "Obj. 704",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "8209": {
        "is_gift": false,
        "short_name": "Pz. 38 nA",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "8225": {
        "is_gift": false,
        "short_name": "T28",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "8241": {
        "is_gift": false,
        "short_name": "WZ-111G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "8257": {
        "is_gift": false,
        "short_name": "UE 57",
        "nation": "france",
        "is_premium": false,
        "tier": 3,
        "type": "AT-SPG"
    },
    "8273": {
        "is_gift": false,
        "short_name": "UC 2-pdr",
        "nation": "uk",
        "is_premium": false,
        "tier": 2,
        "type": "AT-SPG"
    },
    "8449": {
        "is_gift": false,
        "short_name": "212A",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "SPG"
    },
    "8465": {
        "is_gift": false,
        "short_name": "Panther II",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "8481": {
        "is_gift": false,
        "short_name": "T92 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "SPG"
    },
    "8497": {
        "is_gift": false,
        "short_name": "WZ-113G FT",
        "nation": "china",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "8529": {
        "is_gift": false,
        "short_name": "AT 15",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "8705": {
        "is_gift": false,
        "short_name": "Obj. 261",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "SPG"
    },
    "8721": {
        "is_gift": false,
        "short_name": "G.W. Tiger",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "SPG"
    },
    "8737": {
        "is_gift": false,
        "short_name": "T95",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "8785": {
        "is_gift": false,
        "short_name": "AT 2",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "8961": {
        "is_gift": false,
        "short_name": "KV-13",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "8977": {
        "is_gift": false,
        "short_name": "G.W. Panther",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "8993": {
        "is_gift": false,
        "short_name": "M46 Patton",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "9041": {
        "is_gift": false,
        "short_name": "Alecto",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "9217": {
        "is_gift": false,
        "short_name": "IS-6",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "9233": {
        "is_gift": false,
        "short_name": "G.W. E 100",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "SPG"
    },
    "9249": {
        "is_gift": false,
        "short_name": "T25 AT",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "9297": {
        "is_gift": false,
        "short_name": "FV215b 183",
        "nation": "uk",
        "is_premium": true,
        "tier": 10,
        "type": "AT-SPG"
    },
    "9473": {
        "is_gift": false,
        "short_name": "T-50",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "9489": {
        "is_gift": false,
        "short_name": "E 100",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "9505": {
        "is_gift": false,
        "short_name": "M103",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "9553": {
        "is_gift": false,
        "short_name": "AT 8",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "9745": {
        "is_gift": false,
        "short_name": "E 75",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "9761": {
        "is_gift": false,
        "short_name": "Chaffee",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "9793": {
        "is_gift": false,
        "short_name": "SAu 40",
        "nation": "france",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "9809": {
        "is_gift": false,
        "short_name": "Churchill GC",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "9985": {
        "is_gift": false,
        "short_name": "SU-101",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "10001": {
        "is_gift": false,
        "short_name": "VK 28.01",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "10017": {
        "is_gift": false,
        "short_name": "M4A3E2",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "10049": {
        "is_gift": false,
        "short_name": "S35 CA",
        "nation": "france",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "10065": {
        "is_gift": false,
        "short_name": "AT 7",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "10241": {
        "is_gift": false,
        "short_name": "SU-100M1",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "10257": {
        "is_gift": false,
        "short_name": "E 50",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "10273": {
        "is_gift": false,
        "short_name": "M8A1",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "10497": {
        "is_gift": false,
        "short_name": "KV-2",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "10513": {
        "is_gift": false,
        "short_name": "VK 45.02 A",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "10529": {
        "is_gift": false,
        "short_name": "T67",
        "nation": "usa",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "10577": {
        "is_gift": false,
        "short_name": "Loyd GC",
        "nation": "uk",
        "is_premium": false,
        "tier": 2,
        "type": "SPG"
    },
    "10753": {
        "is_gift": false,
        "short_name": "ST-I",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "10769": {
        "is_gift": false,
        "short_name": "Tiger (P)",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "heavyTank"
    },
    "10785": {
        "is_gift": false,
        "short_name": "T110E5",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "10817": {
        "is_gift": false,
        "short_name": "AMX AC 46",
        "nation": "france",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "10833": {
        "is_gift": false,
        "short_name": "Birch Gun",
        "nation": "uk",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "11009": {
        "is_gift": false,
        "short_name": "KV-4",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "11025": {
        "is_gift": false,
        "short_name": "St. Emil",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "11041": {
        "is_gift": false,
        "short_name": "T25/2",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "11073": {
        "is_gift": false,
        "short_name": "Foch",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "11089": {
        "is_gift": false,
        "short_name": "Bishop",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "SPG"
    },
    "11265": {
        "is_gift": false,
        "short_name": "T-150",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "11281": {
        "is_gift": false,
        "short_name": "Marder 38T",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "11297": {
        "is_gift": false,
        "short_name": "T28 Prot.",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "11345": {
        "is_gift": false,
        "short_name": "Crusader SP",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "11521": {
        "is_gift": false,
        "short_name": "T-10",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "11537": {
        "is_gift": false,
        "short_name": "JPanther II",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "11553": {
        "is_gift": false,
        "short_name": "Hellcat",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "11585": {
        "is_gift": false,
        "short_name": "ARL V39",
        "nation": "france",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "11601": {
        "is_gift": false,
        "short_name": "FV3805",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "SPG"
    },
    "11777": {
        "is_gift": false,
        "short_name": "KV-1",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "heavyTank"
    },
    "11793": {
        "is_gift": false,
        "short_name": "Nashorn",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "11809": {
        "is_gift": false,
        "short_name": "T23E3",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "mediumTank"
    },
    "11841": {
        "is_gift": false,
        "short_name": "B-C 155 58",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "SPG"
    },
    "11857": {
        "is_gift": false,
        "short_name": "FV304",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "SPG"
    },
    "12049": {
        "is_gift": false,
        "short_name": "Jg.Pz. E 100",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "12097": {
        "is_gift": false,
        "short_name": "AMX AC 48",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "12113": {
        "is_gift": false,
        "short_name": "FV207",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "SPG"
    },
    "12289": {
        "is_gift": false,
        "short_name": "A-43",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "12305": {
        "is_gift": false,
        "short_name": "E 50 M",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "12369": {
        "is_gift": false,
        "short_name": "ConquerorGC",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "SPG"
    },
    "12545": {
        "is_gift": false,
        "short_name": "A-44",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "mediumTank"
    },
    "12561": {
        "is_gift": false,
        "short_name": "Pz. I C",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "12577": {
        "is_gift": true,
        "short_name": "M4 Improved",
        "nation": "usa",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "12817": {
        "is_gift": false,
        "short_name": "Pz. I",
        "nation": "germany",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "12881": {
        "is_gift": false,
        "short_name": "Sherman III",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "13073": {
        "is_gift": false,
        "short_name": "Pz. II G",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "13089": {
        "is_gift": false,
        "short_name": "T110E4",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "13121": {
        "is_gift": false,
        "short_name": "Somua S35",
        "nation": "france",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "13137": {
        "is_gift": false,
        "short_name": "Conway",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "13313": {
        "is_gift": false,
        "short_name": "Obj. 416",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "13329": {
        "is_gift": false,
        "short_name": "D.W. 2",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "heavyTank"
    },
    "13345": {
        "is_gift": false,
        "short_name": "T26E4",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "13393": {
        "is_gift": false,
        "short_name": "Archer",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "13569": {
        "is_gift": false,
        "short_name": "Obj. 268",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "13585": {
        "is_gift": false,
        "short_name": "VK 20.01 D",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "13825": {
        "is_gift": false,
        "short_name": "T-62A",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "13841": {
        "is_gift": false,
        "short_name": "Indien-Pz.",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "13857": {
        "is_gift": false,
        "short_name": "T110E3",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "13889": {
        "is_gift": false,
        "short_name": "Foch 155",
        "nation": "france",
        "is_premium": true,
        "tier": 10,
        "type": "AT-SPG"
    },
    "13905": {
        "is_gift": false,
        "short_name": "FV4005",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "14097": {
        "is_gift": false,
        "short_name": "VK 30.01 D",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "14113": {
        "is_gift": false,
        "short_name": "M48 Patton",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "14145": {
        "is_gift": false,
        "short_name": "AMX ELC bis",
        "nation": "france",
        "is_premium": false,
        "tier": 5,
        "type": "lightTank"
    },
    "14161": {
        "is_gift": false,
        "short_name": "Challenger",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "AT-SPG"
    },
    "14353": {
        "is_gift": false,
        "short_name": "Aufkl.Panther",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "14401": {
        "is_gift": false,
        "short_name": "B-C 155 55",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "SPG"
    },
    "14417": {
        "is_gift": false,
        "short_name": "Achilles",
        "nation": "uk",
        "is_premium": false,
        "tier": 6,
        "type": "AT-SPG"
    },
    "14609": {
        "is_gift": false,
        "short_name": "Leopard 1",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "14625": {
        "is_gift": false,
        "short_name": "T69",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "mediumTank"
    },
    "14657": {
        "is_gift": false,
        "short_name": "AMX 105 AM",
        "nation": "france",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "14673": {
        "is_gift": false,
        "short_name": "Charioteer",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "14865": {
        "is_gift": false,
        "short_name": "Leopard PT A",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "14881": {
        "is_gift": false,
        "short_name": "T57 Heavy",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "14913": {
        "is_gift": false,
        "short_name": "SARL 42",
        "nation": "france",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "15105": {
        "is_gift": false,
        "short_name": "T-70",
        "nation": "ussr",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "15121": {
        "is_gift": false,
        "short_name": "G.Pz. Mk. VI",
        "nation": "germany",
        "is_premium": false,
        "tier": 2,
        "type": "SPG"
    },
    "15137": {
        "is_gift": false,
        "short_name": "T21",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "15169": {
        "is_gift": false,
        "short_name": "FCM 36",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "15361": {
        "is_gift": false,
        "short_name": "T-60",
        "nation": "ussr",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "15377": {
        "is_gift": false,
        "short_name": "G.W. Tiger P",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "SPG"
    },
    "15393": {
        "is_gift": false,
        "short_name": "T54E1",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "15425": {
        "is_gift": false,
        "short_name": "AMX 30 B",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "15441": {
        "is_gift": false,
        "short_name": "Chieftain/T95",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "15617": {
        "is_gift": false,
        "short_name": "Obj. 907",
        "nation": "ussr",
        "is_premium": true,
        "tier": 10,
        "type": "mediumTank"
    },
    "15633": {
        "is_gift": false,
        "short_name": "Pz.Sfl. IVb",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "15649": {
        "is_gift": false,
        "short_name": "T71 DA",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "15681": {
        "is_gift": false,
        "short_name": "AMX 30",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "15697": {
        "is_gift": false,
        "short_name": "S. Conqueror",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "15873": {
        "is_gift": false,
        "short_name": "T-80",
        "nation": "ussr",
        "is_premium": false,
        "tier": 4,
        "type": "lightTank"
    },
    "15889": {
        "is_gift": false,
        "short_name": "VK 30.02 M",
        "nation": "germany",
        "is_premium": false,
        "tier": 6,
        "type": "mediumTank"
    },
    "15905": {
        "is_gift": false,
        "short_name": "M60",
        "nation": "usa",
        "is_premium": true,
        "tier": 10,
        "type": "mediumTank"
    },
    "15937": {
        "is_gift": false,
        "short_name": "R35",
        "nation": "france",
        "is_premium": false,
        "tier": 2,
        "type": "lightTank"
    },
    "15953": {
        "is_gift": false,
        "short_name": "Badger",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "16129": {
        "is_gift": false,
        "short_name": "SU-14-1",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "SPG"
    },
    "16145": {
        "is_gift": false,
        "short_name": "Pz.Sfl. IVc",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "AT-SPG"
    },
    "16161": {
        "is_gift": false,
        "short_name": "M53/M55",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "SPG"
    },
    "16209": {
        "is_gift": false,
        "short_name": "Cavalier",
        "nation": "uk",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "16385": {
        "is_gift": false,
        "short_name": "SU-122A",
        "nation": "ussr",
        "is_premium": false,
        "tier": 5,
        "type": "SPG"
    },
    "16401": {
        "is_gift": false,
        "short_name": "WT auf Pz. IV",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "16417": {
        "is_gift": false,
        "short_name": "M44",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "SPG"
    },
    "16449": {
        "is_gift": false,
        "short_name": "AMX 65 t",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "16641": {
        "is_gift": false,
        "short_name": "MT-25",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "16657": {
        "is_gift": false,
        "short_name": "Rhm.-B. WT",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "AT-SPG"
    },
    "16673": {
        "is_gift": false,
        "short_name": "T37",
        "nation": "usa",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "16705": {
        "is_gift": false,
        "short_name": "AMX M4 51",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "16897": {
        "is_gift": false,
        "short_name": "Obj. 140",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "16913": {
        "is_gift": false,
        "short_name": "WT E 100",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "16961": {
        "is_gift": false,
        "short_name": "AMX M4 54",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "17169": {
        "is_gift": false,
        "short_name": "Pz. IV A",
        "nation": "germany",
        "is_premium": false,
        "tier": 3,
        "type": "mediumTank"
    },
    "17217": {
        "is_gift": false,
        "short_name": "AMX 13 105",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "17425": {
        "is_gift": false,
        "short_name": "Pz. IV D",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "17473": {
        "is_gift": false,
        "short_name": "B-C 12 t",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "17665": {
        "is_gift": false,
        "short_name": "Obj. 430 II",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "17729": {
        "is_gift": false,
        "short_name": "Foch B",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "17937": {
        "is_gift": false,
        "short_name": "StuG III B",
        "nation": "germany",
        "is_premium": false,
        "tier": 4,
        "type": "AT-SPG"
    },
    "17953": {
        "is_gift": false,
        "short_name": "M41 Bulldog",
        "nation": "usa",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "17985": {
        "is_gift": false,
        "short_name": "AMD 178B",
        "nation": "france",
        "is_premium": false,
        "tier": 6,
        "type": "lightTank"
    },
    "18177": {
        "is_gift": false,
        "short_name": "T-54 ltwt.",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "18193": {
        "is_gift": false,
        "short_name": "Pz. IV H",
        "nation": "germany",
        "is_premium": false,
        "tier": 5,
        "type": "mediumTank"
    },
    "18209": {
        "is_gift": false,
        "short_name": "T49",
        "nation": "usa",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "18241": {
        "is_gift": false,
        "short_name": "EBR Hotch.",
        "nation": "france",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "18433": {
        "is_gift": false,
        "short_name": "LTTB",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "18449": {
        "is_gift": false,
        "short_name": "Ru 251",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "18465": {
        "is_gift": false,
        "short_name": "T18 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 3,
        "type": "SPG"
    },
    "18497": {
        "is_gift": false,
        "short_name": "Lynx 6x6",
        "nation": "france",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "18689": {
        "is_gift": false,
        "short_name": "KV-1S",
        "nation": "ussr",
        "is_premium": false,
        "tier": 6,
        "type": "heavyTank"
    },
    "18705": {
        "is_gift": false,
        "short_name": "Mäuschen",
        "nation": "germany",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "18721": {
        "is_gift": false,
        "short_name": "T82 HMC",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "SPG"
    },
    "18753": {
        "is_gift": false,
        "short_name": "EBR 90",
        "nation": "france",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "18961": {
        "is_gift": false,
        "short_name": "SP I C",
        "nation": "germany",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "19009": {
        "is_gift": false,
        "short_name": "EBR 105",
        "nation": "france",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "19201": {
        "is_gift": false,
        "short_name": "T-100 LT",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "19217": {
        "is_gift": false,
        "short_name": "Grille 15",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "19457": {
        "is_gift": false,
        "short_name": "LTG",
        "nation": "ussr",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "19473": {
        "is_gift": false,
        "short_name": "Pz.Kpfw. VII",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "19489": {
        "is_gift": false,
        "short_name": "Sheridan",
        "nation": "usa",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "19713": {
        "is_gift": false,
        "short_name": "Obj. 257",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "19729": {
        "is_gift": false,
        "short_name": "VK 100.01 P",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "19745": {
        "is_gift": false,
        "short_name": "T71 CMCD",
        "nation": "usa",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "19969": {
        "is_gift": false,
        "short_name": "Obj. 430U",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "19985": {
        "is_gift": false,
        "short_name": "Rhm. Pzw.",
        "nation": "germany",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "20225": {
        "is_gift": false,
        "short_name": "Obj. 268 4",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "AT-SPG"
    },
    "20241": {
        "is_gift": false,
        "short_name": "HWK 12",
        "nation": "germany",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "20257": {
        "is_gift": false,
        "short_name": "T6 Medium",
        "nation": "usa",
        "is_premium": false,
        "tier": 4,
        "type": "mediumTank"
    },
    "20481": {
        "is_gift": false,
        "short_name": "IS-M",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "20737": {
        "is_gift": false,
        "short_name": "Obj. 705",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "20993": {
        "is_gift": false,
        "short_name": "Obj. 705A",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "21249": {
        "is_gift": false,
        "short_name": "Obj. 263",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "21505": {
        "is_gift": false,
        "short_name": "Obj. 430",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "mediumTank"
    },
    "21761": {
        "is_gift": false,
        "short_name": "K-91",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "mediumTank"
    },
    "22017": {
        "is_gift": false,
        "short_name": "Obj. 277",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "22273": {
        "is_gift": false,
        "short_name": "ST-II",
        "nation": "ussr",
        "is_premium": false,
        "tier": 10,
        "type": "heavyTank"
    },
    "22529": {
        "is_gift": false,
        "short_name": "IS-3-II",
        "nation": "ussr",
        "is_premium": false,
        "tier": 9,
        "type": "heavyTank"
    },
    "22785": {
        "is_gift": false,
        "short_name": "IS-2-II",
        "nation": "ussr",
        "is_premium": false,
        "tier": 8,
        "type": "heavyTank"
    },
    "23041": {
        "is_gift": false,
        "short_name": "BT-5",
        "nation": "ussr",
        "is_premium": false,
        "tier": 3,
        "type": "lightTank"
    },
    "31233": {
        "is_gift": false,
        "short_name": "IS-2S",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "31745": {
        "is_gift": false,
        "short_name": "ISU-152K",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "32001": {
        "is_gift": false,
        "short_name": "Obj. 780",
        "nation": "ussr",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "43329": {
        "is_gift": false,
        "short_name": "AM Gendron",
        "nation": "france",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "43521": {
        "is_gift": false,
        "short_name": "IS-6 FL",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "43585": {
        "is_gift": false,
        "short_name": "EBR 75 FL 10",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "43777": {
        "is_gift": false,
        "short_name": "T-54 mod. 1 FL",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "43841": {
        "is_gift": false,
        "short_name": "AMR 35",
        "nation": "france",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "44033": {
        "is_gift": false,
        "short_name": "T-44 FL",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "44289": {
        "is_gift": false,
        "short_name": "703 II (122)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "44545": {
        "is_gift": false,
        "short_name": "Obj. 777 II",
        "nation": "ussr",
        "is_premium": true,
        "tier": 9,
        "type": "heavyTank"
    },
    "44801": {
        "is_gift": false,
        "short_name": "T-116",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "45057": {
        "is_gift": false,
        "short_name": "SU-130PM",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "45313": {
        "is_gift": false,
        "short_name": "T-50-2",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "lightTank"
    },
    "45569": {
        "is_gift": false,
        "short_name": "LT-432",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "46081": {
        "is_gift": false,
        "short_name": "T-44-100 (K)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "46337": {
        "is_gift": false,
        "short_name": "T-44-100 (U)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "46593": {
        "is_gift": false,
        "short_name": "IS-2M",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "46609": {
        "is_gift": false,
        "short_name": "M48 RPz",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "46849": {
        "is_gift": false,
        "short_name": "Obj. 279 (e)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "46865": {
        "is_gift": false,
        "short_name": "E 75 TS",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "47105": {
        "is_gift": false,
        "short_name": "T-34S",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "47121": {
        "is_gift": false,
        "short_name": "Kpz 50 t",
        "nation": "germany",
        "is_premium": true,
        "tier": 9,
        "type": "mediumTank"
    },
    "47361": {
        "is_gift": false,
        "short_name": "Guard",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "47377": {
        "is_gift": false,
        "short_name": "HWK 30",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "47617": {
        "is_gift": false,
        "short_name": "STG",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "47633": {
        "is_gift": false,
        "short_name": "MKA",
        "nation": "germany",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "47873": {
        "is_gift": false,
        "short_name": "T-29",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "mediumTank"
    },
    "48129": {
        "is_gift": false,
        "short_name": "Loza's M4-A2",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "48145": {
        "is_gift": false,
        "short_name": "Mauerbrecher",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "48385": {
        "is_gift": false,
        "short_name": "T-103",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "48401": {
        "is_gift": false,
        "short_name": "KanJPz 105",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "48641": {
        "is_gift": false,
        "short_name": "Defender",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "48897": {
        "is_gift": false,
        "short_name": "T-44-100 (B)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "48913": {
        "is_gift": false,
        "short_name": "VK 168.01 P",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "49169": {
        "is_gift": false,
        "short_name": "Tiger 131",
        "nation": "germany",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "49409": {
        "is_gift": false,
        "short_name": "IS-6 B",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "49665": {
        "is_gift": false,
        "short_name": "Obj. 252U",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "49921": {
        "is_gift": false,
        "short_name": "KV-122",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "49937": {
        "is_gift": false,
        "short_name": "Schwarzpz.58",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "50193": {
        "is_gift": false,
        "short_name": "Skorpion G",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "50945": {
        "is_gift": false,
        "short_name": "T-45",
        "nation": "ussr",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "50961": {
        "is_gift": false,
        "short_name": "M 41 90 GF",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "51089": {
        "is_gift": false,
        "short_name": "CS-52 LIS",
        "nation": "poland",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "51201": {
        "is_gift": false,
        "short_name": "KV-220-2 T",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "heavyTank"
    },
    "51345": {
        "is_gift": false,
        "short_name": "Rudy Pl",
        "nation": "poland",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "51361": {
        "is_gift": false,
        "short_name": "Progetto 46",
        "nation": "italy",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "51457": {
        "is_gift": false,
        "short_name": "Matilda IV",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "51473": {
        "is_gift": false,
        "short_name": "Pz. V/IV",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "51489": {
        "is_gift": false,
        "short_name": "T2 Light",
        "nation": "usa",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "51553": {
        "is_gift": false,
        "short_name": "Chi-Nu Kai",
        "nation": "japan",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "51569": {
        "is_gift": true,
        "short_name": "Škoda T 40",
        "nation": "czech",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "51585": {
        "is_gift": false,
        "short_name": "Strv m/42-57",
        "nation": "sweden",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "51713": {
        "is_gift": false,
        "short_name": "Churchill III",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "heavyTank"
    },
    "51729": {
        "is_gift": false,
        "short_name": "Pz. II J",
        "nation": "germany",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "51745": {
        "is_gift": false,
        "short_name": "Ram II",
        "nation": "usa",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "51825": {
        "is_gift": false,
        "short_name": "Škoda T 27",
        "nation": "czech",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "51841": {
        "is_gift": false,
        "short_name": "L-60",
        "nation": "sweden",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "51985": {
        "is_gift": false,
        "short_name": "Pz. S35",
        "nation": "germany",
        "is_premium": true,
        "tier": 3,
        "type": "mediumTank"
    },
    "52001": {
        "is_gift": false,
        "short_name": "MTLS-1G14",
        "nation": "usa",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "52065": {
        "is_gift": false,
        "short_name": "STA-2",
        "nation": "japan",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "52097": {
        "is_gift": false,
        "short_name": "Strv S1",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "52225": {
        "is_gift": false,
        "short_name": "BT-SV",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "52241": {
        "is_gift": false,
        "short_name": "Pz. B2",
        "nation": "germany",
        "is_premium": true,
        "tier": 4,
        "type": "heavyTank"
    },
    "52257": {
        "is_gift": false,
        "short_name": "M4A2E4",
        "nation": "usa",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "52321": {
        "is_gift": true,
        "short_name": "HT No. VI",
        "nation": "japan",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "52353": {
        "is_gift": false,
        "short_name": "Strv 81",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "52481": {
        "is_gift": false,
        "short_name": "Valentine II",
        "nation": "ussr",
        "is_premium": true,
        "tier": 4,
        "type": "lightTank"
    },
    "52497": {
        "is_gift": false,
        "short_name": "Pz. 38H",
        "nation": "germany",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "52513": {
        "is_gift": false,
        "short_name": "M6A2E1",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "52561": {
        "is_gift": false,
        "short_name": "Tortoise",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "AT-SPG"
    },
    "52609": {
        "is_gift": false,
        "short_name": "P:Victoria",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "52737": {
        "is_gift": false,
        "short_name": "M3 Light",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "52769": {
        "is_gift": false,
        "short_name": "Locust",
        "nation": "usa",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "52817": {
        "is_gift": false,
        "short_name": "Sentinel",
        "nation": "uk",
        "is_premium": true,
        "tier": 4,
        "type": "mediumTank"
    },
    "52865": {
        "is_gift": false,
        "short_name": "EMIL 1951",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "52993": {
        "is_gift": false,
        "short_name": "A-32",
        "nation": "ussr",
        "is_premium": true,
        "tier": 4,
        "type": "mediumTank"
    },
    "53121": {
        "is_gift": false,
        "short_name": "Lansen C",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "53249": {
        "is_gift": false,
        "short_name": "KV-5",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "53505": {
        "is_gift": false,
        "short_name": "T-127",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "53537": {
        "is_gift": false,
        "short_name": "T1E6",
        "nation": "usa",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "53585": {
        "is_gift": false,
        "short_name": "Matilda BP",
        "nation": "uk",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "53633": {
        "is_gift": false,
        "short_name": "Strv S1 FL",
        "nation": "sweden",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "53761": {
        "is_gift": false,
        "short_name": "SU-85I",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "AT-SPG"
    },
    "53793": {
        "is_gift": false,
        "short_name": "T95E2",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "53841": {
        "is_gift": false,
        "short_name": "TOG II*",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "54017": {
        "is_gift": false,
        "short_name": "KV-220-2",
        "nation": "ussr",
        "is_premium": true,
        "tier": 5,
        "type": "heavyTank"
    },
    "54033": {
        "is_gift": false,
        "short_name": "Pz. V/IV A",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "54097": {
        "is_gift": false,
        "short_name": "AT 15A",
        "nation": "uk",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "54273": {
        "is_gift": false,
        "short_name": "SU-76I",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "AT-SPG"
    },
    "54289": {
        "is_gift": false,
        "short_name": "Löwe",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "54353": {
        "is_gift": false,
        "short_name": "Excelsior",
        "nation": "uk",
        "is_premium": true,
        "tier": 5,
        "type": "heavyTank"
    },
    "54529": {
        "is_gift": false,
        "short_name": "Tetrarch",
        "nation": "ussr",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "54545": {
        "is_gift": false,
        "short_name": "Pz. T 25",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "54609": {
        "is_gift": false,
        "short_name": "Sexton I",
        "nation": "uk",
        "is_premium": true,
        "tier": 3,
        "type": "SPG"
    },
    "54785": {
        "is_gift": false,
        "short_name": "SU-100Y",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "AT-SPG"
    },
    "54801": {
        "is_gift": false,
        "short_name": "Pz. T 15",
        "nation": "germany",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "54865": {
        "is_gift": false,
        "short_name": "Light VIC",
        "nation": "uk",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "55057": {
        "is_gift": false,
        "short_name": "Pz. IV hydr.",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "55073": {
        "is_gift": false,
        "short_name": "T7 Car",
        "nation": "usa",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "55121": {
        "is_gift": true,
        "short_name": "FV201 (A45)",
        "nation": "uk",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "55297": {
        "is_gift": false,
        "short_name": "SU-122-44",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "55313": {
        "is_gift": false,
        "short_name": "JgTig.8,8 cm",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "55377": {
        "is_gift": false,
        "short_name": "A46",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "lightTank"
    },
    "55569": {
        "is_gift": false,
        "short_name": "E 25",
        "nation": "germany",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "55633": {
        "is_gift": false,
        "short_name": "FV4202",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "55841": {
        "is_gift": false,
        "short_name": "T95E6",
        "nation": "usa",
        "is_premium": true,
        "tier": 10,
        "type": "mediumTank"
    },
    "55889": {
        "is_gift": false,
        "short_name": "Cromwell B",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "56081": {
        "is_gift": false,
        "short_name": "VK 75.01 K",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "56097": {
        "is_gift": false,
        "short_name": "Fury",
        "nation": "usa",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "56145": {
        "is_gift": false,
        "short_name": "AC 4 Exp.",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "56353": {
        "is_gift": false,
        "short_name": "Scorpion",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "56577": {
        "is_gift": false,
        "short_name": "LTP",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "56609": {
        "is_gift": true,
        "short_name": "T28 HTC",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "56657": {
        "is_gift": false,
        "short_name": "Caernarvon AX",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "56849": {
        "is_gift": false,
        "short_name": "Pz. 58 FL",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "56913": {
        "is_gift": false,
        "short_name": "Centurion 5/1",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "57105": {
        "is_gift": false,
        "short_name": "Dicker Max",
        "nation": "germany",
        "is_premium": true,
        "tier": 6,
        "type": "AT-SPG"
    },
    "57121": {
        "is_gift": false,
        "short_name": "M46 KR",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "57169": {
        "is_gift": false,
        "short_name": "Firefly VC",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "57361": {
        "is_gift": false,
        "short_name": "Pz. IV S.",
        "nation": "germany",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "57377": {
        "is_gift": false,
        "short_name": "T25 Pilot 1",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "57425": {
        "is_gift": false,
        "short_name": "Chimera",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "57617": {
        "is_gift": false,
        "short_name": "Panther/M10",
        "nation": "germany",
        "is_premium": true,
        "tier": 7,
        "type": "mediumTank"
    },
    "57633": {
        "is_gift": false,
        "short_name": "T71 CMCD P",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "lightTank"
    },
    "57681": {
        "is_gift": false,
        "short_name": "Excalibur",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "AT-SPG"
    },
    "57889": {
        "is_gift": false,
        "short_name": "T92",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "57937": {
        "is_gift": false,
        "short_name": "T95/FV4201",
        "nation": "uk",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "58113": {
        "is_gift": false,
        "short_name": "T-34-85M",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "58193": {
        "is_gift": false,
        "short_name": "FV4202 FL",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "58369": {
        "is_gift": true,
        "short_name": "Obj. 260",
        "nation": "ussr",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "58449": {
        "is_gift": false,
        "short_name": "Senlac",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "58625": {
        "is_gift": true,
        "short_name": "ISU-130",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "58641": {
        "is_gift": false,
        "short_name": "VK 72.01 K",
        "nation": "germany",
        "is_premium": true,
        "tier": 10,
        "type": "heavyTank"
    },
    "58657": {
        "is_gift": false,
        "short_name": "Chrysler GF",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "58705": {
        "is_gift": false,
        "short_name": "GSOR",
        "nation": "uk",
        "is_premium": false,
        "tier": 9,
        "type": "lightTank"
    },
    "58881": {
        "is_gift": true,
        "short_name": "IS-5",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "58913": {
        "is_gift": false,
        "short_name": "T26E5",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "58961": {
        "is_gift": false,
        "short_name": "Manticore",
        "nation": "uk",
        "is_premium": false,
        "tier": 10,
        "type": "lightTank"
    },
    "59137": {
        "is_gift": false,
        "short_name": "IS-2",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "59169": {
        "is_gift": false,
        "short_name": "T26E5 P",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "59217": {
        "is_gift": false,
        "short_name": "A43 BP",
        "nation": "uk",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "59393": {
        "is_gift": false,
        "short_name": "Rudy USSR",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "59425": {
        "is_gift": false,
        "short_name": "T34 B",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "59473": {
        "is_gift": false,
        "short_name": "LHMTV",
        "nation": "uk",
        "is_premium": false,
        "tier": 8,
        "type": "lightTank"
    },
    "59649": {
        "is_gift": false,
        "short_name": "ISU-122S",
        "nation": "ussr",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "59665": {
        "is_gift": false,
        "short_name": "Gr.Tr.",
        "nation": "germany",
        "is_premium": true,
        "tier": 3,
        "type": "mediumTank"
    },
    "59681": {
        "is_gift": false,
        "short_name": "Thunderbolt",
        "nation": "usa",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "59729": {
        "is_gift": false,
        "short_name": "Setter",
        "nation": "uk",
        "is_premium": false,
        "tier": 7,
        "type": "lightTank"
    },
    "59905": {
        "is_gift": false,
        "short_name": "T-54 mod. 1",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "59937": {
        "is_gift": false,
        "short_name": "Eagle 7",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "mediumTank"
    },
    "59969": {
        "is_gift": false,
        "short_name": "ELC EVEN 90 FL",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "59985": {
        "is_gift": false,
        "short_name": "Turtle I",
        "nation": "uk",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "60161": {
        "is_gift": false,
        "short_name": "Obj. 244",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "60177": {
        "is_gift": true,
        "short_name": "Panther 8,8",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "60193": {
        "is_gift": false,
        "short_name": "Chrysler K",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "60225": {
        "is_gift": false,
        "short_name": "Bourrasque",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "60241": {
        "is_gift": false,
        "short_name": "Valiant",
        "nation": "uk",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "60417": {
        "is_gift": false,
        "short_name": "IS-3A",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "60433": {
        "is_gift": true,
        "short_name": "Pz. II D",
        "nation": "germany",
        "is_premium": true,
        "tier": 2,
        "type": "lightTank"
    },
    "60449": {
        "is_gift": false,
        "short_name": "TS-5",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "60481": {
        "is_gift": false,
        "short_name": "Char Futur 4",
        "nation": "france",
        "is_premium": true,
        "tier": 9,
        "type": "mediumTank"
    },
    "60689": {
        "is_gift": true,
        "short_name": "StuG IV",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "AT-SPG"
    },
    "60705": {
        "is_gift": false,
        "short_name": "T34 FL",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "60737": {
        "is_gift": false,
        "short_name": "Bret. Panther",
        "nation": "france",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "60929": {
        "is_gift": true,
        "short_name": "BT-7 art.",
        "nation": "ussr",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "60945": {
        "is_gift": true,
        "short_name": "T 55A",
        "nation": "germany",
        "is_premium": true,
        "tier": 9,
        "type": "mediumTank"
    },
    "60961": {
        "is_gift": false,
        "short_name": "T26E4 FL",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "60993": {
        "is_gift": false,
        "short_name": "M4A1 FL 10",
        "nation": "france",
        "is_premium": true,
        "tier": 6,
        "type": "mediumTank"
    },
    "61217": {
        "is_gift": false,
        "short_name": "T78",
        "nation": "usa",
        "is_premium": true,
        "tier": 6,
        "type": "AT-SPG"
    },
    "61249": {
        "is_gift": false,
        "short_name": "M10 RBFM",
        "nation": "france",
        "is_premium": true,
        "tier": 5,
        "type": "AT-SPG"
    },
    "61441": {
        "is_gift": false,
        "short_name": "T-28E F-30",
        "nation": "ussr",
        "is_premium": true,
        "tier": 4,
        "type": "mediumTank"
    },
    "61457": {
        "is_gift": false,
        "short_name": "Pz. III K",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "61473": {
        "is_gift": false,
        "short_name": "King Tiger (C)",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "61489": {
        "is_gift": false,
        "short_name": "WZ-120-1 FT FL",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "61505": {
        "is_gift": false,
        "short_name": "ELC EVEN 90",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "61697": {
        "is_gift": true,
        "short_name": "T-22 med.",
        "nation": "ussr",
        "is_premium": true,
        "tier": 10,
        "type": "mediumTank"
    },
    "61713": {
        "is_gift": false,
        "short_name": "Steyr WT",
        "nation": "germany",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "61729": {
        "is_gift": false,
        "short_name": "AE Phase I",
        "nation": "usa",
        "is_premium": true,
        "tier": 9,
        "type": "heavyTank"
    },
    "61745": {
        "is_gift": false,
        "short_name": "112 FL",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "61761": {
        "is_gift": false,
        "short_name": "AMX Cda 105",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "61953": {
        "is_gift": false,
        "short_name": "T-44-100",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "61969": {
        "is_gift": false,
        "short_name": "KanJPz",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "61985": {
        "is_gift": false,
        "short_name": "Renegade",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "62001": {
        "is_gift": false,
        "short_name": "M41D",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "62017": {
        "is_gift": false,
        "short_name": "AMX M4 49 L",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "62209": {
        "is_gift": false,
        "short_name": "KV-4 KTTS",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "62241": {
        "is_gift": false,
        "short_name": "TL-1 LPC",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "62273": {
        "is_gift": false,
        "short_name": "Somua SM",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "62481": {
        "is_gift": false,
        "short_name": "Skorpion",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "62497": {
        "is_gift": false,
        "short_name": "Super Hellcat",
        "nation": "usa",
        "is_premium": true,
        "tier": 7,
        "type": "AT-SPG"
    },
    "62529": {
        "is_gift": false,
        "short_name": "Lorr. 40 t",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "62753": {
        "is_gift": false,
        "short_name": "Concept 1B",
        "nation": "usa",
        "is_premium": true,
        "tier": 9,
        "type": "heavyTank"
    },
    "62785": {
        "is_gift": false,
        "short_name": "AMX M4 49",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "62993": {
        "is_gift": false,
        "short_name": "VK 45.03",
        "nation": "germany",
        "is_premium": true,
        "tier": 7,
        "type": "heavyTank"
    },
    "63009": {
        "is_gift": false,
        "short_name": "T26E5 FL",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "63041": {
        "is_gift": false,
        "short_name": "M4A1 Rev.",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "63233": {
        "is_gift": false,
        "short_name": "KV-4 Kresl.",
        "nation": "ussr",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "63249": {
        "is_gift": false,
        "short_name": "Turán III PT",
        "nation": "germany",
        "is_premium": true,
        "tier": 5,
        "type": "mediumTank"
    },
    "63265": {
        "is_gift": false,
        "short_name": "T32 FL",
        "nation": "usa",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "63281": {
        "is_gift": false,
        "short_name": "WZ-120-1 FT",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "AT-SPG"
    },
    "63297": {
        "is_gift": false,
        "short_name": "AMX 13 57F",
        "nation": "france",
        "is_premium": true,
        "tier": 7,
        "type": "lightTank"
    },
    "63505": {
        "is_gift": false,
        "short_name": "Toldi III",
        "nation": "germany",
        "is_premium": true,
        "tier": 3,
        "type": "lightTank"
    },
    "63537": {
        "is_gift": false,
        "short_name": "121B",
        "nation": "china",
        "is_premium": true,
        "tier": 10,
        "type": "mediumTank"
    },
    "63553": {
        "is_gift": false,
        "short_name": "AMX CDC",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "63761": {
        "is_gift": false,
        "short_name": "Pz. 58",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "63793": {
        "is_gift": true,
        "short_name": "59-Patton",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "63809": {
        "is_gift": false,
        "short_name": "AMX 13 57",
        "nation": "france",
        "is_premium": true,
        "tier": 7,
        "type": "lightTank"
    },
    "64017": {
        "is_gift": false,
        "short_name": "M 41 90 mm",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "lightTank"
    },
    "64049": {
        "is_gift": false,
        "short_name": "T-34-3",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "64065": {
        "is_gift": false,
        "short_name": "FCM 50 t",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "64273": {
        "is_gift": false,
        "short_name": "Pz. 58 Mutz",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "64561": {
        "is_gift": false,
        "short_name": "112",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "64577": {
        "is_gift": false,
        "short_name": "M4A1 Rev. FL",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "mediumTank"
    },
    "64769": {
        "is_gift": false,
        "short_name": "KV-2 (R)",
        "nation": "ussr",
        "is_premium": true,
        "tier": 6,
        "type": "heavyTank"
    },
    "64817": {
        "is_gift": false,
        "short_name": "Type 64",
        "nation": "china",
        "is_premium": true,
        "tier": 6,
        "type": "lightTank"
    },
    "65073": {
        "is_gift": false,
        "short_name": "Alpine Tiger",
        "nation": "china",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "65297": {
        "is_gift": false,
        "short_name": "Löwe FL",
        "nation": "germany",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    },
    "65345": {
        "is_gift": false,
        "short_name": "AMX M4 49 FL",
        "nation": "france",
        "is_premium": true,
        "tier": 8,
        "type": "heavyTank"
    }
}

export default tankNames;