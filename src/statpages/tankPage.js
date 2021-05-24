// NPM
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import styled from "styled-components";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import { Loader, FullPageTableWrapper } from "Components";
import { ServerContext, LoadContext } from "Context";
import RecentLeaderboard from "./tankPageComponents/recentLeaderboard";
import { ServerPagination } from "Components";
import { useURLState } from "Functions/hooks";
import { FilterButtonGroup, FilterButton } from "Components/tableFilters";
import { nationAdjConv, classDescConv, serverConv, tierConv, classConv } from "Data/conversions";
import { Capital, commonStrings } from "Data/localizations";
import Reload from "Ads/reload";
import { AdsContainer } from "Ads/adsContainer";
const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const Top = styled.div`
    display: grid;
    grid-template-columns: 110px 160px auto;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 15% 35% 50%;
    }
`;

const Tier = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -10px;
    font-weight: 500;
    font-size: 5rem;
    user-select: none;
    @media screen and (max-width: 1000px) {
        font-size: 2.5rem;
    }
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    margin-top: 30px;
    @media screen and (max-width: 1000px) {
        margin-top: 8px;
        font-size: 0.8rem;
    }
`;

const ShortName = styled.div`
    font-size: 2rem;
    @media screen and (max-width: 1000px) {
        font-size: 1.7rem;
    }
`;

const TableLabel = styled.div`
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const BottomLabel = styled.div`
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: rgb(160, 160, 160);
`;

const TankImage = styled.img`
    max-width: 200px;
    @media screen and (max-width: 1000px) {
        max-width: 120px;
    }
`;

const PAGE_SIZE = 100;

const { formatString, ...strings } = LocalizedStrings({
    en: { top500: "Top 500 Players on {0} server", past60min25: "PAST 60 DAYS | MINIMUM 25 BATTLES" },
    cs: { top500: "500 nejlepších hráčů v {0}", past60min25: "POSLEDNÍCH 60 DNÍ | MINIMÁLNĚ 25 BITEV" },
    de: { top500: "Top 500 Spieler in {0}", past60min25: "LETZTE 60 TAGE | MINIMUM 25 GEFECHTE" },
    es: { top500: "Los 500 Mejores Jugadores en {0}", past60min25: "ÚLTIMOS 60 DÍAS | MÍNIMO 25 BATALLAS" },
    fr: { top500: "Top 500 sur le serveur {0}", past60min25: "60 DERNIERS JOURS | MINIMUM 25 BATAILLES" },
    hr: { top500: "Top 500 Igrača u {0}", past60min25: "ZADNJIH 60 DANA | MINIMALNO 25 BITAKA" },
    ko: { top500: "상위 500명 {0}", past60min25: "60일| 최소 25 전투" },
    pl: { top500: "500 najlepszych graczy na serwerze {0}", past60min25: "OSTATNICH 60 DNIACH | MINIMUM 25 BITEW" },
    ru: { top500: "500 лучших игроков в {0}", past60min25: "ПОСЛЕДНИЕ 60 ДНЕЙ | МИНИМУМ 25 СРАЖЕНИЙ" },
    tr: { top500: "En iyi 500 Oyuncu içinde {0}", past60min25: "SON 60 GÜN | MİNİMUM 25 SAVAŞ" },
    zh: { top500: "前500名 {0}", past60min25: "過去60天 | 最少25場戰鬥" },
});

const filters = {
    dpg: commonStrings.dpg,
    wn8: commonStrings.wn8,
    frags: Capital(commonStrings.frags),
    winrate: Capital(commonStrings.wr),
};

export default function TankPage(props) {

    const { server } = useContext(ServerContext);
    const { load, setLoad } = useContext(LoadContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/tank-page");
        console.log(load);
        load ? Reload() : setLoad(true);
    }, []);

    const [data, setData] = useState("loading");

    const [page, setPage] = useURLState("page", 0);
    const [type, setType] = useURLState("type", "dpg");
    const [rank, , clearRank] = useURLState("rank", false, "number");
    const [userID] = useURLState("userID", false, "number");

    const actualPage = rank ? Math.ceil(rank / PAGE_SIZE - 1) : page;

    useEffect(() => {
        setData("loading");
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(6).split("/");
        fetch(`${backend}/api/tankpage/${urlParams[0]}/${server}/${type}/${actualPage}`)
            .then((res) => res.json())
            .then((data) => {
                data.leaderboard.forEach((player) => {
                    player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
                });
                setData(data);
            });
    }, [server, type, actualPage, rank]);

    const numPages = Math.ceil(data.count / PAGE_SIZE);

    let content;
    if (typeof data === "string") {
        content = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={30} top={30} />;
    } else {
        content = (
            <>
                <Top>
                    <div>
                        <div style={{ textAlign: "center" }}>{Capital(commonStrings.tier)}</div>
                        <Tier>{tierConv[data.meta.tier]}</Tier>
                    </div>
                    <div>
                        <TankImage src={data.meta.image} alt={data.meta.tank_id} />
                    </div>
                    <Name>
                        <ShortName>{data.meta.short_name}</ShortName>
                        <div>
                            {nationAdjConv.formatString(
                                nationAdjConv[data.meta.nation],
                                classDescConv[classConv[data.meta.type]]
                            )}
                        </div>
                    </Name>
                </Top>
                <TableLabel>
                    {formatString(strings.top500, serverConv[server])}
                    <BottomLabel>{strings.past60min25}</BottomLabel>
                    <FilterButtonGroup>
                        {Object.entries(filters).map(([val, label]) => (
                            <FilterButton
                                key={val}
                                selected={type === val}
                                onClick={() => {
                                    setType(val);
                                }}
                            >
                                {label}
                            </FilterButton>
                        ))}
                    </FilterButtonGroup>
                </TableLabel>
                <RecentLeaderboard data={data.leaderboard} type={type} setType={setType} highlightUserID={userID} />
                <ServerPagination
                    page={actualPage}
                    numPages={numPages}
                    setPage={(page) => {
                        clearRank();
                        setPage(page);
                    }}
                />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>
                    {typeof data === "string" ? "" : `${data.meta.short_name} - `}
                    Tomato.gg
                </title>
            </Helmet>
            <MediaQuery maxWidth={1000}>
                <FullPageTableWrapper columns={"auto"}>
                    <div>{content}</div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1001}>
                <FullPageTableWrapper columns={"auto 320px"}>
                    <div style={{ minWidth: 0 }}>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <div id="nn_sky2"></div>
                            <div id="nn_sky1"></div>
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
        </>
    );
}
