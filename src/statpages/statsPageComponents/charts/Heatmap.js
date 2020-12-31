import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import WN8color from '../../../functions/WN8color';
import WRcolor from '../../../functions/WRcolor';
import { ThemeContext } from '../../../style/theme.js';

export default function WN8Heatmap(props) {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div style={{ height: 'calc(310px)' }}>
            <ResponsiveHeatMap
                data={props.data}
                keys={['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']}
                indexBy="Class"
                margin={{ top: 30, right: 30, bottom: 20, left: 60 }}
                forceSquare={true}
                theme={{
                    textColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',
                }}
                cellShape={
                    ({
                        value,
                        x,
                        y,
                        width,
                        height,
                        color,
                        opacity,
                        borderWidth,
                        borderColor,
                        textColor,
                    }) => (
                        <g transform={`translate(${x}, ${y})`}>
                            <path
                                fill={props.type === 'wn8' ? WN8color(value) : WRcolor(value)}
                                fillOpacity={opacity}
                                strokeWidth={borderWidth}
                                stroke={borderColor}
                                // m -${Math.round(width)/2} -${Math.round(width)/2}
                                // h ${Math.round(width)}
                                // v ${Math.round(width)}
                                // h -${Math.round(width)}
                                // v -${Math.round(width)}
                                d={`
                            m -${Math.round(width) / 2} -${Math.round(width) / 2}
                            h ${Math.round(width)}
                            v ${Math.round(width)}
                            h -${Math.round(width)}
                            v -${Math.round(width)}                            
                            `}
                            />
                            <text
                                dominantBaseline="central"
                                textAnchor="middle"
                                style={{ fill: 'white', fontSize: '0.7rem' }}
                            >
                                {value}
                            </text>
                        </g>
                    )
                }

                axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, legend: '', legendOffset: 36 }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Class',
                    legendPosition: 'middle',
                    legendOffset: -40,
                }}
                cellOpacity={1}
                cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0.1)',
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 7,
                    }
                ]}
                fill={[{ id: 'lines' }]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="cell"
                cellHoverOthersOpacity={0.85}
            />
        </div>
    );
}
