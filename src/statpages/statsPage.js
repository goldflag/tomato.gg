import React, { Component } from "react";
import ReactGA from "react-ga";
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
import { ThemeContext } from "../context";
import { withRouter } from "react-router-dom";

const APIKey = process.env.REACT_APP_API_KEY;
const backendKey = process.env.REACT_APP_BACKEND_API_KEY;
const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const styles = () => ({
    loading: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "40vh",
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: "center",
    },
});

class StatsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            validID: false,
            stats: [],
            username: "",
            WGRating: "",
            clanStats: "",
            graphData: {},
            MOERating: "",
            tankstats: "",
            clanHistory: "",
            recentStats: "",
            lastPlayedTime: "",
            accountCreationDate: "",
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const { server, user } = match.params;
        const [username, id] = user.split("=");
        if (id !== "FAIL") {
            this.searchStats(server, id).then(() =>
                this.setState({ loading: false })
            );
        } else {
            this.setState({ username });
        }

        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/stats/${server}`);
    }

    componentDidUpdate({ match: prevMatch }) {
        const { match } = this.props;
        const { server, user } = match.params;
        if (
            server !== prevMatch.params.server ||
            user !== prevMatch.params.user
        ) {
            const [username, id] = user.split("=");
            const validID = id !== "FAIL";
            this.setState({ loading: validID, validID, username });
            if (validID) {
                this.searchStats(server, id).then(() =>
                    this.setState({ loading: false })
                );
            }
        }
    }

    searchStats = async (server, id) => {
        this.setState({ loading: true });
        server = serverConv[server];
        const domain = `https://api.worldoftanks.${server}`;
        const commonArgs = `application_id=${APIKey}&account_id=${id}`;
        const urls = [
            `${domain}/wot/account/info/?${commonArgs}`, //Overall Summary Stats
            `${domain}/wot/tanks/stats/?${commonArgs}&fields=mark_of_mastery%2C+tank_id%2C+all`, //Overall tank stats TODO: not used?
            `${domain}/wot/tanks/achievements/?${commonArgs}&fields=achievements%2C+tank_id`, //MOE Data TODO: not used?
            `${domain}/wot/clans/accountinfo/?${commonArgs}`, //Current Clan Data
            `${domain}/wot/clans/memberhistory/?${commonArgs}`, //Clan history
            `${backend}/api/${backendKey}/${server}/${id}`, //Recent stats from our own API
        ];

        return Promise.all(urls.map((url) => fetch(url)))
            .then((resps) => Promise.all(resps.map((r) => r.json())))
            .then(([overall, tank, MOE, clanStats, clanHistory, recent]) => {
                const stats = overall.data[id].statistics.all;
                const graphData = GraphCalculator(
                    recent.overallStats.tankWN8,
                    stats,
                    recent.overallStats.overallWN8,
                    recent.overallStats.avgTier,
                    recent,
                    this.context.theme
                );
                const newState = {
                    stats,
                    tanksstats: tank.data[id],
                    username: overall.data[id].nickname,
                    WGRating: overall.data[id].global_rating,
                    MOEstats: MOE.data[id],
                    accountCreationDate: overall.data[id].created_at,
                    lastPlayedTime: overall.data[id].last_battle_time,
                    recentStats: recent,
                    validID: stats.battles !== 0,
                    clanStats: clanStats.data[id] || "NO CLAN",
                    clanHistory: clanHistory.data[id].length
                        ? clanHistory.data[id]
                        : "NO CLAN HISTORY",
                    graphData,
                };
                this.setState(newState);
            })
            .catch(console.error);
    };

    render() {
        const {
            stats,
            loading,
            validID,
            // MOEstats,
            username,
            WGRating,
            clanStats,
            graphData,
            // tanksstats,
            clanHistory,
            recentStats,
            lastPlayedTime,
            accountCreationDate,
        } = this.state;

        let statTable;

        if (loading) {
            statTable = (
                <div style={styles().loading}>
                    <CircularProgress
                        color={
                            this.context.theme === "dark"
                                ? "primary"
                                : "secondary"
                        }
                    />
                </div>
            );
        } else if (validID) {
            statTable = (
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
                            client='ca-pub-1358649580645755'
                            slot='3903354081'
                        /> */}
                    </div>
                </>
            );
        } else {
            statTable = (
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

        return <div className="smallpaper">{statTable}</div>;
    }
}

StatsPage.contextType = ThemeContext;
StatsPage = withRouter(StatsPage);
export default StatsPage;
