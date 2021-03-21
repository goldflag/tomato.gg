// NPM
import React, { useState } from "react";

// LOCAL
import { TabPanel, CustomTabs, CustomTab } from "../../components/customTabs";
import OverallTable from "./overallTable";
import PeriodBreakdown from "./periodBreakdown";
import { commonStrings, formatString, UPPER } from "Data/localizations";

export default function NationDist(props) {
    const [tab, setTab] = useState(0);

    return (
        <div>
            <CustomTabs
                value={tab}
                onChange={(_, newValue) => setTab(newValue)}
                aria-label="ant example"
                variant="scrollable"
                scrollButtons="auto"
            >
                <CustomTab label={UPPER(commonStrings.overall)} />
                <CustomTab label={UPPER(formatString(commonStrings.hours, 24))} />
                <CustomTab label={UPPER(formatString(commonStrings.days, 3))} />
                <CustomTab label={UPPER(formatString(commonStrings.days, 7))} />
                <CustomTab label={UPPER(formatString(commonStrings.days, 30))} />
                <CustomTab label={UPPER(formatString(commonStrings.days, 60))} />
                <CustomTab label={UPPER(formatString(commonStrings.nBattles, 100))} />
                <CustomTab label={UPPER(formatString(commonStrings.nBattles, 1000))} />
            </CustomTabs>
            <TabPanel value={tab} index={0}>
                <OverallTable data={props.overall} />
            </TabPanel>
            {/* TODO: make these all render as one table with different data */}
            <TabPanel value={tab} index={1}>
                <PeriodBreakdown data={props.recents.recent24hr.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={2}>
                <PeriodBreakdown data={props.recents.recent3days.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={3}>
                <PeriodBreakdown data={props.recents.recent7days.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={4}>
                <PeriodBreakdown data={props.recents.recent30days.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={5}>
                <PeriodBreakdown data={props.recents.recent60days.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={6}>
                <PeriodBreakdown data={props.recents.recent100.tankStats} />
            </TabPanel>
            <TabPanel value={tab} index={7}>
                <PeriodBreakdown data={props.recents.recent1000.tankStats} />
            </TabPanel>
        </div>
    );
}
