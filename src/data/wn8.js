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
        "expDamage": 487.577,
        "expWinRate": 54.943
    },
    "33": {
        "expDef": 1.192,
        "expFrag": 1.238,
        "expSpot": 1.543,
        "expDamage": 600.641,
        "expWinRate": 56.075
    },
    "49": {
        "expDef": 0.905,
        "expFrag": 0.886,
        "expSpot": 1.588,
        "expDamage": 1111.223,
        "expWinRate": 51.751
    },
    "81": {
        "expDef": 1.268,
        "expFrag": 1.683,
        "expSpot": 0.923,
        "expDamage": 219.477,
        "expWinRate": 57.686
    },
    "113": {
        "expDef": 1.111,
        "expFrag": 1.604,
        "expSpot": 0.846,
        "expDamage": 214.955,
        "expWinRate": 58.497
    },
    "129": {
        "expDef": 1.169,
        "expFrag": 1.509,
        "expSpot": 1.33,
        "expDamage": 205.675,
        "expWinRate": 58.844
    },
    "145": {
        "expDef": 0.781,
        "expFrag": 0.979,
        "expSpot": 1.329,
        "expDamage": 769.142,
        "expWinRate": 54.653
    },
    "161": {
        "expDef": 1.52,
        "expFrag": 1.691,
        "expSpot": 1.015,
        "expDamage": 218.861,
        "expWinRate": 58.274
    },
    "257": {
        "expDef": 1.26,
        "expFrag": 1.117,
        "expSpot": 0.535,
        "expDamage": 580.797,
        "expWinRate": 54.397
    },
    "273": {
        "expDef": 1.277,
        "expFrag": 1.01,
        "expSpot": 0.074,
        "expDamage": 922.311,
        "expWinRate": 51.38
    },
    "289": {
        "expDef": 1.511,
        "expFrag": 1.071,
        "expSpot": 2.177,
        "expDamage": 270.826,
        "expWinRate": 57.046
    },
    "305": {
        "expDef": 0.685,
        "expFrag": 0.684,
        "expSpot": 2.519,
        "expDamage": 670.768,
        "expWinRate": 51.869
    },
    "321": {
        "expDef": 1.632,
        "expFrag": 1.217,
        "expSpot": 0.817,
        "expDamage": 298.853,
        "expWinRate": 58.402
    },
    "337": {
        "expDef": 1.214,
        "expFrag": 1.408,
        "expSpot": 0.931,
        "expDamage": 246.187,
        "expWinRate": 56.787
    },
    "353": {
        "expDef": 1.474,
        "expFrag": 1.373,
        "expSpot": 1.195,
        "expDamage": 230.855,
        "expWinRate": 57.937
    },
    "369": {
        "expDef": 1.477,
        "expFrag": 1.218,
        "expSpot": 1.385,
        "expDamage": 229.182,
        "expWinRate": 56.731
    },
    "385": {
        "expDef": 1.266,
        "expFrag": 1.327,
        "expSpot": 1.328,
        "expDamage": 244.482,
        "expWinRate": 57.408
    },
    "401": {
        "expDef": 1.408,
        "expFrag": 1.029,
        "expSpot": 1.065,
        "expDamage": 213.165,
        "expWinRate": 56.958
    },
    "417": {
        "expDef": 1.674,
        "expFrag": 1.278,
        "expSpot": 1.401,
        "expDamage": 242.219,
        "expWinRate": 57.587
    },
    "513": {
        "expDef": 0.816,
        "expFrag": 0.976,
        "expSpot": 1.007,
        "expDamage": 1033.882,
        "expWinRate": 53.404
    },
    "529": {
        "expDef": 1.019,
        "expFrag": 0.937,
        "expSpot": 0.981,
        "expDamage": 1071.476,
        "expWinRate": 53.574
    },
    "545": {
        "expDef": 1.409,
        "expFrag": 1.551,
        "expSpot": 1.855,
        "expDamage": 199.562,
        "expWinRate": 58.066
    },
    "561": {
        "expDef": 0.695,
        "expFrag": 0.96,
        "expSpot": 1.447,
        "expDamage": 1282.99,
        "expWinRate": 51.961
    },
    "577": {
        "expDef": 1.9,
        "expFrag": 1.481,
        "expSpot": 1.221,
        "expDamage": 202.704,
        "expWinRate": 57.847
    },
    "593": {
        "expDef": 1.428,
        "expFrag": 1.366,
        "expSpot": 2.104,
        "expDamage": 243.588,
        "expWinRate": 58.219
    },
    "609": {
        "expDef": 1.727,
        "expFrag": 1.555,
        "expSpot": 1.11,
        "expDamage": 196.861,
        "expWinRate": 57.786
    },
    "625": {
        "expDef": 1.481,
        "expFrag": 0.957,
        "expSpot": 1.066,
        "expDamage": 283.823,
        "expWinRate": 56.564
    },
    "641": {
        "expDef": 1.524,
        "expFrag": 1.169,
        "expSpot": 1.362,
        "expDamage": 323.529,
        "expWinRate": 56.745
    },
    "673": {
        "expDef": 1.522,
        "expFrag": 1.492,
        "expSpot": 0.965,
        "expDamage": 275.978,
        "expWinRate": 58.998
    },
    "769": {
        "expDef": 1.285,
        "expFrag": 0.983,
        "expSpot": 1.945,
        "expDamage": 260.202,
        "expWinRate": 56.056
    },
    "785": {
        "expDef": 1.756,
        "expFrag": 1.355,
        "expSpot": 1.494,
        "expDamage": 233.867,
        "expWinRate": 57.248
    },
    "801": {
        "expDef": 0.891,
        "expFrag": 0.965,
        "expSpot": 1.018,
        "expDamage": 798.251,
        "expWinRate": 53.714
    },
    "817": {
        "expDef": 0.692,
        "expFrag": 0.912,
        "expSpot": 1.302,
        "expDamage": 1245.528,
        "expWinRate": 52.324
    },
    "833": {
        "expDef": 1.356,
        "expFrag": 1.338,
        "expSpot": 0.119,
        "expDamage": 220.825,
        "expWinRate": 56.506
    },
    "849": {
        "expDef": 1.576,
        "expFrag": 1.116,
        "expSpot": 0.771,
        "expDamage": 440.646,
        "expWinRate": 55.973
    },
    "865": {
        "expDef": 1.409,
        "expFrag": 1.348,
        "expSpot": 1.456,
        "expDamage": 236.421,
        "expWinRate": 56.843
    },
    "881": {
        "expDef": 1.325,
        "expFrag": 0.958,
        "expSpot": 1.164,
        "expDamage": 370.223,
        "expWinRate": 55.965
    },
    "897": {
        "expDef": 1.102,
        "expFrag": 0.991,
        "expSpot": 1.271,
        "expDamage": 383.652,
        "expWinRate": 55.449
    },
    "913": {
        "expDef": 0.448,
        "expFrag": 0.884,
        "expSpot": 1.012,
        "expDamage": 1371.885,
        "expWinRate": 53.364
    },
    "929": {
        "expDef": 1.442,
        "expFrag": 1.328,
        "expSpot": 1.105,
        "expDamage": 361.075,
        "expWinRate": 56.836
    },
    "1025": {
        "expDef": 1.428,
        "expFrag": 1.312,
        "expSpot": 1.686,
        "expDamage": 230.574,
        "expWinRate": 56.812
    },
    "1041": {
        "expDef": 1.378,
        "expFrag": 1.109,
        "expSpot": 0.698,
        "expDamage": 582.725,
        "expWinRate": 54.193
    },
    "1057": {
        "expDef": 0.985,
        "expFrag": 1.056,
        "expSpot": 1.364,
        "expDamage": 523.192,
        "expWinRate": 54.83
    },
    "1073": {
        "expDef": 0.963,
        "expFrag": 0.908,
        "expSpot": 1.462,
        "expDamage": 914.025,
        "expWinRate": 54.342
    },
    "1089": {
        "expDef": 1.443,
        "expFrag": 1.143,
        "expSpot": 1.101,
        "expDamage": 382.897,
        "expWinRate": 55.854
    },
    "1105": {
        "expDef": 0.976,
        "expFrag": 0.986,
        "expSpot": 1.85,
        "expDamage": 700.213,
        "expWinRate": 54.444
    },
    "1121": {
        "expDef": 1.076,
        "expFrag": 0.89,
        "expSpot": 1.006,
        "expDamage": 911.33,
        "expWinRate": 51.485
    },
    "1137": {
        "expDef": 1.093,
        "expFrag": 0.85,
        "expSpot": 1.414,
        "expDamage": 486.704,
        "expWinRate": 54.401
    },
    "1153": {
        "expDef": 0.996,
        "expFrag": 0.908,
        "expSpot": 1.167,
        "expDamage": 501.671,
        "expWinRate": 54.017
    },
    "1169": {
        "expDef": 1.328,
        "expFrag": 1.524,
        "expSpot": 1.529,
        "expDamage": 217.2,
        "expWinRate": 58.788
    },
    "1185": {
        "expDef": 0.914,
        "expFrag": 1.127,
        "expSpot": 1.048,
        "expDamage": 427.849,
        "expWinRate": 55.61
    },
    "1297": {
        "expDef": 1.17,
        "expFrag": 0.879,
        "expSpot": 1.243,
        "expDamage": 899.637,
        "expWinRate": 53.848
    },
    "1313": {
        "expDef": 1.087,
        "expFrag": 0.97,
        "expSpot": 1.415,
        "expDamage": 694.635,
        "expWinRate": 54.89
    },
    "1329": {
        "expDef": 1.739,
        "expFrag": 1.673,
        "expSpot": 1.274,
        "expDamage": 221.241,
        "expWinRate": 56.573
    },
    "1345": {
        "expDef": 2.012,
        "expFrag": 1.389,
        "expSpot": 1.052,
        "expDamage": 238.999,
        "expWinRate": 58.545
    },
    "1361": {
        "expDef": 1.533,
        "expFrag": 1.123,
        "expSpot": 1.756,
        "expDamage": 295.663,
        "expWinRate": 57.283
    },
    "1377": {
        "expDef": 1.082,
        "expFrag": 0.915,
        "expSpot": 1.182,
        "expDamage": 487.866,
        "expWinRate": 54.449
    },
    "1393": {
        "expDef": 1.017,
        "expFrag": 0.916,
        "expSpot": 1.426,
        "expDamage": 715.944,
        "expWinRate": 53.429
    },
    "1409": {
        "expDef": 0.998,
        "expFrag": 0.939,
        "expSpot": 1.086,
        "expDamage": 743.78,
        "expWinRate": 53.586
    },
    "1425": {
        "expDef": 1.384,
        "expFrag": 1.45,
        "expSpot": 1.018,
        "expDamage": 276.137,
        "expWinRate": 58.723
    },
    "1441": {
        "expDef": 0.833,
        "expFrag": 0.9,
        "expSpot": 1.066,
        "expDamage": 491.788,
        "expWinRate": 54.914
    },
    "1537": {
        "expDef": 0.995,
        "expFrag": 1.013,
        "expSpot": 1.205,
        "expDamage": 395.82,
        "expWinRate": 55.579
    },
    "1553": {
        "expDef": 1.246,
        "expFrag": 1.053,
        "expSpot": 0.725,
        "expDamage": 750.533,
        "expWinRate": 53.575
    },
    "1569": {
        "expDef": 1.012,
        "expFrag": 0.919,
        "expSpot": 1.576,
        "expDamage": 944.509,
        "expWinRate": 54.302
    },
    "1585": {
        "expDef": 0.955,
        "expFrag": 0.816,
        "expSpot": 1.501,
        "expDamage": 1044.03,
        "expWinRate": 52.253
    },
    "1601": {
        "expDef": 2.131,
        "expFrag": 1.341,
        "expSpot": 0.95,
        "expDamage": 234.291,
        "expWinRate": 57.473
    },
    "1617": {
        "expDef": 1.1,
        "expFrag": 1.019,
        "expSpot": 0.863,
        "expDamage": 381.795,
        "expWinRate": 55.009
    },
    "1633": {
        "expDef": 1.159,
        "expFrag": 0.988,
        "expSpot": 1.233,
        "expDamage": 373.83,
        "expWinRate": 55.977
    },
    "1649": {
        "expDef": 0.855,
        "expFrag": 0.871,
        "expSpot": 1.221,
        "expDamage": 917.623,
        "expWinRate": 53.067
    },
    "1665": {
        "expDef": 0.755,
        "expFrag": 0.889,
        "expSpot": 1.294,
        "expDamage": 925.602,
        "expWinRate": 52.933
    },
    "1681": {
        "expDef": 1.187,
        "expFrag": 1.068,
        "expSpot": 1.202,
        "expDamage": 306.057,
        "expWinRate": 55.542
    },
    "1697": {
        "expDef": 0.684,
        "expFrag": 0.984,
        "expSpot": 1.012,
        "expDamage": 749.028,
        "expWinRate": 53.659
    },
    "1793": {
        "expDef": 0.78,
        "expFrag": 0.913,
        "expSpot": 0.042,
        "expDamage": 1147.536,
        "expWinRate": 50.619
    },
    "1809": {
        "expDef": 1.204,
        "expFrag": 1.417,
        "expSpot": 0.607,
        "expDamage": 458.533,
        "expWinRate": 56.514
    },
    "1825": {
        "expDef": 1.47,
        "expFrag": 1.491,
        "expSpot": 2.454,
        "expDamage": 255.135,
        "expWinRate": 57.329
    },
    "1841": {
        "expDef": 0.716,
        "expFrag": 0.874,
        "expSpot": 1.365,
        "expDamage": 1432.794,
        "expWinRate": 51.507
    },
    "1889": {
        "expDef": 1.116,
        "expFrag": 0.95,
        "expSpot": 1.059,
        "expDamage": 726.486,
        "expWinRate": 52.496
    },
    "1905": {
        "expDef": 0.918,
        "expFrag": 0.786,
        "expSpot": 1.042,
        "expDamage": 1071.898,
        "expWinRate": 51.79
    },
    "1921": {
        "expDef": 0.667,
        "expFrag": 0.949,
        "expSpot": 0.824,
        "expDamage": 1348.026,
        "expWinRate": 52.244
    },
    "1937": {
        "expDef": 0.929,
        "expFrag": 0.78,
        "expSpot": 1.463,
        "expDamage": 338.039,
        "expWinRate": 54.316
    },
    "1953": {
        "expDef": 0.697,
        "expFrag": 0.941,
        "expSpot": 1.306,
        "expDamage": 939.928,
        "expWinRate": 53.481
    },
    "2049": {
        "expDef": 1.084,
        "expFrag": 0.818,
        "expSpot": 2.303,
        "expDamage": 315.559,
        "expWinRate": 55.809
    },
    "2065": {
        "expDef": 1.605,
        "expFrag": 1.386,
        "expSpot": 1.689,
        "expDamage": 240.394,
        "expWinRate": 57.381
    },
    "2081": {
        "expDef": 1.862,
        "expFrag": 1.246,
        "expSpot": 0.389,
        "expDamage": 230.224,
        "expWinRate": 54.39
    },
    "2097": {
        "expDef": 0.523,
        "expFrag": 0.854,
        "expSpot": 1.232,
        "expDamage": 1592.797,
        "expWinRate": 51.453
    },
    "2113": {
        "expDef": 1.301,
        "expFrag": 1.328,
        "expSpot": 0.11,
        "expDamage": 668.027,
        "expWinRate": 54.611
    },
    "2129": {
        "expDef": 1.202,
        "expFrag": 0.942,
        "expSpot": 1.601,
        "expDamage": 460.197,
        "expWinRate": 55.218
    },
    "2145": {
        "expDef": 1.351,
        "expFrag": 1.267,
        "expSpot": 1.189,
        "expDamage": 329.738,
        "expWinRate": 57.453
    },
    "2161": {
        "expDef": 0.737,
        "expFrag": 1.023,
        "expSpot": 1.115,
        "expDamage": 1656.086,
        "expWinRate": 51.093
    },
    "2177": {
        "expDef": 0.544,
        "expFrag": 0.962,
        "expSpot": 0.925,
        "expDamage": 1643.257,
        "expWinRate": 51.712
    },
    "2193": {
        "expDef": 0.709,
        "expFrag": 0.888,
        "expSpot": 1.187,
        "expDamage": 518.801,
        "expWinRate": 54.875
    },
    "2209": {
        "expDef": 0.638,
        "expFrag": 0.888,
        "expSpot": 1.088,
        "expDamage": 1218.76,
        "expWinRate": 50.904
    },
    "2305": {
        "expDef": 0.877,
        "expFrag": 1.015,
        "expSpot": 0.519,
        "expDamage": 1001.927,
        "expWinRate": 52.637
    },
    "2321": {
        "expDef": 1.095,
        "expFrag": 0.998,
        "expSpot": 1.132,
        "expDamage": 762.073,
        "expWinRate": 54.69
    },
    "2353": {
        "expDef": 1.499,
        "expFrag": 1.432,
        "expSpot": 1.264,
        "expDamage": 247.657,
        "expWinRate": 57.53
    },
    "2369": {
        "expDef": 1.593,
        "expFrag": 1.592,
        "expSpot": 1.039,
        "expDamage": 404.853,
        "expWinRate": 57.966
    },
    "2385": {
        "expDef": 1.397,
        "expFrag": 1.177,
        "expSpot": 1.004,
        "expDamage": 305.605,
        "expWinRate": 57.157
    },
    "2401": {
        "expDef": 1.443,
        "expFrag": 1.144,
        "expSpot": 1.564,
        "expDamage": 289.968,
        "expWinRate": 56.99
    },
    "2417": {
        "expDef": 0.627,
        "expFrag": 1.048,
        "expSpot": 1.306,
        "expDamage": 1898.49,
        "expWinRate": 49.079
    },
    "2433": {
        "expDef": 0.487,
        "expFrag": 0.939,
        "expSpot": 1.136,
        "expDamage": 1929.711,
        "expWinRate": 49.733
    },
    "2449": {
        "expDef": 0.714,
        "expFrag": 0.927,
        "expSpot": 0.77,
        "expDamage": 740.749,
        "expWinRate": 53.565
    },
    "2465": {
        "expDef": 0.658,
        "expFrag": 1.068,
        "expSpot": 1.086,
        "expDamage": 1705.838,
        "expWinRate": 50.714
    },
    "2561": {
        "expDef": 0.964,
        "expFrag": 0.934,
        "expSpot": 1.333,
        "expDamage": 708.121,
        "expWinRate": 53.997
    },
    "2577": {
        "expDef": 1.095,
        "expFrag": 1.014,
        "expSpot": 1.198,
        "expDamage": 646.492,
        "expWinRate": 54.784
    },
    "2593": {
        "expDef": 0.575,
        "expFrag": 0.973,
        "expSpot": 0.677,
        "expDamage": 1713.659,
        "expWinRate": 50.635
    },
    "2625": {
        "expDef": 0.85,
        "expFrag": 0.889,
        "expSpot": 0.907,
        "expDamage": 785.943,
        "expWinRate": 53.445
    },
    "2657": {
        "expDef": 1.008,
        "expFrag": 0.819,
        "expSpot": 1.166,
        "expDamage": 1123.393,
        "expWinRate": 51.135
    },
    "2689": {
        "expDef": 1.47,
        "expFrag": 1.241,
        "expSpot": 0.555,
        "expDamage": 306.418,
        "expWinRate": 53.545
    },
    "2705": {
        "expDef": 0.627,
        "expFrag": 0.967,
        "expSpot": 1.03,
        "expDamage": 1077.364,
        "expWinRate": 53.546
    },
    "2721": {
        "expDef": 0.613,
        "expFrag": 1.158,
        "expSpot": 1.109,
        "expDamage": 2056.403,
        "expWinRate": 49.772
    },
    "2817": {
        "expDef": 0.768,
        "expFrag": 1.027,
        "expSpot": 1.031,
        "expDamage": 812.952,
        "expWinRate": 53.796
    },
    "2833": {
        "expDef": 1.313,
        "expFrag": 1.169,
        "expSpot": 0.168,
        "expDamage": 347.651,
        "expWinRate": 57.751
    },
    "2849": {
        "expDef": 0.703,
        "expFrag": 0.789,
        "expSpot": 0.817,
        "expDamage": 1252.346,
        "expWinRate": 50.817
    },
    "2865": {
        "expDef": 0.779,
        "expFrag": 0.837,
        "expSpot": 1.08,
        "expDamage": 1227.21,
        "expWinRate": 52.989
    },
    "2881": {
        "expDef": 1.188,
        "expFrag": 0.815,
        "expSpot": 0.81,
        "expDamage": 283.575,
        "expWinRate": 56.254
    },
    "2897": {
        "expDef": 1.317,
        "expFrag": 1.118,
        "expSpot": 0.863,
        "expDamage": 625.378,
        "expWinRate": 55.731
    },
    "2913": {
        "expDef": 1.16,
        "expFrag": 0.976,
        "expSpot": 1.677,
        "expDamage": 364.345,
        "expWinRate": 55.488
    },
    "2945": {
        "expDef": 1.49,
        "expFrag": 1.403,
        "expSpot": 0.595,
        "expDamage": 372.377,
        "expWinRate": 57.762
    },
    "2961": {
        "expDef": 0.509,
        "expFrag": 0.842,
        "expSpot": 0.968,
        "expDamage": 1322.63,
        "expWinRate": 51.761
    },
    "3073": {
        "expDef": 1.212,
        "expFrag": 1.083,
        "expSpot": 1.353,
        "expDamage": 276.84,
        "expWinRate": 56.226
    },
    "3089": {
        "expDef": 1.578,
        "expFrag": 1.631,
        "expSpot": 1.803,
        "expDamage": 221.763,
        "expWinRate": 57.808
    },
    "3105": {
        "expDef": 1.048,
        "expFrag": 1.032,
        "expSpot": 0.838,
        "expDamage": 363.578,
        "expWinRate": 55.349
    },
    "3121": {
        "expDef": 1.089,
        "expFrag": 0.906,
        "expSpot": 2.232,
        "expDamage": 334.269,
        "expWinRate": 55.272
    },
    "3137": {
        "expDef": 0.956,
        "expFrag": 0.998,
        "expSpot": 0.895,
        "expDamage": 1313.94,
        "expWinRate": 51.423
    },
    "3153": {
        "expDef": 1.217,
        "expFrag": 0.935,
        "expSpot": 0.832,
        "expDamage": 1012.912,
        "expWinRate": 55.009
    },
    "3169": {
        "expDef": 1.525,
        "expFrag": 1.219,
        "expSpot": 1.246,
        "expDamage": 220.858,
        "expWinRate": 56.541
    },
    "3201": {
        "expDef": 1.43,
        "expFrag": 1.195,
        "expSpot": 0.635,
        "expDamage": 441.005,
        "expWinRate": 55.758
    },
    "3217": {
        "expDef": 0.433,
        "expFrag": 0.893,
        "expSpot": 0.944,
        "expDamage": 1679.347,
        "expWinRate": 52.312
    },
    "3329": {
        "expDef": 1.644,
        "expFrag": 1.643,
        "expSpot": 1.21,
        "expDamage": 218.134,
        "expWinRate": 57.409
    },
    "3345": {
        "expDef": 1.477,
        "expFrag": 1.324,
        "expSpot": 1.287,
        "expDamage": 330.985,
        "expWinRate": 58.341
    },
    "3361": {
        "expDef": 1.188,
        "expFrag": 1.14,
        "expSpot": 1.13,
        "expDamage": 617.231,
        "expWinRate": 55.575
    },
    "3377": {
        "expDef": 0.695,
        "expFrag": 0.697,
        "expSpot": 2.305,
        "expDamage": 709.193,
        "expWinRate": 52.037
    },
    "3393": {
        "expDef": 1.868,
        "expFrag": 1.078,
        "expSpot": 0.138,
        "expDamage": 390.429,
        "expWinRate": 52.223
    },
    "3409": {
        "expDef": 1.638,
        "expFrag": 1.099,
        "expSpot": 0.126,
        "expDamage": 286.786,
        "expWinRate": 56.055
    },
    "3425": {
        "expDef": 0.776,
        "expFrag": 0.915,
        "expSpot": 1.118,
        "expDamage": 1543.885,
        "expWinRate": 50.412
    },
    "3457": {
        "expDef": 1.059,
        "expFrag": 1.073,
        "expSpot": 0.824,
        "expDamage": 527.895,
        "expWinRate": 55.064
    },
    "3473": {
        "expDef": 0.35,
        "expFrag": 0.944,
        "expSpot": 0.94,
        "expDamage": 2099.322,
        "expWinRate": 50.924
    },
    "3585": {
        "expDef": 1.034,
        "expFrag": 1.083,
        "expSpot": 0.726,
        "expDamage": 787.731,
        "expWinRate": 53.269
    },
    "3601": {
        "expDef": 1.688,
        "expFrag": 1.752,
        "expSpot": 0.898,
        "expDamage": 298.393,
        "expWinRate": 58.319
    },
    "3617": {
        "expDef": 1.725,
        "expFrag": 0.871,
        "expSpot": 0.115,
        "expDamage": 474.063,
        "expWinRate": 49.631
    },
    "3633": {
        "expDef": 0.785,
        "expFrag": 0.993,
        "expSpot": 1.073,
        "expDamage": 1070.666,
        "expWinRate": 54.265
    },
    "3649": {
        "expDef": 0.773,
        "expFrag": 1.071,
        "expSpot": 1.692,
        "expDamage": 1783.571,
        "expWinRate": 48.73
    },
    "3665": {
        "expDef": 1.054,
        "expFrag": 0.947,
        "expSpot": 1.011,
        "expDamage": 740.293,
        "expWinRate": 52.862
    },
    "3681": {
        "expDef": 0.693,
        "expFrag": 0.974,
        "expSpot": 1.304,
        "expDamage": 1862.37,
        "expWinRate": 49.899
    },
    "3713": {
        "expDef": 1.03,
        "expFrag": 0.957,
        "expSpot": 0.603,
        "expDamage": 772.544,
        "expWinRate": 53.074
    },
    "3729": {
        "expDef": 0.858,
        "expFrag": 0.882,
        "expSpot": 1.264,
        "expDamage": 667.336,
        "expWinRate": 52.557
    },
    "3841": {
        "expDef": 1.42,
        "expFrag": 1.244,
        "expSpot": 0.121,
        "expDamage": 214.793,
        "expWinRate": 54.639
    },
    "3857": {
        "expDef": 1.036,
        "expFrag": 1,
        "expSpot": 0.681,
        "expDamage": 1042.21,
        "expWinRate": 53.014
    },
    "3873": {
        "expDef": 0.96,
        "expFrag": 0.992,
        "expSpot": 1.066,
        "expDamage": 1136.016,
        "expWinRate": 53.968
    },
    "3889": {
        "expDef": 0.637,
        "expFrag": 0.662,
        "expSpot": 2.483,
        "expDamage": 849.656,
        "expWinRate": 51.713
    },
    "3905": {
        "expDef": 0.767,
        "expFrag": 0.959,
        "expSpot": 0.85,
        "expDamage": 1588.563,
        "expWinRate": 50.308
    },
    "3921": {
        "expDef": 0.803,
        "expFrag": 0.83,
        "expSpot": 1.04,
        "expDamage": 1273.106,
        "expWinRate": 52.593
    },
    "3937": {
        "expDef": 0.436,
        "expFrag": 0.9,
        "expSpot": 0.794,
        "expDamage": 2055.931,
        "expWinRate": 51.063
    },
    "3969": {
        "expDef": 1.092,
        "expFrag": 0.941,
        "expSpot": 0.58,
        "expDamage": 981.742,
        "expWinRate": 52.283
    },
    "3985": {
        "expDef": 0.633,
        "expFrag": 0.953,
        "expSpot": 0.925,
        "expDamage": 867.815,
        "expWinRate": 52.048
    },
    "4097": {
        "expDef": 0.747,
        "expFrag": 0.907,
        "expSpot": 0.02,
        "expDamage": 1290.642,
        "expWinRate": 51.001
    },
    "4113": {
        "expDef": 1.028,
        "expFrag": 0.945,
        "expSpot": 1.545,
        "expDamage": 890.786,
        "expWinRate": 53.505
    },
    "4129": {
        "expDef": 1.407,
        "expFrag": 1.001,
        "expSpot": 0.078,
        "expDamage": 837.258,
        "expWinRate": 51.337
    },
    "4145": {
        "expDef": 0.653,
        "expFrag": 0.921,
        "expSpot": 1.273,
        "expDamage": 1792.522,
        "expWinRate": 49.271
    },
    "4161": {
        "expDef": 2.213,
        "expFrag": 1.113,
        "expSpot": 0.098,
        "expDamage": 623.429,
        "expWinRate": 53.258
    },
    "4193": {
        "expDef": 0.475,
        "expFrag": 0.807,
        "expSpot": 0.694,
        "expDamage": 1533.997,
        "expWinRate": 51.758
    },
    "4225": {
        "expDef": 0.9,
        "expFrag": 0.921,
        "expSpot": 0.577,
        "expDamage": 1360.695,
        "expWinRate": 50.562
    },
    "4241": {
        "expDef": 0.68,
        "expFrag": 0.898,
        "expSpot": 1.264,
        "expDamage": 1036.838,
        "expWinRate": 52.28
    },
    "4353": {
        "expDef": 0.866,
        "expFrag": 0.82,
        "expSpot": 1.425,
        "expDamage": 1067.219,
        "expWinRate": 52.106
    },
    "4369": {
        "expDef": 1.13,
        "expFrag": 1.032,
        "expSpot": 1.835,
        "expDamage": 361.733,
        "expWinRate": 57.536
    },
    "4385": {
        "expDef": 0.934,
        "expFrag": 0.861,
        "expSpot": 1.156,
        "expDamage": 1238.657,
        "expWinRate": 52.408
    },
    "4401": {
        "expDef": 1.442,
        "expFrag": 1.273,
        "expSpot": 1.2,
        "expDamage": 323.332,
        "expWinRate": 57.558
    },
    "4417": {
        "expDef": 1.019,
        "expFrag": 0.999,
        "expSpot": 1.143,
        "expDamage": 489.436,
        "expWinRate": 54.307
    },
    "4433": {
        "expDef": 0.604,
        "expFrag": 0.858,
        "expSpot": 1.022,
        "expDamage": 1649.539,
        "expWinRate": 51.465
    },
    "4449": {
        "expDef": 1.099,
        "expFrag": 1.082,
        "expSpot": 0.719,
        "expDamage": 375.794,
        "expWinRate": 54.35
    },
    "4481": {
        "expDef": 0.887,
        "expFrag": 0.989,
        "expSpot": 0.573,
        "expDamage": 1734.521,
        "expWinRate": 50.678
    },
    "4497": {
        "expDef": 0.629,
        "expFrag": 0.784,
        "expSpot": 0.968,
        "expDamage": 1154.734,
        "expWinRate": 50.321
    },
    "4609": {
        "expDef": 1.818,
        "expFrag": 1.382,
        "expSpot": 1.081,
        "expDamage": 239.691,
        "expWinRate": 57.303
    },
    "4625": {
        "expDef": 1.621,
        "expFrag": 1.014,
        "expSpot": 0.165,
        "expDamage": 406.088,
        "expWinRate": 53.963
    },
    "4641": {
        "expDef": 1.568,
        "expFrag": 1.009,
        "expSpot": 0.126,
        "expDamage": 391.587,
        "expWinRate": 53.631
    },
    "4657": {
        "expDef": 1.138,
        "expFrag": 0.994,
        "expSpot": 1.376,
        "expDamage": 486.718,
        "expWinRate": 54.248
    },
    "4673": {
        "expDef": 1.462,
        "expFrag": 1.036,
        "expSpot": 0.076,
        "expDamage": 927.25,
        "expWinRate": 52.63
    },
    "4689": {
        "expDef": 1.195,
        "expFrag": 0.981,
        "expSpot": 0.73,
        "expDamage": 766.338,
        "expWinRate": 54.558
    },
    "4705": {
        "expDef": 1.069,
        "expFrag": 1.169,
        "expSpot": 0.725,
        "expDamage": 332.705,
        "expWinRate": 55.142
    },
    "4737": {
        "expDef": 0.84,
        "expFrag": 1.043,
        "expSpot": 0.633,
        "expDamage": 2078.263,
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
        "expDef": 1.157,
        "expFrag": 1.195,
        "expSpot": 1.785,
        "expDamage": 306.475,
        "expWinRate": 57.567
    },
    "4897": {
        "expDef": 1.198,
        "expFrag": 1.308,
        "expSpot": 1.411,
        "expDamage": 313.585,
        "expWinRate": 56.978
    },
    "4913": {
        "expDef": 0.752,
        "expFrag": 0.727,
        "expSpot": 2.38,
        "expDamage": 503.272,
        "expWinRate": 52.644
    },
    "4929": {
        "expDef": 0.709,
        "expFrag": 0.758,
        "expSpot": 2.273,
        "expDamage": 981.119,
        "expWinRate": 51.123
    },
    "4945": {
        "expDef": 1.314,
        "expFrag": 0.836,
        "expSpot": 0.781,
        "expDamage": 331.511,
        "expWinRate": 54.896
    },
    "4961": {
        "expDef": 0.634,
        "expFrag": 0.797,
        "expSpot": 0.742,
        "expDamage": 1267.286,
        "expWinRate": 52.617
    },
    "4993": {
        "expDef": 0.641,
        "expFrag": 0.869,
        "expSpot": 1.205,
        "expDamage": 1249.247,
        "expWinRate": 51.578
    },
    "5121": {
        "expDef": 1.776,
        "expFrag": 1.652,
        "expSpot": 0.436,
        "expDamage": 293.502,
        "expWinRate": 58.583
    },
    "5137": {
        "expDef": 0.896,
        "expFrag": 0.833,
        "expSpot": 0.958,
        "expDamage": 1235.211,
        "expWinRate": 51.73
    },
    "5153": {
        "expDef": 1.071,
        "expFrag": 0.849,
        "expSpot": 2.269,
        "expDamage": 295.572,
        "expWinRate": 56.429
    },
    "5169": {
        "expDef": 1.039,
        "expFrag": 0.954,
        "expSpot": 1.467,
        "expDamage": 688.842,
        "expWinRate": 54.081
    },
    "5185": {
        "expDef": 0.804,
        "expFrag": 0.752,
        "expSpot": 2.14,
        "expDamage": 691.797,
        "expWinRate": 52.208
    },
    "5201": {
        "expDef": 1.432,
        "expFrag": 1.435,
        "expSpot": 1.258,
        "expDamage": 256.595,
        "expWinRate": 57.114
    },
    "5217": {
        "expDef": 0.639,
        "expFrag": 0.954,
        "expSpot": 0.971,
        "expDamage": 1103.14,
        "expWinRate": 54.979
    },
    "5249": {
        "expDef": 0.646,
        "expFrag": 0.911,
        "expSpot": 1.144,
        "expDamage": 1569.28,
        "expWinRate": 51.004
    },
    "5265": {
        "expDef": 0.659,
        "expFrag": 0.999,
        "expSpot": 1.528,
        "expDamage": 1915.599,
        "expWinRate": 51.929
    },
    "5377": {
        "expDef": 0.793,
        "expFrag": 0.876,
        "expSpot": 0.998,
        "expDamage": 1273.279,
        "expWinRate": 51.62
    },
    "5393": {
        "expDef": 0.728,
        "expFrag": 0.688,
        "expSpot": 2.282,
        "expDamage": 393.727,
        "expWinRate": 53.889
    },
    "5409": {
        "expDef": 0.926,
        "expFrag": 0.791,
        "expSpot": 1.918,
        "expDamage": 380.484,
        "expWinRate": 53.714
    },
    "5425": {
        "expDef": 0.551,
        "expFrag": 0.864,
        "expSpot": 1.334,
        "expDamage": 1823.117,
        "expWinRate": 49.848
    },
    "5457": {
        "expDef": 1.062,
        "expFrag": 0.927,
        "expSpot": 1.609,
        "expDamage": 879.659,
        "expWinRate": 53.031
    },
    "5473": {
        "expDef": 0.646,
        "expFrag": 1.044,
        "expSpot": 0.796,
        "expDamage": 836.346,
        "expWinRate": 54.341
    },
    "5505": {
        "expDef": 0.586,
        "expFrag": 0.982,
        "expSpot": 1.137,
        "expDamage": 1928.436,
        "expWinRate": 50.27
    },
    "5633": {
        "expDef": 1.178,
        "expFrag": 1.033,
        "expSpot": 0.066,
        "expDamage": 975.928,
        "expWinRate": 51.15
    },
    "5649": {
        "expDef": 1.554,
        "expFrag": 1.069,
        "expSpot": 0.101,
        "expDamage": 632.235,
        "expWinRate": 53.074
    },
    "5665": {
        "expDef": 1.467,
        "expFrag": 1.339,
        "expSpot": 1.541,
        "expDamage": 238.458,
        "expWinRate": 57.63
    },
    "5681": {
        "expDef": 0.604,
        "expFrag": 0.689,
        "expSpot": 2.464,
        "expDamage": 1049.134,
        "expWinRate": 49.911
    },
    "5697": {
        "expDef": 0.868,
        "expFrag": 0.987,
        "expSpot": 1.393,
        "expDamage": 1432.108,
        "expWinRate": 50.802
    },
    "5713": {
        "expDef": 0.792,
        "expFrag": 0.873,
        "expSpot": 1.22,
        "expDamage": 1529.207,
        "expWinRate": 50.89
    },
    "5729": {
        "expDef": 0.841,
        "expFrag": 1.263,
        "expSpot": 1.144,
        "expDamage": 712.126,
        "expWinRate": 54.925
    },
    "5889": {
        "expDef": 0.808,
        "expFrag": 0.988,
        "expSpot": 0.824,
        "expDamage": 1080.819,
        "expWinRate": 53.826
    },
    "5905": {
        "expDef": 1.6,
        "expFrag": 1.002,
        "expSpot": 0.148,
        "expDamage": 359.298,
        "expWinRate": 52.08
    },
    "5921": {
        "expDef": 1.002,
        "expFrag": 0.826,
        "expSpot": 1.388,
        "expDamage": 1117.92,
        "expWinRate": 51.994
    },
    "5937": {
        "expDef": 0.579,
        "expFrag": 0.739,
        "expSpot": 2.625,
        "expDamage": 1317.222,
        "expWinRate": 48.463
    },
    "5953": {
        "expDef": 1.691,
        "expFrag": 1.114,
        "expSpot": 0.909,
        "expDamage": 271.315,
        "expWinRate": 58.293
    },
    "5969": {
        "expDef": 0.91,
        "expFrag": 0.776,
        "expSpot": 1.248,
        "expDamage": 1110.247,
        "expWinRate": 52.532
    },
    "5985": {
        "expDef": 1.178,
        "expFrag": 1.446,
        "expSpot": 1.18,
        "expDamage": 243.083,
        "expWinRate": 57.511
    },
    "6145": {
        "expDef": 0.677,
        "expFrag": 0.874,
        "expSpot": 1.082,
        "expDamage": 1834.361,
        "expWinRate": 49.343
    },
    "6161": {
        "expDef": 1.085,
        "expFrag": 0.894,
        "expSpot": 2.506,
        "expDamage": 350.568,
        "expWinRate": 56.3
    },
    "6177": {
        "expDef": 1.58,
        "expFrag": 1.841,
        "expSpot": 1.059,
        "expDamage": 281.252,
        "expWinRate": 56.796
    },
    "6193": {
        "expDef": 0.475,
        "expFrag": 0.901,
        "expSpot": 1.245,
        "expDamage": 1976.887,
        "expWinRate": 49.144
    },
    "6209": {
        "expDef": 0.682,
        "expFrag": 1,
        "expSpot": 0.947,
        "expDamage": 1915.548,
        "expWinRate": 48.541
    },
    "6225": {
        "expDef": 0.64,
        "expFrag": 0.874,
        "expSpot": 1.048,
        "expDamage": 1853.477,
        "expWinRate": 48.979
    },
    "6401": {
        "expDef": 1.638,
        "expFrag": 1.458,
        "expSpot": 0.788,
        "expDamage": 381.433,
        "expWinRate": 57.324
    },
    "6417": {
        "expDef": 1.021,
        "expFrag": 0.931,
        "expSpot": 1.539,
        "expDamage": 467.971,
        "expWinRate": 54.922
    },
    "6433": {
        "expDef": 1.341,
        "expFrag": 1.458,
        "expSpot": 1.153,
        "expDamage": 361.26,
        "expWinRate": 58.122
    },
    "6449": {
        "expDef": 1.237,
        "expFrag": 1.67,
        "expSpot": 0.464,
        "expDamage": 293.601,
        "expWinRate": 60.285
    },
    "6465": {
        "expDef": 0.697,
        "expFrag": 0.674,
        "expSpot": 1.951,
        "expDamage": 523.26,
        "expWinRate": 52.269
    },
    "6481": {
        "expDef": 1.044,
        "expFrag": 0.889,
        "expSpot": 1.683,
        "expDamage": 326.608,
        "expWinRate": 55.297
    },
    "6657": {
        "expDef": 1.057,
        "expFrag": 0.912,
        "expSpot": 1.424,
        "expDamage": 863.439,
        "expWinRate": 53.932
    },
    "6673": {
        "expDef": 1.534,
        "expFrag": 1.369,
        "expSpot": 0.908,
        "expDamage": 390.139,
        "expWinRate": 58.823
    },
    "6705": {
        "expDef": 1.306,
        "expFrag": 1.532,
        "expSpot": 0.619,
        "expDamage": 381.936,
        "expWinRate": 57.413
    },
    "6721": {
        "expDef": 1.047,
        "expFrag": 1.139,
        "expSpot": 0.862,
        "expDamage": 636.264,
        "expWinRate": 55.358
    },
    "6913": {
        "expDef": 1.397,
        "expFrag": 1.303,
        "expSpot": 0.816,
        "expDamage": 496.026,
        "expWinRate": 56.033
    },
    "6929": {
        "expDef": 0.592,
        "expFrag": 0.892,
        "expSpot": 0.85,
        "expDamage": 1876.748,
        "expWinRate": 51.725
    },
    "6945": {
        "expDef": 1.346,
        "expFrag": 1.121,
        "expSpot": 0.933,
        "expDamage": 578.106,
        "expWinRate": 54.963
    },
    "6961": {
        "expDef": 1.152,
        "expFrag": 1.411,
        "expSpot": 0.665,
        "expDamage": 529.942,
        "expWinRate": 56.913
    },
    "6977": {
        "expDef": 0.985,
        "expFrag": 0.88,
        "expSpot": 0.93,
        "expDamage": 1027.465,
        "expWinRate": 53.528
    },
    "6993": {
        "expDef": 1.058,
        "expFrag": 1.336,
        "expSpot": 0.907,
        "expDamage": 296.156,
        "expWinRate": 56.421
    },
    "7169": {
        "expDef": 0.577,
        "expFrag": 0.851,
        "expSpot": 1.233,
        "expDamage": 1806.689,
        "expWinRate": 49.575
    },
    "7185": {
        "expDef": 0.872,
        "expFrag": 0.944,
        "expSpot": 1.247,
        "expDamage": 732.138,
        "expWinRate": 54.279
    },
    "7201": {
        "expDef": 1.104,
        "expFrag": 1.002,
        "expSpot": 0.835,
        "expDamage": 792.69,
        "expWinRate": 54.02
    },
    "7217": {
        "expDef": 0.893,
        "expFrag": 1.068,
        "expSpot": 0.492,
        "expDamage": 590.259,
        "expWinRate": 55.025
    },
    "7233": {
        "expDef": 1.177,
        "expFrag": 0.9,
        "expSpot": 0.061,
        "expDamage": 1098.942,
        "expWinRate": 51.534
    },
    "7249": {
        "expDef": 0.683,
        "expFrag": 0.916,
        "expSpot": 1.341,
        "expDamage": 1816.443,
        "expWinRate": 49.36
    },
    "7425": {
        "expDef": 0.778,
        "expFrag": 1.045,
        "expSpot": 0.509,
        "expDamage": 1398.807,
        "expWinRate": 50.371
    },
    "7441": {
        "expDef": 0.601,
        "expFrag": 0.845,
        "expSpot": 0.921,
        "expDamage": 1542.772,
        "expWinRate": 51.77
    },
    "7457": {
        "expDef": 0.838,
        "expFrag": 0.885,
        "expSpot": 0.035,
        "expDamage": 1301.006,
        "expWinRate": 51.153
    },
    "7473": {
        "expDef": 0.858,
        "expFrag": 1.04,
        "expSpot": 0.624,
        "expDamage": 795.803,
        "expWinRate": 53.964
    },
    "7489": {
        "expDef": 1.016,
        "expFrag": 0.877,
        "expSpot": 0.053,
        "expDamage": 1246.822,
        "expWinRate": 50.833
    },
    "7505": {
        "expDef": 1.123,
        "expFrag": 1.232,
        "expSpot": 1.62,
        "expDamage": 321.161,
        "expWinRate": 57.036
    },
    "7681": {
        "expDef": 1.743,
        "expFrag": 1.18,
        "expSpot": 0.122,
        "expDamage": 447.069,
        "expWinRate": 53.82
    },
    "7697": {
        "expDef": 0.944,
        "expFrag": 1.008,
        "expSpot": 0.575,
        "expDamage": 1392.281,
        "expWinRate": 51.626
    },
    "7713": {
        "expDef": 1.464,
        "expFrag": 1.296,
        "expSpot": 0.943,
        "expDamage": 496.798,
        "expWinRate": 56.475
    },
    "7729": {
        "expDef": 0.855,
        "expFrag": 1.081,
        "expSpot": 0.611,
        "expDamage": 1032.138,
        "expWinRate": 53.47
    },
    "7745": {
        "expDef": 1.791,
        "expFrag": 1.803,
        "expSpot": 0.746,
        "expDamage": 301.016,
        "expWinRate": 58.676
    },
    "7761": {
        "expDef": 1.269,
        "expFrag": 1.39,
        "expSpot": 1.75,
        "expDamage": 247.794,
        "expWinRate": 57.093
    },
    "7937": {
        "expDef": 0.787,
        "expFrag": 0.891,
        "expSpot": 1.571,
        "expDamage": 1408.976,
        "expWinRate": 50.966
    },
    "7953": {
        "expDef": 0.757,
        "expFrag": 1.028,
        "expSpot": 0.597,
        "expDamage": 1748.861,
        "expWinRate": 51.132
    },
    "7969": {
        "expDef": 1.037,
        "expFrag": 0.929,
        "expSpot": 0.05,
        "expDamage": 1075.972,
        "expWinRate": 51.809
    },
    "7985": {
        "expDef": 0.652,
        "expFrag": 0.942,
        "expSpot": 0.458,
        "expDamage": 1333.29,
        "expWinRate": 50.929
    },
    "8017": {
        "expDef": 1.761,
        "expFrag": 1.524,
        "expSpot": 0.749,
        "expDamage": 366.944,
        "expWinRate": 57.89
    },
    "8081": {
        "expDef": 0.637,
        "expFrag": 0.981,
        "expSpot": 1.101,
        "expDamage": 1636.608,
        "expWinRate": 50.848
    },
    "8193": {
        "expDef": 0.764,
        "expFrag": 1.117,
        "expSpot": 0.603,
        "expDamage": 1840.067,
        "expWinRate": 50.493
    },
    "8209": {
        "expDef": 1.172,
        "expFrag": 0.919,
        "expSpot": 2.157,
        "expDamage": 336.076,
        "expWinRate": 56.741
    },
    "8225": {
        "expDef": 0.87,
        "expFrag": 0.974,
        "expSpot": 0.542,
        "expDamage": 1368.044,
        "expWinRate": 52.544
    },
    "8241": {
        "expDef": 0.575,
        "expFrag": 1.066,
        "expSpot": 0.493,
        "expDamage": 1794.701,
        "expWinRate": 51.433
    },
    "8257": {
        "expDef": 1.774,
        "expFrag": 1.391,
        "expSpot": 0.912,
        "expDamage": 358.604,
        "expWinRate": 59.133
    },
    "8273": {
        "expDef": 1.555,
        "expFrag": 1.65,
        "expSpot": 1.13,
        "expDamage": 276.612,
        "expWinRate": 58.288
    },
    "8449": {
        "expDef": 0.754,
        "expFrag": 0.921,
        "expSpot": 0.025,
        "expDamage": 1512.243,
        "expWinRate": 50.287
    },
    "8465": {
        "expDef": 0.948,
        "expFrag": 0.805,
        "expSpot": 1.22,
        "expDamage": 1096.587,
        "expWinRate": 52.413
    },
    "8481": {
        "expDef": 0.629,
        "expFrag": 0.817,
        "expSpot": 0.027,
        "expDamage": 1644.408,
        "expWinRate": 49.718
    },
    "8497": {
        "expDef": 0.53,
        "expFrag": 1.005,
        "expSpot": 0.611,
        "expDamage": 2019.077,
        "expWinRate": 50.284
    },
    "8529": {
        "expDef": 1.176,
        "expFrag": 0.96,
        "expSpot": 0.609,
        "expDamage": 1327.732,
        "expWinRate": 52.431
    },
    "8705": {
        "expDef": 0.753,
        "expFrag": 0.869,
        "expSpot": 0.036,
        "expDamage": 1647.05,
        "expWinRate": 49.466
    },
    "8721": {
        "expDef": 0.708,
        "expFrag": 0.88,
        "expSpot": 0.031,
        "expDamage": 1459.778,
        "expWinRate": 50.236
    },
    "8737": {
        "expDef": 0.563,
        "expFrag": 1.066,
        "expSpot": 0.552,
        "expDamage": 1783.169,
        "expWinRate": 53.235
    },
    "8785": {
        "expDef": 1.68,
        "expFrag": 1.095,
        "expSpot": 0.737,
        "expDamage": 547.285,
        "expWinRate": 56.944
    },
    "8961": {
        "expDef": 0.995,
        "expFrag": 0.902,
        "expSpot": 1.445,
        "expDamage": 848.607,
        "expWinRate": 54.346
    },
    "8977": {
        "expDef": 0.984,
        "expFrag": 0.954,
        "expSpot": 0.043,
        "expDamage": 1130.635,
        "expWinRate": 51.244
    },
    "8993": {
        "expDef": 0.74,
        "expFrag": 0.925,
        "expSpot": 1.359,
        "expDamage": 1531.295,
        "expWinRate": 50.903
    },
    "9041": {
        "expDef": 1.557,
        "expFrag": 1.218,
        "expSpot": 1.153,
        "expDamage": 444.843,
        "expWinRate": 56.786
    },
    "9217": {
        "expDef": 0.792,
        "expFrag": 0.977,
        "expSpot": 1.085,
        "expDamage": 1305.699,
        "expWinRate": 51.938
    },
    "9233": {
        "expDef": 0.631,
        "expFrag": 0.859,
        "expSpot": 0.029,
        "expDamage": 1657.777,
        "expWinRate": 49.831
    },
    "9249": {
        "expDef": 1.104,
        "expFrag": 1.016,
        "expSpot": 0.755,
        "expDamage": 1039.471,
        "expWinRate": 53.259
    },
    "9297": {
        "expDef": 0.466,
        "expFrag": 1.041,
        "expSpot": 0.5,
        "expDamage": 1995.784,
        "expWinRate": 49.31
    },
    "9473": {
        "expDef": 0.978,
        "expFrag": 0.803,
        "expSpot": 2.367,
        "expDamage": 378.173,
        "expWinRate": 55.1
    },
    "9489": {
        "expDef": 0.502,
        "expFrag": 0.889,
        "expSpot": 0.94,
        "expDamage": 1879.092,
        "expWinRate": 50.042
    },
    "9505": {
        "expDef": 0.709,
        "expFrag": 0.847,
        "expSpot": 1.061,
        "expDamage": 1526.987,
        "expWinRate": 50.414
    },
    "9553": {
        "expDef": 1.356,
        "expFrag": 1.004,
        "expSpot": 0.65,
        "expDamage": 759.683,
        "expWinRate": 55.672
    },
    "9745": {
        "expDef": 0.707,
        "expFrag": 0.87,
        "expSpot": 0.978,
        "expDamage": 1548.57,
        "expWinRate": 51.429
    },
    "9761": {
        "expDef": 0.697,
        "expFrag": 0.611,
        "expSpot": 2.592,
        "expDamage": 403.343,
        "expWinRate": 53.278
    },
    "9793": {
        "expDef": 1.194,
        "expFrag": 1.283,
        "expSpot": 0.56,
        "expDamage": 440.205,
        "expWinRate": 56.94
    },
    "9809": {
        "expDef": 1.118,
        "expFrag": 0.936,
        "expSpot": 0.415,
        "expDamage": 750.098,
        "expWinRate": 53.181
    },
    "9985": {
        "expDef": 0.87,
        "expFrag": 0.922,
        "expSpot": 0.816,
        "expDamage": 1278.868,
        "expWinRate": 51.357
    },
    "10001": {
        "expDef": 0.632,
        "expFrag": 0.629,
        "expSpot": 2.384,
        "expDamage": 494.239,
        "expWinRate": 52.448
    },
    "10017": {
        "expDef": 1.087,
        "expFrag": 0.983,
        "expSpot": 1.124,
        "expDamage": 707.203,
        "expWinRate": 54.424
    },
    "10049": {
        "expDef": 1.294,
        "expFrag": 1.173,
        "expSpot": 0.707,
        "expDamage": 618.72,
        "expWinRate": 54.144
    },
    "10065": {
        "expDef": 1.255,
        "expFrag": 1.028,
        "expSpot": 0.638,
        "expDamage": 1098.948,
        "expWinRate": 55.396
    },
    "10241": {
        "expDef": 1.068,
        "expFrag": 1.005,
        "expSpot": 0.84,
        "expDamage": 1024.041,
        "expWinRate": 53.325
    },
    "10257": {
        "expDef": 0.722,
        "expFrag": 0.914,
        "expSpot": 1.279,
        "expDamage": 1549.323,
        "expWinRate": 51.295
    },
    "10273": {
        "expDef": 1.546,
        "expFrag": 1.191,
        "expSpot": 1.213,
        "expDamage": 458.938,
        "expWinRate": 57.068
    },
    "10497": {
        "expDef": 0.655,
        "expFrag": 1.041,
        "expSpot": 0.691,
        "expDamage": 819.792,
        "expWinRate": 53.478
    },
    "10513": {
        "expDef": 0.884,
        "expFrag": 0.848,
        "expSpot": 1.156,
        "expDamage": 1220.941,
        "expWinRate": 52.172
    },
    "10529": {
        "expDef": 1.362,
        "expFrag": 1.153,
        "expSpot": 1.372,
        "expDamage": 598.236,
        "expWinRate": 54.347
    },
    "10577": {
        "expDef": 1.154,
        "expFrag": 1.294,
        "expSpot": 0.206,
        "expDamage": 195.043,
        "expWinRate": 56.545
    },
    "10753": {
        "expDef": 0.654,
        "expFrag": 0.866,
        "expSpot": 0.914,
        "expDamage": 1579.56,
        "expWinRate": 51.426
    },
    "10769": {
        "expDef": 0.999,
        "expFrag": 0.908,
        "expSpot": 0.936,
        "expDamage": 1053.675,
        "expWinRate": 54.143
    },
    "10785": {
        "expDef": 0.667,
        "expFrag": 0.874,
        "expSpot": 1.224,
        "expDamage": 1839.291,
        "expWinRate": 48.998
    },
    "10817": {
        "expDef": 1.046,
        "expFrag": 0.897,
        "expSpot": 0.673,
        "expDamage": 986.783,
        "expWinRate": 53.273
    },
    "10833": {
        "expDef": 1.789,
        "expFrag": 0.964,
        "expSpot": 0.092,
        "expDamage": 361.823,
        "expWinRate": 54.308
    },
    "11009": {
        "expDef": 0.824,
        "expFrag": 0.819,
        "expSpot": 0.813,
        "expDamage": 1206.687,
        "expWinRate": 52.193
    },
    "11025": {
        "expDef": 0.967,
        "expFrag": 0.978,
        "expSpot": 0.463,
        "expDamage": 1019.959,
        "expWinRate": 50.991
    },
    "11041": {
        "expDef": 1.149,
        "expFrag": 0.924,
        "expSpot": 0.887,
        "expDamage": 981.111,
        "expWinRate": 53.06
    },
    "11073": {
        "expDef": 0.785,
        "expFrag": 1.028,
        "expSpot": 0.868,
        "expDamage": 1656.834,
        "expWinRate": 51.847
    },
    "11089": {
        "expDef": 1.531,
        "expFrag": 1.114,
        "expSpot": 0.106,
        "expDamage": 597.886,
        "expWinRate": 55.084
    },
    "11265": {
        "expDef": 0.838,
        "expFrag": 0.995,
        "expSpot": 0.89,
        "expDamage": 801.116,
        "expWinRate": 54.456
    },
    "11281": {
        "expDef": 1.532,
        "expFrag": 1.278,
        "expSpot": 0.778,
        "expDamage": 494.658,
        "expWinRate": 56.088
    },
    "11297": {
        "expDef": 0.9,
        "expFrag": 0.939,
        "expSpot": 0.52,
        "expDamage": 1340.928,
        "expWinRate": 51.219
    },
    "11345": {
        "expDef": 1.532,
        "expFrag": 0.885,
        "expSpot": 0.062,
        "expDamage": 943.811,
        "expWinRate": 52.417
    },
    "11521": {
        "expDef": 0.695,
        "expFrag": 0.859,
        "expSpot": 1.148,
        "expDamage": 1529.422,
        "expWinRate": 50.442
    },
    "11537": {
        "expDef": 0.876,
        "expFrag": 0.991,
        "expSpot": 0.679,
        "expDamage": 1377.399,
        "expWinRate": 51.161
    },
    "11553": {
        "expDef": 1.154,
        "expFrag": 1.004,
        "expSpot": 1.214,
        "expDamage": 789.255,
        "expWinRate": 53.426
    },
    "11585": {
        "expDef": 1.064,
        "expFrag": 0.943,
        "expSpot": 0.614,
        "expDamage": 746.395,
        "expWinRate": 53.011
    },
    "11601": {
        "expDef": 0.799,
        "expFrag": 0.846,
        "expSpot": 0.028,
        "expDamage": 1434.851,
        "expWinRate": 50.689
    },
    "11777": {
        "expDef": 1.089,
        "expFrag": 1.151,
        "expSpot": 0.841,
        "expDamage": 627.129,
        "expWinRate": 54.986
    },
    "11793": {
        "expDef": 1.115,
        "expFrag": 1.012,
        "expSpot": 0.568,
        "expDamage": 821.117,
        "expWinRate": 51.449
    },
    "11809": {
        "expDef": 1.193,
        "expFrag": 1.006,
        "expSpot": 1.628,
        "expDamage": 882.832,
        "expWinRate": 52.508
    },
    "11841": {
        "expDef": 0.976,
        "expFrag": 0.938,
        "expSpot": 0.054,
        "expDamage": 1588.303,
        "expWinRate": 49.909
    },
    "11857": {
        "expDef": 1.86,
        "expFrag": 1.002,
        "expSpot": 0.156,
        "expDamage": 767.535,
        "expWinRate": 53.616
    },
    "12033": {
        "expDef": 0.899,
        "expFrag": 0.977,
        "expSpot": 0.803,
        "expDamage": 1549.517,
        "expWinRate": 49.238
    },
    "12049": {
        "expDef": 0.431,
        "expFrag": 1.013,
        "expSpot": 0.61,
        "expDamage": 2020.01,
        "expWinRate": 50.734
    },
    "12097": {
        "expDef": 0.924,
        "expFrag": 0.931,
        "expSpot": 0.734,
        "expDamage": 1283.487,
        "expWinRate": 51.16
    },
    "12113": {
        "expDef": 0.874,
        "expFrag": 0.849,
        "expSpot": 0.028,
        "expDamage": 1183.922,
        "expWinRate": 51.058
    },
    "12289": {
        "expDef": 1.072,
        "expFrag": 0.992,
        "expSpot": 1.81,
        "expDamage": 684.168,
        "expWinRate": 54.402
    },
    "12305": {
        "expDef": 0.68,
        "expFrag": 0.913,
        "expSpot": 1.325,
        "expDamage": 1837.583,
        "expWinRate": 49.302
    },
    "12369": {
        "expDef": 0.764,
        "expFrag": 0.773,
        "expSpot": 0.022,
        "expDamage": 1704.781,
        "expWinRate": 50.676
    },
    "12545": {
        "expDef": 0.831,
        "expFrag": 0.92,
        "expSpot": 1.551,
        "expDamage": 908.485,
        "expWinRate": 52.821
    },
    "12561": {
        "expDef": 1.349,
        "expFrag": 1.178,
        "expSpot": 2.624,
        "expDamage": 266.152,
        "expWinRate": 56.214
    },
    "12577": {
        "expDef": 0.919,
        "expFrag": 0.975,
        "expSpot": 1.737,
        "expDamage": 512.078,
        "expWinRate": 55.815
    },
    "12817": {
        "expDef": 1.398,
        "expFrag": 1.294,
        "expSpot": 1.978,
        "expDamage": 214.608,
        "expWinRate": 57.697
    },
    "12881": {
        "expDef": 0.947,
        "expFrag": 0.992,
        "expSpot": 1.366,
        "expDamage": 501.829,
        "expWinRate": 54.663
    },
    "13073": {
        "expDef": 1.43,
        "expFrag": 1.009,
        "expSpot": 1.615,
        "expDamage": 282.35,
        "expWinRate": 58.034
    },
    "13089": {
        "expDef": 0.515,
        "expFrag": 0.978,
        "expSpot": 0.755,
        "expDamage": 2024.188,
        "expWinRate": 49.699
    },
    "13121": {
        "expDef": 1.567,
        "expFrag": 1.277,
        "expSpot": 1.072,
        "expDamage": 346.133,
        "expWinRate": 58.257
    },
    "13137": {
        "expDef": 0.739,
        "expFrag": 1.007,
        "expSpot": 0.548,
        "expDamage": 1663.049,
        "expWinRate": 50.592
    },
    "13313": {
        "expDef": 0.89,
        "expFrag": 0.875,
        "expSpot": 1.219,
        "expDamage": 1154.412,
        "expWinRate": 50.429
    },
    "13329": {
        "expDef": 1.28,
        "expFrag": 1.19,
        "expSpot": 1.054,
        "expDamage": 415.213,
        "expWinRate": 55.834
    },
    "13345": {
        "expDef": 0.952,
        "expFrag": 0.844,
        "expSpot": 1.011,
        "expDamage": 1139.482,
        "expWinRate": 51.23
    },
    "13393": {
        "expDef": 1.458,
        "expFrag": 1.051,
        "expSpot": 0.516,
        "expDamage": 588.795,
        "expWinRate": 54.118
    },
    "13569": {
        "expDef": 0.635,
        "expFrag": 1.043,
        "expSpot": 0.726,
        "expDamage": 2048.567,
        "expWinRate": 48.679
    },
    "13585": {
        "expDef": 1.258,
        "expFrag": 1.068,
        "expSpot": 1.573,
        "expDamage": 373.748,
        "expWinRate": 57.286
    },
    "13825": {
        "expDef": 0.744,
        "expFrag": 0.938,
        "expSpot": 1.392,
        "expDamage": 1752.559,
        "expWinRate": 48.684
    },
    "13841": {
        "expDef": 0.973,
        "expFrag": 0.821,
        "expSpot": 1.134,
        "expDamage": 1139.864,
        "expWinRate": 51.36
    },
    "13857": {
        "expDef": 0.477,
        "expFrag": 0.994,
        "expSpot": 0.703,
        "expDamage": 2054.871,
        "expWinRate": 51.108
    },
    "13889": {
        "expDef": 0.611,
        "expFrag": 1.098,
        "expSpot": 0.8,
        "expDamage": 2053.828,
        "expWinRate": 49.667
    },
    "13905": {
        "expDef": 0.39,
        "expFrag": 1.074,
        "expSpot": 0.392,
        "expDamage": 2023.972,
        "expWinRate": 49.929
    },
    "14097": {
        "expDef": 1.097,
        "expFrag": 0.963,
        "expSpot": 1.568,
        "expDamage": 708.531,
        "expWinRate": 54.593
    },
    "14113": {
        "expDef": 0.658,
        "expFrag": 0.936,
        "expSpot": 1.275,
        "expDamage": 1860.479,
        "expWinRate": 49.175
    },
    "14145": {
        "expDef": 0.746,
        "expFrag": 0.627,
        "expSpot": 2.364,
        "expDamage": 405.551,
        "expWinRate": 53.337
    },
    "14161": {
        "expDef": 0.973,
        "expFrag": 1.038,
        "expSpot": 0.791,
        "expDamage": 1068.422,
        "expWinRate": 52.949
    },
    "14337": {
        "expDef": 0.692,
        "expFrag": 1.038,
        "expSpot": 0.909,
        "expDamage": 2011.283,
        "expWinRate": 48.972
    },
    "14353": {
        "expDef": 0.698,
        "expFrag": 0.596,
        "expSpot": 1.988,
        "expDamage": 668.288,
        "expWinRate": 51.649
    },
    "14401": {
        "expDef": 0.958,
        "expFrag": 0.858,
        "expSpot": 0.038,
        "expDamage": 1394.122,
        "expWinRate": 50.55
    },
    "14417": {
        "expDef": 1.131,
        "expFrag": 0.993,
        "expSpot": 0.834,
        "expDamage": 769.514,
        "expWinRate": 53.046
    },
    "14609": {
        "expDef": 0.775,
        "expFrag": 0.969,
        "expSpot": 1.221,
        "expDamage": 1883.127,
        "expWinRate": 48.728
    },
    "14625": {
        "expDef": 1.019,
        "expFrag": 0.909,
        "expSpot": 1.238,
        "expDamage": 1157.908,
        "expWinRate": 50.979
    },
    "14657": {
        "expDef": 1.51,
        "expFrag": 0.987,
        "expSpot": 0.098,
        "expDamage": 391.943,
        "expWinRate": 54.645
    },
    "14673": {
        "expDef": 0.894,
        "expFrag": 0.949,
        "expSpot": 0.721,
        "expDamage": 1335.914,
        "expWinRate": 50.951
    },
    "14865": {
        "expDef": 0.808,
        "expFrag": 0.957,
        "expSpot": 1.136,
        "expDamage": 1631.218,
        "expWinRate": 50.454
    },
    "14881": {
        "expDef": 0.59,
        "expFrag": 1.019,
        "expSpot": 0.828,
        "expDamage": 1981.369,
        "expWinRate": 48.612
    },
    "14913": {
        "expDef": 1.176,
        "expFrag": 0.941,
        "expSpot": 0.89,
        "expDamage": 388.254,
        "expWinRate": 55.206
    },
    "15105": {
        "expDef": 1.546,
        "expFrag": 1.221,
        "expSpot": 1.328,
        "expDamage": 304.436,
        "expWinRate": 56.653
    },
    "15121": {
        "expDef": 0.858,
        "expFrag": 1.125,
        "expSpot": 0.158,
        "expDamage": 197.889,
        "expWinRate": 56.283
    },
    "15137": {
        "expDef": 0.685,
        "expFrag": 0.619,
        "expSpot": 2.131,
        "expDamage": 504.781,
        "expWinRate": 52.42
    },
    "15169": {
        "expDef": 1.716,
        "expFrag": 1.274,
        "expSpot": 0.824,
        "expDamage": 233.643,
        "expWinRate": 57.523
    },
    "15361": {
        "expDef": 1.706,
        "expFrag": 1.318,
        "expSpot": 1.313,
        "expDamage": 231.513,
        "expWinRate": 58.933
    },
    "15377": {
        "expDef": 0.764,
        "expFrag": 0.827,
        "expSpot": 0.025,
        "expDamage": 1219.593,
        "expWinRate": 51.246
    },
    "15393": {
        "expDef": 0.747,
        "expFrag": 1.04,
        "expSpot": 0.942,
        "expDamage": 1597.671,
        "expWinRate": 50.381
    },
    "15425": {
        "expDef": 0.751,
        "expFrag": 0.927,
        "expSpot": 1.352,
        "expDamage": 1784.75,
        "expWinRate": 49.219
    },
    "15441": {
        "expDef": 0.819,
        "expFrag": 0.791,
        "expSpot": 1.091,
        "expDamage": 1133.439,
        "expWinRate": 52.275
    },
    "15617": {
        "expDef": 0.751,
        "expFrag": 1.112,
        "expSpot": 1.518,
        "expDamage": 1955.289,
        "expWinRate": 51.692
    },
    "15633": {
        "expDef": 1.544,
        "expFrag": 1.062,
        "expSpot": 0.09,
        "expDamage": 416.385,
        "expWinRate": 54.911
    },
    "15649": {
        "expDef": 0.679,
        "expFrag": 0.729,
        "expSpot": 2.367,
        "expDamage": 716.669,
        "expWinRate": 51.402
    },
    "15681": {
        "expDef": 0.77,
        "expFrag": 0.927,
        "expSpot": 1.343,
        "expDamage": 1553.682,
        "expWinRate": 50.923
    },
    "15697": {
        "expDef": 0.49,
        "expFrag": 0.885,
        "expSpot": 1.005,
        "expDamage": 1988.181,
        "expWinRate": 49.546
    },
    "15873": {
        "expDef": 1.317,
        "expFrag": 0.93,
        "expSpot": 1.496,
        "expDamage": 334.097,
        "expWinRate": 55.68
    },
    "15889": {
        "expDef": 1.026,
        "expFrag": 0.944,
        "expSpot": 1.311,
        "expDamage": 721.46,
        "expWinRate": 53.524
    },
    "15905": {
        "expDef": 0.705,
        "expFrag": 0.952,
        "expSpot": 1.292,
        "expDamage": 1904.584,
        "expWinRate": 50.056
    },
    "15937": {
        "expDef": 2.085,
        "expFrag": 1.388,
        "expSpot": 0.941,
        "expDamage": 241.038,
        "expWinRate": 59.093
    },
    "15953": {
        "expDef": 0.57,
        "expFrag": 0.976,
        "expSpot": 0.713,
        "expDamage": 2000.191,
        "expWinRate": 51.338
    },
    "16129": {
        "expDef": 0.893,
        "expFrag": 0.883,
        "expSpot": 0.035,
        "expDamage": 981.027,
        "expWinRate": 51.979
    },
    "16145": {
        "expDef": 1.078,
        "expFrag": 1.06,
        "expSpot": 0.662,
        "expDamage": 593.39,
        "expWinRate": 52.553
    },
    "16161": {
        "expDef": 0.916,
        "expFrag": 0.838,
        "expSpot": 0.03,
        "expDamage": 1470.974,
        "expWinRate": 50.776
    },
    "16209": {
        "expDef": 0.848,
        "expFrag": 0.919,
        "expSpot": 1.396,
        "expDamage": 614.432,
        "expWinRate": 54.31
    },
    "16385": {
        "expDef": 1.235,
        "expFrag": 1.037,
        "expSpot": 0.082,
        "expDamage": 583.648,
        "expWinRate": 53.462
    },
    "16401": {
        "expDef": 0.819,
        "expFrag": 1.032,
        "expSpot": 0.516,
        "expDamage": 1731.591,
        "expWinRate": 50.218
    },
    "16417": {
        "expDef": 1.339,
        "expFrag": 1.018,
        "expSpot": 0.057,
        "expDamage": 817.967,
        "expWinRate": 53.491
    },
    "16449": {
        "expDef": 0.639,
        "expFrag": 0.753,
        "expSpot": 0.726,
        "expDamage": 1192.115,
        "expWinRate": 51.781
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
        "expSpot": 0.458,
        "expDamage": 1465.954,
        "expWinRate": 50.895
    },
    "16673": {
        "expDef": 0.732,
        "expFrag": 0.615,
        "expSpot": 2.247,
        "expDamage": 532.514,
        "expWinRate": 52.385
    },
    "16705": {
        "expDef": 0.5,
        "expFrag": 0.897,
        "expSpot": 1.162,
        "expDamage": 1734.466,
        "expWinRate": 52.528
    },
    "16897": {
        "expDef": 0.774,
        "expFrag": 0.962,
        "expSpot": 1.426,
        "expDamage": 1792.966,
        "expWinRate": 48.879
    },
    "16913": {
        "expDef": 0.732,
        "expFrag": 1.264,
        "expSpot": 0.472,
        "expDamage": 2153.879,
        "expWinRate": 48.719
    },
    "16961": {
        "expDef": 0.478,
        "expFrag": 0.819,
        "expSpot": 1.187,
        "expDamage": 1881.595,
        "expWinRate": 49.406
    },
    "17153": {
        "expDef": 0.787,
        "expFrag": 1.01,
        "expSpot": 1.465,
        "expDamage": 1801.269,
        "expWinRate": 48.947
    },
    "17169": {
        "expDef": 1.137,
        "expFrag": 1.293,
        "expSpot": 1.282,
        "expDamage": 321.093,
        "expWinRate": 57.052
    },
    "17217": {
        "expDef": 0.555,
        "expFrag": 0.829,
        "expSpot": 2.541,
        "expDamage": 1375.936,
        "expWinRate": 48.723
    },
    "17425": {
        "expDef": 0.952,
        "expFrag": 1.008,
        "expSpot": 1.297,
        "expDamage": 399.809,
        "expWinRate": 56.004
    },
    "17473": {
        "expDef": 0.748,
        "expFrag": 0.718,
        "expSpot": 2.537,
        "expDamage": 814.693,
        "expWinRate": 51.506
    },
    "17665": {
        "expDef": 0.75,
        "expFrag": 0.926,
        "expSpot": 1.343,
        "expDamage": 1474.117,
        "expWinRate": 51.096
    },
    "17729": {
        "expDef": 0.567,
        "expFrag": 1.136,
        "expSpot": 0.711,
        "expDamage": 2000.561,
        "expWinRate": 50.905
    },
    "17937": {
        "expDef": 1.239,
        "expFrag": 1.324,
        "expSpot": 0.793,
        "expDamage": 457.79,
        "expWinRate": 56.679
    },
    "17953": {
        "expDef": 0.786,
        "expFrag": 0.727,
        "expSpot": 2.515,
        "expDamage": 784.89,
        "expWinRate": 51.9
    },
    "17985": {
        "expDef": 0.696,
        "expFrag": 0.74,
        "expSpot": 2.273,
        "expDamage": 508.064,
        "expWinRate": 53.73
    },
    "18177": {
        "expDef": 0.641,
        "expFrag": 0.703,
        "expSpot": 2.54,
        "expDamage": 1016.574,
        "expWinRate": 50.898
    },
    "18193": {
        "expDef": 0.95,
        "expFrag": 1.034,
        "expSpot": 1.217,
        "expDamage": 510.504,
        "expWinRate": 54.507
    },
    "18209": {
        "expDef": 0.602,
        "expFrag": 0.668,
        "expSpot": 2.313,
        "expDamage": 1002.958,
        "expWinRate": 50.504
    },
    "18241": {
        "expDef": 0.683,
        "expFrag": 0.737,
        "expSpot": 2.665,
        "expDamage": 682.681,
        "expWinRate": 53.057
    },
    "18433": {
        "expDef": 0.819,
        "expFrag": 0.7,
        "expSpot": 2.667,
        "expDamage": 781.398,
        "expWinRate": 52.383
    },
    "18449": {
        "expDef": 0.706,
        "expFrag": 0.682,
        "expSpot": 2.612,
        "expDamage": 974.762,
        "expWinRate": 50.944
    },
    "18465": {
        "expDef": 1.717,
        "expFrag": 1.002,
        "expSpot": 0.106,
        "expDamage": 277.192,
        "expWinRate": 55.431
    },
    "18497": {
        "expDef": 0.69,
        "expFrag": 0.666,
        "expSpot": 2.762,
        "expDamage": 835.787,
        "expWinRate": 51.752
    },
    "18689": {
        "expDef": 0.954,
        "expFrag": 1.172,
        "expSpot": 1.276,
        "expDamage": 630.102,
        "expWinRate": 56.55
    },
    "18705": {
        "expDef": 0.514,
        "expFrag": 0.885,
        "expSpot": 0.723,
        "expDamage": 1641.584,
        "expWinRate": 52.543
    },
    "18721": {
        "expDef": 1.276,
        "expFrag": 0.994,
        "expSpot": 0.109,
        "expDamage": 399.881,
        "expWinRate": 54.62
    },
    "18753": {
        "expDef": 0.849,
        "expFrag": 0.744,
        "expSpot": 3.632,
        "expDamage": 988.768,
        "expWinRate": 53.275
    },
    "18961": {
        "expDef": 0.708,
        "expFrag": 0.686,
        "expSpot": 2.022,
        "expDamage": 768.157,
        "expWinRate": 51.616
    },
    "19009": {
        "expDef": 0.738,
        "expFrag": 0.787,
        "expSpot": 3.888,
        "expDamage": 1307.133,
        "expWinRate": 51.075
    },
    "19201": {
        "expDef": 0.685,
        "expFrag": 0.78,
        "expSpot": 3.146,
        "expDamage": 1248.258,
        "expWinRate": 50.298
    },
    "19217": {
        "expDef": 0.562,
        "expFrag": 1.061,
        "expSpot": 0.585,
        "expDamage": 2043.129,
        "expWinRate": 49.25
    },
    "19457": {
        "expDef": 0.774,
        "expFrag": 0.844,
        "expSpot": 2.29,
        "expDamage": 729.444,
        "expWinRate": 52.507
    },
    "19473": {
        "expDef": 0.421,
        "expFrag": 0.881,
        "expSpot": 1.002,
        "expDamage": 1963.581,
        "expWinRate": 50.927
    },
    "19489": {
        "expDef": 0.531,
        "expFrag": 0.731,
        "expSpot": 2.615,
        "expDamage": 1338.634,
        "expWinRate": 48.636
    },
    "19713": {
        "expDef": 0.53,
        "expFrag": 0.876,
        "expSpot": 1.105,
        "expDamage": 1601.093,
        "expWinRate": 52.506
    },
    "19729": {
        "expDef": 0.558,
        "expFrag": 0.847,
        "expSpot": 0.778,
        "expDamage": 1295.428,
        "expWinRate": 53.713
    },
    "19745": {
        "expDef": 0.741,
        "expFrag": 0.775,
        "expSpot": 2.811,
        "expDamage": 682.501,
        "expWinRate": 52.39
    },
    "19969": {
        "expDef": 0.535,
        "expFrag": 0.989,
        "expSpot": 1.351,
        "expDamage": 1964.771,
        "expWinRate": 50.519
    },
    "19985": {
        "expDef": 0.637,
        "expFrag": 0.704,
        "expSpot": 2.948,
        "expDamage": 1261.322,
        "expWinRate": 48.166
    },
    "20225": {
        "expDef": 0.416,
        "expFrag": 0.994,
        "expSpot": 1.19,
        "expDamage": 2085.724,
        "expWinRate": 52.676
    },
    "20241": {
        "expDef": 0.682,
        "expFrag": 0.679,
        "expSpot": 2.746,
        "expDamage": 838.703,
        "expWinRate": 52.042
    },
    "20257": {
        "expDef": 0.788,
        "expFrag": 1.261,
        "expSpot": 1.187,
        "expDamage": 681.419,
        "expWinRate": 57.227
    },
    "20481": {
        "expDef": 0.504,
        "expFrag": 0.803,
        "expSpot": 0.851,
        "expDamage": 1255.029,
        "expWinRate": 52.216
    },
    "20737": {
        "expDef": 0.445,
        "expFrag": 0.869,
        "expSpot": 0.963,
        "expDamage": 1638.608,
        "expWinRate": 52.376
    },
    "20993": {
        "expDef": 0.351,
        "expFrag": 0.886,
        "expSpot": 1.046,
        "expDamage": 1980.901,
        "expWinRate": 50.433
    },
    "21249": {
        "expDef": 0.577,
        "expFrag": 0.97,
        "expSpot": 0.853,
        "expDamage": 1693.141,
        "expWinRate": 52.156
    },
    "21505": {
        "expDef": 0.612,
        "expFrag": 1.018,
        "expSpot": 1.312,
        "expDamage": 1694.129,
        "expWinRate": 52.452
    },
    "21761": {
        "expDef": 0.678,
        "expFrag": 1.007,
        "expSpot": 1.161,
        "expDamage": 1835.484,
        "expWinRate": 49.451
    },
    "22017": {
        "expDef": 0.424,
        "expFrag": 0.877,
        "expSpot": 1.428,
        "expDamage": 1956.191,
        "expWinRate": 50.063
    },
    "22273": {
        "expDef": 0.479,
        "expFrag": 0.951,
        "expSpot": 0.903,
        "expDamage": 1974.635,
        "expWinRate": 51.382
    },
    "22529": {
        "expDef": 0.482,
        "expFrag": 0.923,
        "expSpot": 1.079,
        "expDamage": 1669.489,
        "expWinRate": 52.486
    },
    "22785": {
        "expDef": 0.534,
        "expFrag": 0.854,
        "expSpot": 0.832,
        "expDamage": 1313.065,
        "expWinRate": 52.5
    },
    "23041": {
        "expDef": 1.549,
        "expFrag": 1.033,
        "expSpot": 1.772,
        "expDamage": 442.353,
        "expWinRate": 56.26
    },
    "31233": {
        "expDef": 0.517,
        "expFrag": 1.025,
        "expSpot": 0.897,
        "expDamage": 1179.278,
        "expWinRate": 54.227
    },
    "31745": {
        "expDef": 0.471,
        "expFrag": 1.04,
        "expSpot": 0.371,
        "expDamage": 1442.47,
        "expWinRate": 51.509
    },
    "32001": {
        "expDef": 0.292,
        "expFrag": 0.817,
        "expSpot": 1.297,
        "expDamage": 1861.512,
        "expWinRate": 52.823
    },
    "43329": {
        "expDef": 1.993,
        "expFrag": 1.236,
        "expSpot": 1.834,
        "expDamage": 251.664,
        "expWinRate": 56.516
    },
    "43585": {
        "expDef": 0.8,
        "expFrag": 0.736,
        "expSpot": 3.268,
        "expDamage": 895.026,
        "expWinRate": 52.517
    },
    "43841": {
        "expDef": 1.665,
        "expFrag": 1.077,
        "expSpot": 0.875,
        "expDamage": 260.085,
        "expWinRate": 55.765
    },
    "44289": {
        "expDef": 0.465,
        "expFrag": 0.946,
        "expSpot": 1.056,
        "expDamage": 1425.327,
        "expWinRate": 52.681
    },
    "44545": {
        "expDef": 0.425,
        "expFrag": 0.888,
        "expSpot": 1.259,
        "expDamage": 1670.832,
        "expWinRate": 53.441
    },
    "44801": {
        "expDef": 1.094,
        "expFrag": 0.978,
        "expSpot": 1.717,
        "expDamage": 293.609,
        "expWinRate": 55.937
    },
    "45057": {
        "expDef": 0.636,
        "expFrag": 1.074,
        "expSpot": 0.472,
        "expDamage": 1508.141,
        "expWinRate": 51.048
    },
    "45313": {
        "expDef": 0.714,
        "expFrag": 0.77,
        "expSpot": 2.976,
        "expDamage": 530.531,
        "expWinRate": 54.317
    },
    "45569": {
        "expDef": 0.664,
        "expFrag": 0.711,
        "expSpot": 2.975,
        "expDamage": 865.561,
        "expWinRate": 52.353
    },
    "46081": {
        "expDef": 0.944,
        "expFrag": 0.956,
        "expSpot": 1.478,
        "expDamage": 1347.745,
        "expWinRate": 53.823
    },
    "46337": {
        "expDef": 0.67,
        "expFrag": 0.93,
        "expSpot": 1.547,
        "expDamage": 1276.624,
        "expWinRate": 52.853
    },
    "46593": {
        "expDef": 0.528,
        "expFrag": 1.087,
        "expSpot": 1.102,
        "expDamage": 1168.919,
        "expWinRate": 55.666
    },
    "46609": {
        "expDef": 0.625,
        "expFrag": 0.813,
        "expSpot": 0.971,
        "expDamage": 1170.197,
        "expWinRate": 52.969
    },
    "46849": {
        "expDef": 0.435,
        "expFrag": 1.115,
        "expSpot": 1.234,
        "expDamage": 2440.208,
        "expWinRate": 56.387
    },
    "46865": {
        "expDef": 0.469,
        "expFrag": 0.823,
        "expSpot": 1.344,
        "expDamage": 1389.841,
        "expWinRate": 52.287
    },
    "47105": {
        "expDef": 0.811,
        "expFrag": 0.968,
        "expSpot": 1.346,
        "expDamage": 533.759,
        "expWinRate": 54.715
    },
    "47121": {
        "expDef": 0.762,
        "expFrag": 1.136,
        "expSpot": 1.456,
        "expDamage": 1915.176,
        "expWinRate": 53.916
    },
    "47361": {
        "expDef": 0.608,
        "expFrag": 0.871,
        "expSpot": 0.991,
        "expDamage": 1289.388,
        "expWinRate": 51.442
    },
    "47377": {
        "expDef": 0.547,
        "expFrag": 0.661,
        "expSpot": 2.66,
        "expDamage": 896.667,
        "expWinRate": 51.246
    },
    "47617": {
        "expDef": 0.615,
        "expFrag": 0.854,
        "expSpot": 1.01,
        "expDamage": 1254.04,
        "expWinRate": 51.287
    },
    "47633": {
        "expDef": 1.528,
        "expFrag": 1.431,
        "expSpot": 1.295,
        "expDamage": 287.175,
        "expWinRate": 56.781
    },
    "47873": {
        "expDef": 0.892,
        "expFrag": 1.18,
        "expSpot": 1.158,
        "expDamage": 318.982,
        "expWinRate": 55.507
    },
    "48129": {
        "expDef": 0.861,
        "expFrag": 0.948,
        "expSpot": 1.167,
        "expDamage": 717.293,
        "expWinRate": 53.471
    },
    "48145": {
        "expDef": 0.536,
        "expFrag": 0.817,
        "expSpot": 0.767,
        "expDamage": 1266.312,
        "expWinRate": 53.02
    },
    "48385": {
        "expDef": 0.539,
        "expFrag": 0.943,
        "expSpot": 0.644,
        "expDamage": 1402.293,
        "expWinRate": 51.998
    },
    "48401": {
        "expDef": 0.782,
        "expFrag": 0.967,
        "expSpot": 0.697,
        "expDamage": 1381.864,
        "expWinRate": 51.376
    },
    "48641": {
        "expDef": 0.472,
        "expFrag": 0.892,
        "expSpot": 1.013,
        "expDamage": 1404.377,
        "expWinRate": 53.221
    },
    "48897": {
        "expDef": 0.682,
        "expFrag": 0.92,
        "expSpot": 1.557,
        "expDamage": 1258.453,
        "expWinRate": 52.513
    },
    "48913": {
        "expDef": 0.524,
        "expFrag": 0.811,
        "expSpot": 0.759,
        "expDamage": 1267.586,
        "expWinRate": 52.045
    },
    "49169": {
        "expDef": 0.637,
        "expFrag": 0.94,
        "expSpot": 1.013,
        "expDamage": 809.815,
        "expWinRate": 54.266
    },
    "49409": {
        "expDef": 0.545,
        "expFrag": 0.997,
        "expSpot": 1.092,
        "expDamage": 1393.259,
        "expWinRate": 52.902
    },
    "49665": {
        "expDef": 0.48,
        "expFrag": 0.897,
        "expSpot": 1.002,
        "expDamage": 1401.875,
        "expWinRate": 53.489
    },
    "49921": {
        "expDef": 0.534,
        "expFrag": 0.95,
        "expSpot": 1.14,
        "expDamage": 1061.952,
        "expWinRate": 53.505
    },
    "49937": {
        "expDef": 0.741,
        "expFrag": 0.806,
        "expSpot": 1.206,
        "expDamage": 1151.664,
        "expWinRate": 51.559
    },
    "50193": {
        "expDef": 0.625,
        "expFrag": 0.992,
        "expSpot": 0.548,
        "expDamage": 1420.369,
        "expWinRate": 51.069
    },
    "50945": {
        "expDef": 1.281,
        "expFrag": 1.248,
        "expSpot": 1.183,
        "expDamage": 229.672,
        "expWinRate": 56.969
    },
    "50961": {
        "expDef": 0.601,
        "expFrag": 0.641,
        "expSpot": 2.512,
        "expDamage": 840.073,
        "expWinRate": 51.022
    },
    "51201": {
        "expDef": 1.284,
        "expFrag": 1.253,
        "expSpot": 1.305,
        "expDamage": 607.093,
        "expWinRate": 57.815
    },
    "51345": {
        "expDef": 0.9,
        "expFrag": 0.997,
        "expSpot": 1.451,
        "expDamage": 772.334,
        "expWinRate": 54.285
    },
    "51361": {
        "expDef": 0.697,
        "expFrag": 1.011,
        "expSpot": 1.292,
        "expDamage": 1360.703,
        "expWinRate": 51.514
    },
    "51457": {
        "expDef": 1.329,
        "expFrag": 1.159,
        "expSpot": 1.101,
        "expDamage": 525.84,
        "expWinRate": 55.487
    },
    "51473": {
        "expDef": 0.935,
        "expFrag": 1.236,
        "expSpot": 1.928,
        "expDamage": 676.834,
        "expWinRate": 56.038
    },
    "51489": {
        "expDef": 1.258,
        "expFrag": 1.298,
        "expSpot": 2.403,
        "expDamage": 229.209,
        "expWinRate": 56.49
    },
    "51553": {
        "expDef": 1.112,
        "expFrag": 0.937,
        "expSpot": 1.064,
        "expDamage": 513.559,
        "expWinRate": 52.969
    },
    "51569": {
        "expDef": 0.817,
        "expFrag": 0.941,
        "expSpot": 1.335,
        "expDamage": 737.604,
        "expWinRate": 52.868
    },
    "51585": {
        "expDef": 0.869,
        "expFrag": 1.039,
        "expSpot": 0.981,
        "expDamage": 783.546,
        "expWinRate": 53.197
    },
    "51713": {
        "expDef": 1.328,
        "expFrag": 1.17,
        "expSpot": 1.168,
        "expDamage": 597.322,
        "expWinRate": 54.985
    },
    "51729": {
        "expDef": 2.299,
        "expFrag": 1.641,
        "expSpot": 1.419,
        "expDamage": 341.699,
        "expWinRate": 62.799
    },
    "51745": {
        "expDef": 1.129,
        "expFrag": 1.045,
        "expSpot": 1.39,
        "expDamage": 511.188,
        "expWinRate": 55.912
    },
    "51825": {
        "expDef": 0.645,
        "expFrag": 0.911,
        "expSpot": 1.109,
        "expDamage": 1244.914,
        "expWinRate": 50.974
    },
    "51841": {
        "expDef": 1.169,
        "expFrag": 1.144,
        "expSpot": 1.441,
        "expDamage": 212.052,
        "expWinRate": 57.084
    },
    "51985": {
        "expDef": 1.589,
        "expFrag": 1.468,
        "expSpot": 1.361,
        "expDamage": 368.107,
        "expWinRate": 58.794
    },
    "52001": {
        "expDef": 1.262,
        "expFrag": 1.087,
        "expSpot": 1.612,
        "expDamage": 309.372,
        "expWinRate": 55.332
    },
    "52065": {
        "expDef": 0.817,
        "expFrag": 0.813,
        "expSpot": 1.212,
        "expDamage": 1142.545,
        "expWinRate": 51.259
    },
    "52097": {
        "expDef": 0.791,
        "expFrag": 0.97,
        "expSpot": 0.482,
        "expDamage": 1458.292,
        "expWinRate": 51.132
    },
    "52225": {
        "expDef": 1.348,
        "expFrag": 1.295,
        "expSpot": 2.159,
        "expDamage": 322.394,
        "expWinRate": 56.423
    },
    "52241": {
        "expDef": 1.619,
        "expFrag": 1.554,
        "expSpot": 1.573,
        "expDamage": 479.497,
        "expWinRate": 56.825
    },
    "52257": {
        "expDef": 1.048,
        "expFrag": 1.015,
        "expSpot": 1.608,
        "expDamage": 473.318,
        "expWinRate": 54.794
    },
    "52321": {
        "expDef": 0.788,
        "expFrag": 0.967,
        "expSpot": 1.027,
        "expDamage": 803.349,
        "expWinRate": 54.398
    },
    "52353": {
        "expDef": 0.743,
        "expFrag": 0.775,
        "expSpot": 1.236,
        "expDamage": 1155.952,
        "expWinRate": 52.375
    },
    "52481": {
        "expDef": 1.679,
        "expFrag": 1.264,
        "expSpot": 1.468,
        "expDamage": 374.678,
        "expWinRate": 54.401
    },
    "52497": {
        "expDef": 2.841,
        "expFrag": 1.877,
        "expSpot": 1.637,
        "expDamage": 312.526,
        "expWinRate": 55.754
    },
    "52513": {
        "expDef": 0.631,
        "expFrag": 0.814,
        "expSpot": 1.162,
        "expDamage": 1251.591,
        "expWinRate": 51.448
    },
    "52561": {
        "expDef": 0.808,
        "expFrag": 1.029,
        "expSpot": 0.587,
        "expDamage": 1725.721,
        "expWinRate": 52.152
    },
    "52577": {
        "expDef": 0.484,
        "expFrag": 0.755,
        "expSpot": 1.46,
        "expDamage": 1237.4,
        "expWinRate": 52.866
    },
    "52609": {
        "expDef": 0.661,
        "expFrag": 0.741,
        "expSpot": 1.284,
        "expDamage": 1107.701,
        "expWinRate": 52.112
    },
    "52737": {
        "expDef": 1.624,
        "expFrag": 1.043,
        "expSpot": 1.611,
        "expDamage": 258.6,
        "expWinRate": 54.493
    },
    "52769": {
        "expDef": 1.589,
        "expFrag": 1.112,
        "expSpot": 2.49,
        "expDamage": 281.67,
        "expWinRate": 57.262
    },
    "52817": {
        "expDef": 1.363,
        "expFrag": 0.924,
        "expSpot": 1.386,
        "expDamage": 364.793,
        "expWinRate": 56.585
    },
    "52833": {
        "expDef": 0.656,
        "expFrag": 0.764,
        "expSpot": 1.797,
        "expDamage": 1063.809,
        "expWinRate": 52.209
    },
    "52865": {
        "expDef": 0.521,
        "expFrag": 0.987,
        "expSpot": 1.035,
        "expDamage": 1448.511,
        "expWinRate": 52.505
    },
    "52993": {
        "expDef": 0.976,
        "expFrag": 1.105,
        "expSpot": 2.439,
        "expDamage": 368.338,
        "expWinRate": 55.561
    },
    "53121": {
        "expDef": 0.716,
        "expFrag": 0.956,
        "expSpot": 1.29,
        "expDamage": 1340.335,
        "expWinRate": 51.988
    },
    "53249": {
        "expDef": 0.915,
        "expFrag": 0.964,
        "expSpot": 1.083,
        "expDamage": 1244.257,
        "expWinRate": 51.405
    },
    "53505": {
        "expDef": 1.718,
        "expFrag": 1.456,
        "expSpot": 1.596,
        "expDamage": 333.444,
        "expWinRate": 55.69
    },
    "53537": {
        "expDef": 1.236,
        "expFrag": 1.175,
        "expSpot": 1.529,
        "expDamage": 213.609,
        "expWinRate": 57.854
    },
    "53585": {
        "expDef": 1.426,
        "expFrag": 1.082,
        "expSpot": 0.785,
        "expDamage": 527.65,
        "expWinRate": 54.486
    },
    "53761": {
        "expDef": 1.372,
        "expFrag": 1.232,
        "expSpot": 0.817,
        "expDamage": 590.233,
        "expWinRate": 53.195
    },
    "53793": {
        "expDef": 0.901,
        "expFrag": 0.841,
        "expSpot": 1.309,
        "expDamage": 1121.718,
        "expWinRate": 51.797
    },
    "53841": {
        "expDef": 1.26,
        "expFrag": 1.059,
        "expSpot": 0.576,
        "expDamage": 821.703,
        "expWinRate": 52.759
    },
    "54017": {
        "expDef": 1.108,
        "expFrag": 1.28,
        "expSpot": 1.414,
        "expDamage": 656.68,
        "expWinRate": 57.993
    },
    "54033": {
        "expDef": 0.8,
        "expFrag": 1.272,
        "expSpot": 1.872,
        "expDamage": 667.26,
        "expWinRate": 56.41
    },
    "54097": {
        "expDef": 1.181,
        "expFrag": 1.01,
        "expSpot": 0.768,
        "expDamage": 988.186,
        "expWinRate": 54.026
    },
    "54273": {
        "expDef": 1.504,
        "expFrag": 1.858,
        "expSpot": 0.929,
        "expDamage": 427.608,
        "expWinRate": 58.475
    },
    "54289": {
        "expDef": 0.807,
        "expFrag": 0.793,
        "expSpot": 0.891,
        "expDamage": 1266.751,
        "expWinRate": 51.849
    },
    "54353": {
        "expDef": 1.158,
        "expFrag": 1.239,
        "expSpot": 1.578,
        "expDamage": 611.277,
        "expWinRate": 56.737
    },
    "54529": {
        "expDef": 1.52,
        "expFrag": 1.377,
        "expSpot": 1.41,
        "expDamage": 245.716,
        "expWinRate": 56.308
    },
    "54545": {
        "expDef": 1.132,
        "expFrag": 0.999,
        "expSpot": 1.532,
        "expDamage": 520.689,
        "expWinRate": 54.732
    },
    "54609": {
        "expDef": 1.399,
        "expFrag": 1.293,
        "expSpot": 0.124,
        "expDamage": 335.767,
        "expWinRate": 56.728
    },
    "54785": {
        "expDef": 0.749,
        "expFrag": 1.088,
        "expSpot": 0.549,
        "expDamage": 819.643,
        "expWinRate": 53.342
    },
    "54801": {
        "expDef": 1.609,
        "expFrag": 1.108,
        "expSpot": 2.732,
        "expDamage": 272.213,
        "expWinRate": 58.604
    },
    "54865": {
        "expDef": 1.296,
        "expFrag": 1.358,
        "expSpot": 1.603,
        "expDamage": 210.471,
        "expWinRate": 55.881
    },
    "55057": {
        "expDef": 1.142,
        "expFrag": 1.067,
        "expSpot": 1.251,
        "expDamage": 559.934,
        "expWinRate": 53.319
    },
    "55073": {
        "expDef": 1.306,
        "expFrag": 1.339,
        "expSpot": 1.679,
        "expDamage": 211.901,
        "expWinRate": 56.638
    },
    "55121": {
        "expDef": 1.054,
        "expFrag": 0.906,
        "expSpot": 1.077,
        "expDamage": 997.429,
        "expWinRate": 53.702
    },
    "55297": {
        "expDef": 0.893,
        "expFrag": 1.14,
        "expSpot": 0.762,
        "expDamage": 1062.633,
        "expWinRate": 52.832
    },
    "55313": {
        "expDef": 1.053,
        "expFrag": 0.921,
        "expSpot": 0.77,
        "expDamage": 1252.632,
        "expWinRate": 51.132
    },
    "55377": {
        "expDef": 0.571,
        "expFrag": 0.656,
        "expSpot": 2.486,
        "expDamage": 500.025,
        "expWinRate": 52.143
    },
    "55569": {
        "expDef": 1.509,
        "expFrag": 1.235,
        "expSpot": 1.435,
        "expDamage": 1008.638,
        "expWinRate": 51.883
    },
    "55633": {
        "expDef": 0.764,
        "expFrag": 0.777,
        "expSpot": 1.267,
        "expDamage": 1141.999,
        "expWinRate": 51.637
    },
    "55841": {
        "expDef": 0.642,
        "expFrag": 0.988,
        "expSpot": 1.259,
        "expDamage": 1918.952,
        "expWinRate": 49.683
    },
    "55889": {
        "expDef": 0.96,
        "expFrag": 1.057,
        "expSpot": 2.188,
        "expDamage": 748.337,
        "expWinRate": 55.454
    },
    "56081": {
        "expDef": 0.393,
        "expFrag": 0.827,
        "expSpot": 0.932,
        "expDamage": 1348.485,
        "expWinRate": 52.686
    },
    "56097": {
        "expDef": 1.032,
        "expFrag": 0.949,
        "expSpot": 1.279,
        "expDamage": 693.775,
        "expWinRate": 54.275
    },
    "56145": {
        "expDef": 0.991,
        "expFrag": 0.956,
        "expSpot": 0.964,
        "expDamage": 768.534,
        "expWinRate": 53.466
    },
    "56353": {
        "expDef": 1.162,
        "expFrag": 0.98,
        "expSpot": 0.738,
        "expDamage": 1034.543,
        "expWinRate": 52.324
    },
    "56577": {
        "expDef": 1.57,
        "expFrag": 1.192,
        "expSpot": 1.319,
        "expDamage": 274.339,
        "expWinRate": 55.767
    },
    "56609": {
        "expDef": 0.802,
        "expFrag": 0.94,
        "expSpot": 0.789,
        "expDamage": 1008.614,
        "expWinRate": 53.753
    },
    "56657": {
        "expDef": 0.571,
        "expFrag": 0.784,
        "expSpot": 1.178,
        "expDamage": 1246.175,
        "expWinRate": 51.931
    },
    "56833": {
        "expDef": 0.872,
        "expFrag": 1.189,
        "expSpot": 1.517,
        "expDamage": 1126.97,
        "expWinRate": 55.127
    },
    "56865": {
        "expDef": 0.89,
        "expFrag": 0.961,
        "expSpot": 1.216,
        "expDamage": 1870.695,
        "expWinRate": 52.255
    },
    "56913": {
        "expDef": 0.661,
        "expFrag": 0.784,
        "expSpot": 1.353,
        "expDamage": 1171.991,
        "expWinRate": 52.535
    },
    "57105": {
        "expDef": 0.982,
        "expFrag": 1.028,
        "expSpot": 0.713,
        "expDamage": 795.13,
        "expWinRate": 52.292
    },
    "57121": {
        "expDef": 0.892,
        "expFrag": 0.807,
        "expSpot": 1.249,
        "expDamage": 1127.968,
        "expWinRate": 51.843
    },
    "57169": {
        "expDef": 0.823,
        "expFrag": 1.039,
        "expSpot": 1.007,
        "expDamage": 843.401,
        "expWinRate": 53.666
    },
    "57361": {
        "expDef": 1.189,
        "expFrag": 0.933,
        "expSpot": 1.029,
        "expDamage": 721.375,
        "expWinRate": 52.94
    },
    "57377": {
        "expDef": 0.758,
        "expFrag": 0.778,
        "expSpot": 1.313,
        "expDamage": 1117.643,
        "expWinRate": 50.894
    },
    "57425": {
        "expDef": 0.65,
        "expFrag": 1.066,
        "expSpot": 1.045,
        "expDamage": 1577.793,
        "expWinRate": 54.414
    },
    "57617": {
        "expDef": 1.051,
        "expFrag": 0.994,
        "expSpot": 1.326,
        "expDamage": 917.81,
        "expWinRate": 53.412
    },
    "57633": {
        "expDef": 0.741,
        "expFrag": 0.672,
        "expSpot": 2.749,
        "expDamage": 686.541,
        "expWinRate": 52.003
    },
    "57681": {
        "expDef": 1.005,
        "expFrag": 1.152,
        "expSpot": 0.801,
        "expDamage": 897.274,
        "expWinRate": 54.302
    },
    "57889": {
        "expDef": 0.738,
        "expFrag": 0.663,
        "expSpot": 2.97,
        "expDamage": 779.206,
        "expWinRate": 51.95
    },
    "57937": {
        "expDef": 0.505,
        "expFrag": 1.05,
        "expSpot": 1.367,
        "expDamage": 2282.809,
        "expWinRate": 52.83
    },
    "58113": {
        "expDef": 0.788,
        "expFrag": 1.095,
        "expSpot": 1.315,
        "expDamage": 843.066,
        "expWinRate": 54.735
    },
    "58369": {
        "expDef": 0.498,
        "expFrag": 0.868,
        "expSpot": 1.483,
        "expDamage": 1946.374,
        "expWinRate": 49.992
    },
    "58449": {
        "expDef": 0.654,
        "expFrag": 0.662,
        "expSpot": 2.733,
        "expDamage": 825.444,
        "expWinRate": 52.175
    },
    "58625": {
        "expDef": 0.647,
        "expFrag": 0.941,
        "expSpot": 0.43,
        "expDamage": 1292.133,
        "expWinRate": 50.85
    },
    "58641": {
        "expDef": 0.41,
        "expFrag": 0.932,
        "expSpot": 1.009,
        "expDamage": 1992.92,
        "expWinRate": 51.487
    },
    "58657": {
        "expDef": 0.486,
        "expFrag": 0.783,
        "expSpot": 1.234,
        "expDamage": 1291.004,
        "expWinRate": 52.641
    },
    "58705": {
        "expDef": 0.749,
        "expFrag": 0.665,
        "expSpot": 2.775,
        "expDamage": 992.076,
        "expWinRate": 52.665
    },
    "58881": {
        "expDef": 0.66,
        "expFrag": 0.862,
        "expSpot": 1.05,
        "expDamage": 1284.977,
        "expWinRate": 53.217
    },
    "58913": {
        "expDef": 0.692,
        "expFrag": 0.798,
        "expSpot": 1.235,
        "expDamage": 1220.268,
        "expWinRate": 52.771
    },
    "58961": {
        "expDef": 0.619,
        "expFrag": 0.723,
        "expSpot": 2.648,
        "expDamage": 1296.659,
        "expWinRate": 51.35
    },
    "59137": {
        "expDef": 0.726,
        "expFrag": 1.05,
        "expSpot": 1.082,
        "expDamage": 1121.595,
        "expWinRate": 54.475
    },
    "59169": {
        "expDef": 0.673,
        "expFrag": 0.803,
        "expSpot": 1.243,
        "expDamage": 1240.588,
        "expWinRate": 52.64
    },
    "59217": {
        "expDef": 0.561,
        "expFrag": 0.974,
        "expSpot": 0.852,
        "expDamage": 810.074,
        "expWinRate": 54.845
    },
    "59393": {
        "expDef": 0.924,
        "expFrag": 1.013,
        "expSpot": 1.456,
        "expDamage": 783.646,
        "expWinRate": 54.632
    },
    "59425": {
        "expDef": 0.525,
        "expFrag": 0.745,
        "expSpot": 0.84,
        "expDamage": 1257.453,
        "expWinRate": 51.615
    },
    "59473": {
        "expDef": 0.747,
        "expFrag": 0.645,
        "expSpot": 2.466,
        "expDamage": 833.767,
        "expWinRate": 52.454
    },
    "59649": {
        "expDef": 0.823,
        "expFrag": 1.109,
        "expSpot": 0.593,
        "expDamage": 1047.742,
        "expWinRate": 52.888
    },
    "59665": {
        "expDef": 1.134,
        "expFrag": 1.245,
        "expSpot": 1.333,
        "expDamage": 321.189,
        "expWinRate": 56.177
    },
    "59681": {
        "expDef": 0.835,
        "expFrag": 0.964,
        "expSpot": 1.19,
        "expDamage": 742.136,
        "expWinRate": 54.822
    },
    "59729": {
        "expDef": 0.831,
        "expFrag": 0.657,
        "expSpot": 2.302,
        "expDamage": 640.015,
        "expWinRate": 52.873
    },
    "59905": {
        "expDef": 0.758,
        "expFrag": 0.845,
        "expSpot": 1.257,
        "expDamage": 1144.113,
        "expWinRate": 52.189
    },
    "59937": {
        "expDef": 0.743,
        "expFrag": 0.992,
        "expSpot": 1.18,
        "expDamage": 1033.232,
        "expWinRate": 55.516
    },
    "59985": {
        "expDef": 0.649,
        "expFrag": 0.981,
        "expSpot": 0.597,
        "expDamage": 1368.387,
        "expWinRate": 53.576
    },
    "60161": {
        "expDef": 0.884,
        "expFrag": 1.124,
        "expSpot": 1.067,
        "expDamage": 908.158,
        "expWinRate": 56.618
    },
    "60177": {
        "expDef": 0.912,
        "expFrag": 0.804,
        "expSpot": 1.087,
        "expDamage": 1101.956,
        "expWinRate": 50.802
    },
    "60193": {
        "expDef": 0.469,
        "expFrag": 0.81,
        "expSpot": 1.27,
        "expDamage": 1321.647,
        "expWinRate": 53.053
    },
    "60225": {
        "expDef": 0.793,
        "expFrag": 1.079,
        "expSpot": 1.814,
        "expDamage": 1421.643,
        "expWinRate": 52.69
    },
    "60241": {
        "expDef": 0.639,
        "expFrag": 0.983,
        "expSpot": 0.816,
        "expDamage": 658.49,
        "expWinRate": 55.169
    },
    "60417": {
        "expDef": 0.491,
        "expFrag": 1,
        "expSpot": 0.928,
        "expDamage": 1421.487,
        "expWinRate": 53.469
    },
    "60433": {
        "expDef": 1.555,
        "expFrag": 1.218,
        "expSpot": 1.827,
        "expDamage": 225.078,
        "expWinRate": 58.16
    },
    "60449": {
        "expDef": 0.561,
        "expFrag": 1.037,
        "expSpot": 0.748,
        "expDamage": 1485.673,
        "expWinRate": 53.713
    },
    "60481": {
        "expDef": 0.789,
        "expFrag": 1.198,
        "expSpot": 1.293,
        "expDamage": 1873.352,
        "expWinRate": 52.19
    },
    "60689": {
        "expDef": 1.49,
        "expFrag": 1.099,
        "expSpot": 0.628,
        "expDamage": 534.949,
        "expWinRate": 53.422
    },
    "60737": {
        "expDef": 0.822,
        "expFrag": 1.042,
        "expSpot": 1.343,
        "expDamage": 821.932,
        "expWinRate": 55.253
    },
    "60929": {
        "expDef": 0.941,
        "expFrag": 1.045,
        "expSpot": 1.764,
        "expDamage": 268.417,
        "expWinRate": 55.447
    },
    "60945": {
        "expDef": 0.731,
        "expFrag": 0.954,
        "expSpot": 1.388,
        "expDamage": 1558.887,
        "expWinRate": 51.508
    },
    "60993": {
        "expDef": 0.645,
        "expFrag": 1.12,
        "expSpot": 1.182,
        "expDamage": 842.585,
        "expWinRate": 54.59
    },
    "61185": {
        "expDef": 0.73,
        "expFrag": 0.881,
        "expSpot": 1.219,
        "expDamage": 1817.108,
        "expWinRate": 50.123
    },
    "61217": {
        "expDef": 0.912,
        "expFrag": 1.165,
        "expSpot": 0.998,
        "expDamage": 906.324,
        "expWinRate": 55.246
    },
    "61249": {
        "expDef": 1.011,
        "expFrag": 1.179,
        "expSpot": 0.861,
        "expDamage": 650.984,
        "expWinRate": 54.103
    },
    "61441": {
        "expDef": 1.021,
        "expFrag": 1.23,
        "expSpot": 1.088,
        "expDamage": 488.267,
        "expWinRate": 56.506
    },
    "61457": {
        "expDef": 0.982,
        "expFrag": 0.949,
        "expSpot": 1.275,
        "expDamage": 510.2,
        "expWinRate": 54.803
    },
    "61473": {
        "expDef": 0.622,
        "expFrag": 0.914,
        "expSpot": 1.095,
        "expDamage": 1093.894,
        "expWinRate": 54.525
    },
    "61505": {
        "expDef": 0.848,
        "expFrag": 0.732,
        "expSpot": 3.023,
        "expDamage": 811.834,
        "expWinRate": 52.886
    },
    "61697": {
        "expDef": 0.785,
        "expFrag": 1.02,
        "expSpot": 1.601,
        "expDamage": 1870.775,
        "expWinRate": 53.016
    },
    "61713": {
        "expDef": 1.039,
        "expFrag": 1,
        "expSpot": 0.563,
        "expDamage": 1039.033,
        "expWinRate": 52.418
    },
    "61729": {
        "expDef": 0.475,
        "expFrag": 0.868,
        "expSpot": 1.109,
        "expDamage": 1719.344,
        "expWinRate": 52.192
    },
    "61761": {
        "expDef": 0.749,
        "expFrag": 0.97,
        "expSpot": 0.665,
        "expDamage": 1398.018,
        "expWinRate": 51.455
    },
    "61953": {
        "expDef": 0.758,
        "expFrag": 0.888,
        "expSpot": 1.45,
        "expDamage": 1182.674,
        "expWinRate": 52.08
    },
    "61969": {
        "expDef": 1.29,
        "expFrag": 0.932,
        "expSpot": 0.829,
        "expDamage": 1170.56,
        "expWinRate": 50.306
    },
    "61985": {
        "expDef": 0.562,
        "expFrag": 0.96,
        "expSpot": 1.167,
        "expDamage": 1511.597,
        "expWinRate": 53.269
    },
    "62001": {
        "expDef": 0.666,
        "expFrag": 0.679,
        "expSpot": 2.588,
        "expDamage": 842.127,
        "expWinRate": 51.475
    },
    "62017": {
        "expDef": 0.577,
        "expFrag": 0.776,
        "expSpot": 1.003,
        "expDamage": 1276.144,
        "expWinRate": 52.476
    },
    "62209": {
        "expDef": 0.794,
        "expFrag": 0.836,
        "expSpot": 0.713,
        "expDamage": 1226.187,
        "expWinRate": 55.337
    },
    "62241": {
        "expDef": 0.645,
        "expFrag": 0.872,
        "expSpot": 1.296,
        "expDamage": 1263.476,
        "expWinRate": 52.094
    },
    "62273": {
        "expDef": 0.592,
        "expFrag": 1.057,
        "expSpot": 0.727,
        "expDamage": 1473.704,
        "expWinRate": 52.58
    },
    "62481": {
        "expDef": 0.592,
        "expFrag": 1.02,
        "expSpot": 0.518,
        "expDamage": 1454.004,
        "expWinRate": 51.611
    },
    "62497": {
        "expDef": 0.867,
        "expFrag": 0.946,
        "expSpot": 1.04,
        "expDamage": 991.256,
        "expWinRate": 54.506
    },
    "62529": {
        "expDef": 0.687,
        "expFrag": 0.984,
        "expSpot": 1.054,
        "expDamage": 1337.901,
        "expWinRate": 51.438
    },
    "62737": {
        "expDef": 0.673,
        "expFrag": 0.854,
        "expSpot": 0.676,
        "expDamage": 1311.689,
        "expWinRate": 53.739
    },
    "62753": {
        "expDef": 0.324,
        "expFrag": 0.961,
        "expSpot": 1.387,
        "expDamage": 1796.342,
        "expWinRate": 55.303
    },
    "62785": {
        "expDef": 0.55,
        "expFrag": 0.769,
        "expSpot": 1.013,
        "expDamage": 1271.699,
        "expWinRate": 52.624
    },
    "62977": {
        "expDef": 0.72,
        "expFrag": 0.901,
        "expSpot": 1.529,
        "expDamage": 1226.383,
        "expWinRate": 52.233
    },
    "62993": {
        "expDef": 0.845,
        "expFrag": 0.941,
        "expSpot": 1.072,
        "expDamage": 1087.966,
        "expWinRate": 54.393
    },
    "63041": {
        "expDef": 0.647,
        "expFrag": 0.844,
        "expSpot": 0.835,
        "expDamage": 1237.794,
        "expWinRate": 50.988
    },
    "63233": {
        "expDef": 0.636,
        "expFrag": 0.779,
        "expSpot": 0.878,
        "expDamage": 1253.994,
        "expWinRate": 52.785
    },
    "63249": {
        "expDef": 1.059,
        "expFrag": 0.996,
        "expSpot": 1.081,
        "expDamage": 541.218,
        "expWinRate": 54.652
    },
    "63281": {
        "expDef": 0.682,
        "expFrag": 1.059,
        "expSpot": 0.792,
        "expDamage": 1417.263,
        "expWinRate": 52.462
    },
    "63297": {
        "expDef": 0.795,
        "expFrag": 0.79,
        "expSpot": 2.464,
        "expDamage": 726.387,
        "expWinRate": 52.222
    },
    "63505": {
        "expDef": 1.453,
        "expFrag": 0.823,
        "expSpot": 1.092,
        "expDamage": 253.754,
        "expWinRate": 56.316
    },
    "63537": {
        "expDef": 0.679,
        "expFrag": 0.95,
        "expSpot": 1.255,
        "expDamage": 1858.498,
        "expWinRate": 50.354
    },
    "63553": {
        "expDef": 0.966,
        "expFrag": 0.809,
        "expSpot": 1.408,
        "expDamage": 1102.852,
        "expWinRate": 50.706
    },
    "63761": {
        "expDef": 0.917,
        "expFrag": 0.859,
        "expSpot": 1.249,
        "expDamage": 1182.411,
        "expWinRate": 52.074
    },
    "63793": {
        "expDef": 0.895,
        "expFrag": 0.805,
        "expSpot": 1.282,
        "expDamage": 1063.199,
        "expWinRate": 51.963
    },
    "63809": {
        "expDef": 0.814,
        "expFrag": 0.907,
        "expSpot": 2.812,
        "expDamage": 800.084,
        "expWinRate": 53.371
    },
    "64017": {
        "expDef": 0.588,
        "expFrag": 0.649,
        "expSpot": 2.606,
        "expDamage": 833.437,
        "expWinRate": 51.058
    },
    "64049": {
        "expDef": 0.735,
        "expFrag": 0.889,
        "expSpot": 1.345,
        "expDamage": 1143.613,
        "expWinRate": 50.762
    },
    "64065": {
        "expDef": 1.037,
        "expFrag": 0.893,
        "expSpot": 1.337,
        "expDamage": 1199.767,
        "expWinRate": 50.9
    },
    "64273": {
        "expDef": 0.894,
        "expFrag": 0.806,
        "expSpot": 1.25,
        "expDamage": 1123.509,
        "expWinRate": 51.796
    },
    "64561": {
        "expDef": 0.614,
        "expFrag": 0.885,
        "expSpot": 1.328,
        "expDamage": 1264.013,
        "expWinRate": 52.926
    },
    "64769": {
        "expDef": 0.475,
        "expFrag": 1.132,
        "expSpot": 0.746,
        "expDamage": 883.241,
        "expWinRate": 54.894
    },
    "64817": {
        "expDef": 0.768,
        "expFrag": 0.791,
        "expSpot": 2.644,
        "expDamage": 582.526,
        "expWinRate": 52.493
    },
    "65073": {
        "expDef": 0.504,
        "expFrag": 0.867,
        "expSpot": 1.368,
        "expDamage": 1250.615,
        "expWinRate": 52.259
    }
}

export default WN8;