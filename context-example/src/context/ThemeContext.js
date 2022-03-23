import { createContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  changeTheme: () => {},
});

export default ThemeContext;
