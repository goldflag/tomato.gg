import React, { useEffect, useState } from "react";
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { ThemeContext } from '../style/theme.js';
import "../css/tankstats.css";
import Leaderboard from './leaderboardComponents/leaderboard';
import CustomLeaderboardParent from './leaderboardComponents/customLeaderboardParent';
import "../css/innerpage.css";
const trackingId = process.env.REACT_APP_GA;

const typeConv = {
    'wn8': 'WN8',
    'winrate': 'Winrate',
    'battles': 'Battles',
    'moecount': '3 MoE',
    'moe10': 'Tier X 3 MoE',
    'custom': 'Custom'
};

export default function Leaderboards(props) {

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview('/leaderboards');
    }, []);

    const { theme } = React.useContext(ThemeContext);
    const [type, setType] = useState('wn8');
    const Styles = styled.div`
    *:focus {
      outline: none;
    }

    .leaderboard {
      padding: 6rem 0rem 5rem 0rem;
      margin: 0rem 20% 0rem 20%;
    }

    .info {
      background-color: ${theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(250, 250, 250)'};
      color: ${theme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(60, 60, 60)'};
      padding: 1rem;
    }

    .selectButton {
      font-family: "Segoe UI";
      font-weight: 600;
      color: rgb(240, 240, 240);
      background-color: rgb(71, 99, 214);
      padding: 1rem 0rem 0.8rem 0rem;
      width: calc(100%/6);
      border-width: 0px;
      border-bottom: 5px solid rgb(71, 99, 214);
    }

    .selectButton:hover {
      border-bottom: 5px solid red;
    }

    .selectButton:focus {
      border-bottom: 5px solid red;
    }

    @media screen and (max-Width: 1000px) {
      .leaderboard {margin: 1rem;}
    }
    `;
    function setWN8(e) {
        setType('wn8');
    }

    function setWinrate(e) {
        setType('winrate');
    }

    function setBattles(e) {
        e.preventDefault();
        setType('battles');
    }

    function setMOECOUNT(e) {
        e.preventDefault();
        setType('moecount');
    }

    function setMOE10(e) {
        e.preventDefault();
        setType('moe10');
    }

    function setCustom(e) {
        e.preventDefault();
        setType('custom');
    }


    let table = <CustomLeaderboardParent />;
    if (type !== 'custom') {
        table = <Leaderboard type={type} />;
    }

    return (
        <Styles>
            <div className='leaderboard'>
                <div className='info'>
                    <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>NA Leaderboards</span><br />
                    <span style={{ fontSize: '0.8rem', lineHeight: '1.3rem', color: 'rgb(100,100,100)' }}>1181038 PLAYERS ANALYZED</span> <br />
                </div>
                <div>
                    <button className='selectButton' onClick={setWN8}>WN8</button>
                    <button className='selectButton' onClick={setWinrate}>WINRATE</button>
                    <button className='selectButton' onClick={setBattles}>BATTLES</button>
                    <button className='selectButton' onClick={setMOECOUNT}>3 MOE</button>
                    <button className='selectButton' onClick={setMOE10}>TIER X 3 MOE</button>
                    <button className='selectButton' onClick={setCustom}>CUSTOM</button>
                </div>
                <div className='info'>
                    <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>{typeConv[type]} Leaderboard</span><br />
                    {/* <span style={{fontSize: '0.8rem', lineHeight: '1.3rem', color: 'rgb(100,100,100)'}}>MINIMUM 5000 BATTLES</span> <br/> */}
                </div>
                {table}
            </div>
        </Styles>
    );
}

