import React from 'react';
import ReactDOM from 'react-dom';
import Tomatopedia from './tomatopedia.js';
import { ThemeProvider } from './style/theme';
import Snowfall from 'react-snowfall';

function Main() {
  return (
    <ThemeProvider>
      <Snowfall snowflakeCount={75}/>
      <Tomatopedia />
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));