import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomTab from "./tabs/customTab";
import CustomTabs from "./tabs/customTabs";
import TabPanel from "./tabs/tabPanel";
import Heatmap from "../charts/Heatmap.js";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Heatmaps(props) {
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
                    <CustomTab
                        label={
                            props.type === "wn8" ? "WN8 HEATMAP" : "WR HEATMAP"
                        }
                    />
                    <CustomTab label="RECENT" />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <Heatmap data={props.data} type={props.type} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Heatmap data={props.recentData} type={props.type} />
                </TabPanel>
            </div>
        </div>
    );
}
