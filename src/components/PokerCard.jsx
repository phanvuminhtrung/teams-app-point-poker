import React, { useState, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const PokerCard = ({ value }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { handleVote, userRole } = useContext(SessionContext);

  // Function to handle click on card (vote)
  const handleClick = () => {
    // Check if the user is a player before allowing a vote
    if (userRole === 'player') {
      setIsSelected(true); // Indicate that the card is selected
      handleVote(value);
    }
  };

  // Add a class to indicate the card is selected
  const cardClass = `poker-card ${isSelected ? 'selected' : ''}`;

  return (
    <div className={cardClass} onClick={handleClick}>
      {value}
    </div>
  );
};

export default PokerCard;