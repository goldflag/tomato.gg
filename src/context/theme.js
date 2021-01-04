import React, { useState } from "react";

const initialState = {
    dark: true,
    theme: "dark",
    toggleTheme: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(localStorage.getItem("dark") || true); // Default theme is dark

    // To toggle between dark and light modes
    const toggleTheme = () => {
        const isDark = !dark;
        localStorage.setItem("dark", JSON.stringify(isDark));
        setDark(isDark);
    };

    const theme = dark ? "dark" : "light";

    return (
        <ThemeContext.Provider value={{ theme, dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
