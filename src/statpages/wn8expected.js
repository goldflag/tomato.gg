import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { ThemeContext } from "../context";
import WN8Table from "./wn8Components/wn8Table";
import tankNames from "../data/tankNames.json";
import nationConversion from "../data/nationConversion";
import classConversion from "../data/classConversion.json";
import { FullPageTableWrapper, Info } from "../components";

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
const backend = process.env.REACT_APP_BACKEND;

export default function Leaderboards(props) {
    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/wn8");
        getData();
    }, []);

    async function getData() {
        const url = `${backend}/api/abcd/wn8`;
        const raw = await fetch(url);
        let res = await raw.json();
        setData(res);
    }

    const { theme } = React.useContext(ThemeContext);
    const Styles = styled.div`
        *:focus {
            outline: none;
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
    `;

    let table = <></>;

    if (data) {
        const ids = Object.keys(data);
        let rowData = [];

        for (let i = 0; i < ids.length; ++i) {
            if (ids[i] in tankNames) {
                let entry = {
                    id: ids[i],
                    name:
                        tankNames[ids[i]].short_name +
                        (tankNames[ids[i]]["is_premium"] ? " 🟊" : ""),
                    nation: nationConversion[tankNames[ids[i]].nation],
                    tier: tierConv[tankNames[ids[i]].tier],
                    class: classConversion[tankNames[ids[i]].type],
                    expDef: data[ids[i]].expDef,
                    expFrag: data[ids[i]].expFrag,
                    expSpot: data[ids[i]].expSpot,
                    expDamage: data[ids[i]].expDamage,
                    expWinRate: data[ids[i]].expWinRate,
                    isPrem: tankNames[ids[i]].is_premium,
                };
                rowData.push(entry);
            }
        }

        table = <WN8Table data={rowData} />;
    }

    return (
        <Styles>
            <FullPageTableWrapper>
                <Info theme={theme}>
                    <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                        WN8 Expected Values
                    </span>
                    <br />
                    <br />
                    <span
                        style={{
                            fontSize: "0.9rem",
                            lineHeight: "1.3rem",
                            color: "rgb(100,100,100)",
                        }}
                    >
                        Maintained by the{" "}
                        <a
                            target="blank"
                            href="https://modxvm.com/en/wn8-expected-values/"
                        >
                            XVM team
                        </a>
                    </span>{" "}
                    <br />
                </Info>
                {table}
            </FullPageTableWrapper>
        </Styles>
    );
}
