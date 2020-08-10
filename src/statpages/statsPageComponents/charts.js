import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import OverallStatsTable from './overallStatsTable.js';
import WN8color from '../../functions/WN8color';
import WRcolor from '../../functions/WRcolor';
import TierWN8Distribution from './charts/TierWN8Distribution';
import TierDistribution from './charts/TierDistribution';
import NationDistribution from './charts/NationDistribution';
import ClassDistribution from './charts/ClassDistribution.js';

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

export default function Charts(props) {
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
        <Grid item xs={7}>
            <Paper className={classes.paper} square elevation='5' style={{marginBottom: '0em'}}>
                <span style={{fontWeight: 500}}>WN8 Distribution</span>
                <TierWN8Distribution data={props.data.WN8Dist}/>
            </Paper>
        </Grid>
        <Grid item xs={5}>
            <Paper className={classes.paper} square elevation='5' style={{marginBottom: '0em'}}>
                <span style={{fontWeight: 500}}>Tier Distribution</span>
                <TierDistribution data={props.data.tierDist}/>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper className={classes.paper} square elevation='5' style={{marginBottom: '0em'}}>
                <span style={{fontWeight: 500}}>Nation Distribution</span>
                <NationDistribution data={props.data.NationDist}/>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper className={classes.paper} square elevation='5' style={{marginBottom: '0em'}}>
                <span style={{fontWeight: 500}}>Nation Distribution</span>
                <ClassDistribution data={props.data.ClassDist}/>
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}