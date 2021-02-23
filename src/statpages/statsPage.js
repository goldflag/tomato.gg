// NPM
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";

// LOCAL
import "../css/style.css";
import "../css/innerpage.css";
import { serverConv } from "../data/conversions";
import GraphCalculator from "../functions/GraphCalculator";
import MainTabs from "./statsPageComponents/mainTabs";
import { Loader } from "../components";

const APIKey = process.env.REACT_APP_API_KEY;
const backendKey = process.env.REACT_APP_BACKEND_API_KEY;
const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

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
            this.searchStats(server, id).then(() => this.setState({ loading: false }));
        } else {
            this.setState({ username });
        }

        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/stats/${server}`);
    }

    componentDidUpdate({ match: prevMatch }) {
        const { match } = this.props;
        const { server, user } = match.params;
        if (server !== prevMatch.params.server || user !== prevMatch.params.user) {
            const [username, id] = user.split("=");
            const validID = id !== "FAIL";
            this.setState({ loading: validID, validID, username });
            if (validID) {
                this.searchStats(server, id).then(() => this.setState({ loading: false }));
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
                    clanHistory: clanHistory.data[id].length ? clanHistory.data[id] : "NO CLAN HISTORY",
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
                <Loader top={20} bottom={50} />
                // <Styles>
                //     <div className="loader">
                //         <img
                //             src={loader}
                //             className="loadingCircle"
                //             alt="loadingCircle"
                //         ></img>
                //     </div>
                // </Styles>
            );
        } else if (validID) {
            statTable = (
                <MainTabs
                    stats={stats}
                    loading={loading}
                    validID={validID}
                    username={username}
                    WGRating={WGRating}
                    clanStats={clanStats}
                    graphData={graphData}
                    clanHistory={clanHistory}
                    recentStats={recentStats}
                    lastPlayedTime={lastPlayedTime}
                    accountCreationDate={accountCreationDate}
                />
            );
        } else {
            statTable = (
                <>
                    <span style={{ fontSize: "2rem" }}>Player {username} not found</span>
                    <br />
                    <br />
                    Make sure the username and region are correct.
                </>
            );
        }

        return <div className="smallpaper">{statTable}</div>;
    }
}

StatsPage = withRouter(StatsPage);
export default StatsPage;
