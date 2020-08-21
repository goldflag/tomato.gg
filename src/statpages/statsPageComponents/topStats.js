import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OverallStatsTable from './overallStatsTable.js';
import RecentTankStats from './allTankStats.js';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';
import PRcolor from '../../functions/PRcolor';

function battlesColor(battles) {
  if (battles < 1500) { return '#930D0D'; }
  else if (battles < 3000) { return '#CD3333'; }
  else if (battles < 6000) { return '#CC7A00'; }
  else if (battles < 12000) { return '#CCB800'; }
  else if (battles < 15000) { return '#849B24'; }
  else if (battles < 20000) { return '#4D7326'; }
  else if (battles < 30000) { return '#4099BF'; }
  else if (battles < 40000) { return '#3972C6'; }
  else if (battles < 50000) { return '#793DB6'; }
  else { return '#401070'; }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontFamily: 'roboto',
    color: 'rgb(30, 30, 30)',
  },
  playerName: {
    padding: theme.spacing(2),
    textAlign: 'left',
    fontFamily: 'roboto',
    color: 'rgb(30, 30, 30)',
    lineHeight: '1.2em'
  },
  colorBox: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontFamily: 'roboto',
    color: 'white',
  },
  boxData: {
    fontSize: '1.7em',
    fontWeight: '500'
  },
}));

export default function TopStats(props) {
  const classes = useStyles();

  const squareStats = {
      'overallWR': props.data.overallWinrate,
      'overallWN8': props.data.overallWN8, 
      'recentWR': props.data.recentWinrate,
      'recentWN8': props.data.recentWN8,
      'PR' : props.WGRating
  }
  
  let clanInfo = <></>
  if (props.clanStats != 'NO CLAN') {
    clanInfo = <span style={{color: 'white'}}> 
        {props.clanStats.role_i18n} at 
        <span style={{color: props.clanStats.clan.color, fontWeight: '600'}}> [{props.clanStats.clan.tag}] </span>
        <br/>
    </span>
  }

  const date = new Date(props.accountCreationDate * 1000);
  const creationDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
            <Paper className={classes.playerName} square elevation={2} style={{marginBottom: '1em', backgroundColor: WN8color(squareStats['overallWN8'])} }>
              <div style={{fontSize: '1.5em', fontWeight: '500', color: 'white', paddingBottom: '5px'}}>{props.username}</div> 
              {clanInfo}
              <span style={{color: 'white', fontSize: '0.8rem'}}>Account created {creationDate}</span>
            </Paper>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WRcolor(squareStats['overallWR'])}}>
                  <span style={{fontSize: '0.8em'}}>Overall WR</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['overallWR']}%</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WN8color(squareStats['overallWN8'])}}>
                  <span style={{fontSize: '0.8em'}}>Overall WN8</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['overallWN8']}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WRcolor(squareStats['recentWR'])}}>
                  <span style={{fontSize: '0.8em'}}>Recent WR</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['recentWR']}%</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: WN8color(squareStats['recentWN8'])}}>
                  <span style={{fontSize: '0.8em'}}>Recent WN8</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['recentWN8']}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: PRcolor(squareStats['PR'])}}>
                  <span style={{fontSize: '0.8em'}}>WG Rating</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{squareStats['PR']}</span>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper} square elevation={2} style={{padding: '2em 0.5em 2em 0.5em', color: 'white', backgroundColor: battlesColor(props.stats.battles)}}>
                  <span style={{fontSize: '0.8em'}}>Battles</span><br/>
                  <span style={{fontSize: '1.3em', fontWeight: '500'}}>{props.stats.battles}</span>
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
