// NPM
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import Styled from "styled-components";

// LOCAL
import { routes } from "./routes";
import { ScrollToTop } from "./components";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import { BackgroundContext } from "Context";
import Ocean from "./assets/Ocean.svg";
import "CSS/body.css";

const trackingId = process.env.REACT_APP_GA;

const Wrapper = Styled.div`
    min-height: 100vh;

    /* unvisited link */
    a {
        color: rgb(161, 177, 230);
    }

    /* mouse over link */
    a:hover {
        color: rgb(180, 70, 129);
    }

    /* selected link */
    a:active {
        color: rgb(120, 60, 131);
    }
`;

const backgrounds = {
    black: "rgb(30, 30, 50)",
    blue: `url(${Ocean}) no-repeat center center fixed`,
};

const Blue = Styled.div`
    color: rgb(234, 238, 248);
    background: ${({ background }) => backgrounds[background]};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: ${({ color }) => color};

    a {
        text-decoration: none;
    }
`;

export default function Tomatopedia() {
    const { background } = useContext(BackgroundContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Blue background={background}>
                <Sidebar />
                <Topbar />
                <Wrapper>
                    <Switch>
                        {routes.map(({ path, Component }, i) => (
                            <Route path={path} key={i}>
                                {Component}
                            </Route>
                        ))}
                        <Redirect to="/" />
                    </Switch>
                </Wrapper>
            </Blue>
        </Router>
    );
}
