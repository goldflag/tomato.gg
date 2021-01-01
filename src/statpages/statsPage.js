import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import { makeStyles } from "@material-ui/core/styles";
import TopStats from "./statsPageComponents/topStats";
// import AdSense from "react-adsense";
import "../css/style.css";
import "../css/innerpage.css";
import serverConv from "../data/serverConv";
import CircularProgress from "@material-ui/core/CircularProgress";
import AllTankStats from "./statsPageComponents/allTankStats";
import GraphCalculator from "../functions/GraphCalculator";
import Charts from "./statsPageComponents/charts";
import SessionsLogParent from "./statsPageComponents/sessions/sessionsLogParent";
import { ThemeContext } from "../style/theme.js";

const APIKey = process.env.REACT_APP_API_KEY;
const backendKey = process.env.REACT_APP_BACKEND_API_KEY;
const trackingId = process.env.REACT_APP_GA;

const useStyles = makeStyles((theme) => ({
    loading: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "40vh",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function StatsPage(props) {
    const windowUrl = window.location.pathname;
    const urlParams = windowUrl.substring(7).split("/");
    const server = serverConv[urlParams[0]];
    const [urlUsername, id] = urlParams[1].split("=");

    const { theme } = React.useContext(ThemeContext);
    const [validID, setValidID] = useState(true);
    // Combines StatsTable and TankTable into single component
    let StatTable = CircularIndeterminate();
    // Maps tank ID to basic information about a vehicle
    const [username, setUserName] = useState(urlUsername);
    const [stats, setStats] = useState([]);
    const [tanksstats, setTanksstats] = useState("");
    const [WGRating, setWGRating] = useState("");
    const [MOEstats, setMOEstats] = useState("");
    const [clanStats, setClanStats] = useState("");
    const [accountCreationDate, setAccountCreationDate] = useState("");
    const [lastPlayedTime, setLastPlayedTime] = useState("");
    const [clanHistory, setClanHistory] = useState("");
    const [recentStats, setRecentStats] = useState("");

    // Runs once when component mounts
    useEffect(() => {
        const searchStats = async () => {
            //Overall Summary Stats
            const url = `https://api.worldoftanks.${server}/wot/account/info/?application_id=${APIKey}&account_id=${id}`;
            //Overall tank stats
            const url2 = `https://api.worldoftanks.${server}/wot/tanks/stats/?application_id=${APIKey}&account_id=${id}&fields=mark_of_mastery%2C+tank_id%2C+all`;
            //MOE Data
            const url3 = `https://api.worldoftanks.${server}/wot/tanks/achievements/?application_id=${APIKey}&account_id=${id}&fields=achievements%2C+tank_id`;
            //Current Clan Data
            const url4 = `https://api.worldoftanks.${server}/wot/clans/accountinfo/?application_id=${APIKey}&account_id=${id}`;
            //Clan history
            const url5 = `https://api.worldoftanks.${server}/wot/clans/memberhistory/?application_id=${APIKey}&account_id=${id}`;
            //Recent stats from our own API
            const url6 = `https://tomatobackend-oswt3.ondigitalocean.app/api/abcd/${server}/${id}`;
            //const url6 = `http://localhost:5000/api/abcd/${server}/${id}`;

            console.log(backendKey);
            try {
                Promise.all([
                    fetch(url),
                    fetch(url2),
                    fetch(url3),
                    fetch(url4),
                    fetch(url5),
                    fetch(url6),
                ])
                    .then(([res1, res2, res3, res4, res5, res6]) =>
                        Promise.all([
                            res1.json(),
                            res2.json(),
                            res3.json(),
                            res4.json(),
                            res5.json(),
                            res6.json(),
                        ])
                    )
                    .then(([data1, data2, data3, data4, data5, data6]) => {
                        setStats(data1.data[id].statistics.all);
                        setTanksstats(data2.data[id]);
                        setUserName(data1.data[id].nickname);
                        setWGRating(data1.data[id].global_rating);
                        setMOEstats(data3.data[id]);
                        setAccountCreationDate(data1.data[id].created_at);
                        setLastPlayedTime(data1.data[id].last_battle_time);
                        setRecentStats(data6);
                        console.log(data6);
                        if (data1.data[id].statistics.all.battles === 0) {
                            setValidID(false);
                        }
                        if (data4.data[id] != null) {
                            setClanStats(data4.data[id]);
                        } else {
                            setClanStats("NO CLAN");
                        }
                        if (data5.data[id].size === 0) {
                            setClanHistory("NO CLAN HISTORY");
                        } else {
                            setClanHistory(data5.data[id]);
                        }
                    });
            } catch (err) {
                console.error(err);
            }
        };

        console.time("Time this");
        // setUserName(username);
        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/stats/${server}`);
        if (id === "FAIL") {
            setValidID(false);
        } else {
            setValidID(true);
            searchStats();
        }
    }, [id, server]);

    function CircularIndeterminate() {
        const classes = useStyles();
        return (
            <div className={classes.loading}>
                <CircularProgress
                    color={theme === "dark" ? "primary" : "secondary"}
                />
            </div>
        );
    }

    if (validID === false) {
        StatTable = (
            <>
                <span style={{ fontSize: "2rem" }}>
                    Player {username} not found
                </span>
                <br />
                <br />
                Make sure the username and region are correct.
            </>
        );
    }

    if (
        WGRating &&
        username &&
        stats &&
        tanksstats &&
        MOEstats &&
        clanStats &&
        clanHistory &&
        accountCreationDate &&
        lastPlayedTime &&
        recentStats &&
        validID === true
    ) {
        const graphData = GraphCalculator(
            recentStats.overallStats.tankWN8,
            stats,
            recentStats.overallStats.overallWN8,
            recentStats.overallStats.avgTier,
            recentStats,
            theme
        );
        console.log(recentStats.recents);
        StatTable = (
            <>
                <div style={{ padding: "1em 0em" }}>
                    <TopStats
                        username={username}
                        WGRating={WGRating}
                        data={graphData}
                        stats={stats}
                        clanStats={clanStats}
                        accountCreationDate={accountCreationDate}
                        lastPlayedTime={lastPlayedTime}
                    />
                </div>
                <div style={{ minHeight: "300px" }}>
                    <SessionsLogParent data={recentStats.sessions} />
                </div>
                <div style={{ minHeight: "300px" }}>
                    <Charts
                        data={graphData}
                        clanData={clanHistory}
                        currentClan={clanStats}
                        stats={stats}
                    />
                </div>
                <div style={{ padding: "1em 0em" }}>
                    <AllTankStats
                        overall={recentStats.overallStats.tankWN8}
                        recents={recentStats.recents}
                    />
                    {/* <AdSense.Google
                          client='pub-1358649580645755'
                          slot='3903354081'
                        /> */}
                </div>
            </>
        );
    }

    return <div className="smallpaper">{StatTable}</div>;
}
