const parseURLParams = (search_string, opts) => {
    const params = new URLSearchParams(search_string);
    const retval = {};
    Object.entries(opts).forEach(([key, defaultVal]) => {
        retval[key] = params.get(key) || defaultVal;
        if (typeof defaultVal === "number") {
            retval[key] = parseInt(retval[key]);
        }
    });
    return retval;
};

const updateURLParams = (existing, newParams) => {
    const params = new URLSearchParams(existing);
    Object.entries(newParams).forEach(([key, val]) => params.set(key, val));
    return params.toString();
};

export { parseURLParams, updateURLParams };
