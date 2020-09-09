import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Tomatopedia from './tomatopedia.js';
import { ThemeProvider } from './style/theme';

function Main() {
  return (
    <ThemeProvider>
      <Tomatopedia />
    </ThemeProvider>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));