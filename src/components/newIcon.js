// NPM
import React from "react";
import styled from "styled-components";

const GreenIcon = styled.span`
    font-size: 0.8rem;
    padding: 3px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    background-color: rgb(0, 184, 104);
`;

export const NewIcon = () => <GreenIcon>NEW!</GreenIcon>;