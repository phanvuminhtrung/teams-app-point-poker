///SUMMARY: The entry file where we render our React component to the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

// Assuming you're wrapping your App component with a context provider
import { SessionProvider } from './context/SessionContext';

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);