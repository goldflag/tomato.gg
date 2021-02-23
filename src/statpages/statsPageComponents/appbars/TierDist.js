import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import TierDistribution from "../charts/TierDistribution.js";

export default function TierDist(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="TIER DISTRIBUTION" />
                <CustomTab label="RECENT" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <TierDistribution data={props.data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TierDistribution data={props.recentData} />
            </TabPanel>
        </div>
    );
}
