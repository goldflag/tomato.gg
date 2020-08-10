import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TopStats from './statsPageComponents/topStats';
import "../css/style.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import TankStats from "./statsPageComponents/tankStats";
import TankStatsCalculator from '../functions/TankStatsCalculator.js';
import GraphCalculator from '../functions/GraphCalculator.js';
import Example from "./statsPageComponents/example";
import Charts from './statsPageComponents/charts';

const APIKey = process.env.REACT_APP_API_KEY;

const useStyles = makeStyles((theme) => ({
  loading: {
    display: 'flex',
    justifyContent:'center',
    paddingTop: '40vh',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress color="secondary" />
    </div>
  );
}

const page = {
    maxWidth: '85%',
    margin: '0 auto',
    padding: '100px 50px 50px 50px',
    fontFamily: 'Tahoma'
}

const serverConv = {
    'NA': 'com',
    'EU': 'eu',
    'ASIA': 'asia',
    'RU': 'ru',
}

export default function StatsPage(props) {
    const [validID, setValidID] = useState(true);
    
    // Combines StatsTable and TankTable into single component
    let StatTable = CircularIndeterminate();
    // Maps tank ID to basic information about a vehicle
    const [tankNames, setTankNames] = useState('');
    const [username, setUserName] = useState('');
    const [stats, setStats] = useState([]);
    const [tanksstats, setTanksstats] = useState('');
    const [MOEstats, setMOEstats] = useState('');
    const [statsJson, setStatsJson] = useState([]);

    const [WGRating, setWGRating] = useState('');

    let id = "";
    let server = ""

    // Runs once when component mounts
    useEffect(() => {
        FetchTankData();
        const windowUrl = window.location.pathname;
        const urlParams = windowUrl.substring(7).split('/');
        const nameIdSplit = urlParams[1].split('=')
        server = serverConv[urlParams[0]];        
        setUserName(nameIdSplit[0]);

        id = nameIdSplit[1];
        if (id === "FAIL") {
            setValidID(false);
        }
        else {
            setValidID(true);
            searchStats();
        }
    }, []);

    //Fetches object that points a tank's numerical ID to it's name, tier, premium status, and class
    async function FetchTankData() {
        const tankList = await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${APIKey}&fields=short_name%2C+tier%2C+type%2C+nation%2C+is_premium%2C+is_gift`);
        const data  = await tankList.json();
        setTankNames(data.data);
    }

    const searchStats = async () => {
        const url = `https://api.worldoftanks.${server}/wot/account/info/?application_id=${APIKey}&account_id=${id}`;
        const url2 = `https://api.worldoftanks.${server}/wot/tanks/stats/?application_id=${APIKey}&account_id=${id}&fields=mark_of_mastery%2C+tank_id%2C+all`;
        const url3 = `https://api.worldoftanks.${server}/wot/tanks/achievements/?application_id=${APIKey}&account_id=${id}&fields=achievements%2C+tank_id`;
        try {
            Promise.all([
                fetch(url),
                fetch(url2),
                fetch(url3)
            ])
            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([data1, data2, data3]) => 
            {
              console.log(data2.data[id]);
              setStats(data1.data[id].statistics.all);
              setTanksstats(data2.data[id]);
              setMOEstats(data3.data[id]);
              setUserName(data1.data[id].nickname);
              setWGRating(data1.data[id].global_rating);
            });
        }
        catch(err){
            console.error(err);
        }
    }    

    if (validID === false) {
        StatTable = <>
                        <p>Invalid Username</p>
                    </>
    }

    if (username && tankNames && stats && tanksstats && MOEstats && validID === true) {

        const overall = TankStatsCalculator(tankNames, tanksstats, MOEstats);
        console.log(overall);
        const graphData = GraphCalculator(overall, stats);
        StatTable = <>
                        <div style = {{padding: '1em 0em'}}>
                          <TopStats username = {username} WGRating = {WGRating} data = {graphData}/>
                        </div>
                        <div style = {{minHeight: '300px'}}>
                          <Charts data = {graphData}/>
                        </div>
                        <div style = {{padding: '1em 0em'}}>
                          <TankStats overallStats = {overall} />
                          {/* <TankStats stats = {tanksstats} tankNames = {tankNames} MOEstats = {MOEstats}/> */}
                        </div>
                    </>
    } 
    
    return (
        <div style = {{padding: '2em', paddingTop: '5em'}}>
          {StatTable}
        </div>
    );
}