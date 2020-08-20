import React, { useEffect } from 'react';
import Topbar from './topbar';
import Sidebar from './sidebar';
import Search from './search';
import Footer from './footer'
import About from './about';
import StatsPage from './statpages/statsPage';
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
              <Route exact path='/'>
                <Search />
              </Route>
            </Switch>
          </main>
          {/* <footer>
            <Footer className='footer'/>
          </footer> */}
        </div>
      </Router>
  );
}
