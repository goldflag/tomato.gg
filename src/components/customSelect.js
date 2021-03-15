import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const CustomSelect = styled.div`
    user-select: none;
    cursor: pointer;
`

export const DropdownSelector = styled(Button)`
    font-family: "Roboto Mono" !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgba(37, 46, 105, 1) !important;
    border-radius: 100px !important;
    padding: 2px 10px !important;
    border: 2px solid rgba(0, 0, 0, 0) !important;
    width: ${({width}) => width}px !important;
    :hover {
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`

export const DropdownOptions = styled.div`
    position: absolute;
    display: ${({displayed}) => displayed};
    width: 100px;
`

export const DropdownOptionsChildren = styled(Button)`
    color: rgb(210, 210, 210) !important;
    background-color: rgba(37, 46, 105, 0.85) !important;
    padding: 1px 4px !important;
    border: 2px solid rgba(0, 0, 0, 0) !important;
    border-radius: 0px !important;
    width: ${({width}) => width}px !important;
    :hover {
        border: 2px solid rgb(141, 86, 232) !important;
    }
`