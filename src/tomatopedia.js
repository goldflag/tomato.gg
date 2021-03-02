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
`;

const Blue = Styled.div`
    color: rgb(234, 238, 248);
    background: url(${({ocean}) => ocean}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: ${({color}) => color};

    /* unvisited link */
    a {
        color: rgb(161, 177, 230);
        text-decoration: none;
    }

    /* mouse over link */
    a:hover {
        color: rgb(180, 70, 129);
        text-decoration: none;
    }

    /* selected link */
    a:active {
        color: rgb(120, 60, 131);
        text-decoration: none;
    }

`

export default function Tomatopedia() {

    const { background } = useContext(BackgroundContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Blue 
                color={background === "blue" ? null : "rgb(30, 30, 50)"}
                ocean={background === "blue" ? Ocean : null}
            >
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
