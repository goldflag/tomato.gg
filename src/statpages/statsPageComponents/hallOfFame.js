import React, { useEffect } from "react";
import { ThemeContext } from "../../context";
import styled from "styled-components";
import Loader from "../../components/loader";
import { Scrollbars } from "react-custom-scrollbars";

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

const Styles = styled.div`
    font-family: Roboto Mono;
    font-size: 0.8rem;

    .container {
        display: flex;
        flex-direction: row;
        padding: 0;
        min-width: 100%;
    }

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.4rem;
        color: rgb(240, 240, 240);
        padding: 0.4rem;
        min-width: 180px;
        height: 290px;
        transition: 0.4s ease;
        box-shadow: 0px 2px 3px rgb(30, 30, 30);
    }

    .abovebox {
        background-color: rgb(100, 100, 100, 0.5);
    }

    .underbox {
        background-color: rgb(60, 60, 60, 0.5);
    }

    .abovebox:hover {
        background-color: rgba(201, 26, 61, 0.7);
    }

    .underbox:hover {
        background-color: rgba(80, 80, 80, 0.7);
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

    .rank {
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
        if (props.hofData === "") {
            console.log("getting data");
            getData();
        }
    }, []);

    async function getData() {
        const url = `${backend}/api/hof/${props.server}/${props.id}`;
        const res = await fetch(url);
        const res2 = await res.json();
        props.setHofData(res2);
    }

    function hof() {
        console.log(props.hofData);
        return props.hofData.above.map((row, i) => {
            return (
                <div className="box abovebox">
                    <img src={row.image} className="image" alt={row.name} />
                    <div className="name">
                        {tierConv[row.tier]} - {row.name}
                    </div>
                    <div className="dpg">{row.dpg}</div>
                    <div className="label">Damage Per Game</div>
                    <div className="rank">
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
                </div>
            );
        });
    }

    function underHof() {
        console.log(props.hofData);
        return props.hofData.below.map((row, i) => {
            return (
                <div className="box underbox">
                    <img src={row.image} className="image" alt={row.name} />
                    <div className="name">
                        {tierConv[row.tier]} - {row.name}
                    </div>
                    <div className="dpg">{row.dpg}</div>
                    <div className="label">Damage Per Game</div>
                    {/* <div className="rank">Better than {(100 - (row.rank*100/row.total)).toFixed(2)}%</div> */}
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
            );
        });
    }

    let topTanks = <Loader color={null} bottom={20} top={20} />;

    if (props.hofData) {
        const tankRow = hof();
        const tankRow2 = underHof();
        topTanks = (
            <Styles>
                <Scrollbars style={{ width: "100%", height: "310px" }}>
                    <div className="container">
                        {tankRow}
                        {tankRow2}
                    </div>
                </Scrollbars>
            </Styles>
        );
    }

    return topTanks;
}
