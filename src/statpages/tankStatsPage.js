import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "../css/tankstats.css";
import Table from './tankStatsPageComponents/table';

export default function TankStatsPage(props) {

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
        <div style={{margin: '1rem 0 1rem 0'}}>
          <Paper className={useStyles.paper}>
            <div style={{padding: '1rem', color: 'rgb(50,50,50)'}}>
              <span style={{fontSize: '1.2rem', fontWeight: '500'}}>Our Methodology</span><br/>
              <span style={{fontSize: '0.8rem', lineHeight: '1.3rem', color: 'rgb(100,100,100)'}}>UPDATED 8/26/2020</span> <br/>
              <span style={{fontSize: '0.9rem'}}>Our stats come from a random sample of ~4 million IDs from the NA server, approximately 10% of all registered accounts on the players.
              The 4% of these accounts that have over 100 battles are included here.<br/>
              These data do <em>not</em> come from our database, so they represent a representative sample of the NA playerbase.<br/>
              Stats for EU and SEA will come in the near future.
              </span>
            </div>
          </Paper>
        </div>
        <Table/>
        {/* <Example/> */}
      </div>
  );
}

