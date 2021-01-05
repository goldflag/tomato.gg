import styled, { css } from "styled-components";
export const Info = styled.div`
    background-color: ${({ theme }) =>
        theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
    color: ${({ theme }) =>
        theme === "dark" ? css`rgb(255, 255, 255)` : css`rgb(60, 60, 60)`};
    padding: 1rem;
`;
