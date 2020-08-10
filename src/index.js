import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Tomatopedia from './tomatopedia.js';

function Main() {
  return (
      <Tomatopedia />
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));