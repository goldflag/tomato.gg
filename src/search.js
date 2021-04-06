// NPM
import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import { Button } from "@material-ui/core";

// LOCAL
import "CSS/search.css";
import SearchBar from "Material/searchBar";
import TomatoLogo from "Assets/tomato.png";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { serverConv } from "Data/conversions";
import Ad from "Ads/ads";
import { AdsContainer } from "Ads/adsContainer";
import Colors from "Styling/colors";
import LocalizedStrings from "Functions/localizedStrings";

const APIKey = process.env.REACT_APP_API_KEY;

const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 10vh;
    max-width: 100%;
`;

const TopSection = styled.div`
    max-width: 800px;
    margin-bottom: 2rem;
`;

const StyledAboutSection = styled.div`
    margin: 1rem;
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
    font-size: 1rem !important;
    font-style: "Roboto Mono" !important;
    padding: 0.5rem 0.8rem !important;
    border: 2px solid rgba(50, 60, 110, 0.9) !important;
    border-radius: 100px !important;
    background-color: rgba(50, 60, 110, 0.9) !important;
    :hover {
        border: 2px solid ${Colors.purple} !important;
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

    return (
        <Center>
            <Helmet>
                <title>Tomato.gg</title>
            </Helmet>
            <TopSection>
                <img
                    src={TomatoLogo}
                    alt="logo"
                    style={{
                        height: "auto",
                        width: "80%",
                        margin: "0 auto",
                        display: "flex",
                    }}
                />
                <AboutSection />
                <form onSubmit={searchId}>
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
            {/* <MediaQuery minWidth={1000}>
                <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"} style={{width: "30px"}} alt="discordlogo"/> &nbsp; Get the offical Tomato.gg bot
                    </GetBot>
                </a>
                <AdsContainer flexDir={"row"}>
                    <Ad slot={"front_page"} styles={"970x250"} />
                </AdsContainer>
            </MediaQuery>
            <MediaQuery maxWidth={999}>
                <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"} style={{width: "30px"}} alt="discordlogo"/> &nbsp; Get the offical Tomato.gg bot
                    </GetBot>
                </a>
                <AdsContainer flexDir={"row"}>
                    <Ad slot={"front_page"} styles={"300x250"} />
                </AdsContainer>
            </MediaQuery> */}
        </Center>
    );
});
