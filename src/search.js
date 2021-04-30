// NPM
import React, { useState, useContext, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Button } from "@material-ui/core";

import { Icon } from 'react-icons-kit'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'

// LOCAL
import SearchBar from "Material/searchBar";
import Accordion from "Material/frontpageAccordtion";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { serverConv } from "Data/conversions";
import Ad from "Ads/ads";
import { AdsContainer } from "Ads/adsContainer";
import Colors from "Styling/colors";
import { TabPanel, CustomTabs, CustomTab } from "Components/customTabs";
import { Loader } from "Components";
import TankTable from "./searchpage/tanktable";
import PlayerTable from "./searchpage/playertable";
import LocalizedStrings from "Functions/localizedStrings";

// ASSETS
import TomatoLogo from "Assets/tomato.png";
import Tanksgg from "Assets/other sites/tanks.gg.png";
import Aslain from "Assets/other sites/aslain.png";

const APIKey = process.env.REACT_APP_API_KEY;
const backend = process.env.REACT_APP_BACKEND;

const Page = styled.div`
    margin: 0 1rem;
`;

const Desktop = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
`;
const Adcontent = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledAboutSection = styled.div`
    margin: 0rem;
    max-width: 800px;
    text-align: center;
    h1 {
        font-size: 1.3rem;
        font-weight: 500;
    }
`;

const CT = styled.span`
    color: ${({ color }) => color};
`;

const GetBot = styled(Button)`
    color: rgb(220, 220, 220) !important;
    font-size: 0.9rem !important;
    font-family: Roboto Mono !important;
    margin: 1.2rem 0rem !important;
    padding: 0.4rem 0.8rem !important;
    border: 2px solid rgba(50, 60, 110, 0.9) !important;
    border-radius: 100px !important;
    background-color: rgba(50, 60, 110, 0.9) !important;
    :hover {
        border: 2px solid ${Colors.purple} !important;
    }
`;

const Minitables = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const OutboundLinks = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const BottomIndicator = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: color 0.3s;
    :hover {
        color: hsl(290, 91%, 49%);
        cursor: pointer;
        text-shadow: 0px 0px hsl(342, 91%, 49%);
    }
`;

const FullPage = styled.div`
    min-height: calc(100vh - 4rem);
    padding-top: calc(10vh);
`;

const Text = styled.div`
    margin: 1rem;
    min-width: 400px;
    max-width: 80%;
    color: rgb(230, 230, 230);
    h1,
    h2 {
        color: rgb(255, 255, 255);
    }
`;


const { formatString, ...strings } = LocalizedStrings({
    en: {
        sentence: `THE MOST {advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards}, 
        AND {clanStats} {break} ALL IN ONE PLACE`,
        advanced: "ADVANCED",
        playerStats: "PLAYER STATS",
        leaderboards: "LEADERBOARDS",
        clanStats: "CLAN STATS",
    },
    cs: {
        sentence: `NEJVÍCE {advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards}, 
        A {clanStats} {break} VŠECHNY NA JEDNOM MÍSTĚ`,
        advanced: "VYVINUTÉ",
        playerStats: "HRÁČSKÉ STATISTIKY",
        leaderboards: "ŽEBŘÍČKY",
        clanStats: "KLANOVÉ STATISTIKY",
    },
    de: {
        sentence: `DIE {advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards},
        UND {clanStats} {break} ALLES AN EINEM ORT`,
        advanced: "FORTSCHRITTLICHSTEN",
        playerStats: "SPIELERSTATISTIKEN",
        leaderboards: "BESTENLISTEN",
        clanStats: "CLANSTATISTIKEN",
    },
    es: {
        sentence: `LAS MÁS {advanced} {break} {playerStats}, {leaderboards}, 
        Y {clanStats} {break} DE WORLD OF TANKS, EN UN SOLO SITIO`,
        advanced: "COMPLETAS",
        playerStats: "ESTADÍSTICAS DE JUGADOR",
        leaderboards: "CLASIFICACIONES",
        clanStats: "ESTADÍSTICAS DE CLAN",
    },
    fr: {
        sentence: `{playerStats}, {leaderboards}, ET {clanStats} DE WORLD OF TANKS {break} LES PLUS {advanced},    
        {break} TOUS AU MÊME ENDROIT`,
        advanced: "AVANCÉS",
        playerStats: "LES STATS DE JOUEURS INDIVIDUELS",
        leaderboards: "LES CLASSEMENTS DES MEILLEURS JOUEURS",
        clanStats: "LES STATS DE CLAN",
    },
    hr: {
        sentence: `{advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards}, 
        I {clanStats} {break} SVE NA JEDNOM MJESTU`,
        advanced: "NAJNAPREDNIJI",
        playerStats: "STATISTIKE IGRAČA",
        leaderboards: "LJESTVICA",
        clanStats: "STATISTIKE KLANOVA",
    },
    nl: {
        sentence: `DE MEEST {advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards}, 
        en {clanStats} {break} allemaal op één plaats`,
        advanced: "geavanceerde",
        playerStats: "speler statistieken",
        leaderboards: "scoreborden",
        clanStats: "clan statistieken",
    },
    pl: {
        sentence: `NAJBARDZIEJ {advanced} {break} {playerStats}, {leaderboards} 
        I {clanStats} {break} DLA WORLD OF TANKS, WSZYSTKIE W JEDNYM MIEJSCU`, // optional {break} after 'TANKS,'
        advanced: "ZAAWANSOWANE",
        playerStats: "STATY GRACZY",
        leaderboards: "RANKINGI",
        clanStats: "STATY KLANÓW",
    },
    tr: {
        sentence: `EN {advanced} WORLD OF TANKS {break} {playerStats}, {leaderboards} 
        VE {clanStats} {break} HEPSİ BİR YERDE`,
        advanced: "GELİŞMİŞ",
        playerStats: "OYUNCU İSTATİSTİKLERİ",
        leaderboards: "LİDER TABLOLARI",
        clanStats: "KLAN İSTATİSTİKLERİ",
    },
    zh: {
        sentence: `{advanced} 戰車世界資料庫 {break} 集 {playerStats}, {leaderboards}, {clanStats} 於一身`,
        advanced: "最新進的",
        playerStats: "玩家",
        leaderboards: "排行榜",
        clanStats: "公會數據",
    },
});

