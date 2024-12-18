import React from 'react';

function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 rounded bg-blue-950/50 border border-blue-400/30 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400"
    />
  );
}

export default Input;