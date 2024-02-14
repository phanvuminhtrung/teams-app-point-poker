import { useState, useCallback } from 'react';

const useSessionState = (initialState) => {
  const [session, setSession] = useState(initialState);

  const joinSession = useCallback((name, role) => {
    setSession(prevSession => ({
      ...prevSession,
      users: [...prevSession.users, { name, role, vote: null }]
    }));
  }, []);

  const handleVote = useCallback((name, vote) => {
    setSession(prevSession => ({
      ...prevSession,
      users: prevSession.users.map(user =>
        user.name === name ? { ...user, vote } : user
      ),
    }));
  }, []);

  const revealVotes = useCallback(() => {
    setSession(prevSession => ({ ...prevSession, showVotes: true }));
  }, []);

  const clearVotes = useCallback(() => {
    setSession(prevSession => ({
      ...prevSession,
      users: prevSession.users.map(user => ({ ...user, vote: null })),
      showVotes: false
    }));
  }, []);

  return {
    session,
    joinSession,
    handleVote,
    revealVotes,
    clearVotes,
  };
};

export default useSessionState;