const AboutSection = () => {
    const h1 = formatString(strings.sentence, {
        advanced: <CT color={Colors.red}>{strings.advanced}</CT>,
        playerStats: <CT color={Colors.purple}>{strings.playerStats}</CT>,
        leaderboards: <CT color={Colors.purple}>{strings.leaderboards}</CT>,
        clanStats: <CT color={Colors.purple}>{strings.clanStats}</CT>,
        break: <br />,
    });
    return (
        <StyledAboutSection>
            <MediaQuery minWidth={1000}>
                <StyledAboutSection>
                    <h1>{h1}</h1>
                </StyledAboutSection>
            </MediaQuery>
            <MediaQuery maxWidth={999}>
                <StyledAboutSection>
                    <h1 style={{ fontSize: "1rem" }}>{h1}</h1>
                </StyledAboutSection>
            </MediaQuery>
        </StyledAboutSection>
    );
};

export default withRouter(function Search(props) {
    const { server, setServer } = useContext(ServerContext);
    const { mode, setMode } = useContext(SearchmodeContext);

    const { addToHistory } = useContext(SearchHistoryContext);
    const [name, setName] = useState("");

    const [value, setValue] = useState(0);
    const handleChange = (_, newValue) => setValue(newValue);

    const [tankdata, setTankdata] = useState("");
    const [playerdata, setPlayerdata] = useState("");

    const El = useRef(null);

    function fetchStuff() {
        const urls = [`${backend}/api/recenttanks/${server}/7`, `${backend}/api/leaderboard/${server}/wn8/7/8/0`];
        Promise.all(urls.map((url) => fetch(url)))
            .then((resps) => Promise.all(resps.map((r) => r.json())))
            .then(([tank, player]) => {
                setTankdata(tank);
                player.body.forEach((player) => {
                    player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
                });
                setPlayerdata(player.body);
            });
    }

    useEffect(() => {
        fetchStuff();
        setTimeout(() => {
            try {
                window.reloadAdSlots();
            }
            catch {
                console.log("no ads");
            }
        }, 0);
    }, [server]);

    const searchId = async (e) => {
        e.preventDefault();
        const playerUrl = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;
        const clanUrl = `https://api.worldoftanks.${server}/wot/clans/list/?application_id=${APIKey}&search=${name}`;

        if (mode === "player") {
            fetch(playerUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].account_id))
                .then((playerID) => {
                    if (playerID !== "FAIL") {
                        addToHistory(name, playerID, server, false);
                    }
                    props.history.push(`/stats/${serverConv[server]}/${name}=${playerID}`);
                })
                .catch(console.error);
        } else {
            fetch(clanUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].clan_id))
                .then((clanID) => {
                    if (clanID !== "FAIL") {
                        addToHistory(name, clanID, server, false);
                    }
                    props.history.push(`/clan-stats/${serverConv[server]}/${name.toUpperCase()}=${clanID}`);
                })
                .catch(console.error);
        }
    };

    let tankTable = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />;
    if (tankdata) {
        tankTable = <TankTable data={tankdata} />;
    }
    let playerTable = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />;
    if (playerdata) {
        playerTable = <PlayerTable data={playerdata} />;
    }

    const bottomContent = (
        <BottomIndicator 
            onClick={() => {
                El.current.scrollIntoView({ block: 'start',  behavior: 'smooth' });
            }}
            
        >
            More Info
            <Icon size={32} icon={chevronDown} />
        </BottomIndicator>
        
    );

    const bottom = (
        <>
            {/* <Minitables>
                <div style={{ margin: "1rem" }}>
                    <CustomTabs value={value} onChange={handleChange} aria-label="7 day tank stats">
                        <CustomTab label={`1 WEEK TANK STATS`} />
                    </CustomTabs>
                    <TabPanel value={value} index={0}>
                        <div
                            style={{
                                color: "rgb(220, 220, 220)",
                                width: "600px",
                            }}
                        >
                            {tankTable}
                        </div>
                    </TabPanel>
                </div>
                <div style={{ margin: "1rem" }}>
                    <CustomTabs value={value} onChange={handleChange} aria-label="7 day tank stats">
                        <CustomTab label={`1 WEEK PLAYER STATS`} />
                    </CustomTabs>
                    <TabPanel value={value} index={0}>
                        <div
                            style={{
                                color: "rgb(220, 220, 220)",
                                width: "600px",
                            }}
                        >
                            {playerTable}
                        </div>
                    </TabPanel>
                </div>
            </Minitables> */}
            <Text>
                <Accordion/>
            </Text>
        </>
    );

    const mainContent = (
        <Center>
            <Helmet>
                <title>Tomato.gg</title>
            </Helmet>
            <TopSection>
                <img
                    src={TomatoLogo}
                    alt="logo"
                    style={{
                        width: "70%",
                        marginTop: "2rem",
                    }}
                />
                <AboutSection />
                <form style={{ width: "100%" }} onSubmit={searchId}>
                    <SearchBar
                        name={name}
                        setName={setName}
                        setServer={setServer}
                        server={server}
                        setMode={setMode}
                        mode={mode}
                    />
                </form>
            </TopSection>
            <MediaQuery minWidth={1000}>
                <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img
                            src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"}
                            style={{ width: "30px" }}
                            alt="discordlogo"
                        />{" "}
                        &nbsp; Join Our Server
                    </GetBot>
                </a>

                <div id="nn_lb1"></div>

                <Ad slot={"front_page_banner_2"} styles={"728x90"} />

            </MediaQuery>
            <MediaQuery maxWidth={999}>
                <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img
                            src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"}
                            style={{ width: "30px" }}
                            alt="discordlogo"
                        />{" "}
                        &nbsp; Join Our Server
                    </GetBot>
                </a>
                <Ad slot={"front_page_banner_2"} styles={"300x50"} />
            </MediaQuery>
            <MediaQuery minWidth={1000}>
                <Ad slot={"front_page_banner_1"} styles={"728x90"} />
            </MediaQuery>
            <MediaQuery maxWidth={999}>
                <Ad slot={"front_page_banner_1"} styles={"300x50"} />
            </MediaQuery>
            <OutboundLinks>
                <a
                    href="https://aslain.com/index.php?/topic/13-download-%E2%98%85-world-of-tanks-%E2%98%85-modpack/"
                    target="_blank"
                >
                    <img style={{ maxHeight: "55px", margin: "1rem" }} src={Aslain} alt="aslain.com" />
                </a>
                <a href="https://tanks.gg/" target="_blank">
                    <img style={{ maxHeight: "50px", margin: "1rem" }} src={Tanksgg} alt="tanks.gg" />
                </a>
                <a href="https://thedailybounce.net/" target="_blank">
                    <img
                        style={{ maxHeight: "60px", margin: "1rem" }}
                        src={
                            "https://i2.wp.com/thedailybounce.net/wp-content/uploads/2019/01/cropped-cropped-TDB-Logo-2019-2.png?fit=700%2C325&ssl=1"
                        }
                        alt="thedailybounce.net"
                    />
                </a>
                <a href="https://thearmoredpatrol.com/" target="_blank">
                    <img
                        style={{ maxHeight: "25px", margin: "1rem" }}
                        src={
                            "https://i2.wp.com/thearmoredpatrol.com/wp-content/uploads/2020/01/cropped-logotap2018-1-1.png?w=768&ssl=1"
                        }
                        alt="thearmoredpatrol.com"
                    />
                </a>
            </OutboundLinks>
        </Center>
    );

    return (
        <Page>
            <MediaQuery minWidth={1200}>
                <Desktop>
                    <div>
                    <FullPage>
                        {mainContent}
                    </FullPage>
                    <Center>
                        {bottomContent}
                    </Center>
                    <Center ref={El}>
                        {bottom}
                    </Center>
                    </div>
                    <Adcontent>
                        <Ad slot={"front_page_sidebar_1"} styles={"300x250"} />
                        <Ad slot={"front_page_sidebar_2"} styles={"300x600"} />
                    </Adcontent>
                </Desktop>
            </MediaQuery>
            <MediaQuery maxWidth={1199}>{mainContent}</MediaQuery>  
        </Page>
    );
});