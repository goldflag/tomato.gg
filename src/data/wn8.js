// Use this code to convert the expected values from mod.xvm to this useable object format
/*
let wn8 = [
    {
        "IDNum": 1,
        "expDef": 1.105,
        "expFrag": 0.973,
        "expSpot": 1.366,
        "expDamage": 487.542,
        "expWinRate": 54.946
    },
    {
        "IDNum": 33,
        "expDef": 1.193,
        "expFrag": 1.237,
        "expSpot": 1.543,
        "expDamage": 599.999,
        "expWinRate": 56.068
    },
    {
        "IDNum": 49,
        "expDef": 0.905,
        "expFrag": 0.886,
        "expSpot": 1.588,
        "expDamage": 1111.225,
        "expWinRate": 51.757
    },
]

let newWN8 = {};
for (let i = 0; i < wn8.length; ++i) {
  newWN8[(wn8[i].IDNum).toString()] = {
        "expDef": wn8[i].expDef,
        "expFrag": wn8[i].expFrag,
        "expSpot": wn8[i].expSpot,
        "expDamage": wn8[i].expDamage,
        "expWinRate": wn8[i].expWinRate
  }
}
  
console.log(newWN8);

var fs = require('fs');
fs.writeFile("./wn8.json", JSON.stringify(newWN8, null, 4), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
*/

