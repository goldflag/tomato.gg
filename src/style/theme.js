import React, { useEffect, useState } from 'react'

// export default () => {
//   const [theme, setTheme] = useState('light')

//   const toggleTheme = () => {
//     if (theme === 'light') {
//       window.localStorage.setItem('theme', 'dark')
//       setTheme('dark')
//     } else {
//       window.localStorage.setItem('theme', 'light')
//       setTheme('light')
//     }
//   }

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme')
//     if (localTheme) {
//       setTheme(localTheme)
//     }
//   }, [])

//   return [
//     theme,
//     toggleTheme,
//   ]
// }

const themes = {
    dark: {
      backgroundColor: 'black',
      color: 'white'
    },
    light: {
      backgroundColor: 'white',
      color: 'black'
    }
  }

const initialState = {
    dark: true,
    theme: 'dark',
    toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
    const [dark, setDark] = React.useState(false) // Default theme is light
  
    // On mount, read the preferred theme from the persistence
    React.useEffect(() => {
      const isDark = localStorage.getItem('dark') === 'true'
      setDark(isDark)
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