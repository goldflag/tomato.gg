// React
import React from "react";

// React-Icons-Kit
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/feather/chevronRight";
import { chevronLeft } from "react-icons-kit/feather/chevronLeft";
import { chevronsRight } from "react-icons-kit/feather/chevronsRight";
import { chevronsLeft } from "react-icons-kit/feather/chevronsLeft";

// Styled-Components
import styled from "styled-components";

// Local

const PaginationContainer = styled.div`
    font-family: Roboto Mono;
    padding: 1rem;
    font-size: 0.8rem;
    background-color: rgba(40, 40, 50, 0.5);
    color: rgb(220, 220, 220);
    backdrop-filter: blur(7px);
`;

const PaginationButton = styled.button`
    font-weight: 500;
    height: 2rem;
    width: 2rem;
    color: rgb(100, 129, 234);
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
    if (props.pageSizes[0] >= props.pageSize * props.pageOptions.length)
        // hide component when there's no pagination to be done
        return null;

    return (
        <PaginationContainer>
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
                style={{
                    color: "rgb(255, 255, 255)",
                    backgroundColor: "rgba(100, 100, 150, 0.5)",
                    fontFamily: "Roboto Mono",
                    border: "None",
                    padding: "3px",
                }}
            >
                {props.pageSizes.map((pageSize) => (
                    <option
                        key={pageSize}
                        value={pageSize}
                        style={{
                            color: "rgb(255, 255, 255)",
                            backgroundColor: "rgba(40, 40, 70, 0.5)",
                            fontFamily: "Roboto Mono",
                        }}
                    >
                        Show {pageSize}
                    </option>
                ))}
            </select>
        </PaginationContainer>
    );
};

export const ServerPagination = ({ page, numPages, setPage }) => {
    return (
        <PaginationContainer>
            <PaginationButton onClick={() => setPage(0)} disabled={page === 0}>
                <Icon size={24} icon={chevronsLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => setPage(page > 0 ? page - 1 : 0)}
                disabled={page === 0}
            >
                <Icon size={24} icon={chevronLeft} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => {
                    setPage(page < numPages ? page + 1 : numPages);
                }}
                disabled={page === numPages - 1}
            >
                <Icon size={24} icon={chevronRight} />
            </PaginationButton>{" "}
            <PaginationButton
                onClick={() => {
                    setPage(numPages - 1);
                }}
                disabled={page === numPages - 1}
            >
                <Icon size={24} icon={chevronsRight} />
            </PaginationButton>{" "}
            Page {page + 1} of {numPages}{" "}
        </PaginationContainer>
    );
};
