import React, { useState } from "react";

const initialState = {
    mode: "player",
    setMode: () => {},
};
const SearchmodeContext = React.createContext(initialState);

function SearchmodeProvider({ children }) {
    const [mode, setSearchmode] = useState(localStorage.getItem("searchmode") || "player");

    const setMode = (input) => {
        localStorage.setItem("searchmode", input);
        setSearchmode(input);
    };

    return <SearchmodeContext.Provider value={{ mode, setMode }}>{children}</SearchmodeContext.Provider>;
}

export { SearchmodeProvider, SearchmodeContext };
