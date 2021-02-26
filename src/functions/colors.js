export function WRcolor(winrate) {
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
        return "rgba(120, 120 ,120, 0.4)";
    } else {
        return "#24073d";
    }
}

export function PRcolor(PR) {
    if (PR < 2000) return "#930D0D";
    else if (PR < 3000) return "#CD3333";
    else if (PR < 4000) return "#CC7A00";
    else if (PR < 5000) return "#CCB800";
    else if (PR < 6000) return "#849B24";
    else if (PR < 7000) return "#4D7326";
    else if (PR < 8000) return "#4099BF";
    else if (PR < 9000) return "#3972C6";
    else if (PR < 10000) return "#793DB6";
    else return "#401070";
}

export function WN8color(wn8) {
    if (wn8 < 300) return "#930D0D";
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
    else if (wn8 === "-") return "rgba(120, 120 ,120, 0.4)";
    else return "#24073d";
}

export function battlesColor(battles) {
    if (battles < 1500) return "#930D0D";
    else if (battles < 3000) return "#CD3333";
    else if (battles < 6000) return "#CC7A00";
    else if (battles < 12000) return "#CCB800";
    else if (battles < 15000) return "#849B24";
    else if (battles < 20000) return "#4D7326";
    else if (battles < 30000) return "#4099BF";
    else if (battles < 40000) return "#3972C6";
    else if (battles < 50000) return "#793DB6";
    else return "#401070";
}
