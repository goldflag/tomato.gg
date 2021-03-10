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
import { Capital, commonStrings } from "Data/localizations";

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

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        vehicleTier: "In Vehicles Tier {0}+",
        typeFilter: "set leaderboard type",
        tierFilter: "set minimum tank tier",
        timeFilter: "set time period",
        error: "Sorry, there was an error loading that leaderboard.",
    },
    cs: {
        vehicleTier: "Ve vozidlech úrovně {0}+",
        typeFilter: "vyberte druh žebříčku",
        tierFilter: "vyerte minimální úroveň vozidla",
        timeFilter: "vyberte období",
        error: "Omlouváme se, při načítání žebříčku se vyskytla chyba.",
    },
    de: {
        vehicleTier: "In Fahrzeugen Tier {0}+",
        typeFilter: "setze Typ der Bestenliste",
        tierFilter: "setze minimales Panzer Tier",
        timeFilter: "setze Zeitraum",
        error: "Entschuldigung, es ist ein Fehler beim Laden der Bestenliste aufgetreten.",
    },
    es: {
        vehicleTier: "En Vehículos Tier {0}+",
        typeFilter: "establecer el tipo de tabla de clasificación",
        tierFilter: "establecer el tier mínimo del tanque",
        timeFilter: "establecer periodo de tiempo",
        error: "Lo siento, hubo un error al cargar esa tabla de clasificación",
    },
    fr: {
        vehicleTier: "En Véhicule rang {0}+",
        typeFilter: "Choisir le type de classement",
        tierFilter: "Choisir le rang minimum",
        timeFilter: "Choisir la période",
        error: "Désolé, une erreur s'est produite lors du chargement du classement.",
    },
    pl: {
        vehicleTier: "W pojazdach poziomu {0}+",
        typeFilter: "ustaw typ rankingu",
        tierFilter: "ustaw minimalny poziom czołgu",
        timeFilter: "ustaw przedział czasowy",
        error: "Przepraszamy, wystąpił błąd przy ładowaniu rankingu.",
    },
    tr: {
        vehicleTier: "Seviye {0}+ tanklar içinde",
        typeFilter: "tablo tipini ayarla",
        tierFilter: "minimum tank seviyesini ayarla",
        timeFilter: "zaman dilimini ayarla",
        error: "Üzgünüm, en iyiler tablosu yüklenirken sorun oluştu.",
    },
    zh: {
        vehicleTier: "{0}階以上",
        typeFilter: "設定排行榜類型",
        tierFilter: "設定最低戰車階級",
        timeFilter: "設定期間",
        error: "抱歉，排行榜暫時發生錯誤。",
    },
});

const filters = {
    type: [
        { value: "wn8", label: commonStrings.wn8 },
        { value: "winrate", label: Capital(commonStrings.longWR) },
        { value: "kd", label: commonStrings.longKD },
        { value: "dpg", label: commonStrings.dpg },
    ],
    tier: [
        { value: 6, label: formatString(strings.vehicleTier, 6) },
        { value: 8, label: formatString(strings.vehicleTier, 8) },
    ],
    time: [
        // {value: 30, label: formatString(commonStrings.days, 30) },
        { value: 60, label: formatString(commonStrings.days, 60) },
    ],
};

const ButtonFilterBar = ({ options, filterValue, setFilterValue, ariaLabel }) => (
    <FilterButtonGroup variant="text" aria-label={"ariaLabel"}>
        {options.map(({ value, label }, i) => (
            <FilterButton
                key={i}
                selected={value === filterValue}
                onClick={() => {
                    setFilterValue(value);
                }}
            >
                {label}
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
