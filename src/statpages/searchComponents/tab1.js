import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SmallLeaderboard from './smallLeaderboard';
import './leaderboard.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box padding={0}>
            {children}
          </Box>
        )}
      </div>
    );
  }

const CustomTabs = withStyles({
  root: {
    elevation: 10,
    backgroundColor: 'rgb(76, 90, 166)',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'rgb(214, 43, 97)',
    },
  },
})(Tabs);

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: 600,
    marginRight: theme.spacing(4),
    fontFamily: 'Segoe UI, Futura',
    color: 'rgb(250, 250, 250)',
    '&:focus': {
        opacity: 1,
      },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export default function Tab1(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{margin: '1rem'}}>
    <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
        <CustomTab label="WN8" /> 
        <CustomTab label="WR" />
        <CustomTab label="Battles" /> 
    </CustomTabs>
    <TabPanel value={value} index={0}>
        <SmallLeaderboard type='wn8'/>
    </TabPanel>
    <TabPanel value={value} index={1}>
        <SmallLeaderboard type='winrate'/>
    </TabPanel>
    <TabPanel value={value} index={2}>
        <SmallLeaderboard type='battles'/>
    </TabPanel>
    </div>           
  );
}
