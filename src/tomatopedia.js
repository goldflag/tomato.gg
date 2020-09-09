import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Search from './search';
import About from './about';
import TankStatsPage from './statpages/tankStatsPage';
import ServerStatsPage from './statpages/serverStatsPage';
import StatsPage from './statpages/statsPage';
import StatsReference from './statpages/statsReference';
import "./css/body.css";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ThemeContext }  from './style/theme.js';
const trackingId = process.env.REACT_APP_GA;

export default function Tomatopedia() {

  // const [theme, toggleTheme] = Theme();


  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview('/');
  }, []);

  const { theme, toggle, dark } = React.useContext(ThemeContext);

  return (
      <Router>
        <div className={theme === 'dark' ? "dark-mode" : "light-mode"}>
          <Sidebar /> 
          <Topbar />
          <main className='wrapper'>
            <Switch>
              <Route path='/stats'>
                <StatsPage />
              </Route> 
              <Route path='/about'>
                <About />
              </Route> 
              <Route path='/server-stats'>
                <ServerStatsPage />
              </Route> 
              <Route path='/tank-stats'>
                <TankStatsPage />
              </Route> 
              <Route path='/stats-reference'>
                <StatsReference />
              </Route> 
              <Route exact path='/'>
                <Search />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
  );
}
