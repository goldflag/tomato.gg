import React from 'react'
import { Link } from 'react-router-dom';
import './css/sidebar.css';
import TomatoLogo from './assets/tomato.png'
import AppsIcon from '@material-ui/icons/Apps';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import GamesIcon from '@material-ui/icons/Games';
import StarIcon from '@material-ui/icons/Star';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="layer">
                <Link to='/' >
                    <div className="logo"> 
                        <img src={TomatoLogo} alt='logo' style={{height: '110%', width: 'auto', display: 'flex', alignItems: 'center', padding: '0rem'}}/>
                    </div>
                </Link>
                <div className="line"/> 
                <div className='menu' >
                    <Link to='/' style={{padding: '20px 20px 10px 20px', fontSize: '16px'}}>
                    <AppsIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Home
                    </Link>

                    <Link to='/tank-stats' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <BarChartIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Tank Stats
                    </Link>

                    <Link to='/Leaderboards' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <FormatListNumberedIcon style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Leaderboards
                    </Link>

                    {/* <Link to='/tank-list' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <BarChartIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Tank List
                    </Link> */}

                    {/* <Link to='/server-stats' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <PublicIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Server Stats
                    </Link> */}

                    <Link to='/moe' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <StarIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;MoE Reqs
                    </Link>

                    <Link to='/wn8' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <GamesIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;WN8 Exp. Values
                    </Link>

                    <Link to='/stats-reference' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <LibraryBooksIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Stats Reference
                    </Link>

                    <Link to='/about' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <InfoIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;About
                    </Link>
                </div>
            
                <div style={{fontSize: '0.8rem',
                            fontWeight: '300',
                            color: '#96a7c7', padding: '15px', bottom: '0px', position: 'absolute'}}>
                    Tomato.gg is a website created by <Link style={{color:'rgb(205, 205, 205)'}} to='/stats/NA/goldflag=1011694618'>Goldflag</Link> and is not affiliated with Wargaming.net.
                    <br/>
                    Zeyu Yang © 2020
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
