import React from 'react';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Search from './search';
import About from './about';
import TankStatsPage from './statpages/tankStatsPage';
import ServerStatsPage from './statpages/serverStatsPage';
import StatsPage from './statpages/statsPage';
import StatsReference from './statpages/statsReference';

import "./css/body.css";
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Tomatopedia() {

  return (
      <Router>
        <div>
          <nav>
            <Sidebar /> 
            <Topbar />
          </nav>
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
              <Route path='/tanks'>
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
