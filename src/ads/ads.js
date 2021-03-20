import React from "react";
import AdSense from "react-adsense"
const Adsense_Client = process.env.REACT_APP_ADSENSE;

const adslots = {
    player_sidebar_1 : 4142533563,
    player_sidebar_2 : 6120640271,
    main_stats_banner : 7667965161,
    clan_sidebar_1 : 2309387775,
    clan_sidebar_2 : 7625293631,
    moe_sidebar_1 : 4270526072,
    moe_sidebar_2 : 9399208605,
    mastery_sidebar_1 : 2957444407,
    mastery_sidebar_2 : 8086126937,
    tank_stats_sidebar_1 : 3276459868,
    tank_stats_sidebar_2 : 2800450162,
    leaderboards_sidebar_1 : 1644362738,
    leaderboards_sidebar_2 : 7004145403
}

export default function Ads({ slot }) {
    return <>
        <AdSense.Google
            client={Adsense_Client}
            slot={adslots[slot]}
            style={{ display: "block "}}
            format="auto"
            responsive="true"
        />
    </>
};
