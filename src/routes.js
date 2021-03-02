// NPM
import React from "react";
import { Apps, Info, Star, Games, BarChart, LibraryBooks, FormatListNumbered, Public } from "@material-ui/icons";
import LocalizedStrings from "react-localization";

// LOCAL
import Search from "./search";
import About from "./about";
import TankStatsPage from "./statpages/recentTankStats";
import StatsPage from "./statpages/statsPage";
import ServerStatsPage from "./statpages/serverStatsPage";
import TankPage from "./statpages/tankPage";
import StatsReference from "./statpages/statsReference";
import Leaderboards from "./statpages/recentLeaderboards";
import WN8Expected from "./statpages/wn8expected";
import MoEExpected from "./statpages/MoEPage";
import MasteryExpected from "./statpages/masteryPage";

const strings = new LocalizedStrings({
    en: {
        home: "Home",
        playerStats: "Player Stats",
        tankStats: "Tank Stats",
        leaderboards: "Leaderboards",
        moeReqs: "MoE Reqs",
        masteryReqs: "Mastery Reqs",
        WN8Expected: "WN8 Exp. Values",
        statsReference: "Stats Reference",
        about: "About",
        tankList: "Tank List",
        serverStats: "Server Stats",
    },
    cs: {
        home: "Domů",
        playerStats: "Hráčské statistiky",
        tankStats: "Statistiky vozidel",
        leaderboards: "Žebříčky",
        moeReqs: "Nároky na znaky",
        masteryReqs: "Nároky na vzorného tankistu",
        WN8Expected: "Předpokládané hodnoty Wn8",
        statsReference: "Reference statistik",
        about: "O nás",
        tankList: "Seznam vozidel",
        serverStats: "Serverové statistiky",
    },
    es: {
        home: "Página principal",
        playerStats: "Datos del jugador",
        tankStats: "Datos de tanques",
        leaderboards: "Clasificación",
        moeReqs: "Requisitos de MoE",
        masteryReqs: "Requisitos de dominio",
        WN8Expected: "Esperados de WN8",
        statsReference: "Referencia de datos",
        about: "Acerca de",
        tankList: "Lista de tanques",
        serverStats: "Datos del servidor",
    },
    fr: {
        home: "Accueil",
        playerStats: "Stats Joueur",
        tankStats: "Stats Chars",
        leaderboards: "Classement",
        moeReqs: "Obtention Marques",
        masteryReqs: "Obtention Maîtrises",
        WN8Expected: "Valeurs WN8",
        statsReference: "Référence Stats",
        about: "À propos",
        tankList: "Liste Chars",
        serverStats: "Statistiques Serveur",
    },
    pl: {
        home: "Strona Główna",
        playerStats: "Staty Graczy",
        tankStats: "Staty Czołów",
        leaderboards: "Rankingi",
        moeReqs: "Wymagania o. biegłości",
        masteryReqs: "Wymagania o. mistrzowskich",
        WN8Expected: "Oczekiwane WN8",
        statsReference: "Staty - odniesienie",
        about: "O Stronie",
        tankList: "Lista Czołgów",
        serverStats: "Staty Serwerowe",
    },
    tr: {
        home: "Anasayfa",
        playerStats: "Oyuncu İst.",
        tankStats: "Tank İst.",
        leaderboards: "En İyiler",
        moeReqs: "MoE Değerleri",
        masteryReqs: "Tank Ası Değ.",
        WN8Expected: "WN8 Değerleri",
        statsReference: "İstatistik Ref.",
        about: "Hakkında",
        tankList: "Tank Listesi",
        serverStats: "Sunucu İstatistik",
    },
    zh: {
        home: "主頁",
        playerStats: "玩家數據統計",
        tankStats: "戰車數據統計",
        leaderboards: "排行榜",
        moeReqs: "卓越水深",
        masteryReqs: "M牌水深",
        WN8Expected: "WN8 期望值",
        statsReference: "統計參考",
        about: "關於",
        tankList: "車輛列表",
        serverStats: "伺服器數據統計",
    },
});

const home = {
    title: strings.home,
    path: "/",
    Icon: Apps,
    Component: <Search />,
    isNew: false,
};

const playerStats = {
    title: strings.playerStats,
    path: "/stats/:server/:user",
    Icon: <></>,
    Component: <StatsPage />,
    isNew: false,
};

const tankStats = {
    title: strings.tankStats,
    path: "/tank-stats",
    Icon: BarChart,
    Component: <TankStatsPage />,
    isNew: true,
};

const tank = {
    path: "/tank",
    Component: <TankPage />,
};

const leaderboards = {
    title: strings.leaderboards,
    path: "/leaderboards",
    Icon: FormatListNumbered,
    Component: <Leaderboards />,
    isNew: true,
};

const moe = {
    title: strings.moeReqs,
    path: "/moe",
    Icon: Star,
    Component: <MoEExpected />,
    isNew: false,
};

const mastery = {
    title: strings.masteryReqs,
    path: "/mastery",
    Icon: Star,
    Component: <MasteryExpected />,
    isNew: false,
};

const wn8 = {
    title: strings.WN8Expected,
    path: "/wn8",
    Icon: Games,
    Component: <WN8Expected />,
    isNew: false,
};

const statsReference = {
    title: strings.statsReference,
    path: "/stats-reference",
    Icon: LibraryBooks,
    Component: <StatsReference />,
    isNew: false,
};

const about = {
    title: strings.about,
    path: "/about",
    Icon: Info,
    Component: <About />,
    isNew: false,
};

/*
    Disabled routes
*/

// eslint-disable-next-line no-unused-vars
const tankList = {
    title: strings.WN8Expected,
    path: "/tank-list",
    Icon: BarChart,
    Component: <TankPage />,
    isNew: false,
};

// eslint-disable-next-line no-unused-vars
const serverStats = {
    title: strings.serverStats,
    path: "/server-stats",
    Icon: Public,
    Component: <ServerStatsPage />,
    isNew: false,
};

export const routes = [playerStats, tankStats, tank, leaderboards, moe, mastery, wn8, statsReference, about, home];
export const menuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, statsReference, about];
export const mobileMenuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, about];
