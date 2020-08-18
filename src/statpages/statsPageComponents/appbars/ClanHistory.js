import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const APIKey = process.env.REACT_APP_API_KEY;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box padding={0}>
            {children}
          </Box>
        )}
      </div>
    );
  }

const CustomTabs = withStyles({
  root: {
    elevation: 10,
    backgroundColor: 'rgb(76, 90, 166)',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'rgb(214, 43, 97)',
    },
  },
})(Tabs);

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: 600,
    marginRight: theme.spacing(4),
    fontFamily: '"Segoe UI"',
    color: 'rgb(250, 250, 250)',
    '&:focus': {
        opacity: 1,
      },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const serverConv = { 'NA': 'com', 'EU': 'eu', 'ASIA': 'asia', 'RU': 'ru' }

export default function ClanHistory(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  let server = "";
  const [clanList, setClanList] = useState('')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Runs once when component mounts
  useEffect(() => {
      getClanData();
  }, []);

  function getClanData() {
    const windowUrl = window.location.pathname;
    const urlParams = windowUrl.substring(7).split('/');
    server = serverConv[urlParams[0]];     
    let URL = `https://api.worldoftanks.${server}/wot/clans/info/?application_id=${APIKey}&clan_id=`;

    props.data.map((row) => {
      URL += `${row.clan_id}%2C+`;
    });

    URL = URL.slice(0, -4);

    fetch(URL)
    .then((data) => data.json())
    .then((clanData) => {
      let tempList = props.data;

      tempList.map((row) => {
        row["clan_name"] = clanData.data[row.clan_id].tag;
        row["color"] = clanData.data[row.clan_id].color;
        if (clanData.data[row.clan_id].emblems != null) {
          row["icon"] = clanData.data[row.clan_id].emblems.x64.wot;
        }
      });
      if (props.currentClan !== 'NO CLAN') {
        let currentClan = {
          "clan_name": props.currentClan.clan.tag,
          "color" : props.currentClan.clan.color,
          "joined_at" : props.currentClan.joined_at,
          "icon" : props.currentClan.clan.emblems.x64.wot,
          "left_at" : props.currentClan.clan.color
        }
        tempList.unshift(currentClan);
      }
      setClanList(tempList);
    })

  }

  function Unit() {
    return clanList.map((row) => {
      if (row.clan_name) {
        let date = new Date(row.joined_at * 1000);
        const joinDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        date = new Date(row.left_at * 1000);
        let leftDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        if (isNaN(date.getMonth())) leftDate = `Current`;
        return (
            <Grid item xs={4}>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                  <div style={{ margin: 'auto', width: '80%', fontSize: '16px', color: row.color }}>
                    <img src={row.icon} alt={row.clan_name}/>
                    <span style={{display: 'flex', justifyContent: 'center', fontWeight: '500'}}>
                    {`[${row.clan_name}]`}
                    </span>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px', fontWeight: '500'}}>
                      <span style={{textAlign: 'left', fontSize: '14px'}}>
                      <span style={{textAlign: 'left', fontSize: '13px', fontWeight: '400', color: 'rgb(100, 100, 100)'}}>Joined:</span>
                      <br/>
                      {joinDate}
                      <br/>
                      <span style={{textAlign: 'left', fontSize: '13px', fontWeight: '400', color: 'rgb(100, 100, 100)'}}>Left:</span>
                      <br/>
                      {leftDate}
                      </span>
                    </div>
                </Grid>
              </Grid>
            </Grid>
        );
      }
    });
  }

  let clanInfo = <></>;

  if (clanList) {
    clanInfo = Unit();
  }
  if (props.currentClan === 'NO CLAN') {
    clanInfo = <>
    This player has no clan data
    </>
  }

  return (
    <div className={classes.root}>
      <div>
        <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
          <CustomTab label="CLAN HISTORY" /> 
        </CustomTabs>
        <TabPanel value={value} index={0} >
          <div style={{padding: '10px 0px 0px 10px' }}>
            <Grid container spacing={1}>
              {clanInfo}
            </Grid>
          </div>
        </TabPanel>
      </div>            
    </div>
  );
}