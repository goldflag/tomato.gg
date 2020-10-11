import React, {useEffect} from "react";
import ReactGA from 'react-ga';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../css/tankstats.css";
import "../css/innerpage.css";
import Test from './tankPageComponents/test';
const trackingId = process.env.REACT_APP_GA;

export default function TankPage(props) {

  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/tank-page');
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  const grid = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gridTemplateRows: '500px',
  }

  return (
      <div style = {{padding: '2em', paddingTop: '5em'}}>
        <div className = 'narrowpage'>
          <Paper className={useStyles.paper}>
            <div style={{padding: '1rem', color: 'rgb(50,50,50)'}}>
            </div>
          </Paper>
          <div style={{display: 'flex', justifyContent: 'flex-start', padding: '1rem 1rem 1rem 0rem'}}>
              <img src='http://api.worldoftanks.com/static/2.66.0/wot/encyclopedia/vehicle/ussr-R04_T-34.png' alt='1'/>
              <div style={{display: 'block', padding: '1rem 1rem 1rem 0rem'}}>
                <span style={{fontSize: '2rem'}}>T-34</span><br/>
                <span style={{fontSize: '1rem'}}>Tier 5 Russian Medium Tank</span>
              </div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={8}>
                <div style={{backgroundColor: 'rgb(255, 255, 255)', height: '20rem', width: '100%'}}>
                    <Test />
                </div>
            </Grid>
            <Grid item xs={4}>
                <Test />
            </Grid>
            <Grid item xs={8}>
            </Grid>
            <Grid item xs={4}>
            </Grid>
          </Grid>

        </div>
        <div className = 'tanktable'>
        </div>
      </div>
  );
}

