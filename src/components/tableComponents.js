import styled, { css } from "styled-components";

export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;
export const FiltersContainer = styled.div`
    padding: 16px;
    background-color: rgba(40, 40, 70, 0.5);
    width: 100%;
    backdrop-filter: blur(7px);
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
    white-space: nowrap;
    position: sticky;
    border-spacing: 0;
    width: 100%;
    font-size: 0.8rem;
    font-family: Roboto Mono;
    cursor: ${({ pointer }) => (pointer === true ? "pointer" : null)};
    backdrop-filter: blur(7px);
    tr {
        overflow-x: scroll;
        color: ${({ theme }) =>
            theme === "dark"
                ? css`rgb(220, 220, 220)`
                : css`rgb(100, 100, 100)`};
        background-color: ${({ theme }) =>
            theme === "dark"
                ? css`rgba(40, 40, 70, 0.5)`
                : css`rgb(250, 250, 250)`};
        :nth-child(even) {
            background-color: ${({ theme }) =>
                theme === "dark"
                    ? css`rgba(50, 50, 80, 0.5)`
                    : css`rgb(240, 240, 240)`};
        }
        :hover {
            background-color: ${({ theme }) =>
                theme === "dark"
                    ? css`rgba(30, 30, 60, 0.5)`
                    : css`rgb(220, 220, 230)`};
        }
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: ${({ theme }) =>
            theme === "dark"
                ? css`rgba(50, 50, 80, 0.5)`
                : css`rgb(255, 255, 255)`};
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
        theme === "dark"
            ? css`rgba(40, 40, 70, 0.5)`
            : css`rgb(250, 250, 250)`};
    padding: 10px;
`;

export const Name = styled.div`
    display: grid;
    grid-template-columns: 90px 50%;
    align-items: center;
    color: ${({ val }) => (val === true ? `#ffe455` : null)};
`;
