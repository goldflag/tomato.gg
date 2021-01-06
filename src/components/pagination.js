// React
import React, { useContext } from "react";

// React-Icons-Kit
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";

// Styled-Components
import styled, { css } from "styled-components";

// Local
import { ThemeContext } from "../context";

const PaginationContainer = styled.div`
    padding: 1rem;
    font-size: 0.8rem;
    background-color: ${({ theme }) =>
        theme === "dark" ? css`rgb(40, 40, 40)` : css`rgb(250, 250, 250)`};
    color: ${({ theme }) =>
        theme === "dark" ? css`rgb(220, 220, 220)` : css`rgb(80, 80, 80)`};
`;

const PaginationButton = styled.button`
    font-family: "Segoe UI";
    font-weight: 500;
    height: 2rem;
    width: 2rem;
    color: rgb(71, 99, 214);
    background: none;
    padding: 0rem;
    border-width: 0px;

    &:hover {
        background-color: rgb(100, 129, 234);
        color: white;
        border-radius: 50%;
    }

    :disabled {
        color: rgb(220, 220, 220);
        background: none;
    }
`;

export const Pagination = (props) => {
    const { theme } = useContext(ThemeContext);

    if (props.pageSizes[0] >= props.pageSize * props.pageOptions.length)
        // hide component when there's no pagination to be done
        return null;

    return (
        <PaginationContainer theme={theme}>
            <PaginationButton
                onClick={() => props.gotoPage(0)}
                disabled={!props.canPreviousPage}
            >
                <Icon size={24} icon={chevronsLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => props.previousPage()}
                disabled={!props.canPreviousPage}
            >
                <Icon size={24} icon={chevronLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => props.nextPage()}
                disabled={!props.canNextPage}
            >
                <Icon size={24} icon={chevronRight} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => props.gotoPage(props.pageCount - 1)}
                disabled={!props.canNextPage}
            >
                <Icon size={24} icon={chevronsRight} />
            </PaginationButton>{" "}
            Page {props.pageIndex + 1} of {props.pageOptions.length}{" "}
            {props.showGoTo ? (
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={props.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                            props.gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>
            ) : null}
            {"  "}
            <select
                value={props.pageSize}
                onChange={(e) => {
                    props.setPageSize(Number(e.target.value));
                }}
            >
                {props.pageSizes.map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </PaginationContainer>
    );
};
