// NPM
import React, { useState } from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import Scrollbar from "react-scrollbars-custom";
import LocalizedStrings from "Functions/localizedStrings";
import MediaQuery from "react-responsive";

// LOCAL
import { WN8Color, WRColor } from "Styling/colors";
import { Capital, commonStrings } from "Data/localizations";
import BubblePlot from "./bubblePlot";
import { CustomTabs, CustomTab } from "../../components/customTabs";
import Ad from "Ads/ads";

const Name = styled.div`
    display: flex;
    justify-content: flex-start;
    grid-template-columns: 100px auto;
    margin: -1rem -0.5rem;
`;
const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 0rem -0.5rem 0.5rem;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
`;
const BottomGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: -0.5rem 0rem;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const SplitSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0rem -0.5rem 1rem -0.5rem;
    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

const Description = styled.div`
    font-size: 0.5rem;
    background-color: rgba(40, 40, 70, 0.5);
    margin: 0rem 0.5rem;
`;

const StatBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ val, stat }) =>
        stat === "WN8" ? WN8Color(val) : stat === "winrate" ? WRColor(val) : "rgba(70, 70, 110, 0.5)"};
    padding: 1rem;
    margin: 0.5rem 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    :hover {
        backdrop-filter: brightness(1.5);
    }
`;
const StatBoxLabel = styled.div`
    font-size: 0.9rem;
    font-weight: 400;
    color: rgb(200, 200, 200);
`;
const ClanName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem;
    font-size: 1.5rem;
`;
const ClanIcon = styled.img`
    margin: 1rem;
    max-width: 100px;
`;

const Bubble = styled.div`
    height: 510px;
    background-color: rgba(40, 40, 70, 0.4);
    backdrop-filter: blur(7px);
    color: rgb(30, 30, 30);
`;

const AdsContainer = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
`;

const Delta = styled(({ delta, ...props }) =>
    delta ? (
        <span {...props}>
            ({delta > 0 ? "+" : ""}
            {delta})
        </span>
    ) : null
)`
    color: ${({ delta }) => (delta > 0 ? "rgb(34, 199, 66)" : "rgb(255, 41, 94)")};
`;

const RankDelta = ({ rank, delta }) =>
    rank ? (
        <span>
            {Capital(commonStrings.rank)}: {rank} <Delta delta={delta} />
        </span>
    ) : null;

const Percent = ({ value, total }) => (total > 0 ? ((value * 100) / total).toFixed(2) + "%" : "-");

const StatCard = ({ stat, label, value, rankKey, total, rankings }, i) => (
    <StatBox val={value} stat={stat}>
        <StatBoxLabel>{label}</StatBoxLabel>
        {total ? null : rankKey ? rankings[rankKey].value : value}
        {rankKey && rankings[rankKey].rank && (
            <StatBoxLabel>
                <RankDelta rank={rankings[rankKey].rank} delta={rankings[rankKey].rank_delta} />
            </StatBoxLabel>
        )}
        {total && (
            <>
                <Percent value={value} total={total} />
                <StatBoxLabel>
                    {value}/{total}
                </StatBoxLabel>
            </>
        )}
    </StatBox>
);

