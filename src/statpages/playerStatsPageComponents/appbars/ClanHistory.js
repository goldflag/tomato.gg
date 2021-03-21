// NPM
import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Scrollbar from "react-scrollbars-custom";
import styled from "styled-components";

// LOCAL
import { TabPanel, CustomTabs, CustomTab } from "../../../components/customTabs";
import { clanPositions } from "Data/localizations";
import { Link, useRouteMatch } from "react-router-dom";
import { serverConv } from "Data/conversions";
import { Loader } from "Components";
import LocalizedStrings from "Functions/localizedStrings";

const APIKey = process.env.REACT_APP_API_KEY;

const LeftSide = styled.div`
    margin: auto;
    width: 80%;
    font-size: 16px;
    color: lan.colo;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ClanTag = styled.span`
    font-weight: 600;
    color: ${({ color }) => color};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
`;

const DataLabel = styled.span`
    text-align: left;
    font-size: 13px;
    font-weight: 400;
    color: rgb(125, 125, 125);
`;

const formatDate = (value) => {
    const date = new Date(value * 1000);
    const dateOptions = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(navigator.languages[0], dateOptions);
};

const strings = LocalizedStrings({
    en: {
        clanHistory: "CLAN HISTORY",
        noData: "This player has no clan data.",
        joined: "Joined",
        left: "Left",
        position: "Position",
    },
    cs: {
        clanHistory: "KLANOVÁ HISTORIE",
        noData: "Historie tohoto hráče neobsahuje žádná klanová data.",
        left: "Odešel",
        position: "Pozice",
    },
    de: {
        clanHistory: "CLAN HISTORIE",
        noData: "Dieser Spieler hat keine Clanhistorie.",
        left: "Ausgetreten",
        position: "Rang",
    },
    es: {
        clanHistory: "HISTORIA DEL CLAN",
        noData: "Este jugador no tiene datos de clan.",
        left: "Salió",
        position: "Posición",
    },
    fr: {
        clanHistory: "HISTORIQUE DES CLANS",
        noData: "Ce joueur n'a pas d'historique de clan.",
        left: "Quitté",
        position: "Grade",
    },
    ko: {
        clanHistory: "클랜 기록",
        noData: "이 플레이어는 클랜에 가압한 적이 없습니다.",
        left: "탈퇴",
        position: "직책",
    },
    hr: {
        clanHistory: "KLAN POVIJEST",
        noData: "Ovaj igrač nema podatke o klanu.",
        left: "Lijevo",
        position: "Pozicija",
    },
    pl: {
        clanHistory: "HISTORIA KLANÓW",
        noData: "Ten gracz nie ma danych związanych z klanami.",
        left: "Opuścił",
        position: "Pozycja",
    },
    ru: {
        clanHistory: "ИСТОРИЯ КЛАНОВ",
        noData: "У этого игрока нет данных клана.",
        left: "Ушли",
        position: "Позиция",
    },
    tr: { clanHistory: "KLAN GEÇMİŞİ", noData: "Bu oyuncuya ait klan verisi yok.", left: "Ayrıldı", position: "Rütbe" },
    zh: { clanHistory: "公會歷史", noData: "無公會紀錄", left: "離開", position: "職位" },
});

const SingleClan = ({ clan, server }) => (
    <Grid item xs={6}>
        <Grid container spacing={1}>
            <Grid item xs={5}>
                <LeftSide>
                    <img src={clan.icon} alt={clan.clan_name} />
                    <Link to={`/clan-stats/${serverConv[server]}/${clan.clan_name}=${clan.clan_id}`}>
                        <ClanTag {...clan}>[{clan.clan_name}]</ClanTag>
                    </Link>
                </LeftSide>
            </Grid>
            <Grid item xs={7}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        fontWeight: "500",
                    }}
                >
                    <span
                        style={{
                            textAlign: "left",
                            fontSize: "14px",
                            color: "rgb(220, 220, 220)",
                        }}
                    >
                        <DataLabel>{strings.joined}:</DataLabel>
                        <br />
                        {formatDate(clan.joined_at)}
                        <br />
                        <DataLabel>{strings.left}:</DataLabel>
                        <br />
                        {clan.left_at ? formatDate(clan.left_at) : "Current"}
                        <br />
                        <DataLabel>{strings.position}:</DataLabel>
                        <br />
                        {clanPositions[clan.role]}
                    </span>
                </div>
            </Grid>
        </Grid>
    </Grid>
);

export default function ClanHistory({ data, currentClan }) {
    const server = serverConv[useRouteMatch().params.server];
    const [value, setValue] = useState(0);
    const [clanList, setClanList] = useState("");
    const handleChange = (_, newValue) => setValue(newValue);

    // Runs once when component mounts
    useEffect(() => {
        if (data === "NO CLAN HISTORY") return;
        const URL =
            `https://api.worldoftanks.${server}/wot/clans/info/?application_id=${APIKey}&clan_id=` +
            data.map(({ clan_id }) => clan_id).join("%2C+");
        fetch(URL)
            .then((res) => res.json())
            .then(({ data: clanData }) => {
                const clanList = data.map(({ clan_id, ...clan }) => ({
                    ...clan,
                    clan_id,
                    clan_name: clanData[clan_id].tag,
                    color: clanData[clan_id].color,
                    icon: clanData[clan_id].emblems && clanData[clan_id].emblems.x64.wot,
                }));
                if (currentClan !== "NO CLAN") {
                    clanList.unshift({
                        clan_id: currentClan.clan.clan_id,
                        clan_name: currentClan.clan.tag,
                        color: currentClan.clan.color,
                        joined_at: currentClan.joined_at,
                        icon: currentClan.clan.emblems.x64.wot,
                        role: currentClan.role,
                    });
                }
                setClanList(clanList);
            });
    }, [server, currentClan, data]);

    let clanInfo = <Loader frog />;
    if (clanList) {
        clanInfo = clanList
            .filter((clan) => clan.clan_name)
            .map((clan, i) => <SingleClan key={i} clan={clan} server={server} />);
    } else if (data === "NO CLAN HISTORY") {
        clanInfo = <div>{strings.noData}</div>;
    }

    return (
        <Scrollbar noScrollX>
            <CustomTabs value={value} onChange={handleChange} aria-label="clan history">
                <CustomTab label={strings.clanHistory} />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <div
                    style={{
                        padding: "10px 0px 0px 10px",
                        color: "rgb(220, 220, 220)",
                    }}
                >
                    <Grid container spacing={1}>
                        {clanInfo}
                    </Grid>
                </div>
            </TabPanel>
        </Scrollbar>
    );
}
