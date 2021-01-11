import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import SessionsLog from "./sessionsLog";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function ExpectedDist(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Paper square elevation={2}>
                <CustomTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="ant example"
                >
                    <CustomTab label="DAILY SESSIONS LOG" />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <SessionsLog data={props.data} />
                </TabPanel>
            </Paper>
        </div>
    );
}
