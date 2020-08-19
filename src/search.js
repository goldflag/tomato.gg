import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, withRouter } from "react-router-dom";
import './css/search.css';
import SearchBar from './material/searchBar';
import TomatoLogo from './assets/tomato.png'

const APIKey = process.env.REACT_APP_API_KEY;

const styles = {
    margin: '0 auto',
    display: 'table',
    padding: '100px',
    maxWidth: '1000px',
}

const frontGrid = {
    margin: '0 auto',
    maxWidth: '95%',
}

const serverConv = {
    'com': 'NA',
    'eu': 'EU',
    'asia': 'ASIA',
    'ru': 'RU',
}

export default withRouter(function Search(props){

    let { path, url } = useRouteMatch();
    const [name, setName] = useState('');
    const [server, setServer] = useState('com');
    const [mode, setMode] = useState('Player');

    let testId = 'FAIL';

    useEffect(() => {
    }, []);

    const searchId = async (e) => {
        e.preventDefault();
        // const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`
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
        <Router>
            <div className='background'>
                <div style={styles}>
                    <div>
                        <img src={TomatoLogo} alt='logo' style={{height: 'calc(120px)', margin: '0 auto', width: 'auto', display: 'flex', alignItems: 'center', padding: '0rem'}}/>
                    </div>
                    <form onSubmit={searchId}>
                        <SearchBar setName = {setName} setServer = {setServer} server = {server} setMode = {setMode} mode = {mode}/>
                    </form>
                </div >
                <div style ={frontGrid}>
                    {/* <FrontGrid /> */}
                </div>
                <Switch>
                    <Route exact path={path}>
                    </Route>
                </Switch>
            </div>  
        </Router>
    );
})
