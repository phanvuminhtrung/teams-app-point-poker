///SUMMARY: The entry file where we render our React component to the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SessionProvider } from './context/SessionContext'; // Wrap your App with SessionProvider here
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);