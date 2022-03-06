import './App.css'
import React, { useState } from 'react'
import Button from './components/Buttons'
import Modal from './components/Modal'

function App() {
  return (
    <>
      <div className="wrap">
        <Button className="error">Error</Button>
        <Button className="info">Info</Button>
        <Button className="success">Success</Button>
      </div>
    </>
  )
}

export default App
