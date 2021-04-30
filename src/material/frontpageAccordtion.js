import React from 'react';
import Accordions from '@material-ui/core/Accordion';
import AccordionS from '@material-ui/core/AccordionSummary';
import AccordionD from '@material-ui/core/AccordionDetails';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from "styled-components";
import Highlight from 'react-highlight.js';

const ExpandMoreIcon = styled(ExpandMore)`
    color: white;
`
const Accordion = styled(Accordions)`
    background-color: rgba(0, 0, 0, 0) !important;
    color: white !important;
`
const AccordionSummary = styled(AccordionS)`
    background-color: #4C5AA6 !important;
    color: white !important;
`

const AccordionDetails = styled(AccordionD)`
    background-color: rgba(40, 40, 70, 0.5) !important;
    color: white !important;
`

const WN8Function = `// Javascript implementation of WN8 formula
// This function only calculates WN8 for a single tank
// Account-wide WN8 values are calculated sligtly differently, but none of the hardcoded constants change. 

function calculateWN8(id, avgDamage, avgDef, avgFrag, avgSpots, winrate) {
    // Object that contains the expected values for a tank
    const exp = WN8[id];

    const rDAMAGE   = avgDamage / exp.expDamage;
    const rSPOT     = avgSpots / exp.expSpot;
    const rFRAG     = avgFrag / exp.expFrag;
    const rDEF      = avgDef / exp.expDef;
    const rWIN      = winrate / exp.expWinRate;

    const rWINc     = Math.max(0, (rWIN - 0.71) / (1 - 0.71));
    const rDAMAGEc  = Math.max(0, (rDAMAGE - 0.22) / (1 - 0.22));
    const rFRAGc    = Math.max(0, Math.min(rDAMAGEc + 0.2, (rFRAG - 0.12) / (1 - 0.12)));
    const rSPOTc    = Math.max(0, Math.min(rDAMAGEc + 0.1, (rSPOT - 0.38) / (1 - 0.38)));
    const rDEFc     = Math.max(0, Math.min(rDAMAGEc + 0.1, (rDEF - 0.1) / (1 - 0.1)));

    const WN8 =
        980 * rDAMAGEc +
        210 * rDAMAGEc * rFRAGc +
        155 * rFRAGc * rSPOTc +
        75 * rDEFc * rFRAGc +
        145 * Math.min(1.8, rWINc);

    return WN8;
}`;

export default function FrontpageAccordion() {

  return (
    <div>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          What is Tomato.gg?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            Tomato.gg is a statistics database and tracker for World of Tanks PC. It tracks the stats of over a million active active players on the European, American, and Asian servers. 
            We will add tracking for the CIS (Russian) cluster once enough Russians beg for it. 
            <br/>
            <br/>
            I'm a 20 year old computer science student in the United States, and I began work on Tomato.gg in July of 2020. 
            I've recieved extensive help from Superdude3800 and this website would not be nearly as good as it is without him. 
            <br/>
            <br/>
            We created Tomato.gg because even though there were a lot of existing WoT stats sites, none of them were very good. 
            World of Tanks Blitz is a game kids play on their phone with a tiny playerbase compared to PC, but the <a href="https://www.blitzstars.com/" target="blank">main stats site for Blitz</a> is miles better than anything PC had before Tomato.gg.
            If you like having your stats update right after a battle, use Tomato.gg.  
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How can I support Tomato.gg?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            Tomato.gg is a expensive and labor consuming to run. 
            Because our site has so many more features than any other fan-made World of Tanks site apart from Tanks.gg and Wotinspector.net, it's quite labor intensive to maintain. 
            <br/>
            <br/>
            Our only sources of revenue are advertisements and donations. If you have an adblock, please whitelist us (I know you won't). If our ads are too cancer, feel free to turn.
            If you spend hundreds of dollars on premium tanks, consider donating a fraction of that amount to us. We provide a lot more value than a shitty tank that'll be powercrept by the next lootbox tanks. 
            <br/>
            <br/>
            The best way to support us is to tell your friends and clanmates about Tomato.gg. Tomato.gg hasn't been around for awhile, and most players haven't heard of it yet. We only grow via word of mouth. 
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          What is WN8 and how does it work?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            WN8 is a player created statistic that attempts to measure skill, and has been a standard in the WoT community for many years now. 

            The higher your WN8, the more you are worth as a human being. 

            There are only 5 inputs into the WN8 function (ordered by descending importance): 
            <ul>
                <li>Damage</li>
                <li>Frags</li>
                <li>Spots</li>
                <li>Decap points</li>
                <li>Winrate</li>
            </ul>
            Damage is by far the most important component of WN8, accounting for approximately 50% of the statistic. Frags contributes to around 25% of WN8. 

            All WN8 calculations use the of table expected values for each tank maintained by the <a href="https://modxvm.com/en/wn8-expected-values/" target="blank">XVM team</a>. Your stats are inputted into the WN8 function along with the expected values. 
            If your stats are higher than the expected values, then you will have higher WN8. 
            If your stats are the exact same as the expected values, your WN8 will be the baseline value 1565 - though 1565 is still higher than average.
            <br/>
            <br/>
            For a more info, here is the WN8 function we used at Tomato.gg.
            <Highlight language={"Javascript"}>
                {WN8Function}
            </Highlight>
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4header"
        >
          What is World of Tanks?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            World of Tanks is a competitive multiplayer mid-century tank combat game created by Belorussian game studio Wargaming. 
            It's one of the most popular games in Eastern Europe, but players from all around the world enjoy WoT.
            <ul>
                <li><a href="https://worldoftanks.com/" target="blank">World of Tanks NA</a></li>
                <li><a href="https://worldoftanks.eu/" target="blank">World of Tanks EU</a></li>
                <li><a href="https://worldoftanks.ru/" target="blank">World of Tanks Russia</a></li>
                <li><a href="https://worldoftanks.asia/" target="blank">World of Tanks Asia</a></li>
            </ul>
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5header"
        >
          I found a bug. How do I report it?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            Join our <a href="https://discord.gg/qA2bV7K" target="blank">Discord server</a> and submit your issue to <code># website-issues-and-bugs</code>.
            <br/>
            <br/>
            We will try our best to fix the issue.
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7-content"
          id="panel7header"
        >
          What is Tomato.gg made with?
        </AccordionSummary>
        <AccordionDetails>
            <span>
            This frontend is created with React.js and hosted on AWS Amplify.
            <br/>
            <br/>
            The backend is created using Node.js and hosted with Heroku and Digital Ocean. 
            <br/>
            <br/>
            Our databases are PostgreSQL and Redis, both of which are hosted on Digital Ocean/
            </span>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6header"
        >
          Contact Tomato.gg
        </AccordionSummary>
        <AccordionDetails>
            <span>
            The quickest way to get a response from me is to join our <a href="https://discord.gg/qA2bV7K" target="blank">Discord server</a> and ask there (or DM Goldflag directly).
            <br/>
            <br/>
            I cannot guarantee a prompt response from any other communication channel, but you can also DM me <code>Goldflag</code> ingame on the NA server or send me an email at <code>billyang@umich.edu</code>.
            </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}