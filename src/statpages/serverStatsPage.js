import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "CSS/tankstats.css";
import "CSS/innerpage.css";
const trackingId = process.env.REACT_APP_GA;

export default function ServerStatsPage(props) {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/server-stats");
    }, []);

    return <div></div>;
}
