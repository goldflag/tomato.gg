import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ThemeContext } from '../../../style/theme.js';

export default function TierMoeDistribution(props) {
    const {theme} = React.useContext(ThemeContext);
    return (
        <div style={{ height: 'calc(292px)'}}>
            <ResponsiveBar 
                theme={{ 
                    textColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',  
                    grid: {
                        line: {
                            stroke: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(210, 210, 210)',
                            strokeWidth: 1
                        }
                    },
                }}
                data={props.data}
                keys={[ "0", "1", "2", "3"]}
                indexBy="Tier"
                margin={{ top: 30, right: 80, bottom: 50, left: 50 }}
                padding={0.3}
                colors={[
                    "rgb(224, 224, 224)",
                    "rgb(103, 174, 224)",
                    "rgb(92, 108, 196)",
                    "rgb(138, 53, 212)",
                ]}

                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Tier',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Tanks',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableLabel={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                {
                    dataFrom: 'keys',
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 120,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 0.85,
                    symbolSize: 20,
                    itemTextColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',  
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
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            />
        </div>
    );
}
