import React from "react";
import styled from "styled-components";
import loader from "../assets/loading.svg";

const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ top }) => top}% 0% ${({ bottom }) => bottom}% 0%;
    background-color: ${({ color }) => color};
`;

const LoadingCircle = styled.img`
    max-width: 75px;
`;

export const Loader = (props) => (
    <LoaderWrapper {...props}>
        <LoadingCircle src={loader} alt="loader" />
    </LoaderWrapper>
);
