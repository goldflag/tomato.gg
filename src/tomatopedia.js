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
import "CSS/body.css";

const trackingId = process.env.REACT_APP_GA;

const Mainbody = Styled.div`
    color: rgb(234, 238, 248);
`;

const Wrapper = Styled.div`
    min-height: 100vh;
`;

// const Blue = Styled(Mainbody)`
//     background: url(../assets/Ocean.svg) no-repeat center center fixed;
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover;
// `;

// const Black = Styled(Mainbody)`
//     background-color: rgb(30, 30, 50);
// `;

export default function Tomatopedia() {

    const { background } = useContext(BackgroundContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/");
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Mainbody className={background === "blue" ? "blue" : "black"}>
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
            </Mainbody>
        </Router>
    );
}
