import { createContext } from 'react'

const ThemeContext = createContext({
  state: { isDarkMode: false },
  actions: {
    changeTheme: () => {},
  },
})

export default ThemeContext
