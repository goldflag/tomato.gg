import React, { useState } from "react";

const initialState = {
    server: "com",
    toggleServer: () => {},
};
const ServerContext = React.createContext(initialState);

function ServerProvider({ children }) {
    const [server, setServer] = useState(
        localStorage.getItem("server") || "com"
    );

    const toggleServer = (input) => {
        localStorage.setItem("server", input);
        setServer(input);
    };

    return (
        <ServerContext.Provider value={{ server, toggleServer }}>
            {children}
        </ServerContext.Provider>
    );
}

export { ServerProvider, ServerContext };
