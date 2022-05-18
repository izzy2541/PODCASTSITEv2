import React from 'react';
import ReactDOM from 'react-dom';


//allows us to move between webpages
import { BrowserRouter } from 'react-router-dom';


import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

