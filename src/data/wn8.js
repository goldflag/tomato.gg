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
        "expDef": 1.108,
        "expFrag": 0.973,
        "expSpot": 1.366,
        "expDamage": 487.278,
        "expWinRate": 54.95
    },
    "33": {
        "expDef": 1.197,
        "expFrag": 1.237,
        "expSpot": 1.544,
        "expDamage": 600.838,
        "expWinRate": 56.087
    },
    "49": {
        "expDef": 0.907,
        "expFrag": 0.885,
        "expSpot": 1.586,
        "expDamage": 1110.048,
        "expWinRate": 51.768
    },
    "81": {
        "expDef": 1.266,
        "expFrag": 1.682,
        "expSpot": 0.922,
        "expDamage": 219.343,
        "expWinRate": 57.703
    },
    "113": {
        "expDef": 1.115,
        "expFrag": 1.605,
        "expSpot": 0.843,
        "expDamage": 215.86,
        "expWinRate": 58.488
    },
    "129": {
        "expDef": 1.179,
        "expFrag": 1.507,
        "expSpot": 1.328,
        "expDamage": 205.923,
        "expWinRate": 58.863
    },
    "145": {
        "expDef": 0.782,
        "expFrag": 0.978,
        "expSpot": 1.329,
        "expDamage": 769.49,
        "expWinRate": 54.626
    },
    "161": {
        "expDef": 1.518,
        "expFrag": 1.688,
        "expSpot": 1.014,
        "expDamage": 219.951,
        "expWinRate": 58.278
    },
    "257": {
        "expDef": 1.264,
        "expFrag": 1.116,
        "expSpot": 0.535,
        "expDamage": 580.497,
        "expWinRate": 54.416
    },
    "273": {
        "expDef": 1.28,
        "expFrag": 1.01,
        "expSpot": 0.074,
        "expDamage": 921.481,
        "expWinRate": 51.401
    },
    "289": {
        "expDef": 1.516,
        "expFrag": 1.07,
        "expSpot": 2.174,
        "expDamage": 271.083,
        "expWinRate": 57.053
    },
    "305": {
        "expDef": 0.689,
        "expFrag": 0.684,
        "expSpot": 2.521,
        "expDamage": 670.752,
        "expWinRate": 51.883
    },
    "321": {
        "expDef": 1.643,
        "expFrag": 1.217,
        "expSpot": 0.817,
        "expDamage": 298.932,
        "expWinRate": 58.411
    },
    "337": {
        "expDef": 1.212,
        "expFrag": 1.406,
        "expSpot": 0.932,
        "expDamage": 245.933,
        "expWinRate": 56.76
    },
    "353": {
        "expDef": 1.493,
        "expFrag": 1.372,
        "expSpot": 1.196,
        "expDamage": 231.025,
        "expWinRate": 57.956
    },
    "369": {
        "expDef": 1.465,
        "expFrag": 1.218,
        "expSpot": 1.388,
        "expDamage": 229.52,
        "expWinRate": 56.737
    },
    "385": {
        "expDef": 1.274,
        "expFrag": 1.326,
        "expSpot": 1.328,
        "expDamage": 245.185,
        "expWinRate": 57.425
    },
    "401": {
        "expDef": 1.438,
        "expFrag": 0.973,
        "expSpot": 1.032,
        "expDamage": 223.571,
        "expWinRate": 56.372
    },
    "417": {
        "expDef": 1.666,
        "expFrag": 1.279,
        "expSpot": 1.399,
        "expDamage": 243.329,
        "expWinRate": 57.589
    },
    "513": {
        "expDef": 0.818,
        "expFrag": 0.975,
        "expSpot": 1.008,
        "expDamage": 1033.033,
        "expWinRate": 53.414
    },
    "529": {
        "expDef": 1.021,
        "expFrag": 0.937,
        "expSpot": 0.981,
        "expDamage": 1070.795,
        "expWinRate": 53.582
    },
    "545": {
        "expDef": 1.419,
        "expFrag": 1.55,
        "expSpot": 1.864,
        "expDamage": 199.598,
        "expWinRate": 58.069
    },
    "561": {
        "expDef": 0.695,
        "expFrag": 0.955,
        "expSpot": 1.442,
        "expDamage": 1277.036,
        "expWinRate": 51.94
    },
    "577": {
        "expDef": 1.896,
        "expFrag": 1.481,
        "expSpot": 1.22,
        "expDamage": 202.906,
        "expWinRate": 57.858
    },
    "593": {
        "expDef": 1.432,
        "expFrag": 1.366,
        "expSpot": 2.103,
        "expDamage": 243.69,
        "expWinRate": 58.199
    },
    "609": {
        "expDef": 1.724,
        "expFrag": 1.553,
        "expSpot": 1.109,
        "expDamage": 197.021,
        "expWinRate": 57.794
    },
    "625": {
        "expDef": 1.49,
        "expFrag": 0.957,
        "expSpot": 1.065,
        "expDamage": 284.767,
        "expWinRate": 56.53
    },
    "641": {
        "expDef": 1.528,
        "expFrag": 1.168,
        "expSpot": 1.361,
        "expDamage": 324.405,
        "expWinRate": 56.721
    },
    "673": {
        "expDef": 1.534,
        "expFrag": 1.493,
        "expSpot": 0.965,
        "expDamage": 277.735,
        "expWinRate": 59.016
    },
    "769": {
        "expDef": 1.29,
        "expFrag": 0.981,
        "expSpot": 1.945,
        "expDamage": 260.354,
        "expWinRate": 56.085
    },
    "785": {
        "expDef": 1.76,
        "expFrag": 1.353,
        "expSpot": 1.494,
        "expDamage": 233.641,
        "expWinRate": 57.279
    },
    "801": {
        "expDef": 0.892,
        "expFrag": 0.964,
        "expSpot": 1.019,
        "expDamage": 798.014,
        "expWinRate": 53.722
    },
    "817": {
        "expDef": 0.694,
        "expFrag": 0.91,
        "expSpot": 1.302,
        "expDamage": 1244.006,
        "expWinRate": 52.317
    },
    "833": {
        "expDef": 1.356,
        "expFrag": 1.338,
        "expSpot": 0.12,
        "expDamage": 220.608,
        "expWinRate": 56.508
    },
    "849": {
        "expDef": 1.578,
        "expFrag": 1.117,
        "expSpot": 0.772,
        "expDamage": 441.187,
        "expWinRate": 55.97
    },
    "865": {
        "expDef": 1.413,
        "expFrag": 1.35,
        "expSpot": 1.455,
        "expDamage": 237.377,
        "expWinRate": 56.856
    },
    "881": {
        "expDef": 1.322,
        "expFrag": 0.958,
        "expSpot": 1.164,
        "expDamage": 370.551,
        "expWinRate": 55.978
    },
    "897": {
        "expDef": 1.105,
        "expFrag": 0.991,
        "expSpot": 1.271,
        "expDamage": 383.604,
        "expWinRate": 55.43
    },
    "913": {
        "expDef": 0.448,
        "expFrag": 0.882,
        "expSpot": 1.011,
        "expDamage": 1369.246,
        "expWinRate": 53.344
    },
    "929": {
        "expDef": 1.455,
        "expFrag": 1.328,
        "expSpot": 1.105,
        "expDamage": 362.719,
        "expWinRate": 56.821
    },
    "1025": {
        "expDef": 1.433,
        "expFrag": 1.31,
        "expSpot": 1.687,
        "expDamage": 230.401,
        "expWinRate": 56.846
    },
    "1041": {
        "expDef": 1.379,
        "expFrag": 1.108,
        "expSpot": 0.698,
        "expDamage": 582.406,
        "expWinRate": 54.203
    },
    "1057": {
        "expDef": 0.988,
        "expFrag": 1.054,
        "expSpot": 1.363,
        "expDamage": 522.594,
        "expWinRate": 54.839
    },
    "1073": {
        "expDef": 0.967,
        "expFrag": 0.907,
        "expSpot": 1.461,
        "expDamage": 913.049,
        "expWinRate": 54.342
    },
    "1089": {
        "expDef": 1.442,
        "expFrag": 1.143,
        "expSpot": 1.102,
        "expDamage": 383.131,
        "expWinRate": 55.837
    },
    "1105": {
        "expDef": 0.978,
        "expFrag": 0.987,
        "expSpot": 1.856,
        "expDamage": 700.727,
        "expWinRate": 54.412
    },
    "1121": {
        "expDef": 1.081,
        "expFrag": 0.889,
        "expSpot": 1.005,
        "expDamage": 910.287,
        "expWinRate": 51.493
    },
    "1137": {
        "expDef": 1.096,
        "expFrag": 0.849,
        "expSpot": 1.414,
        "expDamage": 486.453,
        "expWinRate": 54.403
    },
    "1153": {
        "expDef": 0.997,
        "expFrag": 0.908,
        "expSpot": 1.168,
        "expDamage": 501.332,
        "expWinRate": 54.015
    },
    "1169": {
        "expDef": 1.332,
        "expFrag": 1.519,
        "expSpot": 1.531,
        "expDamage": 218.833,
        "expWinRate": 58.792
    },
    "1185": {
        "expDef": 0.919,
        "expFrag": 1.128,
        "expSpot": 1.049,
        "expDamage": 429.202,
        "expWinRate": 55.617
    },
    "1297": {
        "expDef": 1.173,
        "expFrag": 0.878,
        "expSpot": 1.242,
        "expDamage": 898.767,
        "expWinRate": 53.851
    },
    "1313": {
        "expDef": 1.092,
        "expFrag": 0.97,
        "expSpot": 1.415,
        "expDamage": 694.299,
        "expWinRate": 54.886
    },
    "1329": {
        "expDef": 1.747,
        "expFrag": 1.67,
        "expSpot": 1.272,
        "expDamage": 220.911,
        "expWinRate": 56.588
    },
    "1345": {
        "expDef": 2.011,
        "expFrag": 1.388,
        "expSpot": 1.053,
        "expDamage": 239.381,
        "expWinRate": 58.541
    },
    "1361": {
        "expDef": 1.541,
        "expFrag": 1.122,
        "expSpot": 1.753,
        "expDamage": 295.819,
        "expWinRate": 57.312
    },
    "1377": {
        "expDef": 1.085,
        "expFrag": 0.914,
        "expSpot": 1.182,
        "expDamage": 487.549,
        "expWinRate": 54.455
    },
    "1393": {
        "expDef": 1.019,
        "expFrag": 0.916,
        "expSpot": 1.426,
        "expDamage": 715.554,
        "expWinRate": 53.423
    },
    "1409": {
        "expDef": 1,
        "expFrag": 0.938,
        "expSpot": 1.087,
        "expDamage": 743.113,
        "expWinRate": 53.584
    },
    "1425": {
        "expDef": 1.387,
        "expFrag": 1.449,
        "expSpot": 1.016,
        "expDamage": 277.394,
        "expWinRate": 58.705
    },
    "1441": {
        "expDef": 0.836,
        "expFrag": 0.899,
        "expSpot": 1.067,
        "expDamage": 491.847,
        "expWinRate": 54.914
    },
    "1537": {
        "expDef": 0.99,
        "expFrag": 1.013,
        "expSpot": 1.206,
        "expDamage": 396.144,
        "expWinRate": 55.591
    },
    "1553": {
        "expDef": 1.249,
        "expFrag": 1.053,
        "expSpot": 0.725,
        "expDamage": 750.131,
        "expWinRate": 53.581
    },
    "1569": {
        "expDef": 1.015,
        "expFrag": 0.918,
        "expSpot": 1.574,
        "expDamage": 943.497,
        "expWinRate": 54.301
    },
    "1585": {
        "expDef": 0.957,
        "expFrag": 0.815,
        "expSpot": 1.5,
        "expDamage": 1043.14,
        "expWinRate": 52.25
    },
    "1601": {
        "expDef": 2.137,
        "expFrag": 1.338,
        "expSpot": 0.95,
        "expDamage": 234.86,
        "expWinRate": 57.47
    },
    "1617": {
        "expDef": 1.099,
        "expFrag": 1.019,
        "expSpot": 0.862,
        "expDamage": 381.792,
        "expWinRate": 54.991
    },
    "1633": {
        "expDef": 1.154,
        "expFrag": 0.987,
        "expSpot": 1.233,
        "expDamage": 373.645,
        "expWinRate": 55.978
    },
    "1649": {
        "expDef": 0.857,
        "expFrag": 0.87,
        "expSpot": 1.221,
        "expDamage": 916.658,
        "expWinRate": 53.068
    },
    "1665": {
        "expDef": 0.757,
        "expFrag": 0.888,
        "expSpot": 1.293,
        "expDamage": 924.5,
        "expWinRate": 52.935
    },
    "1681": {
        "expDef": 1.191,
        "expFrag": 1.065,
        "expSpot": 1.198,
        "expDamage": 307.693,
        "expWinRate": 55.491
    },
    "1697": {
        "expDef": 0.687,
        "expFrag": 0.983,
        "expSpot": 1.012,
        "expDamage": 748.437,
        "expWinRate": 53.661
    },
    "1793": {
        "expDef": 0.781,
        "expFrag": 0.914,
        "expSpot": 0.042,
        "expDamage": 1148.785,
        "expWinRate": 50.625
    },
    "1809": {
        "expDef": 1.206,
        "expFrag": 1.416,
        "expSpot": 0.607,
        "expDamage": 459.307,
        "expWinRate": 56.513
    },
    "1825": {
        "expDef": 1.476,
        "expFrag": 1.489,
        "expSpot": 2.455,
        "expDamage": 255.496,
        "expWinRate": 57.316
    },
    "1841": {
        "expDef": 0.719,
        "expFrag": 0.873,
        "expSpot": 1.364,
        "expDamage": 1431.288,
        "expWinRate": 51.507
    },
    "1889": {
        "expDef": 1.119,
        "expFrag": 0.949,
        "expSpot": 1.059,
        "expDamage": 725.805,
        "expWinRate": 52.501
    },
    "1905": {
        "expDef": 0.925,
        "expFrag": 0.785,
        "expSpot": 1.042,
        "expDamage": 1070.966,
        "expWinRate": 51.795
    },
    "1921": {
        "expDef": 0.668,
        "expFrag": 0.948,
        "expSpot": 0.823,
        "expDamage": 1346.04,
        "expWinRate": 52.234
    },
    "1937": {
        "expDef": 0.931,
        "expFrag": 0.773,
        "expSpot": 1.459,
        "expDamage": 338.615,
        "expWinRate": 54.151
    },
    "1953": {
        "expDef": 0.699,
        "expFrag": 0.939,
        "expSpot": 1.305,
        "expDamage": 938.568,
        "expWinRate": 53.48
    },
    "2049": {
        "expDef": 1.083,
        "expFrag": 0.816,
        "expSpot": 2.309,
        "expDamage": 315.712,
        "expWinRate": 55.801
    },
    "2065": {
        "expDef": 1.607,
        "expFrag": 1.386,
        "expSpot": 1.689,
        "expDamage": 240.609,
        "expWinRate": 57.392
    },
    "2081": {
        "expDef": 1.869,
        "expFrag": 1.245,
        "expSpot": 0.389,
        "expDamage": 230,
        "expWinRate": 54.402
    },
    "2097": {
        "expDef": 0.525,
        "expFrag": 0.853,
        "expSpot": 1.231,
        "expDamage": 1590.381,
        "expWinRate": 51.443
    },
    "2113": {
        "expDef": 1.304,
        "expFrag": 1.327,
        "expSpot": 0.11,
        "expDamage": 668.982,
        "expWinRate": 54.598
    },
    "2129": {
        "expDef": 1.202,
        "expFrag": 0.94,
        "expSpot": 1.602,
        "expDamage": 459.946,
        "expWinRate": 55.219
    },
    "2145": {
        "expDef": 1.353,
        "expFrag": 1.267,
        "expSpot": 1.189,
        "expDamage": 330.005,
        "expWinRate": 57.448
    },
    "2161": {
        "expDef": 0.738,
        "expFrag": 1.021,
        "expSpot": 1.115,
        "expDamage": 1653.048,
        "expWinRate": 51.078
    },
    "2177": {
        "expDef": 0.545,
        "expFrag": 0.961,
        "expSpot": 0.924,
        "expDamage": 1641.696,
        "expWinRate": 51.712
    },
    "2193": {
        "expDef": 0.711,
        "expFrag": 0.887,
        "expSpot": 1.188,
        "expDamage": 518.831,
        "expWinRate": 54.873
    },
    "2209": {
        "expDef": 0.64,
        "expFrag": 0.886,
        "expSpot": 1.087,
        "expDamage": 1216.426,
        "expWinRate": 50.89
    },
    "2305": {
        "expDef": 0.88,
        "expFrag": 1.014,
        "expSpot": 0.519,
        "expDamage": 1000.981,
        "expWinRate": 52.656
    },
    "2321": {
        "expDef": 1.096,
        "expFrag": 0.998,
        "expSpot": 1.134,
        "expDamage": 762.407,
        "expWinRate": 54.676
    },
    "2353": {
        "expDef": 1.499,
        "expFrag": 1.43,
        "expSpot": 1.264,
        "expDamage": 247.657,
        "expWinRate": 57.552
    },
    "2369": {
        "expDef": 1.598,
        "expFrag": 1.591,
        "expSpot": 1.037,
        "expDamage": 405.22,
        "expWinRate": 57.974
    },
    "2385": {
        "expDef": 1.408,
        "expFrag": 1.176,
        "expSpot": 1.004,
        "expDamage": 305.233,
        "expWinRate": 57.12
    },
    "2401": {
        "expDef": 1.447,
        "expFrag": 1.144,
        "expSpot": 1.564,
        "expDamage": 290.075,
        "expWinRate": 56.996
    },
    "2417": {
        "expDef": 0.627,
        "expFrag": 1.046,
        "expSpot": 1.301,
        "expDamage": 1894.865,
        "expWinRate": 49.137
    },
    "2433": {
        "expDef": 0.486,
        "expFrag": 0.938,
        "expSpot": 1.134,
        "expDamage": 1927.897,
        "expWinRate": 49.752
    },
    "2449": {
        "expDef": 0.714,
        "expFrag": 0.927,
        "expSpot": 0.771,
        "expDamage": 740.358,
        "expWinRate": 53.566
    },
    "2465": {
        "expDef": 0.66,
        "expFrag": 1.066,
        "expSpot": 1.086,
        "expDamage": 1701.601,
        "expWinRate": 50.685
    },
    "2561": {
        "expDef": 0.965,
        "expFrag": 0.934,
        "expSpot": 1.334,
        "expDamage": 708.148,
        "expWinRate": 53.995
    },
    "2577": {
        "expDef": 1.096,
        "expFrag": 1.014,
        "expSpot": 1.198,
        "expDamage": 646.165,
        "expWinRate": 54.782
    },
    "2593": {
        "expDef": 0.576,
        "expFrag": 0.972,
        "expSpot": 0.676,
        "expDamage": 1711.843,
        "expWinRate": 50.65
    },
    "2625": {
        "expDef": 0.851,
        "expFrag": 0.889,
        "expSpot": 0.908,
        "expDamage": 785.629,
        "expWinRate": 53.44
    },
    "2657": {
        "expDef": 1.01,
        "expFrag": 0.818,
        "expSpot": 1.163,
        "expDamage": 1122.24,
        "expWinRate": 51.139
    },
    "2689": {
        "expDef": 1.474,
        "expFrag": 1.226,
        "expSpot": 0.567,
        "expDamage": 305.04,
        "expWinRate": 52.588
    },
    "2705": {
        "expDef": 0.628,
        "expFrag": 0.966,
        "expSpot": 1.03,
        "expDamage": 1076.192,
        "expWinRate": 53.551
    },
    "2721": {
        "expDef": 0.614,
        "expFrag": 1.153,
        "expSpot": 1.108,
        "expDamage": 2046.352,
        "expWinRate": 49.756
    },
    "2817": {
        "expDef": 0.771,
        "expFrag": 1.035,
        "expSpot": 1.039,
        "expDamage": 818.801,
        "expWinRate": 53.755
    },
    "2833": {
        "expDef": 1.328,
        "expFrag": 1.182,
        "expSpot": 0.169,
        "expDamage": 347.694,
        "expWinRate": 57.447
    },
    "2849": {
        "expDef": 0.705,
        "expFrag": 0.788,
        "expSpot": 0.817,
        "expDamage": 1251.091,
        "expWinRate": 50.835
    },
    "2865": {
        "expDef": 0.778,
        "expFrag": 0.838,
        "expSpot": 1.082,
        "expDamage": 1227.897,
        "expWinRate": 52.989
    },
    "2881": {
        "expDef": 1.187,
        "expFrag": 0.816,
        "expSpot": 0.812,
        "expDamage": 284.259,
        "expWinRate": 56.222
    },
    "2897": {
        "expDef": 1.321,
        "expFrag": 1.117,
        "expSpot": 0.863,
        "expDamage": 624.965,
        "expWinRate": 55.75
    },
    "2913": {
        "expDef": 1.161,
        "expFrag": 0.975,
        "expSpot": 1.677,
        "expDamage": 364.151,
        "expWinRate": 55.489
    },
    "2945": {
        "expDef": 1.481,
        "expFrag": 1.399,
        "expSpot": 0.594,
        "expDamage": 373.082,
        "expWinRate": 57.696
    },
    "2961": {
        "expDef": 0.511,
        "expFrag": 0.84,
        "expSpot": 0.967,
        "expDamage": 1320.9,
        "expWinRate": 51.754
    },
    "3073": {
        "expDef": 1.2,
        "expFrag": 1.083,
        "expSpot": 1.352,
        "expDamage": 277.014,
        "expWinRate": 56.226
    },
    "3089": {
        "expDef": 1.584,
        "expFrag": 1.629,
        "expSpot": 1.804,
        "expDamage": 221.763,
        "expWinRate": 57.826
    },
    "3105": {
        "expDef": 1.044,
        "expFrag": 1.031,
        "expSpot": 0.838,
        "expDamage": 363.241,
        "expWinRate": 55.356
    },
    "3121": {
        "expDef": 1.092,
        "expFrag": 0.906,
        "expSpot": 2.232,
        "expDamage": 334.424,
        "expWinRate": 55.297
    },
    "3137": {
        "expDef": 0.953,
        "expFrag": 0.999,
        "expSpot": 0.899,
        "expDamage": 1315.451,
        "expWinRate": 51.404
    },
    "3153": {
        "expDef": 1.221,
        "expFrag": 0.934,
        "expSpot": 0.832,
        "expDamage": 1011.969,
        "expWinRate": 55.022
    },
    "3169": {
        "expDef": 1.521,
        "expFrag": 1.202,
        "expSpot": 1.233,
        "expDamage": 225.708,
        "expWinRate": 56.414
    },
    "3201": {
        "expDef": 1.426,
        "expFrag": 1.196,
        "expSpot": 0.634,
        "expDamage": 442.609,
        "expWinRate": 55.783
    },
    "3217": {
        "expDef": 0.434,
        "expFrag": 0.891,
        "expSpot": 0.943,
        "expDamage": 1676.649,
        "expWinRate": 52.298
    },
    "3329": {
        "expDef": 1.652,
        "expFrag": 1.643,
        "expSpot": 1.212,
        "expDamage": 218.135,
        "expWinRate": 57.428
    },
    "3345": {
        "expDef": 1.483,
        "expFrag": 1.323,
        "expSpot": 1.288,
        "expDamage": 331.21,
        "expWinRate": 58.351
    },
    "3361": {
        "expDef": 1.19,
        "expFrag": 1.14,
        "expSpot": 1.13,
        "expDamage": 616.961,
        "expWinRate": 55.581
    },
    "3377": {
        "expDef": 0.698,
        "expFrag": 0.697,
        "expSpot": 2.304,
        "expDamage": 708.293,
        "expWinRate": 52.032
    },
    "3393": {
        "expDef": 1.872,
        "expFrag": 1.079,
        "expSpot": 0.138,
        "expDamage": 390.669,
        "expWinRate": 52.217
    },
    "3409": {
        "expDef": 1.65,
        "expFrag": 1.097,
        "expSpot": 0.125,
        "expDamage": 286.771,
        "expWinRate": 56.121
    },
    "3425": {
        "expDef": 0.778,
        "expFrag": 0.915,
        "expSpot": 1.116,
        "expDamage": 1544.296,
        "expWinRate": 50.395
    },
    "3457": {
        "expDef": 1.061,
        "expFrag": 1.073,
        "expSpot": 0.824,
        "expDamage": 527.848,
        "expWinRate": 55.067
    },
    "3473": {
        "expDef": 0.349,
        "expFrag": 0.94,
        "expSpot": 0.937,
        "expDamage": 2092.91,
        "expWinRate": 50.873
    },
    "3585": {
        "expDef": 1.037,
        "expFrag": 1.082,
        "expSpot": 0.726,
        "expDamage": 787.435,
        "expWinRate": 53.284
    },
    "3601": {
        "expDef": 1.687,
        "expFrag": 1.751,
        "expSpot": 0.898,
        "expDamage": 298.36,
        "expWinRate": 58.327
    },
    "3617": {
        "expDef": 1.731,
        "expFrag": 0.872,
        "expSpot": 0.115,
        "expDamage": 473.97,
        "expWinRate": 49.641
    },
    "3633": {
        "expDef": 0.788,
        "expFrag": 0.992,
        "expSpot": 1.072,
        "expDamage": 1069.549,
        "expWinRate": 54.268
    },
    "3649": {
        "expDef": 0.77,
        "expFrag": 1.072,
        "expSpot": 1.693,
        "expDamage": 1783.668,
        "expWinRate": 48.734
    },
    "3665": {
        "expDef": 1.057,
        "expFrag": 0.946,
        "expSpot": 1.011,
        "expDamage": 739.848,
        "expWinRate": 52.854
    },
    "3681": {
        "expDef": 0.69,
        "expFrag": 0.972,
        "expSpot": 1.301,
        "expDamage": 1865,
        "expWinRate": 49.944
    },
    "3713": {
        "expDef": 1.033,
        "expFrag": 0.956,
        "expSpot": 0.603,
        "expDamage": 771.951,
        "expWinRate": 53.07
    },
    "3729": {
        "expDef": 0.839,
        "expFrag": 0.874,
        "expSpot": 1.28,
        "expDamage": 667.445,
        "expWinRate": 52.692
    },
    "3841": {
        "expDef": 1.418,
        "expFrag": 1.243,
        "expSpot": 0.12,
        "expDamage": 214.433,
        "expWinRate": 54.64
    },
    "3857": {
        "expDef": 1.038,
        "expFrag": 1,
        "expSpot": 0.68,
        "expDamage": 1041.344,
        "expWinRate": 53.021
    },
    "3873": {
        "expDef": 0.962,
        "expFrag": 0.991,
        "expSpot": 1.066,
        "expDamage": 1134.902,
        "expWinRate": 53.975
    },
    "3889": {
        "expDef": 0.638,
        "expFrag": 0.661,
        "expSpot": 2.483,
        "expDamage": 848.688,
        "expWinRate": 51.699
    },
    "3905": {
        "expDef": 0.769,
        "expFrag": 0.957,
        "expSpot": 0.849,
        "expDamage": 1586.577,
        "expWinRate": 50.306
    },
    "3921": {
        "expDef": 0.803,
        "expFrag": 0.829,
        "expSpot": 1.04,
        "expDamage": 1272.053,
        "expWinRate": 52.587
    },
    "3937": {
        "expDef": 0.438,
        "expFrag": 0.899,
        "expSpot": 0.793,
        "expDamage": 2051.988,
        "expWinRate": 51.047
    },
    "3969": {
        "expDef": 1.095,
        "expFrag": 0.94,
        "expSpot": 0.58,
        "expDamage": 980.977,
        "expWinRate": 52.285
    },
    "3985": {
        "expDef": 0.632,
        "expFrag": 0.949,
        "expSpot": 0.941,
        "expDamage": 867.537,
        "expWinRate": 52.332
    },
    "4097": {
        "expDef": 0.75,
        "expFrag": 0.906,
        "expSpot": 0.02,
        "expDamage": 1290.454,
        "expWinRate": 51.017
    },
    "4113": {
        "expDef": 1.03,
        "expFrag": 0.944,
        "expSpot": 1.545,
        "expDamage": 890.185,
        "expWinRate": 53.521
    },
    "4129": {
        "expDef": 1.412,
        "expFrag": 1.001,
        "expSpot": 0.078,
        "expDamage": 836.52,
        "expWinRate": 51.353
    },
    "4145": {
        "expDef": 0.655,
        "expFrag": 0.92,
        "expSpot": 1.272,
        "expDamage": 1790.545,
        "expWinRate": 49.268
    },
    "4161": {
        "expDef": 2.22,
        "expFrag": 1.114,
        "expSpot": 0.098,
        "expDamage": 623.364,
        "expWinRate": 53.264
    },
    "4193": {
        "expDef": 0.477,
        "expFrag": 0.806,
        "expSpot": 0.694,
        "expDamage": 1532.487,
        "expWinRate": 51.75
    },
    "4225": {
        "expDef": 0.902,
        "expFrag": 0.92,
        "expSpot": 0.577,
        "expDamage": 1358.93,
        "expWinRate": 50.557
    },
    "4241": {
        "expDef": 0.651,
        "expFrag": 0.895,
        "expSpot": 1.27,
        "expDamage": 1030.046,
        "expWinRate": 52.64
    },
    "4353": {
        "expDef": 0.868,
        "expFrag": 0.819,
        "expSpot": 1.424,
        "expDamage": 1066.495,
        "expWinRate": 52.099
    },
    "4369": {
        "expDef": 1.116,
        "expFrag": 1.033,
        "expSpot": 1.857,
        "expDamage": 362.638,
        "expWinRate": 57.399
    },
    "4385": {
        "expDef": 0.934,
        "expFrag": 0.862,
        "expSpot": 1.159,
        "expDamage": 1239.387,
        "expWinRate": 52.389
    },
    "4401": {
        "expDef": 1.444,
        "expFrag": 1.273,
        "expSpot": 1.201,
        "expDamage": 323.39,
        "expWinRate": 57.596
    },
    "4417": {
        "expDef": 1.019,
        "expFrag": 0.999,
        "expSpot": 1.143,
        "expDamage": 489.244,
        "expWinRate": 54.301
    },
    "4433": {
        "expDef": 0.606,
        "expFrag": 0.857,
        "expSpot": 1.022,
        "expDamage": 1647.198,
        "expWinRate": 51.467
    },
    "4449": {
        "expDef": 1.094,
        "expFrag": 1.082,
        "expSpot": 0.718,
        "expDamage": 375.911,
        "expWinRate": 54.295
    },
    "4481": {
        "expDef": 0.889,
        "expFrag": 0.987,
        "expSpot": 0.572,
        "expDamage": 1731.713,
        "expWinRate": 50.676
    },
    "4497": {
        "expDef": 0.644,
        "expFrag": 0.775,
        "expSpot": 0.972,
        "expDamage": 1144.831,
        "expWinRate": 50.4
    },
    "4609": {
        "expDef": 1.82,
        "expFrag": 1.381,
        "expSpot": 1.082,
        "expDamage": 239.493,
        "expWinRate": 57.337
    },
    "4625": {
        "expDef": 1.627,
        "expFrag": 1.015,
        "expSpot": 0.165,
        "expDamage": 405.769,
        "expWinRate": 53.914
    },
    "4641": {
        "expDef": 1.573,
        "expFrag": 1.008,
        "expSpot": 0.126,
        "expDamage": 391.408,
        "expWinRate": 53.629
    },
    "4657": {
        "expDef": 1.141,
        "expFrag": 0.993,
        "expSpot": 1.376,
        "expDamage": 486.252,
        "expWinRate": 54.258
    },
    "4673": {
        "expDef": 1.466,
        "expFrag": 1.035,
        "expSpot": 0.076,
        "expDamage": 926.568,
        "expWinRate": 52.643
    },
    "4689": {
        "expDef": 1.197,
        "expFrag": 0.98,
        "expSpot": 0.73,
        "expDamage": 765.747,
        "expWinRate": 54.57
    },
    "4705": {
        "expDef": 1.067,
        "expFrag": 1.167,
        "expSpot": 0.723,
        "expDamage": 333.189,
        "expWinRate": 55.111
    },
    "4737": {
        "expDef": 0.841,
        "expFrag": 1.041,
        "expSpot": 0.631,
        "expDamage": 2073.926,
        "expWinRate": 50.453
    },
    "4865": {
        "expDef": 1.422,
        "expFrag": 0.954,
        "expSpot": 0.098,
        "expDamage": 545.838,
        "expWinRate": 50.739
    },
    "4881": {
        "expDef": 1.163,
        "expFrag": 1.196,
        "expSpot": 1.786,
        "expDamage": 309.101,
        "expWinRate": 57.578
    },
    "4897": {
        "expDef": 1.201,
        "expFrag": 1.307,
        "expSpot": 1.411,
        "expDamage": 314.254,
        "expWinRate": 56.988
    },
    "4913": {
        "expDef": 0.755,
        "expFrag": 0.727,
        "expSpot": 2.38,
        "expDamage": 503.027,
        "expWinRate": 52.635
    },
    "4929": {
        "expDef": 0.706,
        "expFrag": 0.757,
        "expSpot": 2.277,
        "expDamage": 980.812,
        "expWinRate": 51.108
    },
    "4945": {
        "expDef": 1.321,
        "expFrag": 0.838,
        "expSpot": 0.781,
        "expDamage": 332.197,
        "expWinRate": 54.935
    },
    "4961": {
        "expDef": 0.638,
        "expFrag": 0.796,
        "expSpot": 0.741,
        "expDamage": 1266.152,
        "expWinRate": 52.611
    },
    "4993": {
        "expDef": 0.644,
        "expFrag": 0.867,
        "expSpot": 1.204,
        "expDamage": 1246.776,
        "expWinRate": 51.566
    },
    "5121": {
        "expDef": 1.771,
        "expFrag": 1.65,
        "expSpot": 0.437,
        "expDamage": 293.291,
        "expWinRate": 58.611
    },
    "5137": {
        "expDef": 0.898,
        "expFrag": 0.833,
        "expSpot": 0.958,
        "expDamage": 1235.479,
        "expWinRate": 51.754
    },
    "5153": {
        "expDef": 1.072,
        "expFrag": 0.848,
        "expSpot": 2.268,
        "expDamage": 295.373,
        "expWinRate": 56.482
    },
    "5169": {
        "expDef": 1.042,
        "expFrag": 0.954,
        "expSpot": 1.467,
        "expDamage": 688.417,
        "expWinRate": 54.082
    },
    "5185": {
        "expDef": 0.807,
        "expFrag": 0.752,
        "expSpot": 2.14,
        "expDamage": 691.174,
        "expWinRate": 52.205
    },
    "5201": {
        "expDef": 1.43,
        "expFrag": 1.434,
        "expSpot": 1.26,
        "expDamage": 256.322,
        "expWinRate": 57.119
    },
    "5217": {
        "expDef": 0.642,
        "expFrag": 0.953,
        "expSpot": 0.971,
        "expDamage": 1102.005,
        "expWinRate": 54.976
    },
    "5249": {
        "expDef": 0.649,
        "expFrag": 0.909,
        "expSpot": 1.144,
        "expDamage": 1566.791,
        "expWinRate": 50.979
    },
    "5265": {
        "expDef": 0.617,
        "expFrag": 0.971,
        "expSpot": 1.539,
        "expDamage": 1891.75,
        "expWinRate": 51.51
    },
    "5377": {
        "expDef": 0.792,
        "expFrag": 0.879,
        "expSpot": 1.003,
        "expDamage": 1275.372,
        "expWinRate": 51.627
    },
    "5393": {
        "expDef": 0.73,
        "expFrag": 0.688,
        "expSpot": 2.282,
        "expDamage": 393.603,
        "expWinRate": 53.892
    },
    "5409": {
        "expDef": 0.928,
        "expFrag": 0.79,
        "expSpot": 1.918,
        "expDamage": 380.194,
        "expWinRate": 53.722
    },
    "5425": {
        "expDef": 0.552,
        "expFrag": 0.862,
        "expSpot": 1.333,
        "expDamage": 1820.58,
        "expWinRate": 49.851
    },
    "5457": {
        "expDef": 1.065,
        "expFrag": 0.926,
        "expSpot": 1.608,
        "expDamage": 878.503,
        "expWinRate": 53.039
    },
    "5473": {
        "expDef": 0.648,
        "expFrag": 1.043,
        "expSpot": 0.796,
        "expDamage": 835.771,
        "expWinRate": 54.337
    },
    "5505": {
        "expDef": 0.586,
        "expFrag": 0.979,
        "expSpot": 1.135,
        "expDamage": 1923.316,
        "expWinRate": 50.313
    },
    "5633": {
        "expDef": 1.181,
        "expFrag": 1.032,
        "expSpot": 0.066,
        "expDamage": 975.178,
        "expWinRate": 51.175
    },
    "5649": {
        "expDef": 1.565,
        "expFrag": 1.076,
        "expSpot": 0.101,
        "expDamage": 634.935,
        "expWinRate": 53.001
    },
    "5665": {
        "expDef": 1.471,
        "expFrag": 1.337,
        "expSpot": 1.54,
        "expDamage": 238.074,
        "expWinRate": 57.656
    },
    "5681": {
        "expDef": 0.606,
        "expFrag": 0.688,
        "expSpot": 2.462,
        "expDamage": 1047.909,
        "expWinRate": 49.916
    },
    "5697": {
        "expDef": 0.873,
        "expFrag": 0.987,
        "expSpot": 1.394,
        "expDamage": 1430.756,
        "expWinRate": 50.802
    },
    "5713": {
        "expDef": 0.794,
        "expFrag": 0.872,
        "expSpot": 1.22,
        "expDamage": 1527.525,
        "expWinRate": 50.887
    },
    "5729": {
        "expDef": 0.843,
        "expFrag": 1.262,
        "expSpot": 1.145,
        "expDamage": 711.389,
        "expWinRate": 54.921
    },
    "5889": {
        "expDef": 0.81,
        "expFrag": 0.988,
        "expSpot": 0.824,
        "expDamage": 1079.943,
        "expWinRate": 53.832
    },
    "5905": {
        "expDef": 1.603,
        "expFrag": 1.002,
        "expSpot": 0.148,
        "expDamage": 359.471,
        "expWinRate": 52.114
    },
    "5921": {
        "expDef": 1.005,
        "expFrag": 0.825,
        "expSpot": 1.388,
        "expDamage": 1116.756,
        "expWinRate": 51.998
    },
    "5937": {
        "expDef": 0.582,
        "expFrag": 0.737,
        "expSpot": 2.62,
        "expDamage": 1314.532,
        "expWinRate": 48.473
    },
    "5953": {
        "expDef": 1.715,
        "expFrag": 1.117,
        "expSpot": 0.908,
        "expDamage": 273.314,
        "expWinRate": 58.334
    },
    "5969": {
        "expDef": 0.912,
        "expFrag": 0.775,
        "expSpot": 1.248,
        "expDamage": 1109.016,
        "expWinRate": 52.537
    },
    "5985": {
        "expDef": 1.175,
        "expFrag": 1.448,
        "expSpot": 1.18,
        "expDamage": 243.761,
        "expWinRate": 57.524
    },
    "6145": {
        "expDef": 0.673,
        "expFrag": 0.875,
        "expSpot": 1.083,
        "expDamage": 1835.52,
        "expWinRate": 49.383
    },
    "6161": {
        "expDef": 1.088,
        "expFrag": 0.894,
        "expSpot": 2.509,
        "expDamage": 350.415,
        "expWinRate": 56.29
    },
    "6177": {
        "expDef": 1.585,
        "expFrag": 1.839,
        "expSpot": 1.059,
        "expDamage": 280.961,
        "expWinRate": 56.817
    },
    "6193": {
        "expDef": 0.476,
        "expFrag": 0.898,
        "expSpot": 1.244,
        "expDamage": 1972.719,
        "expWinRate": 49.15
    },
    "6209": {
        "expDef": 0.675,
        "expFrag": 1,
        "expSpot": 0.949,
        "expDamage": 1915.432,
        "expWinRate": 48.503
    },
    "6225": {
        "expDef": 0.638,
        "expFrag": 0.873,
        "expSpot": 1.048,
        "expDamage": 1851.88,
        "expWinRate": 48.981
    },
    "6401": {
        "expDef": 1.638,
        "expFrag": 1.456,
        "expSpot": 0.788,
        "expDamage": 381.577,
        "expWinRate": 57.35
    },
    "6417": {
        "expDef": 1.024,
        "expFrag": 0.931,
        "expSpot": 1.54,
        "expDamage": 467.9,
        "expWinRate": 54.938
    },
    "6433": {
        "expDef": 1.349,
        "expFrag": 1.456,
        "expSpot": 1.153,
        "expDamage": 361.074,
        "expWinRate": 58.167
    },
    "6449": {
        "expDef": 1.239,
        "expFrag": 1.662,
        "expSpot": 0.46,
        "expDamage": 295.368,
        "expWinRate": 60.158
    },
    "6465": {
        "expDef": 0.7,
        "expFrag": 0.674,
        "expSpot": 1.952,
        "expDamage": 523.111,
        "expWinRate": 52.27
    },
    "6481": {
        "expDef": 1.046,
        "expFrag": 0.889,
        "expSpot": 1.685,
        "expDamage": 326.788,
        "expWinRate": 55.294
    },
    "6657": {
        "expDef": 1.06,
        "expFrag": 0.911,
        "expSpot": 1.424,
        "expDamage": 862.639,
        "expWinRate": 53.94
    },
    "6673": {
        "expDef": 1.542,
        "expFrag": 1.369,
        "expSpot": 0.909,
        "expDamage": 390.448,
        "expWinRate": 58.871
    },
    "6705": {
        "expDef": 1.312,
        "expFrag": 1.53,
        "expSpot": 0.619,
        "expDamage": 382.299,
        "expWinRate": 57.4
    },
    "6721": {
        "expDef": 1.048,
        "expFrag": 1.139,
        "expSpot": 0.863,
        "expDamage": 636.199,
        "expWinRate": 55.365
    },
    "6913": {
        "expDef": 1.399,
        "expFrag": 1.303,
        "expSpot": 0.816,
        "expDamage": 496.148,
        "expWinRate": 56.032
    },
    "6929": {
        "expDef": 0.582,
        "expFrag": 0.893,
        "expSpot": 0.849,
        "expDamage": 1875.275,
        "expWinRate": 51.735
    },
    "6945": {
        "expDef": 1.349,
        "expFrag": 1.12,
        "expSpot": 0.933,
        "expDamage": 577.856,
        "expWinRate": 54.988
    },
    "6961": {
        "expDef": 1.157,
        "expFrag": 1.41,
        "expSpot": 0.665,
        "expDamage": 531.578,
        "expWinRate": 56.89
    },
    "6977": {
        "expDef": 0.988,
        "expFrag": 0.879,
        "expSpot": 0.93,
        "expDamage": 1026.623,
        "expWinRate": 53.534
    },
    "6993": {
        "expDef": 1.064,
        "expFrag": 1.335,
        "expSpot": 0.907,
        "expDamage": 295.943,
        "expWinRate": 56.405
    },
    "7169": {
        "expDef": 0.575,
        "expFrag": 0.853,
        "expSpot": 1.237,
        "expDamage": 1806.733,
        "expWinRate": 49.591
    },
    "7185": {
        "expDef": 0.874,
        "expFrag": 0.943,
        "expSpot": 1.247,
        "expDamage": 731.64,
        "expWinRate": 54.278
    },
    "7201": {
        "expDef": 1.106,
        "expFrag": 1.002,
        "expSpot": 0.835,
        "expDamage": 792.4,
        "expWinRate": 54.03
    },
    "7217": {
        "expDef": 0.895,
        "expFrag": 1.068,
        "expSpot": 0.493,
        "expDamage": 590.651,
        "expWinRate": 55.038
    },
    "7233": {
        "expDef": 1.173,
        "expFrag": 0.901,
        "expSpot": 0.062,
        "expDamage": 1101.67,
        "expWinRate": 51.493
    },
    "7249": {
        "expDef": 0.685,
        "expFrag": 0.914,
        "expSpot": 1.34,
        "expDamage": 1813.838,
        "expWinRate": 49.359
    },
    "7425": {
        "expDef": 0.78,
        "expFrag": 1.044,
        "expSpot": 0.509,
        "expDamage": 1397.528,
        "expWinRate": 50.386
    },
    "7441": {
        "expDef": 0.604,
        "expFrag": 0.844,
        "expSpot": 0.92,
        "expDamage": 1541.382,
        "expWinRate": 51.774
    },
    "7457": {
        "expDef": 0.84,
        "expFrag": 0.884,
        "expSpot": 0.035,
        "expDamage": 1299.983,
        "expWinRate": 51.159
    },
    "7473": {
        "expDef": 0.861,
        "expFrag": 1.039,
        "expSpot": 0.625,
        "expDamage": 795.482,
        "expWinRate": 53.962
    },
    "7489": {
        "expDef": 1.017,
        "expFrag": 0.876,
        "expSpot": 0.053,
        "expDamage": 1245.685,
        "expWinRate": 50.839
    },
    "7505": {
        "expDef": 1.125,
        "expFrag": 1.231,
        "expSpot": 1.621,
        "expDamage": 321.383,
        "expWinRate": 57.042
    },
    "7681": {
        "expDef": 1.771,
        "expFrag": 1.192,
        "expSpot": 0.122,
        "expDamage": 450.421,
        "expWinRate": 53.658
    },
    "7697": {
        "expDef": 0.946,
        "expFrag": 1.007,
        "expSpot": 0.575,
        "expDamage": 1391.225,
        "expWinRate": 51.648
    },
    "7713": {
        "expDef": 1.467,
        "expFrag": 1.295,
        "expSpot": 0.943,
        "expDamage": 496.698,
        "expWinRate": 56.481
    },
    "7729": {
        "expDef": 0.858,
        "expFrag": 1.08,
        "expSpot": 0.611,
        "expDamage": 1031.315,
        "expWinRate": 53.465
    },
    "7745": {
        "expDef": 1.794,
        "expFrag": 1.8,
        "expSpot": 0.744,
        "expDamage": 300.775,
        "expWinRate": 58.697
    },
    "7761": {
        "expDef": 1.271,
        "expFrag": 1.389,
        "expSpot": 1.75,
        "expDamage": 247.588,
        "expWinRate": 57.107
    },
    "7937": {
        "expDef": 0.789,
        "expFrag": 0.89,
        "expSpot": 1.57,
        "expDamage": 1407.432,
        "expWinRate": 50.97
    },
    "7953": {
        "expDef": 0.759,
        "expFrag": 1.027,
        "expSpot": 0.596,
        "expDamage": 1746.916,
        "expWinRate": 51.136
    },
    "7969": {
        "expDef": 1.04,
        "expFrag": 0.929,
        "expSpot": 0.05,
        "expDamage": 1076.396,
        "expWinRate": 51.811
    },
    "7985": {
        "expDef": 0.654,
        "expFrag": 0.941,
        "expSpot": 0.457,
        "expDamage": 1332.154,
        "expWinRate": 50.933
    },
    "8017": {
        "expDef": 1.755,
        "expFrag": 1.521,
        "expSpot": 0.748,
        "expDamage": 367.325,
        "expWinRate": 57.86
    },
    "8081": {
        "expDef": 0.622,
        "expFrag": 0.961,
        "expSpot": 1.1,
        "expDamage": 1613.168,
        "expWinRate": 50.998
    },
    "8193": {
        "expDef": 0.765,
        "expFrag": 1.116,
        "expSpot": 0.602,
        "expDamage": 1837.597,
        "expWinRate": 50.494
    },
    "8209": {
        "expDef": 1.176,
        "expFrag": 0.92,
        "expSpot": 2.162,
        "expDamage": 336.695,
        "expWinRate": 56.766
    },
    "8225": {
        "expDef": 0.873,
        "expFrag": 0.974,
        "expSpot": 0.542,
        "expDamage": 1366.732,
        "expWinRate": 52.557
    },
    "8241": {
        "expDef": 0.577,
        "expFrag": 1.064,
        "expSpot": 0.493,
        "expDamage": 1791.805,
        "expWinRate": 51.448
    },
    "8257": {
        "expDef": 1.782,
        "expFrag": 1.39,
        "expSpot": 0.912,
        "expDamage": 358.582,
        "expWinRate": 59.186
    },
    "8273": {
        "expDef": 1.559,
        "expFrag": 1.651,
        "expSpot": 1.131,
        "expDamage": 276.867,
        "expWinRate": 58.315
    },
    "8449": {
        "expDef": 0.757,
        "expFrag": 0.92,
        "expSpot": 0.025,
        "expDamage": 1511.423,
        "expWinRate": 50.306
    },
    "8465": {
        "expDef": 0.951,
        "expFrag": 0.805,
        "expSpot": 1.219,
        "expDamage": 1095.547,
        "expWinRate": 52.419
    },
    "8481": {
        "expDef": 0.622,
        "expFrag": 0.816,
        "expSpot": 0.027,
        "expDamage": 1640.954,
        "expWinRate": 49.723
    },
    "8497": {
        "expDef": 0.528,
        "expFrag": 1.003,
        "expSpot": 0.609,
        "expDamage": 2015.834,
        "expWinRate": 50.314
    },
    "8529": {
        "expDef": 1.18,
        "expFrag": 0.959,
        "expSpot": 0.608,
        "expDamage": 1326.375,
        "expWinRate": 52.439
    },
    "8705": {
        "expDef": 0.742,
        "expFrag": 0.869,
        "expSpot": 0.036,
        "expDamage": 1644.645,
        "expWinRate": 49.486
    },
    "8721": {
        "expDef": 0.713,
        "expFrag": 0.879,
        "expSpot": 0.031,
        "expDamage": 1459.113,
        "expWinRate": 50.272
    },
    "8737": {
        "expDef": 0.564,
        "expFrag": 1.065,
        "expSpot": 0.552,
        "expDamage": 1781.452,
        "expWinRate": 53.245
    },
    "8785": {
        "expDef": 1.684,
        "expFrag": 1.094,
        "expSpot": 0.737,
        "expDamage": 546.816,
        "expWinRate": 56.949
    },
    "8961": {
        "expDef": 0.996,
        "expFrag": 0.902,
        "expSpot": 1.446,
        "expDamage": 848.252,
        "expWinRate": 54.35
    },
    "8977": {
        "expDef": 0.982,
        "expFrag": 0.957,
        "expSpot": 0.043,
        "expDamage": 1134.739,
        "expWinRate": 51.211
    },
    "8993": {
        "expDef": 0.742,
        "expFrag": 0.923,
        "expSpot": 1.356,
        "expDamage": 1529.533,
        "expWinRate": 50.898
    },
    "9041": {
        "expDef": 1.558,
        "expFrag": 1.217,
        "expSpot": 1.153,
        "expDamage": 444.809,
        "expWinRate": 56.783
    },
    "9217": {
        "expDef": 0.793,
        "expFrag": 0.976,
        "expSpot": 1.085,
        "expDamage": 1304.36,
        "expWinRate": 51.941
    },
    "9233": {
        "expDef": 0.622,
        "expFrag": 0.859,
        "expSpot": 0.029,
        "expDamage": 1654.228,
        "expWinRate": 49.861
    },
    "9249": {
        "expDef": 1.107,
        "expFrag": 1.015,
        "expSpot": 0.754,
        "expDamage": 1038.473,
        "expWinRate": 53.269
    },
    "9297": {
        "expDef": 0.464,
        "expFrag": 1.04,
        "expSpot": 0.499,
        "expDamage": 1993.084,
        "expWinRate": 49.316
    },
    "9473": {
        "expDef": 0.98,
        "expFrag": 0.803,
        "expSpot": 2.372,
        "expDamage": 377.804,
        "expWinRate": 55.103
    },
    "9489": {
        "expDef": 0.492,
        "expFrag": 0.892,
        "expSpot": 0.941,
        "expDamage": 1880.903,
        "expWinRate": 50.034
    },
    "9505": {
        "expDef": 0.712,
        "expFrag": 0.846,
        "expSpot": 1.06,
        "expDamage": 1525.574,
        "expWinRate": 50.43
    },
    "9553": {
        "expDef": 1.358,
        "expFrag": 1.003,
        "expSpot": 0.65,
        "expDamage": 759.195,
        "expWinRate": 55.691
    },
    "9745": {
        "expDef": 0.708,
        "expFrag": 0.87,
        "expSpot": 0.977,
        "expDamage": 1548.546,
        "expWinRate": 51.446
    },
    "9761": {
        "expDef": 0.697,
        "expFrag": 0.611,
        "expSpot": 2.593,
        "expDamage": 403.094,
        "expWinRate": 53.278
    },
    "9793": {
        "expDef": 1.195,
        "expFrag": 1.283,
        "expSpot": 0.56,
        "expDamage": 440.983,
        "expWinRate": 56.96
    },
    "9809": {
        "expDef": 1.121,
        "expFrag": 0.935,
        "expSpot": 0.414,
        "expDamage": 749.644,
        "expWinRate": 53.182
    },
    "9985": {
        "expDef": 0.871,
        "expFrag": 0.921,
        "expSpot": 0.815,
        "expDamage": 1277.685,
        "expWinRate": 51.365
    },
    "10001": {
        "expDef": 0.634,
        "expFrag": 0.629,
        "expSpot": 2.385,
        "expDamage": 493.849,
        "expWinRate": 52.438
    },
    "10017": {
        "expDef": 1.089,
        "expFrag": 0.983,
        "expSpot": 1.124,
        "expDamage": 706.825,
        "expWinRate": 54.423
    },
    "10049": {
        "expDef": 1.299,
        "expFrag": 1.172,
        "expSpot": 0.707,
        "expDamage": 618.35,
        "expWinRate": 54.159
    },
    "10065": {
        "expDef": 1.259,
        "expFrag": 1.027,
        "expSpot": 0.637,
        "expDamage": 1097.735,
        "expWinRate": 55.401
    },
    "10241": {
        "expDef": 1.071,
        "expFrag": 1.004,
        "expSpot": 0.84,
        "expDamage": 1023.073,
        "expWinRate": 53.33
    },
    "10257": {
        "expDef": 0.724,
        "expFrag": 0.913,
        "expSpot": 1.277,
        "expDamage": 1547.752,
        "expWinRate": 51.294
    },
    "10273": {
        "expDef": 1.539,
        "expFrag": 1.19,
        "expSpot": 1.214,
        "expDamage": 459.236,
        "expWinRate": 57.063
    },
    "10497": {
        "expDef": 0.655,
        "expFrag": 1.041,
        "expSpot": 0.692,
        "expDamage": 820.072,
        "expWinRate": 53.48
    },
    "10513": {
        "expDef": 0.887,
        "expFrag": 0.848,
        "expSpot": 1.157,
        "expDamage": 1220.494,
        "expWinRate": 52.172
    },
    "10529": {
        "expDef": 1.365,
        "expFrag": 1.152,
        "expSpot": 1.372,
        "expDamage": 597.717,
        "expWinRate": 54.346
    },
    "10577": {
        "expDef": 1.153,
        "expFrag": 1.291,
        "expSpot": 0.205,
        "expDamage": 194.677,
        "expWinRate": 56.528
    },
    "10753": {
        "expDef": 0.655,
        "expFrag": 0.865,
        "expSpot": 0.914,
        "expDamage": 1578.539,
        "expWinRate": 51.429
    },
    "10769": {
        "expDef": 1.002,
        "expFrag": 0.908,
        "expSpot": 0.936,
        "expDamage": 1052.726,
        "expWinRate": 54.148
    },
    "10785": {
        "expDef": 0.66,
        "expFrag": 0.878,
        "expSpot": 1.229,
        "expDamage": 1842.957,
        "expWinRate": 49.001
    },
    "10817": {
        "expDef": 1.05,
        "expFrag": 0.896,
        "expSpot": 0.672,
        "expDamage": 985.834,
        "expWinRate": 53.291
    },
    "10833": {
        "expDef": 1.794,
        "expFrag": 0.964,
        "expSpot": 0.092,
        "expDamage": 361.582,
        "expWinRate": 54.3
    },
    "11009": {
        "expDef": 0.826,
        "expFrag": 0.819,
        "expSpot": 0.812,
        "expDamage": 1206.238,
        "expWinRate": 52.205
    },
    "11025": {
        "expDef": 0.969,
        "expFrag": 0.977,
        "expSpot": 0.463,
        "expDamage": 1018.917,
        "expWinRate": 51.002
    },
    "11041": {
        "expDef": 1.152,
        "expFrag": 0.923,
        "expSpot": 0.886,
        "expDamage": 980.164,
        "expWinRate": 53.071
    },
    "11073": {
        "expDef": 0.788,
        "expFrag": 1.028,
        "expSpot": 0.866,
        "expDamage": 1655.652,
        "expWinRate": 51.852
    },
    "11089": {
        "expDef": 1.533,
        "expFrag": 1.113,
        "expSpot": 0.106,
        "expDamage": 597.582,
        "expWinRate": 55.091
    },
    "11265": {
        "expDef": 0.838,
        "expFrag": 0.995,
        "expSpot": 0.891,
        "expDamage": 801.55,
        "expWinRate": 54.444
    },
    "11281": {
        "expDef": 1.536,
        "expFrag": 1.277,
        "expSpot": 0.778,
        "expDamage": 494.575,
        "expWinRate": 56.094
    },
    "11297": {
        "expDef": 0.902,
        "expFrag": 0.938,
        "expSpot": 0.52,
        "expDamage": 1339.653,
        "expWinRate": 51.231
    },
    "11345": {
        "expDef": 1.538,
        "expFrag": 0.884,
        "expSpot": 0.061,
        "expDamage": 942.877,
        "expWinRate": 52.436
    },
    "11521": {
        "expDef": 0.697,
        "expFrag": 0.858,
        "expSpot": 1.148,
        "expDamage": 1527.871,
        "expWinRate": 50.454
    },
    "11537": {
        "expDef": 0.878,
        "expFrag": 0.99,
        "expSpot": 0.679,
        "expDamage": 1376.344,
        "expWinRate": 51.162
    },
    "11553": {
        "expDef": 1.157,
        "expFrag": 1.009,
        "expSpot": 1.221,
        "expDamage": 792.928,
        "expWinRate": 53.368
    },
    "11585": {
        "expDef": 1.067,
        "expFrag": 0.942,
        "expSpot": 0.614,
        "expDamage": 745.873,
        "expWinRate": 53.021
    },
    "11601": {
        "expDef": 0.804,
        "expFrag": 0.844,
        "expSpot": 0.028,
        "expDamage": 1432.837,
        "expWinRate": 50.707
    },
    "11777": {
        "expDef": 1.091,
        "expFrag": 1.15,
        "expSpot": 0.842,
        "expDamage": 626.86,
        "expWinRate": 55.005
    },
    "11793": {
        "expDef": 1.117,
        "expFrag": 1.011,
        "expSpot": 0.568,
        "expDamage": 820.563,
        "expWinRate": 51.451
    },
    "11809": {
        "expDef": 1.205,
        "expFrag": 1.002,
        "expSpot": 1.622,
        "expDamage": 880.985,
        "expWinRate": 52.491
    },
    "11841": {
        "expDef": 0.973,
        "expFrag": 0.936,
        "expSpot": 0.054,
        "expDamage": 1585.69,
        "expWinRate": 49.932
    },
    "11857": {
        "expDef": 1.859,
        "expFrag": 1.002,
        "expSpot": 0.156,
        "expDamage": 767.663,
        "expWinRate": 53.601
    },
    "12033": {
        "expDef": 0.903,
        "expFrag": 0.976,
        "expSpot": 0.802,
        "expDamage": 1548.114,
        "expWinRate": 49.238
    },
    "12049": {
        "expDef": 0.431,
        "expFrag": 1.012,
        "expSpot": 0.609,
        "expDamage": 2017.749,
        "expWinRate": 50.756
    },
    "12097": {
        "expDef": 0.926,
        "expFrag": 0.93,
        "expSpot": 0.733,
        "expDamage": 1282.493,
        "expWinRate": 51.172
    },
    "12113": {
        "expDef": 0.877,
        "expFrag": 0.847,
        "expSpot": 0.028,
        "expDamage": 1182.214,
        "expWinRate": 51.059
    },
    "12289": {
        "expDef": 1.075,
        "expFrag": 0.992,
        "expSpot": 1.811,
        "expDamage": 683.992,
        "expWinRate": 54.377
    },
    "12305": {
        "expDef": 0.681,
        "expFrag": 0.912,
        "expSpot": 1.324,
        "expDamage": 1835.601,
        "expWinRate": 49.304
    },
    "12369": {
        "expDef": 0.75,
        "expFrag": 0.771,
        "expSpot": 0.022,
        "expDamage": 1695.057,
        "expWinRate": 50.639
    },
    "12545": {
        "expDef": 0.834,
        "expFrag": 0.919,
        "expSpot": 1.55,
        "expDamage": 907.467,
        "expWinRate": 52.831
    },
    "12561": {
        "expDef": 1.354,
        "expFrag": 1.177,
        "expSpot": 2.624,
        "expDamage": 266.078,
        "expWinRate": 56.202
    },
    "12577": {
        "expDef": 0.919,
        "expFrag": 0.974,
        "expSpot": 1.736,
        "expDamage": 511.846,
        "expWinRate": 55.795
    },
    "12817": {
        "expDef": 1.41,
        "expFrag": 1.293,
        "expSpot": 1.985,
        "expDamage": 214.653,
        "expWinRate": 57.645
    },
    "12881": {
        "expDef": 0.95,
        "expFrag": 0.991,
        "expSpot": 1.366,
        "expDamage": 501.519,
        "expWinRate": 54.664
    },
    "13073": {
        "expDef": 1.442,
        "expFrag": 1.007,
        "expSpot": 1.615,
        "expDamage": 282.5,
        "expWinRate": 58.034
    },
    "13089": {
        "expDef": 0.509,
        "expFrag": 0.979,
        "expSpot": 0.755,
        "expDamage": 2022.87,
        "expWinRate": 49.719
    },
    "13121": {
        "expDef": 1.57,
        "expFrag": 1.278,
        "expSpot": 1.07,
        "expDamage": 348.03,
        "expWinRate": 58.272
    },
    "13137": {
        "expDef": 0.742,
        "expFrag": 1.006,
        "expSpot": 0.547,
        "expDamage": 1660.995,
        "expWinRate": 50.588
    },
    "13313": {
        "expDef": 0.891,
        "expFrag": 0.874,
        "expSpot": 1.218,
        "expDamage": 1153.021,
        "expWinRate": 50.424
    },
    "13329": {
        "expDef": 1.277,
        "expFrag": 1.191,
        "expSpot": 1.056,
        "expDamage": 415.84,
        "expWinRate": 55.867
    },
    "13345": {
        "expDef": 0.953,
        "expFrag": 0.843,
        "expSpot": 1.011,
        "expDamage": 1138.408,
        "expWinRate": 51.231
    },
    "13393": {
        "expDef": 1.46,
        "expFrag": 1.051,
        "expSpot": 0.516,
        "expDamage": 588.34,
        "expWinRate": 54.131
    },
    "13569": {
        "expDef": 0.63,
        "expFrag": 1.045,
        "expSpot": 0.728,
        "expDamage": 2050.211,
        "expWinRate": 48.678
    },
    "13585": {
        "expDef": 1.251,
        "expFrag": 1.067,
        "expSpot": 1.575,
        "expDamage": 373.608,
        "expWinRate": 57.317
    },
    "13825": {
        "expDef": 0.741,
        "expFrag": 0.938,
        "expSpot": 1.396,
        "expDamage": 1751.476,
        "expWinRate": 48.691
    },
    "13841": {
        "expDef": 0.975,
        "expFrag": 0.82,
        "expSpot": 1.132,
        "expDamage": 1138.755,
        "expWinRate": 51.361
    },
    "13857": {
        "expDef": 0.463,
        "expFrag": 0.995,
        "expSpot": 0.701,
        "expDamage": 2053.351,
        "expWinRate": 51.118
    },
    "13889": {
        "expDef": 0.608,
        "expFrag": 1.101,
        "expSpot": 0.802,
        "expDamage": 2056.405,
        "expWinRate": 49.672
    },
    "13905": {
        "expDef": 0.391,
        "expFrag": 1.072,
        "expSpot": 0.391,
        "expDamage": 2019.646,
        "expWinRate": 49.93
    },
    "14097": {
        "expDef": 1.098,
        "expFrag": 0.963,
        "expSpot": 1.568,
        "expDamage": 708.119,
        "expWinRate": 54.584
    },
    "14113": {
        "expDef": 0.657,
        "expFrag": 0.933,
        "expSpot": 1.27,
        "expDamage": 1858.023,
        "expWinRate": 49.206
    },
    "14145": {
        "expDef": 0.748,
        "expFrag": 0.627,
        "expSpot": 2.363,
        "expDamage": 405.136,
        "expWinRate": 53.342
    },
    "14161": {
        "expDef": 0.975,
        "expFrag": 1.037,
        "expSpot": 0.79,
        "expDamage": 1067.449,
        "expWinRate": 52.948
    },
    "14337": {
        "expDef": 0.688,
        "expFrag": 1.039,
        "expSpot": 0.91,
        "expDamage": 2010.944,
        "expWinRate": 48.957
    },
    "14353": {
        "expDef": 0.701,
        "expFrag": 0.595,
        "expSpot": 1.987,
        "expDamage": 667.244,
        "expWinRate": 51.638
    },
    "14401": {
        "expDef": 0.961,
        "expFrag": 0.857,
        "expSpot": 0.038,
        "expDamage": 1392.49,
        "expWinRate": 50.557
    },
    "14417": {
        "expDef": 1.135,
        "expFrag": 0.992,
        "expSpot": 0.834,
        "expDamage": 769,
        "expWinRate": 53.037
    },
    "14609": {
        "expDef": 0.774,
        "expFrag": 0.966,
        "expSpot": 1.214,
        "expDamage": 1882.066,
        "expWinRate": 48.736
    },
    "14625": {
        "expDef": 1.02,
        "expFrag": 0.909,
        "expSpot": 1.239,
        "expDamage": 1157.374,
        "expWinRate": 50.962
    },
    "14657": {
        "expDef": 1.505,
        "expFrag": 0.987,
        "expSpot": 0.099,
        "expDamage": 391.744,
        "expWinRate": 54.635
    },
    "14673": {
        "expDef": 0.897,
        "expFrag": 0.948,
        "expSpot": 0.719,
        "expDamage": 1334.369,
        "expWinRate": 50.951
    },
    "14865": {
        "expDef": 0.809,
        "expFrag": 0.957,
        "expSpot": 1.133,
        "expDamage": 1631.833,
        "expWinRate": 50.436
    },
    "14881": {
        "expDef": 0.582,
        "expFrag": 1.02,
        "expSpot": 0.831,
        "expDamage": 1981.95,
        "expWinRate": 48.598
    },
    "14913": {
        "expDef": 1.177,
        "expFrag": 0.94,
        "expSpot": 0.89,
        "expDamage": 387.977,
        "expWinRate": 55.199
    },
    "15105": {
        "expDef": 1.545,
        "expFrag": 1.221,
        "expSpot": 1.329,
        "expDamage": 304.722,
        "expWinRate": 56.672
    },
    "15121": {
        "expDef": 0.849,
        "expFrag": 1.131,
        "expSpot": 0.159,
        "expDamage": 198.705,
        "expWinRate": 56.235
    },
    "15137": {
        "expDef": 0.688,
        "expFrag": 0.619,
        "expSpot": 2.13,
        "expDamage": 504.381,
        "expWinRate": 52.433
    },
    "15169": {
        "expDef": 1.753,
        "expFrag": 1.277,
        "expSpot": 0.824,
        "expDamage": 235.995,
        "expWinRate": 57.612
    },
    "15361": {
        "expDef": 1.706,
        "expFrag": 1.317,
        "expSpot": 1.311,
        "expDamage": 231.33,
        "expWinRate": 58.954
    },
    "15377": {
        "expDef": 0.767,
        "expFrag": 0.827,
        "expSpot": 0.025,
        "expDamage": 1219.696,
        "expWinRate": 51.26
    },
    "15393": {
        "expDef": 0.749,
        "expFrag": 1.039,
        "expSpot": 0.941,
        "expDamage": 1595.836,
        "expWinRate": 50.38
    },
    "15425": {
        "expDef": 0.755,
        "expFrag": 0.926,
        "expSpot": 1.349,
        "expDamage": 1782.222,
        "expWinRate": 49.231
    },
    "15441": {
        "expDef": 0.829,
        "expFrag": 0.789,
        "expSpot": 1.091,
        "expDamage": 1130.348,
        "expWinRate": 52.248
    },
    "15617": {
        "expDef": 0.752,
        "expFrag": 1.109,
        "expSpot": 1.516,
        "expDamage": 1951.828,
        "expWinRate": 51.65
    },
    "15633": {
        "expDef": 1.545,
        "expFrag": 1.062,
        "expSpot": 0.089,
        "expDamage": 416.56,
        "expWinRate": 54.902
    },
    "15649": {
        "expDef": 0.681,
        "expFrag": 0.728,
        "expSpot": 2.367,
        "expDamage": 716.004,
        "expWinRate": 51.396
    },
    "15681": {
        "expDef": 0.773,
        "expFrag": 0.925,
        "expSpot": 1.343,
        "expDamage": 1551.613,
        "expWinRate": 50.911
    },
    "15697": {
        "expDef": 0.49,
        "expFrag": 0.882,
        "expSpot": 1.004,
        "expDamage": 1983.243,
        "expWinRate": 49.545
    },
    "15873": {
        "expDef": 1.317,
        "expFrag": 0.929,
        "expSpot": 1.497,
        "expDamage": 333.811,
        "expWinRate": 55.697
    },
    "15889": {
        "expDef": 1.027,
        "expFrag": 0.944,
        "expSpot": 1.311,
        "expDamage": 721.416,
        "expWinRate": 53.524
    },
    "15905": {
        "expDef": 0.708,
        "expFrag": 0.948,
        "expSpot": 1.289,
        "expDamage": 1898.101,
        "expWinRate": 50.068
    },
    "15937": {
        "expDef": 2.088,
        "expFrag": 1.389,
        "expSpot": 0.941,
        "expDamage": 241.733,
        "expWinRate": 59.122
    },
    "15953": {
        "expDef": 0.572,
        "expFrag": 0.975,
        "expSpot": 0.712,
        "expDamage": 1996.95,
        "expWinRate": 51.347
    },
    "16129": {
        "expDef": 0.895,
        "expFrag": 0.883,
        "expSpot": 0.035,
        "expDamage": 980.846,
        "expWinRate": 51.977
    },
    "16145": {
        "expDef": 1.081,
        "expFrag": 1.06,
        "expSpot": 0.662,
        "expDamage": 592.919,
        "expWinRate": 52.562
    },
    "16161": {
        "expDef": 0.921,
        "expFrag": 0.837,
        "expSpot": 0.03,
        "expDamage": 1470.368,
        "expWinRate": 50.777
    },
    "16209": {
        "expDef": 0.851,
        "expFrag": 0.919,
        "expSpot": 1.407,
        "expDamage": 612.914,
        "expWinRate": 54.453
    },
    "16385": {
        "expDef": 1.239,
        "expFrag": 1.037,
        "expSpot": 0.082,
        "expDamage": 583.403,
        "expWinRate": 53.478
    },
    "16401": {
        "expDef": 0.821,
        "expFrag": 1.031,
        "expSpot": 0.515,
        "expDamage": 1729.206,
        "expWinRate": 50.221
    },
    "16417": {
        "expDef": 1.341,
        "expFrag": 1.018,
        "expSpot": 0.057,
        "expDamage": 818.378,
        "expWinRate": 53.482
    },
    "16449": {
        "expDef": 0.644,
        "expFrag": 0.753,
        "expSpot": 0.726,
        "expDamage": 1191.648,
        "expWinRate": 51.786
    },
    "16641": {
        "expDef": 0.785,
        "expFrag": 0.676,
        "expSpot": 2.623,
        "expDamage": 473.889,
        "expWinRate": 52.758
    },
    "16657": {
        "expDef": 0.936,
        "expFrag": 1.07,
        "expSpot": 0.458,
        "expDamage": 1464.008,
        "expWinRate": 50.892
    },
    "16673": {
        "expDef": 0.734,
        "expFrag": 0.615,
        "expSpot": 2.249,
        "expDamage": 532.137,
        "expWinRate": 52.37
    },
    "16705": {
        "expDef": 0.5,
        "expFrag": 0.895,
        "expSpot": 1.161,
        "expDamage": 1731.292,
        "expWinRate": 52.513
    },
    "16897": {
        "expDef": 0.774,
        "expFrag": 0.961,
        "expSpot": 1.427,
        "expDamage": 1791.649,
        "expWinRate": 48.873
    },
    "16913": {
        "expDef": 0.729,
        "expFrag": 1.265,
        "expSpot": 0.473,
        "expDamage": 2153.032,
        "expWinRate": 48.716
    },
    "16961": {
        "expDef": 0.479,
        "expFrag": 0.817,
        "expSpot": 1.185,
        "expDamage": 1878.12,
        "expWinRate": 49.412
    },
    "17153": {
        "expDef": 0.789,
        "expFrag": 1.009,
        "expSpot": 1.465,
        "expDamage": 1799.886,
        "expWinRate": 48.935
    },
    "17169": {
        "expDef": 1.134,
        "expFrag": 1.292,
        "expSpot": 1.283,
        "expDamage": 321.943,
        "expWinRate": 57.038
    },
    "17217": {
        "expDef": 0.556,
        "expFrag": 0.827,
        "expSpot": 2.539,
        "expDamage": 1372.795,
        "expWinRate": 48.732
    },
    "17425": {
        "expDef": 0.952,
        "expFrag": 1.006,
        "expSpot": 1.298,
        "expDamage": 399.427,
        "expWinRate": 55.997
    },
    "17473": {
        "expDef": 0.75,
        "expFrag": 0.717,
        "expSpot": 2.537,
        "expDamage": 813.582,
        "expWinRate": 51.496
    },
    "17665": {
        "expDef": 0.754,
        "expFrag": 0.925,
        "expSpot": 1.341,
        "expDamage": 1472.426,
        "expWinRate": 51.092
    },
    "17729": {
        "expDef": 0.569,
        "expFrag": 1.133,
        "expSpot": 0.71,
        "expDamage": 1996.852,
        "expWinRate": 50.924
    },
    "17937": {
        "expDef": 1.241,
        "expFrag": 1.324,
        "expSpot": 0.793,
        "expDamage": 458.431,
        "expWinRate": 56.707
    },
    "17953": {
        "expDef": 0.789,
        "expFrag": 0.726,
        "expSpot": 2.514,
        "expDamage": 784.135,
        "expWinRate": 51.898
    },
    "17985": {
        "expDef": 0.699,
        "expFrag": 0.739,
        "expSpot": 2.274,
        "expDamage": 507.375,
        "expWinRate": 53.718
    },
    "18177": {
        "expDef": 0.642,
        "expFrag": 0.703,
        "expSpot": 2.542,
        "expDamage": 1015.497,
        "expWinRate": 50.883
    },
    "18193": {
        "expDef": 0.952,
        "expFrag": 1.033,
        "expSpot": 1.217,
        "expDamage": 510.143,
        "expWinRate": 54.519
    },
    "18209": {
        "expDef": 0.604,
        "expFrag": 0.668,
        "expSpot": 2.317,
        "expDamage": 1002.322,
        "expWinRate": 50.509
    },
    "18241": {
        "expDef": 0.686,
        "expFrag": 0.736,
        "expSpot": 2.666,
        "expDamage": 681.343,
        "expWinRate": 53.055
    },
    "18433": {
        "expDef": 0.822,
        "expFrag": 0.699,
        "expSpot": 2.666,
        "expDamage": 780.536,
        "expWinRate": 52.378
    },
    "18449": {
        "expDef": 0.707,
        "expFrag": 0.681,
        "expSpot": 2.613,
        "expDamage": 973.887,
        "expWinRate": 50.931
    },
    "18465": {
        "expDef": 1.711,
        "expFrag": 0.999,
        "expSpot": 0.107,
        "expDamage": 278.348,
        "expWinRate": 55.383
    },
    "18497": {
        "expDef": 0.693,
        "expFrag": 0.665,
        "expSpot": 2.762,
        "expDamage": 833.96,
        "expWinRate": 51.729
    },
    "18689": {
        "expDef": 0.956,
        "expFrag": 1.171,
        "expSpot": 1.276,
        "expDamage": 629.778,
        "expWinRate": 56.536
    },
    "18705": {
        "expDef": 0.516,
        "expFrag": 0.884,
        "expSpot": 0.722,
        "expDamage": 1639.305,
        "expWinRate": 52.537
    },
    "18721": {
        "expDef": 1.28,
        "expFrag": 0.993,
        "expSpot": 0.109,
        "expDamage": 399.738,
        "expWinRate": 54.607
    },
    "18753": {
        "expDef": 0.853,
        "expFrag": 0.744,
        "expSpot": 3.629,
        "expDamage": 986.905,
        "expWinRate": 53.278
    },
    "18961": {
        "expDef": 0.71,
        "expFrag": 0.685,
        "expSpot": 2.022,
        "expDamage": 766.961,
        "expWinRate": 51.609
    },
    "19009": {
        "expDef": 0.74,
        "expFrag": 0.783,
        "expSpot": 3.88,
        "expDamage": 1301.655,
        "expWinRate": 51.057
    },
    "19201": {
        "expDef": 0.687,
        "expFrag": 0.779,
        "expSpot": 3.144,
        "expDamage": 1245.953,
        "expWinRate": 50.307
    },
    "19217": {
        "expDef": 0.564,
        "expFrag": 1.059,
        "expSpot": 0.584,
        "expDamage": 2039.911,
        "expWinRate": 49.257
    },
    "19457": {
        "expDef": 0.776,
        "expFrag": 0.843,
        "expSpot": 2.289,
        "expDamage": 728.24,
        "expWinRate": 52.499
    },
    "19473": {
        "expDef": 0.423,
        "expFrag": 0.879,
        "expSpot": 1.001,
        "expDamage": 1959.703,
        "expWinRate": 50.921
    },
    "19489": {
        "expDef": 0.531,
        "expFrag": 0.73,
        "expSpot": 2.612,
        "expDamage": 1336.806,
        "expWinRate": 48.638
    },
    "19713": {
        "expDef": 0.531,
        "expFrag": 0.876,
        "expSpot": 1.105,
        "expDamage": 1598.693,
        "expWinRate": 52.493
    },
    "19729": {
        "expDef": 0.56,
        "expFrag": 0.846,
        "expSpot": 0.777,
        "expDamage": 1293.91,
        "expWinRate": 53.697
    },
    "19745": {
        "expDef": 0.742,
        "expFrag": 0.774,
        "expSpot": 2.811,
        "expDamage": 681.446,
        "expWinRate": 52.38
    },
    "19969": {
        "expDef": 0.536,
        "expFrag": 0.985,
        "expSpot": 1.348,
        "expDamage": 1958.097,
        "expWinRate": 50.499
    },
    "19985": {
        "expDef": 0.64,
        "expFrag": 0.704,
        "expSpot": 2.946,
        "expDamage": 1259.928,
        "expWinRate": 48.164
    },
    "20225": {
        "expDef": 0.417,
        "expFrag": 0.99,
        "expSpot": 1.189,
        "expDamage": 2080.041,
        "expWinRate": 52.666
    },
    "20241": {
        "expDef": 0.684,
        "expFrag": 0.679,
        "expSpot": 2.746,
        "expDamage": 837.518,
        "expWinRate": 52.037
    },
    "20257": {
        "expDef": 0.781,
        "expFrag": 1.26,
        "expSpot": 1.188,
        "expDamage": 678.078,
        "expWinRate": 57.304
    },
    "20481": {
        "expDef": 0.507,
        "expFrag": 0.802,
        "expSpot": 0.851,
        "expDamage": 1253.837,
        "expWinRate": 52.206
    },
    "20737": {
        "expDef": 0.447,
        "expFrag": 0.868,
        "expSpot": 0.963,
        "expDamage": 1636.016,
        "expWinRate": 52.36
    },
    "20993": {
        "expDef": 0.352,
        "expFrag": 0.884,
        "expSpot": 1.045,
        "expDamage": 1976.18,
        "expWinRate": 50.397
    },
    "21249": {
        "expDef": 0.578,
        "expFrag": 0.968,
        "expSpot": 0.853,
        "expDamage": 1690.609,
        "expWinRate": 52.138
    },
    "21505": {
        "expDef": 0.614,
        "expFrag": 1.016,
        "expSpot": 1.311,
        "expDamage": 1690.343,
        "expWinRate": 52.432
    },
    "21761": {
        "expDef": 0.68,
        "expFrag": 1.005,
        "expSpot": 1.158,
        "expDamage": 1832.193,
        "expWinRate": 49.435
    },
    "22017": {
        "expDef": 0.424,
        "expFrag": 0.875,
        "expSpot": 1.427,
        "expDamage": 1951.442,
        "expWinRate": 50.051
    },
    "22273": {
        "expDef": 0.477,
        "expFrag": 0.947,
        "expSpot": 0.902,
        "expDamage": 1971.546,
        "expWinRate": 51.37
    },
    "22529": {
        "expDef": 0.48,
        "expFrag": 0.921,
        "expSpot": 1.078,
        "expDamage": 1666.273,
        "expWinRate": 52.454
    },
    "22785": {
        "expDef": 0.536,
        "expFrag": 0.853,
        "expSpot": 0.832,
        "expDamage": 1310.26,
        "expWinRate": 52.486
    },
    "23041": {
        "expDef": 1.57,
        "expFrag": 1.031,
        "expSpot": 1.769,
        "expDamage": 438.548,
        "expWinRate": 56.022
    },
    "31233": {
        "expDef": 0.514,
        "expFrag": 1.024,
        "expSpot": 0.897,
        "expDamage": 1176.27,
        "expWinRate": 54.234
    },
    "31745": {
        "expDef": 0.467,
        "expFrag": 1.034,
        "expSpot": 0.367,
        "expDamage": 1438.1,
        "expWinRate": 51.519
    },
    "32001": {
        "expDef": 0.307,
        "expFrag": 0.811,
        "expSpot": 1.299,
        "expDamage": 1854.997,
        "expWinRate": 52.794
    },
    "43329": {
        "expDef": 2.026,
        "expFrag": 1.235,
        "expSpot": 1.842,
        "expDamage": 253.976,
        "expWinRate": 56.437
    },
    "43585": {
        "expDef": 0.801,
        "expFrag": 0.734,
        "expSpot": 3.273,
        "expDamage": 892.548,
        "expWinRate": 52.502
    },
    "43841": {
        "expDef": 1.661,
        "expFrag": 1.071,
        "expSpot": 0.873,
        "expDamage": 263.02,
        "expWinRate": 55.619
    },
    "44289": {
        "expDef": 0.465,
        "expFrag": 0.943,
        "expSpot": 1.055,
        "expDamage": 1422.668,
        "expWinRate": 52.649
    },
    "44545": {
        "expDef": 0.422,
        "expFrag": 0.884,
        "expSpot": 1.261,
        "expDamage": 1665.855,
        "expWinRate": 53.479
    },
    "44801": {
        "expDef": 1.131,
        "expFrag": 0.951,
        "expSpot": 1.703,
        "expDamage": 303.676,
        "expWinRate": 55.622
    },
    "45057": {
        "expDef": 0.637,
        "expFrag": 1.071,
        "expSpot": 0.47,
        "expDamage": 1504.655,
        "expWinRate": 51.021
    },
    "45313": {
        "expDef": 0.716,
        "expFrag": 0.768,
        "expSpot": 2.981,
        "expDamage": 530.509,
        "expWinRate": 54.292
    },
    "45569": {
        "expDef": 0.664,
        "expFrag": 0.708,
        "expSpot": 2.975,
        "expDamage": 862.782,
        "expWinRate": 52.296
    },
    "46081": {
        "expDef": 0.806,
        "expFrag": 0.932,
        "expSpot": 1.457,
        "expDamage": 1310.338,
        "expWinRate": 52.52
    },
    "46337": {
        "expDef": 0.679,
        "expFrag": 0.925,
        "expSpot": 1.54,
        "expDamage": 1272.317,
        "expWinRate": 52.759
    },
    "46593": {
        "expDef": 0.553,
        "expFrag": 1.085,
        "expSpot": 1.1,
        "expDamage": 1170.479,
        "expWinRate": 55.69
    },
    "46609": {
        "expDef": 0.653,
        "expFrag": 0.81,
        "expSpot": 0.968,
        "expDamage": 1165.875,
        "expWinRate": 52.984
    },
    "46849": {
        "expDef": 0.431,
        "expFrag": 1.1,
        "expSpot": 1.229,
        "expDamage": 2422.022,
        "expWinRate": 56.103
    },
    "46865": {
        "expDef": 0.468,
        "expFrag": 0.819,
        "expSpot": 1.342,
        "expDamage": 1384.993,
        "expWinRate": 52.254
    },
    "47105": {
        "expDef": 0.815,
        "expFrag": 0.968,
        "expSpot": 1.347,
        "expDamage": 534.24,
        "expWinRate": 54.698
    },
    "47121": {
        "expDef": 0.75,
        "expFrag": 1.117,
        "expSpot": 1.452,
        "expDamage": 1892.789,
        "expWinRate": 53.829
    },
    "47361": {
        "expDef": 0.611,
        "expFrag": 0.868,
        "expSpot": 0.987,
        "expDamage": 1285.869,
        "expWinRate": 51.386
    },
    "47377": {
        "expDef": 0.55,
        "expFrag": 0.657,
        "expSpot": 2.655,
        "expDamage": 893.509,
        "expWinRate": 51.17
    },
    "47617": {
        "expDef": 0.619,
        "expFrag": 0.853,
        "expSpot": 1.008,
        "expDamage": 1252.029,
        "expWinRate": 51.26
    },
    "47633": {
        "expDef": 1.536,
        "expFrag": 1.43,
        "expSpot": 1.295,
        "expDamage": 288.895,
        "expWinRate": 56.773
    },
    "47873": {
        "expDef": 0.904,
        "expFrag": 1.17,
        "expSpot": 1.142,
        "expDamage": 329.018,
        "expWinRate": 55.306
    },
    "48129": {
        "expDef": 0.856,
        "expFrag": 0.944,
        "expSpot": 1.168,
        "expDamage": 715.251,
        "expWinRate": 53.446
    },
    "48145": {
        "expDef": 0.538,
        "expFrag": 0.816,
        "expSpot": 0.767,
        "expDamage": 1263.769,
        "expWinRate": 53.008
    },
    "48385": {
        "expDef": 0.541,
        "expFrag": 0.941,
        "expSpot": 0.643,
        "expDamage": 1399.358,
        "expWinRate": 51.992
    },
    "48401": {
        "expDef": 0.783,
        "expFrag": 0.965,
        "expSpot": 0.692,
        "expDamage": 1381.324,
        "expWinRate": 51.408
    },
    "48641": {
        "expDef": 0.473,
        "expFrag": 0.891,
        "expSpot": 1.013,
        "expDamage": 1402.193,
        "expWinRate": 53.191
    },
    "48897": {
        "expDef": 0.684,
        "expFrag": 0.917,
        "expSpot": 1.55,
        "expDamage": 1255.554,
        "expWinRate": 52.478
    },
    "48913": {
        "expDef": 0.524,
        "expFrag": 0.811,
        "expSpot": 0.758,
        "expDamage": 1266.384,
        "expWinRate": 52.036
    },
    "49169": {
        "expDef": 0.639,
        "expFrag": 0.94,
        "expSpot": 1.014,
        "expDamage": 809.478,
        "expWinRate": 54.255
    },
    "49409": {
        "expDef": 0.535,
        "expFrag": 0.992,
        "expSpot": 1.085,
        "expDamage": 1398.523,
        "expWinRate": 52.87
    },
    "49665": {
        "expDef": 0.481,
        "expFrag": 0.896,
        "expSpot": 1.002,
        "expDamage": 1401.011,
        "expWinRate": 53.454
    },
    "49921": {
        "expDef": 0.536,
        "expFrag": 0.948,
        "expSpot": 1.141,
        "expDamage": 1060.281,
        "expWinRate": 53.468
    },
    "49937": {
        "expDef": 0.743,
        "expFrag": 0.803,
        "expSpot": 1.205,
        "expDamage": 1148.48,
        "expWinRate": 51.546
    },
    "50193": {
        "expDef": 0.627,
        "expFrag": 0.99,
        "expSpot": 0.547,
        "expDamage": 1417.957,
        "expWinRate": 51.062
    },
    "50945": {
        "expDef": 1.294,
        "expFrag": 1.233,
        "expSpot": 1.173,
        "expDamage": 234.557,
        "expWinRate": 56.778
    },
    "50961": {
        "expDef": 0.604,
        "expFrag": 0.64,
        "expSpot": 2.511,
        "expDamage": 838.701,
        "expWinRate": 51.009
    },
    "51089": {
        "expDef": 0.627,
        "expFrag": 0.925,
        "expSpot": 1.156,
        "expDamage": 1388.113,
        "expWinRate": 50.501
    },
    "51201": {
        "expDef": 1.286,
        "expFrag": 1.251,
        "expSpot": 1.305,
        "expDamage": 606.45,
        "expWinRate": 57.854
    },
    "51345": {
        "expDef": 0.901,
        "expFrag": 0.997,
        "expSpot": 1.452,
        "expDamage": 773.084,
        "expWinRate": 54.277
    },
    "51361": {
        "expDef": 0.698,
        "expFrag": 1.008,
        "expSpot": 1.291,
        "expDamage": 1357.49,
        "expWinRate": 51.478
    },
    "51457": {
        "expDef": 1.332,
        "expFrag": 1.158,
        "expSpot": 1.101,
        "expDamage": 525.319,
        "expWinRate": 55.484
    },
    "51473": {
        "expDef": 0.94,
        "expFrag": 1.237,
        "expSpot": 1.933,
        "expDamage": 679.807,
        "expWinRate": 56.049
    },
    "51489": {
        "expDef": 1.266,
        "expFrag": 1.296,
        "expSpot": 2.41,
        "expDamage": 229.484,
        "expWinRate": 56.475
    },
    "51553": {
        "expDef": 1.116,
        "expFrag": 0.936,
        "expSpot": 1.064,
        "expDamage": 513.12,
        "expWinRate": 52.976
    },
    "51569": {
        "expDef": 0.82,
        "expFrag": 0.941,
        "expSpot": 1.335,
        "expDamage": 737.302,
        "expWinRate": 52.854
    },
    "51585": {
        "expDef": 0.871,
        "expFrag": 1.038,
        "expSpot": 0.981,
        "expDamage": 783.781,
        "expWinRate": 53.189
    },
    "51713": {
        "expDef": 1.33,
        "expFrag": 1.169,
        "expSpot": 1.168,
        "expDamage": 596.81,
        "expWinRate": 54.989
    },
    "51729": {
        "expDef": 2.307,
        "expFrag": 1.643,
        "expSpot": 1.415,
        "expDamage": 345.421,
        "expWinRate": 62.834
    },
    "51745": {
        "expDef": 1.135,
        "expFrag": 1.044,
        "expSpot": 1.39,
        "expDamage": 511.11,
        "expWinRate": 55.925
    },
    "51825": {
        "expDef": 0.648,
        "expFrag": 0.908,
        "expSpot": 1.108,
        "expDamage": 1241.314,
        "expWinRate": 50.941
    },
    "51841": {
        "expDef": 1.169,
        "expFrag": 1.141,
        "expSpot": 1.445,
        "expDamage": 213.643,
        "expWinRate": 56.978
    },
    "51985": {
        "expDef": 1.595,
        "expFrag": 1.467,
        "expSpot": 1.359,
        "expDamage": 369.179,
        "expWinRate": 58.795
    },
    "52001": {
        "expDef": 1.264,
        "expFrag": 1.086,
        "expSpot": 1.611,
        "expDamage": 309.91,
        "expWinRate": 55.318
    },
    "52065": {
        "expDef": 0.821,
        "expFrag": 0.811,
        "expSpot": 1.211,
        "expDamage": 1140.614,
        "expWinRate": 51.235
    },
    "52097": {
        "expDef": 0.793,
        "expFrag": 0.968,
        "expSpot": 0.481,
        "expDamage": 1456.037,
        "expWinRate": 51.117
    },
    "52225": {
        "expDef": 1.349,
        "expFrag": 1.291,
        "expSpot": 2.161,
        "expDamage": 323.491,
        "expWinRate": 56.427
    },
    "52241": {
        "expDef": 1.621,
        "expFrag": 1.553,
        "expSpot": 1.572,
        "expDamage": 479.714,
        "expWinRate": 56.811
    },
    "52257": {
        "expDef": 1.051,
        "expFrag": 1.014,
        "expSpot": 1.607,
        "expDamage": 472.902,
        "expWinRate": 54.8
    },
    "52321": {
        "expDef": 0.79,
        "expFrag": 0.967,
        "expSpot": 1.028,
        "expDamage": 803.598,
        "expWinRate": 54.393
    },
    "52353": {
        "expDef": 0.745,
        "expFrag": 0.775,
        "expSpot": 1.238,
        "expDamage": 1153.035,
        "expWinRate": 52.364
    },
    "52481": {
        "expDef": 1.681,
        "expFrag": 1.262,
        "expSpot": 1.467,
        "expDamage": 374.542,
        "expWinRate": 54.402
    },
    "52497": {
        "expDef": 2.846,
        "expFrag": 1.874,
        "expSpot": 1.634,
        "expDamage": 312.793,
        "expWinRate": 55.8
    },
    "52513": {
        "expDef": 0.632,
        "expFrag": 0.813,
        "expSpot": 1.161,
        "expDamage": 1251.285,
        "expWinRate": 51.444
    },
    "52561": {
        "expDef": 0.81,
        "expFrag": 1.028,
        "expSpot": 0.587,
        "expDamage": 1724.578,
        "expWinRate": 52.175
    },
    "52577": {
        "expDef": 0.492,
        "expFrag": 0.756,
        "expSpot": 1.456,
        "expDamage": 1236.868,
        "expWinRate": 52.868
    },
    "52609": {
        "expDef": 0.666,
        "expFrag": 0.74,
        "expSpot": 1.284,
        "expDamage": 1106.458,
        "expWinRate": 52.112
    },
    "52737": {
        "expDef": 1.635,
        "expFrag": 1.041,
        "expSpot": 1.614,
        "expDamage": 258.755,
        "expWinRate": 54.539
    },
    "52769": {
        "expDef": 1.592,
        "expFrag": 1.111,
        "expSpot": 2.49,
        "expDamage": 281.591,
        "expWinRate": 57.244
    },
    "52817": {
        "expDef": 1.368,
        "expFrag": 0.926,
        "expSpot": 1.388,
        "expDamage": 366.128,
        "expWinRate": 56.566
    },
    "52833": {
        "expDef": 0.641,
        "expFrag": 0.763,
        "expSpot": 1.802,
        "expDamage": 1062.225,
        "expWinRate": 52.262
    },
    "52865": {
        "expDef": 0.522,
        "expFrag": 0.983,
        "expSpot": 1.033,
        "expDamage": 1443.432,
        "expWinRate": 52.454
    },
    "52993": {
        "expDef": 0.978,
        "expFrag": 1.107,
        "expSpot": 2.45,
        "expDamage": 370.068,
        "expWinRate": 55.545
    },
    "53121": {
        "expDef": 0.713,
        "expFrag": 0.951,
        "expSpot": 1.279,
        "expDamage": 1336.063,
        "expWinRate": 51.93
    },
    "53249": {
        "expDef": 0.918,
        "expFrag": 0.962,
        "expSpot": 1.082,
        "expDamage": 1243.156,
        "expWinRate": 51.421
    },
    "53505": {
        "expDef": 1.723,
        "expFrag": 1.454,
        "expSpot": 1.595,
        "expDamage": 333.476,
        "expWinRate": 55.697
    },
    "53537": {
        "expDef": 1.24,
        "expFrag": 1.173,
        "expSpot": 1.528,
        "expDamage": 213.888,
        "expWinRate": 57.846
    },
    "53585": {
        "expDef": 1.431,
        "expFrag": 1.081,
        "expSpot": 0.785,
        "expDamage": 527.13,
        "expWinRate": 54.496
    },
    "53761": {
        "expDef": 1.376,
        "expFrag": 1.23,
        "expSpot": 0.817,
        "expDamage": 590.343,
        "expWinRate": 53.182
    },
    "53793": {
        "expDef": 0.904,
        "expFrag": 0.841,
        "expSpot": 1.309,
        "expDamage": 1120.752,
        "expWinRate": 51.776
    },
    "53841": {
        "expDef": 1.258,
        "expFrag": 1.059,
        "expSpot": 0.576,
        "expDamage": 821.57,
        "expWinRate": 52.779
    },
    "54017": {
        "expDef": 1.106,
        "expFrag": 1.278,
        "expSpot": 1.415,
        "expDamage": 657.174,
        "expWinRate": 57.984
    },
    "54033": {
        "expDef": 0.799,
        "expFrag": 1.228,
        "expSpot": 1.857,
        "expDamage": 646.889,
        "expWinRate": 56.615
    },
    "54097": {
        "expDef": 1.18,
        "expFrag": 1.009,
        "expSpot": 0.768,
        "expDamage": 987.506,
        "expWinRate": 54.058
    },
    "54273": {
        "expDef": 1.517,
        "expFrag": 1.855,
        "expSpot": 0.927,
        "expDamage": 429.311,
        "expWinRate": 58.496
    },
    "54289": {
        "expDef": 0.809,
        "expFrag": 0.792,
        "expSpot": 0.891,
        "expDamage": 1265.8,
        "expWinRate": 51.861
    },
    "54353": {
        "expDef": 1.159,
        "expFrag": 1.238,
        "expSpot": 1.578,
        "expDamage": 611.24,
        "expWinRate": 56.743
    },
    "54529": {
        "expDef": 1.525,
        "expFrag": 1.377,
        "expSpot": 1.412,
        "expDamage": 245.805,
        "expWinRate": 56.326
    },
    "54545": {
        "expDef": 1.134,
        "expFrag": 0.998,
        "expSpot": 1.532,
        "expDamage": 520.118,
        "expWinRate": 54.733
    },
    "54609": {
        "expDef": 1.389,
        "expFrag": 1.288,
        "expSpot": 0.123,
        "expDamage": 338.097,
        "expWinRate": 56.722
    },
    "54785": {
        "expDef": 0.75,
        "expFrag": 1.088,
        "expSpot": 0.549,
        "expDamage": 819.846,
        "expWinRate": 53.34
    },
    "54801": {
        "expDef": 1.615,
        "expFrag": 1.107,
        "expSpot": 2.732,
        "expDamage": 272.148,
        "expWinRate": 58.586
    },
    "54865": {
        "expDef": 1.303,
        "expFrag": 1.354,
        "expSpot": 1.602,
        "expDamage": 211.55,
        "expWinRate": 55.803
    },
    "55057": {
        "expDef": 1.138,
        "expFrag": 1.064,
        "expSpot": 1.252,
        "expDamage": 561.408,
        "expWinRate": 53.296
    },
    "55073": {
        "expDef": 1.29,
        "expFrag": 1.334,
        "expSpot": 1.678,
        "expDamage": 213.224,
        "expWinRate": 56.606
    },
    "55121": {
        "expDef": 1.057,
        "expFrag": 0.905,
        "expSpot": 1.077,
        "expDamage": 996.833,
        "expWinRate": 53.702
    },
    "55297": {
        "expDef": 0.895,
        "expFrag": 1.139,
        "expSpot": 0.762,
        "expDamage": 1061.473,
        "expWinRate": 52.834
    },
    "55313": {
        "expDef": 1.057,
        "expFrag": 0.92,
        "expSpot": 0.769,
        "expDamage": 1251.288,
        "expWinRate": 51.136
    },
    "55377": {
        "expDef": 0.826,
        "expFrag": 0.691,
        "expSpot": 2.477,
        "expDamage": 523.856,
        "expWinRate": 52.791
    },
    "55569": {
        "expDef": 1.512,
        "expFrag": 1.233,
        "expSpot": 1.434,
        "expDamage": 1007.51,
        "expWinRate": 51.88
    },
    "55633": {
        "expDef": 0.765,
        "expFrag": 0.775,
        "expSpot": 1.266,
        "expDamage": 1140.211,
        "expWinRate": 51.625
    },
    "55841": {
        "expDef": 0.647,
        "expFrag": 0.984,
        "expSpot": 1.257,
        "expDamage": 1912.821,
        "expWinRate": 49.664
    },
    "55889": {
        "expDef": 0.962,
        "expFrag": 1.056,
        "expSpot": 2.19,
        "expDamage": 748.428,
        "expWinRate": 55.429
    },
    "56081": {
        "expDef": 0.397,
        "expFrag": 0.825,
        "expSpot": 0.93,
        "expDamage": 1344.948,
        "expWinRate": 52.667
    },
    "56097": {
        "expDef": 1.037,
        "expFrag": 0.949,
        "expSpot": 1.28,
        "expDamage": 693.436,
        "expWinRate": 54.264
    },
    "56145": {
        "expDef": 0.992,
        "expFrag": 0.955,
        "expSpot": 0.964,
        "expDamage": 768.182,
        "expWinRate": 53.472
    },
    "56353": {
        "expDef": 1.163,
        "expFrag": 0.979,
        "expSpot": 0.739,
        "expDamage": 1033.36,
        "expWinRate": 52.327
    },
    "56577": {
        "expDef": 1.573,
        "expFrag": 1.191,
        "expSpot": 1.32,
        "expDamage": 274.108,
        "expWinRate": 55.776
    },
    "56609": {
        "expDef": 0.804,
        "expFrag": 0.939,
        "expSpot": 0.789,
        "expDamage": 1007.707,
        "expWinRate": 53.754
    },
    "56657": {
        "expDef": 0.571,
        "expFrag": 0.783,
        "expSpot": 1.178,
        "expDamage": 1244.568,
        "expWinRate": 51.922
    },
    "56833": {
        "expDef": 0.877,
        "expFrag": 1.186,
        "expSpot": 1.513,
        "expDamage": 1125.252,
        "expWinRate": 55.145
    },
    "56865": {
        "expDef": 0.906,
        "expFrag": 0.962,
        "expSpot": 1.204,
        "expDamage": 1869.037,
        "expWinRate": 51.938
    },
    "56913": {
        "expDef": 0.663,
        "expFrag": 0.783,
        "expSpot": 1.351,
        "expDamage": 1170.241,
        "expWinRate": 52.506
    },
    "57105": {
        "expDef": 0.983,
        "expFrag": 1.028,
        "expSpot": 0.712,
        "expDamage": 794.805,
        "expWinRate": 52.294
    },
    "57121": {
        "expDef": 0.896,
        "expFrag": 0.806,
        "expSpot": 1.249,
        "expDamage": 1126.843,
        "expWinRate": 51.833
    },
    "57169": {
        "expDef": 0.831,
        "expFrag": 1.036,
        "expSpot": 1.009,
        "expDamage": 843.684,
        "expWinRate": 53.636
    },
    "57361": {
        "expDef": 1.191,
        "expFrag": 0.933,
        "expSpot": 1.029,
        "expDamage": 721.327,
        "expWinRate": 52.944
    },
    "57377": {
        "expDef": 0.762,
        "expFrag": 0.777,
        "expSpot": 1.313,
        "expDamage": 1116.417,
        "expWinRate": 50.879
    },
    "57425": {
        "expDef": 0.648,
        "expFrag": 1.058,
        "expSpot": 1.04,
        "expDamage": 1570.015,
        "expWinRate": 54.292
    },
    "57617": {
        "expDef": 1.053,
        "expFrag": 0.992,
        "expSpot": 1.325,
        "expDamage": 917.006,
        "expWinRate": 53.404
    },
    "57633": {
        "expDef": 0.727,
        "expFrag": 0.677,
        "expSpot": 2.748,
        "expDamage": 685.801,
        "expWinRate": 51.813
    },
    "57681": {
        "expDef": 1.005,
        "expFrag": 1.148,
        "expSpot": 0.8,
        "expDamage": 897.673,
        "expWinRate": 54.265
    },
    "57889": {
        "expDef": 0.743,
        "expFrag": 0.661,
        "expSpot": 2.968,
        "expDamage": 777.624,
        "expWinRate": 51.921
    },
    "57937": {
        "expDef": 0.502,
        "expFrag": 1.039,
        "expSpot": 1.366,
        "expDamage": 2271.933,
        "expWinRate": 52.713
    },
    "58113": {
        "expDef": 0.791,
        "expFrag": 1.095,
        "expSpot": 1.315,
        "expDamage": 843.88,
        "expWinRate": 54.712
    },
    "58369": {
        "expDef": 0.498,
        "expFrag": 0.866,
        "expSpot": 1.482,
        "expDamage": 1943.957,
        "expWinRate": 49.983
    },
    "58449": {
        "expDef": 0.662,
        "expFrag": 0.66,
        "expSpot": 2.733,
        "expDamage": 823.345,
        "expWinRate": 52.173
    },
    "58625": {
        "expDef": 0.665,
        "expFrag": 0.939,
        "expSpot": 0.424,
        "expDamage": 1287.638,
        "expWinRate": 50.783
    },
    "58641": {
        "expDef": 0.408,
        "expFrag": 0.931,
        "expSpot": 1.006,
        "expDamage": 1992.923,
        "expWinRate": 51.53
    },
    "58657": {
        "expDef": 0.481,
        "expFrag": 0.782,
        "expSpot": 1.232,
        "expDamage": 1292.5,
        "expWinRate": 52.601
    },
    "58705": {
        "expDef": 0.757,
        "expFrag": 0.666,
        "expSpot": 2.785,
        "expDamage": 991.31,
        "expWinRate": 52.705
    },
    "58881": {
        "expDef": 0.659,
        "expFrag": 0.848,
        "expSpot": 1.05,
        "expDamage": 1275.512,
        "expWinRate": 53.115
    },
    "58913": {
        "expDef": 0.693,
        "expFrag": 0.797,
        "expSpot": 1.234,
        "expDamage": 1219.03,
        "expWinRate": 52.76
    },
    "58961": {
        "expDef": 0.628,
        "expFrag": 0.722,
        "expSpot": 2.683,
        "expDamage": 1292.313,
        "expWinRate": 51.394
    },
    "59137": {
        "expDef": 0.728,
        "expFrag": 1.049,
        "expSpot": 1.081,
        "expDamage": 1120.206,
        "expWinRate": 54.463
    },
    "59169": {
        "expDef": 0.673,
        "expFrag": 0.8,
        "expSpot": 1.241,
        "expDamage": 1237.541,
        "expWinRate": 52.605
    },
    "59217": {
        "expDef": 0.563,
        "expFrag": 0.98,
        "expSpot": 0.851,
        "expDamage": 813.579,
        "expWinRate": 55.244
    },
    "59393": {
        "expDef": 0.925,
        "expFrag": 1.013,
        "expSpot": 1.457,
        "expDamage": 783.409,
        "expWinRate": 54.602
    },
    "59425": {
        "expDef": 0.526,
        "expFrag": 0.744,
        "expSpot": 0.84,
        "expDamage": 1255.385,
        "expWinRate": 51.602
    },
    "59473": {
        "expDef": 0.755,
        "expFrag": 0.644,
        "expSpot": 2.468,
        "expDamage": 832.028,
        "expWinRate": 52.437
    },
    "59649": {
        "expDef": 0.825,
        "expFrag": 1.108,
        "expSpot": 0.593,
        "expDamage": 1046.804,
        "expWinRate": 52.865
    },
    "59665": {
        "expDef": 1.138,
        "expFrag": 1.243,
        "expSpot": 1.331,
        "expDamage": 321.86,
        "expWinRate": 56.188
    },
    "59681": {
        "expDef": 0.839,
        "expFrag": 0.963,
        "expSpot": 1.191,
        "expDamage": 742.441,
        "expWinRate": 54.815
    },
    "59729": {
        "expDef": 0.838,
        "expFrag": 0.657,
        "expSpot": 2.306,
        "expDamage": 639.703,
        "expWinRate": 52.88
    },
    "59905": {
        "expDef": 0.76,
        "expFrag": 0.844,
        "expSpot": 1.256,
        "expDamage": 1142.986,
        "expWinRate": 52.167
    },
    "59937": {
        "expDef": 0.739,
        "expFrag": 0.991,
        "expSpot": 1.18,
        "expDamage": 1032.764,
        "expWinRate": 55.508
    },
    "59985": {
        "expDef": 0.651,
        "expFrag": 0.978,
        "expSpot": 0.596,
        "expDamage": 1364.61,
        "expWinRate": 53.54
    },
    "60161": {
        "expDef": 0.863,
        "expFrag": 1.119,
        "expSpot": 1.07,
        "expDamage": 908.293,
        "expWinRate": 56.538
    },
    "60177": {
        "expDef": 0.914,
        "expFrag": 0.803,
        "expSpot": 1.086,
        "expDamage": 1100.561,
        "expWinRate": 50.795
    },
    "60193": {
        "expDef": 0.465,
        "expFrag": 0.807,
        "expSpot": 1.268,
        "expDamage": 1318.152,
        "expWinRate": 53.03
    },
    "60225": {
        "expDef": 0.785,
        "expFrag": 1.066,
        "expSpot": 1.792,
        "expDamage": 1410.332,
        "expWinRate": 52.533
    },
    "60241": {
        "expDef": 0.928,
        "expFrag": 0.909,
        "expSpot": 0.761,
        "expDamage": 669.859,
        "expWinRate": 53.952
    },
    "60417": {
        "expDef": 0.491,
        "expFrag": 0.998,
        "expSpot": 0.927,
        "expDamage": 1419.657,
        "expWinRate": 53.46
    },
    "60433": {
        "expDef": 1.566,
        "expFrag": 1.216,
        "expSpot": 1.826,
        "expDamage": 225.445,
        "expWinRate": 58.127
    },
    "60449": {
        "expDef": 0.561,
        "expFrag": 1.034,
        "expSpot": 0.746,
        "expDamage": 1481.961,
        "expWinRate": 53.701
    },
    "60481": {
        "expDef": 0.793,
        "expFrag": 1.192,
        "expSpot": 1.293,
        "expDamage": 1866.034,
        "expWinRate": 52.241
    },
    "60689": {
        "expDef": 1.489,
        "expFrag": 1.099,
        "expSpot": 0.628,
        "expDamage": 534.921,
        "expWinRate": 53.427
    },
    "60737": {
        "expDef": 0.823,
        "expFrag": 1.039,
        "expSpot": 1.344,
        "expDamage": 822.246,
        "expWinRate": 55.215
    },
    "60929": {
        "expDef": 0.942,
        "expFrag": 1.021,
        "expSpot": 1.712,
        "expDamage": 291.75,
        "expWinRate": 54.902
    },
    "60945": {
        "expDef": 0.733,
        "expFrag": 0.953,
        "expSpot": 1.388,
        "expDamage": 1557.691,
        "expWinRate": 51.493
    },
    "60993": {
        "expDef": 0.656,
        "expFrag": 1.118,
        "expSpot": 1.181,
        "expDamage": 843.744,
        "expWinRate": 54.555
    },
    "61185": {
        "expDef": 0.761,
        "expFrag": 0.886,
        "expSpot": 1.205,
        "expDamage": 1801.928,
        "expWinRate": 50.553
    },
    "61217": {
        "expDef": 0.918,
        "expFrag": 1.162,
        "expSpot": 0.999,
        "expDamage": 911.178,
        "expWinRate": 55.248
    },
    "61249": {
        "expDef": 1.016,
        "expFrag": 1.177,
        "expSpot": 0.862,
        "expDamage": 653.601,
        "expWinRate": 54.072
    },
    "61441": {
        "expDef": 1.024,
        "expFrag": 1.23,
        "expSpot": 1.087,
        "expDamage": 489.225,
        "expWinRate": 56.507
    },
    "61457": {
        "expDef": 0.978,
        "expFrag": 0.947,
        "expSpot": 1.275,
        "expDamage": 510.764,
        "expWinRate": 54.824
    },
    "61473": {
        "expDef": 0.623,
        "expFrag": 0.912,
        "expSpot": 1.095,
        "expDamage": 1091.762,
        "expWinRate": 54.51
    },
    "61505": {
        "expDef": 0.85,
        "expFrag": 0.73,
        "expSpot": 3.022,
        "expDamage": 809.321,
        "expWinRate": 52.84
    },
    "61697": {
        "expDef": 0.79,
        "expFrag": 1.017,
        "expSpot": 1.6,
        "expDamage": 1864.906,
        "expWinRate": 53.025
    },
    "61713": {
        "expDef": 1.041,
        "expFrag": 0.999,
        "expSpot": 0.563,
        "expDamage": 1038.544,
        "expWinRate": 52.416
    },
    "61729": {
        "expDef": 0.474,
        "expFrag": 0.867,
        "expSpot": 1.11,
        "expDamage": 1716.803,
        "expWinRate": 52.214
    },
    "61761": {
        "expDef": 0.75,
        "expFrag": 0.968,
        "expSpot": 0.659,
        "expDamage": 1397.587,
        "expWinRate": 51.466
    },
    "61953": {
        "expDef": 0.759,
        "expFrag": 0.886,
        "expSpot": 1.449,
        "expDamage": 1181.169,
        "expWinRate": 52.061
    },
    "61969": {
        "expDef": 1.308,
        "expFrag": 0.932,
        "expSpot": 0.828,
        "expDamage": 1169.873,
        "expWinRate": 50.291
    },
    "61985": {
        "expDef": 0.559,
        "expFrag": 0.955,
        "expSpot": 1.164,
        "expDamage": 1504.576,
        "expWinRate": 53.222
    },
    "62001": {
        "expDef": 0.669,
        "expFrag": 0.678,
        "expSpot": 2.584,
        "expDamage": 839.915,
        "expWinRate": 51.463
    },
    "62017": {
        "expDef": 0.572,
        "expFrag": 0.773,
        "expSpot": 1.001,
        "expDamage": 1272.818,
        "expWinRate": 52.467
    },
    "62209": {
        "expDef": 0.8,
        "expFrag": 0.835,
        "expSpot": 0.719,
        "expDamage": 1220.791,
        "expWinRate": 54.787
    },
    "62241": {
        "expDef": 0.649,
        "expFrag": 0.869,
        "expSpot": 1.294,
        "expDamage": 1259.297,
        "expWinRate": 52.064
    },
    "62273": {
        "expDef": 0.592,
        "expFrag": 1.054,
        "expSpot": 0.726,
        "expDamage": 1471.099,
        "expWinRate": 52.556
    },
    "62481": {
        "expDef": 0.595,
        "expFrag": 1.016,
        "expSpot": 0.515,
        "expDamage": 1449.496,
        "expWinRate": 51.61
    },
    "62497": {
        "expDef": 0.868,
        "expFrag": 0.944,
        "expSpot": 1.039,
        "expDamage": 990.122,
        "expWinRate": 54.481
    },
    "62529": {
        "expDef": 0.688,
        "expFrag": 0.982,
        "expSpot": 1.053,
        "expDamage": 1335.315,
        "expWinRate": 51.399
    },
    "62737": {
        "expDef": 0.691,
        "expFrag": 0.852,
        "expSpot": 0.662,
        "expDamage": 1305.921,
        "expWinRate": 53.041
    },
    "62753": {
        "expDef": 0.318,
        "expFrag": 0.957,
        "expSpot": 1.386,
        "expDamage": 1793.414,
        "expWinRate": 55.322
    },
    "62785": {
        "expDef": 0.552,
        "expFrag": 0.768,
        "expSpot": 1.013,
        "expDamage": 1269.391,
        "expWinRate": 52.606
    },
    "62977": {
        "expDef": 0.721,
        "expFrag": 0.899,
        "expSpot": 1.526,
        "expDamage": 1224.935,
        "expWinRate": 52.195
    },
    "62993": {
        "expDef": 0.85,
        "expFrag": 0.94,
        "expSpot": 1.072,
        "expDamage": 1087.094,
        "expWinRate": 54.385
    },
    "63041": {
        "expDef": 0.649,
        "expFrag": 0.843,
        "expSpot": 0.834,
        "expDamage": 1236.276,
        "expWinRate": 50.976
    },
    "63233": {
        "expDef": 0.633,
        "expFrag": 0.772,
        "expSpot": 0.872,
        "expDamage": 1250.141,
        "expWinRate": 52.308
    },
    "63249": {
        "expDef": 1.063,
        "expFrag": 0.994,
        "expSpot": 1.081,
        "expDamage": 540.739,
        "expWinRate": 54.635
    },
    "63281": {
        "expDef": 0.683,
        "expFrag": 1.057,
        "expSpot": 0.79,
        "expDamage": 1414.784,
        "expWinRate": 52.452
    },
    "63297": {
        "expDef": 0.796,
        "expFrag": 0.789,
        "expSpot": 2.468,
        "expDamage": 725.636,
        "expWinRate": 52.222
    },
    "63505": {
        "expDef": 1.42,
        "expFrag": 0.822,
        "expSpot": 1.093,
        "expDamage": 255.514,
        "expWinRate": 55.938
    },
    "63537": {
        "expDef": 0.679,
        "expFrag": 0.946,
        "expSpot": 1.253,
        "expDamage": 1853.635,
        "expWinRate": 50.425
    },
    "63553": {
        "expDef": 0.97,
        "expFrag": 0.808,
        "expSpot": 1.407,
        "expDamage": 1101.451,
        "expWinRate": 50.695
    },
    "63761": {
        "expDef": 0.908,
        "expFrag": 0.855,
        "expSpot": 1.24,
        "expDamage": 1175.377,
        "expWinRate": 51.994
    },
    "63793": {
        "expDef": 0.895,
        "expFrag": 0.804,
        "expSpot": 1.282,
        "expDamage": 1062.33,
        "expWinRate": 51.977
    },
    "63809": {
        "expDef": 0.814,
        "expFrag": 0.904,
        "expSpot": 2.815,
        "expDamage": 798.846,
        "expWinRate": 53.353
    },
    "64017": {
        "expDef": 0.589,
        "expFrag": 0.648,
        "expSpot": 2.601,
        "expDamage": 832.137,
        "expWinRate": 51.046
    },
    "64049": {
        "expDef": 0.736,
        "expFrag": 0.888,
        "expSpot": 1.343,
        "expDamage": 1142.319,
        "expWinRate": 50.739
    },
    "64065": {
        "expDef": 1.041,
        "expFrag": 0.892,
        "expSpot": 1.336,
        "expDamage": 1198.164,
        "expWinRate": 50.897
    },
    "64273": {
        "expDef": 0.895,
        "expFrag": 0.805,
        "expSpot": 1.248,
        "expDamage": 1122.464,
        "expWinRate": 51.792
    },
    "64561": {
        "expDef": 0.613,
        "expFrag": 0.884,
        "expSpot": 1.327,
        "expDamage": 1263.347,
        "expWinRate": 52.922
    },
    "64769": {
        "expDef": 0.477,
        "expFrag": 1.13,
        "expSpot": 0.747,
        "expDamage": 884.158,
        "expWinRate": 54.885
    },
    "64817": {
        "expDef": 0.771,
        "expFrag": 0.791,
        "expSpot": 2.644,
        "expDamage": 582.724,
        "expWinRate": 52.478
    },
    "65073": {
        "expDef": 0.505,
        "expFrag": 0.865,
        "expSpot": 1.367,
        "expDamage": 1249.219,
        "expWinRate": 52.266
    }
}

export default WN8;