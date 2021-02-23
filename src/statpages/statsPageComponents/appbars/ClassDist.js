import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import ClassDistribution from "../charts/ClassDistribution.js";

export default function NationDist(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="CLASS" />
                <CustomTab label="RECENT" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <ClassDistribution data={props.data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ClassDistribution data={props.recentData} />
            </TabPanel>
        </div>
    );
}
