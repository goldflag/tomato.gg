// NPM
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
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
const APIKey = process.env.REACT_APP_API_KEY;

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
        const base = `https://api.worldoftanks.${serverConv[server]}/wot`;
        const wgEndpoints = [`/clanratings/clans/`, `/globalmap/claninfo/`, `/stronghold/claninfo/`];
        const clanData = await Promise.all([
            fetch(`${backend}/api/clan/${serverConv[server]}/${clanID}`).then((res) => res.json()),
            ...wgEndpoints.map((endpoint) =>
                fetch(`${base}${endpoint}?application_id=${APIKey}&clan_id=${clanID}`)
                    .then((res) => res.json())
                    .then((json) => json.data[clanID])
            ),
        ]).then(([clanData, rankings, globalMapHistory, strongholdHistory]) => ({
            ...clanData,
            image: clanData.emblems.x195.portal,
            rankings,
            globalMap: globalMapHistory.statistics,
            strongholdHistory,
            strongholdX: strongholdHistory.battles_series_for_strongholds_statistics,
            skirmish: strongholdHistory.skirmish_statistics,
        }));
        clanData.members.forEach((player) => {
            player.url = `/stats/${server}/${player.account_name}=${player.account_id}`;
        });
        setClanData(clanData);
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
                <ClanTopStats {...clanData} />
                <ClanStatsTable data={clanData.members} />
            </Container>
        );

    return clanPage;
}
