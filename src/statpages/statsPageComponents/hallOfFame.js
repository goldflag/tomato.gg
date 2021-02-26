// NPM
import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import RSC from "react-scrollbars-custom";

// LOCAL
import { Loader } from "Components";
import { tierConv } from "Data/conversions";

const backend = process.env.REACT_APP_BACKEND;

function rankColor(rank) {
    if (rank < 8) return "#930D0D";
    else if (rank < 15) return "#CD3333";
    else if (rank < 30) return "#CC7A00";
    else if (rank < 45) return "#CCB800";
    else if (rank < 65) return "#849B24";
    else if (rank < 80) return "#4D7326";
    else if (rank < 90) return "#4099BF";
    else if (rank < 95) return "#3972C6";
    else if (rank < 98) return "#6844d4";
    else if (rank < 99) return "#522b99";
    else if (rank < 99.5) return "#411d73";
    else if (rank < 99.9) return "#310d59";
    else {
        return "#24073d";
    }
}

const Styles = styled.div`
    font-family: Roboto Mono;
    font-size: 0.8rem;

    .overall {
        max-width: 1700px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .overallTop {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 240px;
    }

    .overallBottom {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 230px;
    }

    .overallItem {
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
    }

    .value {
        font-size: 3rem;
        font-weight: 500;
    }

    .bigPercentile {
        color: rgb(255, 255, 255);
        font-weight: 400;
        padding: 5px;
        text-align: center;
        width: 170px;
        border-radius: 15px;
        font-size: 0.8rem;
        margin: 0.5rem;
    }

    .bigLabel {
        color: rgb(180, 180, 180);
        font-size: 1rem;
        margin-top: -2px;
        margin-bottom: 5px;
    }

    .overallItem:hover {
        background-color: rgba(201, 26, 61, 0.5);
    }

    .tanksContainer {
        height: 320px;
        margin-top: 1rem;
    }

    .tanksTitle {
        text-align: center;
    }

    .tanks {
        display: flex;
        flex-direction: row;
        min-width: 100%;
    }

    .box {
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
    }

    .abovebox {
        background-color: rgba(40, 40, 40, 0.4);
    }

    .underbox {
        background-color: rgba(20, 20, 20, 0.4);
    }

    .abovebox:hover {
        background-color: rgba(201, 26, 61, 0.5);
    }

    .underbox:hover {
        background-color: rgba(80, 80, 80, 0.5);
    }

    .box:hover .image {
        height: 100px;
        width: 160px;
    }

    .image {
        height: 90px;
        width: 144px;
        transition: 0.4s ease;
    }

    .name {
        margin-top: 0.3rem;
        color: rgb(255, 255, 255);
    }

    .dpg {
        color: rgb(255, 255, 255);
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 0.4rem;
    }

    .val {
        color: rgb(255, 255, 255);
        font-size: 0.8rem;
        font-weight: 500;
        margin-top: 0rem;
    }

    .label {
        color: rgb(180, 180, 180);
        font-size: 0.6rem;
        margin-bottom: 0rem;
    }

    .percentile {
        color: rgb(255, 255, 255);
        font-weight: 400;
        background-color: rgb(245, 191, 66);
        padding: 5px;
        text-align: center;
        width: 150px;
        height: 25px;
        border-radius: 15px;
        font-size: 0.7rem;
        margin: 0.5rem;
    }

    .unrank {
        color: rgb(180, 180, 180);
        font-weight: 400;
        text-align: center;
        font-size: 0.7rem;
        margin: 0.4rem;
    }

    .grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
    }

    .gridItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.1rem 1rem;
    }

    @media screen and (max-width: 1000px) {
        .overallTop {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 150px;
        }

        .overallBottom {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 150px;
        }

        .overallItem {
            margin: 0.5rem;
            padding: 0.5rem;
            font-size: 1rem;
        }

        .value {
            font-size: 1.5rem;
            font-weight: 500;
        }

        .bigPercentile {
            color: rgb(255, 255, 255);
            font-weight: 400;
            padding: 4px;
            text-align: center;
            width: 120px;
            border-radius: 10px;
            font-size: 0.6rem;
            margin: 0.3rem;
        }

        .bigLabel {
            color: rgb(180, 180, 180);
            font-size: 0.7rem;
            margin-top: -2px;
            margin-bottom: 5px;
        }

        .box {
            min-width: 180px;
        }
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

const ConditionalLink = ({ makeLink, ...props }) => {
    if (makeLink) return <Link {...props} />;
    return <span {...props} />;
};

export default function HallOfFame({ hofData, hofmainData, server, id, setHofData, setHofmainData }) {
    useEffect(() => {
        const url = `${backend}/api/hof/${server}/${id}`;
        const url2 = `${backend}/api/hofmain/${server}/${id}`;

        Promise.all([fetch(url).then((res) => res.json()), fetch(url2).then((res) => res.json())]).then(
            ([hof, hofmain]) => {
                setHofData(hof);
                setHofmainData(hofmain);
            }
        );
    }, [server, id, setHofData, setHofmainData]);

    let topTanks = <Loader color={null} bottom={20} top={20} />;

    if (hofData && hofmainData) {
        const { top } = hofmainData;
        topTanks = (
            <Styles>
                <div className="tanksTitle">
                    <span style={{ fontSize: "2rem" }}>Hall of Fame</span>
                    <br />
                    <span style={{ fontSize: "1rem" }}>60 DAYS | MINIMUM 75 BATTLES | VEHICLES TIER 6+</span>
                </div>
                <div className="overall">
                    {top.battles.value >= 75 ? (
                        <>
                            <div className="overallTop">
                                <div className="overallItem">
                                    <span className="value">{top.winrate.value}%</span>
                                    <span className="bigLabel"> Winrate </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.winrate.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.winrate.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.winrate.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                                <div className="overallItem">
                                    <span className="value">{top.wn8.value}</span>
                                    <span className="bigLabel"> WN8 </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.wn8.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.wn8.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.wn8.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                                <div className="overallItem">
                                    <span className="value">{top.kd.value}</span>
                                    <span className="bigLabel"> K/D Ratio </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.kd.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.kd.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.kd.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                            </div>
                            <div className="overallBottom">
                                <div className="overallItem">
                                    <span className="value">{top.battles.value}</span>
                                    <span className="bigLabel"> Battles </span>
                                    <div
                                        className="bigPercentile"
                                        style={{ backgroundColor: "white", color: "rgb(50, 50, 50)" }}
                                    >
                                        More than {(100 - (top.battles.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.battles.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                                <div className="overallItem">
                                    <span className="value">{top.dpg.value}</span>
                                    <span className="bigLabel"> Damage Per Game </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.dpg.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.dpg.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.dpg.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                                <div className="overallItem">
                                    <span className="value">{top.dmg_ratio.value}</span>
                                    <span className="bigLabel"> Damage Ratio </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.dmg_ratio.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.dmg_ratio.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.dmg_ratio.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                                <div className="overallItem">
                                    <span className="value">{top.frags.value}</span>
                                    <span className="bigLabel"> Frags Per Game </span>
                                    <div
                                        className="bigPercentile"
                                        style={{
                                            backgroundColor: rankColor(100 - (top.frags.ranking * 100) / top.total),
                                        }}
                                    >
                                        Better than {(100 - (top.frags.ranking * 100) / top.total).toFixed(2)}%
                                    </div>
                                    {top.frags.ranking}
                                    <span className="bigLabel">Rank</span>
                                </div>
                            </div>
                        </>
                    ) : (
                        <UnrankedNotice>
                            Play {75 - top.battles.value} more battles in tanks of tier 6 or higher to enter the Hall of
                            Fame
                        </UnrankedNotice>
                    )}
                </div>
                <TankRankings userID={id} hofData={hofData} />
            </Styles>
        );
    }

    return topTanks;
}

const TankRankings = ({ userID, hofData }) => (
    <>
        <div className="tanksTitle">
            <span style={{ fontSize: "2rem" }}>Tank Rankings</span>
            <br />
            <span style={{ fontSize: "1rem" }}>60 DAYS | MINIMUM 25 BATTLES | VEHICLES TIER 6+</span>
        </div>
        <div className="tanksContainer">
            <RSC id="RSC-Example" noScrollY={true}>
                <div className="tanks">
                    {hofData.above.map((tank, i) => (
                        <ConditionalLink
                            key={i}
                            makeLink={tank.rank && tank.rank <= 500}
                            className="box abovebox"
                            to={`/tank/${tank.tank_id}?rank=${tank.rank}&userID=${userID}`}
                        >
                            <img src={tank.image} className="image" alt={tank.short_name} />
                            <div className="name">
                                {tierConv[tank.tier]} - {tank.short_name}
                            </div>
                            <div className="dpg">{tank.dpg}</div>
                            <div className="label">Damage Per Game</div>
                            <div
                                className="percentile"
                                style={{
                                    backgroundColor: rankColor((100 - (tank.rank * 100) / tank.total).toFixed(2)),
                                }}
                            >
                                Better than {(100 - (tank.rank * 100) / tank.total).toFixed(2)}%
                            </div>
                            <div className="grid">
                                <div className="gridItem">
                                    <div className="val">{tank.rank}</div>
                                    <div className="label">Rank</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.battles}</div>
                                    <div className="label">Battles</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.wn8}</div>
                                    <div className="label">WN8</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.winrate}%</div>
                                    <div className="label">Winrate</div>
                                </div>
                            </div>
                        </ConditionalLink>
                    ))}
                    {hofData.below.map((tank, i) => (
                        <div className="box underbox" key={i}>
                            <img src={tank.image} className="image" alt={tank.short_name} />
                            <div className="name">
                                {tierConv[tank.tier]} - {tank.short_name}
                            </div>
                            <div className="dpg">{tank.dpg}</div>
                            <div className="label">Damage Per Game</div>
                            <div className="unrank">Play {25 - tank.battles} more battles to enter rankings</div>
                            <div className="grid">
                                <div className="gridItem">
                                    <div className="val">-</div>
                                    <div className="label">Rank</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.battles}</div>
                                    <div className="label">Battles</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.wn8}</div>
                                    <div className="label">WN8</div>
                                </div>
                                <div className="gridItem">
                                    <div className="val">{tank.winrate}%</div>
                                    <div className="label">Winrate</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </RSC>
        </div>
    </>
);
