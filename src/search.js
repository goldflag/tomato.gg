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

const WN8Colors = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        to bottom,
        hsl(272.22 79% 13%) 4%,
        hsl(268.42 75% 20%),
        hsl(265.12 60% 28%),
        hsl(261.27 56% 38%),
        hsl(255 63% 55%),
        hsl(215.74 55% 50%),
        hsl(197.95 50% 50%),
        hsl(89.61 50% 30%),
        hsl(71.6 62% 37%),
        hsl(54.12 100% 40%),
        hsl(35.88 100% 40%),
        hsl(0 61% 50%),
        hsl(0 84% 31%) 96%
    );
`;

const Row = styled.div`
    display: flex;
    // background-color: ${({ color }) => color};
    padding: ${({ color }) => (color ? `0.5rem` : "")};
`;

const Cell = styled.div`
    padding: 0.5rem;
    width: ${({ width }) => width}px;
`;

const WN8scale = [
    { icon: "🦍", wn8: "4700", winrate: "70%", color: "#24073d" },
    { icon: "🦧", wn8: "4000", winrate: "67%", color: "#310d59" },
    { icon: "🐒", wn8: "3400", winrate: "64%", color: "#411d73" },
    { icon: "🍇", wn8: "2900", winrate: "61%", color: "#522b99" },
    { icon: "🍆", wn8: "2450", winrate: "58%", color: "#6844d4" },
    { icon: "🧊", wn8: "2000", winrate: "56%", color: "#3972C6" },
    { icon: "🥥", wn8: "1600", winrate: "54%", color: "#4099BF" },
    { icon: "🥒", wn8: "1200", winrate: "52%", color: "#4D7326" },
    { icon: "🍈", wn8: "900", winrate: "50%", color: "#849B24" },
    { icon: "🍋", wn8: "650", winrate: "48%", color: "#CCB800" },
    { icon: "🍊", wn8: "450", winrate: "47%", color: "#CC7A00" },
    { icon: "🥕", wn8: "300", winrate: "46%", color: "#CD3333" },
    { icon: "🍅", wn8: "0", winrate: "0%", color: "#930D0D" },
];

const AboutSection = () => {
    const h1 = (
        <>
            THE MOST <CT color={Colors.red}>ADVANCED</CT> WORLD OF TANKS
            <br /> <CT color={Colors.purple}>PLAYER STATS</CT>, <CT color={Colors.purple}>LEADERBOARDS</CT>,{" "}
            <CT color={Colors.purple}>AND CLAN STATS</CT> <br /> ALL IN ONE PLACE
        </>
    );
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
            <MediaQuery minWidth={1000}>
                {/* <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"} style={{width: "30px"}} alt="discordlogo"/> &nbsp; Get the offical Tomato.gg bot
                    </GetBot>
                </a> */}
                <AdsContainer flexDir={"row"}>
                    <Ad slot={"front_page"} styles={"970x250"} />
                </AdsContainer>
            </MediaQuery>
            <MediaQuery maxWidth={999}>
                {/* <a target="blank" href="https://discord.gg/qA2bV7K">
                    <GetBot formAction={"www.google.com"}>
                        <img src={"https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg"} style={{width: "30px"}} alt="discordlogo"/> &nbsp; Get the offical Tomato.gg bot
                    </GetBot>
                </a> */}
                <AdsContainer flexDir={"row"}>
                    <Ad slot={"front_page"} styles={"300x250"} />
                </AdsContainer>
            </MediaQuery>
            {/* <WN8Colors>
                <div
                    style={{
                        display: "flex",
                        padding: "1rem",
                        backgroundColor: "rgba(40, 40, 70, 0.8)",
                    }}
                >
                    Color Scale
                </div>
                {WN8scale.map(({ icon, wn8, winrate, color }) => (
                    <Row>
                        <Row color={color}>
                            <Cell width={50}>{icon}</Cell>
                            <Cell width={60}>{wn8}+</Cell>
                            <Cell width={60}>{winrate}+</Cell>
                        </Row>
                    </Row>
                ))}
            </WN8Colors> */}
        </Center>
    );
});
