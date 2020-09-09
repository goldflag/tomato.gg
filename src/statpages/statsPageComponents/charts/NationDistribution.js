import React from 'react';
import { ResponsivePie } from '@nivo/pie';
import { ThemeContext } from '../../../style/theme.js';

export default function NationDistribution(props) {
    const {theme} = React.useContext(ThemeContext);
    return(
        <div style={{ height: 'calc(300px)'}}>
            <ResponsivePie  
                // theme={{ 
                //     labels: {    
                //         textColor: 'red',
                //         text: {
                //             // color: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',  
                //             fontSize: 15
                //         }
                //     }
                //     // itemTextColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',  
                // }}
                data={props.data}
                margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={[
                    "rgb(124, 209, 50)",
                    "rgb(226, 232, 51)",
                    "rgb(232, 154, 51)",
                    "rgb(51, 160, 232)",
                    "rgb(100, 132, 222)",
                    "rgb(135, 123, 227)",
                    "rgb(207, 145, 242)",
                    "rgb(242, 145, 208)",
                    "rgb(224, 123, 127)",
                    "rgb(123, 224, 189)",
                    "rgb(222, 113, 117)",

                ]}
                borderWidth={2}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor={theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)'} 
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={5}
                radialLabelsLinkHorizontalLength={5}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: 'color' }}
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="rgb(230, 230, 230)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                />
            </div>
        );
    }