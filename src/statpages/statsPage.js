import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import TopStats from './statsPageComponents/topStats';
import "../css/style.css";
import CircularProgress from '@material-ui/core/CircularProgress';
import RecentTankStats from "./statsPageComponents/recentTankStats";
import TankStatsCalculator from '../functions/TankStatsCalculator';
import GraphCalculator from '../functions/GraphCalculator';
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

const serverConv = { 'NA': 'com', 'EU': 'eu', 'ASIA': 'asia', 'RU': 'ru' }

export default function StatsPage(props) {
    const [validID, setValidID] = useState(true);
    
    // Combines StatsTable and TankTable into single component
    let StatTable = CircularIndeterminate();
    // Maps tank ID to basic information about a vehicle
    const [tankNames, setTankNames] = useState('');
    const [username, setUserName] = useState('');
    const [stats, setStats] = useState([]);
    const [tanksstats, setTanksstats] = useState('');
    const [statsJson, setStatsJson] = useState([]);
    const [WGRating, setWGRating] = useState('');
    const [MOEstats, setMOEstats] = useState('');
    const [clanStats, setClanStats] = useState('');
    const [accountCreationDate, setAccountCreationDate] = useState('');
    const [clanHistory, setClanHistory] = useState('');

    const [recentStats, setRecentStats] = useState('');


    let id = "";
    let server = ""

    // Runs once when component mounts
    useEffect(() => {
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
        // https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=bd589e105895f2f6b8af31f27da3e05e&fields=short_name%2C+tier%2C+type%2C+nation%2C+is_premium%2C+is_gift
        const tankList = await fetch(`https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=${APIKey}&fields=short_name%2C+tier%2C+type%2C+nation%2C+is_premium%2C+is_gift`);
        const data  = await tankList.json();
        setTankNames(data.data);
    }

    const searchStats = async () => {
        const url = `https://api.worldoftanks.${server}/wot/account/info/?application_id=${APIKey}&account_id=${id}`;
        const url2 = `https://api.worldoftanks.${server}/wot/tanks/stats/?application_id=${APIKey}&account_id=${id}&fields=mark_of_mastery%2C+tank_id%2C+all`;
        const url3 = `https://api.worldoftanks.${server}/wot/tanks/achievements/?application_id=${APIKey}&account_id=${id}&fields=achievements%2C+tank_id`;
        const url4 = `https://api.worldoftanks.${server}/wot/clans/accountinfo/?application_id=${APIKey}&account_id=${id}`;
        const url5 = `https://api.worldoftanks.${server}/wot/clans/memberhistory/?application_id=${APIKey}&account_id=${id}`

        try {
            Promise.all([
                fetch(url),
                fetch(url2),
                fetch(url3),
                fetch(url4),
                fetch(url5)
            ])
            .then(([res1, res2, res3, res4, res5]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json()]))
            .then(([data1, data2, data3, data4, data5]) => 
            {
              setStats(data1.data[id].statistics.all);
              setTanksstats(data2.data[id]);
              setUserName(data1.data[id].nickname);
              setWGRating(data1.data[id].global_rating);
              setMOEstats(data3.data[id]);
              setAccountCreationDate(data1.data[id].created_at);
              setClanHistory(data5.data[id]);
              if (data1.data[id].statistics.all.battles === 0) {
                setValidID(false);
              }
              if (data4.data[id] != null) {
                setClanStats(data4.data[id]);
              }
              else {
                setClanStats('NO CLAN');
              }
            });
        }
        catch(err){
            console.error(err);
        }
    }    

  //     // https://api.worldoftanks.com/wot/account/info/?application_id=bd589e105895f2f6b8af31f27da3e05e&account_id=1011694618
  //     // https://api.worldoftanks.com/wot/tanks/stats/?application_id=bd589e105895f2f6b8af31f27da3e05e&account_id=1011694618&fields=mark_of_mastery%2C+tank_id%2C+all
  // //  https://api.worldoftanks.com/wot/tanks/achievements/?application_id=bd589e105895f2f6b8af31f27da3e05e&account_id=${id}&fields=achievements%2C+tank_id
  // //  https://api.worldoftanks.com/wot/clans/accountinfo/?application_id=bd589e105895f2f6b8af31f27da3e05e&account_id=${id}
  // //  https://api.worldoftanks.com/wot/clans/memberhistory/?application_id=bd589e105895f2f6b8af31f27da3e05e&account_id=${id}

    if (validID === false) {
        StatTable = <>
                        <span style={{fontSize:'2rem'}}>Player {username} not found</span>
                        <br/>
                        <br/>
                        Make sure the username and region are correct.
                    </>
    }

    if (WGRating && username && stats && tanksstats && MOEstats && clanStats && clanHistory && accountCreationDate && validID === true) {

        const overall = TankStatsCalculator(tanksstats, MOEstats, stats.battles);
        const graphData = GraphCalculator(overall.tankWN8, stats, overall.overallWN8);
        StatTable = <>
                        <div style = {{padding: '1em 0em'}}>
                          <TopStats username = {username} WGRating = {WGRating} data = {graphData} stats = {stats} clanStats = {clanStats} accountCreationDate = {accountCreationDate}/>
                        </div>
                        <div style = {{minHeight: '300px'}}>
                          <Charts data = {graphData} clanData = {clanHistory} currentClan = {clanStats} classWN8 = {overall.tankWN8byClassTier}/>
                        </div>
                        <div style = {{padding: '1em 0em'}}>
                          <RecentTankStats overallStats = {overall.tankWN8} />

                          {/* <TankStats tankStats.js = {overall.tankWN8} /> */}
                        </div>
                    </>
    } 
    
    return (
        <div style = {{padding: '2em', paddingTop: '5em'}}>
          {StatTable}
        </div>
    );
}