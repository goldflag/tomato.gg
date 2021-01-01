import React from "react";
import "./leaderboard.css";
import Tab1 from "./tab1";
import Tab2 from "./tab2";

export default function LeaderboardGrid() {
    return (
        <div className="leaderboardgrid">
            <div style={{ margin: "1rem" }}>
                <Tab1 />
            </div>
            <div style={{ margin: "1rem" }}>
                <Tab2 />
            </div>
        </div>
    );
}
