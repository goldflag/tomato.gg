import React from "react";
import Table from './tankStatsPageComponents/table';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "../css/tankstats.css";

export default function TankStatsPage(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '1rem 0rem 2rem 0 rem',
      textAlign: 'center',
      fontFamily: 'roboto',
      color: 'rgb(30, 30, 30)',
    },
  }));

  return (
      <div style = {{padding: '2em', paddingTop: '5em'}}>
        <div style={{margin: '1rem 0 1rem 0'}}>
        <Paper className={useStyles.paper}>
          <div style={{padding: '1rem', color: 'rgb(50,50,50)'}}>
            <span style={{fontSize: '1.2rem', fontWeight: '500'}}>Our Methodology</span><br/>
            <span style={{fontSize: '0.9rem'}}>Our stats come from a random sample of ~4 million IDs from the NA server, approximately 10% of all registered accounts on the players.
            The 4% of these accounts that have over 100 battles are included here.<br/>
            You may have noticed these tank stats are lower than those on sites like Wotlabs, Tanks.gg, and Noobmeter. Those sites calculate server stats from their database, which oversamples better players as they are more likely to look up their stats.
            </span>
          </div>
        </Paper>
        </div>
        <Table/>
      </div>
  );
}

