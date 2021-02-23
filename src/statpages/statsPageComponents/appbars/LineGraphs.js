import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../../tabs/customTabs";
import LineGraphWN8 from "../charts/LineGraph.js";

export default function LineGraphs({ WN8, DPG, WR }) {
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
            <LineGraphWN8 
                data={value === 0 ? WN8 : value === 1 ? DPG : WR} 
                type={value === 0 ? "WN8" : value === 1 ? "DPG" : "WR"} 
            />
        </div>
    );
}
