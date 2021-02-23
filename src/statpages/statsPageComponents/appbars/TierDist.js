import React, { useState } from "react";
import {CustomTabs, CustomTab } from "../../tabs/customTabs";
import TierDistribution from "../charts/TierDistribution.js";

export default function TierDist({ data, recentData }) {
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
            <TierDistribution data={value === 0 ? data : recentData} />
        </div>
    );
}
