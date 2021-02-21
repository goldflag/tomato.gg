import React from "react";
import { ThemeContext } from "../../../context";

export default function MasteryTable(props) {
    const { theme } = React.useContext(ThemeContext);

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
        { name: "Ace", Mastery: 0 },
        { name: "1st Class", Mastery: 0 },
        { name: "2nd Class", Mastery: 0 },
        { name: "3rd Class", Mastery: 0 },
        { name: "None", Mastery: 0 },
    ];

    for (let i = 0; i < 10; ++i) {
        rows[4].Mastery += props.data[i]["None"];
        rows[3].Mastery += props.data[i]["3rd"];
        rows[2].Mastery += props.data[i]["2nd"];
        rows[1].Mastery += props.data[i]["1st"];
        rows[0].Mastery += props.data[i]["Ace"];
    }

    const numTanks =
        rows[0].Mastery +
        rows[1].Mastery +
        rows[2].Mastery +
        rows[3].Mastery +
        rows[4].Mastery;

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
                        Ace{" "}
                        <span style={{ float: "right" }}>
                            {rows[0].Mastery}{" "}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style={td}>
                        1st Class{" "}
                        <span style={{ float: "right" }}>
                            {rows[1].Mastery}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style={tdc}>
                        2nd Class{" "}
                        <span style={{ float: "right" }}>
                            {rows[2].Mastery}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style={td}>
                        3rd Class{" "}
                        <span style={{ float: "right" }}>
                            {rows[3].Mastery}
                        </span>
                    </td>
                </tr>
                <tr>
                    <td style={td}>
                        None{" "}
                        <span style={{ float: "right" }}>
                            {rows[4].Mastery}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
