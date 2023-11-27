import React, { createContext, useState } from 'react';

// Create a context for the session state
//const SessionContext = createContext(null);
export const SessionContext = createContext(null);
// Define a provider component for the session context
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    users: [], // Array to store user objects { name, role, vote }
    showVotes: false, // Boolean to control when to show votes
  });

  // Function to add a new user to the session
  const joinSession = (name, role) => {
    setSession(prevState => ({
      ...prevState,
      users: [...prevState.users, { name, role, vote: null }]
    }));
  };

  // Function to update a user's vote
  const handleVote = (name, vote) => {
    setSession(prevState => ({
      ...prevState,
      users: prevState.users.map(user =>
        user.name === name ? { ...user, vote } : user
      ),
    }));
  };

  // Function to reveal all votes
  const revealVotes = () => {
    setSession(prevState => ({ ...prevState, showVotes: true }));
  };

  // Function to reset all votes
  const clearVotes = () => {
    setSession(prevState => ({
      ...prevState,
      users: prevState.users.map(user => ({ ...user, vote: null })),
      showVotes: false,
    }));
  };

  // The context value that will be supplied to any descendants of this provider
  const contextValue = {
    session,
    joinSession,
    handleVote,
    revealVotes,
    clearVotes,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;
