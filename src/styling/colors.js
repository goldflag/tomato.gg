const Colors = {
    red: "rgb(253, 3, 80)",
    blue1: "rgb(77, 88, 149)",
    purple: "rgb(141, 86, 232)",
    battles: "rgba(120, 120, 120, 0.4)",
};

// prettier-ignore
const scaleColors = [
    [0.0,    0.84, 0.31],   // dark red
    [0.0,    0.61, 0.5],    // light red
    [35.88,  1.0,  0.4],    // orange 
    [54.12,  1.0,  0.4],    // yellow
 // [71.6,   0.62, 0.37],   // light green
    [90,     0.97, 0.23],   // dark green
 // [197.95, 0.5,  0.5],    // teal
    [215.74, 0.55, 0.4],    // blue
    [255.0,  0.63, 0.55],   // light purple
    [261.27, 0.56, 0.38],   // purple
    [265.12, 0.6,  0.28],   // dark purple
    [268.42, 0.75, 0.2],    // darker purple    
    [272.22, 0.79, 0.13],   // darkest purple
];

/**
 * A color stop is an array of objects of the form:
 * `{ val: number, hsl: [hue, saturation, lightness]}`
 * @param {number[]} arr
 * @returns An array of color stops associating the given stop values from `arr` with the color
 * scale in `scaleColors`.
 */
const makeColorStops = (arr) => arr.map((val, i) => ({ val, hsl: scaleColors[i] }));

export const wn8Bounds = [0, 5500];
export const wrBounds = [35, 75];
export const prBounds = [0, 13000];
export const rankBounds = [0, 100];
// prettier-ignore
const [wn8Stops, wrStops, prStops, rankStops] = [
    makeColorStops([  0,  300,    450,    650,        1200,      2000,   2450,   2900,   3400,   4000,   4700]), // 900, // 1600,
    makeColorStops([  35, 46,     47,     48,          52,        56,     58,     61,     64,     67,     70]),  // 50,  // 54,
    makeColorStops([  0,  1000,   2000,   3000,      5000,      7000,   8000,   9000,   10000,  11000,  12000]), // 4000,// 6000,
    makeColorStops([  0,  8,      15,     30,          65,        90,     95,     98,     99,     99.5,   99.9]),// 45,  // 80,
];
const interpolateHSL = (value, stops, cosineSmooth) => {
    if (value <= stops[0].val) return stops[0].hsl;
    if (value >= stops[stops.length - 1].val) return stops[stops.length - 1].hsl;
    let i = 0;
    while (value > stops[i].val) i++;
    const lower = stops[i - 1];
    const upper = stops[i];
    value -= lower.val;
    value /= upper.val - lower.val;
    if (cosineSmooth) value = (1 - Math.cos(Math.PI * value)) / 2;
    return lower.hsl.map((x, idx) => x * (1 - value) + upper.hsl[idx] * value);
};

const hslToStr = (hsl) => `hsl(${hsl[0].toFixed(2)} ${Math.round(hsl[1] * 100)}% ${Math.round(hsl[2] * 100)}%)`;

const colorFn = (value, stops, smooth) => {
    value = parseFloat(value);
    if (isNaN(value)) return Colors.battles;
    return hslToStr(interpolateHSL(value, stops, smooth));
};

export const WN8Color = (wn8, smooth = true) => colorFn(wn8, wn8Stops, smooth);
export const WRColor = (wr, smooth = true) => colorFn(wr, wrStops, smooth);
export const PRColor = (pr, smooth = true) => colorFn(pr, prStops, smooth);
export const rankColor = (rank, smooth = true) => colorFn(rank, rankStops, smooth);

export const WN8Icon = (wn8) => {
    const vals = [
        { icon: "🍅", wn8: 0 },
        { icon: "🥕", wn8: 300 },
        { icon: "🍊", wn8: 450 },
        { icon: "🍋", wn8: 650 },
        { icon: "🍈", wn8: 900 },
        { icon: "🥒", wn8: 1200 },
        { icon: "🥥", wn8: 1600 },
        { icon: "🧊", wn8: 2000 },
        { icon: "🍆", wn8: 2450 },
        { icon: "🍇", wn8: 2900 },
        { icon: "🐒", wn8: 3400 },
        { icon: "🦧", wn8: 4000 },
        { icon: "🦍", wn8: 4700 },
    ];
    if (wn8 > vals[vals.length - 1].wn8) return vals[vals.length - 1].icon;
    if (wn8 < vals[0].wn8) return vals[0].icon;
    for (const val of vals) {
        if (val.wn8 > wn8) return val.icon;
    }
};

export default Colors;
