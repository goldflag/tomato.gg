import React, { useContext } from "react";
import Leaderboard from "./recentLeaderboardComponents/leaderboard";
import { FullPageTableWrapper, Info } from "../components";
import { ServerContext } from "../context";
import { serverConv } from "../data/conversions";

export default function RecentLeaderboards(props) {
    const { server } = useContext(ServerContext);

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {serverConv[server]} Recent Stats Leaderboard
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
                    Mininum 75 games in period
                </span>{" "}
                <br />
            </Info>
            <Leaderboard />
        </FullPageTableWrapper>
    );
}
