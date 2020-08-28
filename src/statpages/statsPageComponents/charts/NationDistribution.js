import React from 'react';
import { ResponsivePie   } from '@nivo/pie';

export default function NationDistribution(props) {

    const data = props.data;
    return(
        <div style={{ height: 'calc(300px)'}}>
            <ResponsivePie  
                data={data}
                margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={[
                    // "rgb(24, 95, 237)",
                    // "rgb(199, 28, 28)",
                    // "rgb(74, 109, 199)",
                    // "rgb(158, 96, 81)",
                    // "rgb(93, 106, 163)",

                    // "rgb(242, 197, 15)",
                    // "rgb(165, 117, 209)",
                    // "rgb(250, 242, 25)",
                    // "rgb(250, 90, 90)",
                    // "rgb(68, 189, 110)",
                    "rgb(55, 197, 240)",
                    "rgb(55, 157, 240)",
                    "rgb(55, 110, 240)",
                    "rgb(55, 73, 240)",
                    "rgb(73, 55, 240)",
                    "rgb(110, 55, 240)",
                    "rgb(147, 55, 240)",
                    "rgb(181, 55, 240)",
                    "rgb(222, 55, 240)",
                    "rgb(240, 55, 225)",

                    "rgb(222, 55, 240)",

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