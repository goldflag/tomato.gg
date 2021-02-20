import React, { useContext, useEffect, useState } from "react";
import ReactGA from "react-ga";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FullPageTableWrapper } from "../components";
import { ServerContext } from "../context";
import Loader from "../components/loader";
import RecentLeaderboard from './tankPageComponents/recentLeaderboard';
import serverConv from "../data/serverConv";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

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
    .top {
        display: grid;
        grid-template-columns: 110px 160px auto;
    }

    .tierParent {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: auto;
    }

    .tier {        
        display: flex;
        justify-content: center;
        margin-top: -10px;
        font-weight: 500;
        font-size: 5rem;
    }

    .name {        
        display: flex;
        flex-direction: column;
        font-weight: 400;
        margin-top: 30px;
    }

    .tableLabel {
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .bottomLabel {
        font-size: 0.8rem;
        margin: 0.5rem 0;
        color: rgb(160, 160, 160);
    }
`;

const classConv = {
    "HT": "Heavy Tank",
    "MT": "Medium Tank",
    "LT": "Light Tank",
    "SPG": "Self Propelled Gun",
    "TD": "Tank Destroyer",
}

const nationConv = {
    "USA" : "American",
    "China" : "Chinese",
    "Czech" : "Czech",
    "France" : "French",
    "Germany" : "German",
    "Italy" : "Italian",
    "Japan" : "Japanese",
    "Poland" : "Polish",
    "Sweden" : "Swedish",
    "UK" : "British",
    "USSR" : "Soviet"
}

export default function TankPage(props) {

    const [data, setData] = useState("");
    const [type, setType] = useState("dpg");
    const [page, setPage] = useState(0);
    const [numEntries, setNumEntries] = useState();

    const { server } = useContext(ServerContext);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/tank-page");
        init(0);
    }, [server]);

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/tank-page");
        init(page);
    }, [page]);

    async function init(page) {
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(6).split('/');
        const url = `${backend}/api/tankpage/${urlParams[0]}/${server}/${type}/${page}`;
        const res = await fetch(url);
        const res2 = await res.json();
        for (let i = 0; i < res2.leaderboard.length; ++i) {
            const link = `/stats/${serverConv[server]}/${res2.leaderboard[i].username}=${res2.leaderboard[i].player_id}`;
            res2.leaderboard[i].username = <Link to={link}>{res2.leaderboard[i].username}</Link>;
        }
        setNumEntries(res2.count);
        setData(res2);
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
                disabled={page === parseInt(numEntries/100) - 1}
            >
                <Icon size={24} icon={chevronRight} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => {
                    const wtf = parseInt(numEntries/100);
                    console.log(wtf);
                    setPage(wtf - 1);
                }}
                disabled={page === parseInt(numEntries/100) - 1}
            >
                <Icon size={24} icon={chevronsRight} />
            </PaginationButton>{" "}
            Page {page + 1} of {parseInt(numEntries/100)}{" "}
        </PaginationContainer>
    }

    let content = <Loader bottom={20} top={20}/>;

    if (data) {
        content =     
        (        
            <Styles>
                <div className="top">
                    <div>
                        <div style={{textAlign: "center"}}>
                            TIER
                        </div>
                        <div className="tier">
                            {data.meta.tier}
                        </div>
                    </div>
                    <div>
                        <img src={data.meta.image} alt={data.meta.tank_id}/>
                    </div>
                    <div className="name">
                        <div style={{fontSize: "2rem"}}>
                            {data.meta.short_name}
                        </div>
                        <div>
                            {nationConv[data.meta.nation]} {classConv[data.meta.class]}
                        </div>
                    </div>
                </div>
                <div className="tableLabel">
                    Top 500 Players 
                    <div className="bottomLabel">
                        PAST 60 DAYS | MINIMUM 25 BATTLES
                    </div>
                </div>
                <RecentLeaderboard data={data.leaderboard} type={type} setType={setType}/>
                {pagination()}
            </Styles>
        );
    }

    return (
        <FullPageTableWrapper>
            {content}
        </FullPageTableWrapper>
    );
}
