import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomTab from "./tabs/customTab";
import CustomTabs from "./tabs/customTabs";
import TabPanel from "./tabs/tabPanel";
import LineGraphWN8 from "../charts/LineGraphWN8.js";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function LineGraphs(props) {
    console.log(props.WN8);
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div>
                <CustomTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="ant example"
                >
                    <CustomTab label="WN8 PROGRESS" />
                    <CustomTab label="DPG PROGRESS" />
                    <CustomTab label="WR PROGRESS" />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <LineGraphWN8 data={props.WN8} type="WN8" />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <LineGraphWN8 data={props.DPG} type="DPG" />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <LineGraphWN8 data={props.WR} type="WR" />
                </TabPanel>
            </div>
        </div>
    );
}
