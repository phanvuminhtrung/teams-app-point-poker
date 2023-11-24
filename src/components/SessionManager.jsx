// src/components/SessionManager.jsx
import React, { useState } from 'react';
import PokerCard from './PokerCard';
import VoteBoard from './VoteBoard';

const SessionManager = () => {
  const [votes, setVotes] = useState([]);

  const handleVote = (value) => {
    // Logic to handle the vote
    // Update the votes state
  };

  return (
    <div className="session-manager">
      <div className="cards">
        {/* Render Poker Cards */}
        {[1, 2, 3, 5, 8, 13].map(value => (
          <PokerCard key={value} value={value} onClick={handleVote} />
        ))}
      </div>
      <VoteBoard votes={votes} />
    </div>
  );
};

export default SessionManager;