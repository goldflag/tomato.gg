import React, { useEffect } from "react";
import ReactGA from "react-ga";
import Paper from "@material-ui/core/Paper";
import "./css/tankstats.css";
import "./css/innerpage.css";
import { ThemeContext } from "./style/theme.js";
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
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
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
                            UPDATED 8/26/2020
                        </span>{" "}
                        <br />
                        <br />
                        <span
                            style={{ fontSize: "0.9rem", lineHeight: "1.4rem" }}
                        >
                            I created this site to provide an accessible
                            interface to view a huge variety of stats, many of
                            which are only found here. Some stats have taken
                            inspiration from the other sites.
                            <br />
                            Some of the unique features offered on this site:
                            <ul>
                                <li>
                                    Period breakdown for recent stats - inspired
                                    by Wotlabs.net
                                </li>
                                <li>
                                    Player MoE data - inspired by the Mastery
                                    Badge breakdown on Wotstats.org
                                </li>
                                <li>
                                    Player WN8 heatmap - inspired by WN8lab.com
                                    and Noobmeter.net
                                </li>
                                <li>
                                    Ultra detailed server stats - inspired by
                                    vbaddict.net (RIP)
                                </li>
                                <li>
                                    Tank WR and WN8 curves - inspired by WR
                                    curves on wot-news.com
                                </li>
                                <li>Per-tank DPG and WN8 percentiles</li>
                            </ul>
                            Tomato.gg doesn't aim to do everything. It will
                            never have server stats as detailed as those on
                            wot-news.com, nor will it have the percise
                            individual battle accessible on WN8lab.com.
                            Tomato.gg is still in the early stages of
                            development and is nowhere near feature complete. In
                            the near future, I plan to expand the player stats
                            page, expand the tank stats page, implement clan
                            stats, and add tank stats for the EU, ASIA, and RU
                            servers.
                            <br />
                            <br />
                            You can Tomato.gg on your phone, but this is mainly
                            a desktop app. I will not leave out statistics on
                            the mobile version even if it makes the site looks
                            worse on mobile. <br />
                            <br />
                            As of now, I am the sole developer of Tomato.gg. For
                            those of you wondering about the technical details
                            of this site, I am using React, Node (may switch in
                            the future), PostgreSQL. It currently, costs me
                            around $50-$100 a month to host, but these costs are
                            certain to rise when Tomato.gg increases in
                            popularity. Join my{" "}
                            <a target="blank" href="https://discord.gg/qA2bV7K">
                                Discord server
                            </a>{" "}
                            If you would like to provide feedback, suggestions,
                            and bug reports. <br />
                            <br />
                            Thanks for using Tomato.gg! <br />-{" "}
                            <a
                                target="blank"
                                href="https://tomato.gg/stats/NA/goldflag=1011694618"
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
