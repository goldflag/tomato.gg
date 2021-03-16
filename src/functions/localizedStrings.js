import { useState, useEffect } from "react";
import _LocalizedStrings from "react-localization";

const randID = () => Math.random().toString(16).substr(2, 16);

/*
Wrapper around LocalizedStrings that allows app-wide changes to the current language
*/
const { LocalizedStrings, setLanguage, getLanguage, useCurrentLanguage } = (() => {
    const setLanguageFns = [];
    const watcherFns = {};
    let currentLanguage = localStorage.getItem("lang") || navigator.languages[0];

    const setLanguageForAll = (lang, reload = false) => {
        console.log(`Setting language to ${lang} for ${setLanguageFns.length} string blocks`);
        currentLanguage = lang;
        setLanguageFns.forEach((fn) => fn(lang));
        Object.values(watcherFns).forEach((fn) => fn(lang));
        localStorage.setItem("lang", lang);
        if (reload) window.location.reload();
    };
    const getLanguage = () => currentLanguage;

    return {
        LocalizedStrings: (obj) => {
            const strings = new _LocalizedStrings(obj);
            strings.setLanguage(currentLanguage);
            setLanguageFns.push(strings.setLanguage.bind(strings));
            strings.setLanguage = setLanguageForAll;
            strings.getLanguage = getLanguage;
            return strings;
        },
        setLanguage: setLanguageForAll,
        getLanguage,
        /* Hook for listening to language changes */
        useCurrentLanguage: () => {
            const [lang, setLang] = useState(currentLanguage);
            useEffect(() => {
                const id = randID();
                watcherFns[id] = setLang;
                return () => {
                    delete watcherFns[id];
                };
            }, []);

            return [lang, setLanguageForAll];
        },
    };
})();

export { LocalizedStrings, setLanguage, getLanguage, useCurrentLanguage };
export default LocalizedStrings;
