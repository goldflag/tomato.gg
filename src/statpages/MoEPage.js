import React, { useEffect, useState, useContext } from "react";
import ReactGA from "react-ga";
import { ServerContext } from "../context";
import MoETable from "./MoEPageComponents/MoETable";
import MoETracker from "./MoEPageComponents/MoETracker";
import { TabPanel, CustomTabs, CustomTab } from "./tabs/customTabs";
import tankNames from "../data/tankNames.json";
import nationConversion from "../data/nationConversion";
import classConversion from "../data/classConversion.json";
import serverConv from "../data/serverConv";
import { Loader, FullPageTableWrapper, Info } from "../components";

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

export default function MoEPage(props) {
    const { server } = useContext(ServerContext);

    const [data, setData] = useState();
    const [changeData, setChangeData] = useState();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview("/moe");
    }, []);

    useEffect(() => {
        async function getData() {
            const url = `${backend}/api/abcd/moe/${server}`;
            const url2 = `${backend}/api/abcd/moetracker/get/${server}`;

            try {
                Promise.all([fetch(url), fetch(url2)])
                    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                    .then(([data1, data2]) => {
                        setData(data1);
                        setChangeData(data2);
                    });
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, [server]);

    let table = <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={40} top={20} />;

    if (data) {
        let rowData = [];
        for (let i = 0; i < data.length; ++i) {
            if (data[i].id in tankNames) {
                const id = data[i].id;
                let entry = {
                    image: data[i].image,
                    id: id,
                    name: tankNames[id].short_name,
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

    let changeTable95 = <></>;
    let changeTable85 = <></>;
    let changeTable65 = <></>;

    if (changeData) {
        changeTable95 = <MoETracker data={changeData} moe={"95"} />;
        changeTable85 = <MoETracker data={changeData} moe={"85"} />;
        changeTable65 = <MoETracker data={changeData} moe={"65"} />;
    }

    return (
        <FullPageTableWrapper>
            <Info>
                <span style={{ fontSize: "2rem", fontWeight: "500" }}>
                    {serverConv[server]} Marks of Excellence Requirements
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
                    <a target="blank" href="https://gunmarks.poliroid.ru/">
                        Marks of Excellence mod
                    </a>{" "}
                    &#47;&#47;&#47; Expand rows to see 30 days of MoE history
                    <br />
                    *MoE change is calculated using 3-day averages to minimize noise
                </span>
                <br />
            </Info>
            <CustomTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
                variant="scrollable"
                scrollButtons="auto"
            >
                <CustomTab label="EXPECTED VALUES" />
                <CustomTab label="95% EXP. VAL CHANGE" />
                <CustomTab label="85% EXP. VAL CHANGE" />
                <CustomTab label="65% EXP. VAL CHANGE" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                {table}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {changeTable95}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {changeTable85}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {changeTable65}
            </TabPanel>
        </FullPageTableWrapper>
    );
}
