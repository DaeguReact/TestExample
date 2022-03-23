import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import st from "./Header.module.css";
import dark_st from "./Header-Dark.module.css";

const Header = React.memo((props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <header className={themeContext.isDark ? dark_st.header : st.header}>
      <h3>
        <Link to="/">React Context API</Link>
      </h3>
      <div className={st["right-side"]}>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/signin">Sign in</Link>
        </nav>
        {themeContext.isDark && (
          <span
            className={st["change-theme-button-dark"]}
            onClick={themeContext.changeTheme}
          >
            🌙
          </span>
        )}
        {!themeContext.isDark && (
          <span
            className={st["change-theme-button-light"]}
            onClick={themeContext.changeTheme}
          >
            🌞
          </span>
        )}
      </div>
    </header>
  );
});
export default Header;
