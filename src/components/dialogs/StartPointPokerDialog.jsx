import React, { useState, useContext } from 'react';
import { SessionContext } from '../../context/SessionContext';
import ButtonField from '../common/Button'; // Go up two levels to src/components/ then into common/
import InputField from '../common/InputField'; // Same as above

const StartPointPokerDialog = ({ onSessionJoin }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('player'); // default to 'player' role
  const { joinSession } = useContext(SessionContext);

  const handleSubmit = () => {
    if (name.trim() === '') return;
    joinSession(name, role); // joinSession from your SessionContext
    onSessionJoin(); // Notify the App component that the session has started
  };

  return (
    <div className="start-point-poker-dialog">
      <h1>Welcome to Point Poker</h1>
      <InputField
        label="Name:"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        <label>
          <input
            type="radio"
            name="role"
            value="host"
            checked={role === 'host'}
            onChange={() => setRole('host')}
          />
          Host
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="player"
            checked={role === 'player'}
            onChange={() => setRole('player')}
          />
          Player
        </label>
      </div>
      <ButtonField onClick={handleSubmit}>Join Session</ButtonField>
    </div>
  );
};

export default StartPointPokerDialog;