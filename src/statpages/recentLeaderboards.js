// NPM
import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import Leaderboard from "./recentLeaderboardComponents/leaderboard";
import { FullPageTableWrapper, Info } from "Components";
import { ServerContext, LoadContext } from "Context";
import { serverConv } from "Data/conversions";
import Reload from "Ads/reload";
import { AdsContainer } from "Ads/adsContainer";

const { formatString, ...strings } = LocalizedStrings({
    en: { recentStats: "{server} Recent Stats Leaderboard", minGames: "Mininum 75 games in period" },
    cs: { recentStats: "{server} Žebříček nedávných statistik", minGames: "Minimální 75 bitev za období" },
    de: { recentStats: "{server} Aktuelle Bestenliste", minGames: "Mindestens 75 Spiele im Zeitraum" },
    es: {
        recentStats: "{server} Tabla de Clasificación de Estadísticas Recientes",
        minGames: "Periodo mínimo de 75 partidas",
    },
    fr: { recentStats: "Classement Stats Récentes {server}", minGames: "Mininum 75 batailles sur la période" },
    ko: { recentStats: "{server} 최근 통계 리더보드", minGames: "기간 내 최소 75 전투" },
    hr: { recentStats: "{server} Nedavna Statistika Ljestvice", minGames: "Najmanje 75 bitaka u razdoblju" },
    pl: { recentStats: "Ranking Bieżących Statystyk na {server}", minGames: "Minimum 75 bitew w okresie" },
    tr: { recentStats: "{server} Son İstatistikler Tablosu", minGames: "Dönem içi Mininum 75 oyun" },
    zh: { recentStats: "{server} 近期表現榜", minGames: "期間內需最少75場戰鬥" },
});

export default function RecentLeaderboards() {

    const { server } = useContext(ServerContext);
    const { load, setLoad } = useContext(LoadContext);

    const titleString = formatString(strings.recentStats, { server: serverConv[server] });

    useEffect(() => {
        console.log(load);
        load ? Reload() : setLoad(true);
    }, []);

    const content = (
        <div>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {formatString(strings.recentStats, { server: serverConv[server] })}
                </span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.3rem",
                        color: "rgb(150,150,150)",
                    }}
                >
                    {strings.minGames}
                </span>{" "}
                <br />
            </Info>
            <Leaderboard />
        </div>
    );

    return (
        <>
            <Helmet>
                <title>{titleString} - Tomato.gg</title>
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
