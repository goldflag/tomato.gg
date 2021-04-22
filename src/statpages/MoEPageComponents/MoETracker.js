import React, { useState, useEffect, useCallback, useContext } from "react";
import { Icon } from "react-icons-kit";
import { arrowDown } from "react-icons-kit/feather/arrowDown";
import { arrowUp } from "react-icons-kit/feather/arrowUp";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";
import { ServerContext } from "Context";
import MoEGraph from "./MoEGraph";
import {
    Loader,
    Pagination,
    ClassFilter,
    GlobalFilter,
    MoETierFilter,
    NationFilter,
    PremFilter,
    arrayFilterFn,
} from "Components";
import {
    ButtonFiltersContainer,
    FiltersContainer,
    StyledTable,
    SubRow,
    TableContainer,
    NationCell,
    TankNameCell,
    ClassCell,
    TierCell,
    tableHeaders,
} from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";

const backend = process.env.REACT_APP_BACKEND;

const MoEConv = {
    95: "3",
    85: "2",
    65: "1",
};

function colorScale(val, multiplier) {
    const green = (val) => `rgb(${255 + val * multiplier},255,${255 + val * multiplier})`;
    const red = (val) => `rgb(255,${255 - val * multiplier},${255 - val * multiplier})`;
    return val > 0 ? red(val) : green(val);
}
const colorCell = (percent, colMult) => ({ value }) => (
    <span style={{ color: colMult ? colorScale(value, colMult) : undefined }}>
        {percent ? `${value > 0 ? "+" : ""}${value}%` : value}
    </span>
);

function MoETracker({ data, moe }) {
    const { server } = useContext(ServerContext);

    console.log(data)
    const columns = React.useMemo(
        () => [
            {
                Cell: TankNameCell,
                Header: tableHeaders.name,
                accessor: "name",
                disableFilters: true,
            },
            {
                Cell: NationCell,
                Header: tableHeaders.nation,
                accessor: "nation",
                Filter: NationFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: TierCell,
                Header: Capital(commonStrings.tier),
                accessor: "tier",
                Filter: MoETierFilter,
                filter: arrayFilterFn,
            },
            {
                Cell: ClassCell,
                Header: tableHeaders.class,
                accessor: "class",
                Filter: ClassFilter,
                filter: arrayFilterFn,
            },
            {
                Header: tableHeaders.formatString(tableHeaders.moeReqs, MoEConv[moe]),
                accessor: moe,
                disableFilters: true,
            },
            {
                Cell: colorCell(false, 50),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 7, "Δ"),
                accessor: `7diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: colorCell(true, 50),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 7, "%Δ"),
                accessor: `7percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: colorCell(false, 30),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 14, "Δ"),
                accessor: `14diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: colorCell(true, 30),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 14, "%Δ"),
                accessor: `14percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: colorCell(false, 20),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 30, "Δ"),
                accessor: `30diff${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Cell: colorCell(true, 20),
                Header: tableHeaders.formatString(tableHeaders.dayChange, 30, "%Δ"),
                accessor: `30percent${moe}`,
                disableFilters: true,
                sortType: "basic",
            },
            {
                Header: "",
                accessor: "isPrem",
                Filter: PremFilter,
                filter: arrayFilterFn,
                hidden: true,
            },
        ],
        [moe]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        visibleColumns,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: 0,
                pageSize: 50,
                sortBy: [
                    {
                        id: `7percent${moe}`,
                        desc: false,
                    },
                ],
            },
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        usePagination
    );

    function SubRows({ data }) {
        if (data) {
            return (
                <div
                    style={{
                        backgroundColor: "rgba(40, 40, 70, 0.5)",
                        marginLeft: "-0.5rem",
                    }}
                >
                    <MoEGraph data={data} />
                </div>
            );
        } else {
            return <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={20} top={20} />;
        }
    }

    function SubRowAsync({ row, rowProps, visibleColumns }) {
        const [data, setData] = useState();
        useEffect(() => {
            async function get() {
                fetch(`${backend}/api/moetank/${server}/${row.original.id}`)
                    .then((res) => res.json())
                    .then((res) => setData(res));
            }

            get();
        }, [row.original.id]);

        return <SubRows data={data} />;
    }

    const renderRowSubComponent = useCallback(
        ({ row, rowProps, visibleColumns }) => (
            <SubRowAsync row={row} rowProps={rowProps} visibleColumns={visibleColumns} />
        ),
        []
    );

    return (
        <>
            <FiltersContainer>
                <div style={{ marginBottom: "-10px" }}>
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
                {headerGroups.map((headerGroup, i) => (
                    <ButtonFiltersContainer key={i}>
                        {headerGroup.headers.map(
                            ({ disableFilters, render }, i) =>
                                !disableFilters && <span key={i}>{render("Filter")}</span>
                        )}
                    </ButtonFiltersContainer>
                ))}
            </FiltersContainer>
            <TableContainer>
                <StyledTable {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) =>
                                    column.hidden ? null : (
                                        <th
                                            {...column.getHeaderProps(column.getSortByToggleProps())}
                                            {...column.getHeaderProps({
                                                style: {
                                                    cursor: "pointer",
                                                    backgroundColor: column.isSorted ? "rgb(207, 0, 76)" : null,
                                                },
                                            })}
                                        >
                                            {column.render("Header")}
                                            <span>
                                                {column.isSorted ? (
                                                    column.isSortedDesc ? (
                                                        <Icon size={16} icon={arrowDown} />
                                                    ) : (
                                                        <Icon size={16} icon={arrowUp} />
                                                    )
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                        </th>
                                    )
                                )}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <React.Fragment key={i}>
                                    <tr {...row.getToggleRowExpandedProps({})}>
                                        {row.cells.map((cell) =>
                                            cell.column.hidden ? null : (
                                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            )
                                        )}
                                    </tr>
                                    {row.isExpanded ? (
                                        <SubRow>
                                            <td colSpan={visibleColumns.length}>{renderRowSubComponent({ row })}</td>
                                        </SubRow>
                                    ) : null}
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </StyledTable>
            </TableContainer>
            <Pagination
                pageSizes={[50, 100, 250, 500]}
                {...{
                    canPreviousPage,
                    canNextPage,
                    pageOptions,
                    pageCount,
                    gotoPage,
                    nextPage,
                    previousPage,
                    setPageSize,
                    pageIndex,
                    pageSize,
                }}
            />
        </>
    );
}

export default MoETracker;
