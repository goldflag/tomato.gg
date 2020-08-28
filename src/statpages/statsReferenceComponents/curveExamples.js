import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WRCurves from '../../data/WRCurves.json';
import WN8Curves from '../../data/WN8Curves.json';
import CurveGraph from '../tankStatsPageComponents/curveGraph';
import "../../css/tankstats.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

export default function CurveExamples() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Balanced" {...a11yProps(0)} />
          <Tab label="Overpowered" {...a11yProps(1)} />
          <Tab label="Underpowered" {...a11yProps(2)} />
          <Tab label="High Skill Ceiling" {...a11yProps(3)} />
          <Tab label="Low Skill Ceiling" {...a11yProps(4)} />
          <Tab label="High Skill Floor" {...a11yProps(5)} />
          <Tab label="Low Skill Floor" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['T32']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['T32']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['Defender']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['Defender']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['Churchill GC']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['Churchill GC']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>      
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['Bourrasque']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['Bourrasque']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>      
        </div>      
      </TabPanel>
      <TabPanel value={value} index={4} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['O-I']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['O-I']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>      
        </div>      
      </TabPanel>
      <TabPanel value={value} index={5} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['T92 HMC']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['T92 HMC']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>      
        </div>      
      </TabPanel>
      <TabPanel value={value} index={6} dir={theme.direction}>
        <div className='grid'>
          <CurveGraph data={WRCurves['Obj. 140']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)"/>
          <CurveGraph data={WN8Curves['Obj. 140']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)"/>      
        </div>      
      </TabPanel>
    </div>
  );
}