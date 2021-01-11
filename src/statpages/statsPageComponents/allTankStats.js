import React, { useState } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../tabs/customTabs";
import OverallTable from "./overallTable";
import PeriodBreakdown from "./periodBreakdown";

export default function NationDist(props) {
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
                <CustomTab label="OVERALL" />
                <CustomTab label="24 HOURS" />
                <CustomTab label="3 DAYS" />
                <CustomTab label="7 DAYS" />
                <CustomTab label="30 DAYS" />
                <CustomTab label="60 DAYS" />
                <CustomTab label="100 BATTLES" />
                <CustomTab label="1000 BATTLES" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <OverallTable data={props.overall} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PeriodBreakdown
                    data={props.recents.recent24hr.tankStats}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PeriodBreakdown
                    data={props.recents.recent3days.tankStats}
                />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PeriodBreakdown
                    data={props.recents.recent7days.tankStats}
                />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <PeriodBreakdown
                    data={props.recents.recent30days.tankStats}
                />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <PeriodBreakdown
                    data={props.recents.recent30days.tankStats}
                />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <PeriodBreakdown data={props.recents.recent100.tankStats} />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <PeriodBreakdown
                    data={props.recents.recent1000.tankStats}
                />
            </TabPanel>
        </div>
    );
}
