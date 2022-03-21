import React from 'react'
import { Link } from 'react-router-dom'
import st from './Header.module.css'

const Header = (props) => {
  return (
    <header className={st.header}>
      <h3>
        <Link to="/">React Context API</Link>
      </h3>
      <div className={st['right-side']}>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signin">Sign in</Link>
        </nav>
        <span className={st['change-theme-button']}>🌙</span>
      </div>
    </header>
  )
}
export default Header
