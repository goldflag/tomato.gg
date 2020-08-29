import React from "react";
import { ResponsiveLine } from '@nivo/line'
export default function CurveGraph(props) {
    
    let ticks = [ 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
                  54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, ];
    let referenceData = {
        "id": 'Overall WR',
        "data": [
                { "x": 42, "y": 42 }, { "x": 43, "y": 43 }, { "x": 44, "y": 44 }, { "x": 45, "y": 45 }, { "x": 46, "y": 46 }, { "x": 47, "y": 47 }, { "x": 48, "y": 48 }, { "x": 49, "y": 49 }, { "x": 50, "y": 50 }, { "x": 51, "y": 51 }, 
                { "x": 52, "y": 52 }, { "x": 53, "y": 53 }, { "x": 54, "y": 54 }, { "x": 55, "y": 55 }, { "x": 56, "y": 56 }, { "x": 57, "y": 57 }, { "x": 58, "y": 58 }, { "x": 59, "y": 59 }, { "x": 60, "y": 60 }, { "x": 61, "y": 61 }, 
                { "x": 62, "y": 62 }, { "x": 63, "y": 63 }, { "x": 64, "y": 64 }, { "x": 65, "y": 65 }        
        ]
    };
    if (props.smallType === 'WN8') {
        ticks = [ 200, 400, 600, 800, 1000,
            1200, 1400, 1600, 1800, 2000,
            2200, 2400, 2600, 2800, 3000,  
            3200, 3400, ];
        referenceData = {
            "id": 'Overall WN8',
            "data": [
                    { "x": 200, "y": 200 }, { "x": 300, "y": 300 }, { "x": 400, "y": 400 }, { "x": 500, "y": 500 }, { "x": 600, "y": 600 }, { "x": 700, "y": 700 }, { "x": 800, "y": 800 }, { "x": 900, "y": 900 }, 
                    { "x": 1000, "y": 1000 }, { "x": 1100, "y": 1100 }, { "x": 1200, "y": 1200 }, { "x": 1300, "y": 1300 }, { "x": 1400, "y": 1400 }, { "x": 1500, "y": 1500 }, { "x": 1600, "y": 1600 }, { "x": 1700, "y": 1700 }, 
                    { "x": 1800, "y": 1800 }, { "x": 1900, "y": 1900 }, { "x": 2000, "y": 2000 }, { "x": 2100, "y": 2100 }, { "x": 2200, "y": 2200 }, { "x": 2300, "y": 2300 }, { "x": 2400, "y": 2400 }, { "x": 2500, "y": 2500 },
                    { "x": 2600, "y": 2600 }, { "x": 2700, "y": 2700 }, { "x": 2800, "y": 2800 }, { "x": 2900, "y": 2900 }, { "x": 3000, "y": 3000 }, { "x": 3100, "y": 3100 }, { "x": 3200, "y": 3200 }, { "x": 3300, "y": 3300 }, 
                    { "x": 3400, "y": 3400 }, { "x": 3500, "y": 3500 }        
            ]
        };
    }
    const data = [
        referenceData,
        {
            "id": 'Tank ' + props.smallType,
            "data": props.data
        },
    ];
    let xformat = '% Overall'; 
    let yformat = '% On Tank'; 

    if (props.smallType === 'WN8') {
        xformat = ' WN8 Overall'; 
        yformat = ' WN8 On Tank'; 
    }
    return (
        <div style={{ height: 'calc(310px)'}}>
            <ResponsiveLine
                data={data}
                margin={{ top: 20, right: 100, bottom: 80, left: 65 }}
                xScale={{ type: 'point' }}
                xFormat={function(e){return e+ xformat}}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                yFormat={function(e){return e+ yformat}}
                curve="cardinal"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickValues: ticks,
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.0f',
                    legend: props.smallType,
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                // enableGridX={false}
                axisLeft={{
                    // tickValues: [ 36, 38, 40, 42, 44, 46, 48, 50, 52,
                    //     54, 56, 58, 60, 62, 64, 66, 68, 70 ],
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: props.type,
                    legendOffset: -50,
                    legendPosition: 'middle'
                }}
                colors={[              
                    'rgb(110, 100, 120)',
                    props.color,
                ]}
                pointSize={5}
                // pointColor={{theme: 'background'}}

                pointBorderWidth={3}
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
