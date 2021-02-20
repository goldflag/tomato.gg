// Styled-Components
import styled from "styled-components";

export const FullPageTableWrapper = styled.div`
    *:focus {
        outline: none;
    }

    padding: 6rem 0rem 5rem 0rem;
    margin: 0rem 15% 0rem 15%;

    @media screen and (max-width: 1000px) {
        & {
            margin: 0rem 0.5rem;
        }
    }
`;
