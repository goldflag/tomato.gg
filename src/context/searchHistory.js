import React, { useState } from "react";

const initialState = {
    history: [],
    addToHistory: () => {},
    removeFromHistory: () => {},
    clearHistory: () => {},
};
const SearchHistoryContext = React.createContext(initialState);

const NAME = "searchHistory";

function SearchHistoryProvider({ children }) {
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem(NAME)) || []);

    const addToHistory = (name, id, server, isClan) => {
        let searchHistory = JSON.parse(localStorage.getItem(NAME)) || [];
        searchHistory = [{ name, id, server, isClan: !!isClan }, ...searchHistory.filter((value) => value.id !== id)];
        localStorage.setItem(NAME, JSON.stringify(searchHistory));
        setHistory(searchHistory);
    };

    const removeFromHistory = (id) => {
        let searchHistory = JSON.parse(localStorage.getItem(NAME)) || [];
        searchHistory = searchHistory.filter((value) => value.id !== id);
        localStorage.setItem(NAME, JSON.stringify(searchHistory));
        setHistory(searchHistory);
    };

    const clearHistory = () => {
        localStorage.setItem(NAME, "[]");
        setHistory([]);
    };

    return (
        <SearchHistoryContext.Provider value={{ history, addToHistory, removeFromHistory, clearHistory }}>
            {children}
        </SearchHistoryContext.Provider>
    );
}

export { SearchHistoryProvider, SearchHistoryContext };
