// src/components/PokerCard.jsx
import React from 'react';

const PokerCard = ({ value, onClick }) => {
  return (
    <button onClick={() => onClick(value)} className="poker-card">
      {value}
    </button>
  );
};

export default PokerCard;