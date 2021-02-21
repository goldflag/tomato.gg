import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Paper from "@material-ui/core/Paper";
import "./css/tankstats.css";
import "./css/innerpage.css";
import { ThemeContext } from "./context";
const trackingId = process.env.REACT_APP_GA;

export default function About() {
    const { theme } = React.useContext(ThemeContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/about");
    }, []);

    return (
        <div style={{ padding: "2em", paddingTop: "5em" }}>
            <div className="narrowpage">
                <Paper
                    style={{
                        backgroundColor:
                            theme === "dark" ? "rgba(40, 40, 70, 0.5)" : "white",
                        padding: "1rem",
                        color:
                            theme === "dark"
                                ? "rgb(230, 230, 230)"
                                : "rgb(50,50,50)",
                    }}
                >
                    <div>
                        <h1 style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                            About Tomato.gg
                        </h1>
                        <span
                            style={{
                                fontSize: "0.8rem",
                                lineHeight: "1.3rem",
                                color:
                                    theme === "dark"
                                        ? "rgb(150,150,150)"
                                        : "rgb(100,100,100)",
                            }}
                        >
                            UPDATED 5/1/2021
                        </span>{" "}
                        <br />
                        <br />
                        <span
                            style={{ fontSize: "0.9rem", lineHeight: "1.4rem" }}
                        >
                            I created this site to provide an accessible
                            interface to view a huge variety of stats, many of
                            which are only found here. Some stats have taken
                            inspiration from other sites.
                            <br />
                            Tomato.gg doesn't aim to do everything. It will
                            never have server stats as detailed as those on
                            wot-news.com, nor will it have the precise
                            individual battles as are accessible on WN8lab.com.
                            Tomato.gg is being actively developed and is nowhere
                            near feature complete. In the future, I plan to
                            expand the player stats page, expand the tank stats
                            page, implement clan stats, and finish the
                            leaderboards.
                            <br />
                            <br />
                            Tomato.gg fully supports EU and NA player stats. You
                            can still view stats for RU and ASIA gamers, but
                            there are no automatic daily stat updates.
                            <br />
                            <br />
                            Check out Tomato.gg on mobile as well. I have
                            optimized the mobile site for the best user
                            experience while still being nearly 100% feature
                            complete.
                            <br />
                            <br />
                            <a
                                target="blank"
                                href="/stats/NA/Superdude3800=1007264827"
                            >
                                Superdude3800
                            </a>{" "}
                            has helped extensively with the development of
                            Tomato.gg. Thanks so much!
                            <br />
                            <br />
                            Join my{" "}
                            <a target="blank" href="https://discord.gg/qA2bV7K">
                                Discord server
                            </a>{" "}
                            If you would like to provide feedback, suggestions,
                            and bug reports. <br />
                            <br />
                            Thanks for using Tomato.gg! <br />-{" "}
                            <a
                                target="blank"
                                href="/stats/NA/goldflag=1011694618"
                            >
                                Goldflag
                            </a>
                        </span>
                    </div>
                </Paper>
            </div>
        </div>
    );
}
