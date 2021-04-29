import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CustomTabs, CustomTab } from "../../../components/customTabs";
import NationDistribution from "../charts/NationDistribution.js";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function NationDist({ data, recentData }) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label="NATIONS" />
                    <CustomTab label="RECENT" />
                </CustomTabs>
                <NationDistribution data={value === 0 ? data : recentData} />
            </div>
        </div>
    );
}
