import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomTab from './tabs/customTab';
import CustomTabs from './tabs/customTabs';
import TabPanel from './tabs/tabPanel';
import TierDistribution from '../charts/TierDistribution.js';

const useStyles = makeStyles((theme) => ({
root: {
  flexGrow: 1,
},
}));

export default function TierDist(props) {
const classes = useStyles();
const [value, setValue] = useState(0);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

return (
  <div className={classes.root}>
    <div>
      <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
        <CustomTab label="TIER DISTRIBUTION" /> 
        <CustomTab label="RECENT" /> 
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <TierDistribution data={props.data}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TierDistribution data={props.recentData}/>
      </TabPanel>
    </div>            
  </div>
);
}
