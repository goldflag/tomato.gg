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

export default function Charts(props) {
    const size = useWindowSize();

    const useStyles = makeStyles((t) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            //padding: theme.spacing(2),
            textAlign: "left",
            fontFamily: "Roboto Mono",
            fontSize: "1.2em",
            backgroundColor: "rgba(40, 40, 70, 0.4)",
            backdropFilter: "blur( 7px )",
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

    const clanHistory = <ClanHistory data={props.clanData} currentClan={props.currentClan} />;

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
                    <Grid item xs={12}>
                        <Paper className={classes.paper} square elevation={2} style={{ height: 387 }}>
                            <LineGraphs
                                WN8={props.data.lineGraphWN8}
                                WR={props.data.lineGraphWR}
                                DPG={props.data.lineGraphDPG}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Paper className={classes.paper} square elevation={2}>
                                    <NationDist data={props.data.NationDist} recentData={props.data.NationDistRecent} />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper className={classes.paper} square elevation={2}>
                                    <ClassDist data={props.data.ClassDist} recentData={props.data.ClassDistRecent} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <MOEDist MOEdata={props.data.tierMoeDist} MasteryData={props.data.tierMasteryDist} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper} square elevation={2}>
                            <TierDist data={props.data.tierDist} recentData={props.data.tierDistRecent} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} square elevation={2} style={{ height: 348 }}>
                            <ExpectedDist data={props.data.expectedRatios} />
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} square elevation={2} style={{ height: 348 }}>
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
                </Grid>
            </div>
        );
    } else {
        output = (
            <div style={{ marginBottom: "1rem" }}>
                <Paper
                    className={classes.paper}
                    square
                    elevation={2}
                    style={{
                        height: 387,
                    }}
                >
                    <LineGraphs
                        WN8={props.data.lineGraphWN8}
                        WR={props.data.lineGraphWR}
                        DPG={props.data.lineGraphDPG}
                    />
                </Paper>
                <Paper className={classes.paper} square elevation={2}>
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
                <Paper className={classes.paper} square elevation={2}>
                    <TierDist data={props.data.tierDist} recentData={props.data.tierDistRecent} />
                </Paper>
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
                <Paper className={classes.paper} square elevation={2}>
                    <MOEDist MOEdata={props.data.tierMoeDist} MasteryData={props.data.tierMasteryDist} />
                </Paper>
                <Paper className={classes.paper} square elevation={2}>
                    <NationDist data={props.data.NationDist} recentData={props.data.NationDistRecent} />
                </Paper>
                <Paper className={classes.paper} square elevation={2}>
                    <ClassDist data={props.data.ClassDist} recentData={props.data.ClassDistRecent} />
                </Paper>
                <Paper className={classes.paper} square elevation={2}>
                    <ExpectedDist data={props.data.expectedRatios} />
                </Paper>
                <Paper
                    className={classes.paper}
                    square
                    elevation={2}
                    style={{
                        height: 348,
                    }}
                >
                    <RecordsBar data={props.stats} />
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
