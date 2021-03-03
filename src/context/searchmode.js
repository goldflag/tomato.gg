import React, { useState } from "react";

const initialState = {
    searchmode: "player",
    toggleSearchmode: () => {},
};
const SearchmodeContext = React.createContext(initialState);

function SearchmodeProvider({ children }) {
    const [searchmode, setSearchmode] = useState(localStorage.getItem("searchmode") || "player");

    const toggleSearchmode = (input) => {
        localStorage.setItem("searchmode", input);
        setSearchmode(input);
    };

    return <SearchmodeContext.Provider value={{ background: searchmode, toggleSearchmode }}>{children}</SearchmodeContext.Provider>;
}

export { SearchmodeProvider, SearchmodeContext };
