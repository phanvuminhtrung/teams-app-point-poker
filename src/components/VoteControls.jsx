import React, { useContext } from 'react';
import SessionContext from '../context/SessionContext';
import ButtonField from './common/Button'; // Correct path from VoteControls.jsx

const VoteControls = () => {
  const { revealVotes, clearVotes } = useContext(SessionContext);

  return (
    <div className="vote-controls">
      <ButtonField onClick={revealVotes}>Show Votes</ButtonField>
      <ButtonField onClick={clearVotes}>Clear Votes</ButtonField>
    </div>
  );
};

export default VoteControls;