// NPM
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";

// LOCAL
import Loader from "../components/loader";
import serverConv from "../data/serverConv";
import { ThemeContext, ServerContext } from "../context";
import { FullPageTableWrapper, Info } from "../components";
import { FilterButtonGroup, FilterButton } from "../components/tableFilters";
import RecentTanksAvgTable from "./recentTankStatsComponents/RecentTanksAvgTable";
import { useURLState } from "../functions/hooks";

const backend = process.env.REACT_APP_BACKEND;

const Filters = styled.div`
    // padding: 10px;
    // margin: -15px;
`;

export default function RecentLeaderboards() {
    const { theme } = useContext(ThemeContext);
    const { server } = useContext(ServerContext);
    const [data, setData] = useState("loading");
    const [time, setTime] = useURLState("time", 60);

    useEffect(() => {
        setData("loading");
        fetch(`${backend}/api/recenttanks/${server}/${time}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [server, time]);

    return (
        <FullPageTableWrapper>
            <Info theme={theme}>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {serverConv[server]} Recent Tank Stats
                </span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1rem",
                        color: "rgb(150,150,150)",
                    }}
                >
                    Click on a row to view detailed server-wide tank performance
                    and leaderboards
                </span>
                <Filters>
                    <FilterButtonGroup>
                        <FilterButton
                            key={30}
                            selected={time === 30}
                            onClick={() => {
                                setTime(30);
                            }}
                        >
                            30 Days
                        </FilterButton>
                        <FilterButton
                            key={60}
                            selected={time === 60}
                            onClick={() => {
                                setTime(60);
                            }}
                        >
                            60 Days
                        </FilterButton>
                    </FilterButtonGroup>
                </Filters>
            </Info>

            {typeof data !== "string" ? (
                <RecentTanksAvgTable data={data} />
            ) : data === "loading" ? (
                <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />
            ) : (
                <h2>Sorry, recent tank stats could not be loaded.</h2>
            )}
        </FullPageTableWrapper>
    );
}
