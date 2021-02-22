import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function TierDistribution(props) {
    const data = props.data;
    return (
        <div style={{ height: "calc(300px)" }}>
            <ResponsiveBar
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
                data={data}
                keys={["HT", "MT", "TD", "LT", "SPG"]}
                indexBy="Tier"
                margin={{ top: 30, right: 80, bottom: 50, left: 70 }}
                padding={0.3}
                colors={[
                    "rgb(84, 140, 196)",
                    "rgb(68, 103, 219)",
                    "rgb(93, 53, 212)",
                    "rgb(138, 53, 212)",
                    "rgb(212, 38, 186)",
                ]}
                borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Tier",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Battles",
                    legendPosition: "middle",
                    legendOffset: -50,
                    tickValues: 6,
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
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