const WN8 = {
    "1": {
        "expDef": 1.106,
        "expFrag": 0.973,
        "expSpot": 1.366,
        "expDamage": 487.566,
        "expWinRate": 54.944
    },
    "33": {
        "expDef": 1.194,
        "expFrag": 1.237,
        "expSpot": 1.543,
        "expDamage": 600.579,
        "expWinRate": 56.081
    },
    "49": {
        "expDef": 0.905,
        "expFrag": 0.886,
        "expSpot": 1.588,
        "expDamage": 1111.23,
        "expWinRate": 51.752
    },
    "81": {
        "expDef": 1.266,
        "expFrag": 1.682,
        "expSpot": 0.921,
        "expDamage": 219.391,
        "expWinRate": 57.677
    },
    "113": {
        "expDef": 1.11,
        "expFrag": 1.604,
        "expSpot": 0.845,
        "expDamage": 214.837,
        "expWinRate": 58.52
    },
    "129": {
        "expDef": 1.167,
        "expFrag": 1.509,
        "expSpot": 1.33,
        "expDamage": 205.587,
        "expWinRate": 58.839
    },
    "145": {
        "expDef": 0.781,
        "expFrag": 0.979,
        "expSpot": 1.329,
        "expDamage": 769.078,
        "expWinRate": 54.658
    },
    "161": {
        "expDef": 1.523,
        "expFrag": 1.691,
        "expSpot": 1.014,
        "expDamage": 218.641,
        "expWinRate": 58.287
    },
    "257": {
        "expDef": 1.26,
        "expFrag": 1.117,
        "expSpot": 0.535,
        "expDamage": 580.79,
        "expWinRate": 54.399
    },
    "273": {
        "expDef": 1.277,
        "expFrag": 1.01,
        "expSpot": 0.074,
        "expDamage": 922.376,
        "expWinRate": 51.379
    },
    "289": {
        "expDef": 1.51,
        "expFrag": 1.071,
        "expSpot": 2.176,
        "expDamage": 270.631,
        "expWinRate": 57.044
    },
    "305": {
        "expDef": 0.685,
        "expFrag": 0.684,
        "expSpot": 2.519,
        "expDamage": 670.715,
        "expWinRate": 51.866
    },
    "321": {
        "expDef": 1.631,
        "expFrag": 1.217,
        "expSpot": 0.817,
        "expDamage": 298.654,
        "expWinRate": 58.404
    },
    "337": {
        "expDef": 1.216,
        "expFrag": 1.407,
        "expSpot": 0.93,
        "expDamage": 246.22,
        "expWinRate": 56.766
    },
    "353": {
        "expDef": 1.467,
        "expFrag": 1.372,
        "expSpot": 1.196,
        "expDamage": 230.923,
        "expWinRate": 57.983
    },
    "369": {
        "expDef": 1.477,
        "expFrag": 1.218,
        "expSpot": 1.384,
        "expDamage": 229.183,
        "expWinRate": 56.736
    },
    "385": {
        "expDef": 1.261,
        "expFrag": 1.326,
        "expSpot": 1.328,
        "expDamage": 244.26,
        "expWinRate": 57.402
    },
    "401": {
        "expDef": 1.413,
        "expFrag": 1.034,
        "expSpot": 1.066,
        "expDamage": 211.602,
        "expWinRate": 56.939
    },
    "417": {
        "expDef": 1.673,
        "expFrag": 1.279,
        "expSpot": 1.401,
        "expDamage": 242.211,
        "expWinRate": 57.618
    },
    "513": {
        "expDef": 0.816,
        "expFrag": 0.976,
        "expSpot": 1.007,
        "expDamage": 1033.913,
        "expWinRate": 53.403
    },
    "529": {
        "expDef": 1.019,
        "expFrag": 0.937,
        "expSpot": 0.981,
        "expDamage": 1071.48,
        "expWinRate": 53.574
    },
    "545": {
        "expDef": 1.408,
        "expFrag": 1.551,
        "expSpot": 1.855,
        "expDamage": 199.521,
        "expWinRate": 58.066
    },
    "561": {
        "expDef": 0.695,
        "expFrag": 0.961,
        "expSpot": 1.448,
        "expDamage": 1283.817,
        "expWinRate": 51.973
    },
    "577": {
        "expDef": 1.895,
        "expFrag": 1.482,
        "expSpot": 1.222,
        "expDamage": 202.708,
        "expWinRate": 57.892
    },
    "593": {
        "expDef": 1.427,
        "expFrag": 1.366,
        "expSpot": 2.104,
        "expDamage": 243.546,
        "expWinRate": 58.209
    },
    "609": {
        "expDef": 1.73,
        "expFrag": 1.555,
        "expSpot": 1.109,
        "expDamage": 196.722,
        "expWinRate": 57.781
    },
    "625": {
        "expDef": 1.482,
        "expFrag": 0.958,
        "expSpot": 1.066,
        "expDamage": 283.685,
        "expWinRate": 56.55
    },
    "641": {
        "expDef": 1.522,
        "expFrag": 1.168,
        "expSpot": 1.361,
        "expDamage": 323.263,
        "expWinRate": 56.75
    },
    "673": {
        "expDef": 1.523,
        "expFrag": 1.492,
        "expSpot": 0.965,
        "expDamage": 275.974,
        "expWinRate": 59
    },
    "769": {
        "expDef": 1.287,
        "expFrag": 0.983,
        "expSpot": 1.944,
        "expDamage": 260.205,
        "expWinRate": 56.041
    },
    "785": {
        "expDef": 1.757,
        "expFrag": 1.355,
        "expSpot": 1.494,
        "expDamage": 233.852,
        "expWinRate": 57.245
    },
    "801": {
        "expDef": 0.891,
        "expFrag": 0.965,
        "expSpot": 1.018,
        "expDamage": 798.291,
        "expWinRate": 53.715
    },
    "817": {
        "expDef": 0.692,
        "expFrag": 0.912,
        "expSpot": 1.302,
        "expDamage": 1245.563,
        "expWinRate": 52.325
    },
    "833": {
        "expDef": 1.356,
        "expFrag": 1.338,
        "expSpot": 0.119,
        "expDamage": 220.804,
        "expWinRate": 56.508
    },
    "849": {
        "expDef": 1.576,
        "expFrag": 1.116,
        "expSpot": 0.771,
        "expDamage": 440.592,
        "expWinRate": 55.973
    },
    "865": {
        "expDef": 1.409,
        "expFrag": 1.348,
        "expSpot": 1.455,
        "expDamage": 236.407,
        "expWinRate": 56.853
    },
    "881": {
        "expDef": 1.324,
        "expFrag": 0.958,
        "expSpot": 1.164,
        "expDamage": 370.111,
        "expWinRate": 55.954
    },
    "897": {
        "expDef": 1.101,
        "expFrag": 0.991,
        "expSpot": 1.27,
        "expDamage": 383.601,
        "expWinRate": 55.448
    },
    "913": {
        "expDef": 0.448,
        "expFrag": 0.884,
        "expSpot": 1.012,
        "expDamage": 1372.024,
        "expWinRate": 53.37
    },
    "929": {
        "expDef": 1.444,
        "expFrag": 1.328,
        "expSpot": 1.105,
        "expDamage": 360.958,
        "expWinRate": 56.846
    },
    "1025": {
        "expDef": 1.429,
        "expFrag": 1.312,
        "expSpot": 1.685,
        "expDamage": 230.566,
        "expWinRate": 56.812
    },
    "1041": {
        "expDef": 1.378,
        "expFrag": 1.109,
        "expSpot": 0.698,
        "expDamage": 582.7,
        "expWinRate": 54.194
    },
    "1057": {
        "expDef": 0.985,
        "expFrag": 1.056,
        "expSpot": 1.364,
        "expDamage": 523.217,
        "expWinRate": 54.831
    },
    "1073": {
        "expDef": 0.963,
        "expFrag": 0.908,
        "expSpot": 1.462,
        "expDamage": 914.059,
        "expWinRate": 54.343
    },
    "1089": {
        "expDef": 1.445,
        "expFrag": 1.143,
        "expSpot": 1.1,
        "expDamage": 382.824,
        "expWinRate": 55.847
    },
    "1105": {
        "expDef": 0.976,
        "expFrag": 0.986,
        "expSpot": 1.85,
        "expDamage": 700.234,
        "expWinRate": 54.445
    },
    "1121": {
        "expDef": 1.077,
        "expFrag": 0.89,
        "expSpot": 1.006,
        "expDamage": 911.367,
        "expWinRate": 51.486
    },
    "1137": {
        "expDef": 1.093,
        "expFrag": 0.85,
        "expSpot": 1.414,
        "expDamage": 486.709,
        "expWinRate": 54.4
    },
    "1153": {
        "expDef": 0.996,
        "expFrag": 0.908,
        "expSpot": 1.167,
        "expDamage": 501.688,
        "expWinRate": 54.017
    },
    "1169": {
        "expDef": 1.327,
        "expFrag": 1.522,
        "expSpot": 1.529,
        "expDamage": 216.075,
        "expWinRate": 58.789
    },
    "1185": {
        "expDef": 0.915,
        "expFrag": 1.127,
        "expSpot": 1.048,
        "expDamage": 427.508,
        "expWinRate": 55.607
    },
    "1297": {
        "expDef": 1.17,
        "expFrag": 0.879,
        "expSpot": 1.243,
        "expDamage": 899.671,
        "expWinRate": 53.849
    },
    "1313": {
        "expDef": 1.087,
        "expFrag": 0.971,
        "expSpot": 1.415,
        "expDamage": 694.73,
        "expWinRate": 54.893
    },
    "1329": {
        "expDef": 1.739,
        "expFrag": 1.673,
        "expSpot": 1.273,
        "expDamage": 221.215,
        "expWinRate": 56.577
    },
    "1345": {
        "expDef": 2.011,
        "expFrag": 1.389,
        "expSpot": 1.052,
        "expDamage": 238.927,
        "expWinRate": 58.548
    },
    "1361": {
        "expDef": 1.53,
        "expFrag": 1.124,
        "expSpot": 1.755,
        "expDamage": 295.798,
        "expWinRate": 57.293
    },
    "1377": {
        "expDef": 1.083,
        "expFrag": 0.915,
        "expSpot": 1.182,
        "expDamage": 487.826,
        "expWinRate": 54.447
    },
    "1393": {
        "expDef": 1.017,
        "expFrag": 0.916,
        "expSpot": 1.426,
        "expDamage": 715.94,
        "expWinRate": 53.43
    },
    "1409": {
        "expDef": 0.998,
        "expFrag": 0.939,
        "expSpot": 1.086,
        "expDamage": 743.807,
        "expWinRate": 53.585
    },
    "1425": {
        "expDef": 1.382,
        "expFrag": 1.451,
        "expSpot": 1.019,
        "expDamage": 276.016,
        "expWinRate": 58.729
    },
    "1441": {
        "expDef": 0.834,
        "expFrag": 0.9,
        "expSpot": 1.066,
        "expDamage": 491.853,
        "expWinRate": 54.911
    },
    "1537": {
        "expDef": 0.994,
        "expFrag": 1.013,
        "expSpot": 1.205,
        "expDamage": 395.683,
        "expWinRate": 55.579
    },
    "1553": {
        "expDef": 1.246,
        "expFrag": 1.053,
        "expSpot": 0.725,
        "expDamage": 750.554,
        "expWinRate": 53.574
    },
    "1569": {
        "expDef": 1.012,
        "expFrag": 0.92,
        "expSpot": 1.576,
        "expDamage": 944.575,
        "expWinRate": 54.303
    },
    "1585": {
        "expDef": 0.954,
        "expFrag": 0.816,
        "expSpot": 1.501,
        "expDamage": 1044.077,
        "expWinRate": 52.253
    },
    "1601": {
        "expDef": 2.118,
        "expFrag": 1.34,
        "expSpot": 0.948,
        "expDamage": 234.256,
        "expWinRate": 57.46
    },
    "1617": {
        "expDef": 1.097,
        "expFrag": 1.019,
        "expSpot": 0.863,
        "expDamage": 381.958,
        "expWinRate": 55.001
    },
    "1633": {
        "expDef": 1.158,
        "expFrag": 0.988,
        "expSpot": 1.233,
        "expDamage": 373.835,
        "expWinRate": 55.977
    },
    "1649": {
        "expDef": 0.854,
        "expFrag": 0.871,
        "expSpot": 1.221,
        "expDamage": 917.684,
        "expWinRate": 53.068
    },
    "1665": {
        "expDef": 0.755,
        "expFrag": 0.89,
        "expSpot": 1.294,
        "expDamage": 925.654,
        "expWinRate": 52.933
    },
    "1681": {
        "expDef": 1.182,
        "expFrag": 1.069,
        "expSpot": 1.202,
        "expDamage": 305.863,
        "expWinRate": 55.548
    },
    "1697": {
        "expDef": 0.684,
        "expFrag": 0.984,
        "expSpot": 1.012,
        "expDamage": 749.089,
        "expWinRate": 53.66
    },
    "1793": {
        "expDef": 0.78,
        "expFrag": 0.913,
        "expSpot": 0.042,
        "expDamage": 1147.611,
        "expWinRate": 50.619
    },
    "1809": {
        "expDef": 1.204,
        "expFrag": 1.417,
        "expSpot": 0.607,
        "expDamage": 458.435,
        "expWinRate": 56.52
    },
    "1825": {
        "expDef": 1.47,
        "expFrag": 1.491,
        "expSpot": 2.454,
        "expDamage": 255.084,
        "expWinRate": 57.334
    },
    "1841": {
        "expDef": 0.716,
        "expFrag": 0.874,
        "expSpot": 1.365,
        "expDamage": 1432.878,
        "expWinRate": 51.505
    },
    "1889": {
        "expDef": 1.116,
        "expFrag": 0.95,
        "expSpot": 1.059,
        "expDamage": 726.497,
        "expWinRate": 52.496
    },
    "1905": {
        "expDef": 0.919,
        "expFrag": 0.786,
        "expSpot": 1.042,
        "expDamage": 1071.921,
        "expWinRate": 51.79
    },
    "1921": {
        "expDef": 0.667,
        "expFrag": 0.949,
        "expSpot": 0.824,
        "expDamage": 1348.177,
        "expWinRate": 52.246
    },
    "1937": {
        "expDef": 0.924,
        "expFrag": 0.782,
        "expSpot": 1.464,
        "expDamage": 337.541,
        "expWinRate": 54.34
    },
    "1953": {
        "expDef": 0.697,
        "expFrag": 0.941,
        "expSpot": 1.306,
        "expDamage": 940.051,
        "expWinRate": 53.482
    },
    "2049": {
        "expDef": 1.084,
        "expFrag": 0.817,
        "expSpot": 2.303,
        "expDamage": 315.313,
        "expWinRate": 55.818
    },
    "2065": {
        "expDef": 1.606,
        "expFrag": 1.386,
        "expSpot": 1.689,
        "expDamage": 240.335,
        "expWinRate": 57.382
    },
    "2081": {
        "expDef": 1.861,
        "expFrag": 1.246,
        "expSpot": 0.389,
        "expDamage": 230.102,
        "expWinRate": 54.391
    },
    "2097": {
        "expDef": 0.523,
        "expFrag": 0.854,
        "expSpot": 1.232,
        "expDamage": 1592.965,
        "expWinRate": 51.454
    },
    "2113": {
        "expDef": 1.301,
        "expFrag": 1.328,
        "expSpot": 0.11,
        "expDamage": 667.872,
        "expWinRate": 54.612
    },
    "2129": {
        "expDef": 1.201,
        "expFrag": 0.942,
        "expSpot": 1.6,
        "expDamage": 460.123,
        "expWinRate": 55.226
    },
    "2145": {
        "expDef": 1.351,
        "expFrag": 1.267,
        "expSpot": 1.188,
        "expDamage": 329.72,
        "expWinRate": 57.455
    },
    "2161": {
        "expDef": 0.737,
        "expFrag": 1.023,
        "expSpot": 1.115,
        "expDamage": 1656.329,
        "expWinRate": 51.095
    },
    "2177": {
        "expDef": 0.544,
        "expFrag": 0.962,
        "expSpot": 0.924,
        "expDamage": 1643.265,
        "expWinRate": 51.71
    },
    "2193": {
        "expDef": 0.709,
        "expFrag": 0.888,
        "expSpot": 1.187,
        "expDamage": 518.819,
        "expWinRate": 54.879
    },
    "2209": {
        "expDef": 0.638,
        "expFrag": 0.888,
        "expSpot": 1.088,
        "expDamage": 1218.99,
        "expWinRate": 50.906
    },
    "2305": {
        "expDef": 0.877,
        "expFrag": 1.015,
        "expSpot": 0.519,
        "expDamage": 1001.939,
        "expWinRate": 52.637
    },
    "2321": {
        "expDef": 1.094,
        "expFrag": 0.997,
        "expSpot": 1.132,
        "expDamage": 762.08,
        "expWinRate": 54.692
    },
    "2353": {
        "expDef": 1.496,
        "expFrag": 1.431,
        "expSpot": 1.264,
        "expDamage": 247.61,
        "expWinRate": 57.526
    },
    "2369": {
        "expDef": 1.593,
        "expFrag": 1.592,
        "expSpot": 1.039,
        "expDamage": 404.771,
        "expWinRate": 57.967
    },
    "2385": {
        "expDef": 1.396,
        "expFrag": 1.176,
        "expSpot": 1.004,
        "expDamage": 305.566,
        "expWinRate": 57.141
    },
    "2401": {
        "expDef": 1.445,
        "expFrag": 1.144,
        "expSpot": 1.564,
        "expDamage": 289.942,
        "expWinRate": 56.992
    },
    "2417": {
        "expDef": 0.628,
        "expFrag": 1.048,
        "expSpot": 1.307,
        "expDamage": 1898.508,
        "expWinRate": 49.073
    },
    "2433": {
        "expDef": 0.487,
        "expFrag": 0.94,
        "expSpot": 1.136,
        "expDamage": 1929.745,
        "expWinRate": 49.731
    },
    "2449": {
        "expDef": 0.714,
        "expFrag": 0.927,
        "expSpot": 0.77,
        "expDamage": 740.766,
        "expWinRate": 53.572
    },
    "2465": {
        "expDef": 0.658,
        "expFrag": 1.069,
        "expSpot": 1.087,
        "expDamage": 1706.256,
        "expWinRate": 50.716
    },
    "2561": {
        "expDef": 0.964,
        "expFrag": 0.934,
        "expSpot": 1.333,
        "expDamage": 708.123,
        "expWinRate": 53.999
    },
    "2577": {
        "expDef": 1.095,
        "expFrag": 1.014,
        "expSpot": 1.197,
        "expDamage": 646.483,
        "expWinRate": 54.784
    },
    "2593": {
        "expDef": 0.575,
        "expFrag": 0.973,
        "expSpot": 0.677,
        "expDamage": 1713.753,
        "expWinRate": 50.635
    },
    "2625": {
        "expDef": 0.85,
        "expFrag": 0.889,
        "expSpot": 0.907,
        "expDamage": 785.938,
        "expWinRate": 53.444
    },
    "2657": {
        "expDef": 1.008,
        "expFrag": 0.819,
        "expSpot": 1.167,
        "expDamage": 1123.421,
        "expWinRate": 51.135
    },
    "2689": {
        "expDef": 1.478,
        "expFrag": 1.241,
        "expSpot": 0.555,
        "expDamage": 306.627,
        "expWinRate": 53.473
    },
    "2705": {
        "expDef": 0.627,
        "expFrag": 0.967,
        "expSpot": 1.03,
        "expDamage": 1077.486,
        "expWinRate": 53.549
    },
    "2721": {
        "expDef": 0.613,
        "expFrag": 1.159,
        "expSpot": 1.109,
        "expDamage": 2057.129,
        "expWinRate": 49.773
    },
    "2817": {
        "expDef": 0.768,
        "expFrag": 1.027,
        "expSpot": 1.031,
        "expDamage": 812.983,
        "expWinRate": 53.796
    },
    "2833": {
        "expDef": 1.313,
        "expFrag": 1.169,
        "expSpot": 0.168,
        "expDamage": 347.976,
        "expWinRate": 57.761
    },
    "2849": {
        "expDef": 0.703,
        "expFrag": 0.789,
        "expSpot": 0.817,
        "expDamage": 1252.389,
        "expWinRate": 50.817
    },
    "2865": {
        "expDef": 0.779,
        "expFrag": 0.837,
        "expSpot": 1.08,
        "expDamage": 1227.287,
        "expWinRate": 52.989
    },
    "2881": {
        "expDef": 1.189,
        "expFrag": 0.815,
        "expSpot": 0.809,
        "expDamage": 283.489,
        "expWinRate": 56.246
    },
    "2897": {
        "expDef": 1.317,
        "expFrag": 1.118,
        "expSpot": 0.863,
        "expDamage": 625.336,
        "expWinRate": 55.731
    },
    "2913": {
        "expDef": 1.161,
        "expFrag": 0.975,
        "expSpot": 1.676,
        "expDamage": 364.279,
        "expWinRate": 55.49
    },
    "2945": {
        "expDef": 1.493,
        "expFrag": 1.403,
        "expSpot": 0.596,
        "expDamage": 372.197,
        "expWinRate": 57.754
    },
    "2961": {
        "expDef": 0.509,
        "expFrag": 0.842,
        "expSpot": 0.968,
        "expDamage": 1322.79,
        "expWinRate": 51.761
    },
    "3073": {
        "expDef": 1.212,
        "expFrag": 1.083,
        "expSpot": 1.353,
        "expDamage": 276.765,
        "expWinRate": 56.227
    },
    "3089": {
        "expDef": 1.578,
        "expFrag": 1.63,
        "expSpot": 1.802,
        "expDamage": 221.701,
        "expWinRate": 57.81
    },
    "3105": {
        "expDef": 1.047,
        "expFrag": 1.031,
        "expSpot": 0.837,
        "expDamage": 363.562,
        "expWinRate": 55.342
    },
    "3121": {
        "expDef": 1.088,
        "expFrag": 0.906,
        "expSpot": 2.231,
        "expDamage": 334.143,
        "expWinRate": 55.271
    },
    "3137": {
        "expDef": 0.956,
        "expFrag": 0.998,
        "expSpot": 0.895,
        "expDamage": 1314.013,
        "expWinRate": 51.424
    },
    "3153": {
        "expDef": 1.217,
        "expFrag": 0.935,
        "expSpot": 0.832,
        "expDamage": 1012.904,
        "expWinRate": 55.008
    },
    "3169": {
        "expDef": 1.524,
        "expFrag": 1.221,
        "expSpot": 1.248,
        "expDamage": 220.522,
        "expWinRate": 56.561
    },
    "3201": {
        "expDef": 1.427,
        "expFrag": 1.196,
        "expSpot": 0.633,
        "expDamage": 440.801,
        "expWinRate": 55.766
    },
    "3217": {
        "expDef": 0.433,
        "expFrag": 0.893,
        "expSpot": 0.944,
        "expDamage": 1679.547,
        "expWinRate": 52.315
    },
    "3329": {
        "expDef": 1.643,
        "expFrag": 1.643,
        "expSpot": 1.21,
        "expDamage": 218.099,
        "expWinRate": 57.408
    },
    "3345": {
        "expDef": 1.477,
        "expFrag": 1.324,
        "expSpot": 1.287,
        "expDamage": 330.909,
        "expWinRate": 58.34
    },
    "3361": {
        "expDef": 1.188,
        "expFrag": 1.14,
        "expSpot": 1.129,
        "expDamage": 617.238,
        "expWinRate": 55.576
    },
    "3377": {
        "expDef": 0.695,
        "expFrag": 0.697,
        "expSpot": 2.305,
        "expDamage": 709.241,
        "expWinRate": 52.038
    },
    "3393": {
        "expDef": 1.867,
        "expFrag": 1.078,
        "expSpot": 0.138,
        "expDamage": 390.444,
        "expWinRate": 52.221
    },
    "3409": {
        "expDef": 1.635,
        "expFrag": 1.098,
        "expSpot": 0.126,
        "expDamage": 286.728,
        "expWinRate": 56.063
    },
    "3425": {
        "expDef": 0.777,
        "expFrag": 0.914,
        "expSpot": 1.118,
        "expDamage": 1543.499,
        "expWinRate": 50.413
    },
    "3457": {
        "expDef": 1.058,
        "expFrag": 1.073,
        "expSpot": 0.824,
        "expDamage": 527.906,
        "expWinRate": 55.065
    },
    "3473": {
        "expDef": 0.35,
        "expFrag": 0.944,
        "expSpot": 0.94,
        "expDamage": 2099.555,
        "expWinRate": 50.929
    },
    "3585": {
        "expDef": 1.034,
        "expFrag": 1.083,
        "expSpot": 0.726,
        "expDamage": 787.759,
        "expWinRate": 53.269
    },
    "3601": {
        "expDef": 1.688,
        "expFrag": 1.753,
        "expSpot": 0.899,
        "expDamage": 298.437,
        "expWinRate": 58.326
    },
    "3617": {
        "expDef": 1.725,
        "expFrag": 0.871,
        "expSpot": 0.115,
        "expDamage": 474.077,
        "expWinRate": 49.63
    },
    "3633": {
        "expDef": 0.785,
        "expFrag": 0.993,
        "expSpot": 1.073,
        "expDamage": 1070.752,
        "expWinRate": 54.266
    },
    "3649": {
        "expDef": 0.773,
        "expFrag": 1.071,
        "expSpot": 1.693,
        "expDamage": 1783.7,
        "expWinRate": 48.729
    },
    "3665": {
        "expDef": 1.054,
        "expFrag": 0.947,
        "expSpot": 1.011,
        "expDamage": 740.333,
        "expWinRate": 52.865
    },
    "3681": {
        "expDef": 0.693,
        "expFrag": 0.974,
        "expSpot": 1.303,
        "expDamage": 1861.804,
        "expWinRate": 49.895
    },
    "3713": {
        "expDef": 1.03,
        "expFrag": 0.957,
        "expSpot": 0.603,
        "expDamage": 772.572,
        "expWinRate": 53.074
    },
    "3729": {
        "expDef": 0.866,
        "expFrag": 0.884,
        "expSpot": 1.26,
        "expDamage": 668.308,
        "expWinRate": 52.481
    },
    "3841": {
        "expDef": 1.417,
        "expFrag": 1.244,
        "expSpot": 0.121,
        "expDamage": 214.809,
        "expWinRate": 54.645
    },
    "3857": {
        "expDef": 1.036,
        "expFrag": 1,
        "expSpot": 0.68,
        "expDamage": 1042.254,
        "expWinRate": 53.014
    },
    "3873": {
        "expDef": 0.96,
        "expFrag": 0.992,
        "expSpot": 1.066,
        "expDamage": 1136.075,
        "expWinRate": 53.968
    },
    "3889": {
        "expDef": 0.637,
        "expFrag": 0.662,
        "expSpot": 2.483,
        "expDamage": 849.729,
        "expWinRate": 51.714
    },
    "3905": {
        "expDef": 0.767,
        "expFrag": 0.959,
        "expSpot": 0.85,
        "expDamage": 1588.613,
        "expWinRate": 50.308
    },
    "3921": {
        "expDef": 0.803,
        "expFrag": 0.83,
        "expSpot": 1.04,
        "expDamage": 1273.148,
        "expWinRate": 52.593
    },
    "3937": {
        "expDef": 0.436,
        "expFrag": 0.9,
        "expSpot": 0.794,
        "expDamage": 2056.252,
        "expWinRate": 51.064
    },
    "3969": {
        "expDef": 1.091,
        "expFrag": 0.941,
        "expSpot": 0.58,
        "expDamage": 981.823,
        "expWinRate": 52.281
    },
    "3985": {
        "expDef": 0.631,
        "expFrag": 0.953,
        "expSpot": 0.922,
        "expDamage": 866.636,
        "expWinRate": 52.047
    },
    "4097": {
        "expDef": 0.747,
        "expFrag": 0.907,
        "expSpot": 0.02,
        "expDamage": 1290.654,
        "expWinRate": 51.001
    },
    "4113": {
        "expDef": 1.028,
        "expFrag": 0.945,
        "expSpot": 1.546,
        "expDamage": 890.737,
        "expWinRate": 53.507
    },
    "4129": {
        "expDef": 1.407,
        "expFrag": 1.002,
        "expSpot": 0.078,
        "expDamage": 837.266,
        "expWinRate": 51.338
    },
    "4145": {
        "expDef": 0.652,
        "expFrag": 0.921,
        "expSpot": 1.273,
        "expDamage": 1792.642,
        "expWinRate": 49.273
    },
    "4161": {
        "expDef": 2.213,
        "expFrag": 1.113,
        "expSpot": 0.098,
        "expDamage": 623.415,
        "expWinRate": 53.26
    },
    "4193": {
        "expDef": 0.474,
        "expFrag": 0.807,
        "expSpot": 0.694,
        "expDamage": 1534.106,
        "expWinRate": 51.757
    },
    "4225": {
        "expDef": 0.9,
        "expFrag": 0.921,
        "expSpot": 0.577,
        "expDamage": 1360.846,
        "expWinRate": 50.564
    },
    "4241": {
        "expDef": 0.669,
        "expFrag": 0.899,
        "expSpot": 1.258,
        "expDamage": 1035.465,
        "expWinRate": 52.308
    },
    "4353": {
        "expDef": 0.866,
        "expFrag": 0.82,
        "expSpot": 1.425,
        "expDamage": 1067.246,
        "expWinRate": 52.107
    },
    "4369": {
        "expDef": 1.13,
        "expFrag": 1.032,
        "expSpot": 1.835,
        "expDamage": 361.682,
        "expWinRate": 57.522
    },
    "4385": {
        "expDef": 0.934,
        "expFrag": 0.861,
        "expSpot": 1.156,
        "expDamage": 1238.712,
        "expWinRate": 52.408
    },
    "4401": {
        "expDef": 1.442,
        "expFrag": 1.273,
        "expSpot": 1.2,
        "expDamage": 323.315,
        "expWinRate": 57.554
    },
    "4417": {
        "expDef": 1.02,
        "expFrag": 0.999,
        "expSpot": 1.142,
        "expDamage": 489.441,
        "expWinRate": 54.311
    },
    "4433": {
        "expDef": 0.604,
        "expFrag": 0.858,
        "expSpot": 1.022,
        "expDamage": 1649.657,
        "expWinRate": 51.465
    },
    "4449": {
        "expDef": 1.099,
        "expFrag": 1.082,
        "expSpot": 0.719,
        "expDamage": 375.717,
        "expWinRate": 54.352
    },
    "4481": {
        "expDef": 0.887,
        "expFrag": 0.989,
        "expSpot": 0.573,
        "expDamage": 1734.758,
        "expWinRate": 50.678
    },
    "4497": {
        "expDef": 0.634,
        "expFrag": 0.787,
        "expSpot": 0.965,
        "expDamage": 1158.101,
        "expWinRate": 50.268
    },
    "4609": {
        "expDef": 1.817,
        "expFrag": 1.382,
        "expSpot": 1.081,
        "expDamage": 239.687,
        "expWinRate": 57.301
    },
    "4625": {
        "expDef": 1.623,
        "expFrag": 1.014,
        "expSpot": 0.165,
        "expDamage": 405.988,
        "expWinRate": 53.962
    },
    "4641": {
        "expDef": 1.568,
        "expFrag": 1.009,
        "expSpot": 0.126,
        "expDamage": 391.583,
        "expWinRate": 53.636
    },
    "4657": {
        "expDef": 1.137,
        "expFrag": 0.994,
        "expSpot": 1.376,
        "expDamage": 486.712,
        "expWinRate": 54.246
    },
    "4673": {
        "expDef": 1.463,
        "expFrag": 1.036,
        "expSpot": 0.076,
        "expDamage": 927.284,
        "expWinRate": 52.632
    },
    "4689": {
        "expDef": 1.194,
        "expFrag": 0.981,
        "expSpot": 0.73,
        "expDamage": 766.337,
        "expWinRate": 54.558
    },
    "4705": {
        "expDef": 1.069,
        "expFrag": 1.169,
        "expSpot": 0.725,
        "expDamage": 332.709,
        "expWinRate": 55.134
    },
    "4737": {
        "expDef": 0.839,
        "expFrag": 1.043,
        "expSpot": 0.633,
        "expDamage": 2078.548,
        "expWinRate": 50.454
    },
    "4865": {
        "expDef": 1.418,
        "expFrag": 0.953,
        "expSpot": 0.098,
        "expDamage": 545.668,
        "expWinRate": 50.744
    },
    "4881": {
        "expDef": 1.156,
        "expFrag": 1.195,
        "expSpot": 1.785,
        "expDamage": 305.902,
        "expWinRate": 57.572
    },
    "4897": {
        "expDef": 1.197,
        "expFrag": 1.308,
        "expSpot": 1.411,
        "expDamage": 313.474,
        "expWinRate": 56.986
    },
    "4913": {
        "expDef": 0.752,
        "expFrag": 0.727,
        "expSpot": 2.38,
        "expDamage": 503.257,
        "expWinRate": 52.644
    },
    "4929": {
        "expDef": 0.709,
        "expFrag": 0.758,
        "expSpot": 2.273,
        "expDamage": 981.133,
        "expWinRate": 51.124
    },
    "4945": {
        "expDef": 1.314,
        "expFrag": 0.836,
        "expSpot": 0.781,
        "expDamage": 331.303,
        "expWinRate": 54.898
    },
    "4961": {
        "expDef": 0.634,
        "expFrag": 0.797,
        "expSpot": 0.741,
        "expDamage": 1267.359,
        "expWinRate": 52.616
    },
    "4993": {
        "expDef": 0.641,
        "expFrag": 0.869,
        "expSpot": 1.205,
        "expDamage": 1249.437,
        "expWinRate": 51.58
    },
    "5121": {
        "expDef": 1.775,
        "expFrag": 1.652,
        "expSpot": 0.437,
        "expDamage": 293.496,
        "expWinRate": 58.581
    },
    "5137": {
        "expDef": 0.896,
        "expFrag": 0.833,
        "expSpot": 0.957,
        "expDamage": 1235.158,
        "expWinRate": 51.73
    },
    "5153": {
        "expDef": 1.071,
        "expFrag": 0.849,
        "expSpot": 2.269,
        "expDamage": 295.471,
        "expWinRate": 56.436
    },
    "5169": {
        "expDef": 1.039,
        "expFrag": 0.954,
        "expSpot": 1.467,
        "expDamage": 688.864,
        "expWinRate": 54.083
    },
    "5185": {
        "expDef": 0.804,
        "expFrag": 0.752,
        "expSpot": 2.14,
        "expDamage": 691.825,
        "expWinRate": 52.209
    },
    "5201": {
        "expDef": 1.431,
        "expFrag": 1.435,
        "expSpot": 1.258,
        "expDamage": 256.414,
        "expWinRate": 57.103
    },
    "5217": {
        "expDef": 0.639,
        "expFrag": 0.954,
        "expSpot": 0.971,
        "expDamage": 1103.225,
        "expWinRate": 54.979
    },
    "5249": {
        "expDef": 0.645,
        "expFrag": 0.911,
        "expSpot": 1.144,
        "expDamage": 1569.438,
        "expWinRate": 51.009
    },
    "5265": {
        "expDef": 0.685,
        "expFrag": 1.011,
        "expSpot": 1.522,
        "expDamage": 1930.095,
        "expWinRate": 52.328
    },
    "5377": {
        "expDef": 0.793,
        "expFrag": 0.876,
        "expSpot": 0.998,
        "expDamage": 1273.365,
        "expWinRate": 51.62
    },
    "5393": {
        "expDef": 0.727,
        "expFrag": 0.688,
        "expSpot": 2.281,
        "expDamage": 393.687,
        "expWinRate": 53.887
    },
    "5409": {
        "expDef": 0.926,
        "expFrag": 0.79,
        "expSpot": 1.918,
        "expDamage": 380.481,
        "expWinRate": 53.714
    },
    "5425": {
        "expDef": 0.552,
        "expFrag": 0.864,
        "expSpot": 1.334,
        "expDamage": 1823.336,
        "expWinRate": 49.851
    },
    "5457": {
        "expDef": 1.061,
        "expFrag": 0.927,
        "expSpot": 1.609,
        "expDamage": 879.7,
        "expWinRate": 53.031
    },
    "5473": {
        "expDef": 0.646,
        "expFrag": 1.044,
        "expSpot": 0.796,
        "expDamage": 836.402,
        "expWinRate": 54.341
    },
    "5505": {
        "expDef": 0.585,
        "expFrag": 0.983,
        "expSpot": 1.137,
        "expDamage": 1928.995,
        "expWinRate": 50.265
    },
    "5633": {
        "expDef": 1.178,
        "expFrag": 1.033,
        "expSpot": 0.066,
        "expDamage": 975.929,
        "expWinRate": 51.15
    },
    "5649": {
        "expDef": 1.553,
        "expFrag": 1.069,
        "expSpot": 0.101,
        "expDamage": 632.256,
        "expWinRate": 53.072
    },
    "5665": {
        "expDef": 1.468,
        "expFrag": 1.338,
        "expSpot": 1.541,
        "expDamage": 238.429,
        "expWinRate": 57.621
    },
    "5681": {
        "expDef": 0.604,
        "expFrag": 0.689,
        "expSpot": 2.464,
        "expDamage": 1049.281,
        "expWinRate": 49.911
    },
    "5697": {
        "expDef": 0.868,
        "expFrag": 0.987,
        "expSpot": 1.393,
        "expDamage": 1432.162,
        "expWinRate": 50.802
    },
    "5713": {
        "expDef": 0.792,
        "expFrag": 0.873,
        "expSpot": 1.22,
        "expDamage": 1529.287,
        "expWinRate": 50.891
    },
    "5729": {
        "expDef": 0.841,
        "expFrag": 1.263,
        "expSpot": 1.144,
        "expDamage": 712.178,
        "expWinRate": 54.924
    },
    "5889": {
        "expDef": 0.808,
        "expFrag": 0.988,
        "expSpot": 0.823,
        "expDamage": 1080.866,
        "expWinRate": 53.825
    },
    "5905": {
        "expDef": 1.601,
        "expFrag": 1.002,
        "expSpot": 0.148,
        "expDamage": 359.314,
        "expWinRate": 52.086
    },
    "5921": {
        "expDef": 1.002,
        "expFrag": 0.826,
        "expSpot": 1.388,
        "expDamage": 1117.948,
        "expWinRate": 51.994
    },
    "5937": {
        "expDef": 0.578,
        "expFrag": 0.739,
        "expSpot": 2.625,
        "expDamage": 1317.272,
        "expWinRate": 48.465
    },
    "5953": {
        "expDef": 1.692,
        "expFrag": 1.115,
        "expSpot": 0.909,
        "expDamage": 271.077,
        "expWinRate": 58.268
    },
    "5969": {
        "expDef": 0.91,
        "expFrag": 0.776,
        "expSpot": 1.248,
        "expDamage": 1110.306,
        "expWinRate": 52.532
    },
    "5985": {
        "expDef": 1.176,
        "expFrag": 1.446,
        "expSpot": 1.18,
        "expDamage": 243.07,
        "expWinRate": 57.502
    },
    "6145": {
        "expDef": 0.677,
        "expFrag": 0.874,
        "expSpot": 1.082,
        "expDamage": 1834.302,
        "expWinRate": 49.342
    },
    "6161": {
        "expDef": 1.085,
        "expFrag": 0.894,
        "expSpot": 2.506,
        "expDamage": 350.572,
        "expWinRate": 56.302
    },
    "6177": {
        "expDef": 1.58,
        "expFrag": 1.841,
        "expSpot": 1.059,
        "expDamage": 281.263,
        "expWinRate": 56.796
    },
    "6193": {
        "expDef": 0.475,
        "expFrag": 0.901,
        "expSpot": 1.245,
        "expDamage": 1977.126,
        "expWinRate": 49.139
    },
    "6209": {
        "expDef": 0.681,
        "expFrag": 1,
        "expSpot": 0.947,
        "expDamage": 1915.587,
        "expWinRate": 48.541
    },
    "6225": {
        "expDef": 0.64,
        "expFrag": 0.874,
        "expSpot": 1.048,
        "expDamage": 1853.543,
        "expWinRate": 48.98
    },
    "6401": {
        "expDef": 1.636,
        "expFrag": 1.458,
        "expSpot": 0.788,
        "expDamage": 381.359,
        "expWinRate": 57.323
    },
    "6417": {
        "expDef": 1.021,
        "expFrag": 0.931,
        "expSpot": 1.539,
        "expDamage": 467.919,
        "expWinRate": 54.925
    },
    "6433": {
        "expDef": 1.342,
        "expFrag": 1.457,
        "expSpot": 1.153,
        "expDamage": 361.23,
        "expWinRate": 58.117
    },
    "6449": {
        "expDef": 1.236,
        "expFrag": 1.669,
        "expSpot": 0.463,
        "expDamage": 293.484,
        "expWinRate": 60.298
    },
    "6465": {
        "expDef": 0.697,
        "expFrag": 0.674,
        "expSpot": 1.95,
        "expDamage": 523.244,
        "expWinRate": 52.27
    },
    "6481": {
        "expDef": 1.044,
        "expFrag": 0.889,
        "expSpot": 1.683,
        "expDamage": 326.577,
        "expWinRate": 55.296
    },
    "6657": {
        "expDef": 1.057,
        "expFrag": 0.912,
        "expSpot": 1.424,
        "expDamage": 863.482,
        "expWinRate": 53.93
    },
    "6673": {
        "expDef": 1.532,
        "expFrag": 1.369,
        "expSpot": 0.908,
        "expDamage": 390.113,
        "expWinRate": 58.827
    },
    "6705": {
        "expDef": 1.308,
        "expFrag": 1.532,
        "expSpot": 0.619,
        "expDamage": 381.707,
        "expWinRate": 57.405
    },
    "6721": {
        "expDef": 1.047,
        "expFrag": 1.139,
        "expSpot": 0.862,
        "expDamage": 636.27,
        "expWinRate": 55.357
    },
    "6913": {
        "expDef": 1.397,
        "expFrag": 1.303,
        "expSpot": 0.816,
        "expDamage": 496.006,
        "expWinRate": 56.033
    },
    "6929": {
        "expDef": 0.593,
        "expFrag": 0.892,
        "expSpot": 0.85,
        "expDamage": 1876.863,
        "expWinRate": 51.725
    },
    "6945": {
        "expDef": 1.347,
        "expFrag": 1.121,
        "expSpot": 0.933,
        "expDamage": 578.069,
        "expWinRate": 54.963
    },
    "6961": {
        "expDef": 1.152,
        "expFrag": 1.411,
        "expSpot": 0.665,
        "expDamage": 529.581,
        "expWinRate": 56.914
    },
    "6977": {
        "expDef": 0.985,
        "expFrag": 0.88,
        "expSpot": 0.93,
        "expDamage": 1027.507,
        "expWinRate": 53.527
    },
    "6993": {
        "expDef": 1.056,
        "expFrag": 1.336,
        "expSpot": 0.907,
        "expDamage": 296.153,
        "expWinRate": 56.426
    },
    "7169": {
        "expDef": 0.578,
        "expFrag": 0.851,
        "expSpot": 1.233,
        "expDamage": 1806.707,
        "expWinRate": 49.574
    },
    "7185": {
        "expDef": 0.872,
        "expFrag": 0.944,
        "expSpot": 1.247,
        "expDamage": 732.148,
        "expWinRate": 54.28
    },
    "7201": {
        "expDef": 1.105,
        "expFrag": 1.002,
        "expSpot": 0.835,
        "expDamage": 792.658,
        "expWinRate": 54.019
    },
    "7217": {
        "expDef": 0.893,
        "expFrag": 1.068,
        "expSpot": 0.492,
        "expDamage": 590.278,
        "expWinRate": 55.022
    },
    "7233": {
        "expDef": 1.177,
        "expFrag": 0.9,
        "expSpot": 0.061,
        "expDamage": 1098.962,
        "expWinRate": 51.535
    },
    "7249": {
        "expDef": 0.683,
        "expFrag": 0.916,
        "expSpot": 1.341,
        "expDamage": 1816.543,
        "expWinRate": 49.359
    },
    "7425": {
        "expDef": 0.778,
        "expFrag": 1.045,
        "expSpot": 0.509,
        "expDamage": 1398.924,
        "expWinRate": 50.37
    },
    "7441": {
        "expDef": 0.601,
        "expFrag": 0.845,
        "expSpot": 0.921,
        "expDamage": 1542.827,
        "expWinRate": 51.769
    },
    "7457": {
        "expDef": 0.838,
        "expFrag": 0.885,
        "expSpot": 0.035,
        "expDamage": 1301.063,
        "expWinRate": 51.153
    },
    "7473": {
        "expDef": 0.858,
        "expFrag": 1.04,
        "expSpot": 0.624,
        "expDamage": 795.838,
        "expWinRate": 53.965
    },
    "7489": {
        "expDef": 1.016,
        "expFrag": 0.877,
        "expSpot": 0.053,
        "expDamage": 1246.839,
        "expWinRate": 50.833
    },
    "7505": {
        "expDef": 1.122,
        "expFrag": 1.231,
        "expSpot": 1.62,
        "expDamage": 321.046,
        "expWinRate": 57.031
    },
    "7681": {
        "expDef": 1.743,
        "expFrag": 1.18,
        "expSpot": 0.122,
        "expDamage": 447.046,
        "expWinRate": 53.818
    },
    "7697": {
        "expDef": 0.944,
        "expFrag": 1.008,
        "expSpot": 0.575,
        "expDamage": 1392.348,
        "expWinRate": 51.626
    },
    "7713": {
        "expDef": 1.463,
        "expFrag": 1.296,
        "expSpot": 0.943,
        "expDamage": 496.73,
        "expWinRate": 56.473
    },
    "7729": {
        "expDef": 0.855,
        "expFrag": 1.081,
        "expSpot": 0.611,
        "expDamage": 1032.205,
        "expWinRate": 53.473
    },
    "7745": {
        "expDef": 1.79,
        "expFrag": 1.803,
        "expSpot": 0.745,
        "expDamage": 301.002,
        "expWinRate": 58.689
    },
    "7761": {
        "expDef": 1.269,
        "expFrag": 1.391,
        "expSpot": 1.75,
        "expDamage": 247.804,
        "expWinRate": 57.091
    },
    "7937": {
        "expDef": 0.787,
        "expFrag": 0.891,
        "expSpot": 1.571,
        "expDamage": 1409.071,
        "expWinRate": 50.967
    },
    "7953": {
        "expDef": 0.757,
        "expFrag": 1.028,
        "expSpot": 0.597,
        "expDamage": 1748.973,
        "expWinRate": 51.132
    },
    "7969": {
        "expDef": 1.037,
        "expFrag": 0.929,
        "expSpot": 0.05,
        "expDamage": 1076.049,
        "expWinRate": 51.808
    },
    "7985": {
        "expDef": 0.652,
        "expFrag": 0.942,
        "expSpot": 0.458,
        "expDamage": 1333.435,
        "expWinRate": 50.929
    },
    "8017": {
        "expDef": 1.759,
        "expFrag": 1.524,
        "expSpot": 0.749,
        "expDamage": 366.813,
        "expWinRate": 57.886
    },
    "8081": {
        "expDef": 0.629,
        "expFrag": 0.981,
        "expSpot": 1.098,
        "expDamage": 1635.05,
        "expWinRate": 50.722
    },
    "8193": {
        "expDef": 0.764,
        "expFrag": 1.117,
        "expSpot": 0.603,
        "expDamage": 1840.245,
        "expWinRate": 50.493
    },
    "8209": {
        "expDef": 1.172,
        "expFrag": 0.918,
        "expSpot": 2.156,
        "expDamage": 335.809,
        "expWinRate": 56.732
    },
    "8225": {
        "expDef": 0.87,
        "expFrag": 0.974,
        "expSpot": 0.542,
        "expDamage": 1368.116,
        "expWinRate": 52.544
    },
    "8241": {
        "expDef": 0.575,
        "expFrag": 1.066,
        "expSpot": 0.493,
        "expDamage": 1794.917,
        "expWinRate": 51.434
    },
    "8257": {
        "expDef": 1.772,
        "expFrag": 1.391,
        "expSpot": 0.912,
        "expDamage": 358.619,
        "expWinRate": 59.139
    },
    "8273": {
        "expDef": 1.551,
        "expFrag": 1.65,
        "expSpot": 1.13,
        "expDamage": 276.625,
        "expWinRate": 58.283
    },
    "8449": {
        "expDef": 0.754,
        "expFrag": 0.921,
        "expSpot": 0.025,
        "expDamage": 1512.148,
        "expWinRate": 50.286
    },
    "8465": {
        "expDef": 0.948,
        "expFrag": 0.805,
        "expSpot": 1.22,
        "expDamage": 1096.638,
        "expWinRate": 52.413
    },
    "8481": {
        "expDef": 0.629,
        "expFrag": 0.817,
        "expSpot": 0.027,
        "expDamage": 1644.351,
        "expWinRate": 49.717
    },
    "8497": {
        "expDef": 0.531,
        "expFrag": 1.005,
        "expSpot": 0.611,
        "expDamage": 2019.253,
        "expWinRate": 50.281
    },
    "8529": {
        "expDef": 1.176,
        "expFrag": 0.96,
        "expSpot": 0.609,
        "expDamage": 1327.791,
        "expWinRate": 52.433
    },
    "8705": {
        "expDef": 0.753,
        "expFrag": 0.869,
        "expSpot": 0.036,
        "expDamage": 1647.048,
        "expWinRate": 49.464
    },
    "8721": {
        "expDef": 0.708,
        "expFrag": 0.88,
        "expSpot": 0.031,
        "expDamage": 1459.68,
        "expWinRate": 50.236
    },
    "8737": {
        "expDef": 0.563,
        "expFrag": 1.066,
        "expSpot": 0.552,
        "expDamage": 1783.299,
        "expWinRate": 53.235
    },
    "8785": {
        "expDef": 1.679,
        "expFrag": 1.095,
        "expSpot": 0.737,
        "expDamage": 547.295,
        "expWinRate": 56.943
    },
    "8961": {
        "expDef": 0.995,
        "expFrag": 0.902,
        "expSpot": 1.445,
        "expDamage": 848.541,
        "expWinRate": 54.346
    },
    "8977": {
        "expDef": 0.984,
        "expFrag": 0.954,
        "expSpot": 0.043,
        "expDamage": 1130.692,
        "expWinRate": 51.244
    },
    "8993": {
        "expDef": 0.739,
        "expFrag": 0.925,
        "expSpot": 1.359,
        "expDamage": 1531.344,
        "expWinRate": 50.904
    },
    "9041": {
        "expDef": 1.557,
        "expFrag": 1.218,
        "expSpot": 1.153,
        "expDamage": 444.784,
        "expWinRate": 56.785
    },
    "9217": {
        "expDef": 0.792,
        "expFrag": 0.977,
        "expSpot": 1.085,
        "expDamage": 1305.771,
        "expWinRate": 51.938
    },
    "9233": {
        "expDef": 0.631,
        "expFrag": 0.859,
        "expSpot": 0.029,
        "expDamage": 1657.638,
        "expWinRate": 49.827
    },
    "9249": {
        "expDef": 1.104,
        "expFrag": 1.016,
        "expSpot": 0.755,
        "expDamage": 1039.562,
        "expWinRate": 53.26
    },
    "9297": {
        "expDef": 0.466,
        "expFrag": 1.041,
        "expSpot": 0.5,
        "expDamage": 1996.009,
        "expWinRate": 49.308
    },
    "9473": {
        "expDef": 0.978,
        "expFrag": 0.803,
        "expSpot": 2.367,
        "expDamage": 378.178,
        "expWinRate": 55.095
    },
    "9489": {
        "expDef": 0.502,
        "expFrag": 0.889,
        "expSpot": 0.94,
        "expDamage": 1879.1,
        "expWinRate": 50.041
    },
    "9505": {
        "expDef": 0.709,
        "expFrag": 0.847,
        "expSpot": 1.061,
        "expDamage": 1527.034,
        "expWinRate": 50.413
    },
    "9553": {
        "expDef": 1.356,
        "expFrag": 1.004,
        "expSpot": 0.65,
        "expDamage": 759.652,
        "expWinRate": 55.672
    },
    "9745": {
        "expDef": 0.707,
        "expFrag": 0.87,
        "expSpot": 0.978,
        "expDamage": 1548.334,
        "expWinRate": 51.427
    },
    "9761": {
        "expDef": 0.696,
        "expFrag": 0.611,
        "expSpot": 2.592,
        "expDamage": 403.357,
        "expWinRate": 53.277
    },
    "9793": {
        "expDef": 1.193,
        "expFrag": 1.283,
        "expSpot": 0.56,
        "expDamage": 439.78,
        "expWinRate": 56.94
    },
    "9809": {
        "expDef": 1.121,
        "expFrag": 0.936,
        "expSpot": 0.415,
        "expDamage": 750.153,
        "expWinRate": 53.17
    },
    "9985": {
        "expDef": 0.87,
        "expFrag": 0.922,
        "expSpot": 0.816,
        "expDamage": 1278.946,
        "expWinRate": 51.358
    },
    "10001": {
        "expDef": 0.631,
        "expFrag": 0.629,
        "expSpot": 2.384,
        "expDamage": 494.288,
        "expWinRate": 52.45
    },
    "10017": {
        "expDef": 1.087,
        "expFrag": 0.983,
        "expSpot": 1.124,
        "expDamage": 707.246,
        "expWinRate": 54.423
    },
    "10049": {
        "expDef": 1.294,
        "expFrag": 1.173,
        "expSpot": 0.707,
        "expDamage": 618.763,
        "expWinRate": 54.146
    },
    "10065": {
        "expDef": 1.255,
        "expFrag": 1.028,
        "expSpot": 0.638,
        "expDamage": 1098.995,
        "expWinRate": 55.396
    },
    "10241": {
        "expDef": 1.068,
        "expFrag": 1.005,
        "expSpot": 0.839,
        "expDamage": 1024.083,
        "expWinRate": 53.325
    },
    "10257": {
        "expDef": 0.722,
        "expFrag": 0.914,
        "expSpot": 1.279,
        "expDamage": 1549.429,
        "expWinRate": 51.295
    },
    "10273": {
        "expDef": 1.546,
        "expFrag": 1.191,
        "expSpot": 1.213,
        "expDamage": 458.871,
        "expWinRate": 57.067
    },
    "10497": {
        "expDef": 0.655,
        "expFrag": 1.041,
        "expSpot": 0.691,
        "expDamage": 819.776,
        "expWinRate": 53.479
    },
    "10513": {
        "expDef": 0.884,
        "expFrag": 0.848,
        "expSpot": 1.156,
        "expDamage": 1220.972,
        "expWinRate": 52.17
    },
    "10529": {
        "expDef": 1.362,
        "expFrag": 1.153,
        "expSpot": 1.372,
        "expDamage": 598.254,
        "expWinRate": 54.348
    },
    "10577": {
        "expDef": 1.156,
        "expFrag": 1.294,
        "expSpot": 0.206,
        "expDamage": 195.112,
        "expWinRate": 56.536
    },
    "10753": {
        "expDef": 0.654,
        "expFrag": 0.866,
        "expSpot": 0.914,
        "expDamage": 1579.59,
        "expWinRate": 51.425
    },
    "10769": {
        "expDef": 0.999,
        "expFrag": 0.908,
        "expSpot": 0.936,
        "expDamage": 1053.704,
        "expWinRate": 54.143
    },
    "10785": {
        "expDef": 0.667,
        "expFrag": 0.874,
        "expSpot": 1.224,
        "expDamage": 1839.281,
        "expWinRate": 48.998
    },
    "10817": {
        "expDef": 1.046,
        "expFrag": 0.897,
        "expSpot": 0.673,
        "expDamage": 986.723,
        "expWinRate": 53.275
    },
    "10833": {
        "expDef": 1.79,
        "expFrag": 0.965,
        "expSpot": 0.092,
        "expDamage": 361.812,
        "expWinRate": 54.311
    },
    "11009": {
        "expDef": 0.824,
        "expFrag": 0.819,
        "expSpot": 0.813,
        "expDamage": 1206.673,
        "expWinRate": 52.193
    },
    "11025": {
        "expDef": 0.967,
        "expFrag": 0.977,
        "expSpot": 0.463,
        "expDamage": 1019.99,
        "expWinRate": 50.99
    },
    "11041": {
        "expDef": 1.148,
        "expFrag": 0.924,
        "expSpot": 0.887,
        "expDamage": 981.153,
        "expWinRate": 53.061
    },
    "11073": {
        "expDef": 0.785,
        "expFrag": 1.028,
        "expSpot": 0.868,
        "expDamage": 1656.742,
        "expWinRate": 51.846
    },
    "11089": {
        "expDef": 1.532,
        "expFrag": 1.114,
        "expSpot": 0.106,
        "expDamage": 597.847,
        "expWinRate": 55.08
    },
    "11265": {
        "expDef": 0.838,
        "expFrag": 0.995,
        "expSpot": 0.89,
        "expDamage": 801.122,
        "expWinRate": 54.455
    },
    "11281": {
        "expDef": 1.532,
        "expFrag": 1.278,
        "expSpot": 0.778,
        "expDamage": 494.648,
        "expWinRate": 56.089
    },
    "11297": {
        "expDef": 0.9,
        "expFrag": 0.939,
        "expSpot": 0.52,
        "expDamage": 1341.049,
        "expWinRate": 51.219
    },
    "11345": {
        "expDef": 1.532,
        "expFrag": 0.885,
        "expSpot": 0.062,
        "expDamage": 943.836,
        "expWinRate": 52.419
    },
    "11521": {
        "expDef": 0.695,
        "expFrag": 0.859,
        "expSpot": 1.147,
        "expDamage": 1529.482,
        "expWinRate": 50.442
    },
    "11537": {
        "expDef": 0.876,
        "expFrag": 0.991,
        "expSpot": 0.679,
        "expDamage": 1377.558,
        "expWinRate": 51.162
    },
    "11553": {
        "expDef": 1.153,
        "expFrag": 1.004,
        "expSpot": 1.214,
        "expDamage": 789.252,
        "expWinRate": 53.425
    },
    "11585": {
        "expDef": 1.065,
        "expFrag": 0.943,
        "expSpot": 0.614,
        "expDamage": 746.34,
        "expWinRate": 53.01
    },
    "11601": {
        "expDef": 0.799,
        "expFrag": 0.846,
        "expSpot": 0.028,
        "expDamage": 1434.9,
        "expWinRate": 50.69
    },
    "11777": {
        "expDef": 1.089,
        "expFrag": 1.151,
        "expSpot": 0.841,
        "expDamage": 627.107,
        "expWinRate": 54.984
    },
    "11793": {
        "expDef": 1.114,
        "expFrag": 1.012,
        "expSpot": 0.568,
        "expDamage": 821.162,
        "expWinRate": 51.449
    },
    "11809": {
        "expDef": 1.192,
        "expFrag": 1.006,
        "expSpot": 1.628,
        "expDamage": 883.213,
        "expWinRate": 52.519
    },
    "11841": {
        "expDef": 0.976,
        "expFrag": 0.938,
        "expSpot": 0.054,
        "expDamage": 1588.405,
        "expWinRate": 49.907
    },
    "11857": {
        "expDef": 1.86,
        "expFrag": 1.002,
        "expSpot": 0.156,
        "expDamage": 767.54,
        "expWinRate": 53.616
    },
    "12033": {
        "expDef": 0.899,
        "expFrag": 0.977,
        "expSpot": 0.803,
        "expDamage": 1549.577,
        "expWinRate": 49.236
    },
    "12049": {
        "expDef": 0.431,
        "expFrag": 1.013,
        "expSpot": 0.61,
        "expDamage": 2020.089,
        "expWinRate": 50.732
    },
    "12097": {
        "expDef": 0.924,
        "expFrag": 0.931,
        "expSpot": 0.734,
        "expDamage": 1283.501,
        "expWinRate": 51.159
    },
    "12113": {
        "expDef": 0.874,
        "expFrag": 0.849,
        "expSpot": 0.028,
        "expDamage": 1183.977,
        "expWinRate": 51.058
    },
    "12289": {
        "expDef": 1.071,
        "expFrag": 0.992,
        "expSpot": 1.81,
        "expDamage": 684.205,
        "expWinRate": 54.402
    },
    "12305": {
        "expDef": 0.679,
        "expFrag": 0.913,
        "expSpot": 1.325,
        "expDamage": 1837.763,
        "expWinRate": 49.302
    },
    "12369": {
        "expDef": 0.764,
        "expFrag": 0.773,
        "expSpot": 0.022,
        "expDamage": 1704.742,
        "expWinRate": 50.676
    },
    "12545": {
        "expDef": 0.831,
        "expFrag": 0.92,
        "expSpot": 1.551,
        "expDamage": 908.559,
        "expWinRate": 52.823
    },
    "12561": {
        "expDef": 1.349,
        "expFrag": 1.178,
        "expSpot": 2.624,
        "expDamage": 266.158,
        "expWinRate": 56.215
    },
    "12577": {
        "expDef": 0.915,
        "expFrag": 0.975,
        "expSpot": 1.737,
        "expDamage": 512.017,
        "expWinRate": 55.818
    },
    "12817": {
        "expDef": 1.389,
        "expFrag": 1.291,
        "expSpot": 1.984,
        "expDamage": 214.336,
        "expWinRate": 57.67
    },
    "12881": {
        "expDef": 0.946,
        "expFrag": 0.992,
        "expSpot": 1.366,
        "expDamage": 501.818,
        "expWinRate": 54.671
    },
    "13073": {
        "expDef": 1.43,
        "expFrag": 1.009,
        "expSpot": 1.615,
        "expDamage": 282.345,
        "expWinRate": 58.04
    },
    "13089": {
        "expDef": 0.515,
        "expFrag": 0.978,
        "expSpot": 0.755,
        "expDamage": 2024.339,
        "expWinRate": 49.698
    },
    "13121": {
        "expDef": 1.565,
        "expFrag": 1.278,
        "expSpot": 1.073,
        "expDamage": 346.033,
        "expWinRate": 58.26
    },
    "13137": {
        "expDef": 0.739,
        "expFrag": 1.007,
        "expSpot": 0.548,
        "expDamage": 1663.266,
        "expWinRate": 50.592
    },
    "13313": {
        "expDef": 0.89,
        "expFrag": 0.875,
        "expSpot": 1.219,
        "expDamage": 1154.499,
        "expWinRate": 50.429
    },
    "13329": {
        "expDef": 1.28,
        "expFrag": 1.19,
        "expSpot": 1.053,
        "expDamage": 415.095,
        "expWinRate": 55.827
    },
    "13345": {
        "expDef": 0.952,
        "expFrag": 0.844,
        "expSpot": 1.011,
        "expDamage": 1139.511,
        "expWinRate": 51.231
    },
    "13393": {
        "expDef": 1.458,
        "expFrag": 1.051,
        "expSpot": 0.516,
        "expDamage": 588.782,
        "expWinRate": 54.118
    },
    "13569": {
        "expDef": 0.635,
        "expFrag": 1.043,
        "expSpot": 0.726,
        "expDamage": 2048.681,
        "expWinRate": 48.678
    },
    "13585": {
        "expDef": 1.26,
        "expFrag": 1.068,
        "expSpot": 1.573,
        "expDamage": 373.692,
        "expWinRate": 57.299
    },
    "13825": {
        "expDef": 0.744,
        "expFrag": 0.938,
        "expSpot": 1.392,
        "expDamage": 1752.651,
        "expWinRate": 48.683
    },
    "13841": {
        "expDef": 0.973,
        "expFrag": 0.821,
        "expSpot": 1.134,
        "expDamage": 1139.899,
        "expWinRate": 51.36
    },
    "13857": {
        "expDef": 0.477,
        "expFrag": 0.994,
        "expSpot": 0.703,
        "expDamage": 2054.978,
        "expWinRate": 51.103
    },
    "13889": {
        "expDef": 0.611,
        "expFrag": 1.098,
        "expSpot": 0.8,
        "expDamage": 2053.998,
        "expWinRate": 49.667
    },
    "13905": {
        "expDef": 0.39,
        "expFrag": 1.074,
        "expSpot": 0.392,
        "expDamage": 2024.45,
        "expWinRate": 49.929
    },
    "14097": {
        "expDef": 1.097,
        "expFrag": 0.963,
        "expSpot": 1.568,
        "expDamage": 708.538,
        "expWinRate": 54.594
    },
    "14113": {
        "expDef": 0.658,
        "expFrag": 0.935,
        "expSpot": 1.275,
        "expDamage": 1860.328,
        "expWinRate": 49.168
    },
    "14145": {
        "expDef": 0.746,
        "expFrag": 0.627,
        "expSpot": 2.364,
        "expDamage": 405.562,
        "expWinRate": 53.337
    },
    "14161": {
        "expDef": 0.973,
        "expFrag": 1.038,
        "expSpot": 0.791,
        "expDamage": 1068.474,
        "expWinRate": 52.948
    },
    "14337": {
        "expDef": 0.692,
        "expFrag": 1.038,
        "expSpot": 0.909,
        "expDamage": 2011.444,
        "expWinRate": 48.972
    },
    "14353": {
        "expDef": 0.697,
        "expFrag": 0.596,
        "expSpot": 1.989,
        "expDamage": 668.261,
        "expWinRate": 51.647
    },
    "14401": {
        "expDef": 0.958,
        "expFrag": 0.858,
        "expSpot": 0.038,
        "expDamage": 1394.13,
        "expWinRate": 50.55
    },
    "14417": {
        "expDef": 1.131,
        "expFrag": 0.993,
        "expSpot": 0.834,
        "expDamage": 769.517,
        "expWinRate": 53.047
    },
    "14609": {
        "expDef": 0.776,
        "expFrag": 0.969,
        "expSpot": 1.222,
        "expDamage": 1882.93,
        "expWinRate": 48.727
    },
    "14625": {
        "expDef": 1.019,
        "expFrag": 0.909,
        "expSpot": 1.239,
        "expDamage": 1157.98,
        "expWinRate": 50.98
    },
    "14657": {
        "expDef": 1.51,
        "expFrag": 0.987,
        "expSpot": 0.098,
        "expDamage": 391.921,
        "expWinRate": 54.65
    },
    "14673": {
        "expDef": 0.894,
        "expFrag": 0.949,
        "expSpot": 0.721,
        "expDamage": 1336.018,
        "expWinRate": 50.949
    },
    "14865": {
        "expDef": 0.808,
        "expFrag": 0.957,
        "expSpot": 1.136,
        "expDamage": 1630.981,
        "expWinRate": 50.454
    },
    "14881": {
        "expDef": 0.59,
        "expFrag": 1.019,
        "expSpot": 0.828,
        "expDamage": 1981.564,
        "expWinRate": 48.612
    },
    "14913": {
        "expDef": 1.179,
        "expFrag": 0.941,
        "expSpot": 0.89,
        "expDamage": 388.27,
        "expWinRate": 55.185
    },
    "15105": {
        "expDef": 1.547,
        "expFrag": 1.221,
        "expSpot": 1.327,
        "expDamage": 304.419,
        "expWinRate": 56.652
    },
    "15121": {
        "expDef": 0.876,
        "expFrag": 1.128,
        "expSpot": 0.157,
        "expDamage": 197.295,
        "expWinRate": 56.276
    },
    "15137": {
        "expDef": 0.685,
        "expFrag": 0.619,
        "expSpot": 2.131,
        "expDamage": 504.769,
        "expWinRate": 52.42
    },
    "15169": {
        "expDef": 1.71,
        "expFrag": 1.274,
        "expSpot": 0.825,
        "expDamage": 233.369,
        "expWinRate": 57.542
    },
    "15361": {
        "expDef": 1.705,
        "expFrag": 1.318,
        "expSpot": 1.313,
        "expDamage": 231.517,
        "expWinRate": 58.939
    },
    "15377": {
        "expDef": 0.765,
        "expFrag": 0.827,
        "expSpot": 0.025,
        "expDamage": 1219.478,
        "expWinRate": 51.243
    },
    "15393": {
        "expDef": 0.747,
        "expFrag": 1.041,
        "expSpot": 0.942,
        "expDamage": 1597.749,
        "expWinRate": 50.38
    },
    "15425": {
        "expDef": 0.751,
        "expFrag": 0.927,
        "expSpot": 1.352,
        "expDamage": 1784.97,
        "expWinRate": 49.219
    },
    "15441": {
        "expDef": 0.819,
        "expFrag": 0.791,
        "expSpot": 1.091,
        "expDamage": 1133.499,
        "expWinRate": 52.278
    },
    "15617": {
        "expDef": 0.752,
        "expFrag": 1.112,
        "expSpot": 1.518,
        "expDamage": 1955.47,
        "expWinRate": 51.69
    },
    "15633": {
        "expDef": 1.545,
        "expFrag": 1.062,
        "expSpot": 0.09,
        "expDamage": 416.349,
        "expWinRate": 54.909
    },
    "15649": {
        "expDef": 0.679,
        "expFrag": 0.729,
        "expSpot": 2.367,
        "expDamage": 716.681,
        "expWinRate": 51.402
    },
    "15681": {
        "expDef": 0.77,
        "expFrag": 0.927,
        "expSpot": 1.343,
        "expDamage": 1553.828,
        "expWinRate": 50.923
    },
    "15697": {
        "expDef": 0.49,
        "expFrag": 0.885,
        "expSpot": 1.005,
        "expDamage": 1988.518,
        "expWinRate": 49.545
    },
    "15873": {
        "expDef": 1.315,
        "expFrag": 0.929,
        "expSpot": 1.496,
        "expDamage": 334.067,
        "expWinRate": 55.676
    },
    "15889": {
        "expDef": 1.026,
        "expFrag": 0.944,
        "expSpot": 1.311,
        "expDamage": 721.445,
        "expWinRate": 53.524
    },
    "15905": {
        "expDef": 0.706,
        "expFrag": 0.953,
        "expSpot": 1.292,
        "expDamage": 1905.137,
        "expWinRate": 50.046
    },
    "15937": {
        "expDef": 2.084,
        "expFrag": 1.389,
        "expSpot": 0.94,
        "expDamage": 240.985,
        "expWinRate": 59.08
    },
    "15953": {
        "expDef": 0.57,
        "expFrag": 0.976,
        "expSpot": 0.713,
        "expDamage": 2000.318,
        "expWinRate": 51.337
    },
    "16129": {
        "expDef": 0.893,
        "expFrag": 0.883,
        "expSpot": 0.035,
        "expDamage": 981.024,
        "expWinRate": 51.977
    },
    "16145": {
        "expDef": 1.078,
        "expFrag": 1.06,
        "expSpot": 0.662,
        "expDamage": 593.392,
        "expWinRate": 52.551
    },
    "16161": {
        "expDef": 0.916,
        "expFrag": 0.838,
        "expSpot": 0.03,
        "expDamage": 1470.951,
        "expWinRate": 50.776
    },
    "16209": {
        "expDef": 0.857,
        "expFrag": 0.92,
        "expSpot": 1.395,
        "expDamage": 614.616,
        "expWinRate": 54.302
    },
    "16385": {
        "expDef": 1.235,
        "expFrag": 1.037,
        "expSpot": 0.082,
        "expDamage": 583.566,
        "expWinRate": 53.456
    },
    "16401": {
        "expDef": 0.819,
        "expFrag": 1.032,
        "expSpot": 0.516,
        "expDamage": 1731.736,
        "expWinRate": 50.218
    },
    "16417": {
        "expDef": 1.339,
        "expFrag": 1.018,
        "expSpot": 0.057,
        "expDamage": 817.855,
        "expWinRate": 53.493
    },
    "16449": {
        "expDef": 0.638,
        "expFrag": 0.753,
        "expSpot": 0.726,
        "expDamage": 1192.189,
        "expWinRate": 51.776
    },
    "16641": {
        "expDef": 0.783,
        "expFrag": 0.676,
        "expSpot": 2.62,
        "expDamage": 474.291,
        "expWinRate": 52.756
    },
    "16657": {
        "expDef": 0.935,
        "expFrag": 1.072,
        "expSpot": 0.459,
        "expDamage": 1466.124,
        "expWinRate": 50.896
    },
    "16673": {
        "expDef": 0.732,
        "expFrag": 0.615,
        "expSpot": 2.247,
        "expDamage": 532.553,
        "expWinRate": 52.386
    },
    "16705": {
        "expDef": 0.499,
        "expFrag": 0.897,
        "expSpot": 1.162,
        "expDamage": 1734.692,
        "expWinRate": 52.53
    },
    "16897": {
        "expDef": 0.774,
        "expFrag": 0.962,
        "expSpot": 1.426,
        "expDamage": 1793.135,
        "expWinRate": 48.877
    },
    "16913": {
        "expDef": 0.732,
        "expFrag": 1.264,
        "expSpot": 0.472,
        "expDamage": 2154.025,
        "expWinRate": 48.72
    },
    "16961": {
        "expDef": 0.479,
        "expFrag": 0.819,
        "expSpot": 1.186,
        "expDamage": 1881.915,
        "expWinRate": 49.405
    },
    "17153": {
        "expDef": 0.787,
        "expFrag": 1.01,
        "expSpot": 1.465,
        "expDamage": 1801.509,
        "expWinRate": 48.947
    },
    "17169": {
        "expDef": 1.134,
        "expFrag": 1.293,
        "expSpot": 1.281,
        "expDamage": 320.927,
        "expWinRate": 57.066
    },
    "17217": {
        "expDef": 0.555,
        "expFrag": 0.829,
        "expSpot": 2.542,
        "expDamage": 1376.121,
        "expWinRate": 48.72
    },
    "17425": {
        "expDef": 0.952,
        "expFrag": 1.007,
        "expSpot": 1.297,
        "expDamage": 399.734,
        "expWinRate": 56.012
    },
    "17473": {
        "expDef": 0.748,
        "expFrag": 0.718,
        "expSpot": 2.537,
        "expDamage": 814.762,
        "expWinRate": 51.506
    },
    "17665": {
        "expDef": 0.75,
        "expFrag": 0.926,
        "expSpot": 1.343,
        "expDamage": 1474.221,
        "expWinRate": 51.097
    },
    "17729": {
        "expDef": 0.568,
        "expFrag": 1.136,
        "expSpot": 0.711,
        "expDamage": 2000.944,
        "expWinRate": 50.907
    },
    "17937": {
        "expDef": 1.24,
        "expFrag": 1.325,
        "expSpot": 0.793,
        "expDamage": 457.674,
        "expWinRate": 56.678
    },
    "17953": {
        "expDef": 0.786,
        "expFrag": 0.726,
        "expSpot": 2.515,
        "expDamage": 784.897,
        "expWinRate": 51.9
    },
    "17985": {
        "expDef": 0.696,
        "expFrag": 0.74,
        "expSpot": 2.272,
        "expDamage": 508.101,
        "expWinRate": 53.733
    },
    "18177": {
        "expDef": 0.641,
        "expFrag": 0.703,
        "expSpot": 2.54,
        "expDamage": 1016.638,
        "expWinRate": 50.9
    },
    "18193": {
        "expDef": 0.95,
        "expFrag": 1.034,
        "expSpot": 1.216,
        "expDamage": 510.506,
        "expWinRate": 54.508
    },
    "18209": {
        "expDef": 0.602,
        "expFrag": 0.668,
        "expSpot": 2.313,
        "expDamage": 1002.886,
        "expWinRate": 50.503
    },
    "18241": {
        "expDef": 0.683,
        "expFrag": 0.737,
        "expSpot": 2.665,
        "expDamage": 682.79,
        "expWinRate": 53.057
    },
    "18433": {
        "expDef": 0.819,
        "expFrag": 0.7,
        "expSpot": 2.667,
        "expDamage": 781.473,
        "expWinRate": 52.383
    },
    "18449": {
        "expDef": 0.706,
        "expFrag": 0.682,
        "expSpot": 2.612,
        "expDamage": 974.811,
        "expWinRate": 50.943
    },
    "18465": {
        "expDef": 1.716,
        "expFrag": 1.003,
        "expSpot": 0.106,
        "expDamage": 277.067,
        "expWinRate": 55.473
    },
    "18497": {
        "expDef": 0.691,
        "expFrag": 0.666,
        "expSpot": 2.762,
        "expDamage": 836.014,
        "expWinRate": 51.757
    },
    "18689": {
        "expDef": 0.953,
        "expFrag": 1.172,
        "expSpot": 1.276,
        "expDamage": 630.158,
        "expWinRate": 56.551
    },
    "18705": {
        "expDef": 0.514,
        "expFrag": 0.885,
        "expSpot": 0.723,
        "expDamage": 1641.807,
        "expWinRate": 52.546
    },
    "18721": {
        "expDef": 1.275,
        "expFrag": 0.994,
        "expSpot": 0.109,
        "expDamage": 399.94,
        "expWinRate": 54.628
    },
    "18753": {
        "expDef": 0.849,
        "expFrag": 0.745,
        "expSpot": 3.632,
        "expDamage": 988.948,
        "expWinRate": 53.278
    },
    "18961": {
        "expDef": 0.708,
        "expFrag": 0.686,
        "expSpot": 2.022,
        "expDamage": 768.252,
        "expWinRate": 51.616
    },
    "19009": {
        "expDef": 0.737,
        "expFrag": 0.787,
        "expSpot": 3.888,
        "expDamage": 1307.579,
        "expWinRate": 51.077
    },
    "19201": {
        "expDef": 0.685,
        "expFrag": 0.78,
        "expSpot": 3.146,
        "expDamage": 1248.424,
        "expWinRate": 50.299
    },
    "19217": {
        "expDef": 0.562,
        "expFrag": 1.061,
        "expSpot": 0.585,
        "expDamage": 2043.342,
        "expWinRate": 49.249
    },
    "19457": {
        "expDef": 0.774,
        "expFrag": 0.844,
        "expSpot": 2.29,
        "expDamage": 729.544,
        "expWinRate": 52.507
    },
    "19473": {
        "expDef": 0.421,
        "expFrag": 0.881,
        "expSpot": 1.002,
        "expDamage": 1963.76,
        "expWinRate": 50.925
    },
    "19489": {
        "expDef": 0.531,
        "expFrag": 0.731,
        "expSpot": 2.615,
        "expDamage": 1338.793,
        "expWinRate": 48.64
    },
    "19713": {
        "expDef": 0.53,
        "expFrag": 0.877,
        "expSpot": 1.105,
        "expDamage": 1601.305,
        "expWinRate": 52.509
    },
    "19729": {
        "expDef": 0.558,
        "expFrag": 0.847,
        "expSpot": 0.778,
        "expDamage": 1295.553,
        "expWinRate": 53.713
    },
    "19745": {
        "expDef": 0.741,
        "expFrag": 0.775,
        "expSpot": 2.81,
        "expDamage": 682.623,
        "expWinRate": 52.389
    },
    "19969": {
        "expDef": 0.535,
        "expFrag": 0.989,
        "expSpot": 1.351,
        "expDamage": 1965.263,
        "expWinRate": 50.52
    },
    "19985": {
        "expDef": 0.637,
        "expFrag": 0.704,
        "expSpot": 2.949,
        "expDamage": 1261.338,
        "expWinRate": 48.177
    },
    "20225": {
        "expDef": 0.416,
        "expFrag": 0.994,
        "expSpot": 1.19,
        "expDamage": 2086.137,
        "expWinRate": 52.677
    },
    "20241": {
        "expDef": 0.681,
        "expFrag": 0.679,
        "expSpot": 2.746,
        "expDamage": 838.747,
        "expWinRate": 52.044
    },
    "20257": {
        "expDef": 0.787,
        "expFrag": 1.261,
        "expSpot": 1.188,
        "expDamage": 681.258,
        "expWinRate": 57.208
    },
    "20481": {
        "expDef": 0.504,
        "expFrag": 0.803,
        "expSpot": 0.851,
        "expDamage": 1255.167,
        "expWinRate": 52.217
    },
    "20737": {
        "expDef": 0.445,
        "expFrag": 0.869,
        "expSpot": 0.963,
        "expDamage": 1638.816,
        "expWinRate": 52.377
    },
    "20993": {
        "expDef": 0.351,
        "expFrag": 0.886,
        "expSpot": 1.046,
        "expDamage": 1981.173,
        "expWinRate": 50.437
    },
    "21249": {
        "expDef": 0.576,
        "expFrag": 0.97,
        "expSpot": 0.853,
        "expDamage": 1693.38,
        "expWinRate": 52.159
    },
    "21505": {
        "expDef": 0.612,
        "expFrag": 1.018,
        "expSpot": 1.312,
        "expDamage": 1694.485,
        "expWinRate": 52.455
    },
    "21761": {
        "expDef": 0.678,
        "expFrag": 1.007,
        "expSpot": 1.161,
        "expDamage": 1835.82,
        "expWinRate": 49.452
    },
    "22017": {
        "expDef": 0.424,
        "expFrag": 0.878,
        "expSpot": 1.428,
        "expDamage": 1956.502,
        "expWinRate": 50.063
    },
    "22273": {
        "expDef": 0.48,
        "expFrag": 0.95,
        "expSpot": 0.903,
        "expDamage": 1974.326,
        "expWinRate": 51.37
    },
    "22529": {
        "expDef": 0.482,
        "expFrag": 0.924,
        "expSpot": 1.078,
        "expDamage": 1669.541,
        "expWinRate": 52.495
    },
    "22785": {
        "expDef": 0.534,
        "expFrag": 0.855,
        "expSpot": 0.832,
        "expDamage": 1313.283,
        "expWinRate": 52.503
    },
    "23041": {
        "expDef": 1.529,
        "expFrag": 1.032,
        "expSpot": 1.773,
        "expDamage": 441.989,
        "expWinRate": 56.241
    },
    "31233": {
        "expDef": 0.518,
        "expFrag": 1.025,
        "expSpot": 0.896,
        "expDamage": 1179.683,
        "expWinRate": 54.229
    },
    "31745": {
        "expDef": 0.47,
        "expFrag": 1.041,
        "expSpot": 0.371,
        "expDamage": 1442.713,
        "expWinRate": 51.526
    },
    "32001": {
        "expDef": 0.281,
        "expFrag": 0.819,
        "expSpot": 1.294,
        "expDamage": 1859.542,
        "expWinRate": 52.734
    },
    "43329": {
        "expDef": 1.99,
        "expFrag": 1.232,
        "expSpot": 1.836,
        "expDamage": 250.653,
        "expWinRate": 56.483
    },
    "43585": {
        "expDef": 0.8,
        "expFrag": 0.736,
        "expSpot": 3.267,
        "expDamage": 895.157,
        "expWinRate": 52.517
    },
    "43841": {
        "expDef": 1.655,
        "expFrag": 1.079,
        "expSpot": 0.875,
        "expDamage": 259.695,
        "expWinRate": 55.778
    },
    "44289": {
        "expDef": 0.465,
        "expFrag": 0.946,
        "expSpot": 1.056,
        "expDamage": 1425.246,
        "expWinRate": 52.688
    },
    "44545": {
        "expDef": 0.424,
        "expFrag": 0.888,
        "expSpot": 1.258,
        "expDamage": 1671.42,
        "expWinRate": 53.435
    },
    "44801": {
        "expDef": 1.092,
        "expFrag": 0.981,
        "expSpot": 1.717,
        "expDamage": 292.178,
        "expWinRate": 55.997
    },
    "45057": {
        "expDef": 0.636,
        "expFrag": 1.074,
        "expSpot": 0.472,
        "expDamage": 1508.353,
        "expWinRate": 51.05
    },
    "45313": {
        "expDef": 0.715,
        "expFrag": 0.77,
        "expSpot": 2.975,
        "expDamage": 530.423,
        "expWinRate": 54.319
    },
    "45569": {
        "expDef": 0.664,
        "expFrag": 0.711,
        "expSpot": 2.975,
        "expDamage": 865.723,
        "expWinRate": 52.358
    },
    "46081": {
        "expDef": 0.906,
        "expFrag": 0.956,
        "expSpot": 1.474,
        "expDamage": 1352.413,
        "expWinRate": 53.541
    },
    "46337": {
        "expDef": 0.671,
        "expFrag": 0.93,
        "expSpot": 1.547,
        "expDamage": 1277.109,
        "expWinRate": 52.878
    },
    "46593": {
        "expDef": 0.531,
        "expFrag": 1.087,
        "expSpot": 1.103,
        "expDamage": 1168.512,
        "expWinRate": 55.656
    },
    "46609": {
        "expDef": 0.624,
        "expFrag": 0.813,
        "expSpot": 0.971,
        "expDamage": 1170.651,
        "expWinRate": 52.967
    },
    "46849": {
        "expDef": 0.434,
        "expFrag": 1.115,
        "expSpot": 1.233,
        "expDamage": 2439.246,
        "expWinRate": 56.386
    },
    "46865": {
        "expDef": 0.469,
        "expFrag": 0.823,
        "expSpot": 1.344,
        "expDamage": 1390.169,
        "expWinRate": 52.287
    },
    "47105": {
        "expDef": 0.811,
        "expFrag": 0.968,
        "expSpot": 1.346,
        "expDamage": 533.568,
        "expWinRate": 54.719
    },
    "47121": {
        "expDef": 0.764,
        "expFrag": 1.138,
        "expSpot": 1.455,
        "expDamage": 1917.257,
        "expWinRate": 53.923
    },
    "47361": {
        "expDef": 0.609,
        "expFrag": 0.871,
        "expSpot": 0.991,
        "expDamage": 1289.551,
        "expWinRate": 51.447
    },
    "47377": {
        "expDef": 0.547,
        "expFrag": 0.661,
        "expSpot": 2.66,
        "expDamage": 896.987,
        "expWinRate": 51.257
    },
    "47617": {
        "expDef": 0.615,
        "expFrag": 0.855,
        "expSpot": 1.01,
        "expDamage": 1254.339,
        "expWinRate": 51.291
    },
    "47633": {
        "expDef": 1.526,
        "expFrag": 1.43,
        "expSpot": 1.295,
        "expDamage": 286.557,
        "expWinRate": 56.784
    },
    "47873": {
        "expDef": 0.891,
        "expFrag": 1.182,
        "expSpot": 1.16,
        "expDamage": 317.755,
        "expWinRate": 55.529
    },
    "48129": {
        "expDef": 0.863,
        "expFrag": 0.947,
        "expSpot": 1.166,
        "expDamage": 716.924,
        "expWinRate": 53.463
    },
    "48145": {
        "expDef": 0.536,
        "expFrag": 0.817,
        "expSpot": 0.767,
        "expDamage": 1266.599,
        "expWinRate": 53.022
    },
    "48385": {
        "expDef": 0.54,
        "expFrag": 0.943,
        "expSpot": 0.645,
        "expDamage": 1402.367,
        "expWinRate": 52.004
    },
    "48401": {
        "expDef": 0.781,
        "expFrag": 0.967,
        "expSpot": 0.697,
        "expDamage": 1381.968,
        "expWinRate": 51.382
    },
    "48641": {
        "expDef": 0.472,
        "expFrag": 0.892,
        "expSpot": 1.013,
        "expDamage": 1404.444,
        "expWinRate": 53.224
    },
    "48897": {
        "expDef": 0.683,
        "expFrag": 0.921,
        "expSpot": 1.558,
        "expDamage": 1258.523,
        "expWinRate": 52.505
    },
    "48913": {
        "expDef": 0.523,
        "expFrag": 0.811,
        "expSpot": 0.759,
        "expDamage": 1267.655,
        "expWinRate": 52.045
    },
    "49169": {
        "expDef": 0.637,
        "expFrag": 0.94,
        "expSpot": 1.013,
        "expDamage": 809.806,
        "expWinRate": 54.264
    },
    "49409": {
        "expDef": 0.549,
        "expFrag": 0.996,
        "expSpot": 1.092,
        "expDamage": 1390.767,
        "expWinRate": 52.907
    },
    "49665": {
        "expDef": 0.48,
        "expFrag": 0.897,
        "expSpot": 1.002,
        "expDamage": 1401.517,
        "expWinRate": 53.498
    },
    "49921": {
        "expDef": 0.533,
        "expFrag": 0.95,
        "expSpot": 1.14,
        "expDamage": 1062.011,
        "expWinRate": 53.509
    },
    "49937": {
        "expDef": 0.739,
        "expFrag": 0.805,
        "expSpot": 1.205,
        "expDamage": 1151.807,
        "expWinRate": 51.572
    },
    "50193": {
        "expDef": 0.625,
        "expFrag": 0.992,
        "expSpot": 0.548,
        "expDamage": 1420.54,
        "expWinRate": 51.07
    },
    "50945": {
        "expDef": 1.283,
        "expFrag": 1.25,
        "expSpot": 1.184,
        "expDamage": 229.006,
        "expWinRate": 56.991
    },
    "50961": {
        "expDef": 0.602,
        "expFrag": 0.641,
        "expSpot": 2.512,
        "expDamage": 840.221,
        "expWinRate": 51.024
    },
    "51201": {
        "expDef": 1.286,
        "expFrag": 1.255,
        "expSpot": 1.305,
        "expDamage": 607.49,
        "expWinRate": 57.809
    },
    "51345": {
        "expDef": 0.899,
        "expFrag": 0.997,
        "expSpot": 1.45,
        "expDamage": 772.219,
        "expWinRate": 54.284
    },
    "51361": {
        "expDef": 0.697,
        "expFrag": 1.011,
        "expSpot": 1.291,
        "expDamage": 1360.816,
        "expWinRate": 51.515
    },
    "51457": {
        "expDef": 1.329,
        "expFrag": 1.159,
        "expSpot": 1.101,
        "expDamage": 525.809,
        "expWinRate": 55.485
    },
    "51473": {
        "expDef": 0.936,
        "expFrag": 1.236,
        "expSpot": 1.928,
        "expDamage": 676.521,
        "expWinRate": 56.037
    },
    "51489": {
        "expDef": 1.256,
        "expFrag": 1.299,
        "expSpot": 2.403,
        "expDamage": 229.175,
        "expWinRate": 56.497
    },
    "51553": {
        "expDef": 1.112,
        "expFrag": 0.937,
        "expSpot": 1.064,
        "expDamage": 513.567,
        "expWinRate": 52.971
    },
    "51569": {
        "expDef": 0.817,
        "expFrag": 0.941,
        "expSpot": 1.335,
        "expDamage": 737.623,
        "expWinRate": 52.872
    },
    "51585": {
        "expDef": 0.87,
        "expFrag": 1.039,
        "expSpot": 0.981,
        "expDamage": 783.463,
        "expWinRate": 53.196
    },
    "51713": {
        "expDef": 1.328,
        "expFrag": 1.17,
        "expSpot": 1.168,
        "expDamage": 597.277,
        "expWinRate": 54.986
    },
    "51729": {
        "expDef": 2.301,
        "expFrag": 1.642,
        "expSpot": 1.419,
        "expDamage": 341.417,
        "expWinRate": 62.802
    },
    "51745": {
        "expDef": 1.129,
        "expFrag": 1.045,
        "expSpot": 1.389,
        "expDamage": 511.086,
        "expWinRate": 55.919
    },
    "51825": {
        "expDef": 0.645,
        "expFrag": 0.911,
        "expSpot": 1.109,
        "expDamage": 1245.234,
        "expWinRate": 50.984
    },
    "51841": {
        "expDef": 1.168,
        "expFrag": 1.146,
        "expSpot": 1.441,
        "expDamage": 212.109,
        "expWinRate": 57.091
    },
    "51985": {
        "expDef": 1.59,
        "expFrag": 1.468,
        "expSpot": 1.361,
        "expDamage": 367.941,
        "expWinRate": 58.795
    },
    "52001": {
        "expDef": 1.26,
        "expFrag": 1.087,
        "expSpot": 1.612,
        "expDamage": 309.25,
        "expWinRate": 55.334
    },
    "52065": {
        "expDef": 0.817,
        "expFrag": 0.813,
        "expSpot": 1.212,
        "expDamage": 1142.585,
        "expWinRate": 51.265
    },
    "52097": {
        "expDef": 0.791,
        "expFrag": 0.97,
        "expSpot": 0.482,
        "expDamage": 1458.454,
        "expWinRate": 51.134
    },
    "52225": {
        "expDef": 1.344,
        "expFrag": 1.294,
        "expSpot": 2.158,
        "expDamage": 322.086,
        "expWinRate": 56.422
    },
    "52241": {
        "expDef": 1.619,
        "expFrag": 1.554,
        "expSpot": 1.573,
        "expDamage": 479.407,
        "expWinRate": 56.827
    },
    "52257": {
        "expDef": 1.049,
        "expFrag": 1.015,
        "expSpot": 1.608,
        "expDamage": 473.372,
        "expWinRate": 54.803
    },
    "52321": {
        "expDef": 0.788,
        "expFrag": 0.967,
        "expSpot": 1.027,
        "expDamage": 803.348,
        "expWinRate": 54.401
    },
    "52353": {
        "expDef": 0.747,
        "expFrag": 0.775,
        "expSpot": 1.235,
        "expDamage": 1156.255,
        "expWinRate": 52.376
    },
    "52481": {
        "expDef": 1.68,
        "expFrag": 1.264,
        "expSpot": 1.468,
        "expDamage": 374.627,
        "expWinRate": 54.402
    },
    "52497": {
        "expDef": 2.842,
        "expFrag": 1.877,
        "expSpot": 1.637,
        "expDamage": 312.48,
        "expWinRate": 55.754
    },
    "52513": {
        "expDef": 0.63,
        "expFrag": 0.814,
        "expSpot": 1.162,
        "expDamage": 1251.618,
        "expWinRate": 51.448
    },
    "52561": {
        "expDef": 0.808,
        "expFrag": 1.029,
        "expSpot": 0.587,
        "expDamage": 1725.695,
        "expWinRate": 52.149
    },
    "52577": {
        "expDef": 0.483,
        "expFrag": 0.755,
        "expSpot": 1.46,
        "expDamage": 1238.158,
        "expWinRate": 52.884
    },
    "52609": {
        "expDef": 0.661,
        "expFrag": 0.741,
        "expSpot": 1.284,
        "expDamage": 1107.65,
        "expWinRate": 52.107
    },
    "52737": {
        "expDef": 1.62,
        "expFrag": 1.043,
        "expSpot": 1.61,
        "expDamage": 258.371,
        "expWinRate": 54.518
    },
    "52769": {
        "expDef": 1.587,
        "expFrag": 1.112,
        "expSpot": 2.489,
        "expDamage": 281.623,
        "expWinRate": 57.26
    },
    "52817": {
        "expDef": 1.362,
        "expFrag": 0.924,
        "expSpot": 1.386,
        "expDamage": 364.571,
        "expWinRate": 56.607
    },
    "52833": {
        "expDef": 0.659,
        "expFrag": 0.764,
        "expSpot": 1.798,
        "expDamage": 1062.997,
        "expWinRate": 52.286
    },
    "52865": {
        "expDef": 0.521,
        "expFrag": 0.987,
        "expSpot": 1.035,
        "expDamage": 1448.81,
        "expWinRate": 52.509
    },
    "52993": {
        "expDef": 0.972,
        "expFrag": 1.105,
        "expSpot": 2.438,
        "expDamage": 368.15,
        "expWinRate": 55.563
    },
    "53121": {
        "expDef": 0.717,
        "expFrag": 0.957,
        "expSpot": 1.29,
        "expDamage": 1340.352,
        "expWinRate": 51.989
    },
    "53249": {
        "expDef": 0.916,
        "expFrag": 0.964,
        "expSpot": 1.082,
        "expDamage": 1244.268,
        "expWinRate": 51.403
    },
    "53505": {
        "expDef": 1.718,
        "expFrag": 1.456,
        "expSpot": 1.596,
        "expDamage": 333.382,
        "expWinRate": 55.689
    },
    "53537": {
        "expDef": 1.236,
        "expFrag": 1.175,
        "expSpot": 1.529,
        "expDamage": 213.494,
        "expWinRate": 57.881
    },
    "53585": {
        "expDef": 1.425,
        "expFrag": 1.082,
        "expSpot": 0.785,
        "expDamage": 527.626,
        "expWinRate": 54.486
    },
    "53761": {
        "expDef": 1.371,
        "expFrag": 1.232,
        "expSpot": 0.817,
        "expDamage": 590.272,
        "expWinRate": 53.193
    },
    "53793": {
        "expDef": 0.901,
        "expFrag": 0.841,
        "expSpot": 1.309,
        "expDamage": 1121.672,
        "expWinRate": 51.802
    },
    "53841": {
        "expDef": 1.26,
        "expFrag": 1.059,
        "expSpot": 0.576,
        "expDamage": 821.725,
        "expWinRate": 52.76
    },
    "54017": {
        "expDef": 1.107,
        "expFrag": 1.28,
        "expSpot": 1.414,
        "expDamage": 656.518,
        "expWinRate": 58.001
    },
    "54033": {
        "expDef": 0.795,
        "expFrag": 1.255,
        "expSpot": 1.869,
        "expDamage": 658.698,
        "expWinRate": 56.069
    },
    "54097": {
        "expDef": 1.18,
        "expFrag": 1.01,
        "expSpot": 0.767,
        "expDamage": 988.159,
        "expWinRate": 54.025
    },
    "54273": {
        "expDef": 1.504,
        "expFrag": 1.859,
        "expSpot": 0.928,
        "expDamage": 427.451,
        "expWinRate": 58.476
    },
    "54289": {
        "expDef": 0.807,
        "expFrag": 0.793,
        "expSpot": 0.891,
        "expDamage": 1266.772,
        "expWinRate": 51.849
    },
    "54353": {
        "expDef": 1.158,
        "expFrag": 1.239,
        "expSpot": 1.577,
        "expDamage": 611.222,
        "expWinRate": 56.737
    },
    "54529": {
        "expDef": 1.52,
        "expFrag": 1.377,
        "expSpot": 1.41,
        "expDamage": 245.707,
        "expWinRate": 56.312
    },
    "54545": {
        "expDef": 1.131,
        "expFrag": 0.999,
        "expSpot": 1.532,
        "expDamage": 520.686,
        "expWinRate": 54.733
    },
    "54609": {
        "expDef": 1.402,
        "expFrag": 1.294,
        "expSpot": 0.124,
        "expDamage": 335.246,
        "expWinRate": 56.747
    },
    "54785": {
        "expDef": 0.749,
        "expFrag": 1.088,
        "expSpot": 0.55,
        "expDamage": 819.604,
        "expWinRate": 53.343
    },
    "54801": {
        "expDef": 1.608,
        "expFrag": 1.108,
        "expSpot": 2.732,
        "expDamage": 272.141,
        "expWinRate": 58.605
    },
    "54865": {
        "expDef": 1.295,
        "expFrag": 1.358,
        "expSpot": 1.603,
        "expDamage": 210.316,
        "expWinRate": 55.868
    },
    "55057": {
        "expDef": 1.14,
        "expFrag": 1.067,
        "expSpot": 1.251,
        "expDamage": 559.606,
        "expWinRate": 53.329
    },
    "55073": {
        "expDef": 1.307,
        "expFrag": 1.34,
        "expSpot": 1.676,
        "expDamage": 211.649,
        "expWinRate": 56.636
    },
    "55121": {
        "expDef": 1.055,
        "expFrag": 0.906,
        "expSpot": 1.077,
        "expDamage": 997.492,
        "expWinRate": 53.701
    },
    "55297": {
        "expDef": 0.893,
        "expFrag": 1.14,
        "expSpot": 0.762,
        "expDamage": 1062.634,
        "expWinRate": 52.831
    },
    "55313": {
        "expDef": 1.053,
        "expFrag": 0.921,
        "expSpot": 0.769,
        "expDamage": 1252.63,
        "expWinRate": 51.132
    },
    "55377": {
        "expDef": 0.566,
        "expFrag": 0.662,
        "expSpot": 2.474,
        "expDamage": 500.728,
        "expWinRate": 52.39
    },
    "55569": {
        "expDef": 1.509,
        "expFrag": 1.235,
        "expSpot": 1.434,
        "expDamage": 1008.692,
        "expWinRate": 51.883
    },
    "55633": {
        "expDef": 0.764,
        "expFrag": 0.777,
        "expSpot": 1.267,
        "expDamage": 1142.073,
        "expWinRate": 51.639
    },
    "55841": {
        "expDef": 0.642,
        "expFrag": 0.988,
        "expSpot": 1.259,
        "expDamage": 1919.306,
        "expWinRate": 49.691
    },
    "55889": {
        "expDef": 0.96,
        "expFrag": 1.057,
        "expSpot": 2.188,
        "expDamage": 748.331,
        "expWinRate": 55.453
    },
    "56081": {
        "expDef": 0.393,
        "expFrag": 0.828,
        "expSpot": 0.932,
        "expDamage": 1348.843,
        "expWinRate": 52.685
    },
    "56097": {
        "expDef": 1.032,
        "expFrag": 0.949,
        "expSpot": 1.279,
        "expDamage": 693.735,
        "expWinRate": 54.269
    },
    "56145": {
        "expDef": 0.992,
        "expFrag": 0.956,
        "expSpot": 0.964,
        "expDamage": 768.573,
        "expWinRate": 53.463
    },
    "56353": {
        "expDef": 1.162,
        "expFrag": 0.98,
        "expSpot": 0.738,
        "expDamage": 1034.626,
        "expWinRate": 52.326
    },
    "56577": {
        "expDef": 1.569,
        "expFrag": 1.192,
        "expSpot": 1.319,
        "expDamage": 274.312,
        "expWinRate": 55.763
    },
    "56609": {
        "expDef": 0.802,
        "expFrag": 0.94,
        "expSpot": 0.789,
        "expDamage": 1008.651,
        "expWinRate": 53.751
    },
    "56657": {
        "expDef": 0.571,
        "expFrag": 0.784,
        "expSpot": 1.178,
        "expDamage": 1246.17,
        "expWinRate": 51.934
    },
    "56833": {
        "expDef": 0.873,
        "expFrag": 1.19,
        "expSpot": 1.517,
        "expDamage": 1126.82,
        "expWinRate": 55.148
    },
    "56865": {
        "expDef": 0.89,
        "expFrag": 0.961,
        "expSpot": 1.216,
        "expDamage": 1869.967,
        "expWinRate": 52.271
    },
    "56913": {
        "expDef": 0.66,
        "expFrag": 0.784,
        "expSpot": 1.353,
        "expDamage": 1172.082,
        "expWinRate": 52.534
    },
    "57105": {
        "expDef": 0.981,
        "expFrag": 1.028,
        "expSpot": 0.713,
        "expDamage": 795.145,
        "expWinRate": 52.29
    },
    "57121": {
        "expDef": 0.891,
        "expFrag": 0.806,
        "expSpot": 1.249,
        "expDamage": 1127.986,
        "expWinRate": 51.842
    },
    "57169": {
        "expDef": 0.822,
        "expFrag": 1.04,
        "expSpot": 1.007,
        "expDamage": 843.471,
        "expWinRate": 53.667
    },
    "57361": {
        "expDef": 1.188,
        "expFrag": 0.933,
        "expSpot": 1.029,
        "expDamage": 721.269,
        "expWinRate": 52.939
    },
    "57377": {
        "expDef": 0.758,
        "expFrag": 0.778,
        "expSpot": 1.313,
        "expDamage": 1117.736,
        "expWinRate": 50.894
    },
    "57425": {
        "expDef": 0.65,
        "expFrag": 1.067,
        "expSpot": 1.046,
        "expDamage": 1578.206,
        "expWinRate": 54.416
    },
    "57617": {
        "expDef": 1.051,
        "expFrag": 0.994,
        "expSpot": 1.326,
        "expDamage": 917.805,
        "expWinRate": 53.418
    },
    "57633": {
        "expDef": 0.739,
        "expFrag": 0.672,
        "expSpot": 2.747,
        "expDamage": 686.671,
        "expWinRate": 51.986
    },
    "57681": {
        "expDef": 1.005,
        "expFrag": 1.152,
        "expSpot": 0.801,
        "expDamage": 897.158,
        "expWinRate": 54.305
    },
    "57889": {
        "expDef": 0.739,
        "expFrag": 0.663,
        "expSpot": 2.97,
        "expDamage": 779.422,
        "expWinRate": 51.957
    },
    "57937": {
        "expDef": 0.506,
        "expFrag": 1.05,
        "expSpot": 1.366,
        "expDamage": 2282.865,
        "expWinRate": 52.844
    },
    "58113": {
        "expDef": 0.788,
        "expFrag": 1.095,
        "expSpot": 1.315,
        "expDamage": 842.943,
        "expWinRate": 54.736
    },
    "58369": {
        "expDef": 0.498,
        "expFrag": 0.868,
        "expSpot": 1.483,
        "expDamage": 1946.369,
        "expWinRate": 49.985
    },
    "58449": {
        "expDef": 0.654,
        "expFrag": 0.662,
        "expSpot": 2.734,
        "expDamage": 826.315,
        "expWinRate": 52.185
    },
    "58625": {
        "expDef": 0.641,
        "expFrag": 0.94,
        "expSpot": 0.431,
        "expDamage": 1292.391,
        "expWinRate": 50.796
    },
    "58641": {
        "expDef": 0.41,
        "expFrag": 0.932,
        "expSpot": 1.01,
        "expDamage": 1993.104,
        "expWinRate": 51.49
    },
    "58657": {
        "expDef": 0.487,
        "expFrag": 0.783,
        "expSpot": 1.233,
        "expDamage": 1290.244,
        "expWinRate": 52.648
    },
    "58705": {
        "expDef": 0.746,
        "expFrag": 0.665,
        "expSpot": 2.771,
        "expDamage": 992.309,
        "expWinRate": 52.661
    },
    "58881": {
        "expDef": 0.661,
        "expFrag": 0.864,
        "expSpot": 1.049,
        "expDamage": 1285.445,
        "expWinRate": 53.237
    },
    "58913": {
        "expDef": 0.692,
        "expFrag": 0.799,
        "expSpot": 1.235,
        "expDamage": 1220.264,
        "expWinRate": 52.773
    },
    "58961": {
        "expDef": 0.616,
        "expFrag": 0.722,
        "expSpot": 2.643,
        "expDamage": 1296.378,
        "expWinRate": 51.353
    },
    "59137": {
        "expDef": 0.726,
        "expFrag": 1.05,
        "expSpot": 1.082,
        "expDamage": 1121.69,
        "expWinRate": 54.475
    },
    "59169": {
        "expDef": 0.673,
        "expFrag": 0.803,
        "expSpot": 1.243,
        "expDamage": 1240.744,
        "expWinRate": 52.646
    },
    "59217": {
        "expDef": 0.552,
        "expFrag": 0.972,
        "expSpot": 0.857,
        "expDamage": 810.765,
        "expWinRate": 54.997
    },
    "59393": {
        "expDef": 0.923,
        "expFrag": 1.013,
        "expSpot": 1.456,
        "expDamage": 783.676,
        "expWinRate": 54.635
    },
    "59425": {
        "expDef": 0.526,
        "expFrag": 0.745,
        "expSpot": 0.84,
        "expDamage": 1257.688,
        "expWinRate": 51.617
    },
    "59473": {
        "expDef": 0.747,
        "expFrag": 0.645,
        "expSpot": 2.466,
        "expDamage": 833.779,
        "expWinRate": 52.459
    },
    "59649": {
        "expDef": 0.824,
        "expFrag": 1.109,
        "expSpot": 0.593,
        "expDamage": 1047.771,
        "expWinRate": 52.889
    },
    "59665": {
        "expDef": 1.135,
        "expFrag": 1.245,
        "expSpot": 1.332,
        "expDamage": 321.121,
        "expWinRate": 56.185
    },
    "59681": {
        "expDef": 0.834,
        "expFrag": 0.964,
        "expSpot": 1.19,
        "expDamage": 741.979,
        "expWinRate": 54.823
    },
    "59729": {
        "expDef": 0.83,
        "expFrag": 0.658,
        "expSpot": 2.3,
        "expDamage": 640.187,
        "expWinRate": 52.876
    },
    "59905": {
        "expDef": 0.758,
        "expFrag": 0.845,
        "expSpot": 1.257,
        "expDamage": 1144.142,
        "expWinRate": 52.189
    },
    "59937": {
        "expDef": 0.74,
        "expFrag": 0.993,
        "expSpot": 1.18,
        "expDamage": 1033.415,
        "expWinRate": 55.51
    },
    "59985": {
        "expDef": 0.645,
        "expFrag": 0.982,
        "expSpot": 0.598,
        "expDamage": 1369.127,
        "expWinRate": 53.585
    },
    "60161": {
        "expDef": 0.887,
        "expFrag": 1.123,
        "expSpot": 1.066,
        "expDamage": 907.359,
        "expWinRate": 56.63
    },
    "60177": {
        "expDef": 0.912,
        "expFrag": 0.804,
        "expSpot": 1.087,
        "expDamage": 1102.038,
        "expWinRate": 50.802
    },
    "60193": {
        "expDef": 0.471,
        "expFrag": 0.81,
        "expSpot": 1.27,
        "expDamage": 1321.725,
        "expWinRate": 53.042
    },
    "60225": {
        "expDef": 0.793,
        "expFrag": 1.08,
        "expSpot": 1.815,
        "expDamage": 1421.536,
        "expWinRate": 52.692
    },
    "60241": {
        "expDef": 0.597,
        "expFrag": 1.06,
        "expSpot": 0.838,
        "expDamage": 671.019,
        "expWinRate": 56.778
    },
    "60417": {
        "expDef": 0.491,
        "expFrag": 1,
        "expSpot": 0.928,
        "expDamage": 1421.485,
        "expWinRate": 53.469
    },
    "60433": {
        "expDef": 1.551,
        "expFrag": 1.218,
        "expSpot": 1.826,
        "expDamage": 224.77,
        "expWinRate": 58.16
    },
    "60449": {
        "expDef": 0.561,
        "expFrag": 1.037,
        "expSpot": 0.748,
        "expDamage": 1485.958,
        "expWinRate": 53.714
    },
    "60481": {
        "expDef": 0.788,
        "expFrag": 1.198,
        "expSpot": 1.292,
        "expDamage": 1873.649,
        "expWinRate": 52.184
    },
    "60689": {
        "expDef": 1.49,
        "expFrag": 1.1,
        "expSpot": 0.628,
        "expDamage": 534.93,
        "expWinRate": 53.422
    },
    "60737": {
        "expDef": 0.821,
        "expFrag": 1.043,
        "expSpot": 1.342,
        "expDamage": 822.002,
        "expWinRate": 55.256
    },
    "60929": {
        "expDef": 0.94,
        "expFrag": 1.049,
        "expSpot": 1.771,
        "expDamage": 265.801,
        "expWinRate": 55.528
    },
    "60945": {
        "expDef": 0.731,
        "expFrag": 0.954,
        "expSpot": 1.388,
        "expDamage": 1558.91,
        "expWinRate": 51.508
    },
    "60993": {
        "expDef": 0.655,
        "expFrag": 1.12,
        "expSpot": 1.182,
        "expDamage": 843.037,
        "expWinRate": 54.69
    },
    "61185": {
        "expDef": 0.727,
        "expFrag": 0.884,
        "expSpot": 1.217,
        "expDamage": 1818.295,
        "expWinRate": 50.181
    },
    "61217": {
        "expDef": 0.91,
        "expFrag": 1.165,
        "expSpot": 0.998,
        "expDamage": 906.221,
        "expWinRate": 55.254
    },
    "61249": {
        "expDef": 1.009,
        "expFrag": 1.179,
        "expSpot": 0.861,
        "expDamage": 650.434,
        "expWinRate": 54.109
    },
    "61441": {
        "expDef": 1.02,
        "expFrag": 1.23,
        "expSpot": 1.088,
        "expDamage": 488.048,
        "expWinRate": 56.507
    },
    "61457": {
        "expDef": 0.979,
        "expFrag": 0.949,
        "expSpot": 1.274,
        "expDamage": 509.64,
        "expWinRate": 54.786
    },
    "61473": {
        "expDef": 0.622,
        "expFrag": 0.914,
        "expSpot": 1.095,
        "expDamage": 1094.187,
        "expWinRate": 54.525
    },
    "61505": {
        "expDef": 0.848,
        "expFrag": 0.732,
        "expSpot": 3.022,
        "expDamage": 812.075,
        "expWinRate": 52.885
    },
    "61697": {
        "expDef": 0.784,
        "expFrag": 1.02,
        "expSpot": 1.602,
        "expDamage": 1871.915,
        "expWinRate": 53.037
    },
    "61713": {
        "expDef": 1.038,
        "expFrag": 1,
        "expSpot": 0.563,
        "expDamage": 1039.047,
        "expWinRate": 52.423
    },
    "61729": {
        "expDef": 0.474,
        "expFrag": 0.868,
        "expSpot": 1.109,
        "expDamage": 1719.442,
        "expWinRate": 52.189
    },
    "61761": {
        "expDef": 0.748,
        "expFrag": 0.97,
        "expSpot": 0.665,
        "expDamage": 1397.643,
        "expWinRate": 51.454
    },
    "61953": {
        "expDef": 0.758,
        "expFrag": 0.888,
        "expSpot": 1.45,
        "expDamage": 1182.801,
        "expWinRate": 52.08
    },
    "61969": {
        "expDef": 1.292,
        "expFrag": 0.932,
        "expSpot": 0.829,
        "expDamage": 1170.845,
        "expWinRate": 50.314
    },
    "61985": {
        "expDef": 0.562,
        "expFrag": 0.961,
        "expSpot": 1.167,
        "expDamage": 1512.031,
        "expWinRate": 53.274
    },
    "62001": {
        "expDef": 0.664,
        "expFrag": 0.679,
        "expSpot": 2.586,
        "expDamage": 842.273,
        "expWinRate": 51.466
    },
    "62017": {
        "expDef": 0.577,
        "expFrag": 0.776,
        "expSpot": 1.003,
        "expDamage": 1276.397,
        "expWinRate": 52.48
    },
    "62209": {
        "expDef": 0.794,
        "expFrag": 0.836,
        "expSpot": 0.713,
        "expDamage": 1226.123,
        "expWinRate": 55.337
    },
    "62241": {
        "expDef": 0.645,
        "expFrag": 0.873,
        "expSpot": 1.296,
        "expDamage": 1263.945,
        "expWinRate": 52.106
    },
    "62273": {
        "expDef": 0.592,
        "expFrag": 1.057,
        "expSpot": 0.727,
        "expDamage": 1473.878,
        "expWinRate": 52.579
    },
    "62481": {
        "expDef": 0.594,
        "expFrag": 1.02,
        "expSpot": 0.518,
        "expDamage": 1453.848,
        "expWinRate": 51.611
    },
    "62497": {
        "expDef": 0.867,
        "expFrag": 0.946,
        "expSpot": 1.04,
        "expDamage": 991.275,
        "expWinRate": 54.507
    },
    "62529": {
        "expDef": 0.687,
        "expFrag": 0.984,
        "expSpot": 1.055,
        "expDamage": 1338.094,
        "expWinRate": 51.441
    },
    "62737": {
        "expDef": 0.681,
        "expFrag": 0.857,
        "expSpot": 0.675,
        "expDamage": 1311.43,
        "expWinRate": 53.804
    },
    "62753": {
        "expDef": 0.321,
        "expFrag": 0.957,
        "expSpot": 1.387,
        "expDamage": 1793.653,
        "expWinRate": 55.256
    },
    "62785": {
        "expDef": 0.55,
        "expFrag": 0.77,
        "expSpot": 1.013,
        "expDamage": 1271.812,
        "expWinRate": 52.627
    },
    "62977": {
        "expDef": 0.719,
        "expFrag": 0.901,
        "expSpot": 1.529,
        "expDamage": 1226.283,
        "expWinRate": 52.233
    },
    "62993": {
        "expDef": 0.845,
        "expFrag": 0.941,
        "expSpot": 1.072,
        "expDamage": 1088.102,
        "expWinRate": 54.399
    },
    "63041": {
        "expDef": 0.647,
        "expFrag": 0.844,
        "expSpot": 0.835,
        "expDamage": 1237.882,
        "expWinRate": 50.99
    },
    "63233": {
        "expDef": 0.634,
        "expFrag": 0.779,
        "expSpot": 0.879,
        "expDamage": 1253.188,
        "expWinRate": 52.863
    },
    "63249": {
        "expDef": 1.058,
        "expFrag": 0.996,
        "expSpot": 1.081,
        "expDamage": 541.087,
        "expWinRate": 54.659
    },
    "63281": {
        "expDef": 0.682,
        "expFrag": 1.059,
        "expSpot": 0.792,
        "expDamage": 1417.444,
        "expWinRate": 52.464
    },
    "63297": {
        "expDef": 0.795,
        "expFrag": 0.789,
        "expSpot": 2.463,
        "expDamage": 726.311,
        "expWinRate": 52.217
    },
    "63505": {
        "expDef": 1.459,
        "expFrag": 0.827,
        "expSpot": 1.09,
        "expDamage": 254.163,
        "expWinRate": 56.358
    },
    "63537": {
        "expDef": 0.68,
        "expFrag": 0.951,
        "expSpot": 1.254,
        "expDamage": 1859.382,
        "expWinRate": 50.361
    },
    "63553": {
        "expDef": 0.966,
        "expFrag": 0.809,
        "expSpot": 1.408,
        "expDamage": 1102.87,
        "expWinRate": 50.706
    },
    "63761": {
        "expDef": 0.925,
        "expFrag": 0.857,
        "expSpot": 1.252,
        "expDamage": 1181.621,
        "expWinRate": 52.179
    },
    "63793": {
        "expDef": 0.893,
        "expFrag": 0.805,
        "expSpot": 1.282,
        "expDamage": 1063.212,
        "expWinRate": 51.965
    },
    "63809": {
        "expDef": 0.814,
        "expFrag": 0.907,
        "expSpot": 2.811,
        "expDamage": 800.13,
        "expWinRate": 53.372
    },
    "64017": {
        "expDef": 0.587,
        "expFrag": 0.648,
        "expSpot": 2.606,
        "expDamage": 833.436,
        "expWinRate": 51.062
    },
    "64049": {
        "expDef": 0.735,
        "expFrag": 0.889,
        "expSpot": 1.345,
        "expDamage": 1143.662,
        "expWinRate": 50.759
    },
    "64065": {
        "expDef": 1.037,
        "expFrag": 0.893,
        "expSpot": 1.337,
        "expDamage": 1199.828,
        "expWinRate": 50.899
    },
    "64273": {
        "expDef": 0.893,
        "expFrag": 0.806,
        "expSpot": 1.25,
        "expDamage": 1123.522,
        "expWinRate": 51.799
    },
    "64561": {
        "expDef": 0.614,
        "expFrag": 0.885,
        "expSpot": 1.328,
        "expDamage": 1264.008,
        "expWinRate": 52.927
    },
    "64769": {
        "expDef": 0.475,
        "expFrag": 1.132,
        "expSpot": 0.746,
        "expDamage": 882.996,
        "expWinRate": 54.895
    },
    "64817": {
        "expDef": 0.768,
        "expFrag": 0.792,
        "expSpot": 2.644,
        "expDamage": 582.528,
        "expWinRate": 52.494
    },
    "65073": {
        "expDef": 0.503,
        "expFrag": 0.867,
        "expSpot": 1.369,
        "expDamage": 1250.871,
        "expWinRate": 52.259
    }
}

export default WN8;