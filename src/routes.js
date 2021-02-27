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

export const routes = [playerStats, tankStats, leaderboards, moe, mastery, wn8, statsReference, about, home];
export const menuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, statsReference, about];
export const mobileMenuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, about];
