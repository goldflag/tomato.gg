import React from "react";
import { useTable, usePagination, useSortBy, useFilters, useExpanded } from "react-table";
import { StyledTable, TableContainer } from "Components/tableComponents";
import cellStyle from "Functions/cellStyle";
import { Pagination } from "Components";

export const TableTemplate = ({ data, cols, initialSortCol, numRows = 10, pageSizeOptions = [10, 20], pointer = false }) => {
  const columns = React.useMemo(() => {
      return cols;
  }, [cols]);

  columns.forEach((column) => column.sortDescFirst = true);

  const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page,
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
  } = useTable(
      {
          columns,
          data,
          initialState: {
              pageIndex: 0,
              pageSize: numRows,
              sortBy: [
                  {
                      id: initialSortCol,
                      desc: true,
                  },
              ],
          },
      },
      useFilters,
      useSortBy,
      useExpanded,
      usePagination
  );

  return (
      <>
          <TableContainer style={{overflow: "None"}}>
              <StyledTable pointer={pointer} {...getTableProps()}>
                  <thead>
                      {headerGroups.map((headerGroup) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) =>
                                  column.hidden ? null : (
                                      <th
                                          {...column.getHeaderProps(column.getSortByToggleProps())}
                                          {...column.getHeaderProps({
                                              style: {
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
                      {page.map((row, i) => {
                          prepareRow(row);
                          return (
                              <tr {...row.getRowProps()}>
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
              pageSizes={pageSizeOptions}
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
