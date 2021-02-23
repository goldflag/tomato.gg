import React from "react";
import { ResponsiveLine } from "@nivo/line";

const color = {
    WR: "rgb(58, 124, 199)",
    WN8: "rgb(92, 58, 199)",
    DPG: "rgb(148, 36, 173)",
};

export default function LineGraphWN8({ data, type }) {
    return (
        <div style={{ height: "calc(310px)" }}>
            <ResponsiveLine
                theme={{
                    fontFamily: "Roboto Mono",
                    textColor: "rgb(210, 210, 210)",
                    grid: {
                        line: {
                            stroke: "rgb(100, 100, 100)",
                            strokeWidth: 1,
                        },
                    },
                    tooltip: {
                        container: {
                            backdropFilter: "blur( 7px )",
                            background: "rgb(40, 40, 70, 0.8)",
                            color: "rgb(255, 255, 255)",
                        },
                    },
                }}
                data={[data]}
                curve="catmullRom"
                margin={{ top: 23, right: 30, bottom: 73, left: 70 }}
                xScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                }}
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
                    return e + " " + type;
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
                    tickValues: 15,
                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: type,
                    legendOffset: -55,
                    legendPosition: "middle",
                    tickValues: 6,
                }}
                colors={color[type]}
                enableGridX={false}
                pointSize={0}
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
