// NPM
import React, { useContext } from "react";
import LocalizedStrings from "react-localization";

// LOCAL
import Leaderboard from "./recentLeaderboardComponents/leaderboard";
import { FullPageTableWrapper, Info } from "Components";
import { ServerContext } from "Context";
import { serverConv } from "Data/conversions";

const strings = new LocalizedStrings({
    en: {
        recentStats: "{server} Recent Stats Leaderboard",
        minGames: "Mininum 75 games in period",
    },
});

export default function RecentLeaderboards(props) {
    const { server } = useContext(ServerContext);

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {strings.formatString(strings.recentStats, { server: serverConv[server] })}
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
    );
}
