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
import { useWindowSize } from "Functions/hooks";
import Ad from "Ads/ads";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;
const APIKey = process.env.REACT_APP_API_KEY;

const Container = styled.div`
    padding: ${({padding}) => padding};
    max-width: 2200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${({columns}) => columns};
`;

const { formatString, ...strings } = LocalizedStrings({
    en: { notFound: "Clan {0} not found", correct: "Make sure the clan tag and region are correct." },
    cs: { notFound: "Klan {0} nebyl nalezen", correct: "Ujistěte se, že přezdívka i region serveru jsou správně." },
    de: {
        notFound: "Spieler {0} nicht gefunden",
        correct: "Stelle sicher, dass der Name und die Region korrekt sind.",
    },
    es: {
        notFound: "Jugador {0} no encontrado",
        correct: "Por favor asegúrese de que el nombre de usuario y la región sean correctos",
    },
    fr: { notFound: "Joueur {0} introuvable", correct: "Vérifiez que le pseudo et la région sont corrects." },
    hr: { notFound: "Igrač {0} nije pronađen", correct: "Provjerite jesu li korisničko ime i regija točni." },
    tr: { notFound: "{0} oyuncusu bulunamadı", correct: "Oyuncu adı ve bölgenin doğru olduğuna emin olunuz." },
    pl: { notFound: "Nie znaleziono gracza {0}", correct: "Sprawdź, czy nick i region są poprawne" },
    ru: { notFound: "Игрок {0} не найден", correct: "Убедитесь, что имя игрока и регион указаны правильно." },
    zh: { notFound: "查無玩家 {0}", correct: "確認為正確的使用者及地區。" },
});

export default function ClanStatsPage() {
    const match = useRouteMatch();
    const { server, clan } = match.params;

    const [clanData, setClanData] = useState("loading");
    const [validID, setValidID] = useState(true);
    const [clanName, setClanName] = useState("");
    const windowSize = useWindowSize();

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
        <Container 
            columns={windowSize.width > 1000 ? "auto 150px" : "auto"}
            padding={windowSize.width > 1000 ? "1rem" : "0.5rem"}
        >
            <div style={{ minWidth: 0 }}>{clanPage}</div>
            {windowSize.width > 1000 ? 
                <div style={{ padding: "0 0 0 1rem"}}>
                    <Ad slot={"clan_sidebar_1"} styles={"responsive"}/> <Ad slot={"clan_sidebar_2"} styles={"responsive"}/>
                </div>                
                : 
                null
            }
        </Container>
    );
}
