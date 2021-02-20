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

const updateURLParams = (existing, updateKey, updateVal) => {
    const params = new URLSearchParams(existing);
    params.set(updateKey, updateVal);
    return params.toString();
};

export { parseURLParams, updateURLParams };
