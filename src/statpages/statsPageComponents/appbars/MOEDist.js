import React, { useState } from "react";
import CustomTab from "../../tabs/customTab";
import CustomTabs from "../../tabs/customTabs";
import TabPanel from "../../tabs/tabPanel";
import Grid from "@material-ui/core/Grid";
import MOETable from "../charts/MOETable.js";
import MasteryTable from "../charts/MasteryTable.js";
import TierMOEDistribution from "../charts/TierMoeDistribution.js";
import TierMasteryDistribution from "../charts/TierMasteryDistribution.js";

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
            >
                <CustomTab label="MARKS OF EXCELLENCE" />
                <CustomTab label="MASTERY" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div
                            style={{ padding: "1em 0em 1em 1em" }}
                            elevation={0}
                        >
                            <MOETable data={props.MOEdata} />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <TierMOEDistribution data={props.MOEdata} />
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div
                            style={{ padding: "1em 0em 1em 1em" }}
                            elevation={0}
                        >
                            <MasteryTable data={props.MasteryData} />
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <TierMasteryDistribution data={props.MasteryData} />
                    </Grid>
                </Grid>
            </TabPanel>
        </div>
    );
}
