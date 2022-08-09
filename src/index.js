import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
import './assets/css/bootstrap.css';
import './assets/css/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
