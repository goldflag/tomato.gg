// NPM
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";
import LocalizedStrings from "react-localization";

// LOCAL
import { serverConv } from "Data/conversions";
import GraphCalculator from "Functions/GraphCalculator";
import MainTabs from "./statsPageComponents/mainTabs";
import { Loader } from "Components";
import worrydetective from "Assets/staticfrogs/worrydetective.png";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const Container = styled.div`
    padding: 2rem;
    padding-top: 1rem;
    max-width: 1800px;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        padding: 0.4rem;
        padding-top: 0rem;
    }
`;

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        notFound: "Player {0} not found",
        correct: "Make sure the username and region are correct.",
    },
    cs: {
        notFound: "Hráč {0} nebyl nalezen",
        correct: "Ujistěte se, že přezdívka i region serveru jsou správně.",
    },
    de: {
        notFound: "Spieler {0} nicht gefunden",
        correct: "Stelle sicher, dass der Name und die Region korrekt sind.",
    },
    es: {
        notFound: "Jugador {0} no encontrado",
        correct: "Por favor asegúrese de que el nombre de usuario y la región sean correctos",
    },
    fr: {
        notFound: "Joueur {0} introuvable",
        correct: "Vérifiez que le pseudo et la région sont corrects.",
    },
    tr: {
        notFound: "{0} oyuncusu bulunamadı",
        correct: "Oyuncu adı ve bölgenin doğru olduğuna emin olunuz.",
    },
    pl: {
        notFound: "Nie znaleziono gracza {0}",
        correct: "Sprawdź, czy nick i region są poprawne",
    },
    ru: {
        notFound: "Игрок {0} не найден",
        correct: "Убедитесь, что имя игрока и регион указаны правильно.",
    },
    zh: {
        notFound: "查無玩家 {0}",
        correct: "確認為正確的使用者及地區。",
    },
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class StatsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: <Loader frog={true} top={20} bottom={20} />,
            loadedStats: false,
            loadedOther: false,
            validID: false,
            battles: 0,
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
            hofmainData: null,
            hofData: null,
            server: "",
            stage: 0
        };
    }

    componentDidMount() {
        const { match } = this.props;
        const { server, user } = match.params;
        const [username, id] = user.split("=");
        if (id !== "FAIL") {
            this.searchStats(server, id).then((res) => {
                const stage = this.state.loadedStats ? 3 : res ? 0 : 1;
                this.setState({ loadedOther: true, loadedStats: this.state.loadedStats || !res, stage: stage});
            });   
            this.searchRealTime(server, id).then(() => {
                this.setState({ loadedStats: true, stage: 2})
                this.setStage3();
            });
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
            this.setState({ validID, username });
            if (validID) {
                this.searchStats(server, id).then((res) => {
                    const stage = this.state.loadedStats ? 3 : res ? 0 : 1;
                    this.setState({ loadedOther: true, loadedStats: this.state.loadedStats || !res, stage: stage});
                });                
                this.searchRealTime(server, id).then(() => {
                    this.setState({ loadedStats: true, stage: 2})
                    this.setStage3();
                });
            }
        }
    }

    async setStage3() {
        await sleep(2000);
        this.setState({ stage: 3});
    }

    searchStats = async (server, id) => {
        this.setState({ loadedStats: false });
        server = serverConv[server];
        const urls = [
            `${backend}/api/player/${server}/${id}?cache=true`, //Recent stats from our own API with cache
            `${backend}/api/hofmain/${server}/${id}`,
            `${backend}/api/hof/${server}/${id}`,
        ];

        return Promise.all(urls.map((url) => fetch(url)))
            .then((resps) => Promise.all(resps.map((r) => r.json())))
            .then(([ player, hofmainData, hofData ]) => {
                const { summary, clanData, clanHistory } = player;
                const newState = {
                    summary,
                    username: summary.nickname,
                    WGRating: summary.global_rating,
                    battles: summary.statistics.all.battles,
                    accountCreationDate: summary.created_at,
                    lastPlayedTime: summary.last_battle_time,
                    validID: summary.statistics.all.battles !== 0,
                    clanStats: clanData || "NO CLAN",
                    clanHistory: clanHistory.length ? clanHistory : "NO CLAN HISTORY",
                    hofmainData,
                    hofData,
                    server
                };
                this.setState(newState);
                if (player === null) {
                    return true;
                }
                else {
                    const graphData = GraphCalculator(
                        summary.statistics.all,
                        player.overallStats.overallWN8,
                        player.overallStats.avgTier,
                        player
                    );
                    this.setState({
                        recentStats: player,
                        graphData,
                    });
                    return false;
                }
            })
            .catch(console.error);
    };

    searchRealTime = async (server, id) => {
        this.setState({ loadedOther: false, loadedStats: false });
        server = serverConv[server];
        return fetch(`${backend}/api/player/${server}/${id}?cache=false`)
            .then((r) => r.json())
            .then((player) => {
                const { summary } = player;
                const graphData = GraphCalculator(
                    summary.statistics.all,
                    player.overallStats.overallWN8,
                    player.overallStats.avgTier,
                    player
                );
                const newState = {
                    recentStats: player,
                    validID: summary.battles !== 0,
                    graphData,
                    server
                };
                this.setState(newState);
                return true;
            })
            .catch(console.error);
    };

    render() {
        const { loadedOther, loadedStats, validID, username } = this.state;
        let statTable;

        if (!loadedOther || !loadedStats) {
            statTable = this.state.loader;
        } else if (validID) {
            statTable = <MainTabs {...this.state} />;
        } 
        else {
            statTable = (
                <>
                    <span style={{ fontSize: "2rem"}}>
                        {formatString(strings.notFound, username)} <img src={worrydetective} style={{height: "2.5rem", verticalAlign: "middle"}} alt="notfound"/>
                    </span>
                    <br />
                    <br />
                    {strings.correct}
                </>
            ); 
        }

        return <Container>{statTable}</Container>;
    }
}

StatsPage = withRouter(StatsPage);
export default StatsPage;
