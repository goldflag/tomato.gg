// NPM
import React, { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import { serverConv } from "Data/conversions";
import { ServerContext } from "Context";
import { Loader, FullPageTableWrapper, Info } from "Components";
import { FilterButtonGroup, FilterButton } from "Components/tableFilters";
import RecentTanksAvgTable from "./recentTankStatsComponents/RecentTanksAvgTable";
import { useURLState } from "Functions/hooks";
import { commonStrings } from "Data/localizations";
import Reload from "Ads/reload";
import { AdsContainer } from "Ads/adsContainer";
const backend = process.env.REACT_APP_BACKEND;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        title: "{0} Recent Tank Stats",
        clickRow: "Click on a row to view detailed server-wide tank performance and leaderboards",
        error: "Sorry, recent tank stats could not be loaded.",
    },
    cs: {
        title: "{0} Nedávné statistiky vozidla",
        clickRow: "Kliknutím na řádek zobrazíte podrobné serverové žebříčky vozidla a jeho statistiky",
        error: "Omlouváme se, nedávné statistiky vozidla nelze načíst.",
    },
    de: {
        title: "{0} Aktuelle Panzerstatistiken",
        clickRow: "Klicke auf eine Zeile um detaillierte, serverweite Panzerstatistiken und Bestenlisten zu sehen",
        error: "Entschuldigung, aktuelle Panzerstatistiken konnten nicht geladen werden.",
    },
    es: {
        title: "{0} Estadísticas Recientes del Tanque",
        clickRow: `Haga clic en una fila para ver el rendimiento y las tablas de 
        clasificación detallados de los tanques en todo el servidor.`,
        error: "Lo siento, las estadísticas recientes del tanque no se pudieron cargar.",
    },
    fr: {
        title: "Stats Récentes Chars {0}",
        clickRow: `Cliquez sur une ligne pour voir les performances détaillées des joueurs sur 
        le serveur et les classements pour un char`,
        error: "Désolé, les statistiques récentes du char n'ont pas pu être chargées.",
    },
    ko: {
        title: "{0} 최근 전차 통계",
        clickRow: "더 디테일한 서버의 전차통계와 리더보드를 보고 싶으면 줄을 확장하세요.",
        error: "죄송합니다. 최근 전차 통계를 불러오지 못 했습니다.",
    },
    hr: {
        title: "{0} Nedavne Statistike Tenkova",
        clickRow: "Kliknite red da biste pogledali detaljne performanse tenkova na cijelom poslužitelju i ljestvici",
        error: "Žao nam je, nedavna statistika tenkova nije se mogla učitati.",
    },
    pl: {
        title: "Bieżące Statystyki Czołgów na {0}",
        clickRow: "Kliknij na rząd żeby wyświetlić szczegółowe wskaźniki serwerowej efektywności czołgu oraz rankingi",
        error: "Przepraszamy, wystąpił błąd przy ładowaniu bieżących statystyk czołgu.",
    },
    ru: {
        title: "{0} Недавняя статистика танков",
        clickRow: `Щелкните строку, чтобы просмотреть подробные сведения о 
        производительности танков на сервере и списки лидеров.`,
        error: "К сожалению, недавнюю статистику танка загрузить не удалось.",
    },
    tr: {
        title: "{0} Son Tank İstatistikleri",
        clickRow: `Ayrıntılı sunucu çapında tank performansını ve 
        liderlik tablosunu görüntülemek için bir satıra tıklayın`,
        error: "Üzgünüm, son tank istatistikleri yüklenemedi.",
    },
    zh: {
        title: "{0} 近期戰車數據",
        clickRow: "點擊以查看伺服器內戰車表現與排名",
        error: "很抱歉，近期數據目前無法讀取。",
    },
});

const filters = {
    time: [
        { value: 3, label: formatString(commonStrings.days, 3) },
        { value: 7, label: formatString(commonStrings.days, 7) },
        { value: 14, label: formatString(commonStrings.days, 14) },
        { value: 30, label: formatString(commonStrings.days, 30) },
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

export default function RecentLeaderboards() {
    const { server } = useContext(ServerContext);
    const [data, setData] = useState("loading");
    const [time, setTime] = useURLState("time", 60);

    useEffect(() => {
        setData("loading");
        fetch(`${backend}/api/recenttanks/${server}/${time}`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [server, time]);

    useEffect(() => {
        Reload();
    }, []);

    const content = (
        <div style={{ minWidth: "0" }}>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {formatString(strings.title, serverConv[server])}
                </span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1rem",
                        color: "rgb(150,150,150)",
                    }}
                >
                    {strings.clickRow}
                </span>
                <br />
                <ButtonFilterBar
                    options={filters.time}
                    filterValue={time}
                    setFilterValue={setTime}
                    ariaLabel={strings.timeFilter}
                />
            </Info>

            {typeof data !== "string" ? (
                <RecentTanksAvgTable data={data} />
            ) : data === "loading" ? (
                <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />
            ) : (
                <h2>{strings.error}</h2>
            )}
        </div>
    );

    return (
        <>
            <Helmet>
                <title>{formatString(strings.title, serverConv[server])} - Tomato.gg</title>
            </Helmet>
            <MediaQuery maxWidth={1000}>
                <FullPageTableWrapper columns={"auto"}>
                    <div>{content}</div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1001} maxWidth={1799}>
                <FullPageTableWrapper columns={"auto 180px"}>
                    <div>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <div id="nn_sky2"></div>
                            <div id="nn_sky1"></div>
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
            <MediaQuery minWidth={1800}>
                <FullPageTableWrapper columns={"180px auto 180px"}>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <div id="nn_sky1"></div>
                        </AdsContainer>
                    </div>
                    <div>{content}</div>
                    <div>
                        <AdsContainer flexDir={"column"}>
                            <div id="nn_sky2"></div>
                        </AdsContainer>
                    </div>
                </FullPageTableWrapper>
            </MediaQuery>
        </>
    );
}
