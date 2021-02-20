export default function WN8color(wn8) {
    if (wn8 < 300) return "#930D0D"
    else if (wn8 < 450) return "#CD3333";
    else if (wn8 < 650) return "#CC7A00";
    else if (wn8 < 900) return "#CCB800";
    else if (wn8 < 1200) return "#849B24";
    else if (wn8 < 1600) return "#4D7326";
    else if (wn8 < 2000) return "#4099BF";
    else if (wn8 < 2450) return "#3972C6";
    else if (wn8 < 2900) return "#6844d4";
    else if (wn8 < 3400) return "#522b99";
    else if (wn8 < 4000) return "#411d73";
    else if (wn8 < 4700) return "#310d59";
    else if (wn8 === "-") {
        return "rgb(200,200,200)";
    } else {
        return "#24073d";
    }
}

