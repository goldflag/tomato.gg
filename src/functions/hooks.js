// NPM
import { useHistory, useLocation } from "react-router-dom";

export const useURLState = (key, defaultVal) => {
    const history = useHistory();
    const location = useLocation();

    const redir = (params) => {
        history.push(location.pathname + "?" + params.toString());
    };

    const setState = (val) => {
        const params = new URLSearchParams(location.search);
        params.set(key, val);
        redir(params);
    };

    const unsetState = () => {
        const params = new URLSearchParams(location.search);
        params.delete(key);
        redir(params);
    };

    const getState = () => {
        const params = new URLSearchParams(location.search);
        if (!params.has(key)) return defaultVal;
        let val = params.get(key);
        if (typeof defaultVal === "number") val = parseInt(val);
        return val;
    };

    return [getState(), setState, unsetState];
};
