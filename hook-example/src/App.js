import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import AddList from './component/AddList'
import SetColor from './component/SetColor'
import ShowInputValue from './component/ShowInputValue'

function App() {

  return (
    <div id='main'>
      <ShowInputValue/>
      <hr/>
      <SetColor/>
      <hr/>
      {/*<AddList/>*/}


    </div>
  );
}
export default App;
