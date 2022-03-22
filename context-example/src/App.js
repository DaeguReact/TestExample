import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import './App.css'
import ThemeContext from './context/ThemeContext'

function App() {
  return (
    <ThemeContext.Provider value={{ isDarkMode: false }}>
      <>
        <Header />
        <Outlet />
      </>
    </ThemeContext.Provider>
  )
}
export default App
