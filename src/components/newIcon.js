// NPM
import React from "react";
import styled from "styled-components";
import LocalizedStrings from "react-localization";

const GreenIcon = styled.span`
    font-size: 0.8rem;
    padding: 3px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    background-color: rgb(0, 184, 104);
`;

const strings = new LocalizedStrings({
    en: {
        new: "NEW!",
    },
    es: {
        new: "¡NUEVO!",
    },
    fr: {
        new: "NEW!",
    },
    pl: {
        new: "NOWE!",
    },
    ru: {
        new: "НОВЫЙ!",
    },
    tr: {
        new: "YENİ!",
    },
});

export const NewIcon = () => <GreenIcon>{strings.new}</GreenIcon>;
