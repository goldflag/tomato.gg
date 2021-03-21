import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../../../components/customTabs";
import WN8Radar from "../charts/WN8Radar";

export default function ExpectedDist({ data }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="WN8 ACTUAL TO EXP. RATIO" />
            </CustomTabs>
            <WN8Radar data={data} />
        </div>
    );
}
