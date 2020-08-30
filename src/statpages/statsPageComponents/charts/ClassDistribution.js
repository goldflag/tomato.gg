import React from 'react';
import { ResponsivePie   } from '@nivo/pie';

export default function ClassDistribution(props) {

    const data = props.data;
    return(
        <div style={{ height: 'calc(300px)'}}>
            <ResponsivePie  
                data={data}
                margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={[
                    "rgb(100, 155, 209)",
                    "rgb(104, 143, 227)",
                    "rgb(137, 109, 222)",
                    "rgb(162, 97, 199)",
                    "rgb(217, 65, 166)"
                ]}
                borderWidth={2}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={5}
                radialLabelsLinkHorizontalLength={5}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                />
            </div>
        );
    }