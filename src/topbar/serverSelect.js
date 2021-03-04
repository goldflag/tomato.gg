// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import LocalizedStrings from "react-localization";

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
    font-family: "Segoe UI" !important;
    font-size: 0.9rem !important;
    font-weight: 600 !important;
    color: rgb(210, 210, 210) !important;
    background-color: ${({ selected }) => (selected ? "rgb(222, 13, 93)" : "rgb(37, 46, 105)")} !important;
    min-width: 55px !important;
    border-width: 0px !important;

    &:hover {
        color: rgb(255, 255, 255) !important;
    }
`;

const strings = new LocalizedStrings({
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

const ServerSelectButtons = () => {
    const { server, setServer } = useContext(ServerContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text" aria-label={strings.server}>
                {servers.map((id, i) => (
                    <SelectButton key={i} selected={server === id} onClick={() => setServer(id)}>
                        {serverConv[id]}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
