import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CustomTab from './tabs/customTab';
import CustomTabs from './tabs/customTabs';
import TabPanel from './tabs/tabPanel';
import Records from '../charts/Records';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function RecordsBar(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
          <CustomTab label="MISC STATS" /> 
        </CustomTabs>
        <TabPanel value={value} index={0}>
            <div style={{}}>
                <Records data={props.data}/>
            </div>
        </TabPanel>
      </div>            
    </div>
  );
}