// NPM
import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

// LOCAL
import { WN8color, WRcolor } from "Functions/colors";
import nationVal from "Data/nationVal";
import classVal from "Data/classVal";

export default function RecentTankStats(props) {
    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTable: {
                    root: {
                        backgroundColor: "#AAF",
                        display: "none",
                    },
                    paper: {
                        boxShadow: "none",
                    },
                },
                MuiToolbar: {
                    root: {
                        backgroundColor: "rgb(40, 40, 45)",
                        color: "rgb(230, 230, 230)",
                    },
                },
                MUIDataTableToolbar: {
                    icon: {
                        color: "rgb(230, 230, 230)",
                        "&:hover": {
                            color: "dark" ? "rgb(150, 150, 150)" : "rgb(110, 110, 110)",
                        },
                    },
                },
                MuiTableCell: {
                    head: {
                        backgroundColor: "rgb(60, 60, 65)",
                        padding: "5px 5px 5px 12px",
                        borderBottom: "rgb(60, 60, 65)",
                        color: "white",
                    },
                    root: {
                        padding: "3px 10px 3px 12px",
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
                            backgroundColor: "rgb(40, 40, 45)",
                            color: "rgb(230, 230, 230)",
                        },
                    },
                },
            },
        });

    const colStyle = {
        borderBottom: "1px solid rgb(80, 80, 85)",
        padding: "6px 8px",
        color: "white",
    };

    const columns = [
        {
            name: "Icon",
            label: " ",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "Vehicle",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "Nation",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data.props.alt;
                        let val2 = obj2.data.props.alt;
                        return (nationVal[val1] - nationVal[val2]) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "Tier",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: true,
            },
        },
        {
            name: "Class",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data.props.alt;
                        let val2 = obj2.data.props.alt;
                        return (classVal[val1] - classVal[val2]) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "Battles",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "Winrate",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WRcolor(value.slice(0, -1)),
                            borderBottom: "1px solid rgb(80, 80, 85)",
                        },
                    };
                },
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = parseInt(obj1.data.slice(0, -1), 10);
                        let val2 = parseInt(obj2.data.slice(0, -1), 10);
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "WN8",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WN8color(value),
                            borderBottom: "1px solid rgb(80, 80, 85)",
                        },
                    };
                },
            },
        },
        {
            name: "DPG",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "WN8 %tile",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data;
                        let val2 = obj2.data;
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "DPG %tile",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data;
                        let val2 = obj2.data;
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "KPG",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "DMG Ratio",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "K/D",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
        {
            name: "Spots",
            options: {
                setCellProps: (props) => {
                    return { style: colStyle };
                },
                filter: false,
            },
        },
    ];

    const options = {
        sortDescFirst: true,
        filter: true,
        filterType: "dropdown",
        fixedHeader: false,
        fixedSelectColumn: false,
        rowHover: true,
        selectableRows: "none",
        rowsPerPage: 15,
        rowsPerPageOptions: [10, 15, 25, 50, 100, 250, 500],
        sortOrder: {
            name: "Battles",
            direction: "desc",
        },
        print: false,
        viewColumns: false,
        responsive: "standard",
        setRowProps: (row, dataIndex, rowIndex) => {
            return {
                style: {
                    backgroundColor: rowIndex % 2 === 0 ? "rgb(242, 243, 247)" : "white",
                },
            };
        },
        setTableProps: () => {
            return {};
        },
    };

    let table = <></>;
    if (true) {
        table = (
            <>
                <MuiThemeProvider theme={getMuiTheme()}>
                    <MUIDataTable title={""} data={props.overallStats} columns={columns} options={options} />
                </MuiThemeProvider>
            </>
        );
    }
    return <>{table}</>;
}
