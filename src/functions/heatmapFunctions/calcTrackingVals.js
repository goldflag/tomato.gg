import tankNames from "../../data/tankNames.json";
import WN8 from "../../data/wn8.json";

const classToIndex = { HT: 0, MT: 1, TD: 2, LT: 3, SPG: 4 };
const tierToKey = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
};
const Conversion = {
    lightTank: "LT",
    mediumTank: "MT",
    heavyTank: "HT",
    "AT-SPG": "TD",
    SPG: "SPG",
};

export default function calcTrackingVals(BattleCount, BattleTracker, EXPTracker, WinsCount, raw) {
    const id = raw.id;
    const battles = raw.battles;
    const exp = WN8[id];
    if (!isNaN(raw.winrate)) {
        BattleCount[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]] += battles;
        BattleCount[5][tierToKey[tankNames[id]["tier"]]] += battles;
        WinsCount[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]] +=
            (raw.winrate * battles) / 100;
        WinsCount[5][tierToKey[tankNames[id]["tier"]]] += (raw.winrate * battles) / 100;

        BattleTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].dmg +=
            raw.damage;
        BattleTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].spot +=
            raw.spots;
        BattleTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].frag +=
            raw.frags;
        BattleTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].def += raw.def;
        BattleTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].wr +=
            raw.winrate * battles;

        BattleTracker[5][tierToKey[tankNames[id]["tier"]]].dmg += raw.damage;
        BattleTracker[5][tierToKey[tankNames[id]["tier"]]].spot += raw.spots;
        BattleTracker[5][tierToKey[tankNames[id]["tier"]]].frag += raw.frags;
        BattleTracker[5][tierToKey[tankNames[id]["tier"]]].def += raw.def;
        BattleTracker[5][tierToKey[tankNames[id]["tier"]]].wr += raw.winrate * battles;

        EXPTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].dmg +=
            exp.expDamage * battles;
        EXPTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].spot +=
            exp.expSpot * battles;
        EXPTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].frag +=
            exp.expFrag * battles;
        EXPTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].def +=
            exp.expDef * battles;
        EXPTracker[classToIndex[Conversion[tankNames[id]["type"]]]][tierToKey[tankNames[id]["tier"]]].wr +=
            exp.expWinRate * battles;

        EXPTracker[5][tierToKey[tankNames[id]["tier"]]].dmg += exp.expDamage * battles;
        EXPTracker[5][tierToKey[tankNames[id]["tier"]]].spot += exp.expSpot * battles;
        EXPTracker[5][tierToKey[tankNames[id]["tier"]]].frag += exp.expFrag * battles;
        EXPTracker[5][tierToKey[tankNames[id]["tier"]]].def += exp.expDef * battles;
        EXPTracker[5][tierToKey[tankNames[id]["tier"]]].wr += exp.expWinRate * battles;
    }
}
