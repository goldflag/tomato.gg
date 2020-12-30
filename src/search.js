import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import './css/search.css';
import SearchBar from './material/searchBar';
import TomatoLogo from './assets/tomato.png'
import { ThemeContext } from './style/theme.js';
import LeaderboardGrid from './statpages/searchComponents/leaderboardGrid';

const APIKey = process.env.REACT_APP_API_KEY;

const serverConv = {
    'com': 'NA',
    'eu': 'EU',
    'asia': 'ASIA',
    'ru': 'RU',
}

export default withRouter(function Search(props){
    const {theme, server, toggleServer } = React.useContext(ThemeContext);
    const [name, setName] = useState('');
    const [mode, setMode] = useState('Player');

    let testId = 'FAIL';

    useEffect(() => {
    }, []);

    const searchId = async (e) => {
        e.preventDefault();
        const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`
        console.log(APIKey);
        try {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "error" || data.meta.count === 0) { console.log('Invalid username'); }
                else { testId = data.data[0].account_id; }
            })
            .then(() => {
                props.history.push(`/`);
                props.history.push(`/stats/${serverConv[server]}/${name}=${testId}`);
            })

        }catch(err){
            console.error(err);
        }
    };

    return (
        <div className={'backbackground'}>
            <div className={theme === 'dark' ? 'backgrounddark' : 'background'}>
                <div className='center'>
                    <div>
                    <img src={TomatoLogo} alt='logo' style={{height: 'auto',  width: '80%', margin: '0 auto',display: 'flex', alignItems: 'center', padding: '0rem'}}/>
                    </div>
                    <form onSubmit={searchId}>
                        <SearchBar setName={setName} setServer={toggleServer} server={server} setMode={setMode} mode={mode} />
                    </form>
                </div>
                <div className={'leaderboard'}>
                    <LeaderboardGrid />
                </div>
            </div>  
        </div>
    );
})
