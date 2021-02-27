// NPM
import React, { useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

// LOCAL
import { routes } from "./routes";
import { ScrollToTop } from "./components";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import "CSS/body.css";

const trackingId = process.env.REACT_APP_GA;

export default function Tomatopedia() {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="dark-mode">
                <Sidebar />
                <Topbar />
                <main className="wrapper">
                    <Switch>
                        {routes.map(({ path, Component }) => (
                            <Route path={path}>{Component}</Route>
                        ))}
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
