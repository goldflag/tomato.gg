import React, {createContext, useState} from "react";

const LoadContext = createContext();

const LoadProvider = ({children}) => {
    const [load, setLoad] = useState(false);
    return (
        <LoadContext.Provider value={{load, setLoad}}>
            {children}
        </LoadContext.Provider>
    )
};

export { LoadProvider, LoadContext };
