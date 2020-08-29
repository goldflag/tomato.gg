import React, {useState, useEffect} from 'react';
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

  const size = useWindowSize();

  return (
      <Router>
        <div>
        {/* {size.width}px / {size.height}px */}
 
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

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}