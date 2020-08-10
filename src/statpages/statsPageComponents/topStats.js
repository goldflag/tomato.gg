import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OverallStatsTable from './overallStatsTable.js';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'roboto',
    color: 'rgb(30, 30, 30)',
  },
  colorBox: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: 'roboto',
    color: 'white',
  },
  boxData: {
      fontSize: '1.7em',
      fontWeight: '500'
  }
}));

export default function TopStats(props) {
  const classes = useStyles();

  const squareStats = {
      'overallWR': '54.76',
      'overallWN8': '2401', 
      'recentWR': '61.42',
      'recentWN8': '3542'  
  }
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
            <Paper className={classes.paper} square elevation='3' style={{marginBottom: '1em'}}>
                {props.username} Youjo
            </Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation='5' style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WRcolor(squareStats['overallWR'])}}>
                  <span style={{fontSize: '0.8em'}}>Overall WR</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['overallWR']}%</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation='5' style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WN8color(squareStats['overallWN8'])}}>
                  <span style={{fontSize: '0.8em'}}>Overall WN8</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['overallWN8']}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation='5' style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WRcolor(squareStats['recentWR'])}}>
                  <span style={{fontSize: '0.8em'}}>Recent WR</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['recentWR']}%</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation='5' style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WN8color(squareStats['recentWN8'])}}>
                  <span style={{fontSize: '0.8em'}}>Recent WN8</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['recentWN8']}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation='5' style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WN8color(squareStats['recentWN8'])}}>
                  <span style={{fontSize: '0.8em'}}>WG Rating</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{props.WGRating}</span>
                </Paper>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={9}>
            <OverallStatsTable data = {props.data.overallStats}/> 
        </Grid>
      </Grid>
    </div>
  );
}
