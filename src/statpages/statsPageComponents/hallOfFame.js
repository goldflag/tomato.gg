// NPM
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import LocalizedStrings from "react-localization";

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

const { formatString, ...strings } = new LocalizedStrings({
    en: {
        hof: "HALL OF FAME",
        subTitle: "60 DAYS | MINIMUM {0} BATTLES | VEHICLES TIER 6+",
        tankRankings: "Tank Rankings",
        betterThan: "Better than {0}%",
        moreThan: "More than {0}%",
        unranked: "Play {0} more battles in tanks of tier 6 or higher to enter the Hall of Fame",
        unrankedTank: "Play {0} more battles to enter rankings",
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
    frags: strings.longFrags,
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
                    {formatString(strings.betterThan, (100 - (tank.rank * 100) / tank.total).toFixed(2))}%
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
