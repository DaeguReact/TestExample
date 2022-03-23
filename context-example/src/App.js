import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import UserDataConText from "./context/UesrDataContext";

function App() {
  const [isDark, setDark] = useState(false);
  const changeTheme = () => {
    setDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      <UserDataConText.Provider value={{}}>
        <>
          <Header />
          <Outlet />
        </>
      </UserDataConText.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
