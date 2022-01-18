import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [text, setText] = useState('');
  const handlingChange = (e) => {
    setText(e.target.value);
  }

  const [items, setItems] = useState([]);

  const hanldeButtonClick = () => {
    setItems([...items, text]);
    setText('');
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      hanldeButtonClick();
    }
  }

  return (
    <div id="app2">
      <div id="input-wrap">
        <input type="text" onChange={handlingChange} value={text} onKeyDown={handleKeyDown} />
        <button onClick={hanldeButtonClick}>추가하기</button>
      </div>
      <ul>
        {items.map((item, index) => <li style={{ 'color': item }} key={index}>{item}</li>)}
      </ul>
    </div>

  );
}
export default App;
