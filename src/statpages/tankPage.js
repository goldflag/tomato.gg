// NPM
import React, { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";

// LOCAL
import { Loader, FullPageTableWrapper } from "Components";
import { ServerContext } from "Context";
import RecentLeaderboard from "./tankPageComponents/recentLeaderboard";
import { ServerPagination } from "Components";
import { useURLState } from "Functions/hooks";
import { FilterButtonGroup, FilterButton } from "Components/tableFilters";
import { nationAdjConv, classDescConv, serverConv, tierConv, nationConv } from "Data/conversions";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const Top = styled.div`
    display: grid;
    grid-template-columns: 110px 160px auto;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 15% 35% 50%;
    }
`;

const Tier = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -10px;
    font-weight: 500;
    font-size: 5rem;
    user-select: none;
    @media screen and (max-width: 1000px) {
        font-size: 2.5rem;
    }
`;

const Name = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    margin-top: 30px;
    @media screen and (max-width: 1000px) {
        margin-top: 8px;
        font-size: 0.8rem;
    }
`;

const ShortName = styled.div`
    font-size: 2rem;
    @media screen and (max-width: 1000px) {
        font-size: 1.7rem;
    }
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

const TankImage = styled.img`
    max-width: 200px;
    @media screen and (max-width: 1000px) {
        max-width: 120px;
    }
`;

const PAGE_SIZE = 100;

const filters = {
    dpg: "DPG",
    wn8: "WN8",
    frags: "FRAGS",
    winrate: "WINRATE",
};

export default function TankPage(props) {
    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/tank-page");
    }, []);
    const { server } = useContext(ServerContext);

    const [data, setData] = useState("loading");

    const [page, setPage] = useURLState("page", 0);
    const [type, setType] = useURLState("type", "dpg");
    const [rank, , clearRank] = useURLState("rank", false, "number");
    const [userID] = useURLState("userID", false, "number");

    const actualPage = rank ? Math.ceil(rank / PAGE_SIZE - 1) : page;

    useEffect(() => {
        setData("loading");
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(6).split("/");
        fetch(`${backend}/api/tankpage/${urlParams[0]}/${server}/${type}/${actualPage}`)
            .then((res) => res.json())
            .then((data) => {
                data.leaderboard.forEach((player) => {
                    player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
                });
                setData(data);
            });
    }, [server, type, actualPage, rank]);

    const numPages = Math.ceil(data.count / PAGE_SIZE);

    let content;
    if (typeof data === "string") {
        content = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={30} top={30} />;
    } else {
        content = (
            <>
                <Top>
                    <div>
                        <div style={{ textAlign: "center" }}>TIER</div>
                        <Tier>{tierConv[data.meta.tier]}</Tier>
                    </div>
                    <div>
                        <TankImage src={data.meta.image} alt={data.meta.tank_id} />
                    </div>
                    <Name>
                        <ShortName>{data.meta.short_name}</ShortName>
                        <div>
                            {nationAdjConv[nationConv[data.meta.nation]]} {classDescConv[data.meta.type]}
                        </div>
                    </Name>
                </Top>
                <TableLabel>
                    Top 500 Players in {serverConv[server]}
                    <BottomLabel>PAST 60 DAYS | MINIMUM 25 BATTLES</BottomLabel>
                    <FilterButtonGroup>
                        {Object.entries(filters).map(([val, label]) => (
                            <FilterButton
                                key={val}
                                selected={type === val}
                                onClick={() => {
                                    setType(val);
                                }}
                            >
                                {label}
                            </FilterButton>
                        ))}
                    </FilterButtonGroup>
                </TableLabel>
                <RecentLeaderboard data={data.leaderboard} type={type} setType={setType} highlightUserID={userID} />
                <ServerPagination
                    page={actualPage}
                    numPages={numPages}
                    setPage={(page) => {
                        clearRank();
                        setPage(page);
                    }}
                />
            </>
        );
    }

    return <FullPageTableWrapper>{content}</FullPageTableWrapper>;
}
