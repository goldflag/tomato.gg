import React, { useContext } from "react";

export default function MOETable(props) {
    const demo = {
        padding: 5,
        fontSize: "1rem",
        width: "100%",
        height: "200px",
        color: "rgb(240, 240, 240)",
    };

    const tt = {
        maxheight: "20px",
        padding: "9px",
        background: "rgba(70, 70, 100, 0.5)",
    };

    const td = {
        maxheight: "20px",
        padding: "9px",
        background: "rgba(50, 50, 80, 0.5)",
    };

    const tdc = {
        maxheight: "20px",
        padding: "9px",
        background: "rgba(40, 40, 70, 0.5)",
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
            <div style={{ paddingTop: "0rem" }}>
                <a
                    style={{ fontSize: "0.8rem" }}
                    target="blank"
                    href="https://herhor.net/wot/moe/"
                >
                    Generate Mark Image
                </a>
            </div>
        </div>
    );
}
