// src/components/VoteBoard.jsx
import React from 'react';

const VoteBoard = ({ votes }) => {
  return (
    <div className="vote-board">
      {votes.map((vote, index) => (
        <div key={index} className="vote">
          {vote.user}: {vote.value}
        </div>
      ))}
    </div>
  );
};

export default VoteBoard;