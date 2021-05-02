// NPM
import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

// LOCAL
import { SearchmodeContext } from "Context";
import { commonStrings } from "Data/localizations";

const ButtonWrapper = styled.div`
    margin-left: 0.5rem;
`;

const SelectButton = styled(Button)`
    font-family: "Roboto Mono" !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgb(37, 46, 105) !important;
    border: 2px solid ${({ $selected, $borderColor }) => ($selected ? $borderColor : "rgba(0, 0, 0, 0)")} !important;
    border-radius: ${({ $borderRadius }) => $borderRadius} !important;
    border-right: 0;
    padding: 1px 10px !important;
    &:hover {
        color: rgb(255, 255, 255) !important;
        border-color: rgba(150, 150, 200, 1) !important;
    }
`;

const modes = [
    { value: "player", label: commonStrings.player, borderRadius: "20px 0 0 20px", borderColor: "#4e80c2" },
    { value: "clan", label: commonStrings.clan, borderRadius: "0 20px 20px 0", borderColor: "rgb(141, 86, 232)" },
];

const ServerSelectButtons = () => {
    const { mode, setMode } = useContext(SearchmodeContext);
    return (
        <ButtonWrapper>
            <ButtonGroup variant="text">
                {modes.map(({ value, label, borderRadius, borderColor }, i) => (
                    <SelectButton
                        key={i}
                        $borderRadius={borderRadius}
                        $borderColor={borderColor}
                        $selected={mode === value}
                        onClick={() => setMode(value)}
                    >
                        {label}
                    </SelectButton>
                ))}
            </ButtonGroup>
        </ButtonWrapper>
    );
};

export default ServerSelectButtons;
