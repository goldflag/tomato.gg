import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Heatmap from "./appbars/Heatmaps";
import TierDist from "./appbars/TierDist";
import ClanHistory from "./appbars/ClanHistory";
import MOEDist from "./appbars/MOEDist";
import NationDist from "./appbars/NationDist";
import ClassDist from "./appbars/ClassDist";
import ExpectedDist from "./appbars/ExpectedDist";
import RecordsBar from "./appbars/RecordsBar";
import LineGraphs from "./appbars/LineGraphs";
import { ThemeContext } from "../../context";
import "../../css/statspage.css";

export default function Charts(props) {
    const size = useWindowSize();
    const { theme } = React.useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            //padding: theme.spacing(2),
            textAlign: "left",
            fontFamily: "roboto",
            fontSize: "1.2em",
            backgroundColor: theme === "dark" ? "rgb(40, 40, 40)" : "white",
            color: "rgb(30, 30, 30)",
        },
        colorBox: {
            padding: t.spacing(2),
            textAlign: "center",
            fontFamily: "roboto",
        },
        boxData: {
            fontSize: "1.7em",
            fontWeight: "500",
        },
    }));

    const classes = useStyles();
    let output = <></>;

    const clanHistory = (
        <ClanHistory data={props.clanData} currentClan={props.currentClan} />
    );

    if (size.width > 1000) {
        output = (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <Heatmap
                                data={props.data.tankWN8byClassTier}
                                recentData={props.data.recentTankWN8byClassTier}
                                type={"wn8"}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <Heatmap
                                data={props.data.tankWRbyClassTier}
                                recentData={props.data.recentTankWRbyClassTier}
                                type={"wr"}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Paper
                                    className={classes.paper}
                                    square
                                    elevation={2}
                                >
                                    <NationDist
                                        data={props.data.NationDist}
                                        recentData={props.data.NationDistRecent}
                                    />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper
                                    className={classes.paper}
                                    square
                                    elevation={2}
                                >
                                    <ClassDist
                                        data={props.data.ClassDist}
                                        recentData={props.data.ClassDistRecent}
                                    />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <MOEDist
                                MOEdata={props.data.tierMoeDist}
                                MasteryData={props.data.tierMasteryDist}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <TierDist
                                data={props.data.tierDist}
                                recentData={props.data.tierDistRecent}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper
                            className={classes.paper}
                            square
                            elevation={2}
                            style={{ height: 348 }}
                        >
                            <ExpectedDist data={props.data.expectedRatios} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper
                            className={classes.paper}
                            square
                            elevation={2}
                            style={{ height: 348 }}
                        >
                            <RecordsBar data={props.stats} />
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper
                            className={classes.paper}
                            square
                            elevation={2}
                            style={{
                                height: 358,
                                overflowX: "hidden",
                                overflowY: "auto",
                            }}
                        >
                            {clanHistory}
                        </Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper
                            className={classes.paper}
                            square
                            elevation={2}
                            style={{ height: 358 }}
                        >
                            <LineGraphs
                                WN8={props.data.lineGraphWN8}
                                WR={props.data.lineGraphWR}
                                DPG={props.data.lineGraphDPG}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    } else {
        const darkStyle = {
            backgroundColor: theme === "dark" ? "rgb(40, 40, 40)" : "white",
            marginBottom: "1rem",
        };

        output = (
            <div
                className={
                    theme === "dark" ? "mobilechartsdark" : "mobilecharts"
                }
            >
                <Paper square elevation={2} style={darkStyle}>
                    <Heatmap
                        data={props.data.tankWN8byClassTier}
                        recentData={props.data.recentTankWN8byClassTier}
                        type={"wn8"}
                    />
                </Paper>
                <Paper className={classes.paper} square elevation={2}>
                    <Heatmap
                        data={props.data.tankWRbyClassTier}
                        recentData={props.data.recentTankWRbyClassTier}
                        type={"wr"}
                    />
                </Paper>
                <Paper square elevation={2} style={darkStyle}>
                    <TierDist
                        data={props.data.tierDist}
                        recentData={props.data.tierDistRecent}
                    />
                </Paper>
                <Paper
                    square
                    elevation={2}
                    style={{
                        marginBottom: "1rem",
                        height: 358,
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
                    }}
                >
                    {clanHistory}
                </Paper>
                <Paper
                    square
                    elevation={2}
                    style={{
                        marginBottom: "1.5rem",
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
                    }}
                >
                    <MOEDist
                        MOEdata={props.data.tierMoeDist}
                        MasteryData={props.data.tierMasteryDist}
                    />
                </Paper>
                <Paper square elevation={2} style={darkStyle}>
                    <NationDist
                        data={props.data.NationDist}
                        recentData={props.data.NationDistRecent}
                    />
                </Paper>
                <Paper square elevation={2} style={darkStyle}>
                    <ClassDist
                        data={props.data.ClassDist}
                        recentData={props.data.ClassDistRecent}
                    />
                </Paper>
                <Paper square elevation={2} style={darkStyle}>
                    <ExpectedDist data={props.data.expectedRatios} />
                </Paper>
                <Paper
                    square
                    elevation={2}
                    style={{
                        marginBottom: "1.5rem",
                        height: 348,
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
                    }}
                >
                    <RecordsBar data={props.stats} />
                </Paper>
                <Paper
                    square
                    elevation={2}
                    style={{
                        marginBottom: "-1rem",
                        height: 348,
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 40)" : "white",
                    }}
                >
                    <LineGraphs
                        WN8={props.data.lineGraphWN8}
                        WR={props.data.lineGraphWR}
                        DPG={props.data.lineGraphDPG}
                    />
                </Paper>
            </div>
        );
    }

    return <div>{output}</div>;
}

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}