const { formatString, ...strings } = LocalizedStrings({
    en: {
        created: "Created: {0}",
        recentTab: "RECENT",
        recent: "Recent {0}",
        overallTab: "OVERALL",
        overall: "Overall {0}",
        clanRating: "Clan Rating",
        avgDaily: "Avg. Daily Battles",
        avgPR: "Avg. PR",
        playerCount: "Players",
        globalMap: "Global Map {0}",
        provinces: "Provinces",
        strongholds: "SH {0} {1}",
    },
    cs: {
        created: "Klan založen: {0}",
        recentTab: "NEDÁVNÉ",
        recentWN8: "Nedávné {0}",
        recentWR: "Nedávná {0}",
        overallTab: "CELKOVÉ",
        overallWR: "Celková {0}",
        overallWN8: "Celkové {0}",
        clanRating: "Hodnocení klanu",
        avgDaily: "Průměrně bitev za den",
        avgPR: "Průměrné osobní hodnocení",
        playerCount: "hráčů",
        globalMap: "Globální mapy {0}",
        provinces: "Provincií",
        strongholds: "SH {0} {1}",
    },
    de: {
        created: "Erstellt: {0}",
        recentTab: "AKTUELL",
        recent: "aktuelle {0}",
        overallTab: "GESAMT",
        overall: "gesamt {0}",
        clanRating: "Clan Wertung",
        avgDaily: "Durchschnittliche Gefechte pro Tag", // alternative "Ø-Gefechte pro Tag", "Ø-Gefechte/Tag"
        avgPR: "Durchschnittliche PR", // alternative "Ø-PR"
        playerCount: "Spieler",
        globalMap: "Weltkarte  {0}",
        provinces: "Provinzen",
        strongholds: "BW {0} {1}",
    },
    es: {
        created: "Creado: {0}",
        recentTab: "RECIENTE",
        recent: "{0} Reciente", // WR, WN8
        overallTab: "TOTAL",
        overall: "{0} Total", // WR, WN8
        clanRating: "Clasificación de Clan",
        avgDaily: "Promedio de Batallas Diarias",
        avgPR: "Promedio de Clasificación Personal",
        playerCount: "Jugadores",
        globalMap: "{0} en Mapa Global", // WR, ELO
        provinces: "Provincias",
        strongholds: "{1} de Fortaleza {0}", // {0} = Tier, {1} = WR, ELO
    },
    fr: {
        created: "Créé: {0}",
        recentTab: "RÉCENT",
        recent: "{0} Récent",
        overallTab: "GLOBAL",
        overall: "{0} Global",
        clanRating: "Côte du Clan",
        avgDaily: "Batailles Quotidiennes Moyennes",
        avgPR: "Côte Moyenne",
        playerCount: "Joueurs",
        globalMap: "{0} Carte Globale",
        provinces: "Provinces",
        strongholds: "{1} Bastion {0}",
    },
    ko: {
        created: "생성일{0}",
        recentTab: "최근",
        recent: "최근 {0}",
        overallTab: "전체",
        overall: "전체 {0}",
        clanRating: "클랜 레이팅",
        avgDaily: "하루 평균전투 수",
        avgPR: "평균 개인성적",
        playerCount: "클랜원",
        globalMap: "세계지도 {0}",
        provinces: "영토",
        strongholds: "원정 {0} {1}",
    },
    hr: {
        created: "Kreirano: {0}",
        recentTab: "NEDAVNO",
        recent: "Nedavno {0}",
        overallTab: "UKUPNO",
        overall: "Ukupno {0}",
        clanRating: "Klanska Ocjena",
        avgDaily: "Prosječno Dnevnih Bitaka",
        avgPR: "Prosječni Osobna Ocjena",
        playerCount: "Igrači",
        globalMap: "Globalna Karta {0}",
        provinces: "Provincija",
        strongholds: "SH {0} {1}",
    },
    pl: {
        created: "Stworzone: {0}",
        recentTab: "BIEŻĄCE",
        recent: "Bieżący {0}",
        overallTab: "OGÓLNE",
        overall: "Ogólny {0}",
        clanRating: "Ocena Klanu",
        avgDaily: "Średnio bitew dziennie",
        avgPR: "Średnia Ocena Osobista",
        playerCount: "Gracze",
        globalMap: "{0} Mapy Globalnej",
        provinces: "Prowincje",
        strongholds: "Twierdza {0} {1}",
    },
    ru: {
        created: "Созданный: {0}",
        recentTab: "НЕДАВНИЙ",
        recent: "НЕДАВНИЙ {0}",
        overallTab: "ОБЩИЙ",
        overall: "ОБЩИЙ {0}",
        clanRating: "Рейтинг клана",
        avgDaily: "Средние ежедневные бои",
        avgPR: "Средний личный рейтинг",
        playerCount: "Игроков",
        globalMap: "Глобальная карта {0}",
        provinces: "Провинции",
        strongholds: "SH {0} {1}",
    },
    tr: {
        created: "Oluşturuldu: {0}",
        recentTab: "SON ZAMANLAR",
        recent: "Son zamanlar {0}",
        overallTab: "GENEL",
        overall: "Genel {0}",
        clanRating: "Klan Reytingi",
        avgDaily: "Ort. Günlük Savaşlar",
        avgPR: "Ort. PR",
        playerCount: "Oyuncular",
        globalMap: "Dünya Haritası {0}",
        provinces: "Bölgeler",
        strongholds: "Kale {0} {1}",
    },
    zh: {
        created: "創立: {0}",
        recentTab: "最近",
        recent: "最近 {0}",
        overallTab: "整體",
        overall: "整體 {0}",
        clanRating: "公會評價",
        avgDaily: "平均每日戰鬥",
        avgPR: "平均評價",
        playerCount: "玩家",
        globalMap: "世界地圖 {0}",
        provinces: "領地",
        strongholds: "前哨 {0} {1}",
    },
});

