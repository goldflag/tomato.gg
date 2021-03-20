// Styled-Components
import styled from "styled-components";

export const FullPageTableWrapper = styled.div`
    *:focus {
        outline: none;
    }
    padding: 1rem;
    max-width: 1800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: ${({columns}) => columns};
    @media screen and (max-width: 1616px) {
        margin: 0rem 5%;
    }

    @media screen and (max-width: 1000px) {
        padding: 0rem;
        margin: 0.5rem;
    }
`;
