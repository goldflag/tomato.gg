import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function PercentileGraph(props) {
    const data = [
        {
            id: props.smallType,
            data: props.data,
        },
    ];

    return (
        <div style={{ height: "calc(310px)" }}>
            <ResponsiveLine
                theme={{
                    textColor: "rgb(210, 210, 210)",
                    grid: {
                        line: {
                            stroke: "rgb(100, 100, 100)",
                            strokeWidth: 1,
                        },
                    },
                }}
                data={data}
                margin={{ top: 20, right: 90, bottom: 80, left: 60 }}
                xScale={{ type: "point" }}
                xFormat={function (e) {
                    return e + " Percentile";
                }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                yFormat={function (e) {
                    return e + " " + props.smallType;
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickValues: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: ".0f",
                    legend: "Percentile",
                    legendOffset: 36,
                    legendPosition: "middle",
                }}
                enableGridX={false}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: props.type,
                    legendOffset: -50,
                    legendPosition: "middle",
                }}
                colors={[props.color]}
                pointSize={1}
                pointColor={props.color}
                pointBorderWidth={2}
                pointBorderColor={{ from: "serieColor" }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={false}
                useMesh={true}
                legends={[
                    {
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: "left-to-right",
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: "circle",
                        symbolBorderColor: "rgba(0, 0, 0, .5)",
                        itemTextColor: "rgb(210, 210, 210)",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemBackground: "rgba(0, 0, 0, .03)",
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
