// NPM
import React from "react";
import styled, { css } from "styled-components";

// LOCAL
import { tierConv, nationConv, classConv } from "Data/conversions";
import LocalizedStrings from "Functions/localizedStrings";
export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;

export const FiltersContainer = styled.div`
    padding: 16px;
    background-color: rgba(40, 40, 70, 0.5);
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    backdrop-filter: blur(7px);
    @media screen and (max-width: 1000px) {
        backdrop-filter: brightness(1.2);
    }
`;

export const ButtonFiltersContainer = styled.div`
    font-family: Roboto Mono;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 0 0 0;
`;

export const StyledTable = styled.table`
    white-space: nowrap;
    position: sticky;
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
    font-family: Roboto Mono;
    cursor: ${({ pointer }) => (pointer === true ? "pointer" : null)};
    backdrop-filter: blur(7px);
    tr {
        overflow-x: scroll;
        color: rgb(220, 220, 220);
        background-color: rgba(40, 40, 70, 0.5);
        :nth-child(even) {
            background-color: rgba(50, 50, 80, 0.5);
        }
        :hover {
            background-color: rgba(30, 30, 60, 0.5);
        }
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: rgba(50, 50, 80, 0.5);
        font-weight: 500;
    }
    td {
        margin: 0;
        padding: 0.3rem 0.5rem;
        :last-child {
            border-right: 0;
        }
        ${({ tdOverride }) =>
            css`
                ${tdOverride}
            `}
    }
`;

export const SubRow = styled.tr`
    background-color: rgba(40, 40, 70, 0.5);
    padding: 10px;
`;

export const PremField = styled.div`
    color: ${({ isPrem }) => (isPrem ? `#ffe455` : null)};
`;

export const Name = styled(PremField)`
    display: grid;
    grid-template-columns: 90px 50%;
    align-items: center;
