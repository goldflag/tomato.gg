// NPM
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import Leaderboard from "./recentLeaderboardComponents/leaderboard";
import { FullPageTableWrapper, Info } from "Components";
import { ServerContext } from "Context";
import { serverConv } from "Data/conversions";

const { formatString, ...strings } = LocalizedStrings({
    en: { recentStats: "{server} Recent Stats Leaderboard", minGames: "Mininum 75 games in period" },
    cs: { recentStats: "{server} Žebříček nedávných statistik", minGames: "Minimální 75 bitev za období" },
    de: { recentStats: "{server} Aktuelle Bestenliste", minGames: "Mindestens 75 Spiele im Zeitraum" },
    es: {
        recentStats: "{server} Tabla de Clasificación de Estadísticas Recientes",
        minGames: "Mínima 75 partidas en periodo",
    },
    fr: { recentStats: "Classement Stats Récentes {server}", minGames: "Mininum 75 parties sur la période" },
    ko: { recentStats: "{server} 최근 통계 리더보드", minGames: "기간 내 최소 75 전투" },
    pl: { recentStats: "Ranking Bieżących Statystyk na {server}", minGames: "Minimum 75 bitew w okresie" },
    tr: { recentStats: "{server} Son İstatistikler Tablosu", minGames: "Dönem içi Mininum 75 oyun" },
    zh: { recentStats: "{伺服器} 近期表現榜", minGames: "期間內需最少75場戰鬥" },
});

export default function RecentLeaderboards(props) {
    const { server } = useContext(ServerContext);
    const titleString = formatString(strings.recentStats, { server: serverConv[server] });

    return (
        <>
            <Helmet>
                <title>{titleString} - Tomato.gg</title>
            </Helmet>
            <FullPageTableWrapper>
                <Info>
                    <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                        {titleString}
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
            </FullPageTableWrapper>
        </>
    );
}
