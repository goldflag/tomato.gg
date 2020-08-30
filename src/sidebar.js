import React from 'react'
import { Link } from 'react-router-dom';
import './css/sidebar.css';
import TomatoLogo from './assets/tomato.png'
import AppsIcon from '@material-ui/icons/Apps';
import GroupIcon from '@material-ui/icons/Group';
import PublicIcon from '@material-ui/icons/Public';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

function Sidebar() {

    const sidebar = {
        fontFamily: "Roboto",
        fontWeight: 500,
        marginTop: '0rem',
        marginBottom: '10rem',
        zIndex: '0',
        height: '100%',
        width: '7vw',
        position: 'fixed',
        left: '0',
        background: 'url(../assets/sidebar.jpg) no-repeat center center fixed',
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover'
      }

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

                    <Link to='/server-stats' style={{padding: '10px 20px 10px 20px', fontSize: '16px'}}>
                    <PublicIcon  style={{ verticalAlign: 'middle', padding: '0px 1px 2px 1px'}}/>
                        &nbsp;&nbsp;Server Stats
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
                    Tomato.gg is a website created by <Link style={{color:'rgb(205, 205, 205)'}} to='stats/NA/goldflag=1011694618'>Goldflag</Link> and is not affiliated with Wargaming.net. World of Tanks is a trademark of Wargaming.net.
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
