///SUMARY: SessionContext

import React, { createContext, useState } from 'react';

// Create a context for the session state with a default value
export const SessionContext = createContext({
  users: [],
  showVotes: false,
  joinSession: () => {},
  handleVote: () => {},
  revealVotes: () => {},
  clearVotes: () => {},
});

// Define a provider component for the session context
export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState({
    users: [], // Array to store user objects { name, role, vote }
    showVotes: false, // Boolean to control when to show votes
  });

  // Function to add a new user to the session
  const joinSession = (name, role) => {
    // Prevent duplicate users from joining the session
    const userExists = session.users.some(user => user.name === name);
    if (userExists) {
      console.error('User already exists in the session');
      return;
    }
    
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
      // Only reveal votes if it was already set to do so
      showVotes: prevState.showVotes,
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

// It's not common to export the context object as default because it's typically imported as a named export
// export default SessionContext;
