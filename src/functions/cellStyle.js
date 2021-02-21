import WN8c from "./WN8color";
import WRc from "./WRcolor";

export default function setColor(isSorted, column, value) {
    if (column === "wn8" || column === "overallWN8")
        return {
            backgroundColor: WN8c(value),
            color: "white",
            padding: "10px",
        };
    else if (column === "winrate")
        return {
            backgroundColor: WRc(value.slice(0, -1)),
            color: "white",
            padding: "10px",
        };
    else if (isSorted) return { backdropFilter: "brightness(1.2)" };
    else return null;
}
