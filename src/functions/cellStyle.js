import { WN8color, WRcolor } from "./colors";

export default function setColor(isSorted, column, value) {
    if (column === "wn8" || column === "overallWN8" || column === "recentWN8")
        return {
            backgroundColor: WN8color(value),
            color: "white",
            padding: "10px",
        };
    else if (column === "winrate" || column === "overallWinrate" || column === "recentWinrate")
        return {
            backgroundColor: WRcolor(value.slice(0, -1)),
            color: "white",
            padding: "10px",
        };
    else if (isSorted) return { backdropFilter: "brightness(1.2)" };
    else return null;
}
