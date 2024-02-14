import React, { useContext } from 'react';
import SessionContext from '../context/SessionContext';

const UserList = () => {
  const { session } = useContext(SessionContext);

  return (
    <div className="user-list">
      <ul>
        {session.users.map((user, index) => (
          <li key={index}>
            <span className="user-name">{user.name}</span>
            <span className="user-vote-status">
              {session.showVotes ? user.vote : 'Has not voted'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
