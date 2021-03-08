import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App_useEffect from './App_useEffect';
import App_useMemo from './App_useMemo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <App/>
  // <App_useEffect />,
  <App_useMemo />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
