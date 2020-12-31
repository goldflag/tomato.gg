import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import WRCurves from '../../data/WRCurves.json';
import WN8Curves from '../../data/WN8Curves.json';
import CurveGraph from '../tankStatsPageComponents/curveGraph';
import { ThemeContext } from '../../style/theme.js';
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
                    <div>{children}</div>
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

export default function InDepthExamples() {
    const { theme } = React.useContext(ThemeContext);
    const classes = useStyles();
    const t = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div style={{ backgroundColor: theme === 'dark' ? 'rgb(45, 45, 45)' : 'white' }}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="rgb(200,10,10)"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="AT 8" {...a11yProps(0)} />
                        <Tab label="Progetto 46" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={1} dir={t.direction}>
                    <div className='grid'>
                        <CurveGraph data={WRCurves['Progetto 46']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)" />
                        <CurveGraph data={WN8Curves['Progetto 46']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)" />
                    </div>

            As you can see, most of the tank curve is above the overall curve, which means Progetto 46 players have higher winrates and WN8s in the Progetto than their overall stats.
            This confirms the community consensus that the Progetto is overpowered.
            <br /><br />
            However, you have probably noticed that the portion of the tank curve for lower winrates and WN8s is not that different from the overall reference curve.
            This means the Progetto is not overpowered in the hands of a shitter.
            This confirms the idea that autoreloaders like the Progetto 46 have a high skill ceiling.
        </TabPanel>
                <TabPanel value={value} index={0} dir={t.direction}>
                    <div className='grid'>
                        <CurveGraph data={WRCurves['AT 8']} type='Winrate' smallType='WR' color="rgb(230, 57, 103)" />
                        <CurveGraph data={WN8Curves['AT 8']} type='WN8' smallType='WN8' color="rgb(212, 38, 186)" />
                    </div>

          The AT 8 is considered to be a noob tank. It's a casemate TD, has good armor, and the terrible mobility prevents the most important skill elite players have: relocation.
          The winrate curve for the AT 8 appears to confirm this. The tank curve is higher at the lower overall winrates, but drops down to the reference curve at higher overall winrate.<br /><br />

          The WN8 curve for the AT 8 is also quite interesting. It sits entirely below the reference curve, meaning the AT 8 is really bad for WN8 padding (especially if you are a good player).<br />
          Don't mind the the sudden dropoff at the unicum WN8s — the datapoints are very noisy and sparse at those levels.
        </TabPanel>
            </div>
        </div>
    );
}