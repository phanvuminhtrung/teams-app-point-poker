///SUMMARY: main COMPONENT to decide display StartPointPokerDialog or VotePointPokerDialog

import React, { useState, useContext } from 'react';
import StartPointPokerDialog from './components/dialogs/StartPointPokerDialog';
import VotePointPokerDialog from './components/dialogs/VotePointPokerDialog';
import { SessionContext } from './context/SessionContext';
import './styles/App.css';

const App = () => {
  const {joinSession } = useContext(SessionContext);
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  // Function to be called when a user joins the session. It now takes parameters name and role.
  const handleSessionJoin = (name, role) => {
    joinSession(name, role); // Correctly call joinSession with the name and role parameters
    setIsSessionStarted(true); // Set the flag to true to indicate the session has started
  };

  return (
    <div className="app">
      {!isSessionStarted ? (
        // Pass handleSessionJoin down to StartPointPokerDialog
        <StartPointPokerDialog onSessionJoin={handleSessionJoin} />
      ) : (
        // Now, the VotePointPokerDialog will render when the session is started
        <VotePointPokerDialog />
      )}
    </div>
  );
};

export default App;
