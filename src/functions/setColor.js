import WN8c from "./WN8color";
import WRc from "./WRcolor";

export default function setColor(column, value) {
    if (column === "WN8") return ({backgroundColor: WN8c(value), color: "white"})
    else if (column === "Winrate") return ({backgroundColor: WRc(value), color: "white"})
    else return null;  
}