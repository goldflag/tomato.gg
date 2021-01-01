import React, { useEffect, useState } from "react";

const initialState = {
    dark: true,
    theme: "dark",
    server: "com",
    toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true); // Default theme is dark
    const [server, setServer] = useState("com"); // Default theme is dark

    // On mount, read the preferred theme from the persistence
    useEffect(() => {
        if (localStorage.getItem("dark") === null)
            localStorage.setItem("dark", JSON.stringify(true));
        const isDark = localStorage.getItem("dark") === "true";
        setDark(isDark);

        if (localStorage.getItem("server") === null)
            localStorage.setItem("server", server);
        const isServer = localStorage.getItem("server");
        setServer(isServer);
    }, [dark, server]);

    // To toggle between dark and light modes
    const toggle = () => {
        const isDark = !dark;
        localStorage.setItem("dark", JSON.stringify(isDark));
        setDark(isDark);
    };

    // To toggle between servers
    const toggleServer = (input) => {
        localStorage.setItem("server", input);
        setServer(input);
    };

    const theme = dark ? "dark" : "light";

    return (
        <ThemeContext.Provider
            value={{ theme, dark, server, toggle, toggleServer }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext };
