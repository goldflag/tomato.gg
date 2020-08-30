
import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TankStats from './tankStats';
import RecentTankStats from './recentTankStats';

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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function NationDist(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div>
        <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
          <CustomTab label="OVERALL" /> 
          <CustomTab label="24 HOURS" /> 
          <CustomTab label="3 DAYS" /> 
          <CustomTab label="7 DAYS" /> 
          <CustomTab label="30 DAYS" /> 
          <CustomTab label="100 BATTLES" /> 
          <CustomTab label="1000 BATTLES" /> 
        </CustomTabs>
        <TabPanel value={value} index={0}>
          <TankStats overallStats = {props.overallStats}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RecentTankStats overallStats = {props.day1}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RecentTankStats overallStats = {props.week1}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <RecentTankStats overallStats = {props.days30}/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <RecentTankStats overallStats = {props.days60}/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <RecentTankStats overallStats = {props.battles500}/>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <RecentTankStats overallStats = {props.battles1000}/>
        </TabPanel>
      </div>            
    </div>
  );
}


