// NPM
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// LOCAL
import { TabPanel } from "../tabs/customTabs";
import TopStats from "./topStats";
import TopTable from "./topTable.js";
import AllTankStats from "./allTankStats";
import Charts from "./charts";
import SessionsLogParent from "./sessions/sessionsLogParent";
import HallOfFame from "./hallOfFame";
import Treemap from "./treemap/treemap";
import { NewIcon } from "Components";
import { useURLState } from "Functions/hooks";

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
    {
        label: "MAIN STATS",
        value: "main",
        body: [
            (props) => <TopTable data={props.graphData.overallStats} />,
            (props) => (
                <AllTankStats overall={props.recentStats.overallStats.tankWN8} recents={props.recentStats.recents} />
            ),
        ],
    },
    {
        label: "HALL OF FAME",
        icon: <NewIcon />,
        value: "hall-of-fame",
        body: [
            (props) => (
                <HallOfFame
                    id={props.recentStats.id}
                    server={props.recentStats.server}
                    hofData={props.hofData}
                    hofmainData={props.hofmainData}
                />
            ),
        ],
    },
    {
        label: "SESSIONS",
        value: "sessions",
        body: [(props) => <SessionsLogParent data={props.recentStats.sessions} />],
    },
    {
        label: "INFOGRAPHICS",
        value: "infographics",
        body: [
            (props) => (
                <Charts
                    data={props.graphData}
                    clanData={props.clanHistory}
                    currentClan={props.clanStats}
                    stats={props.stats}
                />
            ),
        ],
    },
    {
        label: "TREEMAP",
        icon: <NewIcon />,
        value: "treemap",
        body: [(props) => <Treemap data={props.recentStats.tree} />],
    },
];

export default function MainTabs(props) {
    const [page, setPage] = useURLState("page", "main");
    return (
        <>
            <TopStats
                username={props.username}
                WGRating={props.WGRating}
                data={props.graphData}
                stats={props.stats}
                clanStats={props.clanStats}
                accountCreationDate={props.accountCreationDate}
                lastPlayedTime={props.lastPlayedTime}
            />
            <CustomTabs
                value={page}
                indicatorColor="primary"
                styles={{ backgroundColor: "rgb(76, 90, 166)" }}
                onChange={(e, val) => setPage(val)}
                aria-label="tabs"
                variant="scrollable"
                scrollButtons="auto"
            >
                {tabs.map(({ label, icon, value }, i) =>
                    // prettier-ignore
                    <CustomTab label={<div>{label} {icon}</div>} value={value} key={i} />
                )}
            </CustomTabs>
            {tabs.map(({ body, value }) => (
                <TabPanel value={page} index={value}>
                    {body.map((Section) => (
                        <div style={{ marginTop: "1rem", minHeight: "300px" }}>
                            <Section {...props} />
                        </div>
                    ))}
                </TabPanel>
            ))}
        </>
    );
}
