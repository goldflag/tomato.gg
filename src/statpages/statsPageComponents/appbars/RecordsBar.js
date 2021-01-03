import React, { useState } from "react";
import CustomTab from "../../tabs/customTab";
import CustomTabs from "../../tabs/customTabs";
import TabPanel from "../../tabs/tabPanel";
import Records from "../charts/Records";

export default function RecordsBar(props) {
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
                <CustomTab label="MISC STATS" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <Records data={props.data} />
            </TabPanel>
        </div>
    );
}
