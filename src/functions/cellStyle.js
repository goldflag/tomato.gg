import { WN8Color, WRColor } from "Styling/colors";

export default function setColor(isSorted, column, value) {
    if (column === "wn8" || column === "overallWN8" || column === "recentWN8")
        return {
            backgroundColor: WN8Color(value),
            color: "white",
            padding: "10px",
        };
    else if (column === "winrate" || column === "overallWinrate" || column === "recentWinrate")
        return {
            backgroundColor: WRColor(value === "-" || value === undefined || value === null ? value : value.slice(0, -1)),
            color: "white",
            padding: "10px",
        };
    else if (isSorted) return { backdropFilter: "brightness(1.2)" };
    else return null;
}
