import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import LineGraphWN8 from "../charts/LineGraphWN8.js";

export default function LineGraphs(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
                variant="scrollable"
                scrollButtons="auto"
            >
                <CustomTab label="WN8 PROGRESS" />
                <CustomTab label="DPG PROGRESS" />
                <CustomTab label="WR PROGRESS" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <LineGraphWN8 data={props.WN8} type="WN8" />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LineGraphWN8 data={props.DPG} type="DPG" />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <LineGraphWN8 data={props.WR} type="WR" />
            </TabPanel>
        </div>
    );
}
