// NPM
import React, { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

// LOCAL
import { FullPageTableWrapper } from "../components";
import { ServerContext } from "../context";
import Loader from "../components/loader";
import RecentLeaderboard from "./tankPageComponents/recentLeaderboard";
import serverConv from "../data/serverConv";
import { parseURLParams, updateURLParams } from "../functions/urlParams";
import { ServerPagination } from "../components";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const Top = styled.div`
    display: grid;
    grid-template-columns: 110px 160px auto;
`;

const Tier = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -10px;
    font-weight: 500;
    font-size: 5rem;
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    margin-top: 30px;
`;

const TableLabel = styled.div`
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const BottomLabel = styled.div`
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: rgb(160, 160, 160);
`;

const classConv = {
    HT: "Heavy Tank",
    MT: "Medium Tank",
    LT: "Light Tank",
    SPG: "Self Propelled Gun",
    TD: "Tank Destroyer",
};

const nationConv = {
    USA: "American",
    China: "Chinese",
    Czech: "Czech",
    France: "French",
    Germany: "German",
    Italy: "Italian",
    Japan: "Japanese",
    Poland: "Polish",
    Sweden: "Swedish",
    UK: "British",
    USSR: "Soviet",
};

const PAGE_SIZE = 100;

export default function TankPage(props) {
    const [data, setData] = useState("loading");
    const location = useLocation();
    const history = useHistory();

    const { server } = useContext(ServerContext);

    const { type, page, rank } = parseURLParams(location.search, {
        type: "dpg",
        page: 0,
        rank: false,
    });
    const actualPage = rank ? Math.floor(rank / PAGE_SIZE) : page;

    const redirectWithParams = (params) => {
        setData("loading");
        history.push(location.pathname + "?" + params);
    };
    const setType = (type) =>
        redirectWithParams(updateURLParams(location.search, { type }));
    const setPage = (page) =>
        redirectWithParams(
            updateURLParams(location.search, { page, rank: undefined })
        );

    useEffect(() => {
        setData("loading");
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(6).split("/");
        fetch(
            `${backend}/api/tankpage/${urlParams[0]}/${server}/${type}/${actualPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                data.leaderboard.forEach((player) => {
                    player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
                });
                setData(data);
            });
    }, [server, type, actualPage, rank]);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/tank-page");
    }, []);

    let content =
        typeof data !== "string" ? (
            <>
                <Top>
                    <div>
                        <div style={{ textAlign: "center" }}>TIER</div>
                        <Tier>{data.meta.tier}</Tier>
                    </div>
                    <div>
                        <img src={data.meta.image} alt={data.meta.tank_id} />
                    </div>
                    <Name>
                        <div style={{ fontSize: "2rem" }}>
                            {data.meta.short_name}
                        </div>
                        <div>
                            {nationConv[data.meta.nation]}{" "}
                            {classConv[data.meta.class]}
                        </div>
                    </Name>
                </Top>
                <TableLabel>
                    Top 500 Players in {serverConv[server]}
                    <BottomLabel>PAST 60 DAYS | MINIMUM 25 BATTLES</BottomLabel>
                </TableLabel>
                <RecentLeaderboard
                    data={data.leaderboard}
                    type={type}
                    setType={setType}
                    highlightRow={rank && (rank % PAGE_SIZE) - 1}
                />
                <ServerPagination
                    page={actualPage}
                    numPages={Math.floor(data.leaderboard.length / 100)}
                    setPage={setPage}
                />
            </>
        ) : (
            <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={30} top={30} />
        );

    console.log(data);

    return <FullPageTableWrapper>{content}</FullPageTableWrapper>;
}
