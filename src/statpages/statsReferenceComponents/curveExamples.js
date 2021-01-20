import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import WRCurves from "../../data/WRCurves.json";
import WN8Curves from "../../data/WN8Curves.json";
import CurveGraph from "../tankStatsPageComponents/curveGraph";
import { ThemeContext } from "../../context";
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
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: "100%",
    },
}));

export default function CurveExamples() {
    const { theme } = React.useContext(ThemeContext);
    const classes = useStyles();
    const t = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div
                style={{
                    backgroundColor:
                        theme === "dark" ? "rgb(45, 45, 45)" : "white",
                }}
            >
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="Balanced(T32)" {...a11yProps(0)} />
                        <Tab label="Over Powered(Defender)" {...a11yProps(1)} />
                        <Tab label="Under Powered(CGC)" {...a11yProps(2)} />
                        <Tab label="High Skill Ceiling(Borrasque)" {...a11yProps(3)} />
                        <Tab label="Low Skill Ceiling(O-I)" {...a11yProps(4)} />
                        <Tab label="High Skill Floor(T92 HMC)" {...a11yProps(5)} />
                        <Tab label="Low Skill Floor(140)" {...a11yProps(6)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["T32"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"

                        />
                        <CurveGraph
                            data={WN8Curves["T32"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["Defender"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["Defender"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["Churchill GC"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["Churchill GC"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["Bourrasque"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["Bourrasque"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={4} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["O-I"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["O-I"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={5} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["T92 HMC"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["T92 HMC"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={6} dir={t.direction}>
                    <div className="grid">
                        <CurveGraph
                            data={WRCurves["Obj. 140"]}
                            type="Winrate"
                            smallType="WR"
                            color="rgb(230, 57, 103)"
                        />
                        <CurveGraph
                            data={WN8Curves["Obj. 140"]}
                            type="Tank WN8"
                            smallType="WN8"
                            color="rgb(212, 38, 186)"
                        />
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}
