import React, {useState} from 'react'
import './css/topbar.css'
import SmallSearchBar from './material/smallSearchBar';
import DiscordLogo from './assets/Discord.svg'
import SmallMenu from './material/smallMenu';
import { Link, useRouteMatch, withRouter} from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from './style/theme.js';

const APIKey = process.env.REACT_APP_API_KEY;

const serverConv = {
    'com': 'NA',
    'eu': 'EU',
    'asia': 'ASIA',
    'ru': 'RU',
}

export default withRouter(function Topbar(props) {
    const { theme, toggle } = React.useContext(ThemeContext)
    const [name, setName] = useState('');
    const [server, setServer] = useState('com');
    const [mode, setMode] = useState('Player');

    const searchId = async (e) => {
        let testId = 'FAIL';
        e.preventDefault();
        const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`
        try {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.status == "error" || data.meta.count == 0) { console.log('Invalid username'); }
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
        <div className="topbar">
            <div className="smallMenu">
                <SmallMenu/>
            </div>
            <div className="field">
                <form onSubmit={searchId}>
                    <SmallSearchBar setName = {setName} setServer = {setServer} server = {server} setMode = {setMode} mode = {mode}/>
                </form>
            </div>
            <div className="light">
                <DarkModeToggle
                onChange={toggle}
                checked={theme === 'light' ? false : true}
                size={40}
                />            
            </div>
            <div className="discord">
                <a target="blank" href="https://discord.gg/qA2bV7K"><img src={DiscordLogo} width="33" height="33" alt="discordicon"/></a>
            </div>
        </div>
    );
});
