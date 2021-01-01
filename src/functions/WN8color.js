export default function WN8color(wn8) {
    if (wn8 < 300) {
        return "#930D0D";
    } else if (wn8 < 450) {
        return "#CD3333";
    } else if (wn8 < 650) {
        return "#CC7A00";
    } else if (wn8 < 900) {
        return "#CCB800";
    } else if (wn8 < 1200) {
        return "#849B24";
    } else if (wn8 < 1600) {
        return "#4D7326";
    } else if (wn8 < 2000) {
        return "#4099BF";
    } else if (wn8 < 2450) {
        return "#3972C6";
    } else if (wn8 < 2900) {
        return "#793DB6";
    } else if (wn8 === "-") {
        return "rgb(200,200,200)";
    } else {
        return "#401070";
    }
}
