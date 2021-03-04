// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// LOCAL
import { SearchmodeContext } from "Context";

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

const modes = ["player", "clan"];

const ServerSelectButtons = () => {
    const { mode, setMode } = useContext(SearchmodeContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text">
                {modes.map((id, i) => (
                    <SelectButton key={i} selected={mode === id} onClick={() => setMode(id)}>
                        {id}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
