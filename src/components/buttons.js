import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const SelectButtonContainer = styled.div`
    margin: 1rem 0rem;
`;

export const SelectButton = styled(Button)`
    font-family: "Roboto Mono" !important;
    font-size: 0.9rem !important;
    font-weight: 500 !important;
    color: rgb(210, 210, 210) !important;
    background-color: rgb(76, 90, 166) !important;
    border: 2px solid ${({ selected }) => (selected ? "rgb(222, 13, 93)" : "rgba(0, 0, 0, 0)")} !important;
    border-radius: ${({ radius }) => radius} !important;
    border-right: 0;
    padding: 1px 10px !important;
    &:hover {
        color: rgb(255, 255, 255) !important;
        border: 2px solid rgba(150, 150, 200, 1) !important;
    }
`;