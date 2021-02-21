import React, { useContext } from "react";
import { ThemeContext } from "../../../context";

export default function MOETable(props) {
    const { theme } = useContext(ThemeContext);

    const demo = {
        padding: 5,
        fontSize: "1rem",
        width: "100%",
        height: "200px",
        color: theme === "dark" ? "rgb(240, 240, 240)" : "rgb(40, 40, 40)",
    };

    const tt = {
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgba(70, 70, 100, 0.5)" : "rgb(220, 220, 225)",
    };

    const td = {
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgba(50, 50, 80, 0.5)" : "rgb(242, 243, 247)",
    };

    const tdc = {
        maxheight: "20px",
        padding: "9px",
        background: theme === "dark" ? "rgba(40, 40, 70, 0.5)" : "rgb(252, 252, 254)",
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
        <div>
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
                            <span style={{ float: "right" }}>
                                {rows[0].MOE}{" "}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>
                            2 Marks{" "}
                            <span style={{ float: "right" }}>
                                {rows[1].MOE}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdc}>
                            1 Mark{" "}
                            <span style={{ float: "right" }}>
                                {rows[2].MOE}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>
                            None{" "}
                            <span style={{ float: "right" }}>
                                {rows[3].MOE}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ paddingTop: "0.5rem" }}>
                <a
                    style={{ fontSize: "0.8rem" }}
                    target="blank"
                    href="https://herhor.net/wot/moe/"
                >
                    Generate a cool image of your marks
                </a>
            </div>
        </div>
    );
}
