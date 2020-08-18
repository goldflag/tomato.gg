import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WN8Map from './appbars/WN8Map';
import TierDist from './appbars/TierDist';
import ClanHistory from './appbars/ClanHistory';
import MOEDist from './appbars/MOEDist';
import NationDist from './appbars/NationDist';
import ClassDist from './appbars/ClassDist';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    //padding: theme.spacing(2),
    textAlign: 'left',
    fontFamily: 'roboto',
    fontSize: '1.2em',
    color: 'rgb(30, 30, 30)',
  },
  colorBox: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontFamily: 'roboto',
  },
  boxData: {
      fontSize: '1.7em',
      fontWeight: '500'
  }
}));

export default function Charts(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <Paper className={classes.paper} square elevation={2}>
                {/* <span style={{fontWeight: 500}}>WN8 Distribution</span>
                <TierWN8Distribution data={props.data.WN8Dist}/> */}
              {/* <WN8Map data={props.data.WN8ClassDist} />                 */}
              
              <WN8Map data={props.classWN8} />
            </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} square elevation={2}>
            <TierDist data={props.data.tierDist} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper} square elevation={2} style={{ height: 358, overflowX: 'hidden', overflowY: 'auto'}}>
            <ClanHistory data={props.clanData} currentClan={props.currentClan} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} square elevation={2}>
            <MOEDist MOEdata={props.data.tierMoeDist} MasteryData={props.data.tierMasteryDist}/> 
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper className={classes.paper} square elevation={2}>
                  <NationDist data={props.data.NationDist}/>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} square elevation={2}>
                  <ClassDist data={props.data.ClassDist}/>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}