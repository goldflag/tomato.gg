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
    font-family: "Roboto Mono" !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgb(37, 46, 105) !important;
    border: 2px solid ${({ selected }) => (selected ? "rgb(207, 31, 242)" : "rgba(0, 0, 0, 0)")}  !important;
    border-radius: ${({ radius }) => radius} !important;
    border-right: 0;
    padding: 1px 0.5rem !important;
    width: 80px;
    &:hover {
        color: rgb(255, 255, 255) !important;
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`;

const modes = ["player", "clan"];
const radiuses = [
    "20px 0 0 20px",
    "0 20px 20px 0"
];

const ServerSelectButtons = () => {
    const { mode, setMode } = useContext(SearchmodeContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text">
                {modes.map((id, i) => (
                    <SelectButton key={i} radius={radiuses[i]} selected={mode === id} onClick={() => setMode(id)}>
                        {id}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
