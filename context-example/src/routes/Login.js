import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import style from "./Login.module.css";
import darkStyle from "./Login-Dark.module.css";
import { Outlet } from "react-router-dom";

const Login = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={themeContext.isDark ? darkStyle.main : style.main}>
      <h3>Login Page</h3>
      <Outlet />
    </div>
  );
};
export default Login;
