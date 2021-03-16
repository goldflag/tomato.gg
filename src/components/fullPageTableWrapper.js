// Styled-Components
import styled from "styled-components";

export const FullPageTableWrapper = styled.div`
    *:focus {
        outline: none;
    }

    padding: 2rem 0 5rem 0;
    margin: 0rem 15%;

    @media screen and (max-width: 1616px) {
        margin: 0rem 5%;
    }

    @media screen and (max-width: 1000px) {
        margin: 0rem 0.5rem;
    }
`;
