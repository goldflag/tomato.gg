// NPM
import React, { useEffect, useState, useContext } from "react";
import { ServerContext } from "Context";
import styled, { css } from "styled-components";
import { Icon } from "react-icons-kit";
import { chevronLeft, chevronRight, chevronsLeft, chevronsRight } from "react-icons-kit/feather";
import { Button, ButtonGroup } from "@material-ui/core";

// LOCAL
import LeaderboardTable from "./leaderboardTable";
import { Loader } from "Components";
import { serverConv } from "Data/conversions";
import { useURLState } from "Functions/hooks";

const backend = process.env.REACT_APP_BACKEND;

const FilterButton = styled(Button)`
    background-color: ${({ selected }) => (selected ? css`rgb(222, 13, 93)` : css`rgb(66, 84, 143)`)} !important;
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
    background-color: ${({ theme }) => (theme === "dark" ? css`rgba(40, 40, 50, 0.5)` : css`rgb(250, 250, 250)`)};
    color: ${({ theme }) => (theme === "dark" ? css`rgb(220, 220, 220)` : css`rgb(80, 80, 80)`)};
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
        background-color: rgba(100, 129, 234, 0.5);
        color: white;
        border-radius: 50%;
    }

    :disabled {
        color: rgb(220, 220, 220);
        background: none;
    }
`;

const Filters = styled.div`
    padding: 0px 10px;
    background-color: rgba(40, 40, 70, 0.5);
`;

export default function Leaderboard() {
    const { server } = useContext(ServerContext);
    const [data, setData] = useState("loading");
    const [numEntries, setNumEntries] = useState();

    const [type, setType] = useURLState("type", "wn8");
    const [time, setTime] = useURLState("time", 60);
    const [tier, setTier] = useURLState("tier", 6);
    const [page, setPage] = useURLState("page", 0);

    useEffect(() => {
        setData("loading");
        fetch(`${backend}/api/leaderboard/${server}/${type}/${time}/${tier}/${page}`)
            .then((res) => res.json())
            .then((res) => {
                let playerList = res.body;
                if (!playerList) {
                    playerList = "error";
                } else {
                    playerList.forEach((player) => {
                        player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
                    });
                }
                setData(playerList);
                setNumEntries(res.count);
            });
    }, [server, type, time, tier, page]);

    function typeFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                <FilterButton
                    selected={type === "wn8"}
                    onClick={() => {
                        setType("wn8");
                    }}
                >
                    WN8
                </FilterButton>
                <FilterButton
                    selected={type === "winrate"}
                    onClick={() => {
                        setType("winrate");
                    }}
                >
                    Winrate
                </FilterButton>
                <FilterButton
                    selected={type === "kd"}
                    onClick={() => {
                        setType("kd");
                    }}
                >
                    K/D
                </FilterButton>
                <FilterButton
                    selected={type === "dpg"}
                    onClick={() => {
                        setType("dpg");
                    }}
                >
                    DPG
                </FilterButton>
            </FilterButtonGroup>
        );
    }

    function tierFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                <FilterButton
                    selected={tier === 6}
                    onClick={() => {
                        setTier(6);
                    }}
                >
                    Tier 6+
                </FilterButton>
                <FilterButton
                    selected={tier === 8}
                    onClick={() => {
                        setTier(8);
                    }}
                >
                    Tier 8+
                </FilterButton>
            </FilterButtonGroup>
        );
    }

    function timeFilter() {
        return (
            <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
                {/* <FilterButton
                    selected={time === 30}
                    onClick={() => {
                        setTime(30);
                    }}
                >
                    30 Days
                </FilterButton> */}
                <FilterButton
                    selected={time === 60}
                    onClick={() => {
                        setTime(60);
                    }}
                >
                    60 Days
                </FilterButton>
            </FilterButtonGroup>
        );
    }

    function pagination() {
        return (
            <PaginationContainer theme={"dark"}>
                <PaginationButton onClick={() => setPage(0)} disabled={page === 0}>
                    <Icon size={24} icon={chevronsLeft} />
                </PaginationButton>{" "}
                <PaginationButton onClick={() => setPage(page > 0 ? page - 1 : 0)} disabled={page === 0}>
                    <Icon size={24} icon={chevronLeft} />
                </PaginationButton>{" "}
                <PaginationButton
                    onClick={() => {
                        setPage(page <= parseInt(numEntries / 100) ? page + 1 : parseInt(numEntries / 100));
                    }}
                    disabled={page === parseInt(numEntries / 100)}
                >
                    <Icon size={24} icon={chevronRight} />
                </PaginationButton>{" "}
                <PaginationButton
                    onClick={() => {
                        setPage(parseInt(numEntries / 100));
                    }}
                    disabled={page === parseInt(numEntries / 100)}
                >
                    <Icon size={24} icon={chevronsRight} />
                </PaginationButton>{" "}
                Page {page + 1} of {parseInt(numEntries / 100)}{" "}
            </PaginationContainer>
        );
    }

    return (
        <>
            <Filters>
                {typeFilter()}
                {tierFilter()}
                {timeFilter()}
            </Filters>
            {typeof data !== "string" ? (
                <>
                    <LeaderboardTable data={data} type={type} setType={setType} />
                    {pagination()}
                </>
            ) : data === "loading" ? (
                <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />
            ) : (
                <h1>Sorry, there was an error loading that leaderboard.</h1>
            )}
        </>
    );
}
