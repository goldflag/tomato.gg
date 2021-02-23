import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
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

import "CSS/body.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const trackingId = process.env.REACT_APP_GA;

export default function Tomatopedia() {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <div className="dark-mode">
                <Sidebar />
                <Topbar />
                <main className="wrapper">
                    <Switch>
                        <Route path="/stats/:server/:user">
                            <StatsPage />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/server-stats">
                            <ServerStatsPage />
                        </Route>
                        <Route path="/tank-stats">
                            <TankStatsPage />
                        </Route>
                        <Route path="/stats-reference">
                            <StatsReference />
                        </Route>
                        <Route path="/leaderboards">
                            <Leaderboards />
                        </Route>
                        <Route path="/tank">
                            <TankPage />
                        </Route>
                        <Route path="/wn8">
                            <WN8Expected />
                        </Route>
                        <Route path="/moe">
                            <MoEExpected />
                        </Route>
                        <Route path="/mastery">
                            <MasteryExpected />
                        </Route>
                        <Route exact path="/">
                            <Search />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
