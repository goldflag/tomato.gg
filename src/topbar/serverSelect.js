// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LocalizedStrings from "Functions/localizedStrings";

// LOCAL
import { ServerContext } from "Context";
import { serverConv } from "Data/conversions";

const ButtonWrapper = styled.div`
    margin-left: 0.5rem;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`;

const SelectButton = styled(Button)`
    font-family: "Roboto Mono" !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgb(37, 46, 105) !important;
    border: 2px solid ${({ selected }) => (selected ? "rgb(222, 13, 93)" : "rgba(0, 0, 0, 0)")} !important;
    border-radius: ${({ radius }) => radius} !important;
    border-right: 0;
    padding: 1px 0.5rem !important;
    width: 55px;
    &:hover {
        color: rgb(255, 255, 255) !important;
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`;

const strings = LocalizedStrings({
    en: {
        server: "select default server",
    },
    cs: {
        server: "vyberte výchozí server",
    },
    es: {
        server: "seleccionar servidor predeterminado",
    },
    fr: {
        server: "Sélectionnez un serveur par défaut",
    },
    tr: {
        server: "Varsayılan sunucuyu seç",
    },
    pl: {
        server: "Wybierz domyślny serwer",
    },
    ru: {
        server: "Выберите свой сервер",
    },
});

const servers = ["com", "eu", "asia"];
const radiuses = ["20px 0 0 20px", "0", "0 20px 20px 0"];

const ServerSelectButtons = () => {
    const { server, setServer } = useContext(ServerContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text" aria-label={strings.server}>
                {servers.map((id, i) => (
                    <SelectButton key={i} radius={radiuses[i]} selected={server === id} onClick={() => setServer(id)}>
                        {serverConv[id]}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
