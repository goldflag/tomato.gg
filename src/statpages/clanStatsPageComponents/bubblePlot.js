import React from "react";
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

export default function BubblePlot({ mode, data }) {
    return (
        <div style={{ 
            height: "500px", 
            backgroundColor: "rgba(40, 40, 70, 0.4)",
            backdropFilter: "blur( 7px )",
            color: "rgb(30, 30, 30)",
        }}>
            <ResponsiveScatterPlot
            data={data}
                theme={{
                    fontFamily: "Roboto Mono",
                    textColor: "rgb(255, 255, 255)",
                    tooltip: {
                        container: {
                            backdropFilter: "blur( 7px )",
                            background: "rgb(40, 40, 70, 0.8)",
                            color: "rgb(255, 255, 255)",
                        },
                    },
                }}
                margin={{ top: 30, right: 140, bottom: 70, left: 90 }}
                xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
                blendMode="multiply"
                nodeSize={node => {
                    console.log(node);
                    return Math.sqrt(node.battles/Math.PI)*(mode === 0 ? 0.3 : 2);
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'weight',
                    legendPosition: 'middle',
                    legendOffset: 46
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'size',
                    legendPosition: 'middle',
                    legendOffset: -60
                }}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 130,
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 12,
                        itemsSpacing: 5,
                        itemDirection: 'left-to-right',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}
