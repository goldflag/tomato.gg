import React, { useState } from "react";

const initialState = {
    background: "blue",
    toggleBackground: () => {},
};
const BackgroundContext = React.createContext(initialState);

function BackgroundProvider({ children }) {
    const [background, setBackground] = useState(localStorage.getItem("background") || "blue");

    const toggleBackground = (input) => {
        localStorage.setItem("background", input);
        setBackground(input);
    };

    return <BackgroundContext.Provider value={{ background, toggleBackground }}>{children}</BackgroundContext.Provider>;
}

export { BackgroundProvider, BackgroundContext };
