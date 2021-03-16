import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../../tabs/customTabs";
import Heatmap from "../charts/Heatmap.js";

export default function Heatmaps({ data, recentData, type }) {
    const [value, setValue] = useState(0);

    const handleChange = (_, newValue) => setValue(newValue);
    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label={type === "wn8" ? "WN8 HEATMAP" : "WR HEATMAP"} />
                <CustomTab label="RECENT" />
            </CustomTabs>
            <Heatmap data={value === 0 ? data : recentData} type={type} />
        </div>
    );
}
