import logo from './logo.svg';
import React, { useState } from 'react';
import AnimalImage from './components/AnimalImage';

function App() {



  const rootStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
    , margin: '20px auto'
  }

  return (
    <div id='root'>
      Hello World
    </div>
  );
}

export default App;
