import styled, { css } from "styled-components";

export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;

    background-color: ${({ theme }) =>
        theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
`;
export const FiltersContainer = styled.div`
    padding: 10px 10px 0 10px;
`;

export const ButtonFiltersContainer = styled.div`
    font-family: Roboto Mono;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 10px 0 0 0;
`;

export const StyledTable = styled.table`
    position: sticky;
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
    font-family: Roboto Mono;
    cursor: ${({ pointer }) => pointer === true ? 'pointer' : null};
    tr {
        overflow-x: scroll;
        :last-child {
            td {
                border-bottom: solid 1px
                    ${({ theme }) =>
                        theme === "dark"
                            ? "rgb(100, 100, 100)"
                            : "rgb(200, 200, 200)"};
            }
        }
        color: ${({ theme }) =>
            theme === "dark"
                ? css`rgb(220, 220, 220)`
                : css`rgb(100, 100, 100)`};
        background-color: ${({ theme }) =>
            theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
        :nth-child(even) {
            background-color: ${({ theme }) =>
                theme === "dark"
                    ? css`rgb(50, 50, 50)`
                    : css`rgb(240, 240, 240)`};
        }
        :hover {
            background-color: ${({ theme }) =>
                theme === "dark"
                    ? css`rgb(30, 30, 30)`
                    : css`rgb(220, 220, 230)`};
        }
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: ${({ theme }) =>
            theme === "dark" ? css`rgb(50, 50, 50)` : css`rgb(255, 255, 255)`};
        border-bottom: solid 1px
            ${({ theme }) =>
                theme === "dark"
                    ? css`rgb(100, 100, 100)`
                    : css`rgb(200, 200, 200)`};
        font-weight: 500;
    }
    td {
        margin: 0;
        // padding: 0rem 0rem 0rem 0.5rem;
        padding: 0.3rem 0.5rem;
        :last-child {
            border-right: 0;
        }
        ${({ tdOverride }) =>
            css`
                ${tdOverride}
            `}
    }
`;

export const SubRow = styled.tr`
    background-color: ${({ theme }) =>
        theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
    padding: 10px;
`;
