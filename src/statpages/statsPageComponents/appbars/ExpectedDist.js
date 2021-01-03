import React, { useState } from "react";
import CustomTab from "../../tabs/customTab";
import CustomTabs from "../../tabs/customTabs";
import TabPanel from "../../tabs/tabPanel";
import WN8Radar from "../charts/WN8Radar";

export default function ExpectedDist(props) {
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
                <CustomTab label="WN8 ACTUAL TO EXP. RATIO" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <WN8Radar data={props.data} />
            </TabPanel>
        </div>
    );
}
