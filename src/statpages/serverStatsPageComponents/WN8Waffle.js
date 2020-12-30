import React from "react";
import { ResponsiveWaffleCanvas  } from '@nivo/waffle'
import WN8dist from '../../data/WN8dist';

export default function WN8Waffle() {
    return (
        <div style={{ height: 'calc(240px)'}}>
            <ResponsiveWaffleCanvas 
            data={WN8dist}
            total={100}
            rows={10}
            columns={100}
            fillDirection="left"
            margin={{ top: 10, right: 40, bottom: 50, left: 40 }}
            colors={[ '#930D0D', '#CD3333', '#CC7A00', '#CCB800', '#849B24', '#4D7326', '#4099BF', '#3972C6', '#793DB6', '#401070', '#ff33cc' ]}
            borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
            animate={true}
            motionStiffness={90}
            motionDamping={11}
            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 40,
                    itemsSpacing: 4,
                    itemWidth: 100,
                    itemHeight: 20,
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    itemTextColor: '#777',
                    symbolSize: 20,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000',
                                itemBackground: '#f7fafb'
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    );
}

