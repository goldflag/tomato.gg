import React, {useState} from 'react'
import './css/topbar.css'
import SmallSearchBar from './material/smallSearchBar';
import { Link, useRouteMatch, withRouter} from "react-router-dom";

const serverConv = {
    'com': 'NA',
    'eu': 'EU',
    'asia': 'ASIA',
    'ru': 'RU',
}

export default withRouter(function Topbar(props) {
    const [name, setName] = useState('');
    const [server, setServer] = useState('com');
    const [mode, setMode] = useState('Player');

    const searchId = async (e) => {
        let testId = 'FAIL';
        e.preventDefault();
        const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=bd589e105895f2f6b8af31f27da3e05e&search=${name}`
        try {
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

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
            <div className="field">
                <form onSubmit={searchId}>
                        <SmallSearchBar setName = {setName} setServer = {setServer} server = {server} setMode = {setMode} mode = {mode}/>
                </form>
            </div>
        </div>
    );
});
