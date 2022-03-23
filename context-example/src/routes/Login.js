import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
// import st from './Login.module.css'

const Login = (props) => {
  return (
    <div className="main">
      <h3>Login Page</h3>
      <Outlet />
    </div>
  )
}
export default Login
