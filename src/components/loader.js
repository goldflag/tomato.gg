import React from "react";
import styled from "styled-components";
import { worryLoaders, loader } from "Assets/loaders";

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

const randLoader = () => worryLoaders[Math.floor(Math.random() * worryLoaders.length)];

export const Loader = (props) => (
    <LoaderWrapper {...props}>
        <LoadingCircle src={props.frog ? randLoader() : loader} alt="loader" />
    </LoaderWrapper>
);
