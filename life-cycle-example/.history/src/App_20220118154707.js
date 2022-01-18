import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Box from './components/box';

function App() {
  const list = Array(6);

  return (
    <div id="main">
      {list.map((item, index) => {
        return <Box key={index} />
      })}
    </div>
  );
}

export default App;
