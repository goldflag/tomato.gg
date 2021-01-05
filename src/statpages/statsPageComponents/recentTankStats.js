import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import {
    createMuiTheme,
    MuiThemeProvider,
    withStyles,
    rgbToHex,
} from "@material-ui/core/styles";
import WN8color from "../../functions/WN8color";
import WRcolor from "../../functions/WRcolor";
import nationVal from "../../data/nationVal";
import classVal from "../../data/classVal";
import { ThemeContext } from "../../style/theme.js";

const customStyles = (theme) => ({
    wn8row: {
        "& td": { backgroundColor: "blue" },
    },
    GreyLine: {
        "& td": { backgroundColor: theme.palette.grey[100] },
    },
    NameCell: {
        fontWeight: 900,
        backgroundColor: theme.palette.grey[100],
    },
});

export default function RecentTankStats(props) {
    const [finaldata, setFinaldata] = useState("");
    const { theme } = React.useContext(ThemeContext);


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
                        backgroundColor:
                            theme === "dark" ? "rgb(40, 40, 45)" : "white",
                        color:
                            theme === "dark"
                                ? "rgb(230, 230, 230)"
                                : "rgb(20, 20, 20)",
                    },
                },
                MUIDataTableToolbar: {
                    icon: {
                        color:
                            theme === "dark"
                                ? "rgb(230, 230, 230)"
                                : "rgb(100, 100, 100)",
                        "&:hover": {
                            color: "dark"
                                ? "rgb(150, 150, 150)"
                                : "rgb(110, 110, 110)",
                        },
                    },
                },
                MuiTableCell: {
                    head: {
                        backgroundColor:
                            theme === "dark"
                                ? "rgb(60, 60, 65)"
                                : "rgb(220, 220, 223)",
                        padding: "5px 5px 5px 12px",
                        borderBottom:
                            theme === "dark"
                                ? "rgb(60, 60, 65)"
                                : "rgb(220, 220, 223)",
                        color: theme === "dark" ? "white" : "black",
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
                            backgroundColor:
                                theme === "dark" ? "rgb(40, 40, 45)" : "white",
                            color:
                                theme === "dark"
                                    ? "rgb(230, 230, 230)"
                                    : "rgb(20, 20, 20)",
                        },
                    },
                },
            },
        });

    const colStyle = {
        borderBottom:
            theme === "dark"
                ? "1px solid rgb(80, 80, 85)"
                : "1px solid rgb(220, 220, 220)",
        padding: "6px 8px",
        color: theme === "dark" ? "white" : null,
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
                        return (
                            (nationVal[val1] - nationVal[val2]) *
                            (order === "asc" ? 1 : -1)
                        );
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
                        return (
                            (classVal[val1] - classVal[val2]) *
                            (order === "asc" ? 1 : -1)
                        );
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
                            borderBottom:
                                theme === "dark"
                                    ? "1px solid rgb(80, 80, 85)"
                                    : "1px solid rgb(220, 220, 220)",
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
                    backgroundColor:
                        rowIndex % 2 === 0 ? "rgb(242, 243, 247)" : "white",
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
                    <MUIDataTable
                        title={""}
                        data={props.overallStats}
                        columns={columns}
                        options={options}
                    />
                </MuiThemeProvider>
            </>
        );
    }
    return <>{table}</>;
}
