import LocalizedStrings from "react-localization";

export const { formatString, ...commonStrings } = new LocalizedStrings({
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
        longKD: "K/D ratio",
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
        frags: "zabití",
        longWR: "míra vítězství",
        kd: "Z/S",
        longKD: "Z/S koeficient",
        rank: "hodnost",
        tier: "úroveň",
        dmgRatio: "koeficient poškození",
        overall: "celkově",
        days: "{0} dní",
        hours: "{0} hodin",
    },
    es: {
        player: "jugador",
        battles: "batallas",
        nBattles: "{0} batallas",
        frags: "muertos", // or frags
        longWR: "ratio de victorias", // or winrate
        tier: "tier",
        overall: "total",
        days: "{0} días",
        hours: "{0} horas",
    },
    fr: {
        player: "joueur",
        battles: "batailles",
        nBattles: "{0} batailles",
        frags: "tués",
        longWR: "taux de victoire",
        kd: "T/M",
        longKD: "T/M ratio",
        rank: "rang",
        tier: "rang",
        dmgRatio: "ratio de dégâts",
        overall: "globam",
        days: "{0} jours",
        hours: "{0} heures",
    },
    pl: {
        player: "gracz",
        clan: "klan",
        battles: "bitwy",
        nBattles: "{0} bitwy",
        longDPG: "średnio uszkodzeń",
        frags: "średnio zniszczeń",
        longWR: "% wygranych",
        kd: "Z/S",
        longKD: "stosunek zniszczeń/strat",
        rank: "ranga",
        tier: "poziom",
        dmgRatio: "stosunek zadanych/otrzymanych",
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
        frags: "танки уничтожены",
        wr: "побед",
        longWR: "победы",
        tier: "уровень",
        overall: "общий",
        days: "{0} дней",
        hours: "{0} часа",
    },
    tr: {
        player: "oyuncu",
        clan: "klan",
        battles: "savaşlar",
        nBattles: "{0} savaşlar",
        longFrags: "Savaş başına yoketme",
        rank: "sıra",
        wr: "kaz.oranı",
        longWR: "kazanma oranı",
        longKD: "K/D Oranı",
        tier: "seviye",
        dmgRatio: "DMG oranı",
        longDmgRatio: "Hasar Oranı",
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
        wr: "勝率",
        longWR: "勝率",
        kd: "摧毀比",
        rank: "排名",
        tier: "階級",
        overall: "整體",
        days: "{0} 天",
        hours: "{0} 小時",
    },
});

export const clanPositions = new LocalizedStrings({
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

export const UPPER = (s) => s.toUpperCase();
export const Capital = (s) =>
    s
        .split(" ")
        .map((subStr) => subStr[0].toUpperCase() + subStr.slice(1))
        .join(" ");
