import React, { useContext } from 'react';
import SessionContext from '../context/SessionContext';

const ResultDisplay = () => {
  const { session } = useContext(SessionContext);

  return (
    <div className="result-display">
      {session.showVotes ? (
        <ul>
          {session.users.filter(user => user.vote !== null).map((user, index) => (
            <li key={index}>
              <span>{user.name}:</span>
              <span>{user.vote}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>Votes are hidden until shared by the host.</p>
      )}
    </div>
  );
};

export default ResultDisplay;
