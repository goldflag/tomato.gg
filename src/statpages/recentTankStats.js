// NPM
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import LocalizedStrings from "react-localization";

// LOCAL
import { serverConv } from "Data/conversions";
import { ServerContext } from "Context";
import { Loader, FullPageTableWrapper, Info } from "Components";
import { FilterButtonGroup, FilterButton } from "Components/tableFilters";
import RecentTanksAvgTable from "./recentTankStatsComponents/RecentTanksAvgTable";
import { useURLState } from "Functions/hooks";

const backend = process.env.REACT_APP_BACKEND;

const Filters = styled.div`
    // padding: 10px;
    // margin: -15px;
`;

const { formatString, ...strings } = new LocalizedStrings({
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
    fr: {
        title: "Stats Récentes Chars {0}",
        clickRow: `Cliquez sur une ligne pour voir les performances détaillées des joueurs sur 
        le serveur et les classements pour un char`,
        error: "Désolé, les statistiques récentes du char n'ont pas pu être chargées.",
    },
    pl: {
        title: "Bieżące Statystyki Czołgów na {0}",
        clickRow: "Kliknij na rząd żeby wyświetlić szczegółowe wskaźniki serwerowej efektywności czołgu oraz rankingi",
        error: "Przepraszamy, wystąpił błąd przy ładowaniu bieżących statystyk czołgu.",
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

    return (
        <FullPageTableWrapper>
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
                <Filters>
                    <FilterButtonGroup>
                        {/* <FilterButton
                            key={30}
                            selected={time === 30}
                            onClick={() => {
                                setTime(30);
                            }}
                        >
                            30 Days
                        </FilterButton> */}
                        <FilterButton
                            key={60}
                            selected={time === 60}
                            onClick={() => {
                                setTime(60);
                            }}
                        >
                            60 Days
                        </FilterButton>
                    </FilterButtonGroup>
                </Filters>
            </Info>

            {typeof data !== "string" ? (
                <RecentTanksAvgTable data={data} />
            ) : data === "loading" ? (
                <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />
            ) : (
                <h2>{strings.error}</h2>
            )}
        </FullPageTableWrapper>
    );
}
