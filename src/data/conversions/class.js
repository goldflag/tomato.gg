import LocalizedStrings from "Functions/localizedStrings";

export const classConv = {
    lightTank: "LT",
    mediumTank: "MT",
    heavyTank: "HT",
    "AT-SPG": "TD",
    SPG: "SPG",
};

export const classDescConv = LocalizedStrings({
    en: { HT: "Heavy Tank", MT: "Medium Tank", LT: "Light Tank", SPG: "Self Propelled Gun", TD: "Tank Destroyer" },
    cs: { HT: "Těžký tank", MT: "Střední tank", LT: "Lehký tank", SPG: "Dělostřelectvo", TD: "Stíhač tanků" },
    de: {
        HT: "schwerer Panzer",
        MT: "mittlerer Panzer",
        LT: "leichter Panzer",
        SPG: "Selbstfahrlafetten",
        TD: "Jagdpanzer",
    },
    es: { HT: "Tanque Pesado", MT: "Tanque Mediano", LT: "Tanque Ligero", SPG: "Artillería", TD: "Cazatanque" },
    fr: { HT: "Char Lourd", MT: "Char Moyen", LT: "Char Léger", SPG: "Artillerie", TD: "Chasseur de Char" },
    ko: { HT: "중전차", MT: "중형전차", LT: "경전차", SPG: "자주포", TD: "구축전차" },
    hr: { HT: "Teški Tenk", MT: "Srednji Tenk", LT: "Laki Tenk", SPG: "Artiljerija", TD: "Tenk Razarač" },
    pl: {
        HT: "Czołg ciężki",
        MT: "Czołg średni",
        LT: "Czołg lekki",
        SPG: "Działo samobieżne",
        TD: "Niszczyciel czołgów",
    },
    ru: { HT: "Тяжёлые Танки", MT: "Средние Танки", LT: "Лёгкие Танки", SPG: "САУ", TD: "ПТ-САУ" },
    tr: { HT: "Ağır Tank", MT: "Orta Tank", LT: "Hafif Tank", SPG: "Kundağı Motorlu Topçu", TD: "Tank Avcısı" },
    zh: { HT: "重坦", MT: "中坦", LT: "輕坦", SPG: "火炮", TD: "驅逐" },
});
