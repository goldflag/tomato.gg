import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import Heatmap from "../charts/Heatmap.js";

export default function Heatmaps(props) {
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
            >
                <CustomTab
                    label={props.type === "wn8" ? "WN8 HEATMAP" : "WR HEATMAP"}
                />
                <CustomTab label="RECENT" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <Heatmap data={props.data} type={props.type} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Heatmap data={props.recentData} type={props.type} />
            </TabPanel>
        </div>
    );
}
