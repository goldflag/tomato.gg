import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import Records from "../charts/Records";

export default function RecordsBar({ data }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="MISC STATS" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <Records data={data} />
            </TabPanel>
        </div>
    );
}
