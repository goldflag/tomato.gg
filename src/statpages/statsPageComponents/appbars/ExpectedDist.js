import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomTab from './tabs/customTab';
import CustomTabs from './tabs/customTabs';
import TabPanel from './tabs/tabPanel';
import WN8Radar from '../charts/WN8Radar';

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
            <div>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label="WN8 ACTUAL TO EXP. RATIO" />
                </CustomTabs>
                <TabPanel value={value} index={0}>
                    <WN8Radar data={props.data} />
                </TabPanel>
            </div>
        </div>
    );
}