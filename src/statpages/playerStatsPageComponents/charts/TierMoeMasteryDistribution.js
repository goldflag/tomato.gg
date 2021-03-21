import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function TierMasteryDistribution({data, keys, colors}) {
    return (
        <div style={{ height: "calc(292px)" }}>
            <ResponsiveBar
                theme={{
                    fontFamily: "Roboto Mono",
                    textColor: "rgb(210, 210, 210)",
                    grid: {
                        line: {
                            stroke: "rgba(200, 200, 200, 0.5)",
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
                data={data}
                keys={keys}
                indexBy="Tier"
                margin={{ top: 30, right: 100, bottom: 50, left: 50 }}
                padding={0.3}
                colors={colors}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Tier",
                    legendPosition: "middle",
                    legendOffset: 38,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Tanks",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        itemTextColor: "rgb(210, 210, 210)",
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
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}
