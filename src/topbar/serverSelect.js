// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// LOCAL
import { strings } from "./index";
import { ServerContext } from "Context";
import { serverConv } from "Data/conversions";

const ButtonWrapper = styled.div`
    padding: 0px 10px 0px 10px;

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

const servers = ["com", "eu", "asia"];

const ServerSelectButtons = () => {
    const { server, toggleServer } = useContext(ServerContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text" aria-label={strings.server}>
                {servers.map((id, i) => (
                    <SelectButton key={i} selected={server === id} onClick={() => toggleServer(id)}>
                        {serverConv[id]}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
