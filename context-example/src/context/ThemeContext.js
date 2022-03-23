import { createContext } from "react";

const ThemeContext = createContext({
  hello: "world",
  isDark: false,
  changeTheme: () => {},
});

export default ThemeContext;
