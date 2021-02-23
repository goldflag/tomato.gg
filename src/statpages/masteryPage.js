import React, { useEffect, useState } from "react";
import ReactGA from "react-ga";
import { ServerContext } from "../context";
import MasteryTable from "./masteryPageComponents/masteryTable";
import tankNames from "../data/tankNames.json";
import { nationConv, classConv, tierConv, serverConv } from "../data/conversions";
import { Loader, FullPageTableWrapper, Info } from "../components";

const trackingId = process.env.REACT_APP_GA;
const backend = process.env.REACT_APP_BACKEND;

export default function MasteryPage(props) {
    const { server } = React.useContext(ServerContext);

    const [data, setData] = useState();

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/mastery");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `${backend}/api/abcd/mastery/${server}`;
            const raw = await fetch(url);
            let res = await raw.json();
            setData(res);
        }
        getData();
    }, [server]);

    let table = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />;

    if (data) {
        let rowData = [];
        for (let i = 0; i < data.length; ++i) {
            if (data[i].id in tankNames) {
                const id = data[i].id;
                let entry = {
                    image: data[i].image,
                    id: id,
                    name: tankNames[id].short_name,
                    nation: nationConv[tankNames[id].nation],
                    tier: tierConv[tankNames[id].tier],
                    class: classConv[tankNames[id].type],
                    "3rd": data[i]["3rd"] || "-",
                    "2nd": data[i]["2nd"] || "-",
                    "1st": data[i]["1st"] || "-",
                    ace: data[i]["ace"] || "-",
                    isPrem: tankNames[id].is_premium,
                };
                rowData.push(entry);
            }
        }
        table = <MasteryTable data={rowData} />;
    }

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {serverConv[server]} Mastery Badge Requirements
                </span>
                <br />
                <br />
                <span
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1rem",
                        color: "rgb(130,130,130)",
                    }}
                >
                    Data from the creators of the{" "}
                    <a target="blank" href="https://mastery.poliroid.ru/">
                        Marks of Excellence mod
                    </a>{" "}
                    &#47;&#47;&#47; Expand rows to see 30 days of mastery history
                </span>{" "}
                <br />
            </Info>
            {table}
        </FullPageTableWrapper>
    );
}
