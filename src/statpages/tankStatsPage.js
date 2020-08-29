import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import "../css/tankstats.css";
import Table from './tankStatsPageComponents/table';
import "../css/innerpage.css";

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
        <div className = 'narrowpage'>
          <Paper className={useStyles.paper}>
            <div style={{padding: '1rem', color: 'rgb(50,50,50)'}}>
              <span style={{fontSize: '1.5rem', fontWeight: '500'}}>Our Methodology</span><br/>
              <span style={{fontSize: '0.8rem', lineHeight: '1.3rem', color: 'rgb(100,100,100)'}}>UPDATED 8/26/2020</span> <br/>
              <span style={{fontSize: '0.9rem'}}>Our stats come from a random sample of ~4 million IDs from the NA server, approximately 10% of all registered accounts on the players.
              The 4% of these accounts that have over 100 battles are included here.<br/>
              These data do <em>not</em> come from our database, so they represent a representative sample of the NA playerbase.<br/>
              <span style={{fontSize: '1.2rem', fontWeight: '500', lineHeight: '3rem'}}>Where are EU and SEA stats?</span><br/>
              Currently, only stats for NA are available but stats for EU and SEA will come <strong>very soon™</strong> in the future. 
              Join the Tomato.gg <a target="blank" href="https://discord.gg/qA2bV7K">Discord server</a> to be up-to-date on website development<br/>
              <span style={{fontSize: '1.2rem', fontWeight: '500', lineHeight: '3rem'}}>There's no way the stats for [insert tank here] are so low/high!!!</span><br/>
              Currently, these stats are <em>overall</em> stats — which means we don't discriminate between whether a player is active or not. <br/>
              Therefore, newer tanks will have stats better reflect their state in the current meta compared to older tanks. The stats of recently nerfed or buffed tanks will also not perfectly reflect its current state. <br/><br/>

              Just because a tank isn't fum to play, it doesn't mean it's underpowered. Slow TDs with heavy armor like the british ATs are hated, but these vehicles are good for winrate because they have low skill floors and can tank shots for teammates. <br/><br/>

              Server stats for active accounts will come soon™.
              </span>
            </div>
          </Paper>
        </div>
        <div className = 'tanktable'>
          <Table/>
        </div>
        {/* <Example/> */}
      </div>
  );
}

