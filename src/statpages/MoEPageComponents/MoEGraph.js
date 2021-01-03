import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { ThemeContext } from '../../style/theme.js';

export default function MoEGraph(props) {
    const {theme} = React.useContext(ThemeContext);
    return( <div style={{ height: 'calc(450px)'}}>
        <ResponsiveLine
            theme={{ 
                textColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100, 100, 100)',  
                grid: {
                    line: {
                        stroke: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(210, 210, 210)',
                        strokeWidth: 1
                    }
                },
                tooltip: {
                    container: {
                        background: theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(255, 255, 255)',
                    },
                },
            }}
            data={props.data}
            margin={{ top: 50, right: 90, bottom: 90, left: 80 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -45,
                legend: 'Date',
                legendOffset: 70,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Combined Damage',
                legendOffset: -50,
                legendPosition: 'middle',
                tickValues: 6
            }}
            pointSize={10}
            colors={[                
                "rgb(84, 140, 196)",
                "rgb(68, 103, 219)",
                "rgb(138, 53, 212)",
                "rgb(93, 53, 212)",
                "rgb(212, 38, 186)"
            ]}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
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
                    itemTextColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100, 100, 100)',  
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
    </div>);
}
