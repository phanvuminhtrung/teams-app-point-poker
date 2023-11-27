import React from 'react';

const InputField = ({ label, ...props }) => {
  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <input className="custom-input" {...props} />
    </div>
  );
};

export default InputField;
