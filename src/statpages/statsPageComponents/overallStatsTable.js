import React from "react";
import Paper from "@material-ui/core/Paper";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import WN8color from "../../functions/WN8color";
import { ThemeContext } from "../../context";

export default function OverallStatsTable(props) {
    const { theme } = React.useContext(ThemeContext);
    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTable: {
                    root: {
                        backgroundColor: "blue",
                    },
                    paper: {
                        boxShadow: "none",
                    },
                    responsiveStacked: {
                        maxHeight: "none",
                        overflowX: "auto",
                    },
                },
                MuiToolbar: {
                    root: {
                        backgroundColor:
                            theme === "dark"
                                ? "rgb(40, 40, 45)"
                                : "rgb(220, 220, 223)",
                        color:
                            theme === "dark"
                                ? "rgb(230, 230, 230)"
                                : "rgb(20, 20, 20)",
                    },
                },
                MuiTableCell: {
                    head: {
                        backgroundColor: "rgb(76, 90, 166)",
                        color: "white",
                        borderBottom: "none",
                    },
                    root: {
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 45)" : "white",
                    },
                },
                MUIDataTableSelectCell: {
                    headerCell: {
                        backgroundColor: "white",
                    },
                },
                MuiTableFooter: {
                    root: {
                        "& .MuiToolbar-root": {
                            backgroundColor:
                                theme === "dark"
                                    ? "rgb(40, 40, 45)"
                                    : "rgb(220, 220, 223)",
                            color:
                                theme === "dark"
                                    ? "rgb(230, 230, 230)"
                                    : "rgb(20, 20, 20)",
                        },
                    },
                },
            },
        });

    function tableStyle(rowIndex, cellValue) {
        return {
            borderBottom:
                theme === "dark"
                    ? "1px solid rgb(80, 80, 85)"
                    : "1px solid rgb(220, 220, 220)",
            borderLeft:
                theme === "dark"
                    ? "1px solid rgb(80, 80, 85)"
                    : "1px solid rgb(220, 220, 220)",
            padding: "2px 8px",
            color: cellValue === 2 || theme === "dark" ? "white" : null,
            backgroundColor: cellValue === 2 ? WN8color(rowIndex) : null,
            fontFamily: "Roboto Mono"
        };
    }

    const columns = [
        {
            label: " ",
            name: "name",
            options: {
                filter: false,
                setCellProps: (row, value) => {
                    return {
                        style: {
                            fontFamily: "Roboto Mono",
                            backgroundColor:
                                theme === "dark"
                                    ? "rgb(45, 45, 50)"
                                    : "rgb(246, 246, 252)",
                            color: theme === "dark" ? "white" : "black",
                            borderRight:
                                theme === "dark"
                                    ? "1px solid rgb(80, 80, 85)"
                                    : "1px solid rgb(220, 220, 220)",
                            borderTop:
                                theme === "dark"
                                    ? "1px solid rgb(80, 80, 85)"
                                    : "1px solid rgb(220, 220, 220)",
                            borderBottom:
                                theme === "dark"
                                    ? "1px solid rgb(80, 80, 85)"
                                    : "1px solid rgb(220, 220, 220)",
                        },
                    };
                },
            },
        },
        {
            name: "Overall",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "24 Hours",
            options: {
                filter: true,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "3 Days",
            options: {
                filter: true,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "7 Days",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "30 Days",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "60 Days",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "100 Games",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
        {
            name: "1000 Games",
            options: {
                filter: false,
                setCellProps: (rowIndex, cellValue) => {
                    return {
                        style: tableStyle(rowIndex, cellValue),
                    };
                },
            },
        },
    ];

    const options = {
        fixedHeader: false,
        searchable: false,
        fixedSelectColumn: false,
        pagination: false,
        rowHover: true,
        selectableRows: "none",
        print: false,
        download: false,
        filter: false,
        search: false,
        sort: false,
        viewColumns: false,
        responsive: "standard",

        setTableProps: () => {
            return {
                //   padding: this.state.denseTable ? 'none' : 'default',
                //   size: this.state.denseTable ? 'small' : 'medium',
                size: "small",
            };
        },
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
                        <Paper
                square
                elevation={2}
                style={{
                    margin: "1rem 0 0 0",
                    padding: "1rem 1rem 1rem 1rem",
                    backgroundColor:
                        theme === "dark" ? "rgb(60, 60, 65)" : "white",
                }}
            >
                <span
                    style={{
                        fontSize: "1.3em",
                        color:
                            theme === "dark"
                                ? "rgb(200, 200, 200)"
                                : "rgb(100,100,100)",
                        fontWeight: "500",
                    }}
                >
                    Seeing incomplete recent stats?
                </span>
                <br />
                <span
                    style={{
                        fontSize: "0.8em",
                        color:
                            theme === "dark"
                                ? "rgb(200, 200, 200)"
                                : "rgb(100,100,100)",
                    }}
                >
                    Wargaming does not provide recent stats in their API,
                    meaning that stats sites must generate and store recent
                    stats on their own servers. This website is new so we do not
                    have deep records yet. In the future, every active account
                    will have complete recent stats.
                </span>
                <br />
            </Paper>
            <Paper>
                <MUIDataTable
                    title={""}
                    data={props.data}
                    columns={columns}
                    options={options}
                />
            </Paper>
        </MuiThemeProvider>
    );
}
