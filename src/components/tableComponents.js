// NPM
import React from "react";
import styled, { css } from "styled-components";

// LOCAL
import { tierConv, nationConv, classConv } from "Data/conversions";
export const TableContainer = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
`;
export const FiltersContainer = styled.div`
    padding: 16px;
    background-color: rgba(40, 40, 70, 0.5);
    width: 100%;
    backdrop-filter: blur(7px);
    @media screen and (max-width: 1000px) {
        overflow-x: scroll;
    }
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
        color: rgb(220, 220, 220);
        background-color: rgba(40, 40, 70, 0.5);
        :nth-child(even) {
            background-color: rgba(50, 50, 80, 0.5);
        }
        :hover {
            background-color: rgba(30, 30, 60, 0.5);
        }
    }
    th {
        text-align: left;
        padding: 10px;
        background-color: rgba(50, 50, 80, 0.5);
        font-weight: 500;
    }
    td {
        margin: 0;
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
    background-color: rgba(40, 40, 70, 0.5);
    padding: 10px;
`;

export const Name = styled.div`
    display: grid;
    grid-template-columns: 90px 50%;
    align-items: center;
    color: ${({ isPrem }) => (isPrem ? `#ffe455` : null)};
`;

export const TankNameCell = ({ row: { original } }) => (
    <Name isPrem={original.is_premium || original.isPrem}>
        <img src={original.image} alt={original.short_name || original.name} />
        {original.short_name || original.name}
    </Name>
);

export const NationCell = ({ value, maxWidth }) => (
    <img
        src={require(`Assets/flagIcons/${nationConv[value] || value}.png`)}
        style={{ maxWidth: maxWidth || "40px" }}
        alt={value}
    />
);

export const ClassCell = ({ value, maxWidth }) => (
    <img
        src={require(`Assets/classIcons/${classConv[value] || value}.png`)}
        style={{ maxWidth: maxWidth || "20px" }}
        alt={value}
    />
);

export const TierCell = ({ value }) => tierConv[value] || value;
