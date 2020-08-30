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
        "expDef": 1.107,
        "expFrag": 0.973,
        "expSpot": 1.366,
        "expDamage": 487.514,
        "expWinRate": 54.942
    },
    "33": {
        "expDef": 1.192,
        "expFrag": 1.238,
        "expSpot": 1.544,
        "expDamage": 600.894,
        "expWinRate": 56.076
    },
    "49": {
        "expDef": 0.905,
        "expFrag": 0.886,
        "expSpot": 1.588,
        "expDamage": 1111.067,
        "expWinRate": 51.751
    },
    "81": {
        "expDef": 1.263,
        "expFrag": 1.684,
        "expSpot": 0.924,
        "expDamage": 219.571,
        "expWinRate": 57.692
    },
    "113": {
        "expDef": 1.106,
        "expFrag": 1.604,
        "expSpot": 0.845,
        "expDamage": 215.243,
        "expWinRate": 58.48
    },
    "129": {
        "expDef": 1.169,
        "expFrag": 1.509,
        "expSpot": 1.327,
        "expDamage": 205.662,
        "expWinRate": 58.834
    },
    "145": {
        "expDef": 0.78,
        "expFrag": 0.979,
        "expSpot": 1.329,
        "expDamage": 769.299,
        "expWinRate": 54.635
    },
    "161": {
        "expDef": 1.517,
        "expFrag": 1.689,
        "expSpot": 1.014,
        "expDamage": 219.196,
        "expWinRate": 58.277
    },
    "257": {
        "expDef": 1.26,
        "expFrag": 1.117,
        "expSpot": 0.535,
        "expDamage": 580.836,
        "expWinRate": 54.398
    },
    "273": {
        "expDef": 1.277,
        "expFrag": 1.011,
        "expSpot": 0.074,
        "expDamage": 922.295,
        "expWinRate": 51.381
    },
    "289": {
        "expDef": 1.514,
        "expFrag": 1.07,
        "expSpot": 2.176,
        "expDamage": 270.889,
        "expWinRate": 57.027
    },
    "305": {
        "expDef": 0.686,
        "expFrag": 0.684,
        "expSpot": 2.521,
        "expDamage": 670.982,
        "expWinRate": 51.883
    },
    "321": {
        "expDef": 1.638,
        "expFrag": 1.218,
        "expSpot": 0.817,
        "expDamage": 298.92,
        "expWinRate": 58.418
    },
    "337": {
        "expDef": 1.213,
        "expFrag": 1.407,
        "expSpot": 0.932,
        "expDamage": 246.055,
        "expWinRate": 56.75
    },
    "353": {
        "expDef": 1.485,
        "expFrag": 1.374,
        "expSpot": 1.196,
        "expDamage": 231.225,
        "expWinRate": 57.944
    },
    "369": {
        "expDef": 1.472,
        "expFrag": 1.218,
        "expSpot": 1.386,
        "expDamage": 229.291,
        "expWinRate": 56.737
    },
    "385": {
        "expDef": 1.267,
        "expFrag": 1.327,
        "expSpot": 1.328,
        "expDamage": 244.954,
        "expWinRate": 57.409
    },
    "401": {
        "expDef": 1.428,
        "expFrag": 0.988,
        "expSpot": 1.043,
        "expDamage": 221.508,
        "expWinRate": 56.562
    },
    "417": {
        "expDef": 1.665,
        "expFrag": 1.278,
        "expSpot": 1.4,
        "expDamage": 242.758,
        "expWinRate": 57.559
    },
    "513": {
        "expDef": 0.816,
        "expFrag": 0.976,
        "expSpot": 1.008,
        "expDamage": 1033.756,
        "expWinRate": 53.405
    },
    "529": {
        "expDef": 1.019,
        "expFrag": 0.937,
        "expSpot": 0.981,
        "expDamage": 1071.452,
        "expWinRate": 53.573
    },
    "545": {
        "expDef": 1.411,
        "expFrag": 1.551,
        "expSpot": 1.855,
        "expDamage": 199.619,
        "expWinRate": 58.083
    },
    "561": {
        "expDef": 0.694,
        "expFrag": 0.959,
        "expSpot": 1.446,
        "expDamage": 1281.117,
        "expWinRate": 51.942
    },
    "577": {
        "expDef": 1.898,
        "expFrag": 1.481,
        "expSpot": 1.222,
        "expDamage": 202.817,
        "expWinRate": 57.812
    },
    "593": {
        "expDef": 1.427,
        "expFrag": 1.366,
        "expSpot": 2.103,
        "expDamage": 243.604,
        "expWinRate": 58.21
    },
    "609": {
        "expDef": 1.729,
        "expFrag": 1.554,
        "expSpot": 1.109,
        "expDamage": 196.786,
        "expWinRate": 57.785
    },
    "625": {
        "expDef": 1.485,
        "expFrag": 0.957,
        "expSpot": 1.066,
        "expDamage": 284.096,
        "expWinRate": 56.544
    },
    "641": {
        "expDef": 1.524,
        "expFrag": 1.168,
        "expSpot": 1.361,
        "expDamage": 323.993,
        "expWinRate": 56.726
    },
    "673": {
        "expDef": 1.522,
        "expFrag": 1.492,
        "expSpot": 0.965,
        "expDamage": 276.862,
        "expWinRate": 59.002
    },
    "769": {
        "expDef": 1.288,
        "expFrag": 0.983,
        "expSpot": 1.947,
        "expDamage": 260.471,
        "expWinRate": 56.097
    },
    "785": {
        "expDef": 1.757,
        "expFrag": 1.355,
        "expSpot": 1.494,
        "expDamage": 233.916,
        "expWinRate": 57.241
    },
    "801": {
        "expDef": 0.891,
        "expFrag": 0.965,
        "expSpot": 1.019,
        "expDamage": 798.307,
        "expWinRate": 53.718
    },
    "817": {
        "expDef": 0.692,
        "expFrag": 0.912,
        "expSpot": 1.303,
        "expDamage": 1245.311,
        "expWinRate": 52.323
    },
    "833": {
        "expDef": 1.357,
        "expFrag": 1.339,
        "expSpot": 0.119,
        "expDamage": 220.844,
        "expWinRate": 56.494
    },
    "849": {
        "expDef": 1.576,
        "expFrag": 1.117,
        "expSpot": 0.772,
        "expDamage": 440.894,
        "expWinRate": 55.97
    },
    "865": {
        "expDef": 1.411,
        "expFrag": 1.349,
        "expSpot": 1.455,
        "expDamage": 236.59,
        "expWinRate": 56.855
    },
    "881": {
        "expDef": 1.322,
        "expFrag": 0.958,
        "expSpot": 1.164,
        "expDamage": 370.376,
        "expWinRate": 55.971
    },
    "897": {
        "expDef": 1.103,
        "expFrag": 0.992,
        "expSpot": 1.271,
        "expDamage": 383.664,
        "expWinRate": 55.444
    },
    "913": {
        "expDef": 0.447,
        "expFrag": 0.883,
        "expSpot": 1.012,
        "expDamage": 1371.291,
        "expWinRate": 53.362
    },
    "929": {
        "expDef": 1.446,
        "expFrag": 1.328,
        "expSpot": 1.104,
        "expDamage": 361.69,
        "expWinRate": 56.829
    },
    "1025": {
        "expDef": 1.429,
        "expFrag": 1.312,
        "expSpot": 1.687,
        "expDamage": 230.582,
        "expWinRate": 56.815
    },
    "1041": {
        "expDef": 1.377,
        "expFrag": 1.109,
        "expSpot": 0.698,
        "expDamage": 582.718,
        "expWinRate": 54.193
    },
    "1057": {
        "expDef": 0.985,
        "expFrag": 1.056,
        "expSpot": 1.364,
        "expDamage": 523.052,
        "expWinRate": 54.83
    },
    "1073": {
        "expDef": 0.963,
        "expFrag": 0.908,
        "expSpot": 1.462,
        "expDamage": 913.935,
        "expWinRate": 54.339
    },
    "1089": {
        "expDef": 1.444,
        "expFrag": 1.143,
        "expSpot": 1.101,
        "expDamage": 382.964,
        "expWinRate": 55.849
    },
    "1105": {
        "expDef": 0.976,
        "expFrag": 0.986,
        "expSpot": 1.85,
        "expDamage": 700.084,
        "expWinRate": 54.443
    },
    "1121": {
        "expDef": 1.077,
        "expFrag": 0.89,
        "expSpot": 1.006,
        "expDamage": 911.279,
        "expWinRate": 51.486
    },
    "1137": {
        "expDef": 1.093,
        "expFrag": 0.85,
        "expSpot": 1.414,
        "expDamage": 486.631,
        "expWinRate": 54.396
    },
    "1153": {
        "expDef": 0.995,
        "expFrag": 0.908,
        "expSpot": 1.167,
        "expDamage": 501.589,
        "expWinRate": 54.016
    },
    "1169": {
        "expDef": 1.33,
        "expFrag": 1.522,
        "expSpot": 1.529,
        "expDamage": 218.207,
        "expWinRate": 58.792
    },
    "1185": {
        "expDef": 0.917,
        "expFrag": 1.128,
        "expSpot": 1.049,
        "expDamage": 428.525,
        "expWinRate": 55.614
    },
    "1297": {
        "expDef": 1.17,
        "expFrag": 0.879,
        "expSpot": 1.243,
        "expDamage": 899.434,
        "expWinRate": 53.846
    },
    "1313": {
        "expDef": 1.088,
        "expFrag": 0.97,
        "expSpot": 1.415,
        "expDamage": 694.557,
        "expWinRate": 54.888
    },
    "1329": {
        "expDef": 1.74,
        "expFrag": 1.673,
        "expSpot": 1.273,
        "expDamage": 221.104,
        "expWinRate": 56.574
    },
    "1345": {
        "expDef": 2.011,
        "expFrag": 1.39,
        "expSpot": 1.053,
        "expDamage": 239.204,
        "expWinRate": 58.545
    },
    "1361": {
        "expDef": 1.534,
        "expFrag": 1.123,
        "expSpot": 1.756,
        "expDamage": 295.68,
        "expWinRate": 57.301
    },
    "1377": {
        "expDef": 1.083,
        "expFrag": 0.915,
        "expSpot": 1.182,
        "expDamage": 487.885,
        "expWinRate": 54.443
    },
    "1393": {
        "expDef": 1.017,
        "expFrag": 0.916,
        "expSpot": 1.426,
        "expDamage": 715.891,
        "expWinRate": 53.426
    },
    "1409": {
        "expDef": 0.999,
        "expFrag": 0.939,
        "expSpot": 1.087,
        "expDamage": 743.576,
        "expWinRate": 53.586
    },
    "1425": {
        "expDef": 1.382,
        "expFrag": 1.45,
        "expSpot": 1.018,
        "expDamage": 276.678,
        "expWinRate": 58.709
    },
    "1441": {
        "expDef": 0.833,
        "expFrag": 0.899,
        "expSpot": 1.066,
        "expDamage": 491.75,
        "expWinRate": 54.909
    },
    "1537": {
        "expDef": 0.997,
        "expFrag": 1.014,
        "expSpot": 1.206,
        "expDamage": 395.967,
        "expWinRate": 55.582
    },
    "1553": {
        "expDef": 1.247,
        "expFrag": 1.053,
        "expSpot": 0.725,
        "expDamage": 750.571,
        "expWinRate": 53.574
    },
    "1569": {
        "expDef": 1.012,
        "expFrag": 0.919,
        "expSpot": 1.576,
        "expDamage": 944.361,
        "expWinRate": 54.3
    },
    "1585": {
        "expDef": 0.955,
        "expFrag": 0.816,
        "expSpot": 1.501,
        "expDamage": 1043.995,
        "expWinRate": 52.25
    },
    "1601": {
        "expDef": 2.13,
        "expFrag": 1.34,
        "expSpot": 0.95,
        "expDamage": 234.484,
        "expWinRate": 57.48
    },
    "1617": {
        "expDef": 1.101,
        "expFrag": 1.019,
        "expSpot": 0.863,
        "expDamage": 381.56,
        "expWinRate": 55.002
    },
    "1633": {
        "expDef": 1.159,
        "expFrag": 0.988,
        "expSpot": 1.233,
        "expDamage": 373.862,
        "expWinRate": 55.967
    },
    "1649": {
        "expDef": 0.855,
        "expFrag": 0.871,
        "expSpot": 1.221,
        "expDamage": 917.416,
        "expWinRate": 53.068
    },
    "1665": {
        "expDef": 0.755,
        "expFrag": 0.889,
        "expSpot": 1.294,
        "expDamage": 925.314,
        "expWinRate": 52.933
    },
    "1681": {
        "expDef": 1.188,
        "expFrag": 1.067,
        "expSpot": 1.199,
        "expDamage": 307.08,
        "expWinRate": 55.497
    },
    "1697": {
        "expDef": 0.685,
        "expFrag": 0.984,
        "expSpot": 1.012,
        "expDamage": 748.866,
        "expWinRate": 53.66
    },
    "1793": {
        "expDef": 0.78,
        "expFrag": 0.914,
        "expSpot": 0.042,
        "expDamage": 1147.527,
        "expWinRate": 50.618
    },
    "1809": {
        "expDef": 1.204,
        "expFrag": 1.417,
        "expSpot": 0.607,
        "expDamage": 458.892,
        "expWinRate": 56.513
    },
    "1825": {
        "expDef": 1.471,
        "expFrag": 1.49,
        "expSpot": 2.455,
        "expDamage": 255.315,
        "expWinRate": 57.317
    },
    "1841": {
        "expDef": 0.716,
        "expFrag": 0.874,
        "expSpot": 1.365,
        "expDamage": 1432.587,
        "expWinRate": 51.508
    },
    "1889": {
        "expDef": 1.115,
        "expFrag": 0.95,
        "expSpot": 1.06,
        "expDamage": 726.464,
        "expWinRate": 52.497
    },
    "1905": {
        "expDef": 0.92,
        "expFrag": 0.786,
        "expSpot": 1.042,
        "expDamage": 1071.713,
        "expWinRate": 51.789
    },
    "1921": {
        "expDef": 0.667,
        "expFrag": 0.949,
        "expSpot": 0.824,
        "expDamage": 1347.479,
        "expWinRate": 52.24
    },
    "1937": {
        "expDef": 0.928,
        "expFrag": 0.777,
        "expSpot": 1.461,
        "expDamage": 338.579,
        "expWinRate": 54.236
    },
    "1953": {
        "expDef": 0.697,
        "expFrag": 0.94,
        "expSpot": 1.306,
        "expDamage": 939.513,
        "expWinRate": 53.48
    },
    "2049": {
        "expDef": 1.086,
        "expFrag": 0.817,
        "expSpot": 2.305,
        "expDamage": 315.675,
        "expWinRate": 55.796
    },
    "2065": {
        "expDef": 1.604,
        "expFrag": 1.387,
        "expSpot": 1.689,
        "expDamage": 240.562,
        "expWinRate": 57.383
    },
    "2081": {
        "expDef": 1.863,
        "expFrag": 1.246,
        "expSpot": 0.389,
        "expDamage": 230.199,
        "expWinRate": 54.384
    },
    "2097": {
        "expDef": 0.523,
        "expFrag": 0.854,
        "expSpot": 1.232,
        "expDamage": 1592.236,
        "expWinRate": 51.45
    },
    "2113": {
        "expDef": 1.301,
        "expFrag": 1.328,
        "expSpot": 0.11,
        "expDamage": 668.55,
        "expWinRate": 54.604
    },
    "2129": {
        "expDef": 1.2,
        "expFrag": 0.942,
        "expSpot": 1.602,
        "expDamage": 460.257,
        "expWinRate": 55.216
    },
    "2145": {
        "expDef": 1.353,
        "expFrag": 1.267,
        "expSpot": 1.189,
        "expDamage": 329.849,
        "expWinRate": 57.445
    },
    "2161": {
        "expDef": 0.736,
        "expFrag": 1.023,
        "expSpot": 1.116,
        "expDamage": 1655.169,
        "expWinRate": 51.089
    },
    "2177": {
        "expDef": 0.544,
        "expFrag": 0.962,
        "expSpot": 0.924,
        "expDamage": 1643.038,
        "expWinRate": 51.714
    },
    "2193": {
        "expDef": 0.708,
        "expFrag": 0.887,
        "expSpot": 1.188,
        "expDamage": 518.876,
        "expWinRate": 54.877
    },
    "2209": {
        "expDef": 0.638,
        "expFrag": 0.887,
        "expSpot": 1.088,
        "expDamage": 1218.015,
        "expWinRate": 50.898
    },
    "2305": {
        "expDef": 0.877,
        "expFrag": 1.015,
        "expSpot": 0.519,
        "expDamage": 1001.897,
        "expWinRate": 52.64
    },
    "2321": {
        "expDef": 1.094,
        "expFrag": 0.998,
        "expSpot": 1.133,
        "expDamage": 762.054,
        "expWinRate": 54.692
    },
    "2353": {
        "expDef": 1.499,
        "expFrag": 1.431,
        "expSpot": 1.264,
        "expDamage": 247.606,
        "expWinRate": 57.528
    },
    "2369": {
        "expDef": 1.594,
        "expFrag": 1.592,
        "expSpot": 1.039,
        "expDamage": 405.076,
        "expWinRate": 57.966
    },
    "2385": {
        "expDef": 1.396,
        "expFrag": 1.177,
        "expSpot": 1.005,
        "expDamage": 305.221,
        "expWinRate": 57.174
    },
    "2401": {
        "expDef": 1.445,
        "expFrag": 1.144,
        "expSpot": 1.566,
        "expDamage": 290.013,
        "expWinRate": 56.981
    },
    "2417": {
        "expDef": 0.627,
        "expFrag": 1.048,
        "expSpot": 1.306,
        "expDamage": 1898.202,
        "expWinRate": 49.103
    },
    "2433": {
        "expDef": 0.486,
        "expFrag": 0.939,
        "expSpot": 1.136,
        "expDamage": 1929.484,
        "expWinRate": 49.736
    },
    "2449": {
        "expDef": 0.714,
        "expFrag": 0.927,
        "expSpot": 0.77,
        "expDamage": 740.752,
        "expWinRate": 53.562
    },
    "2465": {
        "expDef": 0.658,
        "expFrag": 1.068,
        "expSpot": 1.087,
        "expDamage": 1704.376,
        "expWinRate": 50.702
    },
    "2561": {
        "expDef": 0.964,
        "expFrag": 0.934,
        "expSpot": 1.333,
        "expDamage": 708.139,
        "expWinRate": 53.995
    },
    "2577": {
        "expDef": 1.094,
        "expFrag": 1.015,
        "expSpot": 1.198,
        "expDamage": 646.493,
        "expWinRate": 54.78
    },
    "2593": {
        "expDef": 0.575,
        "expFrag": 0.973,
        "expSpot": 0.677,
        "expDamage": 1713.439,
        "expWinRate": 50.64
    },
    "2625": {
        "expDef": 0.849,
        "expFrag": 0.889,
        "expSpot": 0.907,
        "expDamage": 785.951,
        "expWinRate": 53.444
    },
    "2657": {
        "expDef": 1.007,
        "expFrag": 0.819,
        "expSpot": 1.165,
        "expDamage": 1123.465,
        "expWinRate": 51.138
    },
    "2689": {
        "expDef": 1.489,
        "expFrag": 1.225,
        "expSpot": 0.561,
        "expDamage": 303.037,
        "expWinRate": 53.144
    },
    "2705": {
        "expDef": 0.627,
        "expFrag": 0.967,
        "expSpot": 1.03,
        "expDamage": 1077.07,
        "expWinRate": 53.547
    },
    "2721": {
        "expDef": 0.613,
        "expFrag": 1.157,
        "expSpot": 1.109,
        "expDamage": 2053.541,
        "expWinRate": 49.768
    },
    "2817": {
        "expDef": 0.769,
        "expFrag": 1.027,
        "expSpot": 1.031,
        "expDamage": 812.91,
        "expWinRate": 53.797
    },
    "2833": {
        "expDef": 1.313,
        "expFrag": 1.17,
        "expSpot": 0.168,
        "expDamage": 347.885,
        "expWinRate": 57.752
    },
    "2849": {
        "expDef": 0.703,
        "expFrag": 0.789,
        "expSpot": 0.817,
        "expDamage": 1252.15,
        "expWinRate": 50.817
    },
    "2865": {
        "expDef": 0.779,
        "expFrag": 0.837,
        "expSpot": 1.08,
        "expDamage": 1227.09,
        "expWinRate": 52.99
    },
    "2881": {
        "expDef": 1.187,
        "expFrag": 0.816,
        "expSpot": 0.811,
        "expDamage": 283.921,
        "expWinRate": 56.232
    },
    "2897": {
        "expDef": 1.317,
        "expFrag": 1.118,
        "expSpot": 0.863,
        "expDamage": 625.424,
        "expWinRate": 55.733
    },
    "2913": {
        "expDef": 1.159,
        "expFrag": 0.976,
        "expSpot": 1.677,
        "expDamage": 364.371,
        "expWinRate": 55.485
    },
    "2945": {
        "expDef": 1.481,
        "expFrag": 1.402,
        "expSpot": 0.594,
        "expDamage": 372.571,
        "expWinRate": 57.735
    },
    "2961": {
        "expDef": 0.509,
        "expFrag": 0.841,
        "expSpot": 0.968,
        "expDamage": 1322.216,
        "expWinRate": 51.758
    },
    "3073": {
        "expDef": 1.21,
        "expFrag": 1.083,
        "expSpot": 1.354,
        "expDamage": 276.857,
        "expWinRate": 56.21
    },
    "3089": {
        "expDef": 1.58,
        "expFrag": 1.631,
        "expSpot": 1.802,
        "expDamage": 221.81,
        "expWinRate": 57.81
    },
    "3105": {
        "expDef": 1.047,
        "expFrag": 1.032,
        "expSpot": 0.838,
        "expDamage": 363.467,
        "expWinRate": 55.357
    },
    "3121": {
        "expDef": 1.09,
        "expFrag": 0.907,
        "expSpot": 2.232,
        "expDamage": 334.506,
        "expWinRate": 55.279
    },
    "3137": {
        "expDef": 0.956,
        "expFrag": 0.997,
        "expSpot": 0.895,
        "expDamage": 1313.718,
        "expWinRate": 51.421
    },
    "3153": {
        "expDef": 1.216,
        "expFrag": 0.935,
        "expSpot": 0.832,
        "expDamage": 1012.86,
        "expWinRate": 55.01
    },
    "3169": {
        "expDef": 1.516,
        "expFrag": 1.206,
        "expSpot": 1.236,
        "expDamage": 224.487,
        "expWinRate": 56.436
    },
    "3201": {
        "expDef": 1.429,
        "expFrag": 1.196,
        "expSpot": 0.635,
        "expDamage": 442.014,
        "expWinRate": 55.77
    },
    "3217": {
        "expDef": 0.433,
        "expFrag": 0.893,
        "expSpot": 0.944,
        "expDamage": 1678.654,
        "expWinRate": 52.304
    },
    "3329": {
        "expDef": 1.647,
        "expFrag": 1.643,
        "expSpot": 1.21,
        "expDamage": 218.165,
        "expWinRate": 57.419
    },
    "3345": {
        "expDef": 1.478,
        "expFrag": 1.324,
        "expSpot": 1.287,
        "expDamage": 331.076,
        "expWinRate": 58.335
    },
    "3361": {
        "expDef": 1.188,
        "expFrag": 1.141,
        "expSpot": 1.13,
        "expDamage": 617.243,
        "expWinRate": 55.571
    },
    "3377": {
        "expDef": 0.696,
        "expFrag": 0.698,
        "expSpot": 2.305,
        "expDamage": 708.935,
        "expWinRate": 52.035
    },
    "3393": {
        "expDef": 1.868,
        "expFrag": 1.079,
        "expSpot": 0.138,
        "expDamage": 390.572,
        "expWinRate": 52.225
    },
    "3409": {
        "expDef": 1.638,
        "expFrag": 1.096,
        "expSpot": 0.126,
        "expDamage": 286.367,
        "expWinRate": 56.097
    },
    "3425": {
        "expDef": 0.775,
        "expFrag": 0.915,
        "expSpot": 1.118,
        "expDamage": 1545.083,
        "expWinRate": 50.406
    },
    "3457": {
        "expDef": 1.06,
        "expFrag": 1.073,
        "expSpot": 0.825,
        "expDamage": 527.894,
        "expWinRate": 55.061
    },
    "3473": {
        "expDef": 0.35,
        "expFrag": 0.944,
        "expSpot": 0.94,
        "expDamage": 2098.131,
        "expWinRate": 50.906
    },
    "3585": {
        "expDef": 1.034,
        "expFrag": 1.083,
        "expSpot": 0.726,
        "expDamage": 787.708,
        "expWinRate": 53.269
    },
    "3601": {
        "expDef": 1.687,
        "expFrag": 1.752,
        "expSpot": 0.898,
        "expDamage": 298.436,
        "expWinRate": 58.307
    },
    "3617": {
        "expDef": 1.726,
        "expFrag": 0.872,
        "expSpot": 0.115,
        "expDamage": 474.155,
        "expWinRate": 49.63
    },
    "3633": {
        "expDef": 0.785,
        "expFrag": 0.993,
        "expSpot": 1.073,
        "expDamage": 1070.517,
        "expWinRate": 54.265
    },
    "3649": {
        "expDef": 0.773,
        "expFrag": 1.071,
        "expSpot": 1.692,
        "expDamage": 1783.104,
        "expWinRate": 48.73
    },
    "3665": {
        "expDef": 1.055,
        "expFrag": 0.947,
        "expSpot": 1.011,
        "expDamage": 740.261,
        "expWinRate": 52.859
    },
    "3681": {
        "expDef": 0.691,
        "expFrag": 0.975,
        "expSpot": 1.304,
        "expDamage": 1865.292,
        "expWinRate": 49.927
    },
    "3713": {
        "expDef": 1.031,
        "expFrag": 0.957,
        "expSpot": 0.603,
        "expDamage": 772.389,
        "expWinRate": 53.072
    },
    "3729": {
        "expDef": 0.86,
        "expFrag": 0.876,
        "expSpot": 1.276,
        "expDamage": 667.661,
        "expWinRate": 52.585
    },
    "3841": {
        "expDef": 1.422,
        "expFrag": 1.244,
        "expSpot": 0.121,
        "expDamage": 214.798,
        "expWinRate": 54.632
    },
    "3857": {
        "expDef": 1.035,
        "expFrag": 1.001,
        "expSpot": 0.681,
        "expDamage": 1042.136,
        "expWinRate": 53.014
    },
    "3873": {
        "expDef": 0.96,
        "expFrag": 0.992,
        "expSpot": 1.066,
        "expDamage": 1135.827,
        "expWinRate": 53.967
    },
    "3889": {
        "expDef": 0.638,
        "expFrag": 0.662,
        "expSpot": 2.483,
        "expDamage": 849.368,
        "expWinRate": 51.712
    },
    "3905": {
        "expDef": 0.767,
        "expFrag": 0.959,
        "expSpot": 0.85,
        "expDamage": 1588.402,
        "expWinRate": 50.306
    },
    "3921": {
        "expDef": 0.802,
        "expFrag": 0.83,
        "expSpot": 1.04,
        "expDamage": 1272.924,
        "expWinRate": 52.59
    },
    "3937": {
        "expDef": 0.436,
        "expFrag": 0.9,
        "expSpot": 0.794,
        "expDamage": 2054.709,
        "expWinRate": 51.058
    },
    "3969": {
        "expDef": 1.092,
        "expFrag": 0.941,
        "expSpot": 0.58,
        "expDamage": 981.503,
        "expWinRate": 52.282
    },
    "3985": {
        "expDef": 0.633,
        "expFrag": 0.954,
        "expSpot": 0.943,
        "expDamage": 871.776,
        "expWinRate": 52.168
    },
    "4097": {
        "expDef": 0.747,
        "expFrag": 0.907,
        "expSpot": 0.02,
        "expDamage": 1290.738,
        "expWinRate": 51.002
    },
    "4113": {
        "expDef": 1.027,
        "expFrag": 0.945,
        "expSpot": 1.546,
        "expDamage": 890.793,
        "expWinRate": 53.505
    },
    "4129": {
        "expDef": 1.407,
        "expFrag": 1.002,
        "expSpot": 0.078,
        "expDamage": 837.461,
        "expWinRate": 51.337
    },
    "4145": {
        "expDef": 0.653,
        "expFrag": 0.921,
        "expSpot": 1.273,
        "expDamage": 1792.293,
        "expWinRate": 49.274
    },
    "4161": {
        "expDef": 2.214,
        "expFrag": 1.113,
        "expSpot": 0.098,
        "expDamage": 623.469,
        "expWinRate": 53.257
    },
    "4193": {
        "expDef": 0.475,
        "expFrag": 0.807,
        "expSpot": 0.694,
        "expDamage": 1533.58,
        "expWinRate": 51.755
    },
    "4225": {
        "expDef": 0.9,
        "expFrag": 0.921,
        "expSpot": 0.577,
        "expDamage": 1360.093,
        "expWinRate": 50.561
    },
    "4241": {
        "expDef": 0.659,
        "expFrag": 0.902,
        "expSpot": 1.277,
        "expDamage": 1038.253,
        "expWinRate": 52.435
    },
    "4353": {
        "expDef": 0.866,
        "expFrag": 0.82,
        "expSpot": 1.425,
        "expDamage": 1067.179,
        "expWinRate": 52.102
    },
    "4369": {
        "expDef": 1.152,
        "expFrag": 1.032,
        "expSpot": 1.836,
        "expDamage": 362.378,
        "expWinRate": 57.53
    },
    "4385": {
        "expDef": 0.934,
        "expFrag": 0.861,
        "expSpot": 1.156,
        "expDamage": 1238.53,
        "expWinRate": 52.407
    },
    "4401": {
        "expDef": 1.443,
        "expFrag": 1.273,
        "expSpot": 1.201,
        "expDamage": 323.477,
        "expWinRate": 57.577
    },
    "4417": {
        "expDef": 1.019,
        "expFrag": 0.999,
        "expSpot": 1.143,
        "expDamage": 489.372,
        "expWinRate": 54.299
    },
    "4433": {
        "expDef": 0.604,
        "expFrag": 0.858,
        "expSpot": 1.023,
        "expDamage": 1648.979,
        "expWinRate": 51.466
    },
    "4449": {
        "expDef": 1.097,
        "expFrag": 1.082,
        "expSpot": 0.719,
        "expDamage": 375.836,
        "expWinRate": 54.339
    },
    "4481": {
        "expDef": 0.887,
        "expFrag": 0.988,
        "expSpot": 0.573,
        "expDamage": 1733.56,
        "expWinRate": 50.678
    },
    "4497": {
        "expDef": 0.637,
        "expFrag": 0.78,
        "expSpot": 0.977,
        "expDamage": 1151.55,
        "expWinRate": 50.384
    },
    "4609": {
        "expDef": 1.819,
        "expFrag": 1.382,
        "expSpot": 1.082,
        "expDamage": 239.75,
        "expWinRate": 57.31
    },
    "4625": {
        "expDef": 1.623,
        "expFrag": 1.014,
        "expSpot": 0.165,
        "expDamage": 406.207,
        "expWinRate": 53.957
    },
    "4641": {
        "expDef": 1.568,
        "expFrag": 1.009,
        "expSpot": 0.126,
        "expDamage": 391.522,
        "expWinRate": 53.631
    },
    "4657": {
        "expDef": 1.137,
        "expFrag": 0.994,
        "expSpot": 1.377,
        "expDamage": 486.654,
        "expWinRate": 54.248
    },
    "4673": {
        "expDef": 1.463,
        "expFrag": 1.036,
        "expSpot": 0.076,
        "expDamage": 927.29,
        "expWinRate": 52.63
    },
    "4689": {
        "expDef": 1.194,
        "expFrag": 0.981,
        "expSpot": 0.731,
        "expDamage": 766.25,
        "expWinRate": 54.56
    },
    "4705": {
        "expDef": 1.068,
        "expFrag": 1.168,
        "expSpot": 0.726,
        "expDamage": 332.623,
        "expWinRate": 55.166
    },
    "4737": {
        "expDef": 0.839,
        "expFrag": 1.043,
        "expSpot": 0.633,
        "expDamage": 2077.045,
        "expWinRate": 50.452
    },
    "4865": {
        "expDef": 1.42,
        "expFrag": 0.953,
        "expSpot": 0.098,
        "expDamage": 545.734,
        "expWinRate": 50.747
    },
    "4881": {
        "expDef": 1.159,
        "expFrag": 1.196,
        "expSpot": 1.786,
        "expDamage": 307.922,
        "expWinRate": 57.574
    },
    "4897": {
        "expDef": 1.199,
        "expFrag": 1.308,
        "expSpot": 1.411,
        "expDamage": 313.869,
        "expWinRate": 56.982
    },
    "4913": {
        "expDef": 0.753,
        "expFrag": 0.727,
        "expSpot": 2.381,
        "expDamage": 503.277,
        "expWinRate": 52.642
    },
    "4929": {
        "expDef": 0.71,
        "expFrag": 0.758,
        "expSpot": 2.274,
        "expDamage": 981.02,
        "expWinRate": 51.121
    },
    "4945": {
        "expDef": 1.316,
        "expFrag": 0.837,
        "expSpot": 0.781,
        "expDamage": 331.877,
        "expWinRate": 54.913
    },
    "4961": {
        "expDef": 0.635,
        "expFrag": 0.797,
        "expSpot": 0.742,
        "expDamage": 1267.006,
        "expWinRate": 52.615
    },
    "4993": {
        "expDef": 0.642,
        "expFrag": 0.869,
        "expSpot": 1.205,
        "expDamage": 1248.431,
        "expWinRate": 51.574
    },
    "5121": {
        "expDef": 1.769,
        "expFrag": 1.652,
        "expSpot": 0.437,
        "expDamage": 293.511,
        "expWinRate": 58.576
    },
    "5137": {
        "expDef": 0.896,
        "expFrag": 0.833,
        "expSpot": 0.958,
        "expDamage": 1235.615,
        "expWinRate": 51.734
    },
    "5153": {
        "expDef": 1.07,
        "expFrag": 0.849,
        "expSpot": 2.27,
        "expDamage": 295.714,
        "expWinRate": 56.452
    },
    "5169": {
        "expDef": 1.039,
        "expFrag": 0.954,
        "expSpot": 1.467,
        "expDamage": 688.825,
        "expWinRate": 54.082
    },
    "5185": {
        "expDef": 0.804,
        "expFrag": 0.752,
        "expSpot": 2.14,
        "expDamage": 691.586,
        "expWinRate": 52.206
    },
    "5201": {
        "expDef": 1.431,
        "expFrag": 1.435,
        "expSpot": 1.259,
        "expDamage": 256.482,
        "expWinRate": 57.104
    },
    "5217": {
        "expDef": 0.639,
        "expFrag": 0.954,
        "expSpot": 0.971,
        "expDamage": 1102.869,
        "expWinRate": 54.978
    },
    "5249": {
        "expDef": 0.646,
        "expFrag": 0.91,
        "expSpot": 1.145,
        "expDamage": 1568.58,
        "expWinRate": 50.996
    },
    "5265": {
        "expDef": 0.631,
        "expFrag": 0.99,
        "expSpot": 1.552,
        "expDamage": 1914.697,
        "expWinRate": 51.63
    },
    "5377": {
        "expDef": 0.793,
        "expFrag": 0.876,
        "expSpot": 0.998,
        "expDamage": 1273.053,
        "expWinRate": 51.621
    },
    "5393": {
        "expDef": 0.729,
        "expFrag": 0.688,
        "expSpot": 2.282,
        "expDamage": 393.718,
        "expWinRate": 53.887
    },
    "5409": {
        "expDef": 0.926,
        "expFrag": 0.791,
        "expSpot": 1.918,
        "expDamage": 380.496,
        "expWinRate": 53.709
    },
    "5425": {
        "expDef": 0.551,
        "expFrag": 0.864,
        "expSpot": 1.334,
        "expDamage": 1822.763,
        "expWinRate": 49.847
    },
    "5457": {
        "expDef": 1.062,
        "expFrag": 0.927,
        "expSpot": 1.609,
        "expDamage": 879.462,
        "expWinRate": 53.031
    },
    "5473": {
        "expDef": 0.646,
        "expFrag": 1.044,
        "expSpot": 0.796,
        "expDamage": 836.201,
        "expWinRate": 54.34
    },
    "5505": {
        "expDef": 0.585,
        "expFrag": 0.982,
        "expSpot": 1.137,
        "expDamage": 1927.115,
        "expWinRate": 50.283
    },
    "5633": {
        "expDef": 1.179,
        "expFrag": 1.033,
        "expSpot": 0.066,
        "expDamage": 975.989,
        "expWinRate": 51.154
    },
    "5649": {
        "expDef": 1.555,
        "expFrag": 1.07,
        "expSpot": 0.101,
        "expDamage": 632.35,
        "expWinRate": 53.078
    },
    "5665": {
        "expDef": 1.472,
        "expFrag": 1.339,
        "expSpot": 1.542,
        "expDamage": 238.378,
        "expWinRate": 57.634
    },
    "5681": {
        "expDef": 0.604,
        "expFrag": 0.688,
        "expSpot": 2.464,
        "expDamage": 1048.982,
        "expWinRate": 49.918
    },
    "5697": {
        "expDef": 0.869,
        "expFrag": 0.987,
        "expSpot": 1.394,
        "expDamage": 1431.796,
        "expWinRate": 50.799
    },
    "5713": {
        "expDef": 0.792,
        "expFrag": 0.873,
        "expSpot": 1.22,
        "expDamage": 1528.923,
        "expWinRate": 50.887
    },
    "5729": {
        "expDef": 0.841,
        "expFrag": 1.263,
        "expSpot": 1.145,
        "expDamage": 711.954,
        "expWinRate": 54.925
    },
    "5889": {
        "expDef": 0.808,
        "expFrag": 0.988,
        "expSpot": 0.824,
        "expDamage": 1080.692,
        "expWinRate": 53.828
    },
    "5905": {
        "expDef": 1.6,
        "expFrag": 1.002,
        "expSpot": 0.148,
        "expDamage": 359.462,
        "expWinRate": 52.102
    },
    "5921": {
        "expDef": 1.003,
        "expFrag": 0.826,
        "expSpot": 1.388,
        "expDamage": 1117.651,
        "expWinRate": 51.995
    },
    "5937": {
        "expDef": 0.58,
        "expFrag": 0.738,
        "expSpot": 2.624,
        "expDamage": 1316.821,
        "expWinRate": 48.47
    },
    "5953": {
        "expDef": 1.701,
        "expFrag": 1.114,
        "expSpot": 0.906,
        "expDamage": 271.834,
        "expWinRate": 58.3
    },
    "5969": {
        "expDef": 0.91,
        "expFrag": 0.776,
        "expSpot": 1.249,
        "expDamage": 1110.086,
        "expWinRate": 52.533
    },
    "5985": {
        "expDef": 1.178,
        "expFrag": 1.446,
        "expSpot": 1.181,
        "expDamage": 243.416,
        "expWinRate": 57.511
    },
    "6145": {
        "expDef": 0.677,
        "expFrag": 0.874,
        "expSpot": 1.082,
        "expDamage": 1834.675,
        "expWinRate": 49.347
    },
    "6161": {
        "expDef": 1.085,
        "expFrag": 0.894,
        "expSpot": 2.507,
        "expDamage": 350.563,
        "expWinRate": 56.292
    },
    "6177": {
        "expDef": 1.58,
        "expFrag": 1.841,
        "expSpot": 1.059,
        "expDamage": 281.229,
        "expWinRate": 56.793
    },
    "6193": {
        "expDef": 0.475,
        "expFrag": 0.9,
        "expSpot": 1.245,
        "expDamage": 1976.092,
        "expWinRate": 49.151
    },
    "6209": {
        "expDef": 0.681,
        "expFrag": 0.999,
        "expSpot": 0.947,
        "expDamage": 1915.24,
        "expWinRate": 48.544
    },
    "6225": {
        "expDef": 0.64,
        "expFrag": 0.874,
        "expSpot": 1.048,
        "expDamage": 1853.15,
        "expWinRate": 48.987
    },
    "6401": {
        "expDef": 1.64,
        "expFrag": 1.458,
        "expSpot": 0.788,
        "expDamage": 381.556,
        "expWinRate": 57.332
    },
    "6417": {
        "expDef": 1.022,
        "expFrag": 0.931,
        "expSpot": 1.539,
        "expDamage": 468.053,
        "expWinRate": 54.921
    },
    "6433": {
        "expDef": 1.343,
        "expFrag": 1.458,
        "expSpot": 1.154,
        "expDamage": 361.209,
        "expWinRate": 58.128
    },
    "6449": {
        "expDef": 1.236,
        "expFrag": 1.665,
        "expSpot": 0.461,
        "expDamage": 294.133,
        "expWinRate": 60.2
    },
    "6465": {
        "expDef": 0.698,
        "expFrag": 0.674,
        "expSpot": 1.951,
        "expDamage": 523.24,
        "expWinRate": 52.269
    },
    "6481": {
        "expDef": 1.043,
        "expFrag": 0.889,
        "expSpot": 1.684,
        "expDamage": 326.718,
        "expWinRate": 55.298
    },
    "6657": {
        "expDef": 1.057,
        "expFrag": 0.912,
        "expSpot": 1.424,
        "expDamage": 863.331,
        "expWinRate": 53.933
    },
    "6673": {
        "expDef": 1.535,
        "expFrag": 1.369,
        "expSpot": 0.909,
        "expDamage": 390.281,
        "expWinRate": 58.821
    },
    "6705": {
        "expDef": 1.311,
        "expFrag": 1.531,
        "expSpot": 0.619,
        "expDamage": 382.1,
        "expWinRate": 57.416
    },
    "6721": {
        "expDef": 1.047,
        "expFrag": 1.139,
        "expSpot": 0.863,
        "expDamage": 636.365,
        "expWinRate": 55.357
    },
    "6913": {
        "expDef": 1.397,
        "expFrag": 1.303,
        "expSpot": 0.816,
        "expDamage": 496.157,
        "expWinRate": 56.036
    },
    "6929": {
        "expDef": 0.592,
        "expFrag": 0.892,
        "expSpot": 0.85,
        "expDamage": 1876.584,
        "expWinRate": 51.729
    },
    "6945": {
        "expDef": 1.346,
        "expFrag": 1.121,
        "expSpot": 0.933,
        "expDamage": 578.125,
        "expWinRate": 54.969
    },
    "6961": {
        "expDef": 1.154,
        "expFrag": 1.411,
        "expSpot": 0.665,
        "expDamage": 530.622,
        "expWinRate": 56.906
    },
    "6977": {
        "expDef": 0.986,
        "expFrag": 0.88,
        "expSpot": 0.93,
        "expDamage": 1027.411,
        "expWinRate": 53.526
    },
    "6993": {
        "expDef": 1.061,
        "expFrag": 1.336,
        "expSpot": 0.907,
        "expDamage": 296.077,
        "expWinRate": 56.419
    },
    "7169": {
        "expDef": 0.578,
        "expFrag": 0.851,
        "expSpot": 1.233,
        "expDamage": 1806.46,
        "expWinRate": 49.577
    },
    "7185": {
        "expDef": 0.872,
        "expFrag": 0.944,
        "expSpot": 1.247,
        "expDamage": 732.053,
        "expWinRate": 54.279
    },
    "7201": {
        "expDef": 1.104,
        "expFrag": 1.002,
        "expSpot": 0.836,
        "expDamage": 792.684,
        "expWinRate": 54.018
    },
    "7217": {
        "expDef": 0.894,
        "expFrag": 1.068,
        "expSpot": 0.493,
        "expDamage": 590.591,
        "expWinRate": 55.031
    },
    "7233": {
        "expDef": 1.177,
        "expFrag": 0.9,
        "expSpot": 0.061,
        "expDamage": 1098.952,
        "expWinRate": 51.533
    },
    "7249": {
        "expDef": 0.683,
        "expFrag": 0.916,
        "expSpot": 1.341,
        "expDamage": 1815.867,
        "expWinRate": 49.36
    },
    "7425": {
        "expDef": 0.778,
        "expFrag": 1.045,
        "expSpot": 0.509,
        "expDamage": 1398.58,
        "expWinRate": 50.372
    },
    "7441": {
        "expDef": 0.602,
        "expFrag": 0.845,
        "expSpot": 0.921,
        "expDamage": 1542.634,
        "expWinRate": 51.77
    },
    "7457": {
        "expDef": 0.839,
        "expFrag": 0.885,
        "expSpot": 0.035,
        "expDamage": 1300.944,
        "expWinRate": 51.153
    },
    "7473": {
        "expDef": 0.858,
        "expFrag": 1.04,
        "expSpot": 0.624,
        "expDamage": 795.742,
        "expWinRate": 53.964
    },
    "7489": {
        "expDef": 1.017,
        "expFrag": 0.877,
        "expSpot": 0.053,
        "expDamage": 1246.758,
        "expWinRate": 50.836
    },
    "7505": {
        "expDef": 1.123,
        "expFrag": 1.231,
        "expSpot": 1.621,
        "expDamage": 321.317,
        "expWinRate": 57.036
    },
    "7681": {
        "expDef": 1.745,
        "expFrag": 1.18,
        "expSpot": 0.122,
        "expDamage": 447.078,
        "expWinRate": 53.818
    },
    "7697": {
        "expDef": 0.944,
        "expFrag": 1.008,
        "expSpot": 0.575,
        "expDamage": 1392.172,
        "expWinRate": 51.626
    },
    "7713": {
        "expDef": 1.464,
        "expFrag": 1.296,
        "expSpot": 0.944,
        "expDamage": 496.886,
        "expWinRate": 56.481
    },
    "7729": {
        "expDef": 0.856,
        "expFrag": 1.081,
        "expSpot": 0.611,
        "expDamage": 1031.942,
        "expWinRate": 53.465
    },
    "7745": {
        "expDef": 1.813,
        "expFrag": 1.802,
        "expSpot": 0.746,
        "expDamage": 301.143,
        "expWinRate": 58.682
    },
    "7761": {
        "expDef": 1.269,
        "expFrag": 1.39,
        "expSpot": 1.75,
        "expDamage": 247.744,
        "expWinRate": 57.086
    },
    "7937": {
        "expDef": 0.787,
        "expFrag": 0.891,
        "expSpot": 1.571,
        "expDamage": 1408.767,
        "expWinRate": 50.968
    },
    "7953": {
        "expDef": 0.757,
        "expFrag": 1.028,
        "expSpot": 0.597,
        "expDamage": 1748.446,
        "expWinRate": 51.131
    },
    "7969": {
        "expDef": 1.038,
        "expFrag": 0.929,
        "expSpot": 0.05,
        "expDamage": 1075.867,
        "expWinRate": 51.809
    },
    "7985": {
        "expDef": 0.652,
        "expFrag": 0.941,
        "expSpot": 0.458,
        "expDamage": 1332.958,
        "expWinRate": 50.93
    },
    "8017": {
        "expDef": 1.754,
        "expFrag": 1.523,
        "expSpot": 0.749,
        "expDamage": 367.249,
        "expWinRate": 57.892
    },
    "8081": {
        "expDef": 0.627,
        "expFrag": 0.967,
        "expSpot": 1.109,
        "expDamage": 1625.132,
        "expWinRate": 50.97
    },
    "8193": {
        "expDef": 0.764,
        "expFrag": 1.117,
        "expSpot": 0.603,
        "expDamage": 1839.617,
        "expWinRate": 50.49
    },
    "8209": {
        "expDef": 1.172,
        "expFrag": 0.92,
        "expSpot": 2.159,
        "expDamage": 336.513,
        "expWinRate": 56.747
    },
    "8225": {
        "expDef": 0.87,
        "expFrag": 0.974,
        "expSpot": 0.542,
        "expDamage": 1367.784,
        "expWinRate": 52.546
    },
    "8241": {
        "expDef": 0.575,
        "expFrag": 1.066,
        "expSpot": 0.493,
        "expDamage": 1793.878,
        "expWinRate": 51.438
    },
    "8257": {
        "expDef": 1.775,
        "expFrag": 1.391,
        "expSpot": 0.911,
        "expDamage": 358.613,
        "expWinRate": 59.156
    },
    "8273": {
        "expDef": 1.555,
        "expFrag": 1.652,
        "expSpot": 1.132,
        "expDamage": 276.892,
        "expWinRate": 58.288
    },
    "8449": {
        "expDef": 0.755,
        "expFrag": 0.921,
        "expSpot": 0.025,
        "expDamage": 1512.511,
        "expWinRate": 50.285
    },
    "8465": {
        "expDef": 0.949,
        "expFrag": 0.805,
        "expSpot": 1.22,
        "expDamage": 1096.435,
        "expWinRate": 52.412
    },
    "8481": {
        "expDef": 0.629,
        "expFrag": 0.816,
        "expSpot": 0.027,
        "expDamage": 1644.859,
        "expWinRate": 49.725
    },
    "8497": {
        "expDef": 0.528,
        "expFrag": 1.004,
        "expSpot": 0.611,
        "expDamage": 2018.306,
        "expWinRate": 50.301
    },
    "8529": {
        "expDef": 1.177,
        "expFrag": 0.96,
        "expSpot": 0.609,
        "expDamage": 1327.587,
        "expWinRate": 52.432
    },
    "8705": {
        "expDef": 0.754,
        "expFrag": 0.869,
        "expSpot": 0.036,
        "expDamage": 1647.02,
        "expWinRate": 49.469
    },
    "8721": {
        "expDef": 0.709,
        "expFrag": 0.88,
        "expSpot": 0.031,
        "expDamage": 1460.059,
        "expWinRate": 50.242
    },
    "8737": {
        "expDef": 0.563,
        "expFrag": 1.066,
        "expSpot": 0.552,
        "expDamage": 1782.889,
        "expWinRate": 53.238
    },
    "8785": {
        "expDef": 1.68,
        "expFrag": 1.096,
        "expSpot": 0.737,
        "expDamage": 547.281,
        "expWinRate": 56.943
    },
    "8961": {
        "expDef": 0.995,
        "expFrag": 0.902,
        "expSpot": 1.446,
        "expDamage": 848.518,
        "expWinRate": 54.341
    },
    "8977": {
        "expDef": 0.985,
        "expFrag": 0.955,
        "expSpot": 0.043,
        "expDamage": 1130.564,
        "expWinRate": 51.247
    },
    "8993": {
        "expDef": 0.74,
        "expFrag": 0.924,
        "expSpot": 1.359,
        "expDamage": 1530.923,
        "expWinRate": 50.9
    },
    "9041": {
        "expDef": 1.557,
        "expFrag": 1.218,
        "expSpot": 1.153,
        "expDamage": 444.846,
        "expWinRate": 56.782
    },
    "9217": {
        "expDef": 0.792,
        "expFrag": 0.977,
        "expSpot": 1.086,
        "expDamage": 1305.581,
        "expWinRate": 51.938
    },
    "9233": {
        "expDef": 0.631,
        "expFrag": 0.858,
        "expSpot": 0.029,
        "expDamage": 1657.785,
        "expWinRate": 49.842
    },
    "9249": {
        "expDef": 1.104,
        "expFrag": 1.016,
        "expSpot": 0.755,
        "expDamage": 1039.359,
        "expWinRate": 53.259
    },
    "9297": {
        "expDef": 0.466,
        "expFrag": 1.041,
        "expSpot": 0.5,
        "expDamage": 1995.102,
        "expWinRate": 49.313
    },
    "9473": {
        "expDef": 0.978,
        "expFrag": 0.803,
        "expSpot": 2.366,
        "expDamage": 378.046,
        "expWinRate": 55.098
    },
    "9489": {
        "expDef": 0.501,
        "expFrag": 0.889,
        "expSpot": 0.939,
        "expDamage": 1879.061,
        "expWinRate": 50.041
    },
    "9505": {
        "expDef": 0.71,
        "expFrag": 0.848,
        "expSpot": 1.061,
        "expDamage": 1527.013,
        "expWinRate": 50.416
    },
    "9553": {
        "expDef": 1.355,
        "expFrag": 1.004,
        "expSpot": 0.65,
        "expDamage": 759.705,
        "expWinRate": 55.672
    },
    "9745": {
        "expDef": 0.707,
        "expFrag": 0.87,
        "expSpot": 0.978,
        "expDamage": 1549.209,
        "expWinRate": 51.433
    },
    "9761": {
        "expDef": 0.696,
        "expFrag": 0.611,
        "expSpot": 2.593,
        "expDamage": 403.319,
        "expWinRate": 53.279
    },
    "9793": {
        "expDef": 1.192,
        "expFrag": 1.284,
        "expSpot": 0.56,
        "expDamage": 440.567,
        "expWinRate": 56.963
    },
    "9809": {
        "expDef": 1.119,
        "expFrag": 0.936,
        "expSpot": 0.415,
        "expDamage": 750.366,
        "expWinRate": 53.185
    },
    "9985": {
        "expDef": 0.87,
        "expFrag": 0.921,
        "expSpot": 0.816,
        "expDamage": 1278.616,
        "expWinRate": 51.36
    },
    "10001": {
        "expDef": 0.632,
        "expFrag": 0.629,
        "expSpot": 2.384,
        "expDamage": 494.151,
        "expWinRate": 52.444
    },
    "10017": {
        "expDef": 1.087,
        "expFrag": 0.983,
        "expSpot": 1.124,
        "expDamage": 707.08,
        "expWinRate": 54.428
    },
    "10049": {
        "expDef": 1.295,
        "expFrag": 1.173,
        "expSpot": 0.707,
        "expDamage": 618.709,
        "expWinRate": 54.15
    },
    "10065": {
        "expDef": 1.255,
        "expFrag": 1.029,
        "expSpot": 0.638,
        "expDamage": 1098.822,
        "expWinRate": 55.397
    },
    "10241": {
        "expDef": 1.069,
        "expFrag": 1.005,
        "expSpot": 0.84,
        "expDamage": 1023.831,
        "expWinRate": 53.324
    },
    "10257": {
        "expDef": 0.722,
        "expFrag": 0.914,
        "expSpot": 1.279,
        "expDamage": 1549.05,
        "expWinRate": 51.294
    },
    "10273": {
        "expDef": 1.545,
        "expFrag": 1.191,
        "expSpot": 1.214,
        "expDamage": 459.195,
        "expWinRate": 57.059
    },
    "10497": {
        "expDef": 0.655,
        "expFrag": 1.041,
        "expSpot": 0.692,
        "expDamage": 819.917,
        "expWinRate": 53.476
    },
    "10513": {
        "expDef": 0.885,
        "expFrag": 0.848,
        "expSpot": 1.156,
        "expDamage": 1220.846,
        "expWinRate": 52.17
    },
    "10529": {
        "expDef": 1.362,
        "expFrag": 1.153,
        "expSpot": 1.373,
        "expDamage": 598.139,
        "expWinRate": 54.344
    },
    "10577": {
        "expDef": 1.157,
        "expFrag": 1.292,
        "expSpot": 0.206,
        "expDamage": 194.831,
        "expWinRate": 56.514
    },
    "10753": {
        "expDef": 0.654,
        "expFrag": 0.866,
        "expSpot": 0.914,
        "expDamage": 1579.416,
        "expWinRate": 51.426
    },
    "10769": {
        "expDef": 0.999,
        "expFrag": 0.908,
        "expSpot": 0.936,
        "expDamage": 1053.539,
        "expWinRate": 54.143
    },
    "10785": {
        "expDef": 0.666,
        "expFrag": 0.874,
        "expSpot": 1.224,
        "expDamage": 1839.332,
        "expWinRate": 49
    },
    "10817": {
        "expDef": 1.047,
        "expFrag": 0.897,
        "expSpot": 0.673,
        "expDamage": 986.738,
        "expWinRate": 53.272
    },
    "10833": {
        "expDef": 1.789,
        "expFrag": 0.965,
        "expSpot": 0.092,
        "expDamage": 361.821,
        "expWinRate": 54.298
    },
    "11009": {
        "expDef": 0.825,
        "expFrag": 0.819,
        "expSpot": 0.813,
        "expDamage": 1206.765,
        "expWinRate": 52.194
    },
    "11025": {
        "expDef": 0.967,
        "expFrag": 0.978,
        "expSpot": 0.464,
        "expDamage": 1019.937,
        "expWinRate": 50.993
    },
    "11041": {
        "expDef": 1.149,
        "expFrag": 0.924,
        "expSpot": 0.887,
        "expDamage": 981.042,
        "expWinRate": 53.062
    },
    "11073": {
        "expDef": 0.785,
        "expFrag": 1.029,
        "expSpot": 0.868,
        "expDamage": 1656.832,
        "expWinRate": 51.848
    },
    "11089": {
        "expDef": 1.53,
        "expFrag": 1.114,
        "expSpot": 0.106,
        "expDamage": 597.95,
        "expWinRate": 55.081
    },
    "11265": {
        "expDef": 0.838,
        "expFrag": 0.995,
        "expSpot": 0.89,
        "expDamage": 801.095,
        "expWinRate": 54.455
    },
    "11281": {
        "expDef": 1.532,
        "expFrag": 1.278,
        "expSpot": 0.778,
        "expDamage": 494.645,
        "expWinRate": 56.086
    },
    "11297": {
        "expDef": 0.9,
        "expFrag": 0.939,
        "expSpot": 0.52,
        "expDamage": 1340.709,
        "expWinRate": 51.22
    },
    "11345": {
        "expDef": 1.533,
        "expFrag": 0.886,
        "expSpot": 0.062,
        "expDamage": 943.968,
        "expWinRate": 52.42
    },
    "11521": {
        "expDef": 0.695,
        "expFrag": 0.859,
        "expSpot": 1.148,
        "expDamage": 1529.231,
        "expWinRate": 50.441
    },
    "11537": {
        "expDef": 0.876,
        "expFrag": 0.991,
        "expSpot": 0.679,
        "expDamage": 1377.19,
        "expWinRate": 51.158
    },
    "11553": {
        "expDef": 1.154,
        "expFrag": 1.004,
        "expSpot": 1.215,
        "expDamage": 789.15,
        "expWinRate": 53.425
    },
    "11585": {
        "expDef": 1.064,
        "expFrag": 0.943,
        "expSpot": 0.614,
        "expDamage": 746.447,
        "expWinRate": 53.011
    },
    "11601": {
        "expDef": 0.8,
        "expFrag": 0.846,
        "expSpot": 0.028,
        "expDamage": 1434.707,
        "expWinRate": 50.69
    },
    "11777": {
        "expDef": 1.089,
        "expFrag": 1.151,
        "expSpot": 0.842,
        "expDamage": 627.226,
        "expWinRate": 54.983
    },
    "11793": {
        "expDef": 1.115,
        "expFrag": 1.012,
        "expSpot": 0.568,
        "expDamage": 821.079,
        "expWinRate": 51.448
    },
    "11809": {
        "expDef": 1.192,
        "expFrag": 1.006,
        "expSpot": 1.629,
        "expDamage": 882.773,
        "expWinRate": 52.511
    },
    "11841": {
        "expDef": 0.976,
        "expFrag": 0.937,
        "expSpot": 0.054,
        "expDamage": 1587.881,
        "expWinRate": 49.908
    },
    "11857": {
        "expDef": 1.86,
        "expFrag": 1.003,
        "expSpot": 0.156,
        "expDamage": 767.535,
        "expWinRate": 53.615
    },
    "12033": {
        "expDef": 0.9,
        "expFrag": 0.977,
        "expSpot": 0.803,
        "expDamage": 1549.515,
        "expWinRate": 49.242
    },
    "12049": {
        "expDef": 0.431,
        "expFrag": 1.013,
        "expSpot": 0.61,
        "expDamage": 2019.482,
        "expWinRate": 50.74
    },
    "12097": {
        "expDef": 0.924,
        "expFrag": 0.931,
        "expSpot": 0.734,
        "expDamage": 1283.485,
        "expWinRate": 51.161
    },
    "12113": {
        "expDef": 0.875,
        "expFrag": 0.849,
        "expSpot": 0.028,
        "expDamage": 1183.836,
        "expWinRate": 51.059
    },
    "12289": {
        "expDef": 1.072,
        "expFrag": 0.993,
        "expSpot": 1.81,
        "expDamage": 684.166,
        "expWinRate": 54.403
    },
    "12305": {
        "expDef": 0.68,
        "expFrag": 0.913,
        "expSpot": 1.325,
        "expDamage": 1837.141,
        "expWinRate": 49.305
    },
    "12369": {
        "expDef": 0.762,
        "expFrag": 0.772,
        "expSpot": 0.022,
        "expDamage": 1704.343,
        "expWinRate": 50.676
    },
    "12545": {
        "expDef": 0.83,
        "expFrag": 0.92,
        "expSpot": 1.551,
        "expDamage": 908.343,
        "expWinRate": 52.826
    },
    "12561": {
        "expDef": 1.35,
        "expFrag": 1.178,
        "expSpot": 2.624,
        "expDamage": 266.171,
        "expWinRate": 56.208
    },
    "12577": {
        "expDef": 0.917,
        "expFrag": 0.975,
        "expSpot": 1.737,
        "expDamage": 511.938,
        "expWinRate": 55.809
    },
    "12817": {
        "expDef": 1.413,
        "expFrag": 1.294,
        "expSpot": 1.978,
        "expDamage": 215.049,
        "expWinRate": 57.607
    },
    "12881": {
        "expDef": 0.948,
        "expFrag": 0.992,
        "expSpot": 1.366,
        "expDamage": 501.794,
        "expWinRate": 54.663
    },
    "13073": {
        "expDef": 1.434,
        "expFrag": 1.008,
        "expSpot": 1.615,
        "expDamage": 282.405,
        "expWinRate": 58.026
    },
    "13089": {
        "expDef": 0.515,
        "expFrag": 0.978,
        "expSpot": 0.755,
        "expDamage": 2023.736,
        "expWinRate": 49.71
    },
    "13121": {
        "expDef": 1.569,
        "expFrag": 1.277,
        "expSpot": 1.071,
        "expDamage": 347.062,
        "expWinRate": 58.26
    },
    "13137": {
        "expDef": 0.74,
        "expFrag": 1.007,
        "expSpot": 0.548,
        "expDamage": 1662.414,
        "expWinRate": 50.589
    },
    "13313": {
        "expDef": 0.889,
        "expFrag": 0.875,
        "expSpot": 1.219,
        "expDamage": 1154.11,
        "expWinRate": 50.427
    },
    "13329": {
        "expDef": 1.28,
        "expFrag": 1.191,
        "expSpot": 1.055,
        "expDamage": 415.727,
        "expWinRate": 55.855
    },
    "13345": {
        "expDef": 0.952,
        "expFrag": 0.844,
        "expSpot": 1.011,
        "expDamage": 1139.329,
        "expWinRate": 51.23
    },
    "13393": {
        "expDef": 1.458,
        "expFrag": 1.051,
        "expSpot": 0.516,
        "expDamage": 588.637,
        "expWinRate": 54.123
    },
    "13569": {
        "expDef": 0.634,
        "expFrag": 1.043,
        "expSpot": 0.726,
        "expDamage": 2048.145,
        "expWinRate": 48.68
    },
    "13585": {
        "expDef": 1.249,
        "expFrag": 1.068,
        "expSpot": 1.574,
        "expDamage": 373.779,
        "expWinRate": 57.305
    },
    "13825": {
        "expDef": 0.744,
        "expFrag": 0.938,
        "expSpot": 1.392,
        "expDamage": 1752.161,
        "expWinRate": 48.684
    },
    "13841": {
        "expDef": 0.973,
        "expFrag": 0.821,
        "expSpot": 1.133,
        "expDamage": 1139.868,
        "expWinRate": 51.359
    },
    "13857": {
        "expDef": 0.477,
        "expFrag": 0.994,
        "expSpot": 0.702,
        "expDamage": 2054.293,
        "expWinRate": 51.119
    },
    "13889": {
        "expDef": 0.61,
        "expFrag": 1.098,
        "expSpot": 0.8,
        "expDamage": 2053.397,
        "expWinRate": 49.669
    },
    "13905": {
        "expDef": 0.39,
        "expFrag": 1.074,
        "expSpot": 0.391,
        "expDamage": 2022.646,
        "expWinRate": 49.929
    },
    "14097": {
        "expDef": 1.097,
        "expFrag": 0.963,
        "expSpot": 1.568,
        "expDamage": 708.41,
        "expWinRate": 54.59
    },
    "14113": {
        "expDef": 0.658,
        "expFrag": 0.935,
        "expSpot": 1.273,
        "expDamage": 1860.401,
        "expWinRate": 49.192
    },
    "14145": {
        "expDef": 0.746,
        "expFrag": 0.628,
        "expSpot": 2.364,
        "expDamage": 405.457,
        "expWinRate": 53.338
    },
    "14161": {
        "expDef": 0.974,
        "expFrag": 1.038,
        "expSpot": 0.791,
        "expDamage": 1068.15,
        "expWinRate": 52.949
    },
    "14337": {
        "expDef": 0.691,
        "expFrag": 1.038,
        "expSpot": 0.909,
        "expDamage": 2010.963,
        "expWinRate": 48.974
    },
    "14353": {
        "expDef": 0.699,
        "expFrag": 0.596,
        "expSpot": 1.989,
        "expDamage": 668.197,
        "expWinRate": 51.644
    },
    "14401": {
        "expDef": 0.959,
        "expFrag": 0.858,
        "expSpot": 0.038,
        "expDamage": 1393.789,
        "expWinRate": 50.55
    },
    "14417": {
        "expDef": 1.132,
        "expFrag": 0.992,
        "expSpot": 0.834,
        "expDamage": 769.442,
        "expWinRate": 53.045
    },
    "14609": {
        "expDef": 0.774,
        "expFrag": 0.969,
        "expSpot": 1.22,
        "expDamage": 1883.588,
        "expWinRate": 48.737
    },
    "14625": {
        "expDef": 1.019,
        "expFrag": 0.909,
        "expSpot": 1.238,
        "expDamage": 1157.677,
        "expWinRate": 50.979
    },
    "14657": {
        "expDef": 1.507,
        "expFrag": 0.988,
        "expSpot": 0.099,
        "expDamage": 391.885,
        "expWinRate": 54.646
    },
    "14673": {
        "expDef": 0.895,
        "expFrag": 0.949,
        "expSpot": 0.72,
        "expDamage": 1335.482,
        "expWinRate": 50.952
    },
    "14865": {
        "expDef": 0.808,
        "expFrag": 0.958,
        "expSpot": 1.135,
        "expDamage": 1632.012,
        "expWinRate": 50.449
    },
    "14881": {
        "expDef": 0.589,
        "expFrag": 1.019,
        "expSpot": 0.828,
        "expDamage": 1980.88,
        "expWinRate": 48.613
    },
    "14913": {
        "expDef": 1.177,
        "expFrag": 0.941,
        "expSpot": 0.89,
        "expDamage": 388.103,
        "expWinRate": 55.215
    },
    "15105": {
        "expDef": 1.545,
        "expFrag": 1.222,
        "expSpot": 1.329,
        "expDamage": 304.66,
        "expWinRate": 56.666
    },
    "15121": {
        "expDef": 0.861,
        "expFrag": 1.124,
        "expSpot": 0.155,
        "expDamage": 197.933,
        "expWinRate": 56.487
    },
    "15137": {
        "expDef": 0.685,
        "expFrag": 0.62,
        "expSpot": 2.131,
        "expDamage": 504.723,
        "expWinRate": 52.419
    },
    "15169": {
        "expDef": 1.705,
        "expFrag": 1.277,
        "expSpot": 0.826,
        "expDamage": 235.315,
        "expWinRate": 57.581
    },
    "15361": {
        "expDef": 1.707,
        "expFrag": 1.318,
        "expSpot": 1.312,
        "expDamage": 231.433,
        "expWinRate": 58.927
    },
    "15377": {
        "expDef": 0.765,
        "expFrag": 0.827,
        "expSpot": 0.025,
        "expDamage": 1219.89,
        "expWinRate": 51.25
    },
    "15393": {
        "expDef": 0.747,
        "expFrag": 1.04,
        "expSpot": 0.942,
        "expDamage": 1597.538,
        "expWinRate": 50.38
    },
    "15425": {
        "expDef": 0.752,
        "expFrag": 0.927,
        "expSpot": 1.351,
        "expDamage": 1784.448,
        "expWinRate": 49.222
    },
    "15441": {
        "expDef": 0.822,
        "expFrag": 0.792,
        "expSpot": 1.092,
        "expDamage": 1133.8,
        "expWinRate": 52.306
    },
    "15617": {
        "expDef": 0.751,
        "expFrag": 1.112,
        "expSpot": 1.518,
        "expDamage": 1955.171,
        "expWinRate": 51.697
    },
    "15633": {
        "expDef": 1.544,
        "expFrag": 1.062,
        "expSpot": 0.09,
        "expDamage": 416.439,
        "expWinRate": 54.911
    },
    "15649": {
        "expDef": 0.679,
        "expFrag": 0.729,
        "expSpot": 2.367,
        "expDamage": 716.55,
        "expWinRate": 51.4
    },
    "15681": {
        "expDef": 0.77,
        "expFrag": 0.927,
        "expSpot": 1.344,
        "expDamage": 1553.254,
        "expWinRate": 50.921
    },
    "15697": {
        "expDef": 0.49,
        "expFrag": 0.884,
        "expSpot": 1.005,
        "expDamage": 1987.068,
        "expWinRate": 49.55
    },
    "15873": {
        "expDef": 1.318,
        "expFrag": 0.93,
        "expSpot": 1.497,
        "expDamage": 334.084,
        "expWinRate": 55.687
    },
    "15889": {
        "expDef": 1.026,
        "expFrag": 0.944,
        "expSpot": 1.311,
        "expDamage": 721.52,
        "expWinRate": 53.527
    },
    "15905": {
        "expDef": 0.705,
        "expFrag": 0.951,
        "expSpot": 1.292,
        "expDamage": 1902.649,
        "expWinRate": 50.051
    },
    "15937": {
        "expDef": 2.084,
        "expFrag": 1.389,
        "expSpot": 0.939,
        "expDamage": 241.345,
        "expWinRate": 59.121
    },
    "15953": {
        "expDef": 0.57,
        "expFrag": 0.976,
        "expSpot": 0.713,
        "expDamage": 1999.235,
        "expWinRate": 51.345
    },
    "16129": {
        "expDef": 0.894,
        "expFrag": 0.883,
        "expSpot": 0.035,
        "expDamage": 981.193,
        "expWinRate": 51.981
    },
    "16145": {
        "expDef": 1.079,
        "expFrag": 1.061,
        "expSpot": 0.662,
        "expDamage": 593.342,
        "expWinRate": 52.555
    },
    "16161": {
        "expDef": 0.917,
        "expFrag": 0.838,
        "expSpot": 0.03,
        "expDamage": 1471.053,
        "expWinRate": 50.775
    },
    "16209": {
        "expDef": 0.852,
        "expFrag": 0.921,
        "expSpot": 1.403,
        "expDamage": 614.833,
        "expWinRate": 54.383
    },
    "16385": {
        "expDef": 1.235,
        "expFrag": 1.037,
        "expSpot": 0.082,
        "expDamage": 583.622,
        "expWinRate": 53.471
    },
    "16401": {
        "expDef": 0.819,
        "expFrag": 1.032,
        "expSpot": 0.516,
        "expDamage": 1731.072,
        "expWinRate": 50.218
    },
    "16417": {
        "expDef": 1.34,
        "expFrag": 1.018,
        "expSpot": 0.057,
        "expDamage": 818.265,
        "expWinRate": 53.487
    },
    "16449": {
        "expDef": 0.64,
        "expFrag": 0.753,
        "expSpot": 0.726,
        "expDamage": 1192.161,
        "expWinRate": 51.784
    },
    "16641": {
        "expDef": 0.784,
        "expFrag": 0.676,
        "expSpot": 2.621,
        "expDamage": 474.28,
        "expWinRate": 52.757
    },
    "16657": {
        "expDef": 0.935,
        "expFrag": 1.071,
        "expSpot": 0.458,
        "expDamage": 1465.401,
        "expWinRate": 50.893
    },
    "16673": {
        "expDef": 0.732,
        "expFrag": 0.615,
        "expSpot": 2.247,
        "expDamage": 532.379,
        "expWinRate": 52.385
    },
    "16705": {
        "expDef": 0.499,
        "expFrag": 0.896,
        "expSpot": 1.162,
        "expDamage": 1733.692,
        "expWinRate": 52.525
    },
    "16897": {
        "expDef": 0.774,
        "expFrag": 0.962,
        "expSpot": 1.426,
        "expDamage": 1792.461,
        "expWinRate": 48.881
    },
    "16913": {
        "expDef": 0.732,
        "expFrag": 1.264,
        "expSpot": 0.473,
        "expDamage": 2153.574,
        "expWinRate": 48.716
    },
    "16961": {
        "expDef": 0.478,
        "expFrag": 0.818,
        "expSpot": 1.187,
        "expDamage": 1880.958,
        "expWinRate": 49.415
    },
    "17153": {
        "expDef": 0.787,
        "expFrag": 1.01,
        "expSpot": 1.465,
        "expDamage": 1801.038,
        "expWinRate": 48.947
    },
    "17169": {
        "expDef": 1.139,
        "expFrag": 1.293,
        "expSpot": 1.282,
        "expDamage": 321.503,
        "expWinRate": 57.035
    },
    "17217": {
        "expDef": 0.555,
        "expFrag": 0.829,
        "expSpot": 2.541,
        "expDamage": 1375.141,
        "expWinRate": 48.728
    },
    "17425": {
        "expDef": 0.951,
        "expFrag": 1.007,
        "expSpot": 1.298,
        "expDamage": 399.814,
        "expWinRate": 55.989
    },
    "17473": {
        "expDef": 0.748,
        "expFrag": 0.718,
        "expSpot": 2.537,
        "expDamage": 814.337,
        "expWinRate": 51.502
    },
    "17665": {
        "expDef": 0.751,
        "expFrag": 0.926,
        "expSpot": 1.343,
        "expDamage": 1473.754,
        "expWinRate": 51.097
    },
    "17729": {
        "expDef": 0.567,
        "expFrag": 1.136,
        "expSpot": 0.711,
        "expDamage": 1999.996,
        "expWinRate": 50.923
    },
    "17937": {
        "expDef": 1.241,
        "expFrag": 1.325,
        "expSpot": 0.794,
        "expDamage": 458.083,
        "expWinRate": 56.695
    },
    "17953": {
        "expDef": 0.786,
        "expFrag": 0.727,
        "expSpot": 2.515,
        "expDamage": 784.816,
        "expWinRate": 51.9
    },
    "17985": {
        "expDef": 0.696,
        "expFrag": 0.74,
        "expSpot": 2.274,
        "expDamage": 507.891,
        "expWinRate": 53.724
    },
    "18177": {
        "expDef": 0.641,
        "expFrag": 0.703,
        "expSpot": 2.541,
        "expDamage": 1016.302,
        "expWinRate": 50.898
    },
    "18193": {
        "expDef": 0.951,
        "expFrag": 1.033,
        "expSpot": 1.217,
        "expDamage": 510.488,
        "expWinRate": 54.507
    },
    "18209": {
        "expDef": 0.602,
        "expFrag": 0.668,
        "expSpot": 2.315,
        "expDamage": 1002.87,
        "expWinRate": 50.507
    },
    "18241": {
        "expDef": 0.684,
        "expFrag": 0.737,
        "expSpot": 2.666,
        "expDamage": 682.259,
        "expWinRate": 53.058
    },
    "18433": {
        "expDef": 0.82,
        "expFrag": 0.7,
        "expSpot": 2.667,
        "expDamage": 781.269,
        "expWinRate": 52.383
    },
    "18449": {
        "expDef": 0.706,
        "expFrag": 0.682,
        "expSpot": 2.613,
        "expDamage": 974.583,
        "expWinRate": 50.943
    },
    "18465": {
        "expDef": 1.711,
        "expFrag": 1.001,
        "expSpot": 0.107,
        "expDamage": 278.091,
        "expWinRate": 55.377
    },
    "18497": {
        "expDef": 0.691,
        "expFrag": 0.665,
        "expSpot": 2.763,
        "expDamage": 835.266,
        "expWinRate": 51.746
    },
    "18689": {
        "expDef": 0.954,
        "expFrag": 1.172,
        "expSpot": 1.276,
        "expDamage": 630.022,
        "expWinRate": 56.54
    },
    "18705": {
        "expDef": 0.514,
        "expFrag": 0.885,
        "expSpot": 0.723,
        "expDamage": 1640.796,
        "expWinRate": 52.542
    },
    "18721": {
        "expDef": 1.275,
        "expFrag": 0.993,
        "expSpot": 0.109,
        "expDamage": 399.696,
        "expWinRate": 54.635
    },
    "18753": {
        "expDef": 0.85,
        "expFrag": 0.744,
        "expSpot": 3.632,
        "expDamage": 988.34,
        "expWinRate": 53.285
    },
    "18961": {
        "expDef": 0.708,
        "expFrag": 0.686,
        "expSpot": 2.023,
        "expDamage": 767.826,
        "expWinRate": 51.612
    },
    "19009": {
        "expDef": 0.738,
        "expFrag": 0.786,
        "expSpot": 3.886,
        "expDamage": 1305.968,
        "expWinRate": 51.075
    },
    "19201": {
        "expDef": 0.685,
        "expFrag": 0.78,
        "expSpot": 3.146,
        "expDamage": 1247.727,
        "expWinRate": 50.302
    },
    "19217": {
        "expDef": 0.562,
        "expFrag": 1.06,
        "expSpot": 0.585,
        "expDamage": 2042.41,
        "expWinRate": 49.253
    },
    "19457": {
        "expDef": 0.774,
        "expFrag": 0.844,
        "expSpot": 2.29,
        "expDamage": 729.032,
        "expWinRate": 52.504
    },
    "19473": {
        "expDef": 0.421,
        "expFrag": 0.881,
        "expSpot": 1.002,
        "expDamage": 1962.671,
        "expWinRate": 50.925
    },
    "19489": {
        "expDef": 0.53,
        "expFrag": 0.731,
        "expSpot": 2.614,
        "expDamage": 1338.232,
        "expWinRate": 48.642
    },
    "19713": {
        "expDef": 0.53,
        "expFrag": 0.876,
        "expSpot": 1.105,
        "expDamage": 1600.308,
        "expWinRate": 52.503
    },
    "19729": {
        "expDef": 0.558,
        "expFrag": 0.847,
        "expSpot": 0.778,
        "expDamage": 1295.006,
        "expWinRate": 53.707
    },
    "19745": {
        "expDef": 0.742,
        "expFrag": 0.774,
        "expSpot": 2.811,
        "expDamage": 682.118,
        "expWinRate": 52.389
    },
    "19969": {
        "expDef": 0.535,
        "expFrag": 0.988,
        "expSpot": 1.351,
        "expDamage": 1963.003,
        "expWinRate": 50.513
    },
    "19985": {
        "expDef": 0.638,
        "expFrag": 0.704,
        "expSpot": 2.948,
        "expDamage": 1261.055,
        "expWinRate": 48.176
    },
    "20225": {
        "expDef": 0.416,
        "expFrag": 0.993,
        "expSpot": 1.191,
        "expDamage": 2084.191,
        "expWinRate": 52.673
    },
    "20241": {
        "expDef": 0.682,
        "expFrag": 0.679,
        "expSpot": 2.747,
        "expDamage": 838.33,
        "expWinRate": 52.04
    },
    "20257": {
        "expDef": 0.791,
        "expFrag": 1.264,
        "expSpot": 1.187,
        "expDamage": 680.522,
        "expWinRate": 57.278
    },
    "20481": {
        "expDef": 0.505,
        "expFrag": 0.803,
        "expSpot": 0.851,
        "expDamage": 1254.716,
        "expWinRate": 52.211
    },
    "20737": {
        "expDef": 0.445,
        "expFrag": 0.869,
        "expSpot": 0.963,
        "expDamage": 1637.852,
        "expWinRate": 52.37
    },
    "20993": {
        "expDef": 0.351,
        "expFrag": 0.886,
        "expSpot": 1.046,
        "expDamage": 1979.596,
        "expWinRate": 50.417
    },
    "21249": {
        "expDef": 0.576,
        "expFrag": 0.969,
        "expSpot": 0.854,
        "expDamage": 1692.386,
        "expWinRate": 52.149
    },
    "21505": {
        "expDef": 0.612,
        "expFrag": 1.017,
        "expSpot": 1.312,
        "expDamage": 1692.935,
        "expWinRate": 52.446
    },
    "21761": {
        "expDef": 0.678,
        "expFrag": 1.007,
        "expSpot": 1.161,
        "expDamage": 1835.006,
        "expWinRate": 49.439
    },
    "22017": {
        "expDef": 0.423,
        "expFrag": 0.877,
        "expSpot": 1.428,
        "expDamage": 1954.885,
        "expWinRate": 50.061
    },
    "22273": {
        "expDef": 0.479,
        "expFrag": 0.951,
        "expSpot": 0.905,
        "expDamage": 1975.012,
        "expWinRate": 51.38
    },
    "22529": {
        "expDef": 0.481,
        "expFrag": 0.923,
        "expSpot": 1.079,
        "expDamage": 1668.998,
        "expWinRate": 52.469
    },
    "22785": {
        "expDef": 0.534,
        "expFrag": 0.854,
        "expSpot": 0.832,
        "expDamage": 1312.272,
        "expWinRate": 52.497
    },
    "23041": {
        "expDef": 1.566,
        "expFrag": 1.031,
        "expSpot": 1.772,
        "expDamage": 439.076,
        "expWinRate": 56.202
    },
    "31233": {
        "expDef": 0.519,
        "expFrag": 1.026,
        "expSpot": 0.898,
        "expDamage": 1178.992,
        "expWinRate": 54.241
    },
    "31745": {
        "expDef": 0.466,
        "expFrag": 1.039,
        "expSpot": 0.369,
        "expDamage": 1441.849,
        "expWinRate": 51.531
    },
    "32001": {
        "expDef": 0.302,
        "expFrag": 0.817,
        "expSpot": 1.304,
        "expDamage": 1866.358,
        "expWinRate": 52.401
    },
    "43329": {
        "expDef": 2.027,
        "expFrag": 1.232,
        "expSpot": 1.833,
        "expDamage": 251.249,
        "expWinRate": 56.513
    },
    "43585": {
        "expDef": 0.8,
        "expFrag": 0.736,
        "expSpot": 3.27,
        "expDamage": 894.356,
        "expWinRate": 52.518
    },
    "43841": {
        "expDef": 1.667,
        "expFrag": 1.074,
        "expSpot": 0.873,
        "expDamage": 261.768,
        "expWinRate": 55.701
    },
    "44289": {
        "expDef": 0.465,
        "expFrag": 0.945,
        "expSpot": 1.057,
        "expDamage": 1425.17,
        "expWinRate": 52.67
    },
    "44545": {
        "expDef": 0.426,
        "expFrag": 0.887,
        "expSpot": 1.26,
        "expDamage": 1670.109,
        "expWinRate": 53.465
    },
    "44801": {
        "expDef": 1.121,
        "expFrag": 0.956,
        "expSpot": 1.702,
        "expDamage": 301.518,
        "expWinRate": 55.651
    },
    "45057": {
        "expDef": 0.636,
        "expFrag": 1.073,
        "expSpot": 0.471,
        "expDamage": 1507.232,
        "expWinRate": 51.038
    },
    "45313": {
        "expDef": 0.714,
        "expFrag": 0.77,
        "expSpot": 2.979,
        "expDamage": 530.627,
        "expWinRate": 54.309
    },
    "45569": {
        "expDef": 0.663,
        "expFrag": 0.71,
        "expSpot": 2.976,
        "expDamage": 864.869,
        "expWinRate": 52.336
    },
    "46081": {
        "expDef": 0.884,
        "expFrag": 0.957,
        "expSpot": 1.51,
        "expDamage": 1336.988,
        "expWinRate": 52.91
    },
    "46337": {
        "expDef": 0.675,
        "expFrag": 0.929,
        "expSpot": 1.546,
        "expDamage": 1276.034,
        "expWinRate": 52.851
    },
    "46593": {
        "expDef": 0.534,
        "expFrag": 1.086,
        "expSpot": 1.1,
        "expDamage": 1169.378,
        "expWinRate": 55.631
    },
    "46609": {
        "expDef": 0.631,
        "expFrag": 0.812,
        "expSpot": 0.97,
        "expDamage": 1168.42,
        "expWinRate": 52.999
    },
    "46849": {
        "expDef": 0.434,
        "expFrag": 1.113,
        "expSpot": 1.234,
        "expDamage": 2438.13,
        "expWinRate": 56.324
    },
    "46865": {
        "expDef": 0.469,
        "expFrag": 0.822,
        "expSpot": 1.344,
        "expDamage": 1388.624,
        "expWinRate": 52.273
    },
    "47105": {
        "expDef": 0.812,
        "expFrag": 0.968,
        "expSpot": 1.346,
        "expDamage": 534.097,
        "expWinRate": 54.714
    },
    "47121": {
        "expDef": 0.758,
        "expFrag": 1.13,
        "expSpot": 1.456,
        "expDamage": 1909.553,
        "expWinRate": 53.897
    },
    "47361": {
        "expDef": 0.61,
        "expFrag": 0.87,
        "expSpot": 0.99,
        "expDamage": 1288.835,
        "expWinRate": 51.424
    },
    "47377": {
        "expDef": 0.548,
        "expFrag": 0.66,
        "expSpot": 2.66,
        "expDamage": 896.623,
        "expWinRate": 51.24
    },
    "47617": {
        "expDef": 0.615,
        "expFrag": 0.854,
        "expSpot": 1.01,
        "expDamage": 1253.526,
        "expWinRate": 51.285
    },
    "47633": {
        "expDef": 1.53,
        "expFrag": 1.431,
        "expSpot": 1.295,
        "expDamage": 287.914,
        "expWinRate": 56.783
    },
    "47873": {
        "expDef": 0.901,
        "expFrag": 1.171,
        "expSpot": 1.145,
        "expDamage": 327.327,
        "expWinRate": 55.337
    },
    "48129": {
        "expDef": 0.857,
        "expFrag": 0.947,
        "expSpot": 1.166,
        "expDamage": 717.04,
        "expWinRate": 53.489
    },
    "48145": {
        "expDef": 0.539,
        "expFrag": 0.817,
        "expSpot": 0.767,
        "expDamage": 1265.436,
        "expWinRate": 52.998
    },
    "48385": {
        "expDef": 0.537,
        "expFrag": 0.943,
        "expSpot": 0.643,
        "expDamage": 1401.36,
        "expWinRate": 51.988
    },
    "48401": {
        "expDef": 0.78,
        "expFrag": 0.967,
        "expSpot": 0.696,
        "expDamage": 1382.334,
        "expWinRate": 51.386
    },
    "48641": {
        "expDef": 0.472,
        "expFrag": 0.892,
        "expSpot": 1.013,
        "expDamage": 1403.873,
        "expWinRate": 53.212
    },
    "48897": {
        "expDef": 0.683,
        "expFrag": 0.92,
        "expSpot": 1.556,
        "expDamage": 1258.446,
        "expWinRate": 52.511
    },
    "48913": {
        "expDef": 0.523,
        "expFrag": 0.811,
        "expSpot": 0.759,
        "expDamage": 1267.351,
        "expWinRate": 52.042
    },
    "49169": {
        "expDef": 0.638,
        "expFrag": 0.941,
        "expSpot": 1.014,
        "expDamage": 809.841,
        "expWinRate": 54.264
    },
    "49409": {
        "expDef": 0.541,
        "expFrag": 0.998,
        "expSpot": 1.093,
        "expDamage": 1400.279,
        "expWinRate": 52.903
    },
    "49665": {
        "expDef": 0.481,
        "expFrag": 0.897,
        "expSpot": 1.003,
        "expDamage": 1402.431,
        "expWinRate": 53.482
    },
    "49921": {
        "expDef": 0.534,
        "expFrag": 0.949,
        "expSpot": 1.141,
        "expDamage": 1061.345,
        "expWinRate": 53.477
    },
    "49937": {
        "expDef": 0.743,
        "expFrag": 0.805,
        "expSpot": 1.206,
        "expDamage": 1150.717,
        "expWinRate": 51.555
    },
    "50193": {
        "expDef": 0.625,
        "expFrag": 0.991,
        "expSpot": 0.547,
        "expDamage": 1419.668,
        "expWinRate": 51.065
    },
    "50945": {
        "expDef": 1.288,
        "expFrag": 1.235,
        "expSpot": 1.175,
        "expDamage": 233.597,
        "expWinRate": 56.803
    },
    "50961": {
        "expDef": 0.602,
        "expFrag": 0.64,
        "expSpot": 2.512,
        "expDamage": 839.707,
        "expWinRate": 51.018
    },
    "51089": {
        "expDef": 0.399,
        "expFrag": 0.805,
        "expSpot": 1.095,
        "expDamage": 1251.335,
        "expWinRate": 51.074
    },
    "51201": {
        "expDef": 1.279,
        "expFrag": 1.253,
        "expSpot": 1.308,
        "expDamage": 606.931,
        "expWinRate": 57.822
    },
    "51345": {
        "expDef": 0.899,
        "expFrag": 0.997,
        "expSpot": 1.451,
        "expDamage": 772.86,
        "expWinRate": 54.285
    },
    "51361": {
        "expDef": 0.698,
        "expFrag": 1.011,
        "expSpot": 1.292,
        "expDamage": 1360.065,
        "expWinRate": 51.507
    },
    "51457": {
        "expDef": 1.329,
        "expFrag": 1.159,
        "expSpot": 1.101,
        "expDamage": 525.761,
        "expWinRate": 55.484
    },
    "51473": {
        "expDef": 0.935,
        "expFrag": 1.237,
        "expSpot": 1.932,
        "expDamage": 678.539,
        "expWinRate": 56.052
    },
    "51489": {
        "expDef": 1.255,
        "expFrag": 1.298,
        "expSpot": 2.404,
        "expDamage": 229.534,
        "expWinRate": 56.487
    },
    "51553": {
        "expDef": 1.112,
        "expFrag": 0.937,
        "expSpot": 1.064,
        "expDamage": 513.581,
        "expWinRate": 52.972
    },
    "51569": {
        "expDef": 0.818,
        "expFrag": 0.941,
        "expSpot": 1.335,
        "expDamage": 737.609,
        "expWinRate": 52.86
    },
    "51585": {
        "expDef": 0.869,
        "expFrag": 1.039,
        "expSpot": 0.981,
        "expDamage": 783.75,
        "expWinRate": 53.195
    },
    "51713": {
        "expDef": 1.327,
        "expFrag": 1.171,
        "expSpot": 1.168,
        "expDamage": 597.42,
        "expWinRate": 54.983
    },
    "51729": {
        "expDef": 2.308,
        "expFrag": 1.643,
        "expSpot": 1.416,
        "expDamage": 343.921,
        "expWinRate": 62.814
    },
    "51745": {
        "expDef": 1.13,
        "expFrag": 1.045,
        "expSpot": 1.39,
        "expDamage": 511.305,
        "expWinRate": 55.916
    },
    "51825": {
        "expDef": 0.646,
        "expFrag": 0.91,
        "expSpot": 1.109,
        "expDamage": 1244.008,
        "expWinRate": 50.964
    },
    "51841": {
        "expDef": 1.174,
        "expFrag": 1.143,
        "expSpot": 1.438,
        "expDamage": 212.766,
        "expWinRate": 57.069
    },
    "51985": {
        "expDef": 1.589,
        "expFrag": 1.468,
        "expSpot": 1.36,
        "expDamage": 368.628,
        "expWinRate": 58.794
    },
    "52001": {
        "expDef": 1.264,
        "expFrag": 1.087,
        "expSpot": 1.611,
        "expDamage": 309.569,
        "expWinRate": 55.327
    },
    "52065": {
        "expDef": 0.818,
        "expFrag": 0.813,
        "expSpot": 1.212,
        "expDamage": 1142.129,
        "expWinRate": 51.251
    },
    "52097": {
        "expDef": 0.79,
        "expFrag": 0.969,
        "expSpot": 0.482,
        "expDamage": 1457.635,
        "expWinRate": 51.128
    },
    "52225": {
        "expDef": 1.346,
        "expFrag": 1.293,
        "expSpot": 2.161,
        "expDamage": 323.112,
        "expWinRate": 56.425
    },
    "52241": {
        "expDef": 1.618,
        "expFrag": 1.554,
        "expSpot": 1.573,
        "expDamage": 479.678,
        "expWinRate": 56.816
    },
    "52257": {
        "expDef": 1.05,
        "expFrag": 1.015,
        "expSpot": 1.608,
        "expDamage": 473.453,
        "expWinRate": 54.795
    },
    "52321": {
        "expDef": 0.788,
        "expFrag": 0.967,
        "expSpot": 1.027,
        "expDamage": 803.491,
        "expWinRate": 54.392
    },
    "52353": {
        "expDef": 0.744,
        "expFrag": 0.775,
        "expSpot": 1.237,
        "expDamage": 1154.338,
        "expWinRate": 52.385
    },
    "52481": {
        "expDef": 1.679,
        "expFrag": 1.264,
        "expSpot": 1.468,
        "expDamage": 374.732,
        "expWinRate": 54.397
    },
    "52497": {
        "expDef": 2.839,
        "expFrag": 1.877,
        "expSpot": 1.637,
        "expDamage": 312.791,
        "expWinRate": 55.771
    },
    "52513": {
        "expDef": 0.632,
        "expFrag": 0.814,
        "expSpot": 1.162,
        "expDamage": 1251.934,
        "expWinRate": 51.446
    },
    "52561": {
        "expDef": 0.808,
        "expFrag": 1.029,
        "expSpot": 0.587,
        "expDamage": 1725.793,
        "expWinRate": 52.164
    },
    "52577": {
        "expDef": 0.488,
        "expFrag": 0.755,
        "expSpot": 1.458,
        "expDamage": 1236.735,
        "expWinRate": 52.857
    },
    "52609": {
        "expDef": 0.663,
        "expFrag": 0.741,
        "expSpot": 1.285,
        "expDamage": 1107.48,
        "expWinRate": 52.113
    },
    "52737": {
        "expDef": 1.631,
        "expFrag": 1.043,
        "expSpot": 1.613,
        "expDamage": 258.83,
        "expWinRate": 54.503
    },
    "52769": {
        "expDef": 1.588,
        "expFrag": 1.112,
        "expSpot": 2.489,
        "expDamage": 281.643,
        "expWinRate": 57.241
    },
    "52817": {
        "expDef": 1.359,
        "expFrag": 0.926,
        "expSpot": 1.388,
        "expDamage": 365.68,
        "expWinRate": 56.583
    },
    "52833": {
        "expDef": 0.645,
        "expFrag": 0.762,
        "expSpot": 1.802,
        "expDamage": 1063.19,
        "expWinRate": 52.258
    },
    "52865": {
        "expDef": 0.521,
        "expFrag": 0.986,
        "expSpot": 1.035,
        "expDamage": 1447.151,
        "expWinRate": 52.493
    },
    "52993": {
        "expDef": 0.976,
        "expFrag": 1.105,
        "expSpot": 2.441,
        "expDamage": 369.123,
        "expWinRate": 55.568
    },
    "53121": {
        "expDef": 0.717,
        "expFrag": 0.956,
        "expSpot": 1.288,
        "expDamage": 1339.978,
        "expWinRate": 51.99
    },
    "53249": {
        "expDef": 0.915,
        "expFrag": 0.964,
        "expSpot": 1.083,
        "expDamage": 1244.317,
        "expWinRate": 51.409
    },
    "53505": {
        "expDef": 1.719,
        "expFrag": 1.455,
        "expSpot": 1.596,
        "expDamage": 333.565,
        "expWinRate": 55.692
    },
    "53537": {
        "expDef": 1.236,
        "expFrag": 1.174,
        "expSpot": 1.528,
        "expDamage": 213.874,
        "expWinRate": 57.824
    },
    "53585": {
        "expDef": 1.428,
        "expFrag": 1.083,
        "expSpot": 0.785,
        "expDamage": 527.645,
        "expWinRate": 54.488
    },
    "53761": {
        "expDef": 1.374,
        "expFrag": 1.231,
        "expSpot": 0.817,
        "expDamage": 590.328,
        "expWinRate": 53.19
    },
    "53793": {
        "expDef": 0.902,
        "expFrag": 0.841,
        "expSpot": 1.309,
        "expDamage": 1121.687,
        "expWinRate": 51.8
    },
    "53841": {
        "expDef": 1.258,
        "expFrag": 1.059,
        "expSpot": 0.576,
        "expDamage": 821.751,
        "expWinRate": 52.768
    },
    "54017": {
        "expDef": 1.106,
        "expFrag": 1.279,
        "expSpot": 1.415,
        "expDamage": 657.126,
        "expWinRate": 57.99
    },
    "54033": {
        "expDef": 0.788,
        "expFrag": 1.242,
        "expSpot": 1.862,
        "expDamage": 649.489,
        "expWinRate": 56.312
    },
    "54097": {
        "expDef": 1.18,
        "expFrag": 1.01,
        "expSpot": 0.768,
        "expDamage": 988.181,
        "expWinRate": 54.043
    },
    "54273": {
        "expDef": 1.509,
        "expFrag": 1.858,
        "expSpot": 0.928,
        "expDamage": 428.671,
        "expWinRate": 58.502
    },
    "54289": {
        "expDef": 0.807,
        "expFrag": 0.793,
        "expSpot": 0.891,
        "expDamage": 1266.766,
        "expWinRate": 51.848
    },
    "54353": {
        "expDef": 1.158,
        "expFrag": 1.239,
        "expSpot": 1.578,
        "expDamage": 611.407,
        "expWinRate": 56.733
    },
    "54529": {
        "expDef": 1.519,
        "expFrag": 1.377,
        "expSpot": 1.411,
        "expDamage": 245.737,
        "expWinRate": 56.302
    },
    "54545": {
        "expDef": 1.131,
        "expFrag": 0.999,
        "expSpot": 1.533,
        "expDamage": 520.625,
        "expWinRate": 54.73
    },
    "54609": {
        "expDef": 1.394,
        "expFrag": 1.29,
        "expSpot": 0.124,
        "expDamage": 336.804,
        "expWinRate": 56.688
    },
    "54785": {
        "expDef": 0.749,
        "expFrag": 1.088,
        "expSpot": 0.549,
        "expDamage": 819.831,
        "expWinRate": 53.336
    },
    "54801": {
        "expDef": 1.61,
        "expFrag": 1.108,
        "expSpot": 2.733,
        "expDamage": 272.201,
        "expWinRate": 58.585
    },
    "54865": {
        "expDef": 1.3,
        "expFrag": 1.356,
        "expSpot": 1.604,
        "expDamage": 210.978,
        "expWinRate": 55.858
    },
    "55057": {
        "expDef": 1.138,
        "expFrag": 1.066,
        "expSpot": 1.252,
        "expDamage": 560.568,
        "expWinRate": 53.295
    },
    "55073": {
        "expDef": 1.298,
        "expFrag": 1.337,
        "expSpot": 1.679,
        "expDamage": 212.672,
        "expWinRate": 56.624
    },
    "55121": {
        "expDef": 1.054,
        "expFrag": 0.906,
        "expSpot": 1.077,
        "expDamage": 997.386,
        "expWinRate": 53.705
    },
    "55297": {
        "expDef": 0.893,
        "expFrag": 1.14,
        "expSpot": 0.762,
        "expDamage": 1062.537,
        "expWinRate": 52.833
    },
    "55313": {
        "expDef": 1.053,
        "expFrag": 0.921,
        "expSpot": 0.77,
        "expDamage": 1252.516,
        "expWinRate": 51.129
    },
    "55377": {
        "expDef": 0.881,
        "expFrag": 0.715,
        "expSpot": 2.597,
        "expDamage": 535.94,
        "expWinRate": 52.724
    },
    "55569": {
        "expDef": 1.509,
        "expFrag": 1.235,
        "expSpot": 1.435,
        "expDamage": 1008.475,
        "expWinRate": 51.883
    },
    "55633": {
        "expDef": 0.764,
        "expFrag": 0.777,
        "expSpot": 1.267,
        "expDamage": 1141.665,
        "expWinRate": 51.635
    },
    "55841": {
        "expDef": 0.643,
        "expFrag": 0.987,
        "expSpot": 1.258,
        "expDamage": 1916.553,
        "expWinRate": 49.671
    },
    "55889": {
        "expDef": 0.96,
        "expFrag": 1.057,
        "expSpot": 2.189,
        "expDamage": 748.319,
        "expWinRate": 55.45
    },
    "56081": {
        "expDef": 0.394,
        "expFrag": 0.827,
        "expSpot": 0.931,
        "expDamage": 1347.275,
        "expWinRate": 52.677
    },
    "56097": {
        "expDef": 1.033,
        "expFrag": 0.949,
        "expSpot": 1.279,
        "expDamage": 693.768,
        "expWinRate": 54.265
    },
    "56145": {
        "expDef": 0.99,
        "expFrag": 0.956,
        "expSpot": 0.964,
        "expDamage": 768.522,
        "expWinRate": 53.474
    },
    "56353": {
        "expDef": 1.162,
        "expFrag": 0.98,
        "expSpot": 0.739,
        "expDamage": 1034.16,
        "expWinRate": 52.328
    },
    "56577": {
        "expDef": 1.57,
        "expFrag": 1.192,
        "expSpot": 1.32,
        "expDamage": 274.33,
        "expWinRate": 55.77
    },
    "56609": {
        "expDef": 0.802,
        "expFrag": 0.94,
        "expSpot": 0.789,
        "expDamage": 1008.414,
        "expWinRate": 53.756
    },
    "56657": {
        "expDef": 0.57,
        "expFrag": 0.783,
        "expSpot": 1.179,
        "expDamage": 1245.847,
        "expWinRate": 51.933
    },
    "56833": {
        "expDef": 0.873,
        "expFrag": 1.19,
        "expSpot": 1.519,
        "expDamage": 1127.854,
        "expWinRate": 55.111
    },
    "56865": {
        "expDef": 0.89,
        "expFrag": 0.965,
        "expSpot": 1.207,
        "expDamage": 1871.885,
        "expWinRate": 52.164
    },
    "56913": {
        "expDef": 0.663,
        "expFrag": 0.784,
        "expSpot": 1.353,
        "expDamage": 1171.546,
        "expWinRate": 52.519
    },
    "57105": {
        "expDef": 0.981,
        "expFrag": 1.028,
        "expSpot": 0.713,
        "expDamage": 795.036,
        "expWinRate": 52.292
    },
    "57121": {
        "expDef": 0.892,
        "expFrag": 0.807,
        "expSpot": 1.249,
        "expDamage": 1127.703,
        "expWinRate": 51.844
    },
    "57169": {
        "expDef": 0.826,
        "expFrag": 1.038,
        "expSpot": 1.008,
        "expDamage": 843.875,
        "expWinRate": 53.657
    },
    "57361": {
        "expDef": 1.189,
        "expFrag": 0.934,
        "expSpot": 1.029,
        "expDamage": 721.635,
        "expWinRate": 52.94
    },
    "57377": {
        "expDef": 0.759,
        "expFrag": 0.778,
        "expSpot": 1.314,
        "expDamage": 1117.244,
        "expWinRate": 50.892
    },
    "57425": {
        "expDef": 0.65,
        "expFrag": 1.065,
        "expSpot": 1.044,
        "expDamage": 1576.377,
        "expWinRate": 54.397
    },
    "57617": {
        "expDef": 1.052,
        "expFrag": 0.993,
        "expSpot": 1.326,
        "expDamage": 917.736,
        "expWinRate": 53.401
    },
    "57633": {
        "expDef": 0.749,
        "expFrag": 0.674,
        "expSpot": 2.751,
        "expDamage": 686.114,
        "expWinRate": 51.826
    },
    "57681": {
        "expDef": 1.006,
        "expFrag": 1.15,
        "expSpot": 0.801,
        "expDamage": 897.563,
        "expWinRate": 54.281
    },
    "57889": {
        "expDef": 0.739,
        "expFrag": 0.663,
        "expSpot": 2.97,
        "expDamage": 778.654,
        "expWinRate": 51.943
    },
    "57937": {
        "expDef": 0.504,
        "expFrag": 1.048,
        "expSpot": 1.369,
        "expDamage": 2282.462,
        "expWinRate": 52.818
    },
    "58113": {
        "expDef": 0.789,
        "expFrag": 1.096,
        "expSpot": 1.316,
        "expDamage": 843.544,
        "expWinRate": 54.729
    },
    "58369": {
        "expDef": 0.497,
        "expFrag": 0.868,
        "expSpot": 1.483,
        "expDamage": 1946.218,
        "expWinRate": 49.996
    },
    "58449": {
        "expDef": 0.656,
        "expFrag": 0.661,
        "expSpot": 2.734,
        "expDamage": 824.867,
        "expWinRate": 52.184
    },
    "58625": {
        "expDef": 0.661,
        "expFrag": 0.941,
        "expSpot": 0.427,
        "expDamage": 1290.337,
        "expWinRate": 50.805
    },
    "58641": {
        "expDef": 0.41,
        "expFrag": 0.932,
        "expSpot": 1.009,
        "expDamage": 1994.502,
        "expWinRate": 51.501
    },
    "58657": {
        "expDef": 0.483,
        "expFrag": 0.783,
        "expSpot": 1.235,
        "expDamage": 1292.643,
        "expWinRate": 52.624
    },
    "58705": {
        "expDef": 0.754,
        "expFrag": 0.666,
        "expSpot": 2.782,
        "expDamage": 991.843,
        "expWinRate": 52.694
    },
    "58881": {
        "expDef": 0.656,
        "expFrag": 0.858,
        "expSpot": 1.052,
        "expDamage": 1283.071,
        "expWinRate": 53.162
    },
    "58913": {
        "expDef": 0.691,
        "expFrag": 0.798,
        "expSpot": 1.235,
        "expDamage": 1220.035,
        "expWinRate": 52.767
    },
    "58961": {
        "expDef": 0.625,
        "expFrag": 0.724,
        "expSpot": 2.667,
        "expDamage": 1295.792,
        "expWinRate": 51.376
    },
    "59137": {
        "expDef": 0.727,
        "expFrag": 1.05,
        "expSpot": 1.082,
        "expDamage": 1121.222,
        "expWinRate": 54.474
    },
    "59169": {
        "expDef": 0.673,
        "expFrag": 0.802,
        "expSpot": 1.243,
        "expDamage": 1239.926,
        "expWinRate": 52.626
    },
    "59217": {
        "expDef": 0.562,
        "expFrag": 0.973,
        "expSpot": 0.852,
        "expDamage": 809.159,
        "expWinRate": 54.825
    },
    "59393": {
        "expDef": 0.924,
        "expFrag": 1.013,
        "expSpot": 1.456,
        "expDamage": 783.487,
        "expWinRate": 54.627
    },
    "59425": {
        "expDef": 0.525,
        "expFrag": 0.745,
        "expSpot": 0.84,
        "expDamage": 1256.933,
        "expWinRate": 51.613
    },
    "59473": {
        "expDef": 0.753,
        "expFrag": 0.645,
        "expSpot": 2.468,
        "expDamage": 833.199,
        "expWinRate": 52.452
    },
    "59649": {
        "expDef": 0.824,
        "expFrag": 1.109,
        "expSpot": 0.593,
        "expDamage": 1047.547,
        "expWinRate": 52.882
    },
    "59665": {
        "expDef": 1.136,
        "expFrag": 1.245,
        "expSpot": 1.332,
        "expDamage": 321.594,
        "expWinRate": 56.199
    },
    "59681": {
        "expDef": 0.836,
        "expFrag": 0.964,
        "expSpot": 1.19,
        "expDamage": 742.207,
        "expWinRate": 54.819
    },
    "59729": {
        "expDef": 0.833,
        "expFrag": 0.658,
        "expSpot": 2.305,
        "expDamage": 640.179,
        "expWinRate": 52.874
    },
    "59905": {
        "expDef": 0.758,
        "expFrag": 0.845,
        "expSpot": 1.257,
        "expDamage": 1144.049,
        "expWinRate": 52.185
    },
    "59937": {
        "expDef": 0.741,
        "expFrag": 0.993,
        "expSpot": 1.182,
        "expDamage": 1033.569,
        "expWinRate": 55.514
    },
    "59985": {
        "expDef": 0.651,
        "expFrag": 0.98,
        "expSpot": 0.597,
        "expDamage": 1367.385,
        "expWinRate": 53.563
    },
    "60161": {
        "expDef": 0.876,
        "expFrag": 1.122,
        "expSpot": 1.069,
        "expDamage": 908.251,
        "expWinRate": 56.569
    },
    "60177": {
        "expDef": 0.912,
        "expFrag": 0.803,
        "expSpot": 1.086,
        "expDamage": 1101.56,
        "expWinRate": 50.8
    },
    "60193": {
        "expDef": 0.467,
        "expFrag": 0.81,
        "expSpot": 1.27,
        "expDamage": 1321.092,
        "expWinRate": 53.044
    },
    "60225": {
        "expDef": 0.792,
        "expFrag": 1.077,
        "expSpot": 1.805,
        "expDamage": 1420.503,
        "expWinRate": 52.665
    },
    "60241": {
        "expDef": 0.91,
        "expFrag": 0.886,
        "expSpot": 0.761,
        "expDamage": 663.435,
        "expWinRate": 53.644
    },
    "60417": {
        "expDef": 0.49,
        "expFrag": 0.999,
        "expSpot": 0.928,
        "expDamage": 1421.116,
        "expWinRate": 53.465
    },
    "60433": {
        "expDef": 1.554,
        "expFrag": 1.217,
        "expSpot": 1.826,
        "expDamage": 225.361,
        "expWinRate": 58.16
    },
    "60449": {
        "expDef": 0.56,
        "expFrag": 1.036,
        "expSpot": 0.748,
        "expDamage": 1484.695,
        "expWinRate": 53.713
    },
    "60481": {
        "expDef": 0.791,
        "expFrag": 1.197,
        "expSpot": 1.295,
        "expDamage": 1872.757,
        "expWinRate": 52.231
    },
    "60689": {
        "expDef": 1.489,
        "expFrag": 1.099,
        "expSpot": 0.628,
        "expDamage": 535.085,
        "expWinRate": 53.429
    },
    "60737": {
        "expDef": 0.821,
        "expFrag": 1.042,
        "expSpot": 1.343,
        "expDamage": 822.327,
        "expWinRate": 55.238
    },
    "60929": {
        "expDef": 0.94,
        "expFrag": 1.023,
        "expSpot": 1.72,
        "expDamage": 286.534,
        "expWinRate": 54.959
    },
    "60945": {
        "expDef": 0.731,
        "expFrag": 0.954,
        "expSpot": 1.389,
        "expDamage": 1558.69,
        "expWinRate": 51.507
    },
    "60993": {
        "expDef": 0.644,
        "expFrag": 1.119,
        "expSpot": 1.183,
        "expDamage": 842.389,
        "expWinRate": 54.606
    },
    "61185": {
        "expDef": 0.775,
        "expFrag": 0.892,
        "expSpot": 1.209,
        "expDamage": 1818.037,
        "expWinRate": 50.274
    },
    "61217": {
        "expDef": 0.913,
        "expFrag": 1.165,
        "expSpot": 1,
        "expDamage": 909.174,
        "expWinRate": 55.241
    },
    "61249": {
        "expDef": 1.013,
        "expFrag": 1.178,
        "expSpot": 0.862,
        "expDamage": 652.334,
        "expWinRate": 54.087
    },
    "61441": {
        "expDef": 1.021,
        "expFrag": 1.231,
        "expSpot": 1.088,
        "expDamage": 488.875,
        "expWinRate": 56.508
    },
    "61457": {
        "expDef": 0.979,
        "expFrag": 0.948,
        "expSpot": 1.276,
        "expDamage": 510.302,
        "expWinRate": 54.815
    },
    "61473": {
        "expDef": 0.621,
        "expFrag": 0.913,
        "expSpot": 1.095,
        "expDamage": 1093.396,
        "expWinRate": 54.515
    },
    "61505": {
        "expDef": 0.849,
        "expFrag": 0.732,
        "expSpot": 3.025,
        "expDamage": 811.482,
        "expWinRate": 52.871
    },
    "61697": {
        "expDef": 0.784,
        "expFrag": 1.02,
        "expSpot": 1.601,
        "expDamage": 1869.797,
        "expWinRate": 53.028
    },
    "61713": {
        "expDef": 1.039,
        "expFrag": 1,
        "expSpot": 0.563,
        "expDamage": 1038.927,
        "expWinRate": 52.411
    },
    "61729": {
        "expDef": 0.475,
        "expFrag": 0.868,
        "expSpot": 1.111,
        "expDamage": 1719.679,
        "expWinRate": 52.213
    },
    "61761": {
        "expDef": 0.75,
        "expFrag": 0.97,
        "expSpot": 0.663,
        "expDamage": 1398.81,
        "expWinRate": 51.467
    },
    "61953": {
        "expDef": 0.759,
        "expFrag": 0.888,
        "expSpot": 1.45,
        "expDamage": 1182.411,
        "expWinRate": 52.079
    },
    "61969": {
        "expDef": 1.293,
        "expFrag": 0.932,
        "expSpot": 0.83,
        "expDamage": 1170.177,
        "expWinRate": 50.3
    },
    "61985": {
        "expDef": 0.561,
        "expFrag": 0.959,
        "expSpot": 1.167,
        "expDamage": 1509.947,
        "expWinRate": 53.261
    },
    "62001": {
        "expDef": 0.663,
        "expFrag": 0.679,
        "expSpot": 2.589,
        "expDamage": 841.475,
        "expWinRate": 51.488
    },
    "62017": {
        "expDef": 0.575,
        "expFrag": 0.775,
        "expSpot": 1.003,
        "expDamage": 1275.44,
        "expWinRate": 52.476
    },
    "62209": {
        "expDef": 0.775,
        "expFrag": 0.844,
        "expSpot": 0.715,
        "expDamage": 1228.23,
        "expWinRate": 55.159
    },
    "62241": {
        "expDef": 0.647,
        "expFrag": 0.872,
        "expSpot": 1.296,
        "expDamage": 1262.032,
        "expWinRate": 52.093
    },
    "62273": {
        "expDef": 0.591,
        "expFrag": 1.056,
        "expSpot": 0.727,
        "expDamage": 1473.379,
        "expWinRate": 52.571
    },
    "62481": {
        "expDef": 0.592,
        "expFrag": 1.019,
        "expSpot": 0.517,
        "expDamage": 1452.818,
        "expWinRate": 51.61
    },
    "62497": {
        "expDef": 0.868,
        "expFrag": 0.946,
        "expSpot": 1.04,
        "expDamage": 991.165,
        "expWinRate": 54.493
    },
    "62529": {
        "expDef": 0.687,
        "expFrag": 0.983,
        "expSpot": 1.054,
        "expDamage": 1337.204,
        "expWinRate": 51.424
    },
    "62737": {
        "expDef": 0.707,
        "expFrag": 0.856,
        "expSpot": 0.673,
        "expDamage": 1308.162,
        "expWinRate": 53.201
    },
    "62753": {
        "expDef": 0.32,
        "expFrag": 0.963,
        "expSpot": 1.389,
        "expDamage": 1798.255,
        "expWinRate": 55.427
    },
    "62785": {
        "expDef": 0.55,
        "expFrag": 0.769,
        "expSpot": 1.013,
        "expDamage": 1271.097,
        "expWinRate": 52.616
    },
    "62977": {
        "expDef": 0.72,
        "expFrag": 0.901,
        "expSpot": 1.529,
        "expDamage": 1226.289,
        "expWinRate": 52.225
    },
    "62993": {
        "expDef": 0.846,
        "expFrag": 0.941,
        "expSpot": 1.072,
        "expDamage": 1087.863,
        "expWinRate": 54.389
    },
    "63041": {
        "expDef": 0.648,
        "expFrag": 0.844,
        "expSpot": 0.835,
        "expDamage": 1237.427,
        "expWinRate": 50.987
    },
    "63233": {
        "expDef": 0.642,
        "expFrag": 0.776,
        "expSpot": 0.881,
        "expDamage": 1255.213,
        "expWinRate": 52.514
    },
    "63249": {
        "expDef": 1.062,
        "expFrag": 0.995,
        "expSpot": 1.081,
        "expDamage": 541.087,
        "expWinRate": 54.639
    },
    "63281": {
        "expDef": 0.682,
        "expFrag": 1.059,
        "expSpot": 0.792,
        "expDamage": 1416.703,
        "expWinRate": 52.464
    },
    "63297": {
        "expDef": 0.795,
        "expFrag": 0.79,
        "expSpot": 2.467,
        "expDamage": 726.311,
        "expWinRate": 52.221
    },
    "63505": {
        "expDef": 1.454,
        "expFrag": 0.823,
        "expSpot": 1.09,
        "expDamage": 254.469,
        "expWinRate": 56.312
    },
    "63537": {
        "expDef": 0.679,
        "expFrag": 0.95,
        "expSpot": 1.256,
        "expDamage": 1858.179,
        "expWinRate": 50.366
    },
    "63553": {
        "expDef": 0.967,
        "expFrag": 0.809,
        "expSpot": 1.408,
        "expDamage": 1102.544,
        "expWinRate": 50.704
    },
    "63761": {
        "expDef": 0.893,
        "expFrag": 0.859,
        "expSpot": 1.252,
        "expDamage": 1185.688,
        "expWinRate": 52.115
    },
    "63793": {
        "expDef": 0.893,
        "expFrag": 0.804,
        "expSpot": 1.282,
        "expDamage": 1062.722,
        "expWinRate": 51.963
    },
    "63809": {
        "expDef": 0.814,
        "expFrag": 0.907,
        "expSpot": 2.814,
        "expDamage": 799.921,
        "expWinRate": 53.368
    },
    "64017": {
        "expDef": 0.587,
        "expFrag": 0.648,
        "expSpot": 2.605,
        "expDamage": 833.183,
        "expWinRate": 51.053
    },
    "64049": {
        "expDef": 0.734,
        "expFrag": 0.889,
        "expSpot": 1.345,
        "expDamage": 1143.412,
        "expWinRate": 50.754
    },
    "64065": {
        "expDef": 1.037,
        "expFrag": 0.893,
        "expSpot": 1.337,
        "expDamage": 1199.616,
        "expWinRate": 50.9
    },
    "64273": {
        "expDef": 0.893,
        "expFrag": 0.806,
        "expSpot": 1.25,
        "expDamage": 1123.359,
        "expWinRate": 51.795
    },
    "64561": {
        "expDef": 0.613,
        "expFrag": 0.885,
        "expSpot": 1.328,
        "expDamage": 1264.133,
        "expWinRate": 52.929
    },
    "64769": {
        "expDef": 0.475,
        "expFrag": 1.132,
        "expSpot": 0.747,
        "expDamage": 883.808,
        "expWinRate": 54.898
    },
    "64817": {
        "expDef": 0.769,
        "expFrag": 0.792,
        "expSpot": 2.645,
        "expDamage": 582.772,
        "expWinRate": 52.49
    },
    "65073": {
        "expDef": 0.505,
        "expFrag": 0.866,
        "expSpot": 1.368,
        "expDamage": 1250.339,
        "expWinRate": 52.274
    }
}

export default WN8;