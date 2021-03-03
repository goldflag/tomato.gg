// NPM
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";

// LOCAL
import { serverConv } from "Data/conversions";
import "CSS/style.css";
import "CSS/innerpage.css";
import { Loader } from "Components";
import ClanStatsTable from "./clanStatsPageComponents/clanStatsTable";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

const Container = styled.div`
    padding: 2rem;
    padding-top: 1rem;
    max-width: 1500px;
    margin: 0 auto;
    @media screen and (max-width: 1000px) {
        padding: 0.4rem;
        padding-top: 3.4rem;
    }
`;

export default function ClanStatsPage() {

    const [ clanData, setClanData ] = useState();

    async function fetchData(server, clanID) {
        const clanRes = await fetch(`${backend}/api/clan/${serverConv[server]}/${clanID}`);
        const clanJSON = await clanRes.json();
        clanJSON.members.forEach((player) => {
            const link = `/stats/${server}/${player.account_name}=${player.account_id}`;
            player.link = <Link to={link}>{player.account_name}</Link>;
        });
        setClanData(clanJSON);
    }

    useEffect(() => {
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(12).split("/");
        const [ server, clan ] = urlParams;
        console.log(serverConv[server], clan)

        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/clan-stats/${server}`);
        fetchData(server, clan);
    }, []);


    let clanPage = <Loader top={20} bottom={50} />;
    if (clanData) clanPage = <Container><ClanStatsTable data={clanData.members}/></Container>;

    return clanPage;
}