// NPM
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const useURLState = (key, defaultVal, type) => {
    const history = useHistory();
    useLocation(); // used to update hook on location change

    const redir = (params) => {
        const path = window.location.pathname + "?" + params.toString();
        history.push(path);
    };

    const setState = (val) => {
        const params = new URLSearchParams(window.location.search);
        params.set(key, val);
        redir(params);
    };

    const unsetState = () => {
        const params = new URLSearchParams(window.location.search);
        params.delete(key);
        redir(params);
    };

    const getState = () => {
        const params = new URLSearchParams(window.location.search);
        if (!params.has(key)) return defaultVal;
        let val = params.get(key);
        if (typeof defaultVal === "number" || type === "number") val = parseInt(val);
        return val;
    };

    return [getState(), setState, unsetState];
};

export const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
};
