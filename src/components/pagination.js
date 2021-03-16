// NPM
import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { chevronRight, chevronLeft, chevronsRight, chevronsLeft } from "react-icons-kit/feather";
import LocalizedStrings from "Functions/localizedStrings";

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
    &:disabled {
        color: rgb(220, 220, 220);
        background: none;
    }
    &:focus {
        outline: unset;
    }
    &:focus-visible {
        outline: -webkit-focus-ring-color auto 1px;
    }
`;

const { formatString, ...strings } = LocalizedStrings({
    en: {
        pageOf: "Page {0} of {1}",
        gotoPage: "Go to page:",
        show: "Show {0}",
    },
    cs: {
        pageOf: "Stránka {0} z {1}",
        gotoPage: "Jít na stránku:",
        show: "Zobrazit {0}",
    },
    de: {
        pageOf: "Seite {0} von {1}",
        gotoPage: "Springe zu Seite:",
        show: "Zeige {0}",
    },
    es: {
        pageOf: "Página {0} de {1}",
        gotoPage: "Ir a la página:",
        show: "Mostrar {0}",
    },
    fr: {
        pageOf: "Page {0} sur {1}",
        gotoPage: "Aller à la page:",
        show: "Montrer {0}",
    },
    ko: {
        pageOf: " {0} of {1}장",
        gotoPage: "페이지 찾기:",
        show: "한 페이지에서 {0}줄 보기",
    },
    pl: {
        pageOf: "Strona {0} z {1}",
        gotoPage: "Idź na stronę:",
        show: "Pokaż {0}",
    },
    ru: {
        pageOf: "Страница {0} из {1}",
        gotoPage: "Перейти на страницу:",
        show: "Показать {0}",
    },
    tr: {
        pageOf: "Sayfa {0} / {1}",
        gotoPage: "Git:",
        show: "Gösterilen {0}",
    },
});

export const Pagination = (props) => {
    if (props.pageSizes[0] >= props.pageSize * props.pageOptions.length)
        // hide component when there's no pagination to be done
        return null;

    return (
        <PaginationContainer>
            <PaginationButton onClick={() => props.gotoPage(0)} disabled={!props.canPreviousPage}>
                <Icon size={24} icon={chevronsLeft} />
            </PaginationButton>{" "}
            <PaginationButton onClick={() => props.previousPage()} disabled={!props.canPreviousPage}>
                <Icon size={24} icon={chevronLeft} />
            </PaginationButton>{" "}
            <PaginationButton onClick={() => props.nextPage()} disabled={!props.canNextPage}>
                <Icon size={24} icon={chevronRight} />
            </PaginationButton>{" "}
            <PaginationButton onClick={() => props.gotoPage(props.pageCount - 1)} disabled={!props.canNextPage}>
                <Icon size={24} icon={chevronsRight} />
            </PaginationButton>{" "}
            {formatString(strings.pageOf, props.pageIndex + 1, props.pageOptions.length)}
            {props.showGoTo ? (
                <span>
                    | {strings.gotoPage}{" "}
                    <input
                        type="number"
                        defaultValue={props.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
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
                            border: "None"
                        }}
                    >
                        {formatString(strings.show, pageSize)}
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
            <PaginationButton onClick={() => setPage(page > 0 ? page - 1 : 0)} disabled={page === 0}>
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
            {formatString(strings.pageOf, page + 1, numPages)}{" "}
        </PaginationContainer>
    );
};
