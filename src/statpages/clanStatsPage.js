// NPM
import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";

// LOCAL
import { serverConv } from "Data/conversions";
import "CSS/style.css";
import "CSS/innerpage.css";
import { Loader } from "Components";
import ClanTopStats from "./clanStatsPageComponents/clanTopStats";
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
    const match = useRouteMatch();
    const { server, clan } = match.params;

    const [clanData, setClanData] = useState("loading");

    async function fetchData(server, clanID) {
        setClanData("loading");
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
        const [server, clan] = urlParams;
        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/clan-stats/${server}`);
        fetchData(server, clan);
    }, [server, clan]);

    let clanPage = <Loader top={20} bottom={50} />;
    if (clanData !== "loading")
        clanPage = (
            <Container>
                <ClanTopStats
                    image={clanData.emblems.x195.portal}
                    tag={clanData.tag}
                    name={clanData.name}
                    created_at={clanData.created_at}
                    motto={clanData.motto}
                    clanColor={clanData.color}
                    members_count={clanData.members_count}
                    overallWN8={clanData.overallWN8}
                    overallWinrate={clanData.overallWinrate}
                    recentWN8={clanData.recentWN8}
                    recentWinrate={clanData.recentWinrate}
                    rankings={clanData.rankings}
                    description={clanData.description_html}
                    globalMap={clanData.globalMapHistory.statistics}
                    strongholdX={clanData.strongholdHistory.battles_series_for_strongholds_statistics}
                    skirmish={clanData.strongholdHistory.skirmish_statistics}

                />
                <ClanStatsTable data={clanData.members}/>
            </Container>
        );

    return clanPage;
}
