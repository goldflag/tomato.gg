import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

export default function Scatterplot(props) {
    return (
        <div style={{ height: "calc(500px)" }}>
            <ResponsiveScatterPlot
                data={props.data}
                margin={{ top: 40, right: 120, bottom: 70, left: 70 }}
                xScale={{ type: "linear", min: 40, max: "auto" }}
                xFormat={function (e) {
                    return e.toFixed(2) + "%";
                }}
                yScale={{ type: "linear", min: 0, max: "auto" }}
                yFormat={function (e) {
                    return e + " WN8";
                }}
                blendMode="multiply"
                axisTop={null}
                axisRight={null}
                animate={false}
                useMesh={false}
                colors={props.color}
                axisBottom={{
                    // tickValues: [ 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70 ],
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Winrate",
                    legendPosition: "middle",
                    legendOffset: 46,
                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "WN8",
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 130,
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 12,
                        itemsSpacing: 5,
                        itemDirection: "left-to-right",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
