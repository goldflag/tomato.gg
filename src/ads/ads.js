// NPM
import React from "react";
import AdSense from "react-adsense";

const Adsense_Client = process.env.REACT_APP_ADSENSE;

const adslots = {
    front_page_banner_1: 9868453218,
    front_page_banner_2: 6668203094,
    front_page_sidebar_1: 7396150772,
    front_page_sidebar_2: 6083069107,
    player_sidebar_1: 4142533563,
    player_sidebar_2: 6120640271,
    main_stats_banner: 7667965161,
    clan_sidebar_1: 2309387775,
    clan_sidebar_2: 7625293631,
    moe_sidebar_1: 4270526072,
    moe_sidebar_2: 9399208605,
    mastery_sidebar_1: 2957444407,
    mastery_sidebar_2: 8086126937,
    tank_stats_sidebar_1: 3276459868,
    tank_stats_sidebar_2: 2800450162,
    leaderboards_sidebar_1: 1644362738,
    leaderboards_sidebar_2: 7004145403,
};

const Styles = {
    responsive: { display: "block" },
    "728x90": {
        display: "inline-block",
        width: "728px",
        height: "90px",
    },
    "300x50": {
        display: "inline-block",
        width: "300px",
        height: "50px",
    },
    "160x600": {
        display: "inline-block",
        width: "160px",
        height: "600px",
    },
    "300x250": {
        display: "inline-block",
        width: "300px",
        height: "250px",
    },
    "300x600": {
        display: "inline-block",
        width: "300px",
        height: "600px",
    },
    "970x250": {
        display: "inline-block",
        width: "970px",
        height: "250px",
    },
};

export default ({ slot, styles }) => (
    <AdSense.Google
        client={Adsense_Client}
        slot={`${adslots[slot]}`}
        style={styles ? Styles[styles] : Styles.responsive}
        format=""
    />
);
