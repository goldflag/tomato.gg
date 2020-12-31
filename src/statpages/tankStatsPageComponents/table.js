import React, { useState, useEffect } from "react";
import clonedeep from "lodash.clonedeep";
import { Link } from "react-router-dom";
import MUIDataTable, { ExpandButton } from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import PercentileGraph from "./percentileGraph";
import CurveGraph from "./curveGraph";
import "../../css/tankstats.css";
import NATankstats from "../../data/NATankstats.json";
import DPGPercentiles from "../../data/DPGPercentiles.json";
import WN8Percentiles from "../../data/WN8Percentiles.json";
import nationVal from "../../data/nationVal";
import classVal from "../../data/classVal";
import WRCurves from "../../data/WRCurves.json";
import WN8Curves from "../../data/WN8Curves.json";
import WN8color from "../../functions/WN8color";
import WRcolor from "../../functions/WRcolor";
import { ThemeContext } from "../../style/theme.js";

function diffColor(diff) {
    if (diff.charAt(0) === "+") {
        diff = diff.substring(1);
    }
    if (diff > 4) return "rgb(0, 184, 0)";
    else if (diff > 3) return "rgb(42, 199, 42)";
    else if (diff > 2) return "rgb(105, 224, 105)";
    else if (diff > 1) return "rgb(163, 240, 163)";
    else if (diff > 0) return "rgb(191, 255, 204)";
    else if (diff > -1) return "rgb(219, 184, 180)";
    else if (diff > -2) return "rgb(199, 127, 119)";
    else if (diff > -3) return "rgb(217, 80, 65)";
    else if (diff > -4) return "rgb(204, 55, 39)";
    else return "rgb(181, 21, 4)";
}

