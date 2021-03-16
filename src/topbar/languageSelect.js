// NPM
import React, { useState } from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

// LOCAL
import { useCurrentLanguage } from "Functions/localizedStrings";
import { languages } from "Data/languages";
import { CustomSelect, DropdownSelector, DropdownOptions, DropdownOptionsChildren } from "Components/customSelect";

const Dropdown = styled.div`
    margin-top: 0rem;
    z-index: 1;
    font-family: Roboto Mono;
    font-size: 0.9rem;
    width: 125px;
    @media screen and (max-width: 1000px) {
        display: None;
    }
`;

const Flag = styled.img`
    width: 27px;
    padding-right: 5px;
`;

export default function LanguageSelect() {
    const [open, setOpen] = useState("None");
    const [language, setLanguage] = useCurrentLanguage();
    const handleChange = async (e) => setLanguage(e, true);

    return (
        <Dropdown>
            <CustomSelect>
                <DropdownSelector
                    width={"125"}
                    open={open}
                    border={"rgba(120, 120, 200, 0.8)"}
                    onClick={() => setOpen(open === "Block" ? "None" : "Block")}
                >
                    <Flag src={require(`Assets/modernFlags/${language}.svg`)} />
                    <div style={{ textAlign: "left", width: "100%" }}>{languages[language].name}</div>
                </DropdownSelector>
                <OutsideClickHandler onOutsideClick={() => setOpen("None")}>
                    <DropdownOptions open={open}>
                        {Object.entries(languages).map(([code, { name }], i) => (
                            <DropdownOptionsChildren
                                value={code}
                                key={i}
                                width={"125"}
                                onClick={() => handleChange(code)}
                                background={"rgba(50, 60, 110, 0.9)"}
                            >
                                <Flag src={require(`Assets/modernFlags/${code}.svg`)} />
                                <div style={{ textAlign: "left", width: "100%" }}>{name}</div>
                            </DropdownOptionsChildren>
                        ))}
                    </DropdownOptions>
                </OutsideClickHandler>
            </CustomSelect>
        </Dropdown>
    );
}
