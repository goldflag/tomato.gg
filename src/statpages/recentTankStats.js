import React, { useEffect, useState, useContext } from "react";
import RecentTanksAvgTable from "./recentTankStatsComponents/RecentTanksAvgTable";
import { FullPageTableWrapper, Info } from "../components";
import { ThemeContext, ServerContext } from "../context";
import styled from "styled-components";
import {
    FilterButtonGroup,
    FilterButton,
} from "../components/tableFilters";
import Loader from "../components/loader";
import serverConv from "../data/serverConv";
const backend = process.env.REACT_APP_BACKEND;

const Styles = styled.div`
    .filters {
        padding: 10px;
        margin-bottom: -30px;
        background-color: rgb(40, 40, 40);
    }
`;

export default function RecentLeaderboards(props) {
    const { theme } = useContext(ThemeContext);
    const { server } = useContext(ServerContext);
    const [ data, setData ] = useState();
    const [ time, setTime ] = useState(60);

    useEffect(() => {
        setData(null);
        fetchData(`${backend}/api/recenttanks/${server}/${time}`);
    }, [server, time])

    async function fetchData(str) {
        let res = await fetch(str);
        res = await res.json();
        setData(res);
    }

    let table = <Loader color={'rgb(40, 40, 40)'} bottom={20} top={20}/>;


    if (data) {
        table = <RecentTanksAvgTable data={data}/>;
    }

    return(
        <Styles>
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
                        Click on a row to view detailed server-wide tank performance and leaderboards
                    </span>
                </Info>
                <div className="filters">
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
                </div>
                {table}
            </FullPageTableWrapper>
        </Styles>
    )
}
