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

function WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN) {
    const rWINc = Math.max(0, (rWIN - 0.71) / (1 - 0.71));
    const rDAMAGEc = Math.max(0, (rDAMAGE - 0.22) / (1 - 0.22));
    const rFRAGc = Math.max(0, Math.min(rDAMAGEc + 0.2, (rFRAG - 0.12) / (1 - 0.12)));
    const rSPOTc = Math.max(0, Math.min(rDAMAGEc + 0.1, (rSPOT - 0.38) / (1 - 0.38)));
    const rDEFc = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF - 0.1) / (1 - 0.1)));
    const WN8 =
        980 * rDAMAGEc +
        210 * rDAMAGEc * rFRAGc +
        155 * rFRAGc * rSPOTc +
        75 * rDEFc * rFRAGc +
        145 * Math.min(1.8, rWINc);
    return WN8;
}

export default function simpleWN8(c, t, BattleTracker, EXPTracker) {
    const rDAMAGE = BattleTracker[c][tierToKey[t]].dmg / EXPTracker[c][tierToKey[t]].dmg;
    const rSPOT = BattleTracker[c][tierToKey[t]].spot / EXPTracker[c][tierToKey[t]].spot;
    const rFRAG = BattleTracker[c][tierToKey[t]].frag / EXPTracker[c][tierToKey[t]].frag;
    const rDEF = BattleTracker[c][tierToKey[t]].def / EXPTracker[c][tierToKey[t]].def;
    const rWIN = BattleTracker[c][tierToKey[t]].wr / EXPTracker[c][tierToKey[t]].wr;
    return WN8Final(rDAMAGE, rSPOT, rFRAG, rDEF, rWIN);
}