`;

const isPrem = ({ original }) => original.isPrem || original.is_premium;

const nationImages = {
    China: require("Assets/flagIcons/China.png"),
    Czech: require("Assets/flagIcons/Czech.png"),
    France: require("Assets/flagIcons/France.png"),
    Germany: require("Assets/flagIcons/Germany.png"),
    Italy: require("Assets/flagIcons/Italy.png"),
    Japan: require("Assets/flagIcons/Japan.png"),
    Poland: require("Assets/flagIcons/Poland.png"),
    Sweden: require("Assets/flagIcons/Sweden.png"),
    UK: require("Assets/flagIcons/UK.png"),
    USA: require("Assets/flagIcons/USA.png"),
    USSR: require("Assets/flagIcons/USSR.png"),
};

const classImages = {
    HT: require("Assets/classIcons/HT.png"),
    LT: require("Assets/classIcons/LT.png"),
    MT: require("Assets/classIcons/MT.png"),
    SPG: require("Assets/classIcons/SPG.png"),
    TD: require("Assets/classIcons/TD.png"),
    premHT: require("Assets/classIcons/premHT.png"),
    premLT: require("Assets/classIcons/premLT.png"),
    premMT: require("Assets/classIcons/premMT.png"),
    premSPG: require("Assets/classIcons/premSPG.png"),
    premTD: require("Assets/classIcons/premTD.png"),
};

export const TankNameCell = ({ row: { original } }) => (
    <Name isPrem={isPrem({ original })}>
        <img src={original.image} alt={original.short_name || original.name} />
        {original.short_name || original.name}
    </Name>
);

export const NationCell = ({ value, maxWidth, row }) => (
    <img
        src={nationImages[value] || nationImages[nationConv[value]]}
        style={{ maxWidth: maxWidth || "40px" }}
        alt={value}
    />
);

export const ClassCell = ({ value, maxWidth, row }) => (
    <img
        src={
            classImages[(isPrem(row) ? "prem" : "") + value] ||
            classImages[(isPrem(row) ? "prem" : "") + classConv[value]]
        }
        style={{ maxWidth: maxWidth || "20px" }}
        alt={value}
    />
);

export const TierCell = ({ value, row }) => <PremField isPrem={isPrem(row)}>{tierConv[value] || value}</PremField>;

export const tableHeaders = LocalizedStrings({
    en: {
        username: "Username",
        avgTier: "Avg Tier",
        kd: "K/D",
        spots: "Spots",
        survival: "Survival",
        decap: "Decap",
        name: "Name",
        nation: "Nation",
        class: "Class",
        ace: "Ace Wanker",
        firstClass: "1st Class",
        secondClass: "2nd Class",
        thirdClass: "3rd Class",
        moeReqs: "{0} MoE Reqs",
        dayChange: "{0} Day {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
    cs: {
        username: "Přezdívka",
        avgTier: "Ø Úroveň",
        spots: "Odhalení",
        survival: "Přežití",
        decap: "Obrana Základny",
        name: "Název",
        nation: "Národ",
        class: "Třída",
        ace: "Tankista Hrdina",
        firstClass: "První Třída",
        secondClass: "Druhá Třída",
        thirdClass: "Třetí Třída",
        moeReqs: "{0} Nároky na Znaky",
        dayChange: "{0} Den {1}",
        expDef: "expDef",
        expFrag: "Očekávaná Hodnota Obrany",
        expSpot: "Očekávaná Odhalení",
        expDamage: "Očekávané Poškození",
        expWinRate: "Očekávaná Míra Vítězství",
    },
    de: {
        username: "Spielername",
        avgTier: "Durchschnitts-Tier",
        spots: "Gegner entdeckt",
        survival: "Überleben",
        decap: "Verteidigungspunkte",
        name: "Name",
        nation: "Nation",
        class: "Klasse",
        ace: "Panzerass",
        firstClass: "1. Klasse",
        secondClass: "2. Klasse",
        thirdClass: "3. Klasse",
        moeReqs: "{0} MoE ERW.",
        dayChange: "{0} Tage {1}",
        expDef: "erwVerteidgung",
        expFrag: "erwAbschüsse",
        expSpot: "erwAufklärungen",
        expDamage: "erwSchaden",
        expWinRate: "erwSiegrate",
    },
    es: {
        username: "Jugador",
        avgTier: "Tier Promedio", // "Tier prom"
        spots: "Detectados",
        survival: "Sobrevivido",
        decap: "Reseteo", // "Defensa de base"
        name: "Nombre",
        nation: "Nación",
        class: "Tipo",
        ace: "Maestría",
        firstClass: "Clase 1",
        secondClass: "Clase 2",
        thirdClass: "Clase 3",
        moeReqs: "{0} MoE Reqs",
        dayChange: "{0} Día {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
    fr: {
        username: "Pseudo",
        avgTier: "Rang Moyen",
        spots: "Détections",
        survival: "Survie",
        decap: "Decap",
        name: "Nom",
        nation: "Nation",
        class: "Type",
        ace: "As du Char",
        firstClass: "1re Classe",
        secondClass: "2e Classe",
        thirdClass: "3e Classe",
        moeReqs: "Obtention {0} marque",
        dayChange: "{1} {0} Jour",
        expDef: "expDef",
        expFrag: "expTués",
        expSpot: "expDétection",
        expDamage: "expDégâts",
        expWinRate: "expVictoires",
    },
    ko: {
        username: "유저네임",
        avgTier: "평균 티어",
        spots: "정찰",
        survival: "생존",
        decap: "방어점수",
        name: "이름",
        nation: "국가",
        class: "유형",
        ace: "에이스", // Ace Tanker
        firstClass: "1급",
        secondClass: "2급",
        thirdClass: "3급",
        moeReqs: "{0} 화력의증표 요구사양",
        dayChange: "{0} 일 {1}",
        expDef: "방어점수 기댓값",
        expFrag: "격파 기댓값",
        expSpot: "정찰 기댓값",
        expDamage: "데미지 기댓값",
        expWinRate: "승률 기댓값",
    },
    hr: {
        username: "Korisničko ime",
        avgTier: "Prosječna Razina",
        spots: "Spotani",
        survival: "Preživljavanje",
        decap: "Dekap",
        name: "Ime",
        nation: "Zemlja",
        class: "Klasa",
        ace: "Ace Wanker", // Ace Tanker
        firstClass: "1. klasa",
        secondClass: "2. klasa",
        thirdClass: "3. klasa",
        moeReqs: "{0} Zahtjev za Znakove Izvrsnosti",
        dayChange: "{0} Dan {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
    pl: {
        username: "Gracz",
        avgTier: "Średni poziom",
        spots: "Wykrycia",
        survival: "% Przetrwań",
        decap: "Obrona bazy",
        name: "Nazwa",
        nation: "Nacja",
        class: "Klasa",
        ace: "As Pancerny",
        firstClass: "1. Klasa",
        secondClass: "2. Klasa",
        thirdClass: "3. Klasa",
        moeReqs: "Wymagania na {0} biegłość",
        dayChange: "{0} dzień {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
    tr: {
        username: "Oyuncu adı",
        avgTier: "Ort Seviye",
        winrate: "Kaz.Oranı",
        dmgRatio: "DMG Oranı",
        spots: "Spot",
        survival: "Sağ Kalma",
        decap: "Decap",
        name: "Tank Adı",
        nation: "Ülke",
        class: "Sınıf",
        ace: "Ace Wanker",
        firstClass: "1. Sınıf",
        secondClass: "2. Sınıf",
        thirdClass: "3. Sınıf",
        moeReqs: "{0} MoE Gereken",
        dayChange: "{0} Gün {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
    zh: {
        username: "玩家",
        avgTier: "平均階級",
        winrate: "勝率",
        dmgRatio: "傷害比",
        spots: "偵查",
        survival: "存活",
        decap: "基地防禦點",
        name: "名稱",
        nation: "國家",
        class: "車型",
        ace: "戰車王牌",
        firstClass: "精通一級",
        secondClass: "精通二級",
        thirdClass: "精通三級",
        moeReqs: "{0} 卓越需求",
        dayChange: "{0} 天 {1}",
        expDef: "expDef",
        expFrag: "expFrag",
        expSpot: "expSpot",
        expDamage: "expDamage",
        expWinRate: "expWinrate",
    },
});
