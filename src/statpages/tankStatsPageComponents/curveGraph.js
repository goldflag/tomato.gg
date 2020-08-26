import React from "react";
import { ResponsiveLine } from '@nivo/line'
export default function CurveGraph(props) {
    
    const data = [
        {
            "id": props.smallType,
            "data": props.data
          }
        ];

    return (
        <div style={{ height: 'calc(310px)'}}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 110, bottom: 40, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    // tickValues: [
                    //     0,
                    //     20,
                    //     40,
                    //     60,
                    //     80,
                    //     100
                    // ],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.2f',
                    legend: 'Percentile',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                // enableGridX={false}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: props.type,
                    legendOffset: -50,
                    legendPosition: 'middle'
                }}
                colors={[                
                    props.color
                ]}
                pointSize={1}
                pointColor={props.color}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}
