import LocalizedStrings from "Functions/localizedStrings";

export const { formatString, ...commonStrings } = LocalizedStrings({
    en: {
        player: "player",
        clan: "clan",
        battles: "battles",
        nBattles: "{0} battles",
        dpg: "DPG",
        longDPG: "damage per game",
        frags: "frags",
        longFrags: "frags per game",
        wr: "WR",
        longWR: "winrate",
        kd: "K/D",
        longKD: "kill to death ratio",
        tier: "tier",
        wn8: "WN8",
        rank: "rank",
        dmgRatio: "DMG ratio",
        longDmgRatio: "damage ratio",
        overall: "overall",
        days: "{0} days",
        hours: "{0} hours",
    },
    cs: {
        player: "hráč",
        clan: "klan",
        battles: "bitev",
        nBattles: "{0} bitev",
        dpg: "PZB",
        longDPG: "poškození za hru",
        frags: "zabití",
        longFrags: "zabití za hru",
        wr: "WR",
        longWR: "% vítězství",
        kd: "Z/S",
        longKD: "koeficient zabití/smrti",
        rank: "hodnost",
        tier: "úroveň",
        wn8: "WN8",
        dmgRatio: "ø poškození",
        longDmgRatio: "koeficient poškození",
        overall: "celkově",
        days: "{0} dní",
        hours: "{0} hodin",
    },
    de: {
        player: "spieler",
        clan: "clan",
        battles: "gefechte",
        nBattles: "{0} gefechte",
        dpg: "DPG",
        longDPG: "durchschnittsschaden",
        frags: "abschüsse",
        longFrags: "abschüsse pro gefecht",
        winrate: "siegrate",
        kd: "K/D",
        longKD: "verhältnis abschüsse/tode",
        rank: "rang",
        tier: "tier",
        wn8: "WN8",
        dmgRatio: "schadensverhältnis",
        longDmgRatio: "schadensverhältnis",
        overall: "gesamt",
        days: "{0} tage",
        hours: "{0} stunden",
    },
    es: {
        player: "jugador",
        battles: "batallas",
        nBattles: "{0} batallas",
        frags: "muertos", // or frags
        winrate: "WR",
        longWR: "ratio de victorias", // or winrate
        tier: "tier",
        wn8: "WN8",
        overall: "total",
        days: "{0} días",
        hours: "{0} horas",
        kd: "M/M",
    },
    fr: {
        player: "joueur",
        battles: "batailles",
        nBattles: "{0} batailles",
        longDPG: "dégâts par partie",
        frags: "tués",
        longFrags: "tués par partie",
        winrate: "WR",
        longWR: "taux de victoire",
        kd: "T/M",
        longKD: "ratio de tués/morts",
        rank: "rang",
        tier: "rang",
        wn8: "WN8",
        dmgRatio: "ratio de dégâts",
        longDmgRatio: "ratio de dégâts",
        overall: "globam",
        days: "{0} jours",
        hours: "{0} heures",
    },
    ko: {
        player: "플레이어",
        clan: "클랜",
        battles: "전투 수",
        nBattles: "{0}판",
        dpg: "DPG",
        longDPG: "판 당 데미지",
        frags: "킬 수",
        longFrags: "판 당 킬 수",
        winrate: "승률",
        tier: "티어",
        wn8: "WN8",
        dmgRatio: "DMG 비율",
        longDmgRatio: "입힌데미지/받은데미지 비율",
        kd: "K/D",
        longKD: "킬/뎃 비율",
        rank: "랭킹",
        overall: "전체",
        days: "{0}일",
        hours: "{0}시간",
    },
    pl: {
        player: "gracz",
        clan: "klan",
        battles: "bitwy",
        nBattles: "{0} bitwy",
        longDPG: "uszkodzeń na bitwę",
        frags: "średnio zniszczeń",
        longFrags: "zniszczeń na bitwę",
        longWR: "% wygranych",
        kd: "Z/S",
        longKD: "stosunek zniszczeń do strat",
        rank: "ranga",
        tier: "poziom",
        wn8: "WN8",
        longDmgRatio: "stosunek zadanych do otrzymanych uszkodzeń",
        overall: "ogólne",
        days: "{0} dni",
        hours: "{0} godziny",
    },
    ru: {
        player: "игрок",
        clan: "клан",
        battles: "битвы",
        nBattles: "{0} игр",
        dpg: "ущерб",
        longDPG: "урон за игру",
        frags: "танки уничтожены",
        longFrags: "фрагов за игру",
        wr: "побед",
        longWR: "победы",
        longKD: "соотношение фрагов и смертей",
        tier: "уровень",
        wn8: "WN8",
        longDmgRatio: "коэффициент урона",
        overall: "общий",
        days: "{0} дней",
        hours: "{0} часа",
    },
    tr: {
        player: "oyuncu",
        clan: "klan",
        battles: "savaşlar",
        nBattles: "{0} savaşlar",
        longDPG: "maç başına hasar",
        longFrags: "maç başına yok etme",
        rank: "sıra",
        wr: "kaz.oranı",
        longWR: "kazanma oranı",
        longKD: "yok etme ölme oranı",
        tier: "seviye",
        wn8: "WN8",
        dmgRatio: "DMG oranı",
        longDmgRatio: "hasar oranı",
        overall: "genel",
        days: "{0} gün",
        hours: "{0} saatte",
    },
    zh: {
        player: "玩家",
        clan: "公會",
        battles: "戰鬥場數",
        nBattles: "{0} 戰鬥場數",
        dpg: "傷害",
        longDPG: "平均傷害",
        frags: "擊殺數",
        longFrags: "平均擊殺數",
        wr: "勝率",
        longWR: "勝率",
        kd: "摧毀比",
        longKD: "擊毀比",
        rank: "排名",
        tier: "階級",
        wn8: "WN8",
        longDmgRatio: "傷害比",
        overall: "整體",
        days: "{0} 天",
        hours: "{0} 小時",
    },
});
console.log(formatString, commonStrings);
export const clanPositions = LocalizedStrings({
    en: {
        commander: "Commander",
        executive_officer: "Executive Officer",
        personnel_officer: "Personnel Officer",
        combat_officer: "Combat Officer",
        intelligence_officer: "Intelligence Officer",
        quartermaster: "Quartermaster",
        recruitment_officer: "Recruitment Officer",
        junior_officer: "Junior Officer",
        private: "Private",
        recruit: "Recruit",
        reservist: "Reservist",
    },
    cs: {
        commander: "Velitel",
        executive_officer: "Výkonný důstojník",
        personnel_officer: "Posádkový důstojník",
        combat_officer: "Bojový důstojník",
        intelligence_officer: "Zpravodajský důstojník",
        quartermaster: "Proviantní důstojník",
        recruitment_officer: "Náborový důstojník",
        junior_officer: "Mladší důstojník",
        private: "Vojín",
        recruit: "Rekrut",
        reservist: "Záložník",
    },
    de: {
        commander: "Kommandant",
        executive_officer: "Ausführender Offizier",
        personnel_officer: "Personaloffizier",
        combat_officer: "Kampfoffizier",
        intelligence_officer: "Geheimdienstoffizier",
        quartermaster: "Quartiermeister",
        recruitment_officer: "Rekrutierungsoffizier",
        junior_officer: "Unteroffizier",
        private: "Gefreiter",
        recruit: "Rekrut",
        reservist: "Reservist",
    },
    es: {
        commander: "Comandante",
        executive_officer: "Oficial Ejecutivo",
        personnel_officer: "Oficial de Personal",
        combat_officer: "Oficial de Combate",
        intelligence_officer: "Oficial de Inteligencia",
        quartermaster: "Cuartel General",
        recruitment_officer: "Oficial de Reclutamiento",
        junior_officer: "Suboficial",
        private: "Soldado",
        recruit: "Recluta",
        reservist: "Reservista",
    },
    fr: {
        commander: "Commandant",
        executive_officer: "Commandant en Second",
        personnel_officer: "Officier du Personnel",
        combat_officer: "Officier de Combat",
        intelligence_officer: "Officier du Renseignement",
        quartermaster: "Quartier-Maître",
        recruitment_officer: "Recruteur",
        junior_officer: "Officier Subalterne",
        private: "Soldat",
        recruit: "Recrue",
        reservist: "Réserviste",
    },
    ko: {
        commander: "사령관",
        executive_officer: "부사령관",
        personnel_officer: "인사장교",
        combat_officer: "작전장교",
        intelligence_officer: "정보장교",
        quartermaster: "회계장교",
        recruitment_officer: "모병장교",
        junior_officer: "부사관",
        private: "사병",
        recruit: "신병",
        reservist: "보충병",
    },
    pl: {
        commander: "Dowódca",
        executive_officer: "Oficer wykonawczy",
        personnel_officer: "Oficer kadrowy",
        combat_officer: "Oficer grupy bojowej",
        intelligence_officer: "Oficer wywiadu",
        quartermaster: "Kwatermistrz",
        recruitment_officer: "Rekruter",
        junior_officer: "Podoficer",
        private: "Szeregowy",
        recruit: "Rekrut",
        reservist: "Rezerwista",
    },
    ru: {
        commander: "Командующий",
        executive_officer: "Заместитель командующего",
        personnel_officer: "Офицер штаба",
        combat_officer: "Командир подразделения",
        intelligence_officer: "Офицер разведки",
        quartermaster: "Офицер снабжения",
        recruitment_officer: "Офицер по кадрам",
        junior_officer: "Младший офицер",
        private: "Боец",
        recruit: "Новобранец",
        reservist: "Резервист",
    },
    tr: {
        commander: "Komutan",
        executive_officer: "İkinci Komutan",
        personnel_officer: "Personel Subayı",
        combat_officer: "Savaş Komutanı",
        intelligence_officer: "İstihbarat Subayı",
        quartermaster: "Levazım Subayı",
        recruitment_officer: "Üye Alım Subayı",
        junior_officer: "Yedek Subay",
        private: "Er",
        recruit: "Acemi",
        reservist: "İhtiyat",
    },
    zh: {
        commander: "指揮官",
        executive_officer: "執行官",
        personnel_officer: "人事官",
        combat_officer: "作戰官",
        intelligence_officer: "情報官",
        quartermaster: "軍需官",
        recruitment_officer: "徵募官",
        junior_officer: "下級軍官",
        private: "士兵",
        recruit: "新兵",
        reservist: "後備軍人",
    },
});

export const languages = {
    en: { name: "English" },
    cs: { name: "Čeština" },
    de: { name: "Deutsche" },
    es: { name: "Español" },
    fr: { name: "Français" },
    ko: { name: "한국어" },
    pl: { name: "Polski" },
    ru: { name: "Pусский" },
    tr: { name: "Türkçe" },
    zh: { name: "立早" },
};

export const UPPER = (s) => s.toUpperCase();
export const Capital = (s) =>
    s
        .split(" ")
        .map((subStr) => subStr[0].toUpperCase() + subStr.slice(1))
        .join(" ");
