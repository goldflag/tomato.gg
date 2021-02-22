import React, { useState, useContext } from "react";
import styled from "styled-components";

import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "../tabs/customTabs";
import TopStats from "./topStats";
import TopTable from "./topTable.js";
import AllTankStats from "./allTankStats";
import Charts from "./charts";
import SessionsLogParent from "./sessions/sessionsLogParent";
import HallOfFame from "./hallOfFame";
import Treemap from "./treemap/treemap";
import { NewIcon } from "../../components";
import { useURLState } from "../../functions/hooks";

const CustomTabs = withStyles({
    root: {
        elevation: 10,
        borderBottom: "1px solid rgb(200, 200, 200)",
    },
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(200, 200, 200)",
    },
})(Tabs);

const CustomTab = withStyles((t) => ({
    root: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: "0.9rem",
        marginRight: t.spacing(4),
        fontFamily: "Segoe UI, Futura",
        color: "rgb(240, 240, 240)",
        "&:hover": {
            color: "rgb(142, 147, 245)",
            opacity: 1,
        },
        "&$selected": {
            color: "rgb(191, 185, 250)",
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const tabs = [
    { label: "MAIN STATS", value: "main" },
    { label: "INFOGRAPHICS", value: "infographics" },
    { label: "SESSIONS", value: "sessions" },
    {
        label: (
            <div>
                TREEMAP <NewIcon />
            </div>
        ),
        value: "treemap",
    },
    {
        label: (
            <div>
                HALL OF FAME <NewIcon />
            </div>
        ),
        value: "hall-of-fame",
    },
];

export default function MainTabs(props) {
    const [page, setPage] = useURLState("page", "main");
    const [hofData, setHofData] = useState(null);
    const [hofmainData, setHofmainData] = useState(null);

    return (
        <>
            <div style={{ padding: "1em 0em 0.5em 0em" }}>
                <TopStats
                    username={props.username}
                    WGRating={props.WGRating}
                    data={props.graphData}
                    stats={props.stats}
                    clanStats={props.clanStats}
                    accountCreationDate={props.accountCreationDate}
                    lastPlayedTime={props.lastPlayedTime}
                />
            </div>
            <CustomTabs
                value={page}
                indicatorColor="primary"
                styles={{ backgroundColor: "rgb(76, 90, 166)" }}
                onChange={(e, val) => setPage(val)}
                aria-label="tabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                {tabs.map(({ label, value }) => (
                    <CustomTab label={label} value={value} />
                ))}
            </CustomTabs>
            <TabPanel value={page} index={"main"}>
                <div style={{ margin: "1rem 0" }}>
                    <TopTable data={props.graphData.overallStats} />
                </div>
                <div style={{ padding: "0rem" }}>
                    <AllTankStats
                        overall={props.recentStats.overallStats.tankWN8}
                        recents={props.recentStats.recents}
                    />
                </div>
            </TabPanel>
            <TabPanel value={page} index={"infographics"}>
                <div style={{ marginTop: "1rem", minHeight: "300px" }}>
                    <Charts
                        data={props.graphData}
                        clanData={props.clanHistory}
                        currentClan={props.clanStats}
                        stats={props.stats}
                    />
                </div>
            </TabPanel>
            <TabPanel value={page} index={"sessions"}>
                <div style={{ marginTop: "1rem", minHeight: "300px" }}>
                    <SessionsLogParent data={props.recentStats.sessions} />
                </div>
            </TabPanel>
            <TabPanel value={page} index={"treemap"}>
                <div style={{ marginTop: "1rem", minHeight: "300px" }}>
                    <Treemap data={props.recentStats.tree} />
                </div>
            </TabPanel>
            <TabPanel value={page} index={"hall-of-fame"}>
                <div style={{ marginTop: "1rem", minHeight: "300px" }}>
                    <HallOfFame
                        id={props.recentStats.id}
                        server={props.recentStats.server}
                        hofData={hofData}
                        setHofData={setHofData}
                        hofmainData={hofmainData}
                        setHofmainData={setHofmainData}
                    />
                </div>
            </TabPanel>
        </>
    );
}
