import React from "react";
import tankNames from "Data/tankNames.json";

export default function Records(props) {

    console.log(props);
    const demo = {
        padding: 5,
        fontSize: "1rem",
        width: "100%",
        height: "300px",
        color: "rgb(240,240,240)",
    };

    const td = {
        maxheight: "50px",
        padding: "10px",
    };

    const tdc = {
        maxheight: "50px",
        padding: "10px",
        background: "rgba(50, 50, 80, 0.3)",
    };

    let res = <></>;
    if (
        props.data.max_damage_tank_id in tankNames &&
        props.data.max_frags_tank_id in tankNames &&
        props.data.max_xp_tank_id in tankNames
    ) {
        res = (
            <table style={demo}>
                <tbody>
                    <tr>
                        <td style={tdc}>
                            Max Damage{" "}
                            <span style={{ float: "right" }}>
                                {props.data.max_damage}
                                <span style={{ color: "rgb(120,120,120)" }}>
                                    {" "}
                                    in {tankNames[props.data.max_damage_tank_id].short_name}
                                </span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>
                            Max Kills{" "}
                            <span style={{ float: "right" }}>
                                {props.data.max_frags}
                                <span style={{ color: "rgb(120,120,120)" }}>
                                    {" "}
                                    in {tankNames[props.data.max_frags_tank_id].short_name}
                                </span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdc}>
                            Max XP{" "}
                            <span style={{ float: "right" }}>
                                {props.data.max_xp}
                                <span style={{ color: "rgb(120,120,120)" }}>
                                    {" "}
                                    in {tankNames[props.data.max_xp_tank_id].short_name}{" "}
                                </span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>
                            Avg Assist <span style={{ float: "right" }}>{props.data.avg_damage_assisted} </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdc}>
                            Avg Spot Assist{" "}
                            <span style={{ float: "right" }}>{props.data.avg_damage_assisted_radio} </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={td}>
                            Avg Tracking Assist{" "}
                            <span style={{ float: "right" }}>{props.data.avg_damage_assisted_track}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style={tdc}>
                            Armor-use Efficiency <span style={{ float: "right" }}>{props.data.tanking_factor}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }

    return <>{res}</>;
}
