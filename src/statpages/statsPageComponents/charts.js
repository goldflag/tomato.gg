import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WN8Map from './appbars/WN8Map';
import TierDist from './appbars/TierDist';
import ClanHistory from './appbars/ClanHistory';
import MOEDist from './appbars/MOEDist';
import NationDist from './appbars/NationDist';
import ClassDist from './appbars/ClassDist';
import ExpectedDist from './appbars/ExpectedDist';
import RecordsBar from './appbars/RecordsBar';
import LineGraphs from './appbars/LineGraphs';

import '../../css/statspage.css';

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
  
  const size = useWindowSize();

  let output = <></>;   

  const [clanHistory, setClanHistory] = useState('');
  useEffect(() => {
    setClanHistory(<ClanHistory data={props.clanData} currentClan={props.currentClan} />);
  }, []);

  if (size.width > 1000) {
    output = 
    <div /*className='charts'*/>
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
          <TierDist data={props.data.tierDist} recentData={props.data.tierDistRecent}/>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper} square elevation={2} style={{ height: 358, overflowX: 'hidden', overflowY: 'auto'}}>
          {clanHistory}
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
            <NationDist data={props.data.NationDist} recentData={props.data.NationDistRecent}/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} square elevation={2}>
              <ClassDist data={props.data.ClassDist} recentData={props.data.ClassDistRecent}/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
          <Paper className={classes.paper} square elevation={2}>
            <ExpectedDist data={props.expectedRatios} />
          </Paper>
      </Grid>
      <Grid item xs={3}>
          <Paper className={classes.paper} square elevation={2} style={{ height: 348 }}>
            <RecordsBar data={props.stats} />
          </Paper>
      </Grid>
      <Grid item xs={6}>
          <Paper className={classes.paper} square elevation={2} style={{ height: 348 }}>
            <LineGraphs />
          </Paper>
      </Grid>
    </Grid>
    </div>
  }
  else {
    output = <div className='mobilecharts' >
    <Paper square elevation={2} style={{marginBottom: '1rem'}}>              
      <WN8Map data={props.classWN8} />
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '1rem'}}>
      <TierDist data={props.data.tierDist} recentData={props.data.tierDistRecent}/>
    </Paper>
    <Paper square elevation={2} style={{ marginBottom: '1rem', height: 358, overflowX: 'hidden', overflowY: 'auto'}}>
      {clanHistory}
    </Paper>
    <Paper  square elevation={2} style={{marginBottom: '1.5rem'}}>
      <MOEDist MOEdata={props.data.tierMoeDist} MasteryData={props.data.tierMasteryDist}/> 
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '1rem'}}>
      <NationDist data={props.data.NationDist} recentData={props.data.NationDistRecent}/>
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '1rem'}}>
      <ClassDist data={props.data.ClassDist} recentData={props.data.ClassDistRecent}/>
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '1rem'}}>
      <ExpectedDist data={props.expectedRatios} />
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '1.5rem', height: 348 }}>
      <RecordsBar data={props.stats} />
    </Paper>
    <Paper square elevation={2} style={{marginBottom: '-1rem', height: 348 }}>
      <LineGraphs />
    </Paper>
  </div>;
  }

  return (
    <div>
      {output}
    </div>
  );
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