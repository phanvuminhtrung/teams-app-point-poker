import React from 'react';

const Button = ({ onClick, children, ...props }) => {
  return (
    <button className="custom-button" onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