export default function Table(props) {
    const { theme } = React.useContext(ThemeContext);
    const [serverStats, setServerStats] = useState("");
    useEffect(() => {
        const data = clonedeep(NATankstats);
        data.map((row) => {
            // row[0] = <img src={`${process.env.PUBLIC_URL}/tankIcons/${row[0]}.png`} alt={row[0]}/>;
            // row[0] = <img src={tankImports[IDtoIndex[row[0]]]} alt={row[0]}/>;
            row[0] = (
                <img
                    src={require(`../../assets/flagIcons/${row[0]}.svg`)}
                    style={{
                        display: "block",
                        maxheight: "20px",
                        maxWidth: "40px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    alt={row[0]}
                />
            );
            row[1] = (
                <img
                    src={require(`../../assets/classIcons/${row[1]}.png`)}
                    style={{
                        display: "block",
                        maxheight: "20px",
                        maxWidth: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                    alt={row[1]}
                />
            );
            row[3] = (
                <img
                    src={require(`../../assets/tankIcons/${row[3]}.png`)}
                    alt={row[0]}
                />
            );
        });
        setServerStats(data);
    }, []);

    const getMuiTheme = () =>
        createMuiTheme({
            overrides: {
                MUIDataTable: {
                    root: {
                        backgroundColor: "rgb(220, 220, 230)",
                    },
                    paper: {
                        boxShadow: "none",
                    },
                },
                MuiToolbar: {
                    root: {
                        // backgroundColor: 'rgb(220, 220, 230)',
                    },
                },
                MuiTableCell: {
                    head: {
                        backgroundColor: "rgb(220, 220, 230)",
                        padding: "8px 5px",
                    },
                    root: {
                        padding: "3px 5px",
                    },
                },
                MUIDataTableSelectCell: {
                    headerCell: {
                        backgroundColor: "rgb(220, 220, 230)",
                    },
                },
                MuiTableFooter: {
                    root: {
                        "& .MuiToolbar-root": {
                            backgroundColor: "white",
                        },
                    },
                },
            },
        });
    const columns = [
        {
            name: "Nation",
            options: {
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
            name: "Type",
            options: {
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
        { name: "Tier", options: { filter: true } },
        { name: "", options: { filter: false } },
        { name: "Vehicle", options: { filter: false } },
        { name: "Owned", options: { filter: false } },
        { name: "Avg Battles", options: { filter: false } },
        {
            name: "Tank WR",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WRcolor(value.slice(0, -1)),
                        },
                    };
                },
            },
        },
        {
            name: "Player WR",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WRcolor(value.slice(0, -1)),
                        },
                    };
                },
            },
        },
        {
            name: "WR Diff.",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            backgroundColor: diffColor(value.slice(0, -1)),
                        },
                    };
                },
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data.slice(0, -1);
                        let val2 = obj2.data.slice(0, -1);
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "Tank WN8",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WN8color(value),
                        },
                    };
                },
            },
        },
        {
            name: "Player WN8",
            options: {
                filter: false,
                setCellProps: (value) => {
                    return {
                        style: {
                            color: "white",
                            backgroundColor: WN8color(value),
                        },
                    };
                },
            },
        },
        { name: "DPG", options: { filter: false } },
        { name: "KPG", options: { filter: false } },
        { name: "DMG Ratio", options: { filter: false } },
        { name: "K/D", options: { filter: false } },
        { name: "XP", options: { filter: false } },
        { name: "Hits", options: { filter: false } },
        { name: "Spots", options: { filter: false } },
        { name: "Armor \n Eff", options: { filter: false } },
        {
            name: "3MOE%",
            options: {
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data.slice(0, -1);
                        let val2 = obj2.data.slice(0, -1);
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
        {
            name: "ACE%",
            options: {
                filter: false,
                sortCompare: (order) => {
                    return (obj1, obj2) => {
                        let val1 = obj1.data.slice(0, -1);
                        let val2 = obj2.data.slice(0, -1);
                        return (val1 - val2) * (order === "asc" ? 1 : -1);
                    };
                },
            },
        },
    ];

    const options = {
        filter: true,
        filterType: "dropdown",
        responsive: "standard",
        expandableRows: true,
        expandableRowsHeader: false,
        expandableRowsOnClick: true,
        selectableRows: "none",
        fixedHeader: false,
        rowsPerPage: 50,
        rowsPerPageOptions: [15, 25, 50, 100, 200, 500],
        sortOrder: {
            name: "Tank WN8",
            direction: "desc",
        },
        print: false,
        viewColumns: false,
        setTableProps: () => {
            return {};
        },
        renderExpandableRow: (rowData, rowMeta) => {
            const colSpan = rowData.length + 1;
            let curves = <></>;
            if (rowData[2] > 4) {
                curves = (
                    <>
                        <div>
                            <div
                                style={{
                                    fontSize: "1rem",
                                    padding: "20px 20px 0px 20px",
                                }}
                            >
                                Winrate Curve
                            </div>
                            <CurveGraph
                                data={WRCurves[rowData[4]]}
                                type="Winrate"
                                smallType="WR"
                                color="rgb(230, 57, 103)"
                            />
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: "1rem",
                                    padding: "20px 20px 0px 20px",
                                }}
                            >
                                WN8 Curve
                            </div>
                            <CurveGraph
                                data={WN8Curves[rowData[4]]}
                                type="WN8"
                                smallType="WN8"
                                color="rgb(212, 38, 186)"
                            />
                        </div>
                    </>
                );
            }
            return (
                <TableRow>
                    <TableCell colSpan={colSpan}>
                        <div className={theme === "dark" ? "rowdark" : "row"}>
                            <div
                                style={{
                                    fontSize: "0.86rem",
                                    color:
                                        theme === "dark"
                                            ? "rgb(150, 150, 150)"
                                            : "rgb(100,100,100)",
                                    padding: "10px 20px 0px 20px",
                                }}
                            >
                                Don't get what these graphs mean?{" "}
                                <Link to="/stats-reference">
                                    Visit Stats Reference.
                                </Link>
                            </div>
                            <div className="grid">
                                <div>
                                    <div
                                        style={{
                                            fontSize: "1rem",
                                            padding: "20px 20px 0px 20px",
                                        }}
                                    >
                                        DPG Percentiles
                                    </div>
                                    <PercentileGraph
                                        data={DPGPercentiles[rowData[4]]}
                                        type="Average Damage"
                                        smallType="DPG"
                                        color="rgb(84, 140, 196)"
                                    />
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: "1rem",
                                            padding: "20px 20px 0px 20px",
                                        }}
                                    >
                                        WN8 Percentiles
                                    </div>
                                    <PercentileGraph
                                        data={WN8Percentiles[rowData[4]]}
                                        type="WN8"
                                        smallType="WN8"
                                        color="rgb(212, 38, 186)"
                                    />
                                </div>
                                {curves}
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
            );
        },
    };

    // const theme = createMuiTheme({
    //   overrides: {
    //     MUIDataTableSelectCell: {
    //       expandDisabled: {
    //         // Soft hide the button.
    //         visibility: 'hidden',
    //       },
    //     },
    //   },
    // });

    const components = {
        ExpandButton: function (props) {
            if (props.dataIndex === 3 || props.dataIndex === 4)
                return <div style={{ width: "24px" }} />;
            return <ExpandButton {...props} />;
        },
    };

    let statTable = <></>;
    if (serverStats) {
        statTable = (
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"NA Server Tank Stats"}
                    data={serverStats}
                    columns={columns}
                    options={options}
                    components={components}
                />
            </MuiThemeProvider>
        );
    }
    return <>{statTable}</>;
}
