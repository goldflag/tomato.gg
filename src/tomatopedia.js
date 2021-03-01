// NPM
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";

// LOCAL
import { routes } from "./routes";
import { ScrollToTop } from "./components";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { BackgroundContext } from "Context";
import "CSS/body.css";

const trackingId = process.env.REACT_APP_GA;

export default function Tomatopedia() {

    const { background } = useContext(BackgroundContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className= {background === "blue" ? "blue" : "black"}>
                <Sidebar />
                <Topbar />
                <main className="wrapper">
                    <Switch>
                        {routes.map(({ path, Component }, i) => (
                            <Route path={path} key={i}>
                                {Component}
                            </Route>
                        ))}
                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        </Router>
    );
}
