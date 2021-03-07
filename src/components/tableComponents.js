// NPM
import React from "react";
import styled, { css } from "styled-components";

// LOCAL
import { tierConv, nationConv, classConv } from "Data/conversions";
import LocalizedStrings from "react-localization";
export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;
export const FiltersContainer = styled.div`
    padding: 16px;
    background-color: rgba(40, 40, 70, 0.5);
    width: 100%;
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

export const TankNameCell = ({ row: { original } }) => (
    <Name isPrem={isPrem({ original })}>
        <img src={original.image} alt={original.short_name || original.name} />
        {original.short_name || original.name}
    </Name>
);

export const NationCell = ({ value, maxWidth, row }) => (
    <img
        src={require(`Assets/flagIcons/${nationConv[value] || value}.png`)}
        style={{ maxWidth: maxWidth || "40px" }}
        alt={value}
    />
);

export const ClassCell = ({ value, maxWidth, row }) => (
    <img
        src={require(`Assets/classIcons/${isPrem(row) ? "prem" : ""}${classConv[value] || value}.png`)}
        style={{ maxWidth: maxWidth || "20px" }}
        alt={value}
    />
);

export const TierCell = ({ value, row }) => <PremField isPrem={isPrem(row)}>{tierConv[value] || value}</PremField>;

export const tableHeaders = new LocalizedStrings({
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
        avgTier: "Průměrná úroveň",
        kd: "Z/S",
        spots: "Odhalená vozidla",
        survival: "Přežití",
        decap: "Obrana základny",
        name: "Název",
        nation: "Národ",
        class: "Třída",
        ace: "Tankista hrdina",
        firstClass: "První třída",
        secondClass: "Druhá třída",
        thirdClass: "Třetí třída",
        moeReqs: "{0} Nároky na znaky",
        dayChange: "{0} Den {1}",
        expDef: "expDef",
        expFrag: "očekávaná hodnota obrany",
        expSpot: "očekávaná odhalení",
        expDamage: "očekávané poškození",
        expWinRate: "očekávaná míra vítězství",
    },
    fr: {
        username: "Pseudo",
        avgTier: "Rang Moyen",
        kd: "T/M",
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
    pl: {
        username: "Gracz",
        avgTier: "Średni poziom",
        kd: "Stosunek zniszczeń/strat",
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
        kd: "K/D",
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
        kd: "摧毀比",
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
