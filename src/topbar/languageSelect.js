// NPM
import React, { useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from 'react-outside-click-handler';
import Button from "@material-ui/core/Button";

// LOCAL
import { useCurrentLanguage } from "Functions/localizedStrings";
import { languages } from "Data/localizations";

const DropDown = styled.div`
    margin-top: 0rem;   
    z-index: 1;
    font-family: Roboto Mono;
    font-size: 0.9rem;
    user-select: none;
    cursor: pointer;
    width: 125px;
    @media screen and (max-width: 1000px) {
        display: None;
    }
`
const DropDownSelector = styled(Button)`
    font-family: "Roboto Mono" !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgba(37, 46, 105, 1) !important;
    border-radius: 100px !important;
    padding: 1px 10px !important;
    border: 2px solid rgba(0, 0, 0, 0) !important;
    width: 125px !important;
    text-align: left !important;
    :hover {
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`

const DropDownOptions = styled.div`
    position: absolute;
    display: ${({displayed}) => displayed};
    width: 100px;
    :focus {
        display: block;
    }
`

const DropDownChildren = styled(Button)`
    color: rgb(210, 210, 210) !important;
    background-color: rgba(37, 46, 105, 0.85) !important;
    padding: 1px 4px !important;
    border: 2px solid rgba(0, 0, 0, 0) !important;
    border-radius: 0px !important;
    width: 125px !important;
    text-align: "left" !important;

    :hover {
        border: 2px solid rgb(141, 86, 232) !important;
    }
`

const Flag = styled.img`
    width: 27px;
    padding-right: 5px;
`

export default function LanguageSelect() {
    const [ displayed, setDisplayed ] = useState("None");
    const [language, setLanguage] = useCurrentLanguage();
    const handleChange = async (e) => setLanguage(e, true);

    return (
        <DropDown>
            <DropDownSelector onClick={() => setDisplayed(displayed === "Block" ? "None" : "Block")}>
                <Flag src={require(`Assets/modernFlags/${language}.svg`)}/> <div style={{textAlign: "left", width: "100%"}}> {" "} {languages[language].name}</div>
            </DropDownSelector>
            <OutsideClickHandler onOutsideClick={() => setDisplayed("None")}>
                <DropDownOptions displayed={displayed}>
                    {Object.entries(languages).map(([code, { name }], i) => (
                        <DropDownChildren value={code} key={i} onClick={() => handleChange(code)}>
                            <Flag src={require(`Assets/modernFlags/${code}.svg`)}/><div style={{textAlign: "left", width: "100%"}}>{name}</div>
                        </DropDownChildren>
                    ))}
                </DropDownOptions>
            </OutsideClickHandler>
        </DropDown>
    );
}
