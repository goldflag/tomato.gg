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
        "expDamage": 487.578,
        "expWinRate": 54.946
    },
    "33": {
        "expDef": 1.192,
        "expFrag": 1.237,
        "expSpot": 1.543,
        "expDamage": 600.208,
        "expWinRate": 56.074
    },
    "49": {
        "expDef": 0.905,
        "expFrag": 0.886,
        "expSpot": 1.588,
        "expDamage": 1111.267,
        "expWinRate": 51.755
    },
    "81": {
        "expDef": 1.268,
        "expFrag": 1.682,
        "expSpot": 0.919,
        "expDamage": 219.33,
        "expWinRate": 57.653
    },
    "113": {
        "expDef": 1.113,
        "expFrag": 1.605,
        "expSpot": 0.845,
        "expDamage": 214.104,
        "expWinRate": 58.529
    },
    "129": {
        "expDef": 1.165,
        "expFrag": 1.509,
        "expSpot": 1.334,
        "expDamage": 205.222,
        "expWinRate": 58.811
    },
    "145": {
        "expDef": 0.781,
        "expFrag": 0.979,
        "expSpot": 1.329,
        "expDamage": 768.686,
        "expWinRate": 54.664
    },
    "161": {
        "expDef": 1.519,
        "expFrag": 1.69,
        "expSpot": 1.015,
        "expDamage": 217.36,
        "expWinRate": 58.273
    },
    "257": {
        "expDef": 1.259,
        "expFrag": 1.117,
        "expSpot": 0.535,
        "expDamage": 580.737,
        "expWinRate": 54.396
    },
    "273": {
        "expDef": 1.276,
        "expFrag": 1.01,
        "expSpot": 0.074,
        "expDamage": 922.623,
        "expWinRate": 51.378
    },
    "289": {
        "expDef": 1.509,
        "expFrag": 1.072,
        "expSpot": 2.177,
        "expDamage": 270.201,
        "expWinRate": 57.04
    },
    "305": {
        "expDef": 0.685,
        "expFrag": 0.683,
        "expSpot": 2.516,
        "expDamage": 669.901,
        "expWinRate": 51.854
    },
    "321": {
        "expDef": 1.636,
        "expFrag": 1.216,
        "expSpot": 0.816,
        "expDamage": 298.273,
        "expWinRate": 58.396
    },
    "337": {
        "expDef": 1.216,
        "expFrag": 1.406,
        "expSpot": 0.931,
        "expDamage": 245.938,
        "expWinRate": 56.775
    },
    "353": {
        "expDef": 1.469,
        "expFrag": 1.371,
        "expSpot": 1.195,
        "expDamage": 230.514,
        "expWinRate": 58.014
    },
    "369": {
        "expDef": 1.475,
        "expFrag": 1.218,
        "expSpot": 1.383,
        "expDamage": 228.881,
        "expWinRate": 56.727
    },
    "385": {
        "expDef": 1.26,
        "expFrag": 1.326,
        "expSpot": 1.328,
        "expDamage": 243.977,
        "expWinRate": 57.417
    },
    "401": {
        "expDef": 1.394,
        "expFrag": 1.038,
        "expSpot": 1.069,
        "expDamage": 211.011,
        "expWinRate": 57.035
    },
    "417": {
        "expDef": 1.682,
        "expFrag": 1.282,
        "expSpot": 1.403,
        "expDamage": 241.522,
        "expWinRate": 57.675
    },
    "513": {
        "expDef": 0.816,
        "expFrag": 0.976,
        "expSpot": 1.007,
        "expDamage": 1034.034,
        "expWinRate": 53.404
    },
    "529": {
        "expDef": 1.018,
        "expFrag": 0.937,
        "expSpot": 0.981,
        "expDamage": 1071.515,
        "expWinRate": 53.577
    },
    "545": {
        "expDef": 1.402,
        "expFrag": 1.55,
        "expSpot": 1.855,
        "expDamage": 199.374,
        "expWinRate": 58.067
    },
    "561": {
        "expDef": 0.696,
        "expFrag": 0.962,
        "expSpot": 1.447,
        "expDamage": 1284.997,
        "expWinRate": 52.022
    },
    "577": {
        "expDef": 1.887,
        "expFrag": 1.48,
        "expSpot": 1.217,
        "expDamage": 202.23,
        "expWinRate": 57.895
    },
    "593": {
        "expDef": 1.427,
        "expFrag": 1.365,
        "expSpot": 2.101,
        "expDamage": 243.297,
        "expWinRate": 58.195
    },
    "609": {
        "expDef": 1.736,
        "expFrag": 1.555,
        "expSpot": 1.11,
        "expDamage": 196.49,
        "expWinRate": 57.757
    },
    "625": {
        "expDef": 1.479,
        "expFrag": 0.959,
        "expSpot": 1.066,
        "expDamage": 282.917,
        "expWinRate": 56.608
    },
    "641": {
        "expDef": 1.524,
        "expFrag": 1.169,
        "expSpot": 1.361,
        "expDamage": 322.83,
        "expWinRate": 56.744
    },
    "673": {
        "expDef": 1.521,
        "expFrag": 1.492,
        "expSpot": 0.967,
        "expDamage": 275.26,
        "expWinRate": 59.023
    },
    "769": {
        "expDef": 1.284,
        "expFrag": 0.984,
        "expSpot": 1.938,
        "expDamage": 259.988,
        "expWinRate": 56.065
    },
    "785": {
        "expDef": 1.76,
        "expFrag": 1.355,
        "expSpot": 1.492,
        "expDamage": 233.868,
        "expWinRate": 57.243
    },
    "801": {
        "expDef": 0.891,
        "expFrag": 0.965,
        "expSpot": 1.018,
        "expDamage": 798.313,
        "expWinRate": 53.714
    },
    "817": {
        "expDef": 0.692,
        "expFrag": 0.912,
        "expSpot": 1.302,
        "expDamage": 1245.701,
        "expWinRate": 52.328
    },
    "833": {
        "expDef": 1.355,
        "expFrag": 1.337,
        "expSpot": 0.119,
        "expDamage": 220.826,
        "expWinRate": 56.499
    },
    "849": {
        "expDef": 1.575,
        "expFrag": 1.116,
        "expSpot": 0.771,
        "expDamage": 440.381,
        "expWinRate": 55.977
    },
    "865": {
        "expDef": 1.411,
        "expFrag": 1.349,
        "expSpot": 1.454,
        "expDamage": 236.34,
        "expWinRate": 56.873
    },
    "881": {
        "expDef": 1.325,
        "expFrag": 0.958,
        "expSpot": 1.164,
        "expDamage": 370.062,
        "expWinRate": 55.925
    },
    "897": {
        "expDef": 1.099,
        "expFrag": 0.991,
        "expSpot": 1.27,
        "expDamage": 383.346,
        "expWinRate": 55.46
    },
    "913": {
        "expDef": 0.449,
        "expFrag": 0.884,
        "expSpot": 1.012,
        "expDamage": 1372.823,
        "expWinRate": 53.384
    },
    "929": {
        "expDef": 1.442,
        "expFrag": 1.328,
        "expSpot": 1.104,
        "expDamage": 359.625,
        "expWinRate": 56.854
    },
    "1025": {
        "expDef": 1.428,
        "expFrag": 1.312,
        "expSpot": 1.684,
        "expDamage": 230.432,
        "expWinRate": 56.805
    },
    "1041": {
        "expDef": 1.378,
        "expFrag": 1.109,
        "expSpot": 0.698,
        "expDamage": 582.68,
        "expWinRate": 54.196
    },
    "1057": {
        "expDef": 0.985,
        "expFrag": 1.056,
        "expSpot": 1.363,
        "expDamage": 523.29,
        "expWinRate": 54.834
    },
    "1073": {
        "expDef": 0.963,
        "expFrag": 0.908,
        "expSpot": 1.462,
        "expDamage": 914.173,
        "expWinRate": 54.345
    },
    "1089": {
        "expDef": 1.447,
        "expFrag": 1.143,
        "expSpot": 1.099,
        "expDamage": 382.62,
        "expWinRate": 55.847
    },
    "1105": {
        "expDef": 0.976,
        "expFrag": 0.986,
        "expSpot": 1.85,
        "expDamage": 700.289,
        "expWinRate": 54.45
    },
    "1121": {
        "expDef": 1.077,
        "expFrag": 0.89,
        "expSpot": 1.006,
        "expDamage": 911.471,
        "expWinRate": 51.483
    },
    "1137": {
        "expDef": 1.093,
        "expFrag": 0.85,
        "expSpot": 1.414,
        "expDamage": 486.717,
        "expWinRate": 54.403
    },
    "1153": {
        "expDef": 0.995,
        "expFrag": 0.908,
        "expSpot": 1.167,
        "expDamage": 501.713,
        "expWinRate": 54.016
    },
    "1169": {
        "expDef": 1.332,
        "expFrag": 1.525,
        "expSpot": 1.529,
        "expDamage": 214.502,
        "expWinRate": 58.843
    },
    "1185": {
        "expDef": 0.912,
        "expFrag": 1.127,
        "expSpot": 1.047,
        "expDamage": 426.8,
        "expWinRate": 55.605
    },
    "1297": {
        "expDef": 1.169,
        "expFrag": 0.879,
        "expSpot": 1.242,
        "expDamage": 899.749,
        "expWinRate": 53.853
    },
    "1313": {
        "expDef": 1.086,
        "expFrag": 0.971,
        "expSpot": 1.415,
        "expDamage": 694.661,
        "expWinRate": 54.902
    },
    "1329": {
        "expDef": 1.738,
        "expFrag": 1.673,
        "expSpot": 1.272,
        "expDamage": 221.213,
        "expWinRate": 56.549
    },
    "1345": {
        "expDef": 2.006,
        "expFrag": 1.389,
        "expSpot": 1.052,
        "expDamage": 238.66,
        "expWinRate": 58.564
    },
    "1361": {
        "expDef": 1.529,
        "expFrag": 1.124,
        "expSpot": 1.755,
        "expDamage": 295.655,
        "expWinRate": 57.304
    },
    "1377": {
        "expDef": 1.082,
        "expFrag": 0.915,
        "expSpot": 1.182,
        "expDamage": 487.745,
        "expWinRate": 54.453
    },
    "1393": {
        "expDef": 1.016,
        "expFrag": 0.917,
        "expSpot": 1.426,
        "expDamage": 715.963,
        "expWinRate": 53.435
    },
    "1409": {
        "expDef": 0.997,
        "expFrag": 0.939,
        "expSpot": 1.086,
        "expDamage": 743.934,
        "expWinRate": 53.591
    },
    "1425": {
        "expDef": 1.377,
        "expFrag": 1.453,
        "expSpot": 1.021,
        "expDamage": 274.244,
        "expWinRate": 58.776
    },
    "1441": {
        "expDef": 0.835,
        "expFrag": 0.9,
        "expSpot": 1.066,
        "expDamage": 491.652,
        "expWinRate": 54.919
    },
    "1537": {
        "expDef": 0.995,
        "expFrag": 1.013,
        "expSpot": 1.204,
        "expDamage": 395.421,
        "expWinRate": 55.573
    },
    "1553": {
        "expDef": 1.246,
        "expFrag": 1.053,
        "expSpot": 0.725,
        "expDamage": 750.43,
        "expWinRate": 53.57
    },
    "1569": {
        "expDef": 1.012,
        "expFrag": 0.92,
        "expSpot": 1.576,
        "expDamage": 944.64,
        "expWinRate": 54.307
    },
    "1585": {
        "expDef": 0.953,
        "expFrag": 0.816,
        "expSpot": 1.501,
        "expDamage": 1044.119,
        "expWinRate": 52.25
    },
    "1601": {
        "expDef": 2.119,
        "expFrag": 1.34,
        "expSpot": 0.947,
        "expDamage": 234.064,
        "expWinRate": 57.442
    },
    "1617": {
        "expDef": 1.103,
        "expFrag": 1.02,
        "expSpot": 0.863,
        "expDamage": 382.047,
        "expWinRate": 55.033
    },
    "1633": {
        "expDef": 1.16,
        "expFrag": 0.988,
        "expSpot": 1.232,
        "expDamage": 373.573,
        "expWinRate": 55.971
    },
    "1649": {
        "expDef": 0.853,
        "expFrag": 0.871,
        "expSpot": 1.221,
        "expDamage": 917.866,
        "expWinRate": 53.069
    },
    "1665": {
        "expDef": 0.755,
        "expFrag": 0.89,
        "expSpot": 1.293,
        "expDamage": 925.904,
        "expWinRate": 52.935
    },
    "1681": {
        "expDef": 1.182,
        "expFrag": 1.072,
        "expSpot": 1.203,
        "expDamage": 304.028,
        "expWinRate": 55.578
    },
    "1697": {
        "expDef": 0.684,
        "expFrag": 0.985,
        "expSpot": 1.012,
        "expDamage": 749.165,
        "expWinRate": 53.664
    },
    "1793": {
        "expDef": 0.779,
        "expFrag": 0.913,
        "expSpot": 0.042,
        "expDamage": 1148.267,
        "expWinRate": 50.613
    },
    "1809": {
        "expDef": 1.204,
        "expFrag": 1.417,
        "expSpot": 0.607,
        "expDamage": 457.991,
        "expWinRate": 56.528
    },
    "1825": {
        "expDef": 1.468,
        "expFrag": 1.491,
        "expSpot": 2.452,
        "expDamage": 254.707,
        "expWinRate": 57.343
    },
    "1841": {
        "expDef": 0.715,
        "expFrag": 0.874,
        "expSpot": 1.365,
        "expDamage": 1432.941,
        "expWinRate": 51.505
    },
    "1889": {
        "expDef": 1.115,
        "expFrag": 0.95,
        "expSpot": 1.059,
        "expDamage": 726.479,
        "expWinRate": 52.5
    },
    "1905": {
        "expDef": 0.918,
        "expFrag": 0.786,
        "expSpot": 1.042,
        "expDamage": 1072.052,
        "expWinRate": 51.788
    },
    "1921": {
        "expDef": 0.667,
        "expFrag": 0.95,
        "expSpot": 0.824,
        "expDamage": 1348.721,
        "expWinRate": 52.253
    },
    "1937": {
        "expDef": 0.924,
        "expFrag": 0.797,
        "expSpot": 1.473,
        "expDamage": 334.825,
        "expWinRate": 54.583
    },
    "1953": {
        "expDef": 0.697,
        "expFrag": 0.941,
        "expSpot": 1.305,
        "expDamage": 940.481,
        "expWinRate": 53.482
    },
    "2049": {
        "expDef": 1.081,
        "expFrag": 0.818,
        "expSpot": 2.304,
        "expDamage": 314.826,
        "expWinRate": 55.822
    },
    "2065": {
        "expDef": 1.602,
        "expFrag": 1.386,
        "expSpot": 1.689,
        "expDamage": 239.95,
        "expWinRate": 57.387
    },
    "2081": {
        "expDef": 1.861,
        "expFrag": 1.246,
        "expSpot": 0.388,
        "expDamage": 230.027,
        "expWinRate": 54.392
    },
    "2097": {
        "expDef": 0.523,
        "expFrag": 0.855,
        "expSpot": 1.231,
        "expDamage": 1593.502,
        "expWinRate": 51.458
    },
    "2113": {
        "expDef": 1.303,
        "expFrag": 1.328,
        "expSpot": 0.11,
        "expDamage": 667.387,
        "expWinRate": 54.62
    },
    "2129": {
        "expDef": 1.2,
        "expFrag": 0.942,
        "expSpot": 1.599,
        "expDamage": 459.952,
        "expWinRate": 55.228
    },
    "2145": {
        "expDef": 1.349,
        "expFrag": 1.267,
        "expSpot": 1.187,
        "expDamage": 329.427,
        "expWinRate": 57.464
    },
    "2161": {
        "expDef": 0.737,
        "expFrag": 1.024,
        "expSpot": 1.116,
        "expDamage": 1657.105,
        "expWinRate": 51.102
    },
    "2177": {
        "expDef": 0.545,
        "expFrag": 0.962,
        "expSpot": 0.925,
        "expDamage": 1643.581,
        "expWinRate": 51.712
    },
    "2193": {
        "expDef": 0.709,
        "expFrag": 0.888,
        "expSpot": 1.186,
        "expDamage": 518.389,
        "expWinRate": 54.885
    },
    "2209": {
        "expDef": 0.638,
        "expFrag": 0.888,
        "expSpot": 1.088,
        "expDamage": 1219.743,
        "expWinRate": 50.915
    },
    "2305": {
        "expDef": 0.876,
        "expFrag": 1.015,
        "expSpot": 0.52,
        "expDamage": 1001.883,
        "expWinRate": 52.636
    },
    "2321": {
        "expDef": 1.093,
        "expFrag": 0.997,
        "expSpot": 1.132,
        "expDamage": 761.945,
        "expWinRate": 54.69
    },
    "2353": {
        "expDef": 1.496,
        "expFrag": 1.431,
        "expSpot": 1.264,
        "expDamage": 247.392,
        "expWinRate": 57.511
    },
    "2369": {
        "expDef": 1.593,
        "expFrag": 1.592,
        "expSpot": 1.039,
        "expDamage": 404.466,
        "expWinRate": 57.975
    },
    "2385": {
        "expDef": 1.392,
        "expFrag": 1.176,
        "expSpot": 1.003,
        "expDamage": 305.364,
        "expWinRate": 57.102
    },
    "2401": {
        "expDef": 1.444,
        "expFrag": 1.144,
        "expSpot": 1.564,
        "expDamage": 289.985,
        "expWinRate": 56.977
    },
    "2417": {
        "expDef": 0.628,
        "expFrag": 1.048,
        "expSpot": 1.308,
        "expDamage": 1899.092,
        "expWinRate": 49.05
    },
    "2433": {
        "expDef": 0.487,
        "expFrag": 0.94,
        "expSpot": 1.137,
        "expDamage": 1930.227,
        "expWinRate": 49.727
    },
    "2449": {
        "expDef": 0.714,
        "expFrag": 0.928,
        "expSpot": 0.769,
        "expDamage": 740.62,
        "expWinRate": 53.58
    },
    "2465": {
        "expDef": 0.657,
        "expFrag": 1.069,
        "expSpot": 1.087,
        "expDamage": 1707.57,
        "expWinRate": 50.728
    },
    "2561": {
        "expDef": 0.964,
        "expFrag": 0.934,
        "expSpot": 1.333,
        "expDamage": 708.102,
        "expWinRate": 54.002
    },
    "2577": {
        "expDef": 1.093,
        "expFrag": 1.014,
        "expSpot": 1.197,
        "expDamage": 646.356,
        "expWinRate": 54.779
    },
    "2593": {
        "expDef": 0.575,
        "expFrag": 0.973,
        "expSpot": 0.677,
        "expDamage": 1713.969,
        "expWinRate": 50.633
    },
    "2625": {
        "expDef": 0.848,
        "expFrag": 0.889,
        "expSpot": 0.907,
        "expDamage": 785.919,
        "expWinRate": 53.446
    },
    "2657": {
        "expDef": 1.008,
        "expFrag": 0.819,
        "expSpot": 1.168,
        "expDamage": 1123.36,
        "expWinRate": 51.134
    },
    "2689": {
        "expDef": 1.43,
        "expFrag": 1.266,
        "expSpot": 0.567,
        "expDamage": 304.279,
        "expWinRate": 53.809
    },
    "2705": {
        "expDef": 0.627,
        "expFrag": 0.968,
        "expSpot": 1.03,
        "expDamage": 1077.712,
        "expWinRate": 53.551
    },
    "2721": {
        "expDef": 0.613,
        "expFrag": 1.16,
        "expSpot": 1.109,
        "expDamage": 2059.825,
        "expWinRate": 49.775
    },
    "2817": {
        "expDef": 0.767,
        "expFrag": 1.027,
        "expSpot": 1.03,
        "expDamage": 813.087,
        "expWinRate": 53.798
    },
    "2833": {
        "expDef": 1.313,
        "expFrag": 1.17,
        "expSpot": 0.169,
        "expDamage": 347.345,
        "expWinRate": 57.743
    },
    "2849": {
        "expDef": 0.702,
        "expFrag": 0.789,
        "expSpot": 0.817,
        "expDamage": 1252.574,
        "expWinRate": 50.819
    },
    "2865": {
        "expDef": 0.779,
        "expFrag": 0.837,
        "expSpot": 1.08,
        "expDamage": 1227.458,
        "expWinRate": 52.988
    },
    "2881": {
        "expDef": 1.184,
        "expFrag": 0.815,
        "expSpot": 0.808,
        "expDamage": 283.407,
        "expWinRate": 56.253
    },
    "2897": {
        "expDef": 1.316,
        "expFrag": 1.117,
        "expSpot": 0.862,
        "expDamage": 625.28,
        "expWinRate": 55.731
    },
    "2913": {
        "expDef": 1.158,
        "expFrag": 0.975,
        "expSpot": 1.676,
        "expDamage": 364.074,
        "expWinRate": 55.489
    },
    "2945": {
        "expDef": 1.491,
        "expFrag": 1.405,
        "expSpot": 0.596,
        "expDamage": 371.677,
        "expWinRate": 57.74
    },
    "2961": {
        "expDef": 0.509,
        "expFrag": 0.842,
        "expSpot": 0.968,
        "expDamage": 1323.175,
        "expWinRate": 51.769
    },
    "3073": {
        "expDef": 1.21,
        "expFrag": 1.084,
        "expSpot": 1.353,
        "expDamage": 276.513,
        "expWinRate": 56.224
    },
    "3089": {
        "expDef": 1.577,
        "expFrag": 1.631,
        "expSpot": 1.802,
        "expDamage": 221.55,
        "expWinRate": 57.814
    },
    "3105": {
        "expDef": 1.048,
        "expFrag": 1.031,
        "expSpot": 0.838,
        "expDamage": 363.637,
        "expWinRate": 55.341
    },
    "3121": {
        "expDef": 1.087,
        "expFrag": 0.905,
        "expSpot": 2.23,
        "expDamage": 333.889,
        "expWinRate": 55.267
    },
    "3137": {
        "expDef": 0.956,
        "expFrag": 0.998,
        "expSpot": 0.895,
        "expDamage": 1314.391,
        "expWinRate": 51.43
    },
    "3153": {
        "expDef": 1.215,
        "expFrag": 0.935,
        "expSpot": 0.832,
        "expDamage": 1012.953,
        "expWinRate": 55.008
    },
    "3169": {
        "expDef": 1.521,
        "expFrag": 1.221,
        "expSpot": 1.248,
        "expDamage": 220.406,
        "expWinRate": 56.569
    },
    "3201": {
        "expDef": 1.425,
        "expFrag": 1.195,
        "expSpot": 0.633,
        "expDamage": 439.871,
        "expWinRate": 55.767
    },
    "3217": {
        "expDef": 0.433,
        "expFrag": 0.893,
        "expSpot": 0.944,
        "expDamage": 1680.457,
        "expWinRate": 52.322
    },
    "3329": {
        "expDef": 1.644,
        "expFrag": 1.643,
        "expSpot": 1.21,
        "expDamage": 218.015,
        "expWinRate": 57.405
    },
    "3345": {
        "expDef": 1.476,
        "expFrag": 1.323,
        "expSpot": 1.287,
        "expDamage": 330.411,
        "expWinRate": 58.335
    },
    "3361": {
        "expDef": 1.187,
        "expFrag": 1.14,
        "expSpot": 1.129,
        "expDamage": 617.205,
        "expWinRate": 55.579
    },
    "3377": {
        "expDef": 0.694,
        "expFrag": 0.697,
        "expSpot": 2.304,
        "expDamage": 709.397,
        "expWinRate": 52.043
    },
    "3393": {
        "expDef": 1.866,
        "expFrag": 1.078,
        "expSpot": 0.138,
        "expDamage": 390.431,
        "expWinRate": 52.22
    },
    "3409": {
        "expDef": 1.64,
        "expFrag": 1.1,
        "expSpot": 0.127,
        "expDamage": 286.875,
        "expWinRate": 56.043
    },
    "3425": {
        "expDef": 0.777,
        "expFrag": 0.914,
        "expSpot": 1.118,
        "expDamage": 1542.516,
        "expWinRate": 50.421
    },
    "3457": {
        "expDef": 1.058,
        "expFrag": 1.073,
        "expSpot": 0.824,
        "expDamage": 527.93,
        "expWinRate": 55.069
    },
    "3473": {
        "expDef": 0.35,
        "expFrag": 0.945,
        "expSpot": 0.94,
        "expDamage": 2101.121,
        "expWinRate": 50.945
    },
    "3585": {
        "expDef": 1.034,
        "expFrag": 1.082,
        "expSpot": 0.726,
        "expDamage": 787.765,
        "expWinRate": 53.271
    },
    "3601": {
        "expDef": 1.688,
        "expFrag": 1.752,
        "expSpot": 0.898,
        "expDamage": 298.361,
        "expWinRate": 58.323
    },
    "3617": {
        "expDef": 1.723,
        "expFrag": 0.871,
        "expSpot": 0.115,
        "expDamage": 474.171,
        "expWinRate": 49.628
    },
    "3633": {
        "expDef": 0.784,
        "expFrag": 0.993,
        "expSpot": 1.072,
        "expDamage": 1070.999,
        "expWinRate": 54.266
    },
    "3649": {
        "expDef": 0.773,
        "expFrag": 1.071,
        "expSpot": 1.693,
        "expDamage": 1784.258,
        "expWinRate": 48.73
    },
    "3665": {
        "expDef": 1.053,
        "expFrag": 0.947,
        "expSpot": 1.011,
        "expDamage": 740.488,
        "expWinRate": 52.866
    },
    "3681": {
        "expDef": 0.694,
        "expFrag": 0.973,
        "expSpot": 1.304,
        "expDamage": 1860.016,
        "expWinRate": 49.875
    },
    "3713": {
        "expDef": 1.029,
        "expFrag": 0.957,
        "expSpot": 0.603,
        "expDamage": 772.654,
        "expWinRate": 53.075
    },
    "3729": {
        "expDef": 0.704,
        "expFrag": 0.938,
        "expSpot": 1.389,
        "expDamage": 699.888,
        "expWinRate": 53.686
    },
    "3841": {
        "expDef": 1.418,
        "expFrag": 1.244,
        "expSpot": 0.121,
        "expDamage": 214.678,
        "expWinRate": 54.632
    },
    "3857": {
        "expDef": 1.035,
        "expFrag": 1,
        "expSpot": 0.681,
        "expDamage": 1042.39,
        "expWinRate": 53.018
    },
    "3873": {
        "expDef": 0.96,
        "expFrag": 0.993,
        "expSpot": 1.065,
        "expDamage": 1136.356,
        "expWinRate": 53.971
    },
    "3889": {
        "expDef": 0.637,
        "expFrag": 0.662,
        "expSpot": 2.482,
        "expDamage": 849.942,
        "expWinRate": 51.716
    },
    "3905": {
        "expDef": 0.767,
        "expFrag": 0.959,
        "expSpot": 0.85,
        "expDamage": 1588.954,
        "expWinRate": 50.311
    },
    "3921": {
        "expDef": 0.803,
        "expFrag": 0.83,
        "expSpot": 1.04,
        "expDamage": 1273.162,
        "expWinRate": 52.594
    },
    "3937": {
        "expDef": 0.436,
        "expFrag": 0.901,
        "expSpot": 0.794,
        "expDamage": 2057.436,
        "expWinRate": 51.069
    },
    "3969": {
        "expDef": 1.091,
        "expFrag": 0.941,
        "expSpot": 0.58,
        "expDamage": 982.003,
        "expWinRate": 52.277
    },
    "3985": {
        "expDef": 0.181,
        "expFrag": 1.086,
        "expSpot": 0.861,
        "expDamage": 921.398,
        "expWinRate": 54.021
    },
    "4097": {
        "expDef": 0.746,
        "expFrag": 0.907,
        "expSpot": 0.02,
        "expDamage": 1290.528,
        "expWinRate": 50.997
    },
    "4113": {
        "expDef": 1.027,
        "expFrag": 0.945,
        "expSpot": 1.545,
        "expDamage": 890.514,
        "expWinRate": 53.501
    },
    "4129": {
        "expDef": 1.406,
        "expFrag": 1.002,
        "expSpot": 0.078,
        "expDamage": 837.547,
        "expWinRate": 51.34
    },
    "4145": {
        "expDef": 0.652,
        "expFrag": 0.921,
        "expSpot": 1.273,
        "expDamage": 1792.916,
        "expWinRate": 49.268
    },
    "4161": {
        "expDef": 2.212,
        "expFrag": 1.113,
        "expSpot": 0.098,
        "expDamage": 623.311,
        "expWinRate": 53.262
    },
    "4193": {
        "expDef": 0.474,
        "expFrag": 0.807,
        "expSpot": 0.694,
        "expDamage": 1534.453,
        "expWinRate": 51.758
    },
    "4225": {
        "expDef": 0.899,
        "expFrag": 0.921,
        "expSpot": 0.577,
        "expDamage": 1361.359,
        "expWinRate": 50.566
    },
    "4241": {
        "expDef": 0.636,
        "expFrag": 0.981,
        "expSpot": 1.291,
        "expDamage": 1078.245,
        "expWinRate": 52.542
    },
    "4353": {
        "expDef": 0.866,
        "expFrag": 0.82,
        "expSpot": 1.426,
        "expDamage": 1067.175,
        "expWinRate": 52.113
    },
    "4369": {
        "expDef": 1.128,
        "expFrag": 1.032,
        "expSpot": 1.834,
        "expDamage": 361.326,
        "expWinRate": 57.538
    },
    "4385": {
        "expDef": 0.933,
        "expFrag": 0.861,
        "expSpot": 1.156,
        "expDamage": 1238.931,
        "expWinRate": 52.408
    },
    "4401": {
        "expDef": 1.439,
        "expFrag": 1.273,
        "expSpot": 1.199,
        "expDamage": 323.204,
        "expWinRate": 57.544
    },
    "4417": {
        "expDef": 1.02,
        "expFrag": 0.999,
        "expSpot": 1.142,
        "expDamage": 489.311,
        "expWinRate": 54.316
    },
    "4433": {
        "expDef": 0.604,
        "expFrag": 0.859,
        "expSpot": 1.022,
        "expDamage": 1650.062,
        "expWinRate": 51.465
    },
    "4449": {
        "expDef": 1.101,
        "expFrag": 1.082,
        "expSpot": 0.718,
        "expDamage": 375.872,
        "expWinRate": 54.353
    },
    "4481": {
        "expDef": 0.887,
        "expFrag": 0.989,
        "expSpot": 0.573,
        "expDamage": 1735.669,
        "expWinRate": 50.678
    },
    "4497": {
        "expDef": 0.869,
        "expFrag": 0.776,
        "expSpot": 0.952,
        "expDamage": 1205.719,
        "expWinRate": 49.584
    },
    "4609": {
        "expDef": 1.818,
        "expFrag": 1.382,
        "expSpot": 1.08,
        "expDamage": 239.726,
        "expWinRate": 57.279
    },
    "4625": {
        "expDef": 1.623,
        "expFrag": 1.013,
        "expSpot": 0.165,
        "expDamage": 405.568,
        "expWinRate": 53.945
    },
    "4641": {
        "expDef": 1.568,
        "expFrag": 1.009,
        "expSpot": 0.126,
        "expDamage": 391.545,
        "expWinRate": 53.637
    },
    "4657": {
        "expDef": 1.137,
        "expFrag": 0.994,
        "expSpot": 1.376,
        "expDamage": 486.699,
        "expWinRate": 54.246
    },
    "4673": {
        "expDef": 1.462,
        "expFrag": 1.036,
        "expSpot": 0.076,
        "expDamage": 927.565,
        "expWinRate": 52.632
    },
    "4689": {
        "expDef": 1.194,
        "expFrag": 0.981,
        "expSpot": 0.73,
        "expDamage": 766.413,
        "expWinRate": 54.559
    },
    "4705": {
        "expDef": 1.071,
        "expFrag": 1.168,
        "expSpot": 0.725,
        "expDamage": 331.404,
        "expWinRate": 55.111
    },
    "4737": {
        "expDef": 0.84,
        "expFrag": 1.044,
        "expSpot": 0.634,
        "expDamage": 2079.915,
        "expWinRate": 50.451
    },
    "4865": {
        "expDef": 1.418,
        "expFrag": 0.953,
        "expSpot": 0.098,
        "expDamage": 545.803,
        "expWinRate": 50.745
    },
    "4881": {
        "expDef": 1.148,
        "expFrag": 1.193,
        "expSpot": 1.784,
        "expDamage": 304.174,
        "expWinRate": 57.573
    },
    "4897": {
        "expDef": 1.197,
        "expFrag": 1.308,
        "expSpot": 1.41,
        "expDamage": 312.832,
        "expWinRate": 56.995
    },
    "4913": {
        "expDef": 0.751,
        "expFrag": 0.727,
        "expSpot": 2.38,
        "expDamage": 503.258,
        "expWinRate": 52.65
    },
    "4929": {
        "expDef": 0.709,
        "expFrag": 0.758,
        "expSpot": 2.272,
        "expDamage": 981.078,
        "expWinRate": 51.128
    },
    "4945": {
        "expDef": 1.308,
        "expFrag": 0.834,
        "expSpot": 0.78,
        "expDamage": 330.315,
        "expWinRate": 54.89
    },
    "4961": {
        "expDef": 0.633,
        "expFrag": 0.797,
        "expSpot": 0.741,
        "expDamage": 1267.682,
        "expWinRate": 52.619
    },
    "4993": {
        "expDef": 0.641,
        "expFrag": 0.87,
        "expSpot": 1.205,
        "expDamage": 1250.151,
        "expWinRate": 51.588
    },
    "5121": {
        "expDef": 1.774,
        "expFrag": 1.651,
        "expSpot": 0.437,
        "expDamage": 293.429,
        "expWinRate": 58.576
    },
    "5137": {
        "expDef": 0.896,
        "expFrag": 0.833,
        "expSpot": 0.958,
        "expDamage": 1235.104,
        "expWinRate": 51.73
    },
    "5153": {
        "expDef": 1.068,
        "expFrag": 0.85,
        "expSpot": 2.269,
        "expDamage": 295.614,
        "expWinRate": 56.467
    },
    "5169": {
        "expDef": 1.038,
        "expFrag": 0.954,
        "expSpot": 1.467,
        "expDamage": 688.923,
        "expWinRate": 54.086
    },
    "5185": {
        "expDef": 0.803,
        "expFrag": 0.752,
        "expSpot": 2.138,
        "expDamage": 691.755,
        "expWinRate": 52.216
    },
    "5201": {
        "expDef": 1.429,
        "expFrag": 1.434,
        "expSpot": 1.257,
        "expDamage": 256.228,
        "expWinRate": 57.111
    },
    "5217": {
        "expDef": 0.638,
        "expFrag": 0.954,
        "expSpot": 0.971,
        "expDamage": 1103.518,
        "expWinRate": 54.982
    },
    "5249": {
        "expDef": 0.645,
        "expFrag": 0.911,
        "expSpot": 1.144,
        "expDamage": 1570.241,
        "expWinRate": 51.017
    },
    "5265": {
        "expDef": 0.492,
        "expFrag": 1.102,
        "expSpot": 1.48,
        "expDamage": 2175.112,
        "expWinRate": 51.82
    },
    "5377": {
        "expDef": 0.793,
        "expFrag": 0.876,
        "expSpot": 0.997,
        "expDamage": 1273.743,
        "expWinRate": 51.621
    },
    "5393": {
        "expDef": 0.726,
        "expFrag": 0.688,
        "expSpot": 2.28,
        "expDamage": 393.493,
        "expWinRate": 53.887
    },
    "5409": {
        "expDef": 0.926,
        "expFrag": 0.79,
        "expSpot": 1.917,
        "expDamage": 380.496,
        "expWinRate": 53.72
    },
    "5425": {
        "expDef": 0.552,
        "expFrag": 0.864,
        "expSpot": 1.334,
        "expDamage": 1823.787,
        "expWinRate": 49.852
    },
    "5457": {
        "expDef": 1.061,
        "expFrag": 0.927,
        "expSpot": 1.609,
        "expDamage": 879.802,
        "expWinRate": 53.029
    },
    "5473": {
        "expDef": 0.645,
        "expFrag": 1.044,
        "expSpot": 0.796,
        "expDamage": 836.55,
        "expWinRate": 54.344
    },
    "5505": {
        "expDef": 0.584,
        "expFrag": 0.983,
        "expSpot": 1.137,
        "expDamage": 1930.595,
        "expWinRate": 50.25
    },
    "5633": {
        "expDef": 1.177,
        "expFrag": 1.033,
        "expSpot": 0.066,
        "expDamage": 976.212,
        "expWinRate": 51.148
    },
    "5649": {
        "expDef": 1.553,
        "expFrag": 1.069,
        "expSpot": 0.101,
        "expDamage": 632.261,
        "expWinRate": 53.071
    },
    "5665": {
        "expDef": 1.467,
        "expFrag": 1.338,
        "expSpot": 1.541,
        "expDamage": 238.37,
        "expWinRate": 57.616
    },
    "5681": {
        "expDef": 0.603,
        "expFrag": 0.689,
        "expSpot": 2.464,
        "expDamage": 1049.564,
        "expWinRate": 49.908
    },
    "5697": {
        "expDef": 0.868,
        "expFrag": 0.987,
        "expSpot": 1.393,
        "expDamage": 1432.396,
        "expWinRate": 50.808
    },
    "5713": {
        "expDef": 0.793,
        "expFrag": 0.873,
        "expSpot": 1.219,
        "expDamage": 1529.481,
        "expWinRate": 50.892
    },
    "5729": {
        "expDef": 0.841,
        "expFrag": 1.263,
        "expSpot": 1.144,
        "expDamage": 712.402,
        "expWinRate": 54.929
    },
    "5889": {
        "expDef": 0.809,
        "expFrag": 0.988,
        "expSpot": 0.823,
        "expDamage": 1081.024,
        "expWinRate": 53.828
    },
    "5905": {
        "expDef": 1.602,
        "expFrag": 1.001,
        "expSpot": 0.148,
        "expDamage": 359.33,
        "expWinRate": 52.085
    },
    "5921": {
        "expDef": 1.002,
        "expFrag": 0.826,
        "expSpot": 1.389,
        "expDamage": 1118.207,
        "expWinRate": 51.997
    },
    "5937": {
        "expDef": 0.577,
        "expFrag": 0.739,
        "expSpot": 2.627,
        "expDamage": 1318.353,
        "expWinRate": 48.457
    },
    "5953": {
        "expDef": 1.691,
        "expFrag": 1.115,
        "expSpot": 0.911,
        "expDamage": 270.27,
        "expWinRate": 58.263
    },
    "5969": {
        "expDef": 0.91,
        "expFrag": 0.776,
        "expSpot": 1.248,
        "expDamage": 1110.48,
        "expWinRate": 52.534
    },
    "5985": {
        "expDef": 1.177,
        "expFrag": 1.445,
        "expSpot": 1.179,
        "expDamage": 242.684,
        "expWinRate": 57.499
    },
    "6145": {
        "expDef": 0.677,
        "expFrag": 0.874,
        "expSpot": 1.082,
        "expDamage": 1834.089,
        "expWinRate": 49.338
    },
    "6161": {
        "expDef": 1.083,
        "expFrag": 0.894,
        "expSpot": 2.505,
        "expDamage": 350.463,
        "expWinRate": 56.308
    },
    "6177": {
        "expDef": 1.579,
        "expFrag": 1.841,
        "expSpot": 1.059,
        "expDamage": 281.269,
        "expWinRate": 56.792
    },
    "6193": {
        "expDef": 0.475,
        "expFrag": 0.901,
        "expSpot": 1.246,
        "expDamage": 1978.754,
        "expWinRate": 49.138
    },
    "6209": {
        "expDef": 0.681,
        "expFrag": 1,
        "expSpot": 0.947,
        "expDamage": 1915.864,
        "expWinRate": 48.542
    },
    "6225": {
        "expDef": 0.64,
        "expFrag": 0.874,
        "expSpot": 1.048,
        "expDamage": 1854.048,
        "expWinRate": 48.977
    },
    "6401": {
        "expDef": 1.635,
        "expFrag": 1.458,
        "expSpot": 0.788,
        "expDamage": 381.118,
        "expWinRate": 57.33
    },
    "6417": {
        "expDef": 1.021,
        "expFrag": 0.931,
        "expSpot": 1.538,
        "expDamage": 467.676,
        "expWinRate": 54.93
    },
    "6433": {
        "expDef": 1.341,
        "expFrag": 1.457,
        "expSpot": 1.153,
        "expDamage": 361.238,
        "expWinRate": 58.12
    },
    "6449": {
        "expDef": 1.247,
        "expFrag": 1.672,
        "expSpot": 0.463,
        "expDamage": 291.952,
        "expWinRate": 60.363
    },
    "6465": {
        "expDef": 0.696,
        "expFrag": 0.673,
        "expSpot": 1.949,
        "expDamage": 523.143,
        "expWinRate": 52.273
    },
    "6481": {
        "expDef": 1.044,
        "expFrag": 0.889,
        "expSpot": 1.681,
        "expDamage": 326.324,
        "expWinRate": 55.294
    },
    "6657": {
        "expDef": 1.056,
        "expFrag": 0.912,
        "expSpot": 1.424,
        "expDamage": 863.536,
        "expWinRate": 53.929
    },
    "6673": {
        "expDef": 1.532,
        "expFrag": 1.369,
        "expSpot": 0.908,
        "expDamage": 390.156,
        "expWinRate": 58.83
    },
    "6705": {
        "expDef": 1.309,
        "expFrag": 1.534,
        "expSpot": 0.619,
        "expDamage": 380.996,
        "expWinRate": 57.474
    },
    "6721": {
        "expDef": 1.047,
        "expFrag": 1.138,
        "expSpot": 0.862,
        "expDamage": 636.012,
        "expWinRate": 55.349
    },
    "6913": {
        "expDef": 1.397,
        "expFrag": 1.303,
        "expSpot": 0.816,
        "expDamage": 495.862,
        "expWinRate": 56.033
    },
    "6929": {
        "expDef": 0.594,
        "expFrag": 0.892,
        "expSpot": 0.85,
        "expDamage": 1876.948,
        "expWinRate": 51.722
    },
    "6945": {
        "expDef": 1.346,
        "expFrag": 1.121,
        "expSpot": 0.933,
        "expDamage": 577.98,
        "expWinRate": 54.964
    },
    "6961": {
        "expDef": 1.15,
        "expFrag": 1.41,
        "expSpot": 0.665,
        "expDamage": 528.308,
        "expWinRate": 56.919
    },
    "6977": {
        "expDef": 0.985,
        "expFrag": 0.88,
        "expSpot": 0.93,
        "expDamage": 1027.596,
        "expWinRate": 53.53
    },
    "6993": {
        "expDef": 1.053,
        "expFrag": 1.336,
        "expSpot": 0.907,
        "expDamage": 296.067,
        "expWinRate": 56.416
    },
    "7169": {
        "expDef": 0.578,
        "expFrag": 0.851,
        "expSpot": 1.232,
        "expDamage": 1807.013,
        "expWinRate": 49.574
    },
    "7185": {
        "expDef": 0.872,
        "expFrag": 0.944,
        "expSpot": 1.247,
        "expDamage": 732.169,
        "expWinRate": 54.281
    },
    "7201": {
        "expDef": 1.104,
        "expFrag": 1.002,
        "expSpot": 0.835,
        "expDamage": 792.573,
        "expWinRate": 54.021
    },
    "7217": {
        "expDef": 0.891,
        "expFrag": 1.068,
        "expSpot": 0.492,
        "expDamage": 590.142,
        "expWinRate": 55.023
    },
    "7233": {
        "expDef": 1.176,
        "expFrag": 0.9,
        "expSpot": 0.061,
        "expDamage": 1099.129,
        "expWinRate": 51.534
    },
    "7249": {
        "expDef": 0.683,
        "expFrag": 0.916,
        "expSpot": 1.341,
        "expDamage": 1816.959,
        "expWinRate": 49.354
    },
    "7425": {
        "expDef": 0.778,
        "expFrag": 1.045,
        "expSpot": 0.51,
        "expDamage": 1399.276,
        "expWinRate": 50.372
    },
    "7441": {
        "expDef": 0.602,
        "expFrag": 0.846,
        "expSpot": 0.921,
        "expDamage": 1542.901,
        "expWinRate": 51.769
    },
    "7457": {
        "expDef": 0.838,
        "expFrag": 0.885,
        "expSpot": 0.035,
        "expDamage": 1301.293,
        "expWinRate": 51.153
    },
    "7473": {
        "expDef": 0.858,
        "expFrag": 1.041,
        "expSpot": 0.624,
        "expDamage": 795.985,
        "expWinRate": 53.972
    },
    "7489": {
        "expDef": 1.015,
        "expFrag": 0.877,
        "expSpot": 0.053,
        "expDamage": 1247.125,
        "expWinRate": 50.833
    },
    "7505": {
        "expDef": 1.121,
        "expFrag": 1.231,
        "expSpot": 1.619,
        "expDamage": 320.883,
        "expWinRate": 57.032
    },
    "7681": {
        "expDef": 1.744,
        "expFrag": 1.18,
        "expSpot": 0.122,
        "expDamage": 447.024,
        "expWinRate": 53.817
    },
    "7697": {
        "expDef": 0.943,
        "expFrag": 1.008,
        "expSpot": 0.575,
        "expDamage": 1392.544,
        "expWinRate": 51.627
    },
    "7713": {
        "expDef": 1.462,
        "expFrag": 1.295,
        "expSpot": 0.943,
        "expDamage": 496.499,
        "expWinRate": 56.475
    },
    "7729": {
        "expDef": 0.855,
        "expFrag": 1.081,
        "expSpot": 0.611,
        "expDamage": 1032.364,
        "expWinRate": 53.472
    },
    "7745": {
        "expDef": 1.792,
        "expFrag": 1.805,
        "expSpot": 0.745,
        "expDamage": 301.074,
        "expWinRate": 58.699
    },
    "7761": {
        "expDef": 1.268,
        "expFrag": 1.391,
        "expSpot": 1.749,
        "expDamage": 247.832,
        "expWinRate": 57.093
    },
    "7937": {
        "expDef": 0.787,
        "expFrag": 0.891,
        "expSpot": 1.571,
        "expDamage": 1409.308,
        "expWinRate": 50.969
    },
    "7953": {
        "expDef": 0.757,
        "expFrag": 1.028,
        "expSpot": 0.597,
        "expDamage": 1749.381,
        "expWinRate": 51.134
    },
    "7969": {
        "expDef": 1.036,
        "expFrag": 0.929,
        "expSpot": 0.05,
        "expDamage": 1076.417,
        "expWinRate": 51.807
    },
    "7985": {
        "expDef": 0.652,
        "expFrag": 0.942,
        "expSpot": 0.458,
        "expDamage": 1333.719,
        "expWinRate": 50.927
    },
    "8017": {
        "expDef": 1.757,
        "expFrag": 1.525,
        "expSpot": 0.749,
        "expDamage": 366.467,
        "expWinRate": 57.895
    },
    "8081": {
        "expDef": 0.352,
        "expFrag": 1.049,
        "expSpot": 1.063,
        "expDamage": 1723.342,
        "expWinRate": 50.751
    },
    "8193": {
        "expDef": 0.763,
        "expFrag": 1.118,
        "expSpot": 0.604,
        "expDamage": 1840.903,
        "expWinRate": 50.497
    },
    "8209": {
        "expDef": 1.166,
        "expFrag": 0.917,
        "expSpot": 2.15,
        "expDamage": 334.958,
        "expWinRate": 56.729
    },
    "8225": {
        "expDef": 0.87,
        "expFrag": 0.974,
        "expSpot": 0.542,
        "expDamage": 1368.208,
        "expWinRate": 52.539
    },
    "8241": {
        "expDef": 0.575,
        "expFrag": 1.066,
        "expSpot": 0.493,
        "expDamage": 1795.703,
        "expWinRate": 51.428
    },
    "8257": {
        "expDef": 1.779,
        "expFrag": 1.392,
        "expSpot": 0.913,
        "expDamage": 358.803,
        "expWinRate": 59.133
    },
    "8273": {
        "expDef": 1.554,
        "expFrag": 1.651,
        "expSpot": 1.129,
        "expDamage": 276.648,
        "expWinRate": 58.274
    },
    "8449": {
        "expDef": 0.753,
        "expFrag": 0.921,
        "expSpot": 0.025,
        "expDamage": 1512.019,
        "expWinRate": 50.285
    },
    "8465": {
        "expDef": 0.947,
        "expFrag": 0.805,
        "expSpot": 1.22,
        "expDamage": 1096.688,
        "expWinRate": 52.415
    },
    "8481": {
        "expDef": 0.63,
        "expFrag": 0.817,
        "expSpot": 0.027,
        "expDamage": 1644.138,
        "expWinRate": 49.712
    },
    "8497": {
        "expDef": 0.531,
        "expFrag": 1.005,
        "expSpot": 0.611,
        "expDamage": 2020.161,
        "expWinRate": 50.26
    },
    "8529": {
        "expDef": 1.176,
        "expFrag": 0.96,
        "expSpot": 0.609,
        "expDamage": 1327.995,
        "expWinRate": 52.433
    },
    "8705": {
        "expDef": 0.753,
        "expFrag": 0.87,
        "expSpot": 0.036,
        "expDamage": 1647.265,
        "expWinRate": 49.456
    },
    "8721": {
        "expDef": 0.707,
        "expFrag": 0.88,
        "expSpot": 0.032,
        "expDamage": 1459.396,
        "expWinRate": 50.229
    },
    "8737": {
        "expDef": 0.563,
        "expFrag": 1.066,
        "expSpot": 0.551,
        "expDamage": 1783.469,
        "expWinRate": 53.229
    },
    "8785": {
        "expDef": 1.678,
        "expFrag": 1.095,
        "expSpot": 0.737,
        "expDamage": 547.225,
        "expWinRate": 56.946
    },
    "8961": {
        "expDef": 0.996,
        "expFrag": 0.901,
        "expSpot": 1.445,
        "expDamage": 848.454,
        "expWinRate": 54.35
    },
    "8977": {
        "expDef": 0.983,
        "expFrag": 0.955,
        "expSpot": 0.043,
        "expDamage": 1131.203,
        "expWinRate": 51.241
    },
    "8993": {
        "expDef": 0.739,
        "expFrag": 0.925,
        "expSpot": 1.36,
        "expDamage": 1531.289,
        "expWinRate": 50.907
    },
    "9041": {
        "expDef": 1.556,
        "expFrag": 1.218,
        "expSpot": 1.153,
        "expDamage": 444.515,
        "expWinRate": 56.787
    },
    "9217": {
        "expDef": 0.792,
        "expFrag": 0.978,
        "expSpot": 1.085,
        "expDamage": 1306.18,
        "expWinRate": 51.941
    },
    "9233": {
        "expDef": 0.632,
        "expFrag": 0.859,
        "expSpot": 0.029,
        "expDamage": 1657.661,
        "expWinRate": 49.822
    },
    "9249": {
        "expDef": 1.103,
        "expFrag": 1.016,
        "expSpot": 0.755,
        "expDamage": 1039.61,
        "expWinRate": 53.262
    },
    "9297": {
        "expDef": 0.466,
        "expFrag": 1.041,
        "expSpot": 0.5,
        "expDamage": 1996.665,
        "expWinRate": 49.301
    },
    "9473": {
        "expDef": 0.978,
        "expFrag": 0.803,
        "expSpot": 2.365,
        "expDamage": 378.136,
        "expWinRate": 55.085
    },
    "9489": {
        "expDef": 0.502,
        "expFrag": 0.89,
        "expSpot": 0.94,
        "expDamage": 1879.178,
        "expWinRate": 50.042
    },
    "9505": {
        "expDef": 0.709,
        "expFrag": 0.848,
        "expSpot": 1.061,
        "expDamage": 1527.237,
        "expWinRate": 50.412
    },
    "9553": {
        "expDef": 1.356,
        "expFrag": 1.003,
        "expSpot": 0.65,
        "expDamage": 759.586,
        "expWinRate": 55.669
    },
    "9745": {
        "expDef": 0.708,
        "expFrag": 0.87,
        "expSpot": 0.978,
        "expDamage": 1547.884,
        "expWinRate": 51.426
    },
    "9761": {
        "expDef": 0.696,
        "expFrag": 0.611,
        "expSpot": 2.592,
        "expDamage": 403.377,
        "expWinRate": 53.273
    },
    "9793": {
        "expDef": 1.197,
        "expFrag": 1.283,
        "expSpot": 0.56,
        "expDamage": 439.128,
        "expWinRate": 56.966
    },
    "9809": {
        "expDef": 1.119,
        "expFrag": 0.936,
        "expSpot": 0.415,
        "expDamage": 750.044,
        "expWinRate": 53.189
    },
    "9985": {
        "expDef": 0.87,
        "expFrag": 0.922,
        "expSpot": 0.816,
        "expDamage": 1279.15,
        "expWinRate": 51.356
    },
    "10001": {
        "expDef": 0.631,
        "expFrag": 0.629,
        "expSpot": 2.383,
        "expDamage": 494.295,
        "expWinRate": 52.448
    },
    "10017": {
        "expDef": 1.087,
        "expFrag": 0.983,
        "expSpot": 1.123,
        "expDamage": 707.292,
        "expWinRate": 54.422
    },
    "10049": {
        "expDef": 1.294,
        "expFrag": 1.172,
        "expSpot": 0.707,
        "expDamage": 618.808,
        "expWinRate": 54.151
    },
    "10065": {
        "expDef": 1.255,
        "expFrag": 1.028,
        "expSpot": 0.638,
        "expDamage": 1099.215,
        "expWinRate": 55.396
    },
    "10241": {
        "expDef": 1.068,
        "expFrag": 1.005,
        "expSpot": 0.839,
        "expDamage": 1024.195,
        "expWinRate": 53.326
    },
    "10257": {
        "expDef": 0.722,
        "expFrag": 0.914,
        "expSpot": 1.279,
        "expDamage": 1549.484,
        "expWinRate": 51.296
    },
    "10273": {
        "expDef": 1.542,
        "expFrag": 1.191,
        "expSpot": 1.214,
        "expDamage": 458.512,
        "expWinRate": 57.072
    },
    "10497": {
        "expDef": 0.655,
        "expFrag": 1.041,
        "expSpot": 0.691,
        "expDamage": 819.664,
        "expWinRate": 53.484
    },
    "10513": {
        "expDef": 0.883,
        "expFrag": 0.848,
        "expSpot": 1.156,
        "expDamage": 1221.005,
        "expWinRate": 52.171
    },
    "10529": {
        "expDef": 1.362,
        "expFrag": 1.153,
        "expSpot": 1.373,
        "expDamage": 598.262,
        "expWinRate": 54.353
    },
    "10577": {
        "expDef": 1.161,
        "expFrag": 1.295,
        "expSpot": 0.206,
        "expDamage": 195.29,
        "expWinRate": 56.532
    },
    "10753": {
        "expDef": 0.654,
        "expFrag": 0.866,
        "expSpot": 0.914,
        "expDamage": 1579.855,
        "expWinRate": 51.425
    },
    "10769": {
        "expDef": 0.999,
        "expFrag": 0.908,
        "expSpot": 0.936,
        "expDamage": 1053.851,
        "expWinRate": 54.145
    },
    "10785": {
        "expDef": 0.667,
        "expFrag": 0.874,
        "expSpot": 1.224,
        "expDamage": 1839.318,
        "expWinRate": 48.998
    },
    "10817": {
        "expDef": 1.045,
        "expFrag": 0.897,
        "expSpot": 0.673,
        "expDamage": 986.699,
        "expWinRate": 53.275
    },
    "10833": {
        "expDef": 1.791,
        "expFrag": 0.964,
        "expSpot": 0.092,
        "expDamage": 361.766,
        "expWinRate": 54.333
    },
    "11009": {
        "expDef": 0.824,
        "expFrag": 0.819,
        "expSpot": 0.812,
        "expDamage": 1206.623,
        "expWinRate": 52.189
    },
    "11025": {
        "expDef": 0.967,
        "expFrag": 0.977,
        "expSpot": 0.463,
        "expDamage": 1020.042,
        "expWinRate": 50.99
    },
    "11041": {
        "expDef": 1.148,
        "expFrag": 0.924,
        "expSpot": 0.887,
        "expDamage": 981.266,
        "expWinRate": 53.061
    },
    "11073": {
        "expDef": 0.785,
        "expFrag": 1.028,
        "expSpot": 0.868,
        "expDamage": 1656.414,
        "expWinRate": 51.847
    },
    "11089": {
        "expDef": 1.531,
        "expFrag": 1.114,
        "expSpot": 0.106,
        "expDamage": 597.767,
        "expWinRate": 55.084
    },
    "11265": {
        "expDef": 0.838,
        "expFrag": 0.995,
        "expSpot": 0.89,
        "expDamage": 801.086,
        "expWinRate": 54.454
    },
    "11281": {
        "expDef": 1.531,
        "expFrag": 1.278,
        "expSpot": 0.778,
        "expDamage": 494.556,
        "expWinRate": 56.091
    },
    "11297": {
        "expDef": 0.9,
        "expFrag": 0.939,
        "expSpot": 0.52,
        "expDamage": 1341.332,
        "expWinRate": 51.218
    },
    "11345": {
        "expDef": 1.531,
        "expFrag": 0.885,
        "expSpot": 0.062,
        "expDamage": 943.853,
        "expWinRate": 52.424
    },
    "11521": {
        "expDef": 0.695,
        "expFrag": 0.859,
        "expSpot": 1.147,
        "expDamage": 1529.82,
        "expWinRate": 50.443
    },
    "11537": {
        "expDef": 0.877,
        "expFrag": 0.991,
        "expSpot": 0.679,
        "expDamage": 1378.009,
        "expWinRate": 51.167
    },
    "11553": {
        "expDef": 1.153,
        "expFrag": 1.004,
        "expSpot": 1.215,
        "expDamage": 789.353,
        "expWinRate": 53.427
    },
    "11585": {
        "expDef": 1.064,
        "expFrag": 0.943,
        "expSpot": 0.614,
        "expDamage": 746.244,
        "expWinRate": 53.008
    },
    "11601": {
        "expDef": 0.798,
        "expFrag": 0.846,
        "expSpot": 0.028,
        "expDamage": 1434.988,
        "expWinRate": 50.689
    },
    "11777": {
        "expDef": 1.088,
        "expFrag": 1.15,
        "expSpot": 0.841,
        "expDamage": 627.087,
        "expWinRate": 54.981
    },
    "11793": {
        "expDef": 1.114,
        "expFrag": 1.012,
        "expSpot": 0.568,
        "expDamage": 821.195,
        "expWinRate": 51.451
    },
    "11809": {
        "expDef": 1.192,
        "expFrag": 1.007,
        "expSpot": 1.628,
        "expDamage": 883.374,
        "expWinRate": 52.505
    },
    "11841": {
        "expDef": 0.975,
        "expFrag": 0.938,
        "expSpot": 0.055,
        "expDamage": 1588.884,
        "expWinRate": 49.903
    },
    "11857": {
        "expDef": 1.858,
        "expFrag": 1.002,
        "expSpot": 0.156,
        "expDamage": 767.488,
        "expWinRate": 53.617
    },
    "12033": {
        "expDef": 0.898,
        "expFrag": 0.976,
        "expSpot": 0.803,
        "expDamage": 1549.773,
        "expWinRate": 49.237
    },
    "12049": {
        "expDef": 0.431,
        "expFrag": 1.013,
        "expSpot": 0.61,
        "expDamage": 2020.595,
        "expWinRate": 50.725
    },
    "12097": {
        "expDef": 0.923,
        "expFrag": 0.931,
        "expSpot": 0.734,
        "expDamage": 1283.599,
        "expWinRate": 51.16
    },
    "12113": {
        "expDef": 0.874,
        "expFrag": 0.849,
        "expSpot": 0.028,
        "expDamage": 1184.013,
        "expWinRate": 51.053
    },
    "12289": {
        "expDef": 1.07,
        "expFrag": 0.992,
        "expSpot": 1.81,
        "expDamage": 684.207,
        "expWinRate": 54.406
    },
    "12305": {
        "expDef": 0.679,
        "expFrag": 0.913,
        "expSpot": 1.325,
        "expDamage": 1838.139,
        "expWinRate": 49.301
    },
    "12369": {
        "expDef": 0.766,
        "expFrag": 0.774,
        "expSpot": 0.022,
        "expDamage": 1705.123,
        "expWinRate": 50.677
    },
    "12545": {
        "expDef": 0.83,
        "expFrag": 0.92,
        "expSpot": 1.551,
        "expDamage": 908.731,
        "expWinRate": 52.82
    },
    "12561": {
        "expDef": 1.348,
        "expFrag": 1.178,
        "expSpot": 2.625,
        "expDamage": 266.108,
        "expWinRate": 56.225
    },
    "12577": {
        "expDef": 0.914,
        "expFrag": 0.974,
        "expSpot": 1.735,
        "expDamage": 511.197,
        "expWinRate": 55.829
    },
    "12817": {
        "expDef": 1.378,
        "expFrag": 1.29,
        "expSpot": 1.978,
        "expDamage": 213.935,
        "expWinRate": 57.817
    },
    "12881": {
        "expDef": 0.948,
        "expFrag": 0.992,
        "expSpot": 1.365,
        "expDamage": 501.767,
        "expWinRate": 54.669
    },
    "13073": {
        "expDef": 1.427,
        "expFrag": 1.01,
        "expSpot": 1.616,
        "expDamage": 282.225,
        "expWinRate": 58.061
    },
    "13089": {
        "expDef": 0.515,
        "expFrag": 0.979,
        "expSpot": 0.755,
        "expDamage": 2024.871,
        "expWinRate": 49.686
    },
    "13121": {
        "expDef": 1.559,
        "expFrag": 1.277,
        "expSpot": 1.072,
        "expDamage": 344.469,
        "expWinRate": 58.286
    },
    "13137": {
        "expDef": 0.739,
        "expFrag": 1.007,
        "expSpot": 0.548,
        "expDamage": 1663.909,
        "expWinRate": 50.59
    },
    "13313": {
        "expDef": 0.889,
        "expFrag": 0.875,
        "expSpot": 1.219,
        "expDamage": 1154.707,
        "expWinRate": 50.428
    },
    "13329": {
        "expDef": 1.271,
        "expFrag": 1.19,
        "expSpot": 1.053,
        "expDamage": 414.882,
        "expWinRate": 55.847
    },
    "13345": {
        "expDef": 0.952,
        "expFrag": 0.844,
        "expSpot": 1.011,
        "expDamage": 1139.653,
        "expWinRate": 51.236
    },
    "13393": {
        "expDef": 1.457,
        "expFrag": 1.051,
        "expSpot": 0.516,
        "expDamage": 588.846,
        "expWinRate": 54.115
    },
    "13569": {
        "expDef": 0.635,
        "expFrag": 1.043,
        "expSpot": 0.727,
        "expDamage": 2049.042,
        "expWinRate": 48.677
    },
    "13585": {
        "expDef": 1.267,
        "expFrag": 1.069,
        "expSpot": 1.575,
        "expDamage": 373.507,
        "expWinRate": 57.277
    },
    "13825": {
        "expDef": 0.744,
        "expFrag": 0.938,
        "expSpot": 1.393,
        "expDamage": 1753.102,
        "expWinRate": 48.683
    },
    "13841": {
        "expDef": 0.972,
        "expFrag": 0.821,
        "expSpot": 1.134,
        "expDamage": 1139.938,
        "expWinRate": 51.362
    },
    "13857": {
        "expDef": 0.477,
        "expFrag": 0.994,
        "expSpot": 0.703,
        "expDamage": 2055.482,
        "expWinRate": 51.091
    },
    "13889": {
        "expDef": 0.61,
        "expFrag": 1.098,
        "expSpot": 0.8,
        "expDamage": 2054.582,
        "expWinRate": 49.665
    },
    "13905": {
        "expDef": 0.389,
        "expFrag": 1.075,
        "expSpot": 0.392,
        "expDamage": 2025.704,
        "expWinRate": 49.924
    },
    "14097": {
        "expDef": 1.097,
        "expFrag": 0.963,
        "expSpot": 1.567,
        "expDamage": 708.517,
        "expWinRate": 54.59
    },
    "14113": {
        "expDef": 0.659,
        "expFrag": 0.936,
        "expSpot": 1.276,
        "expDamage": 1860.434,
        "expWinRate": 49.151
    },
    "14145": {
        "expDef": 0.745,
        "expFrag": 0.627,
        "expSpot": 2.363,
        "expDamage": 405.669,
        "expWinRate": 53.338
    },
    "14161": {
        "expDef": 0.973,
        "expFrag": 1.039,
        "expSpot": 0.791,
        "expDamage": 1068.67,
        "expWinRate": 52.948
    },
    "14337": {
        "expDef": 0.691,
        "expFrag": 1.038,
        "expSpot": 0.909,
        "expDamage": 2011.762,
        "expWinRate": 48.976
    },
    "14353": {
        "expDef": 0.696,
        "expFrag": 0.595,
        "expSpot": 1.988,
        "expDamage": 668.099,
        "expWinRate": 51.643
    },
    "14401": {
        "expDef": 0.958,
        "expFrag": 0.859,
        "expSpot": 0.038,
        "expDamage": 1394.452,
        "expWinRate": 50.547
    },
    "14417": {
        "expDef": 1.131,
        "expFrag": 0.993,
        "expSpot": 0.834,
        "expDamage": 769.488,
        "expWinRate": 53.048
    },
    "14609": {
        "expDef": 0.777,
        "expFrag": 0.969,
        "expSpot": 1.224,
        "expDamage": 1882.625,
        "expWinRate": 48.721
    },
    "14625": {
        "expDef": 1.019,
        "expFrag": 0.909,
        "expSpot": 1.239,
        "expDamage": 1158.266,
        "expWinRate": 50.98
    },
    "14657": {
        "expDef": 1.51,
        "expFrag": 0.987,
        "expSpot": 0.098,
        "expDamage": 392.006,
        "expWinRate": 54.643
    },
    "14673": {
        "expDef": 0.894,
        "expFrag": 0.949,
        "expSpot": 0.721,
        "expDamage": 1336.376,
        "expWinRate": 50.95
    },
    "14865": {
        "expDef": 0.808,
        "expFrag": 0.957,
        "expSpot": 1.137,
        "expDamage": 1630.179,
        "expWinRate": 50.465
    },
    "14881": {
        "expDef": 0.59,
        "expFrag": 1.019,
        "expSpot": 0.829,
        "expDamage": 1982.171,
        "expWinRate": 48.609
    },
    "14913": {
        "expDef": 1.18,
        "expFrag": 0.94,
        "expSpot": 0.889,
        "expDamage": 388.234,
        "expWinRate": 55.198
    },
    "15105": {
        "expDef": 1.544,
        "expFrag": 1.221,
        "expSpot": 1.327,
        "expDamage": 304.093,
        "expWinRate": 56.646
    },
    "15121": {
        "expDef": 0.874,
        "expFrag": 1.128,
        "expSpot": 0.158,
        "expDamage": 196.493,
        "expWinRate": 56.266
    },
    "15137": {
        "expDef": 0.685,
        "expFrag": 0.619,
        "expSpot": 2.131,
        "expDamage": 504.69,
        "expWinRate": 52.424
    },
    "15169": {
        "expDef": 1.701,
        "expFrag": 1.275,
        "expSpot": 0.826,
        "expDamage": 232.811,
        "expWinRate": 57.533
    },
    "15361": {
        "expDef": 1.71,
        "expFrag": 1.319,
        "expSpot": 1.313,
        "expDamage": 231.538,
        "expWinRate": 58.935
    },
    "15377": {
        "expDef": 0.764,
        "expFrag": 0.827,
        "expSpot": 0.025,
        "expDamage": 1219.156,
        "expWinRate": 51.238
    },
    "15393": {
        "expDef": 0.747,
        "expFrag": 1.041,
        "expSpot": 0.942,
        "expDamage": 1597.854,
        "expWinRate": 50.381
    },
    "15425": {
        "expDef": 0.751,
        "expFrag": 0.927,
        "expSpot": 1.352,
        "expDamage": 1785.831,
        "expWinRate": 49.214
    },
    "15441": {
        "expDef": 0.817,
        "expFrag": 0.791,
        "expSpot": 1.091,
        "expDamage": 1134.165,
        "expWinRate": 52.282
    },
    "15617": {
        "expDef": 0.752,
        "expFrag": 1.112,
        "expSpot": 1.519,
        "expDamage": 1955.279,
        "expWinRate": 51.687
    },
    "15633": {
        "expDef": 1.545,
        "expFrag": 1.062,
        "expSpot": 0.09,
        "expDamage": 416.423,
        "expWinRate": 54.907
    },
    "15649": {
        "expDef": 0.679,
        "expFrag": 0.728,
        "expSpot": 2.366,
        "expDamage": 716.702,
        "expWinRate": 51.404
    },
    "15681": {
        "expDef": 0.77,
        "expFrag": 0.927,
        "expSpot": 1.343,
        "expDamage": 1554.245,
        "expWinRate": 50.928
    },
    "15697": {
        "expDef": 0.49,
        "expFrag": 0.885,
        "expSpot": 1.005,
        "expDamage": 1989.918,
        "expWinRate": 49.546
    },
    "15873": {
        "expDef": 1.314,
        "expFrag": 0.929,
        "expSpot": 1.496,
        "expDamage": 334.044,
        "expWinRate": 55.674
    },
    "15889": {
        "expDef": 1.027,
        "expFrag": 0.944,
        "expSpot": 1.311,
        "expDamage": 721.363,
        "expWinRate": 53.518
    },
    "15905": {
        "expDef": 0.706,
        "expFrag": 0.953,
        "expSpot": 1.293,
        "expDamage": 1905.934,
        "expWinRate": 50.048
    },
    "15937": {
        "expDef": 2.078,
        "expFrag": 1.389,
        "expSpot": 0.94,
        "expDamage": 240.269,
        "expWinRate": 59.102
    },
    "15953": {
        "expDef": 0.57,
        "expFrag": 0.977,
        "expSpot": 0.712,
        "expDamage": 2001.059,
        "expWinRate": 51.323
    },
    "16129": {
        "expDef": 0.893,
        "expFrag": 0.882,
        "expSpot": 0.035,
        "expDamage": 980.963,
        "expWinRate": 51.973
    },
    "16145": {
        "expDef": 1.078,
        "expFrag": 1.06,
        "expSpot": 0.662,
        "expDamage": 593.381,
        "expWinRate": 52.552
    },
    "16161": {
        "expDef": 0.915,
        "expFrag": 0.838,
        "expSpot": 0.03,
        "expDamage": 1470.852,
        "expWinRate": 50.778
    },
    "16209": {
        "expDef": 0.856,
        "expFrag": 0.918,
        "expSpot": 1.391,
        "expDamage": 614.93,
        "expWinRate": 54.365
    },
    "16385": {
        "expDef": 1.233,
        "expFrag": 1.037,
        "expSpot": 0.082,
        "expDamage": 583.612,
        "expWinRate": 53.46
    },
    "16401": {
        "expDef": 0.819,
        "expFrag": 1.032,
        "expSpot": 0.516,
        "expDamage": 1732.112,
        "expWinRate": 50.219
    },
    "16417": {
        "expDef": 1.338,
        "expFrag": 1.018,
        "expSpot": 0.057,
        "expDamage": 817.574,
        "expWinRate": 53.499
    },
    "16449": {
        "expDef": 0.637,
        "expFrag": 0.753,
        "expSpot": 0.726,
        "expDamage": 1192.555,
        "expWinRate": 51.775
    },
    "16641": {
        "expDef": 0.783,
        "expFrag": 0.676,
        "expSpot": 2.618,
        "expDamage": 474.317,
        "expWinRate": 52.755
    },
    "16657": {
        "expDef": 0.934,
        "expFrag": 1.072,
        "expSpot": 0.459,
        "expDamage": 1466.706,
        "expWinRate": 50.899
    },
    "16673": {
        "expDef": 0.731,
        "expFrag": 0.615,
        "expSpot": 2.246,
        "expDamage": 532.619,
        "expWinRate": 52.388
    },
    "16705": {
        "expDef": 0.5,
        "expFrag": 0.897,
        "expSpot": 1.162,
        "expDamage": 1735.534,
        "expWinRate": 52.533
    },
    "16897": {
        "expDef": 0.774,
        "expFrag": 0.962,
        "expSpot": 1.427,
        "expDamage": 1793.801,
        "expWinRate": 48.875
    },
    "16913": {
        "expDef": 0.731,
        "expFrag": 1.264,
        "expSpot": 0.473,
        "expDamage": 2154.391,
        "expWinRate": 48.721
    },
    "16961": {
        "expDef": 0.479,
        "expFrag": 0.819,
        "expSpot": 1.187,
        "expDamage": 1883.046,
        "expWinRate": 49.4
    },
    "17153": {
        "expDef": 0.785,
        "expFrag": 1.01,
        "expSpot": 1.465,
        "expDamage": 1801.782,
        "expWinRate": 48.943
    },
    "17169": {
        "expDef": 1.134,
        "expFrag": 1.292,
        "expSpot": 1.281,
        "expDamage": 320.225,
        "expWinRate": 57.09
    },
    "17217": {
        "expDef": 0.555,
        "expFrag": 0.83,
        "expSpot": 2.542,
        "expDamage": 1376.999,
        "expWinRate": 48.717
    },
    "17425": {
        "expDef": 0.949,
        "expFrag": 1.007,
        "expSpot": 1.296,
        "expDamage": 399.573,
        "expWinRate": 56.002
    },
    "17473": {
        "expDef": 0.747,
        "expFrag": 0.718,
        "expSpot": 2.537,
        "expDamage": 815.176,
        "expWinRate": 51.51
    },
    "17665": {
        "expDef": 0.75,
        "expFrag": 0.926,
        "expSpot": 1.343,
        "expDamage": 1474.573,
        "expWinRate": 51.099
    },
    "17729": {
        "expDef": 0.567,
        "expFrag": 1.136,
        "expSpot": 0.711,
        "expDamage": 2001.512,
        "expWinRate": 50.907
    },
    "17937": {
        "expDef": 1.239,
        "expFrag": 1.325,
        "expSpot": 0.794,
        "expDamage": 457.298,
        "expWinRate": 56.69
    },
    "17953": {
        "expDef": 0.786,
        "expFrag": 0.726,
        "expSpot": 2.515,
        "expDamage": 784.955,
        "expWinRate": 51.901
    },
    "17985": {
        "expDef": 0.695,
        "expFrag": 0.741,
        "expSpot": 2.271,
        "expDamage": 508.279,
        "expWinRate": 53.735
    },
    "18177": {
        "expDef": 0.641,
        "expFrag": 0.703,
        "expSpot": 2.539,
        "expDamage": 1016.84,
        "expWinRate": 50.9
    },
    "18193": {
        "expDef": 0.948,
        "expFrag": 1.033,
        "expSpot": 1.216,
        "expDamage": 510.389,
        "expWinRate": 54.511
    },
    "18209": {
        "expDef": 0.602,
        "expFrag": 0.668,
        "expSpot": 2.31,
        "expDamage": 1002.831,
        "expWinRate": 50.502
    },
    "18241": {
        "expDef": 0.682,
        "expFrag": 0.738,
        "expSpot": 2.664,
        "expDamage": 683.197,
        "expWinRate": 53.059
    },
    "18433": {
        "expDef": 0.819,
        "expFrag": 0.7,
        "expSpot": 2.667,
        "expDamage": 781.657,
        "expWinRate": 52.384
    },
    "18449": {
        "expDef": 0.705,
        "expFrag": 0.682,
        "expSpot": 2.611,
        "expDamage": 974.976,
        "expWinRate": 50.943
    },
    "18465": {
        "expDef": 1.703,
        "expFrag": 1.006,
        "expSpot": 0.106,
        "expDamage": 276.714,
        "expWinRate": 55.527
    },
    "18497": {
        "expDef": 0.69,
        "expFrag": 0.666,
        "expSpot": 2.762,
        "expDamage": 836.645,
        "expWinRate": 51.77
    },
    "18689": {
        "expDef": 0.954,
        "expFrag": 1.173,
        "expSpot": 1.275,
        "expDamage": 630.191,
        "expWinRate": 56.556
    },
    "18705": {
        "expDef": 0.514,
        "expFrag": 0.885,
        "expSpot": 0.723,
        "expDamage": 1642.538,
        "expWinRate": 52.551
    },
    "18721": {
        "expDef": 1.275,
        "expFrag": 0.994,
        "expSpot": 0.109,
        "expDamage": 399.808,
        "expWinRate": 54.663
    },
    "18753": {
        "expDef": 0.849,
        "expFrag": 0.745,
        "expSpot": 3.631,
        "expDamage": 989.628,
        "expWinRate": 53.282
    },
    "18961": {
        "expDef": 0.707,
        "expFrag": 0.686,
        "expSpot": 2.021,
        "expDamage": 768.643,
        "expWinRate": 51.618
    },
    "19009": {
        "expDef": 0.737,
        "expFrag": 0.788,
        "expSpot": 3.892,
        "expDamage": 1309.446,
        "expWinRate": 51.077
    },
    "19201": {
        "expDef": 0.684,
        "expFrag": 0.781,
        "expSpot": 3.145,
        "expDamage": 1249.061,
        "expWinRate": 50.3
    },
    "19217": {
        "expDef": 0.562,
        "expFrag": 1.061,
        "expSpot": 0.585,
        "expDamage": 2044.143,
        "expWinRate": 49.245
    },
    "19457": {
        "expDef": 0.774,
        "expFrag": 0.845,
        "expSpot": 2.289,
        "expDamage": 729.974,
        "expWinRate": 52.512
    },
    "19473": {
        "expDef": 0.421,
        "expFrag": 0.881,
        "expSpot": 1.003,
        "expDamage": 1964.689,
        "expWinRate": 50.928
    },
    "19489": {
        "expDef": 0.53,
        "expFrag": 0.732,
        "expSpot": 2.617,
        "expDamage": 1339.491,
        "expWinRate": 48.644
    },
    "19713": {
        "expDef": 0.53,
        "expFrag": 0.877,
        "expSpot": 1.105,
        "expDamage": 1602.271,
        "expWinRate": 52.512
    },
    "19729": {
        "expDef": 0.558,
        "expFrag": 0.847,
        "expSpot": 0.778,
        "expDamage": 1296.032,
        "expWinRate": 53.719
    },
    "19745": {
        "expDef": 0.742,
        "expFrag": 0.775,
        "expSpot": 2.809,
        "expDamage": 682.934,
        "expWinRate": 52.389
    },
    "19969": {
        "expDef": 0.536,
        "expFrag": 0.99,
        "expSpot": 1.352,
        "expDamage": 1967.279,
        "expWinRate": 50.525
    },
    "19985": {
        "expDef": 0.638,
        "expFrag": 0.705,
        "expSpot": 2.95,
        "expDamage": 1262,
        "expWinRate": 48.16
    },
    "20225": {
        "expDef": 0.417,
        "expFrag": 0.995,
        "expSpot": 1.19,
        "expDamage": 2087.695,
        "expWinRate": 52.675
    },
    "20241": {
        "expDef": 0.68,
        "expFrag": 0.68,
        "expSpot": 2.746,
        "expDamage": 839.24,
        "expWinRate": 52.048
    },
    "20257": {
        "expDef": 0.78,
        "expFrag": 1.258,
        "expSpot": 1.188,
        "expDamage": 680.915,
        "expWinRate": 57.154
    },
    "20481": {
        "expDef": 0.504,
        "expFrag": 0.803,
        "expSpot": 0.851,
        "expDamage": 1255.503,
        "expWinRate": 52.22
    },
    "20737": {
        "expDef": 0.445,
        "expFrag": 0.869,
        "expSpot": 0.963,
        "expDamage": 1639.637,
        "expWinRate": 52.386
    },
    "20993": {
        "expDef": 0.351,
        "expFrag": 0.887,
        "expSpot": 1.046,
        "expDamage": 1982.439,
        "expWinRate": 50.449
    },
    "21249": {
        "expDef": 0.576,
        "expFrag": 0.97,
        "expSpot": 0.853,
        "expDamage": 1694.158,
        "expWinRate": 52.165
    },
    "21505": {
        "expDef": 0.611,
        "expFrag": 1.019,
        "expSpot": 1.312,
        "expDamage": 1695.775,
        "expWinRate": 52.466
    },
    "21761": {
        "expDef": 0.677,
        "expFrag": 1.008,
        "expSpot": 1.163,
        "expDamage": 1836.667,
        "expWinRate": 49.454
    },
    "22017": {
        "expDef": 0.424,
        "expFrag": 0.878,
        "expSpot": 1.428,
        "expDamage": 1958.041,
        "expWinRate": 50.069
    },
    "22273": {
        "expDef": 0.483,
        "expFrag": 0.952,
        "expSpot": 0.902,
        "expDamage": 1976.964,
        "expWinRate": 51.385
    },
    "22529": {
        "expDef": 0.485,
        "expFrag": 0.924,
        "expSpot": 1.078,
        "expDamage": 1670.23,
        "expWinRate": 52.512
    },
    "22785": {
        "expDef": 0.535,
        "expFrag": 0.855,
        "expSpot": 0.832,
        "expDamage": 1314.351,
        "expWinRate": 52.515
    },
    "23041": {
        "expDef": 1.513,
        "expFrag": 1.036,
        "expSpot": 1.775,
        "expDamage": 443.61,
        "expWinRate": 56.118
    },
    "31233": {
        "expDef": 0.52,
        "expFrag": 1.026,
        "expSpot": 0.897,
        "expDamage": 1181.031,
        "expWinRate": 54.214
    },
    "31745": {
        "expDef": 0.467,
        "expFrag": 1.044,
        "expSpot": 0.372,
        "expDamage": 1444.849,
        "expWinRate": 51.584
    },
    "32001": {
        "expDef": 0.289,
        "expFrag": 0.818,
        "expSpot": 1.297,
        "expDamage": 1864.583,
        "expWinRate": 52.653
    },
    "43329": {
        "expDef": 1.938,
        "expFrag": 1.234,
        "expSpot": 1.839,
        "expDamage": 249.014,
        "expWinRate": 56.577
    },
    "43585": {
        "expDef": 0.798,
        "expFrag": 0.737,
        "expSpot": 3.264,
        "expDamage": 895.921,
        "expWinRate": 52.516
    },
    "43841": {
        "expDef": 1.659,
        "expFrag": 1.085,
        "expSpot": 0.874,
        "expDamage": 257.516,
        "expWinRate": 55.953
    },
    "44289": {
        "expDef": 0.466,
        "expFrag": 0.946,
        "expSpot": 1.057,
        "expDamage": 1425.761,
        "expWinRate": 52.711
    },
    "44545": {
        "expDef": 0.421,
        "expFrag": 0.889,
        "expSpot": 1.257,
        "expDamage": 1674.151,
        "expWinRate": 53.468
    },
    "44801": {
        "expDef": 1.091,
        "expFrag": 0.984,
        "expSpot": 1.716,
        "expDamage": 290.891,
        "expWinRate": 56.076
    },
    "45057": {
        "expDef": 0.636,
        "expFrag": 1.075,
        "expSpot": 0.472,
        "expDamage": 1509.326,
        "expWinRate": 51.062
    },
    "45313": {
        "expDef": 0.714,
        "expFrag": 0.77,
        "expSpot": 2.971,
        "expDamage": 530.231,
        "expWinRate": 54.326
    },
    "45569": {
        "expDef": 0.665,
        "expFrag": 0.712,
        "expSpot": 2.974,
        "expDamage": 866.631,
        "expWinRate": 52.375
    },
    "46337": {
        "expDef": 0.669,
        "expFrag": 0.931,
        "expSpot": 1.548,
        "expDamage": 1277.55,
        "expWinRate": 52.901
    },
    "46593": {
        "expDef": 0.544,
        "expFrag": 1.089,
        "expSpot": 1.105,
        "expDamage": 1166.765,
        "expWinRate": 55.661
    },
    "46609": {
        "expDef": 0.628,
        "expFrag": 0.815,
        "expSpot": 0.971,
        "expDamage": 1172.58,
        "expWinRate": 52.977
    },
    "46849": {
        "expDef": 0.435,
        "expFrag": 1.117,
        "expSpot": 1.233,
        "expDamage": 2442.282,
        "expWinRate": 56.437
    },
    "46865": {
        "expDef": 0.468,
        "expFrag": 0.824,
        "expSpot": 1.344,
        "expDamage": 1392.068,
        "expWinRate": 52.31
    },
    "47105": {
        "expDef": 0.809,
        "expFrag": 0.968,
        "expSpot": 1.345,
        "expDamage": 532.968,
        "expWinRate": 54.73
    },
    "47121": {
        "expDef": 0.769,
        "expFrag": 1.153,
        "expSpot": 1.458,
        "expDamage": 1931.616,
        "expWinRate": 54.177
    },
    "47361": {
        "expDef": 0.609,
        "expFrag": 0.872,
        "expSpot": 0.993,
        "expDamage": 1290.579,
        "expWinRate": 51.476
    },
    "47377": {
        "expDef": 0.547,
        "expFrag": 0.663,
        "expSpot": 2.66,
        "expDamage": 898.707,
        "expWinRate": 51.29
    },
    "47617": {
        "expDef": 0.613,
        "expFrag": 0.855,
        "expSpot": 1.01,
        "expDamage": 1254.945,
        "expWinRate": 51.3
    },
    "47633": {
        "expDef": 1.522,
        "expFrag": 1.431,
        "expSpot": 1.296,
        "expDamage": 285.184,
        "expWinRate": 56.805
    },
    "47873": {
        "expDef": 0.891,
        "expFrag": 1.182,
        "expSpot": 1.16,
        "expDamage": 317.233,
        "expWinRate": 55.543
    },
    "48129": {
        "expDef": 0.86,
        "expFrag": 0.948,
        "expSpot": 1.166,
        "expDamage": 717.802,
        "expWinRate": 53.45
    },
    "48145": {
        "expDef": 0.537,
        "expFrag": 0.817,
        "expSpot": 0.767,
        "expDamage": 1266.472,
        "expWinRate": 53.036
    },
    "48385": {
        "expDef": 0.54,
        "expFrag": 0.944,
        "expSpot": 0.645,
        "expDamage": 1403.412,
        "expWinRate": 52.029
    },
    "48401": {
        "expDef": 0.783,
        "expFrag": 0.967,
        "expSpot": 0.697,
        "expDamage": 1382.743,
        "expWinRate": 51.384
    },
    "48641": {
        "expDef": 0.472,
        "expFrag": 0.893,
        "expSpot": 1.013,
        "expDamage": 1405.107,
        "expWinRate": 53.239
    },
    "48897": {
        "expDef": 0.683,
        "expFrag": 0.921,
        "expSpot": 1.558,
        "expDamage": 1258.336,
        "expWinRate": 52.507
    },
    "48913": {
        "expDef": 0.523,
        "expFrag": 0.812,
        "expSpot": 0.759,
        "expDamage": 1268.282,
        "expWinRate": 52.049
    },
    "49169": {
        "expDef": 0.637,
        "expFrag": 0.94,
        "expSpot": 1.013,
        "expDamage": 809.843,
        "expWinRate": 54.27
    },
    "49409": {
        "expDef": 0.559,
        "expFrag": 0.996,
        "expSpot": 1.096,
        "expDamage": 1380.993,
        "expWinRate": 52.919
    },
    "49665": {
        "expDef": 0.482,
        "expFrag": 0.897,
        "expSpot": 1.002,
        "expDamage": 1400.807,
        "expWinRate": 53.519
    },
    "49921": {
        "expDef": 0.534,
        "expFrag": 0.951,
        "expSpot": 1.14,
        "expDamage": 1062.688,
        "expWinRate": 53.52
    },
    "49937": {
        "expDef": 0.741,
        "expFrag": 0.806,
        "expSpot": 1.206,
        "expDamage": 1152.623,
        "expWinRate": 51.58
    },
    "50193": {
        "expDef": 0.625,
        "expFrag": 0.992,
        "expSpot": 0.548,
        "expDamage": 1421.107,
        "expWinRate": 51.072
    },
    "50945": {
        "expDef": 1.28,
        "expFrag": 1.25,
        "expSpot": 1.184,
        "expDamage": 228.787,
        "expWinRate": 57.003
    },
    "50961": {
        "expDef": 0.602,
        "expFrag": 0.641,
        "expSpot": 2.511,
        "expDamage": 840.581,
        "expWinRate": 51.028
    },
    "51201": {
        "expDef": 1.283,
        "expFrag": 1.255,
        "expSpot": 1.306,
        "expDamage": 607.415,
        "expWinRate": 57.783
    },
    "51345": {
        "expDef": 0.9,
        "expFrag": 0.997,
        "expSpot": 1.451,
        "expDamage": 771.489,
        "expWinRate": 54.278
    },
    "51361": {
        "expDef": 0.698,
        "expFrag": 1.012,
        "expSpot": 1.291,
        "expDamage": 1361.412,
        "expWinRate": 51.528
    },
    "51457": {
        "expDef": 1.329,
        "expFrag": 1.159,
        "expSpot": 1.101,
        "expDamage": 525.829,
        "expWinRate": 55.489
    },
    "51473": {
        "expDef": 0.933,
        "expFrag": 1.233,
        "expSpot": 1.925,
        "expDamage": 674.452,
        "expWinRate": 55.995
    },
    "51489": {
        "expDef": 1.255,
        "expFrag": 1.299,
        "expSpot": 2.405,
        "expDamage": 228.646,
        "expWinRate": 56.501
    },
    "51553": {
        "expDef": 1.111,
        "expFrag": 0.937,
        "expSpot": 1.063,
        "expDamage": 513.615,
        "expWinRate": 52.972
    },
    "51569": {
        "expDef": 0.817,
        "expFrag": 0.942,
        "expSpot": 1.335,
        "expDamage": 737.683,
        "expWinRate": 52.874
    },
    "51585": {
        "expDef": 0.87,
        "expFrag": 1.039,
        "expSpot": 0.981,
        "expDamage": 783.314,
        "expWinRate": 53.202
    },
    "51713": {
        "expDef": 1.329,
        "expFrag": 1.171,
        "expSpot": 1.167,
        "expDamage": 597.17,
        "expWinRate": 54.994
    },
    "51729": {
        "expDef": 2.297,
        "expFrag": 1.641,
        "expSpot": 1.42,
        "expDamage": 340.305,
        "expWinRate": 62.794
    },
    "51745": {
        "expDef": 1.127,
        "expFrag": 1.045,
        "expSpot": 1.389,
        "expDamage": 510.792,
        "expWinRate": 55.926
    },
    "51825": {
        "expDef": 0.645,
        "expFrag": 0.912,
        "expSpot": 1.109,
        "expDamage": 1246.313,
        "expWinRate": 50.999
    },
    "51841": {
        "expDef": 1.162,
        "expFrag": 1.148,
        "expSpot": 1.439,
        "expDamage": 211.61,
        "expWinRate": 57.168
    },
    "51985": {
        "expDef": 1.588,
        "expFrag": 1.468,
        "expSpot": 1.361,
        "expDamage": 367.097,
        "expWinRate": 58.804
    },
    "52001": {
        "expDef": 1.259,
        "expFrag": 1.088,
        "expSpot": 1.612,
        "expDamage": 308.828,
        "expWinRate": 55.341
    },
    "52065": {
        "expDef": 0.816,
        "expFrag": 0.813,
        "expSpot": 1.211,
        "expDamage": 1143.256,
        "expWinRate": 51.272
    },
    "52097": {
        "expDef": 0.791,
        "expFrag": 0.97,
        "expSpot": 0.482,
        "expDamage": 1459.145,
        "expWinRate": 51.137
    },
    "52225": {
        "expDef": 1.342,
        "expFrag": 1.295,
        "expSpot": 2.156,
        "expDamage": 320.705,
        "expWinRate": 56.427
    },
    "52241": {
        "expDef": 1.618,
        "expFrag": 1.555,
        "expSpot": 1.573,
        "expDamage": 479.313,
        "expWinRate": 56.841
    },
    "52257": {
        "expDef": 1.047,
        "expFrag": 1.016,
        "expSpot": 1.607,
        "expDamage": 473.531,
        "expWinRate": 54.801
    },
    "52321": {
        "expDef": 0.788,
        "expFrag": 0.967,
        "expSpot": 1.027,
        "expDamage": 803.378,
        "expWinRate": 54.404
    },
    "52353": {
        "expDef": 0.748,
        "expFrag": 0.776,
        "expSpot": 1.237,
        "expDamage": 1158.073,
        "expWinRate": 52.411
    },
    "52481": {
        "expDef": 1.679,
        "expFrag": 1.264,
        "expSpot": 1.468,
        "expDamage": 374.593,
        "expWinRate": 54.41
    },
    "52497": {
        "expDef": 2.839,
        "expFrag": 1.877,
        "expSpot": 1.637,
        "expDamage": 312.147,
        "expWinRate": 55.746
    },
    "52513": {
        "expDef": 0.633,
        "expFrag": 0.814,
        "expSpot": 1.162,
        "expDamage": 1251.275,
        "expWinRate": 51.454
    },
    "52561": {
        "expDef": 0.809,
        "expFrag": 1.028,
        "expSpot": 0.587,
        "expDamage": 1725.459,
        "expWinRate": 52.139
    },
    "52577": {
        "expDef": 0.491,
        "expFrag": 0.756,
        "expSpot": 1.46,
        "expDamage": 1238.338,
        "expWinRate": 52.912
    },
    "52609": {
        "expDef": 0.661,
        "expFrag": 0.741,
        "expSpot": 1.284,
        "expDamage": 1108.098,
        "expWinRate": 52.112
    },
    "52737": {
        "expDef": 1.61,
        "expFrag": 1.043,
        "expSpot": 1.612,
        "expDamage": 258.079,
        "expWinRate": 54.52
    },
    "52769": {
        "expDef": 1.583,
        "expFrag": 1.112,
        "expSpot": 2.49,
        "expDamage": 281.371,
        "expWinRate": 57.269
    },
    "52817": {
        "expDef": 1.365,
        "expFrag": 0.924,
        "expSpot": 1.386,
        "expDamage": 364.195,
        "expWinRate": 56.638
    },
    "52833": {
        "expDef": 0.67,
        "expFrag": 0.763,
        "expSpot": 1.797,
        "expDamage": 1064.663,
        "expWinRate": 52.363
    },
    "52865": {
        "expDef": 0.521,
        "expFrag": 0.988,
        "expSpot": 1.035,
        "expDamage": 1450.144,
        "expWinRate": 52.52
    },
    "52993": {
        "expDef": 0.974,
        "expFrag": 1.104,
        "expSpot": 2.436,
        "expDamage": 367.243,
        "expWinRate": 55.605
    },
    "53121": {
        "expDef": 0.715,
        "expFrag": 0.957,
        "expSpot": 1.294,
        "expDamage": 1339.644,
        "expWinRate": 52.012
    },
    "53249": {
        "expDef": 0.916,
        "expFrag": 0.964,
        "expSpot": 1.082,
        "expDamage": 1244.408,
        "expWinRate": 51.402
    },
    "53505": {
        "expDef": 1.718,
        "expFrag": 1.456,
        "expSpot": 1.596,
        "expDamage": 333.246,
        "expWinRate": 55.691
    },
    "53537": {
        "expDef": 1.237,
        "expFrag": 1.176,
        "expSpot": 1.529,
        "expDamage": 212.961,
        "expWinRate": 57.913
    },
    "53585": {
        "expDef": 1.425,
        "expFrag": 1.082,
        "expSpot": 0.785,
        "expDamage": 527.59,
        "expWinRate": 54.496
    },
    "53761": {
        "expDef": 1.371,
        "expFrag": 1.231,
        "expSpot": 0.817,
        "expDamage": 590.101,
        "expWinRate": 53.188
    },
    "53793": {
        "expDef": 0.905,
        "expFrag": 0.842,
        "expSpot": 1.309,
        "expDamage": 1121.963,
        "expWinRate": 51.805
    },
    "53841": {
        "expDef": 1.259,
        "expFrag": 1.059,
        "expSpot": 0.576,
        "expDamage": 821.849,
        "expWinRate": 52.76
    },
    "54017": {
        "expDef": 1.107,
        "expFrag": 1.28,
        "expSpot": 1.414,
        "expDamage": 655.771,
        "expWinRate": 58.006
    },
    "54033": {
        "expDef": 0.784,
        "expFrag": 1.235,
        "expSpot": 1.872,
        "expDamage": 652.284,
        "expWinRate": 56.271
    },
    "54097": {
        "expDef": 1.181,
        "expFrag": 1.01,
        "expSpot": 0.767,
        "expDamage": 988.315,
        "expWinRate": 54.021
    },
    "54273": {
        "expDef": 1.51,
        "expFrag": 1.86,
        "expSpot": 0.929,
        "expDamage": 426.501,
        "expWinRate": 58.476
    },
    "54289": {
        "expDef": 0.808,
        "expFrag": 0.793,
        "expSpot": 0.89,
        "expDamage": 1266.925,
        "expWinRate": 51.85
    },
    "54353": {
        "expDef": 1.159,
        "expFrag": 1.239,
        "expSpot": 1.577,
        "expDamage": 610.959,
        "expWinRate": 56.738
    },
    "54529": {
        "expDef": 1.518,
        "expFrag": 1.378,
        "expSpot": 1.411,
        "expDamage": 245.673,
        "expWinRate": 56.324
    },
    "54545": {
        "expDef": 1.131,
        "expFrag": 0.999,
        "expSpot": 1.532,
        "expDamage": 520.85,
        "expWinRate": 54.736
    },
    "54609": {
        "expDef": 1.403,
        "expFrag": 1.295,
        "expSpot": 0.125,
        "expDamage": 333.313,
        "expWinRate": 56.768
    },
    "54785": {
        "expDef": 0.75,
        "expFrag": 1.088,
        "expSpot": 0.55,
        "expDamage": 819.421,
        "expWinRate": 53.344
    },
    "54801": {
        "expDef": 1.605,
        "expFrag": 1.108,
        "expSpot": 2.734,
        "expDamage": 272.002,
        "expWinRate": 58.611
    },
    "54865": {
        "expDef": 1.295,
        "expFrag": 1.358,
        "expSpot": 1.602,
        "expDamage": 209.649,
        "expWinRate": 55.885
    },
    "55057": {
        "expDef": 1.144,
        "expFrag": 1.068,
        "expSpot": 1.25,
        "expDamage": 557.811,
        "expWinRate": 53.312
    },
    "55073": {
        "expDef": 1.316,
        "expFrag": 1.34,
        "expSpot": 1.674,
        "expDamage": 210.848,
        "expWinRate": 56.647
    },
    "55121": {
        "expDef": 1.055,
        "expFrag": 0.906,
        "expSpot": 1.077,
        "expDamage": 997.563,
        "expWinRate": 53.703
    },
    "55297": {
        "expDef": 0.893,
        "expFrag": 1.14,
        "expSpot": 0.763,
        "expDamage": 1062.817,
        "expWinRate": 52.831
    },
    "55313": {
        "expDef": 1.053,
        "expFrag": 0.921,
        "expSpot": 0.77,
        "expDamage": 1252.754,
        "expWinRate": 51.134
    },
    "55377": {
        "expDef": 0.568,
        "expFrag": 0.654,
        "expSpot": 2.468,
        "expDamage": 499.661,
        "expWinRate": 52.439
    },
    "55569": {
        "expDef": 1.509,
        "expFrag": 1.235,
        "expSpot": 1.434,
        "expDamage": 1008.894,
        "expWinRate": 51.883
    },
    "55633": {
        "expDef": 0.764,
        "expFrag": 0.777,
        "expSpot": 1.266,
        "expDamage": 1142.481,
        "expWinRate": 51.641
    },
    "55841": {
        "expDef": 0.642,
        "expFrag": 0.989,
        "expSpot": 1.26,
        "expDamage": 1919.284,
        "expWinRate": 49.672
    },
    "55889": {
        "expDef": 0.96,
        "expFrag": 1.057,
        "expSpot": 2.188,
        "expDamage": 748.467,
        "expWinRate": 55.458
    },
    "56081": {
        "expDef": 0.394,
        "expFrag": 0.828,
        "expSpot": 0.932,
        "expDamage": 1350.206,
        "expWinRate": 52.689
    },
    "56097": {
        "expDef": 1.032,
        "expFrag": 0.949,
        "expSpot": 1.279,
        "expDamage": 693.822,
        "expWinRate": 54.285
    },
    "56145": {
        "expDef": 0.992,
        "expFrag": 0.956,
        "expSpot": 0.963,
        "expDamage": 768.253,
        "expWinRate": 53.463
    },
    "56353": {
        "expDef": 1.161,
        "expFrag": 0.98,
        "expSpot": 0.738,
        "expDamage": 1035.071,
        "expWinRate": 52.331
    },
    "56577": {
        "expDef": 1.57,
        "expFrag": 1.192,
        "expSpot": 1.319,
        "expDamage": 274.257,
        "expWinRate": 55.772
    },
    "56609": {
        "expDef": 0.802,
        "expFrag": 0.94,
        "expSpot": 0.789,
        "expDamage": 1008.838,
        "expWinRate": 53.748
    },
    "56657": {
        "expDef": 0.57,
        "expFrag": 0.784,
        "expSpot": 1.178,
        "expDamage": 1246.195,
        "expWinRate": 51.941
    },
    "56833": {
        "expDef": 0.876,
        "expFrag": 1.189,
        "expSpot": 1.518,
        "expDamage": 1126.243,
        "expWinRate": 55.245
    },
    "56865": {
        "expDef": 0.883,
        "expFrag": 0.967,
        "expSpot": 1.204,
        "expDamage": 1870.752,
        "expWinRate": 52.223
    },
    "56913": {
        "expDef": 0.662,
        "expFrag": 0.785,
        "expSpot": 1.353,
        "expDamage": 1172.447,
        "expWinRate": 52.545
    },
    "57105": {
        "expDef": 0.981,
        "expFrag": 1.028,
        "expSpot": 0.713,
        "expDamage": 795.165,
        "expWinRate": 52.289
    },
    "57121": {
        "expDef": 0.891,
        "expFrag": 0.807,
        "expSpot": 1.249,
        "expDamage": 1128.339,
        "expWinRate": 51.841
    },
    "57169": {
        "expDef": 0.824,
        "expFrag": 1.041,
        "expSpot": 1.007,
        "expDamage": 843.119,
        "expWinRate": 53.687
    },
    "57361": {
        "expDef": 1.189,
        "expFrag": 0.933,
        "expSpot": 1.029,
        "expDamage": 721.222,
        "expWinRate": 52.94
    },
    "57377": {
        "expDef": 0.757,
        "expFrag": 0.778,
        "expSpot": 1.313,
        "expDamage": 1118.11,
        "expWinRate": 50.895
    },
    "57425": {
        "expDef": 0.65,
        "expFrag": 1.068,
        "expSpot": 1.046,
        "expDamage": 1579.844,
        "expWinRate": 54.426
    },
    "57617": {
        "expDef": 1.051,
        "expFrag": 0.994,
        "expSpot": 1.326,
        "expDamage": 918.039,
        "expWinRate": 53.424
    },
    "57633": {
        "expDef": 0.726,
        "expFrag": 0.671,
        "expSpot": 2.731,
        "expDamage": 686.346,
        "expWinRate": 52.135
    },
    "57681": {
        "expDef": 1.005,
        "expFrag": 1.153,
        "expSpot": 0.8,
        "expDamage": 896.706,
        "expWinRate": 54.327
    },
    "57889": {
        "expDef": 0.739,
        "expFrag": 0.664,
        "expSpot": 2.97,
        "expDamage": 779.754,
        "expWinRate": 51.966
    },
    "57937": {
        "expDef": 0.507,
        "expFrag": 1.049,
        "expSpot": 1.365,
        "expDamage": 2279.619,
        "expWinRate": 52.854
    },
    "58113": {
        "expDef": 0.786,
        "expFrag": 1.095,
        "expSpot": 1.314,
        "expDamage": 842.685,
        "expWinRate": 54.745
    },
    "58369": {
        "expDef": 0.498,
        "expFrag": 0.869,
        "expSpot": 1.483,
        "expDamage": 1947.269,
        "expWinRate": 49.997
    },
    "58449": {
        "expDef": 0.654,
        "expFrag": 0.662,
        "expSpot": 2.736,
        "expDamage": 827.99,
        "expWinRate": 52.141
    },
    "58625": {
        "expDef": 0.66,
        "expFrag": 0.941,
        "expSpot": 0.433,
        "expDamage": 1291.843,
        "expWinRate": 50.732
    },
    "58641": {
        "expDef": 0.41,
        "expFrag": 0.931,
        "expSpot": 1.01,
        "expDamage": 1990.738,
        "expWinRate": 51.477
    },
    "58657": {
        "expDef": 0.487,
        "expFrag": 0.783,
        "expSpot": 1.233,
        "expDamage": 1287.413,
        "expWinRate": 52.687
    },
    "58705": {
        "expDef": 0.74,
        "expFrag": 0.664,
        "expSpot": 2.764,
        "expDamage": 992.633,
        "expWinRate": 52.656
    },
    "58881": {
        "expDef": 0.666,
        "expFrag": 0.872,
        "expSpot": 1.048,
        "expDamage": 1290.434,
        "expWinRate": 53.329
    },
    "58913": {
        "expDef": 0.692,
        "expFrag": 0.799,
        "expSpot": 1.235,
        "expDamage": 1220.534,
        "expWinRate": 52.781
    },
    "58961": {
        "expDef": 0.615,
        "expFrag": 0.722,
        "expSpot": 2.628,
        "expDamage": 1297.616,
        "expWinRate": 51.326
    },
    "59137": {
        "expDef": 0.726,
        "expFrag": 1.051,
        "expSpot": 1.082,
        "expDamage": 1122.249,
        "expWinRate": 54.482
    },
    "59169": {
        "expDef": 0.675,
        "expFrag": 0.804,
        "expSpot": 1.243,
        "expDamage": 1241.825,
        "expWinRate": 52.668
    },
    "59217": {
        "expDef": 0.552,
        "expFrag": 0.972,
        "expSpot": 0.857,
        "expDamage": 810.915,
        "expWinRate": 55.004
    },
    "59393": {
        "expDef": 0.921,
        "expFrag": 1.013,
        "expSpot": 1.455,
        "expDamage": 783.693,
        "expWinRate": 54.641
    },
    "59425": {
        "expDef": 0.528,
        "expFrag": 0.745,
        "expSpot": 0.84,
        "expDamage": 1258.386,
        "expWinRate": 51.619
    },
    "59473": {
        "expDef": 0.748,
        "expFrag": 0.645,
        "expSpot": 2.465,
        "expDamage": 834.38,
        "expWinRate": 52.464
    },
    "59649": {
        "expDef": 0.825,
        "expFrag": 1.109,
        "expSpot": 0.592,
        "expDamage": 1047.929,
        "expWinRate": 52.895
    },
    "59665": {
        "expDef": 1.129,
        "expFrag": 1.246,
        "expSpot": 1.332,
        "expDamage": 320.733,
        "expWinRate": 56.208
    },
    "59681": {
        "expDef": 0.831,
        "expFrag": 0.964,
        "expSpot": 1.189,
        "expDamage": 741.637,
        "expWinRate": 54.822
    },
    "59729": {
        "expDef": 0.83,
        "expFrag": 0.658,
        "expSpot": 2.296,
        "expDamage": 640.449,
        "expWinRate": 52.872
    },
    "59905": {
        "expDef": 0.758,
        "expFrag": 0.845,
        "expSpot": 1.256,
        "expDamage": 1144.379,
        "expWinRate": 52.192
    },
    "59937": {
        "expDef": 0.745,
        "expFrag": 0.994,
        "expSpot": 1.181,
        "expDamage": 1034.396,
        "expWinRate": 55.514
    },
    "59985": {
        "expDef": 0.64,
        "expFrag": 0.982,
        "expSpot": 0.598,
        "expDamage": 1370.425,
        "expWinRate": 53.597
    },
    "60161": {
        "expDef": 0.86,
        "expFrag": 1.123,
        "expSpot": 1.066,
        "expDamage": 907.139,
        "expWinRate": 56.664
    },
    "60177": {
        "expDef": 0.912,
        "expFrag": 0.804,
        "expSpot": 1.087,
        "expDamage": 1102.324,
        "expWinRate": 50.806
    },
    "60193": {
        "expDef": 0.466,
        "expFrag": 0.81,
        "expSpot": 1.27,
        "expDamage": 1321.955,
        "expWinRate": 53.046
    },
    "60225": {
        "expDef": 0.794,
        "expFrag": 1.082,
        "expSpot": 1.816,
        "expDamage": 1423.476,
        "expWinRate": 52.696
    },
    "60241": {
        "expDef": 0.595,
        "expFrag": 1.053,
        "expSpot": 0.839,
        "expDamage": 669.762,
        "expWinRate": 56.696
    },
    "60417": {
        "expDef": 0.492,
        "expFrag": 1,
        "expSpot": 0.928,
        "expDamage": 1422.083,
        "expWinRate": 53.477
    },
    "60433": {
        "expDef": 1.549,
        "expFrag": 1.217,
        "expSpot": 1.827,
        "expDamage": 224.441,
        "expWinRate": 58.169
    },
    "60449": {
        "expDef": 0.563,
        "expFrag": 1.038,
        "expSpot": 0.749,
        "expDamage": 1487.158,
        "expWinRate": 53.716
    },
    "60481": {
        "expDef": 0.79,
        "expFrag": 1.199,
        "expSpot": 1.291,
        "expDamage": 1876.033,
        "expWinRate": 52.152
    },
    "60689": {
        "expDef": 1.491,
        "expFrag": 1.1,
        "expSpot": 0.628,
        "expDamage": 534.872,
        "expWinRate": 53.425
    },
    "60737": {
        "expDef": 0.821,
        "expFrag": 1.045,
        "expSpot": 1.342,
        "expDamage": 822.319,
        "expWinRate": 55.284
    },
    "60929": {
        "expDef": 0.939,
        "expFrag": 1.049,
        "expSpot": 1.771,
        "expDamage": 265.223,
        "expWinRate": 55.532
    },
    "60945": {
        "expDef": 0.731,
        "expFrag": 0.954,
        "expSpot": 1.388,
        "expDamage": 1559.075,
        "expWinRate": 51.511
    },
    "60993": {
        "expDef": 0.66,
        "expFrag": 1.117,
        "expSpot": 1.18,
        "expDamage": 839.359,
        "expWinRate": 54.609
    },
    "61185": {
        "expDef": 0.72,
        "expFrag": 0.885,
        "expSpot": 1.217,
        "expDamage": 1819.419,
        "expWinRate": 50.335
    },
    "61217": {
        "expDef": 0.907,
        "expFrag": 1.165,
        "expSpot": 0.998,
        "expDamage": 905.678,
        "expWinRate": 55.257
    },
    "61249": {
        "expDef": 1.008,
        "expFrag": 1.18,
        "expSpot": 0.861,
        "expDamage": 648.809,
        "expWinRate": 54.122
    },
    "61441": {
        "expDef": 1.019,
        "expFrag": 1.229,
        "expSpot": 1.087,
        "expDamage": 487.444,
        "expWinRate": 56.507
    },
    "61457": {
        "expDef": 0.976,
        "expFrag": 0.95,
        "expSpot": 1.274,
        "expDamage": 508.728,
        "expWinRate": 54.781
    },
    "61473": {
        "expDef": 0.621,
        "expFrag": 0.915,
        "expSpot": 1.095,
        "expDamage": 1094.925,
        "expWinRate": 54.522
    },
    "61505": {
        "expDef": 0.849,
        "expFrag": 0.733,
        "expSpot": 3.021,
        "expDamage": 812.943,
        "expWinRate": 52.897
    },
    "61697": {
        "expDef": 0.784,
        "expFrag": 1.02,
        "expSpot": 1.602,
        "expDamage": 1872.2,
        "expWinRate": 53.005
    },
    "61713": {
        "expDef": 1.037,
        "expFrag": 1.001,
        "expSpot": 0.562,
        "expDamage": 1039.19,
        "expWinRate": 52.429
    },
    "61729": {
        "expDef": 0.475,
        "expFrag": 0.869,
        "expSpot": 1.109,
        "expDamage": 1721.221,
        "expWinRate": 52.197
    },
    "61761": {
        "expDef": 0.748,
        "expFrag": 0.97,
        "expSpot": 0.667,
        "expDamage": 1396.317,
        "expWinRate": 51.459
    },
    "61953": {
        "expDef": 0.759,
        "expFrag": 0.888,
        "expSpot": 1.449,
        "expDamage": 1182.88,
        "expWinRate": 52.091
    },
    "61969": {
        "expDef": 1.29,
        "expFrag": 0.932,
        "expSpot": 0.829,
        "expDamage": 1170.785,
        "expWinRate": 50.336
    },
    "61985": {
        "expDef": 0.564,
        "expFrag": 0.963,
        "expSpot": 1.168,
        "expDamage": 1514.338,
        "expWinRate": 53.296
    },
    "62001": {
        "expDef": 0.659,
        "expFrag": 0.68,
        "expSpot": 2.587,
        "expDamage": 843.028,
        "expWinRate": 51.46
    },
    "62017": {
        "expDef": 0.579,
        "expFrag": 0.777,
        "expSpot": 1.004,
        "expDamage": 1277.49,
        "expWinRate": 52.498
    },
    "62209": {
        "expDef": 0.802,
        "expFrag": 0.832,
        "expSpot": 0.712,
        "expDamage": 1226.538,
        "expWinRate": 55.075
    },
    "62241": {
        "expDef": 0.643,
        "expFrag": 0.874,
        "expSpot": 1.296,
        "expDamage": 1265.615,
        "expWinRate": 52.118
    },
    "62273": {
        "expDef": 0.593,
        "expFrag": 1.057,
        "expSpot": 0.727,
        "expDamage": 1474.721,
        "expWinRate": 52.589
    },
    "62481": {
        "expDef": 0.595,
        "expFrag": 1.022,
        "expSpot": 0.52,
        "expDamage": 1454.583,
        "expWinRate": 51.613
    },
    "62497": {
        "expDef": 0.868,
        "expFrag": 0.947,
        "expSpot": 1.04,
        "expDamage": 991.639,
        "expWinRate": 54.524
    },
    "62529": {
        "expDef": 0.687,
        "expFrag": 0.984,
        "expSpot": 1.055,
        "expDamage": 1338.891,
        "expWinRate": 51.451
    },
    "62737": {
        "expDef": 0.689,
        "expFrag": 0.854,
        "expSpot": 0.67,
        "expDamage": 1315.245,
        "expWinRate": 53.62
    },
    "62753": {
        "expDef": 0.322,
        "expFrag": 0.957,
        "expSpot": 1.388,
        "expDamage": 1793.567,
        "expWinRate": 55.31
    },
    "62785": {
        "expDef": 0.551,
        "expFrag": 0.77,
        "expSpot": 1.014,
        "expDamage": 1272.565,
        "expWinRate": 52.632
    },
    "62977": {
        "expDef": 0.72,
        "expFrag": 0.901,
        "expSpot": 1.53,
        "expDamage": 1226.034,
        "expWinRate": 52.24
    },
    "62993": {
        "expDef": 0.844,
        "expFrag": 0.941,
        "expSpot": 1.072,
        "expDamage": 1088.62,
        "expWinRate": 54.399
    },
    "63041": {
        "expDef": 0.647,
        "expFrag": 0.844,
        "expSpot": 0.835,
        "expDamage": 1238.392,
        "expWinRate": 50.997
    },
    "63233": {
        "expDef": 0.64,
        "expFrag": 0.783,
        "expSpot": 0.877,
        "expDamage": 1250.195,
        "expWinRate": 52.894
    },
    "63249": {
        "expDef": 1.057,
        "expFrag": 0.996,
        "expSpot": 1.081,
        "expDamage": 541.034,
        "expWinRate": 54.663
    },
    "63281": {
        "expDef": 0.682,
        "expFrag": 1.06,
        "expSpot": 0.792,
        "expDamage": 1418.159,
        "expWinRate": 52.471
    },
    "63297": {
        "expDef": 0.795,
        "expFrag": 0.79,
        "expSpot": 2.461,
        "expDamage": 726.551,
        "expWinRate": 52.216
    },
    "63505": {
        "expDef": 1.441,
        "expFrag": 0.828,
        "expSpot": 1.091,
        "expDamage": 253.31,
        "expWinRate": 56.342
    },
    "63537": {
        "expDef": 0.682,
        "expFrag": 0.951,
        "expSpot": 1.256,
        "expDamage": 1860.613,
        "expWinRate": 50.348
    },
    "63553": {
        "expDef": 0.966,
        "expFrag": 0.809,
        "expSpot": 1.408,
        "expDamage": 1103.208,
        "expWinRate": 50.709
    },
    "63761": {
        "expDef": 0.97,
        "expFrag": 0.853,
        "expSpot": 1.249,
        "expDamage": 1180.325,
        "expWinRate": 52.122
    },
    "63793": {
        "expDef": 0.89,
        "expFrag": 0.805,
        "expSpot": 1.281,
        "expDamage": 1063.22,
        "expWinRate": 51.971
    },
    "63809": {
        "expDef": 0.815,
        "expFrag": 0.908,
        "expSpot": 2.81,
        "expDamage": 800.808,
        "expWinRate": 53.375
    },
    "64017": {
        "expDef": 0.587,
        "expFrag": 0.649,
        "expSpot": 2.606,
        "expDamage": 833.537,
        "expWinRate": 51.064
    },
    "64049": {
        "expDef": 0.734,
        "expFrag": 0.89,
        "expSpot": 1.345,
        "expDamage": 1143.91,
        "expWinRate": 50.767
    },
    "64065": {
        "expDef": 1.036,
        "expFrag": 0.893,
        "expSpot": 1.337,
        "expDamage": 1200.009,
        "expWinRate": 50.894
    },
    "64273": {
        "expDef": 0.894,
        "expFrag": 0.806,
        "expSpot": 1.25,
        "expDamage": 1123.715,
        "expWinRate": 51.803
    },
    "64561": {
        "expDef": 0.615,
        "expFrag": 0.886,
        "expSpot": 1.327,
        "expDamage": 1263.865,
        "expWinRate": 52.929
    },
    "64769": {
        "expDef": 0.474,
        "expFrag": 1.131,
        "expSpot": 0.746,
        "expDamage": 882.135,
        "expWinRate": 54.9
    },
    "64817": {
        "expDef": 0.768,
        "expFrag": 0.792,
        "expSpot": 2.643,
        "expDamage": 582.395,
        "expWinRate": 52.5
    },
    "65073": {
        "expDef": 0.505,
        "expFrag": 0.867,
        "expSpot": 1.369,
        "expDamage": 1251.491,
        "expWinRate": 52.257
    }
}

export default WN8;