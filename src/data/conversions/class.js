import LocalizedStrings from "react-localization";

export const classConv = {
    lightTank: "LT",
    mediumTank: "MT",
    heavyTank: "HT",
    "AT-SPG": "TD",
    SPG: "SPG",
};

export const classDescConv = new LocalizedStrings({
    en: {
        HT: "Heavy Tank",
        MT: "Medium Tank",
        LT: "Light Tank",
        SPG: "Self Propelled Gun",
        TD: "Tank Destroyer",
    },
    fr: {
        HT: "Char Lourd",
        MT: "Char Moyen",
        LT: "Char Léger",
        SPG: "Artillerie",
        TD: "Chasseur de Char",
    },
    pl: {
        HT: "Czołg ciężki",
        MT: "Czołg średni",
        LT: "Czołg lekki",
        SPG: "Działo samobieżne",
        TD: "Niszczyciel czołgów",
    },
});
