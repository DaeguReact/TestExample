import React, {useState} from 'react';

const MyComponent = () => {
  const [input, setInput] = useState('')

  const changeInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter text"
        onChange={changeInput}
      />
      <p>{input}</p>
    </div>
  );
};

export default MyComponent;
