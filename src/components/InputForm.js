import React, { useState } from 'react';

const InputForm = ({ generateNames }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    generateNames(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a theme or keyword"
      />
      <button type="submit">Generate Names</button>
    </form>
  );
};

export default InputForm;
