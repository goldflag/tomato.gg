import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export default function NationDistribution(props) {

    const data = props.data;
    return(
        <div style={{ height: 'calc(20vh + 100px)'}}>
            <ResponsivePie
                data={data}
                margin={{ top: 50, right: 20, bottom: 20, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={[
                    "rgb(84, 140, 196)",
                    "rgb(68, 103, 219)",
                    "rgb(93, 53, 212)",
                    "rgb(138, 53, 212)",
                    "rgb(212, 38, 186)",
                    // "rgb(84, 140, 196)",
                    // "rgb(68, 103, 219)",
                    // "rgb(93, 53, 212)",
                    // "rgb(138, 53, 212)",
                    // "rgb(212, 38, 186)",
                ]}
                borderWidth={2}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
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