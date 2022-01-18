import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [text, setText] = useState('');
  const handlingChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div id="app2">
      <input type="text" onChange={handlingChange} />
      <div>{text}</div>
    </div>

  );
}

export default App;
