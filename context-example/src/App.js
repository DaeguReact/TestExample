import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import UserDataConText from "./context/UesrDataContext";
import Test from "./Components/Test";

function App() {
  const [isDark, setDark] = useState(false);
  const changeTheme = () => {
    setDark((prev) => !prev);
  };
  return (
    <>
      <ThemeContext.Provider
        value={{ isDark: isDark, changeTheme: changeTheme }}
      >
        <UserDataConText.Provider value={{ isDark: "hello" }}>
          <Header />
          <Outlet />
        </UserDataConText.Provider>
      </ThemeContext.Provider>
      <Test />
    </>
  );
}
export default App;
