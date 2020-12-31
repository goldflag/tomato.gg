export default function WRcolor(winrate) {
    if (winrate < 46) {
        return "#930D0D";
    } else if (winrate < 47) {
        return "#CD3333";
    } else if (winrate < 48) {
        return "#CC7A00";
    } else if (winrate < 50) {
        return "#CCB800";
    } else if (winrate < 52) {
        return "#849B24";
    } else if (winrate < 54) {
        return "#4D7326";
    } else if (winrate < 56) {
        return "#4099BF";
    } else if (winrate < 60) {
        return "#3972C6";
    } else if (winrate < 65) {
        return "#793DB6";
    } else if (winrate === "-") {
        return "rgb(200,200,200)";
    } else {
        return "#401070";
    }
}
