import React, { useState } from "react";
import { CustomTabs, CustomTab } from "../../tabs/customTabs";
import Grid from "@material-ui/core/Grid";
import MOETable from "../charts/MOETable.js";
import MasteryTable from "../charts/MasteryTable.js";
import TierMoeMasteryDistribution from "../charts/TierMoeMasteryDistribution.js";

export default function NationDist({ MOEdata, MasteryData }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="MARKS OF EXCELLENCE" />
                <CustomTab label="MASTERY" />
            </CustomTabs>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div style={{ padding: "1em 0em 1em 1em" }} elevation={0}>
                        {value === 0 ? <MOETable data={MOEdata} /> : <MasteryTable data={MasteryData} />}
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <TierMoeMasteryDistribution 
                        data={value === 0 ? MOEdata : MasteryData} 
                        keys={value === 0 ? ["0", "1", "2", "3"] : ["None", "3rd", "2nd", "1st", "Ace"]}
                        colors={value === 0 ? 
                        [
                            "rgb(224, 224, 224)", 
                            "rgb(103, 174, 224)", 
                            "rgb(92, 108, 196)", 
                            "rgb(138, 53, 212)"
                        ] : [
                            "rgb(97, 97, 97)",
                            "rgb(115, 83, 53)",
                            "rgb(145, 106, 44)",
                            "rgb(194, 194, 194)",
                            "rgb(235, 191, 47)",
                        ]}
                    /> 
                </Grid>
            </Grid>
        </div>
    );
}
