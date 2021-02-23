import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../../tabs/customTabs";
import ClassDistribution from "../charts/ClassDistribution.js";

export default function NationDist({ data, recentData }) {
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
            <ClassDistribution data={value === 0 ? data : recentData} />
        </div>
    );
}
