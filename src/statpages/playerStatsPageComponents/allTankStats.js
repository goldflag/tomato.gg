// NPM
import React, { useState } from "react";

// LOCAL
import { CustomTabs, CustomTab } from "Components/customTabs";
import OverallTable from "./overallTable";
import PeriodBreakdown from "./periodBreakdown";
import { commonStrings, formatString, UPPER } from "Data/localizations";

export default function AllTankStats(props) {
  const [tab, setTab] = useState(0);

  const tabIndexToKey = {
    1: "recent24hr",
    2: "recent3days",
    3: "recent7days",
    4: "recent30days",
    5: "recent60days",
    6: "recent100",
    7: "recent1000",
  };

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

      {tab === 0 ? (
        <OverallTable data={props.overall} setSelectedTank={props.setSelectedTank} setModalOpen={props.setModalOpen} />
      ) : (
        <PeriodBreakdown data={props.recents[tabIndexToKey[tab]].tankStats} setSelectedTank={props.setSelectedTank} setModalOpen={props.setModalOpen} />
      )}
    </div>
  );
}
