import React from 'react';
import { ResponsiveBar  } from '@nivo/bar'

export default function TierWN8Distribution(props) {

    const data = props.data;
    return (
        <div style={{ height: 'calc(30vh + 100px)'}}>
            <ResponsiveBar 
            data={data}
            keys={['HT', 'MT', 'TD', 'LT', 'SPG']}
            indexBy="Tier"
            margin={{ top: 30, right: 80, bottom: 50, left: 60 }}
            padding={0.3}
            groupMode="grouped"
            colors={[
                "rgb(84, 140, 196)",
                "rgb(68, 103, 219)",
                "rgb(93, 53, 212)",
                "rgb(138, 53, 212)",
                "rgb(212, 38, 186)"
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
                legend: 'Battles',
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
