import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomSelect = styled.div`
    user-select: none;
    cursor: pointer;
`;

export const DropdownSelector = styled(Button)`
    font-family: "Roboto Mono" !important;
    color: rgb(210, 210, 210) !important;
    background-color: ${({ background }) => background || "rgba(37, 46, 105, 1)"} !important;
    border-radius: ${({ open }) => (open === "None" ? "100px" : "15px 15px 0px 0px")} !important;
    padding: 2px 10px !important;
    border: 2px solid ${({ border }) => border || "rgba(255, 255, 255, 1)"} !important;
    width: ${({ width }) => width}px !important;
    :hover {
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`;

export const DropdownOptions = styled.div`
    position: absolute;
    display: ${({ open }) => open};
    width: 100px;
`;

export const DropdownOptionsChildren = styled(Button)`
    color: rgb(210, 210, 210) !important;
    background-color: ${({ background }) => (background ? background : "rgba(37, 46, 105, 0.85)")} !important;
    padding: 1px 4px !important;
    border: 2px solid rgba(0, 0, 0, 0) !important;
    border-radius: 0px !important;
    width: ${({ width }) => width}px !important;
    :hover {
        border: 2px solid ${({ dropdownSelectColor }) => dropdownSelectColor || "rgb(141, 86, 232)"} !important;
    }
    :last-child {
        border-radius: 0px 0px 15px 15px !important;
    }
`;

export const SelectComponent = ({ value, name, setValue, options, width, background, border, dropdownSelectColor }) => {
    const [open, setOpen] = useState("None");
    return (
        <CustomSelect>
            <DropdownSelector
                open={open}
                width={width}
                onClick={() => setOpen(open === "Block" ? "None" : "Block")}
                background={background}
                border={border}
            >
                {name}
            </DropdownSelector>
            <OutsideClickHandler onOutsideClick={() => setOpen("None")}>
                <DropdownOptions open={open}>
                    {options.map(([code, name], i) => (
                        <DropdownOptionsChildren
                            value={code}
                            key={i}
                            width={width}
                            background={background}
                            dropdownSelectColor={dropdownSelectColor}
                            onClick={() => {
                                setValue(code);
                                setOpen("None");
                            }}
                        >
                            {name}
                        </DropdownOptionsChildren>
                    ))}
                </DropdownOptions>
            </OutsideClickHandler>
        </CustomSelect>
    );
};
