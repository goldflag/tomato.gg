import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MOETable from '../charts/MOETable.js';
import MasteryTable from '../charts/MasteryTable.js';

import TierMOEDistribution from '../charts/TierMoeDistribution.js';
import TierMasteryDistribution from '../charts/TierMasteryDistribution.js';

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
          <CustomTab label="MARKS OF EXCELLENCE" /> 
          <CustomTab label="MASTERY" /> 
        </CustomTabs>
        <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper style={{padding: '1em 0em 1em 1em'}} elevation={0}>
                    <MOETable data={props.MOEdata}/>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <TierMOEDistribution data={props.MOEdata}/>
              </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Paper style={{padding: '1em 0em 1em 1em'}} elevation={0}>
                    <MasteryTable data={props.MasteryData}/>
                </Paper>
              </Grid>
              <Grid item xs={8}>
                <TierMasteryDistribution data={props.MasteryData}/>
              </Grid>
            </Grid>
        </TabPanel>
      </div>            
    </div>
  );
}