import React, { useState } from "react";

const initialState = {
    server: "com",
    setServer: () => {},
};
const ServerContext = React.createContext(initialState);

function ServerProvider({ children }) {
    const [server, setServerState] = useState(localStorage.getItem("server") || "com");

    const setServer = (input) => {
        localStorage.setItem("server", input);
        setServerState(input);
    };

    return <ServerContext.Provider value={{ server, setServer }}>{children}</ServerContext.Provider>;
}

export { ServerProvider, ServerContext };
