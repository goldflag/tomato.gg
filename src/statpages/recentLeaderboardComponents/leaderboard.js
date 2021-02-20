import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ServerContext } from "../../context";
import styled, { css } from "styled-components";

import LeaderboardTable from "./leaderboardTable";
import Loader from "../../components/loader";
import { Button, ButtonGroup } from "@material-ui/core";

import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";
import serverConv from "../../data/serverConv";

const backend = process.env.REACT_APP_BACKEND;

const FilterButton = styled(Button)`
    background-color: ${({ selected }) =>
        selected ? css`rgb(222, 13, 93)` : css`rgb(66, 84, 143)`} !important;
    color: white !important;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
    font-size: 14px;

    &:hover {
        background-color: rgb(230, 85, 125);
    }
`;

const FilterButtonGroup = styled(ButtonGroup)`
    margin-right: 10px;
    margin-bottom: 10px;
`;

const PaginationContainer = styled.div`
    padding: 1rem;
    font-size: 0.8rem;
    background-color: ${({ theme }) =>
        theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
    color: ${({ theme }) =>
        theme === "dark" ? css`rgb(220, 220, 220)` : css`rgb(80, 80, 80)`};
`;

const PaginationButton = styled.button`
    font-family: "Segoe UI";
    font-weight: 500;
    height: 2rem;
    width: 2rem;
    color: rgb(71, 99, 214);
    background: none;
    padding: 0rem;
    border-width: 0px;

    &:hover {
        background-color: rgb(100, 129, 234);
        color: white;
        border-radius: 50%;
    }

    :disabled {
        color: rgb(220, 220, 220);
        background: none;
    }
`;

const Styles = styled.div`
    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20% 0% 50% 0%;
        background-color: rgb(40, 40, 40);
    }
    
    .loadingCircle {
        max-width: 75px;
    }
    
    .filters {
        padding: 10px;
        margin-bottom: -10px;
        background-color: rgb(40, 40, 40);
    
    }
`;

export default function Leaderboard() {

    const [data, setData] = useState();
    const [type, setType] = useState('wn8');
    const [time, setTime] = useState(60);
    const [tier, setTier] = useState(6);
    const [page, setPage] = useState(0);
    const [numEntries, setNumEntries] = useState();

    const { server } = useContext(ServerContext);

    async function fetchData(str) {
        let res = await fetch(str);
        res = await res.json();
        const res2 = res.body;
        for (let i = 0; i < res2.length; ++i) {
            const link = `/stats/${serverConv[server]}/${res2[i].username}=${res2[i].player_id}`;
            res2[i].username = <Link to={link}>{res2[i].username}</Link>;
        }
        setData(res2);
        setNumEntries(res.count);
    }

    useEffect(() => {
        setData(null);
        setPage(0);
        fetchData(`${backend}/api/leaderboard/${server}/${type}/${time}/${tier}/0`);
    }, [server, type, tier, time])

    useEffect(() => {
        setData(null);
        fetchData(`${backend}/api/leaderboard/${server}/${type}/${time}/${tier}/${page}`);
    }, [page])

    function typeFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                <FilterButton
                    // key={value || label}
                    selected={type === 'wn8'}
                    onClick={() => {
                        setType('wn8');
                    }}
                >
                    WN8
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={type === 'winrate'}
                    onClick={() => {
                        setType('winrate');
                    }}
                >
                    Winrate
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={type === 'kd'}
                    onClick={() => {
                        setType('kd');
                    }}
                >
                    K/D
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={type === 'dpg'}
                    onClick={() => {
                        setType('dpg');
                    }}
                >
                    DPG
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={type === 'dmg_ratio'}
                    onClick={() => {
                        setType('dmg_ratio');
                    }}
                >
                    DMG Ratio
                </FilterButton>
            </FilterButtonGroup>
        )
    }

    function tierFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                <FilterButton
                    // key={value || label}
                    selected={tier === 6}
                    onClick={() => {
                        setTier(6);
                    }}
                >
                    Tier 6+
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={tier === 8}
                    onClick={() => {
                        setTier(8);
                    }}
                >
                    Tier 8+
                </FilterButton>
            </FilterButtonGroup>
        )
    }

    function timeFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                <FilterButton
                    // key={value || label}
                    selected={time === 30}
                    onClick={() => {
                        setTime(30);
                    }}
                >
                    30 Days
                </FilterButton>
                <FilterButton
                    // key={value || label}
                    selected={time === 60}
                    onClick={() => {
                        setTime(60);
                    }}
                >
                    60 Days
                </FilterButton>
            </FilterButtonGroup>
        )
    }

    function pagination() {

        return <PaginationContainer theme={"dark"}>
            <PaginationButton
                onClick={() => setPage(0)}
                disabled={ page === 0 }
            >
                <Icon size={24} icon={chevronsLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => setPage( page > 0 ? page - 1 : 0 )}
                disabled={ page === 0 }
            >
                <Icon size={24} icon={chevronLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => { 
                    setPage( page <= parseInt(numEntries/100) ? page + 1 : parseInt(numEntries/100) )
                }}
                disabled={page === parseInt(numEntries/100)}
            >
                <Icon size={24} icon={chevronRight} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => {
                    setPage(parseInt(numEntries/100));
                }}
                disabled={page === parseInt(numEntries/100)}
            >
                <Icon size={24} icon={chevronsRight} />
            </PaginationButton>{" "}
            Page {page + 1} of {parseInt(numEntries/100)}{" "}
        </PaginationContainer>
    }

    let table = 
        <div>
            <div className="filters">
                {typeFilter()}
                {tierFilter()}
                {timeFilter()}
            </div>
            <Loader color={'rgb(40, 40, 40)'} bottom={20} top={20}/>
        </div>;

    if (data) {
        table = <div>
            <div className="filters">
                {typeFilter()}
                {tierFilter()}
                {timeFilter()}
            </div>
                <LeaderboardTable data={data} type={type} setType={setType}/>
                {pagination()}
            </div>
    }

    return <Styles>{table}</Styles>;
}