// NPM
import React, { useEffect, useState, useContext } from "react";
import { ServerContext } from "Context";
import styled, { css } from "styled-components";
import LocalizedStrings from "react-localization";
import { Button, ButtonGroup } from "@material-ui/core";

// LOCAL
import LeaderboardTable from "./leaderboardTable";
import { Loader } from "Components";
import { serverConv } from "Data/conversions";
import { useURLState } from "Functions/hooks";
import { ServerPagination } from "Components/";

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

const Filters = styled.div`
    padding: 0px 10px;
    background-color: rgba(40, 40, 70, 0.5);
`;

const strings = new LocalizedStrings({
    en: {
        wn8: "WN8",
        winrate: "Winrate",
        kd: "K/D",
        dpg: "DPG",
        6: "In Vehicles Tier 6+",
        8: "In Vehicles Tier 8+",
        30: "30 Days",
        60: "60 Days",
        typeFilter: "set leaderboard type",
        tierFilter: "set minimum tank tier",
        timeFilter: "set time period",
        error: "Sorry, there was an error loading that leaderboard.",
    },
});

const filters = {
    type: ["wn8", "winrate", "kd", "dpg"],
    tier: [6, 8],
    time: [
        // 30,
        60,
    ],
};

const ButtonFilterBar = ({ options, filterValue, setFilterValue, ariaLabel }) => (
    <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
        {options.map((value, i) => (
            <FilterButton
                key={i}
                selected={value === filterValue}
                onClick={() => {
                    setFilterValue(value);
                }}
            >
                {strings[value]}
            </FilterButton>
        ))}
    </FilterButtonGroup>
);

export default function Leaderboard() {
    const { server } = useContext(ServerContext);
    const [data, setData] = useState("loading");
    const [numEntries, setNumEntries] = useState();

    const [type, setType] = useURLState("type", "wn8");
    const [tier, setTier] = useURLState("tier", 6);
    const [time, setTime] = useURLState("time", 60);
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

    return (
        <>
            <Filters>
                <ButtonFilterBar
                    options={filters.type}
                    filterValue={type}
                    setFilterValue={setType}
                    ariaLabel={strings.typeFilter}
                />
                <ButtonFilterBar
                    options={filters.tier}
                    filterValue={tier}
                    setFilterValue={setTier}
                    ariaLabel={strings.tierFilter}
                />
                <ButtonFilterBar
                    options={filters.time}
                    filterValue={time}
                    setFilterValue={setTime}
                    ariaLabel={strings.timeFilter}
                />
            </Filters>
            {typeof data !== "string" ? (
                <>
                    <LeaderboardTable data={data} type={type} setType={setType} />
                    <ServerPagination setPage={setPage} page={page} numPages={Math.ceil(numEntries / 100)} />
                </>
            ) : data === "loading" ? (
                <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />
            ) : (
                <h1>{strings.error}</h1>
            )}
        </>
    );
}
