import React, { useEffect, useState } from 'react'

const initialState = {
    dark: true,
    theme: 'dark',
    toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true) // Default theme is dark
  
    // On mount, read the preferred theme from the persistence
    useEffect(() => {
      if (localStorage.getItem("dark") === null) localStorage.setItem('dark', JSON.stringify(true));
      const isDark = localStorage.getItem('dark') === 'true';
      setDark(isDark);
    }, [dark])
  
    // To toggle between dark and light modes
    const toggle = () => {
      const isDark = !dark;
      localStorage.setItem('dark', JSON.stringify(isDark));
      setDark(isDark);
    }
  
    const theme = dark ? 'dark' : 'light';
  
    return (
      <ThemeContext.Provider value={{ theme, dark, toggle }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  
  export { ThemeProvider, ThemeContext }