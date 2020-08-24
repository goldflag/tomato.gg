import React from 'react'
import { Link } from 'react-router-dom';
import './css/sidebar.css';
import TomatoLogo from './assets/tomato.png'
import AppsIcon from '@material-ui/icons/Apps';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="layer">
                <Link to='/' >
                    <div className="logo"> 
                        <img src={TomatoLogo} alt='logo' style={{height: 'calc(1.2vh + 1.3vw + 10px)', width: 'auto', display: 'flex', alignItems: 'center', padding: '0rem'}}/>
                    </div>
                </Link>
                <div className="line"/> 
                <div className='menu' >
                    <Link to='/' style={{padding: '20px 20px 10px 20px', fontSize: '16px'}}>
                    <AppsIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Home
                    </Link>
{/* 
                    <Link to='/clans' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <GroupIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Clan Stats
                    </Link>

                    <Link to='/servers' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <PublicIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Server Stats
                    </Link> */}

                    <Link to='/tanks' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <BarChartIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Tank Stats
                    </Link>

                    <Link to='/about' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <InfoIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;About
                    </Link>
                </div>
                <div className="bottom">
                    Tomato.gg is a website created by <Link style={{color:'rgb(205, 205, 205)'}} to='stats/NA/goldflag=1011694618'>Goldflag</Link> and is not affiliated with Wargaming.net. World of Tanks is a trademark of Wargaming.net.
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
