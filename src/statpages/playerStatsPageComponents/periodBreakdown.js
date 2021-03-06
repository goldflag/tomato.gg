// NPM
import React from "react";
import { Banner } from "Components";
import { useTable, usePagination, useSortBy, useFilters, useExpanded, useGlobalFilter } from "react-table";

// LOCAL
import {
  ClassFilter,
  GlobalFilter,
  NationFilter,
  Pagination,
  PremFilter,
  NumericTierFilter,
  arrayFilterFn,
} from "Components";
import {
  ButtonFiltersContainer,
  FiltersContainer,
  StyledTable,
  TableContainer,
  NationCell,
  TankNameCell,
  ClassCell,
  TierCell,
  tableHeaders,
} from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";
import { Capital, commonStrings } from "Data/localizations";

function PeriodBreakdown({ data, setSelectedTank, setModalOpen }) {
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
        Filter: NumericTierFilter,
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
        Header: Capital(commonStrings.battles),
        accessor: "battles",
        disableFilters: true,
      },
      {
        Header: commonStrings.wn8,
        accessor: "wn8",
        disableFilters: true,
      },
      {
        Cell: ({ value }) => `${value}%`,
        Header: Capital(commonStrings.wr),
        accessor: "winrate",
        disableFilters: true,
      },
      {
        Header: commonStrings.dpg,
        accessor: "dpg",
        disableFilters: true,
      },
      { Header: Capital(commonStrings.frags), accessor: "kpg", disableFilters: true },
      {
        Header: commonStrings.dmgRatio,
        accessor: "dmgRatio",
        disableFilters: true,
      },
      {
        Header: commonStrings.kd,
        accessor: "kd",
        disableFilters: true,
      },
      {
        Header: tableHeaders.survival,
        accessor: "survived",
        disableFilters: true,
      },
      {
        Header: tableHeaders.spots,
        accessor: "spots",
        disableFilters: true,
      },
      {
        Header: "",
        accessor: "isPrem",
        Filter: PremFilter,
        filter: arrayFilterFn,
        hidden: true,
      },
    ],
    []
  );

  columns.forEach((column) => (column.sortDescFirst = true));

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
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
        pageSize: 25,
        sortBy: [
          {
            id: "battles",
            desc: true,
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

  return (
    <>
      <FiltersContainer>
        <Banner
          style={{ marginBottom: "1rem" }}
          color={"linear-gradient(90deg, rgba(72,152,47,1) 0%, rgba(37,199,168,1) 53%, rgba(0,255,245,1) 100%)"}
        >
          NEW FEATURE: CLICK ON ROW TO SEE DETAILED TANK STATS!
        </Banner>

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
              ({ disableFilters, render }, i) => !disableFilters && <span key={i}>{render("Filter")}</span>
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
                    </th>
                  )
                )}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedTank(row.original);
                    setModalOpen(true);
                  }}
                >
                  {row.cells.map((cell) =>
                    cell.column.hidden ? null : (
                      <td
                        {...cell.getCellProps({
                          style: cellStyle(cell.column.isSorted, cell.column.id, cell.value),
                        })}
                      >
                        {cell.render("Cell")}
                      </td>
                    )
                  )}
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </TableContainer>
      <Pagination
        pageSizes={[15, 25, 100, 250, 500]}
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

export default PeriodBreakdown;