export default function ClanTopStats({
    image,
    tag,
    name,
    created_at,
    motto,
    color,
    members_count,
    overallWN8,
    overallWinrate,
    recentWN8,
    recentWinrate,
    rankings,
    description_html,
    globalMap,
    strongholdX,
    skirmish,
    bubbleRecent,
    bubbleOverall,
}) {
    const [bubbleTab, setBubbleTab] = useState(0);

    const handleChange = (_, newValue) => setBubbleTab(newValue);
    const topCards = [
        {
            stat: "WN8",
            label: formatString(strings.recentWN8 || strings.recent, commonStrings.wn8),
            value: parseInt(recentWN8),
        },
        {
            stat: "winrate",
            label: formatString(strings.recentWR || strings.recent, Capital(commonStrings.longWR)),
            value: recentWinrate.toFixed(2) + "%",
        },
        {
            stat: "WN8",
            label: formatString(strings.overallWN8 || strings.overall, commonStrings.wn8),
            value: parseInt(overallWN8),
        },
        {
            stat: "winrate",
            label: formatString(strings.overallWR || strings.overall, Capital(commonStrings.longWR)),
            value: overallWinrate.toFixed(2) + "%",
        },
        {
            label: strings.clanRating,
            rankKey: "efficiency",
        },
        {
            label: strings.avgDaily,
            rankKey: "battles_count_avg_daily",
        },
        {
            label: strings.avgPR,
            rankKey: "global_rating_weighted_avg",
        },
        {
            label: strings.playerCount,
            value: members_count,
        },
    ];

    const bottomCards = [
        {
            label: formatString(strings.globalMap, "ELO"),
            rankKey: "gm_elo_rating_10",
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " X", "ELO"),
            rankKey: "fb_elo_rating_10",
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " VIII", "ELO"),
            rankKey: "fb_elo_rating_8",
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " VI", "ELO"),
            rankKey: "fb_elo_rating_6",
        },
        {
            label: formatString(strings.globalMap, "WR"),
            value: globalMap.wins_10_level,
            total: globalMap.battles_10_level,
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " X", "WR"),
            value: strongholdX.win_10,
            total: strongholdX.total_10,
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " VIII", "WR"),
            value: skirmish.win_8,
            total: skirmish.total_8,
        },
        {
            label: formatString(strings.strongholds, Capital(commonStrings.tier) + " VI", "WR"),
            value: skirmish.win_6,
            total: skirmish.total_6,
        },
        {
            label: strings.provinces,
            value: globalMap.provinces_count,
        },
        {
            label: "28D " + formatString(strings.strongholds, Capital(commonStrings.tier) + " X", "WR"),
            value: strongholdX.win_10_in_28d,
            total: strongholdX.total_10_in_28d,
        },
        {
            label: "28D " + formatString(strings.strongholds, Capital(commonStrings.tier) + " VIII", "WR"),
            value: skirmish.win_8_in_28d,
            total: skirmish.total_8_in_28d,
        },
        {
            label: "28D " + formatString(strings.strongholds, Capital(commonStrings.tier) + " VI", "WR"),
            value: skirmish.win_6_in_28d,
            total: skirmish.total_6_in_28d,
        },
    ];

    const date_created = new Date(created_at * 1000);
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };

    return (
        <div style={{ marginBottom: "1rem" }}>
            <Name>
                <ClanIcon src={image} alt={tag} />
                <ClanName>
                    <span>
                        {" "}
                        <span style={{ color: color, textShadow: "1px 1px 1px rgba(0, 0, 0, 0.75)" }}>
                            [{tag}]
                        </span>{" "}
                        {name}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "rgb(200, 200, 200)", padding: "0.4rem" }}>
                        {formatString(
                            strings.created,
                            date_created.toLocaleDateString(navigator.languages[0], dateOptions)
                        )}
                    </span>
                    <span style={{ fontSize: "0.9rem" }}>{motto}</span>
                </ClanName>
            </Name>
            <TopGrid>
                {topCards.map((props, i) => (
                    <StatCard rankings={rankings} {...props} key={i} />
                ))}
            </TopGrid>
            <SplitSection>
                <Description>
                    <Scrollbar noScrollX>
                        <div style={{ padding: "1rem" }}>{parse(description_html)}</div>
                    </Scrollbar>
                </Description>
                <BottomGrid>
                    {bottomCards.map((props, i) => (
                        <StatCard rankings={rankings} {...props} key={i} />
                    ))}
                </BottomGrid>
            </SplitSection>
            <AdsContainer>
                <MediaQuery maxWidth={999}>
                    <Ad slot={"main_stats_banner"} styles={"300x50"} />
                </MediaQuery>
                <MediaQuery minWidth={1000}>
                    <Ad slot={"main_stats_banner"} styles={"728x90"} />
                </MediaQuery>
            </AdsContainer>
            <CustomTabs value={bubbleTab} onChange={handleChange} aria-label="ant example">
                <CustomTab label={strings.overallTab} />
                <CustomTab label={strings.recentTab} />
            </CustomTabs>
            <Bubble>
                {/* <Scrollbar noScrollY> */}
                <BubblePlot mode={bubbleTab} data={bubbleTab === 0 ? bubbleOverall : bubbleRecent} />
                {/* </Scrollbar> */}
            </Bubble>
        </div>
    );
}
