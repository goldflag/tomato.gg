import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { ThemeContext } from "../style/theme.js";
import MoETable from "./MoEPageComponents/MoETable";
import tankNames from "../data/tankNames.json";
import nationConversion from "../data/nationConversion";
import classConversion from "../data/classConversion.json";
import serverConv from "../data/serverConv";

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
const trackingId = process.env.REACT_APP_GA;

export default function MoEPage(props) {
    const { theme, server } = React.useContext(ThemeContext);

    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/moe");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `https://tomatobackend-oswt3.ondigitalocean.app/api/abcd/moe/${server}`;
            //const url = `http://localhost:5000/api/abcd/moe/${server}`;
            const raw = await fetch(url);
            let res = await raw.json();
            setData(res);
        }

        getData();
    }, [server]);

    const Styles = styled.div`
        *:focus {
            outline: none;
        }

        .leaderboard {
            padding: 6rem 0rem 5rem 0rem;
            margin: 0rem 15% 0rem 15%;
        }

        .info {
            background-color: ${theme === "dark"
                ? "rgb(40, 40, 40)"
                : "rgb(250, 250, 250)"};
            color: ${theme === "dark"
                ? "rgb(255, 255, 255)"
                : "rgb(60, 60, 60)"};
            padding: 1rem;
        }

        .selectButton {
            font-family: "Segoe UI";
            font-weight: 600;
            color: rgb(240, 240, 240);
            background-color: rgb(71, 99, 214);
            padding: 1rem 0rem 0.8rem 0rem;
            width: calc(100% / 6);
            border-width: 0px;
            border-bottom: 5px solid rgb(71, 99, 214);
        }

        .selectButton:hover {
            border-bottom: 5px solid red;
        }

        .selectButton:focus {
            border-bottom: 5px solid red;
        }

        @media screen and (max-width: 1000px) {
            .leaderboard {
                margin: 1rem;
            }
        }
    `;

    let table = <></>;

    if (data) {
        let rowData = [];
        for (let i = 0; i < data.length; ++i) {
            if (data[i].id in tankNames) {
                const id = data[i].id;
                let entry = {
                    id: id,
                    name:
                        tankNames[id].short_name +
                        (tankNames[id]["is_premium"] ? " 🟊" : ""),
                    nation: nationConversion[tankNames[id].nation],
                    tier: tierConv[tankNames[id].tier],
                    class: classConversion[tankNames[id].type],
                    50: data[i]["50"] || "-",
                    65: data[i]["65"] || "-",
                    85: data[i]["85"] || "-",
                    95: data[i]["95"] || "-",
                    100: data[i]["100"] || "-",
                    isPrem: tankNames[id].is_premium,
                };
                rowData.push(entry);
            }
        }
        table = <MoETable data={rowData} />;
    }

    return (
        <Styles>
            <div className="leaderboard">
                <div className="info">
                    <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                        {serverConv[server]} Marks of Excellence Requirements
                    </span>
                    <br />
                    <span
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: "1rem",
                            color: "rgb(130,130,130)",
                        }}
                    >
                        Data from the creators of the{" "}
                        <a target="blank" href="https://gunmarks.poliroid.ru/">
                            Marks of Excellence mod
                        </a>{" "}
                        &#47;&#47;&#47; Expand rows to see 30 days of MoE
                        history
                    </span>{" "}
                    <br />
                </div>
                {table}
            </div>
        </Styles>
    );
}
