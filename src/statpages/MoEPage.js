import React, { useEffect, useState, useContext } from "react";
import ReactGA from "react-ga";
import { ServerContext } from "Context";
import MoETable from "./MoEPageComponents/MoETable";
import MoETracker from "./MoEPageComponents/MoETracker";
import { TabPanel, CustomTabs, CustomTab } from "./tabs/customTabs";
import { Loader, FullPageTableWrapper, Info } from "Components";
import { serverConv } from "Data/conversions";

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
        table = <MoETable data={data} />;
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
