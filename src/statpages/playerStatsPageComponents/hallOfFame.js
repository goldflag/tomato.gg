// NPM
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { Loader } from "Components";
import { tierConv } from "Data/conversions";
import { rankColor } from "Functions/colors";
import { Capital, commonStrings } from "Data/localizations";

const Styles = styled.div`
    font-family: Roboto Mono;
    font-size: 0.8rem;
`;

const TanksTitle = styled.div`
    text-align: center;
`;

const Overall = styled.div`
    max-width: 1700px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const OverallTop = styled.div`
    display: grid;
    grid-template-areas: "dpg title wn8";
    grid-template-columns: 0.9fr 1.2fr 0.9fr;
    grid-template-rows: 240px;

    @media screen and (max-width: 1000px) {
        grid-template-areas:
            "title"
            "dpg" 
            "wn8";
        grid-template-columns: 1fr;
        grid-template-rows: 200px;
                            150px;
    }
`;

const OverallBottom = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 230px;
    grid-template-areas: "battles dr winrate kd frags";

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 150px;
    }
`;

const TopGridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    grid-area: ${({ slot }) => slot};

    .title {
        font-size 3rem;
        font-weight: 800;
    }

    .subtitle {
        font-size 1rem;
    }
    
    @media screen and (max-width: 1000px) {
        .title {
            font-size 2.5rem;
        }
        .subtitle {
            font-size: .75rem;
        }
    }
`;

const OverallItem = styled(TopGridItem)`
    color: rgb(240, 240, 240);
    padding: 1rem 0.5rem;
    transition: 0.4s ease;
    box-shadow: 0px 2px 3px rgb(30, 30, 30);
    background-color: rgb(60, 60, 80, 0.5);
    font-size: 1.5rem;
    backdrop-filter: blur(7px);

    :hover {
        background-color: rgba(201, 26, 61, 0.5);
    }

    @media screen and (max-width: 1000px) {
        margin: 0.5rem;
        padding: 0.5rem;
        font-size: 1rem;
    }
`;

const Value = styled.div`
    font-size: 3rem;
    font-weight: 500;
    @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
    }
`;

const BigLabel = styled.div`
    color: rgb(180, 180, 180);
    font-size: 1rem;
    margin-top: -2px;
    margin-bottom: 5px;
    @media screen and (max-width: 1000px) {
        font-size: 0.7rem;
    }
`;

const BigPercentile = styled.div`
    color: rgb(255, 255, 255);
    background-color: ${({ rank, total }) => rankColor(100 - (rank * 100) / total)};
    font-weight: 400;
    padding: 4px;
    text-align: center;
    width: 150px;
    border-radius: 10px;
    font-size: 0.7rem;
    margin: 0.3rem;
    @media screen and (max-width: 1000px) {
        width: 140px;
    }
`;

const UnrankedNotice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5rem;
    color: rgb(240, 240, 240);
    padding: 1rem;
    transition: 0.4s ease;
    box-shadow: 0px 2px 3px rgb(30, 30, 30);
    background-color: rgb(40, 40, 40, 0.4);
    font-size: 1.5rem;
    backdrop-filter: blur(7px);
`;

const TanksContainer = styled.div`
    height: 320px;
    margin-top: 1rem;
`;

const Tanks = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.4rem;
    color: rgb(240, 240, 240);
    padding: 0.4rem;
    min-width: 200px;
    max-width: 200px;
    height: 290px;
    transition: 0.4s ease;
    box-shadow: 0px 2px 3px rgb(30, 30, 30);
    backdrop-filter: blur(7px);

    background-color: ${({ background }) => background};
    :hover {
        background-color: ${({ backgroundHover }) => backgroundHover};
    }
    @media screen and (max-width: 1000px) {
        min-width: 180px;
    }
`;

const Val = styled.div`
    color: rgb(255, 255, 255);
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0rem;
`;

const Label = styled.div`
    color: rgb(180, 180, 180);
    font-size: 0.6rem;
    margin-bottom: 0rem;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.1rem 1rem;
