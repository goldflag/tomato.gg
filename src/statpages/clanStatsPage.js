// NPM
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { serverConv } from "Data/conversions";
import "CSS/style.css";
import "CSS/innerpage.css";
import { Loader } from "Components";
import ClanTopStats from "./clanStatsPageComponents/clanTopStats";
import ClanStatsTable from "./clanStatsPageComponents/clanStatsTable";
import worrydetective from "Assets/staticfrogs/worrydetective.png";
import SidebarAd from "../ads";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;
const APIKey = process.env.REACT_APP_API_KEY;

const Container = styled.div`
    padding: 2rem;
    padding-top: 1rem;
    max-width: 2200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media screen and (max-width: 1000px) {
        padding: 0.4rem;
        padding-top: 3.4rem;
    }
`;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        notFound: "Clan {0} not found",
        correct: "Make sure the clan tage and region are correct.",
    },
    cs: {
        notFound: "Hráč {0} nebyl nalezen",
        correct: "Ujistěte se, že přezdívka i region serveru jsou správně.",
    },
    de: {
        notFound: "Spieler {0} nicht gefunden",
        correct: "Stelle sicher, dass der Name und die Region korrekt sind.",
    },
    es: {
        notFound: "Jugador {0} no encontrado",
        correct: "Por favor asegúrese de que el nombre de usuario y la región sean correctos",
    },
    fr: {
        notFound: "Joueur {0} introuvable",
        correct: "Vérifiez que le pseudo et la région sont corrects.",
    },
    tr: {
        notFound: "{0} oyuncusu bulunamadı",
        correct: "Oyuncu adı ve bölgenin doğru olduğuna emin olunuz.",
    },
    pl: {
        notFound: "Nie znaleziono gracza {0}",
        correct: "Sprawdź, czy nick i region są poprawne",
    },
    ru: {
        notFound: "Игрок {0} не найден",
        correct: "Убедитесь, что имя игрока и регион указаны правильно.",
    },
    zh: {
        notFound: "查無玩家 {0}",
        correct: "確認為正確的使用者及地區。",
    },
});

export default function ClanStatsPage() {
    const match = useRouteMatch();
    const { server, clan } = match.params;

    const [clanData, setClanData] = useState("loading");
    const [validID, setValidID] = useState(true);
    const [clanName, setClanName] = useState("");

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
        const [clanName, id] = clan.split("=");
        ReactGA.initialize(trackingId);
        ReactGA.pageview(`/clan-stats/${server}`);
        if (id !== "FAIL") {
            fetchData(server, id);
        } else {
            setValidID(false);
            setClanName(clanName);
        }
    }, [server, clan]);

    let clanPage;
    if (clanData === "loading") clanPage = <Loader frog={true} top={20} bottom={20} />;
    else {
        clanPage = (
            <>
                <ClanTopStats {...clanData} />
                <ClanStatsTable data={clanData.members} />
            </>
        );
    }

    if (!validID) {
        clanPage = (
            <>
                <span style={{ fontSize: "2rem" }}>
                    {formatString(strings.notFound, clanName.toUpperCase())}{" "}
                    <img src={worrydetective} style={{ height: "2.5rem", verticalAlign: "middle" }} alt="notfound" />
                </span>
                <br />
                <br />
                {strings.correct}
            </>
        );
    }

    return (
        <Container>
            <div style={{ minWidth: 0, padding: "0 1rem" }}> {clanPage}</div>
            <div style={{ width: "250px" }}>
                <SidebarAd slot={2309387775} /> <SidebarAd slot={7625293631} />
            </div>
        </Container>
    );
}
