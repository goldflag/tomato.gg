import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import SessionsLog from "./sessionsLog";
import LocalizedStrings from "react-localization";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const strings = new LocalizedStrings({
    en: {
        sessionsLog: "DAILY SESSIONS LOG",
    },
});

export default function ExpectedDist(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label={strings.sessionsLog} />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <SessionsLog data={props.data} />
                </TabPanel>
            </div>
        </div>
    );
}
