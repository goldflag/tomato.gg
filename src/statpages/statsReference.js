import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import "../css/tankstats.css";
import "../css/innerpage.css";
import PercentileGraph from "./tankStatsPageComponents/percentileGraph";
import CurveExamples from "./statsReferenceComponents/curveExamples";
import InDepthExamples from "./statsReferenceComponents/inDepthExamples";
import DPGPercentiles from "../data/DPGPercentiles.json";
import WN8Percentiles from "../data/WN8Percentiles.json";
import { ThemeContext } from "../style/theme.js";
const trackingId = process.env.REACT_APP_GA;

export default function StatsReference(props) {
    const { theme } = React.useContext(ThemeContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/stats-reference");
    }, []);

    return (
        <div style={{ padding: "2em", paddingTop: "5em" }}>
            <div className="narrowpage">
                <Paper
                    style={{
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
                    }}
                >
                    <div
                        style={{
                            padding: "1rem",
                            color:
                                theme === "dark"
                                    ? "rgb(220,220,220)"
                                    : "rgb(50,50,50)",
                        }}
                    >
                        <h1 style={{ fontWeight: "500", lineHeight: "1rem" }}>
                            Stats Reference
                        </h1>
                        <span
                            style={{
                                fontSize: "0.8rem",
                                lineHeight: "1.3rem",
                                color:
                                    theme === "dark"
                                        ? "rgb(150,150,150)"
                                        : "rgb(100, 100, 100)",
                            }}
                        >
                            UPDATED 8/27/2020
                        </span>{" "}
                        <br />
                        <span
                            style={{ fontSize: "0.9rem", lineHeight: "1.4rem" }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.4rem",
                                    fontWeight: "500",
                                }}
                            >
                                Understanding Tank Curves
                            </h2>
                            You can find accessible and easy to use tank curves
                            in <Link to="/tanks">Tank Stats</Link> and more
                            detailed tank curves at{" "}
                            <a
                                target="blank"
                                href="https://https://wot-news.com/stat/server/us/norm/en"
                            >
                                Wot-news.com
                            </a>
                            .<br />
                            Tank curves compare an player's overall account
                            performance to their performance on an individual
                            tank and is probably{" "}
                            <strong>
                                the most accurate tool in determining the
                                vehicle's position in the metagane
                            </strong>
                            .<br />
                            <br />
                            Tank curves are the most accurate in the range of
                            the typical player's stats, generally from 45% to
                            55%. Less than 10% of the playerbase has a winrate
                            of over 54% no matter how you measure it. <br />
                            Curves above 60% or 2700 WN8 have very few
                            datapoints and are should not be taken seriously as
                            they are extremely volatile. <br />
                            <br />
                            Here are some example tank curves that display
                            various attributes:
                            <div style={{ margin: "1rem 0 1rem 0" }}>
                                <CurveExamples />
                                <h2
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: "500",
                                    }}
                                >
                                    In-depth Examples
                                </h2>
                                <InDepthExamples />
                            </div>
                            <h2
                                style={{
                                    fontSize: "1.4rem",
                                    fontWeight: "500",
                                }}
                            >
                                Understanding Percentile Graphs | Bourrasque
                                Analysis
                            </h2>
                            <div style={{ margin: "1rem 0 1rem 1rem" }}>
                                <div className="grid">
                                    <PercentileGraph
                                        data={DPGPercentiles["Bourrasque"]}
                                        type="Average Damage"
                                        smallType="DPG"
                                        color="rgb(84, 140, 196)"
                                    />
                                    <PercentileGraph
                                        data={WN8Percentiles["Bourrasque"]}
                                        type="WN8"
                                        smallType="WN8"
                                        color="rgb(212, 38, 186)"
                                    />
                                </div>
                                Percentile graphs have significantly less
                                variation than tank curves, and the majority of
                                percentile graphs have the same shape. <br />
                                For the Bourrasque, we can see the 50th
                                percentile (median) Bourrasque owner has about
                                1500 DPG. 50% of Bourrasque drivers do better
                                and 50% do worse.
                                <br />
                                <br />
                                Percentile graphs are great for seeing how well
                                you perform in a vehicle comapred to the WoT
                                playerbase.
                                <br />
                                <br />
                                Players are only added into the database that
                                the percentile graphs are calculated from if
                                they reach a minimum game count in the vehicle
                                (75 games for tier 8s in this example).
                            </div>
                        </span>
                    </div>
                </Paper>
            </div>
        </div>
    );
}
