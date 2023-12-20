import React, { useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';
import PokerCard from '../PokerCard';
import ButtonField from '../common/Button';

const VotePointPokerDialog = () => {
  const { session, handleVote, clearVotes } = useContext(SessionContext);
  const points = [0, 1, 2, 3, 5, 8, 13, 20]; // Example point values

  return (
    
    <div className="vote-point-poker-dialog">
      {session.users.map(user => (
        <PokerCard
          key={user.name}
          value={user.vote}
          onClick={() => handleVote(user.name, user.vote)}
        />
      ))}

      <div className="points-section">
        {points.map(point => (
          <PokerCard key={point} value={point} onClick={() => handleVote(point)} />
        ))}
      </div>

      <div className="vote-actions">
        <ButtonField onClick={() => clearVotes()}>Clear Votes</ButtonField>
        <ButtonField onClick={() => session.revealVotes()}>Show Votes</ButtonField>
      </div>
    </div>
  );
};

export default VotePointPokerDialog;
