import React from "react";
import { ThemeContext } from "../../../style/theme.js";

export default function MOETable(props) {
    const { theme } = React.useContext(ThemeContext);

    const demo = {
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
        borderColor: "rgb(220,220,220)",
        borderCollapse: "collapse",
        padding: 5,
        fontSize: "1rem",
        width: "100%",
        height: "200px",
        color: theme === "dark" ? "rgb(240, 240, 240)" : "rgb(40, 40, 40)",
    };

    const tt = {
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
        borderColor:
            theme === "dark" ? "rgb(100, 100, 100)" : "rgb(220,220,220)",
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgb(70, 70, 70)" : "rgb(220, 220, 225)",
    };

    const td = {
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
        borderColor:
            theme === "dark" ? "rgb(100, 100, 100)" : "rgb(220,220,220)",
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgb(50, 50, 50)" : "rgb(242, 243, 247)",
    };

    const tdc = {
        borderWidth: "1px 0px 1px 0px",
        borderStyle: "solid",
        borderColor:
            theme === "dark" ? "rgb(100, 100, 100)" : "rgb(220,220,220)",
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgb(40, 40, 40)" : "rgb(252, 252, 254)",
    };

    const rows = [
        { name: "3 Marks", MOE: 0 },
        { name: "2 Marks", MOE: 0 },
        { name: "1 Marks", MOE: 0 },
        { name: "0 Marks", MOE: 0 },
    ];

    for (let i = 0; i < 6; ++i) {
        rows[3].MOE += props.data[i][0];
        rows[2].MOE += props.data[i][1];
        rows[1].MOE += props.data[i][2];
        rows[0].MOE += props.data[i][3];
    }

    const numTanks = rows[0].MOE + rows[1].MOE + rows[2].MOE + rows[3].MOE;

    return (
        <table style={demo}>
            <tbody>
                <tr>
                    <td style={tt}>
                        Vehicles{" "}
                        <span style={{ float: "right" }}>{numTanks} </span>
                    </td>
                </tr>
                <tr>
                    <td style={tdc}>
                        3 Marks{" "}
                        <span style={{ float: "right" }}>{rows[0].MOE} </span>
                    </td>
                </tr>
                <tr>
                    <td style={td}>
                        2 Marks{" "}
                        <span style={{ float: "right" }}>{rows[1].MOE}</span>
                    </td>
                </tr>
                <tr>
                    <td style={tdc}>
                        1 Mark{" "}
                        <span style={{ float: "right" }}>{rows[2].MOE}</span>
                    </td>
                </tr>
                <tr>
                    <td style={td}>
                        None{" "}
                        <span style={{ float: "right" }}>{rows[3].MOE}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