`;

const DPG = styled.div`
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 0.4rem;
`;

const Percentile = styled.div`
    color: rgb(255, 255, 255);
    font-weight: 400;
    background-color: ${({ rank, total }) => rankColor(100 - (rank * 100) / total)};
    padding: 5px;
    text-align: center;
    width: 150px;
    height: 25px;
    border-radius: 15px;
    font-size: 0.7rem;
    margin: 0.5rem;
`;

const Unrank = styled.div`
    color: rgb(180, 180, 180);
    font-weight: 400;
    text-align: center;
    font-size: 0.7rem;
    margin: 0.4rem;
`;

const Image = styled.div`
    height: 90px;
    width: 144px;
    transition: 0.4s ease;
`;

const Name = styled.div`
    margin-top: 0.3rem;
    color: rgb(255, 255, 255);
`;

const ConditionalLink = ({ makeLink, ...props }) => {
    if (makeLink) return <Link {...props} />;
    return <span {...props} />;
};

const { formatString, ...strings } = LocalizedStrings({
    en: {
        hof: "HALL OF FAME",
        subTitle: "60 DAYS | MINIMUM {0} BATTLES | VEHICLES TIER 6+",
        tankRankings: "Tank Rankings",
        betterThan: "Better than {0}%",
        moreThan: "More than {0}%",
        unranked: "Play {0} more battles in tanks of tier 6 or higher to enter the Hall of Fame",
        unrankedTank: "Play {0} more battles to enter rankings",
    },
    cs: {
        hof: "SÍŇ SLÁVY",
        subTitle: "60 DNÍ | MINIMÁLNĚ {0} BITEV | ÚROVEŇ VOZDILA 6+",
        tankRankings: "Hodnocení vozidel",
        betterThan: "Lepší než {0}%",
        moreThan: "Více než {0}%",
        unranked: "Odehrajte ještě {0} bitev ve vozidlech úrovně 6 nebo vyšší, abyste vstoupili do Síně slávy",
        unrankedTank: "Odehrajte ještě {0} bitev, abyste vstoupili do žebříčku",
    },
    de: {
        hof: "HALL OF FAME",
        subTitle: "60 TAGE | MINIMUM {0} GEFECHTE | FAHRZEUG TIER 6+",
        tankRankings: "PANZER Rankings",
        betterThan: "Besser als {0}%",
        moreThan: "Mehr als {0}%",
        unranked: "Spiel {0} mehr Gefechte in Panzern von Tier 6 oder höher um in die Hall of Fame zu kommen",
        unrankedTank: "Spiel {0} mehr Gefechte um in die Rankings zu kommen",
    },
    es: {
        hof: "SALÓN DE LA FAMA",
        subTitle: "60 DÍAS | {0} BATALLAS MÍNIMAS | VEHÍCULOS TIER 6+",
        tankRankings: "Clasificaciones del Tanque",
        betterThan: "Mejor que el {0}%",
        moreThan: "Más del {0}%",
        unranked: "Juega {0} batallas más en tanques de tier 6 o superior para ingresar la Salón de la Fama",
        unrankedTank: "Juega {0} batallas más para ingresar las clasificaciones",
    },
    fr: {
        hof: "PANTHÉON",
        subTitle: "60 JOURS | MINIMUM {0} BATAILLES | VEHICULES RANG 6+",
        tankRankings: "Classement Chars",
        betterThan: "Meilleur que {0}%",
        moreThan: "Plus que {0}%",
        unranked: "Jouez {0} batailles de plus dans des chars rang 6 ou plus pour entrer dans le Panthéon",
        unrankedTank: "Jouez {0} batailles de plus pour entrer dans le classement",
    },
    ko: {
        hof: "명예의 전당",
        subTitle: "60일 | 최소 {0} 전투 | 전차 6티어+",
        tankRankings: "전차 랭킹",
        betterThan: "상위{0}%",
        moreThan: "상위 {0}%",
        unranked: "명예의 전당에 들기위해 6티어 이상 전차로 {0}번 전투 더 치르세요.",
        unrankedTank: " 랭킹에 들기 위해{0}번 전투 더 치르세요.",
    },
    hr: {
        hof: "KUĆA SLAVNIH",
        subTitle: "60 DANA | MINIMUM {0} BITAKA | VOZILA RAZINE 6+",
        tankRankings: "Poredak Tenkova",
        betterThan: "Bolji od {0}%",
        moreThan: "Više od {0}%",
        unranked: "Odigrajte još {0} borbi u tenkovima razine 6 ili više da biste ušli u Kuću slavnih",
        unrankedTank: "Odigrajte još {0} borbi za ulazak na ljestvicu",
    },
    pl: {
        hof: "ALEJA SŁAW",
        subTitle: "60 DNI | MINIMUM {0} BITEW | POJAZDY POZIOMU 6+",
        tankRankings: "Rankingi Czołgów",
        betterThan: "Lepiej niż {0}%",
        moreThan: "Więcej niż {0}%",
        unranked: "Zagraj jeszcze {0} bitew w czołgach poziomu 6 lub wyżej aby wejść do Alei Sław",
        unrankedTank: "Zagraj jeszcze {0} bitew aby wejść do rankingów",
    },
    ru: {
        hof: "ЗАЛ СЛАВЫ",
        subTitle: "60 ДНЕЙ | МИНИМУМ {0} СРАЖЕНИЙ | ТАНК УРОВНЯ 6+",
        tankRankings: "Рейтинг танков",
        betterThan: "Лучше чем {0}%",
        moreThan: "Больше, чем {0}%",
        unranked: "Сыграйте еще {0} боёв на танках 6 уровня и выше, чтобы попасть в Зал славы.",
        unrankedTank: "Сыграйте еще {0} боёв, чтобы войти в рейтинг",
    },
    tr: {
        hof: "ŞÖHRET SALONU",
        subTitle: "60 GÜN | MİNİMUM {0} SAVAŞ | 6+ SEVİYE TANKLARDA",
        tankRankings: "Tank Sıralamaları",
        betterThan: "{0}%'den daha iyi",
        moreThan: "{0}%'den daha fazla",
        unranked: "Şöhret Salonuna girmek için 6 veya daha yüksek seviye tanklarla en az {0} kadar savaş yap",
        unrankedTank: "Sıralamaya girmek için en az {0} kadar savaş yap",
    },
    zh: {
        hof: "名人堂",
        subTitle: "60 天 | 最少 {0} 場 | 車輛階級 6+",
        tankRankings: "車輛評價",
        betterThan: "高過 {0}% 玩家",
        moreThan: "高過 {0}% 玩家",
        unranked: "駕駛最低六階車參與 {0} 場戰鬥以進入名人堂",
        unrankedTank: "再 {0} 場戰鬥以進入排名",
    },
});

const titles = {
    dpg: Capital(commonStrings.longDPG),
    wn8: commonStrings.wn8,
    battles: Capital(commonStrings.battles),
    dr: Capital(commonStrings.longDmgRatio),
    winrate: Capital(commonStrings.longWR),
    kd: Capital(commonStrings.longKD),
    frags: Capital(commonStrings.longFrags),
};

const percentile = (ranking, total) => (100 - (ranking * 100) / total).toFixed(2);

const StatCard = ({ slot, value, ranking, total, moreThan }) => (
    <OverallItem slot={slot}>
        <Value>{value}</Value>
        <BigLabel>{titles[slot]}</BigLabel>
        <BigPercentile rank={ranking} total={total}>
            {formatString(moreThan ? strings.moreThan : strings.betterThan, percentile(ranking, total))}
        </BigPercentile>
        {ranking}
        <BigLabel>{Capital(commonStrings.rank)}</BigLabel>
    </OverallItem>
);

export default function HallOfFame({ hofData, hofmainData, id }) {
    let topTanks = <Loader color={null} bottom={20} top={20} />;

    if (hofData && hofmainData) {
        const { top } = hofmainData;
        topTanks = (
            <Styles>
                <TanksTitle></TanksTitle>
                <Overall>
                    {top.battles.value >= 75 ? (
                        <>
                            <OverallTop>
                                <StatCard slot="dpg" {...top.dpg} total={top.total} />
                                <TopGridItem slot="title">
                                    <nobr className="title">{strings.hof}</nobr>
                                    <nobr className="subtitle">{formatString(strings.subTitle, 75)}</nobr>
                                    <div
                                        style={{
                                            marginTop: ".75rem",
                                            flex: "1",
                                            width: "100%",
                                            background: `url(${require("Assets/hof.png")}) no-repeat center / contain`,
                                        }}
                                    ></div>
                                </TopGridItem>
                                <StatCard slot="wn8" {...top.wn8} total={top.total} />
                            </OverallTop>
                            <OverallBottom>
                                <StatCard slot="battles" {...top.battles} total={top.total} moreThan />
                                <StatCard slot="dr" {...top.dmg_ratio} total={top.total} />
                                <StatCard slot="winrate" {...top.winrate} total={top.total} />
                                <StatCard slot="kd" {...top.kd} total={top.total} />
                                <StatCard slot="frags" {...top.frags} total={top.total} />
                            </OverallBottom>
                        </>
                    ) : (
                        <UnrankedNotice>{formatString(strings.unranked, 75 - top.battles.value)}</UnrankedNotice>
                    )}
                </Overall>
                <TankRankings userID={id} hofData={hofData} />
            </Styles>
        );
    }

    return topTanks;
}

const TankCard = ({ userID, tank }) => (
    <ConditionalLink
        makeLink={tank.rank && tank.rank <= 500}
        to={`/tank/${tank.tank_id}?rank=${tank.rank}&userID=${userID}`}
    >
        <Box background={"rgba(60, 60, 80, 0.5)"} backgroundHover={"rgba(201, 26, 61, 0.5)"}>
            <Image>
                <img src={tank.image} alt={tank.short_name} />
            </Image>
            <Name>
                {tierConv[tank.tier]} - {tank.short_name}
            </Name>
            <DPG>{tank.dpg}</DPG>
            <Label>{Capital(commonStrings.longDPG)}</Label>
            {tank.rank ? (
                <Percentile rank={tank.rank} total={tank.total}>
                    {formatString(strings.betterThan, (100 - (tank.rank * 100) / tank.total).toFixed(2))}
                </Percentile>
            ) : (
                <Unrank>{formatString(strings.unrankedTank, 25 - tank.battles)}</Unrank>
            )}
            <Grid>
                <GridItem>
                    <Val>{tank.rank || "-"}</Val>
                    <Label>{Capital(commonStrings.rank)}</Label>
                </GridItem>
                <GridItem>
                    <Val>{tank.battles}</Val>
                    <Label>{Capital(commonStrings.battles)}</Label>
                </GridItem>
                <GridItem>
                    <Val>{tank.wn8}</Val>
                    <Label>{commonStrings.wn8}</Label>
                </GridItem>
                <GridItem>
                    <Val>{tank.winrate}%</Val>
                    <Label>{Capital(commonStrings.longWR)}</Label>
                </GridItem>
            </Grid>
        </Box>
    </ConditionalLink>
);

const TankRankings = ({ userID, hofData }) => (
    <>
        <TanksTitle>
            <span style={{ fontSize: "2rem" }}>{strings.tankRankings}</span>
            <br />
            <span style={{ fontSize: "1rem" }}>{formatString(strings.subTitle, 25)}</span>
        </TanksTitle>
        <TanksContainer>
            <Scrollbar noScrollY>
                <Tanks>
                    {hofData.above.map((tank, i) => (
                        <TankCard key={i} tank={tank} userID={userID} ranked />
                    ))}
                    {hofData.below.map((tank, i) => (
                        <TankCard key={i} tank={tank} userID={userID} />
                    ))}
                </Tanks>
            </Scrollbar>
        </TanksContainer>
    </>
);
