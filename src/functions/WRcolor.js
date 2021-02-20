export default function WRcolor(winrate) {
    if (winrate < 46) return "#930D0D";
    else if (winrate < 47) return "#CD3333";
    else if (winrate < 48) return "#CC7A00";
    else if (winrate < 50) return "#CCB800";
    else if (winrate < 52) return "#849B24";
    else if (winrate < 54) return "#4D7326";
    else if (winrate < 56) return "#4099BF";
    else if (winrate < 58) return "#3972C6";
    else if (winrate < 61) return "#6844d4";
    else if (winrate < 64) return "#522b99";
    else if (winrate < 67) return "#411d73";
    else if (winrate < 70) return "#310d59";
    else if (winrate === "-") {
        return "rgb(200,200,200)";
    } else {
        return "#24073d";
    }
}
