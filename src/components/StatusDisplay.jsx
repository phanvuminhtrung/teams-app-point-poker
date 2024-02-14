import React, { useContext } from 'react';
import SessionContext from '../context/SessionContext';

const StatusDisplay = () => {
  const { session } = useContext(SessionContext);

  return (
    <div className="status-display">
      {session.users.map((user, index) => (
        <div key={index} className="user-status">
          <span>{user.name}:</span>
          <span>{user.vote !== null ? 'Voted' : 'Not voted'}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusDisplay;
