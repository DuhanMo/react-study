import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App_useEffect from './App_useEffect';
import App_useMemo from './App_useMemo';
import reportWebVitals from './reportWebVitals';
import App from './App';
import App_useRef from './App_useRef';
import App_component from './App_component';

ReactDOM.render(
  // <App />,
  // <App_useEffect />,
  // <App_useMemo />,
  // <App_useRef />,
  <App_component />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
