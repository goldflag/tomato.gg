import { commonStrings } from "Data/localizations";
import React, { useState } from "react";
import LocalizedStrings from "react-localization";
import { CustomTabs, CustomTab } from "../../tabs/customTabs";
import LineGraphWN8 from "../charts/LineGraph.js";

const { formatString, ...strings } = new LocalizedStrings({ en: { progress: "{0} PROGRESS" } });
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
                <CustomTab label={formatString(strings.progress, commonStrings.wn8)} />
                <CustomTab label={formatString(strings.progress, commonStrings.dpg)} />
                <CustomTab label={formatString(strings.progress, commonStrings.wr)} />
            </CustomTabs>
            <LineGraphWN8
                data={value === 0 ? WN8 : value === 1 ? DPG : WR}
                type={value === 0 ? "WN8" : value === 1 ? "DPG" : "WR"}
            />
        </div>
    );
}
