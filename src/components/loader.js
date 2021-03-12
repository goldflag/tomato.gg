import React from "react";
import styled from "styled-components";
import loader from "Assets/loading.svg";
import { worryduck, worrypet, worrychicken, worryjam, worrynod, worrypetted, worrypickaxe, worrysword, worrystick } from "Assets/loaders";

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

export const Loader = (props) => {
    const loaders  = [
        worryduck, worrypet, worrychicken, worryjam, worrynod, worrypetted, worrypickaxe, worrysword, worrystick
    ]

    const randLoader = loaders[Math.floor(Math.random() * Math.floor(loaders.length))];

    return (
        <LoaderWrapper {...props}>
            <LoadingCircle src={ props.frog === true ? randLoader : loader} alt="loader" />
        </LoaderWrapper>
    )
};
