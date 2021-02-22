// NPM
import { useHistory, useLocation } from "react-router-dom";

export const useURLState = (key, defaultVal, type) => {
    const history = useHistory();
    useLocation(); // used to update hook on location change

    const redir = (params) => {
        const path = window.location.pathname + "?" + params.toString();
        history.push(path);
        console.log(path);
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
        if (typeof defaultVal === "number" || type === "number")
            val = parseInt(val);
        return val;
    };

    return [getState(), setState, unsetState];
};
