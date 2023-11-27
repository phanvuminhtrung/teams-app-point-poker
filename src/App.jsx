///SUMMARY: main COMPONENT to decide display StartPointPokerDialog or VotePointPokerDialog

import React, { useState, useContext } from 'react';
import StartPointPokerDialog from './components/dialogs/StartPointPokerDialog';
import VotePointPokerDialog from './components/dialogs/VotePointPokerDialog';
import { SessionProvider, SessionContext } from './context/SessionContext';
import './styles/App.css';

const App = () => {
  const {session} = useContext(SessionContext);
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  // Function to be called when a user joins the session
  const handleSessionJoin = () => {
    setIsSessionStarted(true);
  };

  return (
    <SessionProvider>
      <div className="app">
        {!isSessionStarted ? (
          <StartPointPokerDialog onSessionJoin={handleSessionJoin} />
        ) : (
          <VotePointPokerDialog />
        )}
      </div>
    </SessionProvider>
  );
};

export default App;
