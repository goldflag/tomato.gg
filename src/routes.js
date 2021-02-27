// NPM
import React from "react";
import { Apps, Info, Star, Games, BarChart, LibraryBooks, FormatListNumbered, Public } from "@material-ui/icons";

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

const home = {
    title: "Home",
    path: "/",
    Icon: Apps,
    Component: <Search />,
    isNew: false,
};

const playerStats = {
    title: "Player Stats",
    path: "/stats/:server/:user",
    Icon: <></>,
    Component: <StatsPage />,
    isNew: false,
};

const tankStats = {
    title: "Tank Stats",
    path: "/tank-stats",
    Icon: BarChart,
    Component: <TankStatsPage />,
    isNew: true,
};

const leaderboards = {
    title: "Leaderboards",
    path: "/leaderboards",
    Icon: FormatListNumbered,
    Component: <Leaderboards />,
    isNew: true,
};

const moe = {
    title: "MoE Reqs",
    path: "/moe",
    Icon: Star,
    Component: <MoEExpected />,
    isNew: false,
};

const mastery = {
    title: "Mastery Reqs",
    path: "/mastery",
    Icon: Star,
    Component: <MasteryExpected />,
    isNew: false,
};

const wn8 = {
    title: "WN8 Exp. Values",
    path: "/wn8",
    Icon: Games,
    Component: <WN8Expected />,
    isNew: false,
};

const statsReference = {
    title: "Stats Reference",
    path: "/stats-reference",
    Icon: LibraryBooks,
    Component: <StatsReference />,
    isNew: false,
};

const about = {
    title: "About",
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
    title: "Tank List",
    path: "/tank-list",
    Icon: BarChart,
    Component: <TankPage />,
    isNew: false,
};

// eslint-disable-next-line no-unused-vars
const serverStats = {
    title: "Server Stats",
    path: "/server-stats",
    Icon: Public,
    Component: <ServerStatsPage />,
    isNew: false,
};

export const routes = [playerStats, tankStats, leaderboards, moe, mastery, wn8, statsReference, about, home];
export const menuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, statsReference, about];
export const mobileMenuRoutes = [home, tankStats, leaderboards, moe, mastery, wn8, about];
