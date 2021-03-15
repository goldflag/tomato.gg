// NPM
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// LOCAL
import { useCurrentLanguage } from "Functions/localizedStrings";
import { languages } from "Data/localizations";

export default function LanguageSelect() {
    const [language, setLanguage] = useCurrentLanguage();
    const handleChange = (e) => setLanguage(e.target.value, true);
    return (
        <Select value={language.split("-")[0]} onChange={handleChange} >
            {Object.entries(languages).map(([code, { name }], i) => (
                <MenuItem value={code} key={i}>
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
}
