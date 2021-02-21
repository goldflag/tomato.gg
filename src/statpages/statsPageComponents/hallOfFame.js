import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "../../components/loader";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";

const backend = process.env.REACT_APP_BACKEND;

const tierConv = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
};

function colorConv(val) {
    if (val > 99) {
        return "rgb(191, 139, 240)";
    }
    if (val > 97) {
        return "rgb(139, 195, 240)";
    } else if (val > 90) {
        return "rgb(245, 191, 66)";
    } else if (val > 80) {
        return "rgb(200, 200, 219)";
    } else if (val > 65) {
        return "rgb(176, 134, 18)";
    } else {
        return "rgb(240, 240, 240)";
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
        grid-template-rows: 230px;
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
        backdrop-filter: blur( 7px );
    }

    .value {
        font-size: 3rem;
        font-weight: 500;
    }

    .bigPercentile {
        color: rgb(50, 50, 50);
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
        height: 290px;
        transition: 0.4s ease;
        box-shadow: 0px 2px 3px rgb(30, 30, 30);
        backdrop-filter: blur( 7px );
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
        color: rgb(50, 50, 50);
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

    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 18%;
    }

    .loadingCircle {
        max-width: 75px;
    }
`;

export default function HallOfFame(props) {
    useEffect(() => {
        if (props.hofData == null) {
            console.log("getting data");
            getData();
        }
    }, []);

    async function getData() {
        const url = `${backend}/api/hof/${props.server}/${props.id}`;
        const res = await fetch(url);
        const res2 = await res.json();
        props.setHofData(res2);
        const url2 = `${backend}/api/hofmain/${props.server}/${props.id}`;
        const resa = await fetch(url2);
        const resa2 = await resa.json();
        props.setHofmainData(resa2);
    }

    const hof = () =>
        console.log(props.hofData) ||
        props.hofData.above.map((row, i) => (
            <Link className="box abovebox" to={`/tank/${row.tank_id}?rank=${row.rank}`} target="_blank">
                <img src={row.image} className="image" alt={row.name} />
                <div className="name">
                    {tierConv[row.tier]} - {row.name}
                </div>
                <div className="dpg">{row.dpg}</div>
                <div className="label">Damage Per Game</div>
                <div
                    className="percentile"
                    style={{
                        backgroundColor: colorConv(
                            (100 - (row.rank * 100) / row.total).toFixed(2)
                        ),
                    }}
                >
                    Better than{" "}
                    {(100 - (row.rank * 100) / row.total).toFixed(2)}%
                </div>
                <div className="grid">
                    <div className="gridItem">
                        <div className="val">{row.rank}</div>
                        <div className="label">Rank</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.battles}</div>
                        <div className="label">Battles</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.wn8}</div>
                        <div className="label">WN8</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.winrate}</div>
                        <div className="label">Winrate</div>
                    </div>
                </div>
            </Link>
        ));

    const underHof = () =>
        props.hofData.below.map((row, i) => (
            <div className="box underbox">
                <img src={row.image} className="image" alt={row.name} />
                <div className="name">
                    {tierConv[row.tier]} - {row.name}
                </div>
                <div className="dpg">{row.dpg}</div>
                <div className="label">Damage Per Game</div>
                <div className="unrank">
                    Play {25 - row.battles} more battles to enter rankings
                </div>
                <div className="grid">
                    <div className="gridItem">
                        <div className="val">-</div>
                        <div className="label">Rank</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.battles}</div>
                        <div className="label">Battles</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.wn8}</div>
                        <div className="label">WN8</div>
                    </div>
                    <div className="gridItem">
                        <div className="val">{row.winrate}</div>
                        <div className="label">Winrate</div>
                    </div>
                </div>
            </div>
        ));

    let topTanks = <Loader color={null} bottom={20} top={20} />;

    if (props.hofData && props.hofmainData) {
        const tankRow = hof();
        const tankRow2 = underHof();
        topTanks = (
            <Styles>
                <div className="tanksTitle">
                    <span style={{ fontSize: "2rem" }}>Hall of Fame</span>
                    <br />
                    <span style={{ fontSize: "1rem" }}>
                        60 DAYS | MINIMUM 75 BATTLES | TIER 6+
                    </span>
                </div>
                <div className="overall">
                    <div className="overallTop">
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.winrate.value}%
                            </span>
                            <span className="bigLabel"> Winrate </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.winrate
                                                .ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.winrate.ranking *
                                        100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.winrate.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.wn8.value}
                            </span>
                            <span className="bigLabel"> WN8 </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.wn8.ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.wn8.ranking * 100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.wn8.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.kd.value}
                            </span>
                            <span className="bigLabel"> K/D Ratio </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.kd.ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.kd.ranking * 100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.kd.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                    </div>
                    <div className="overallBottom">
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.battles.value}
                            </span>
                            <span className="bigLabel"> Battles </span>
                            <div
                                className="bigPercentile"
                                style={{ backgroundColor: "white" }}
                            >
                                More than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.battles.ranking *
                                        100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.battles.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.dpg.value}
                            </span>
                            <span className="bigLabel"> Damage Per Game </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.dpg.ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.dpg.ranking * 100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.dpg.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.dmg_ratio.value}
                            </span>
                            <span className="bigLabel"> Damage Ratio </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.dmg_ratio
                                                .ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.dmg_ratio.ranking *
                                        100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.dmg_ratio.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                        <div className="overallItem">
                            <span className="value">
                                {props.hofmainData.top.frags.value}
                            </span>
                            <span className="bigLabel"> Frags Per Game </span>
                            <div
                                className="bigPercentile"
                                style={{
                                    backgroundColor: colorConv(
                                        100 -
                                            (props.hofmainData.top.frags
                                                .ranking *
                                                100) /
                                                props.hofmainData.top.total
                                    ),
                                }}
                            >
                                Better than{" "}
                                {(
                                    100 -
                                    (props.hofmainData.top.frags.ranking *
                                        100) /
                                        props.hofmainData.top.total
                                ).toFixed(2)}
                                %
                            </div>
                            {props.hofmainData.top.frags.ranking}
                            <span className="bigLabel">Rank</span>
                        </div>
                    </div>
                </div>
                <div className="tanksTitle">
                    <span style={{ fontSize: "2rem" }}>Tank Rankings</span>
                    <br />
                    <span style={{ fontSize: "1rem" }}>
                        60 DAYS | MINIMUM 25 BATTLES
                    </span>
                </div>
                <Scrollbars
                    style={{ width: "100%", height: "310px", margin: "1rem" }}
                >
                    <div className="tanks">
                        {tankRow}
                        {tankRow2}
                    </div>
                </Scrollbars>
            </Styles>
        );
    }

    return topTanks;
}
