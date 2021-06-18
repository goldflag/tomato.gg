// NPM
import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import ReactGA from "react-ga";
import styled from "styled-components";
import Scrollbar from "react-scrollbars-custom";

// LOCAL
import { routes } from "./routes";
import { ScrollToTop } from "./components";
import Topbar from "./topbar";
import Sidebar from "./sidebar";
import Privacy from "./privacy";

import { BackgroundContext } from "Context";
import Glacier from "./assets/blurred.jpg";

import "CSS/body.css";

const trackingId = process.env.REACT_APP_GA;

const Wrapper = styled.div`
    height: calc(100vh - 4rem);
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
    blue: `url(${Glacier}) no-repeat center center fixed`,
};

const Blue = styled.div`
    color: rgb(234, 238, 248);
    background-color: rgba(20, 20, 40, 0.8);
    a {
        text-decoration: none;
    }
`;

const Test = styled.div`
    background: ${({ background }) => backgrounds[background]};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

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
            <Test background={background}>
                <Blue>
                    <Sidebar />
                    <Topbar />
                    <Wrapper>
                        <Scrollbar>
                            <Switch>
                                <Route path={"/privacy"} key={"privacy"}>
                                    <Privacy />
                                </Route>
                                {routes.map(({ path, Component }, i) => (
                                    <Route path={path} key={i}>
                                        {Component}
                                    </Route>
                                ))}
                                <Redirect to="/" />
                            </Switch>
                        </Scrollbar>
                    </Wrapper>
                </Blue>
            </Test>
        </Router>
    );
}
