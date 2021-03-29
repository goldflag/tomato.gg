const Colors = {
    red: "rgb(253, 3, 80)",
    blue1: "rgb(77, 88, 149)",
    purple: "rgb(141, 86, 232)",
    battles: "rgba(120, 120, 120, 0.4)",
};

const scaleColors = [
    [0.0, 0.84, 0.31],
    [0.0, 0.61, 0.5],
    [35.88, 1.0, 0.4],
    [54.12, 1.0, 0.4],
    [71.6, 0.62, 0.37],
    [89.61, 0.5, 0.3],
    [197.95, 0.5, 0.5],
    [215.74, 0.55, 0.5],
    [255.0, 0.63, 0.55],
    [261.27, 0.56, 0.38],
    [265.12, 0.6, 0.28],
    [268.42, 0.75, 0.2],
    [272.22, 0.79, 0.13],
];

/**
 * A color stop is an array of objects of the form:
 * `{ val: number, hsl: [hue, saturation, lightness]}`
 * @param {number[]} arr
 * @returns An array of color stops associating the given stop values from `arr` with the color
 * scale in `scaleColors`.
 */
const makeColorStops = (arr) => arr.map((val, i) => ({ val, hsl: scaleColors[i] }));

const wn8Stops = makeColorStops([300, 450, 650, 900, 1200, 1600, 2000, 2450, 2900, 3400, 4000, 4700, 4700]);
const wrStops = makeColorStops([46, 47, 48, 50, 52, 54, 56, 58, 61, 64, 67, 70]);
const prStops = makeColorStops([1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000]);
const rankStops = makeColorStops([8, 15, 30, 45, 65, 80, 90, 95, 98, 99, 99.5, 99.9]);

const interpolateHSL = (value, stops) => {
    if (value <= stops[0].val) return stops[0].hsl;
    if (value >= stops[stops.length - 1].val) return stops[stops.length - 1].hsl;
    let i = 0;
    while (value > stops[i].val) i++;

    value -= stops[i - 1].val;
    value /= stops[i].val - stops[i - 1].val;
    const h = stops[i - 1].hsl[0] + (stops[i].hsl[0] - stops[i - 1].hsl[0]) * value;
    const s = stops[i - 1].hsl[1] + (stops[i].hsl[1] - stops[i - 1].hsl[1]) * value;
    const b = stops[i - 1].hsl[2] + (stops[i].hsl[2] - stops[i - 1].hsl[2]) * value;
    return [h, s, b];
};

const hslToStr = (hsl) => `hsl(${hsl[0].toFixed(2)} ${Math.round(hsl[1] * 100)}% ${Math.round(hsl[2] * 100)}%)`;

const colorFn = (value, stops) => {
    value = parseFloat(value);
    if (isNaN(value)) return Colors.battles;
    return hslToStr(interpolateHSL(value, stops));
};

export const WN8Color = (wn8) => colorFn(wn8, wn8Stops);
export const WRColor = (wr) => colorFn(wr, wrStops);
export const PRColor = (pr) => colorFn(pr, prStops);
export const rankColor = (rank) => colorFn(rank, rankStops);

export default Colors;
