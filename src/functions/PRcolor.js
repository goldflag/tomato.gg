export default function PRcolor(PR) {
    if (PR < 2000) {
        return "#930D0D";
    } else if (PR < 3000) {
        return "#CD3333";
    } else if (PR < 4000) {
        return "#CC7A00";
    } else if (PR < 5000) {
        return "#CCB800";
    } else if (PR < 6000) {
        return "#849B24";
    } else if (PR < 7000) {
        return "#4D7326";
    } else if (PR < 8000) {
        return "#4099BF";
    } else if (PR < 9000) {
        return "#3972C6";
    } else if (PR < 10000) {
        return "#793DB6";
    } else {
        return "#401070";
    }
}
