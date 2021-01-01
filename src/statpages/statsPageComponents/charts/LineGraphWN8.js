import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { ThemeContext } from "../../../style/theme.js";

const color = {
    WR: "rgb(58, 124, 199)",
    WN8: "rgb(92, 58, 199)",
    DPG: "rgb(148, 36, 173)",
};

export default function LineGraphWN8(props) {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div style={{ height: "calc(310px)" }}>
            <ResponsiveLine
                theme={{
                    textColor:
                        theme === "dark"
                            ? "rgb(210, 210, 210)"
                            : "rgb(100, 100, 100)",
                    grid: {
                        line: {
                            stroke:
                                theme === "dark"
                                    ? "rgb(100, 100, 100)"
                                    : "rgb(210, 210, 210)",
                            strokeWidth: 1,
                        },
                    },
                    tooltip: {
                        container: {
                            background: theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(255, 255, 255)',
                            color: theme === 'dark' ?  'rgb(255, 255, 255)' : 'rgb(40, 40, 40)',
                        },
                    },
                }}
                data={[props.data]}
                curve="catmullRom"
                margin={{ top: 23, right: 30, bottom: 73, left: 70 }}
                xScale={{ type: "point" }}
                xFormat={function (e) {
                    return e + " Battles";
                }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                yFormat={function (e) {
                    return e + " " + props.type;
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 10,
                    legend: "Battles",
                    legendOffset: 45,
                    legendPosition: "middle",
                    tickRotation: -45,

                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: props.type,
                    legendOffset: -55,
                    legendPosition: "middle",
                    tickValues: 5
                }}
                colors={color[props.type]}
                pointSize={5}
                pointColor={{ theme: "background" }}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
            />
        </div>
    );
}
