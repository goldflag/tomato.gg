import React from 'react';
import { ResponsiveBar  } from '@nivo/bar';
import { ThemeContext } from '../../../style/theme.js';

const theme = {
    background: 'transparent',
    fontFamily: 'sans-serif',
    fontSize: 11,
    textColor: '#333333',
    axis: {
      domain: {
        line: {
          stroke: 'transparent',
          strokeWidth: 1
        }
      },
      ticks: {
        line: {
          stroke: '#777777',
          strokeWidth: 1
        },
        text: {}
      },
      legend: {
        text: {
          fontSize: 12
        }
      }
    },
    grid: {
      line: {
        stroke: '#dddddd',
        strokeWidth: 1
      }
    },
    legends: {
      text: {
        fill: '#333333'
      }
    },
    labels: {
      text: {}
    },
    markers: {
      lineColor: '#000000',
      lineStrokeWidth: 1,
      text: {}
    },
    dots: {
      text: {}
    },
    tooltip: {
      container: {
        background: 'white',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px 9px'
      },
      basic: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center'
      },
      table: {},
      tableCell: {
        padding: '3px 5px'
      }
    },
    crosshair: {
      line: {
        stroke: '#000000',
        strokeWidth: 1,
        strokeOpacity: 0.75,
        strokeDasharray: '6 6'
      }
    },
    annotations: {
      text: {
        fontSize: 13,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      link: {
        stroke: '#000000',
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      outline: {
        fill: 'none',
        stroke: '#000000',
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      symbol: {
        fill: '#000000',
        outlineWidth: 2,
        outlineColor: '#ffffff'
      }
    }
}

export default function TierDistribution(props) {
    const {theme} = React.useContext(ThemeContext);

    const data = props.data;
    return (
        <div style={{ height: 'calc(300px)'}}>
            <ResponsiveBar 
            theme={{ 
                textColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100, 100, 100)',  
                grid: {
                    line: {
                      stroke: theme === 'dark' ? 'rgb(100, 100, 100)' : 'rgb(210, 210, 210)',
                      strokeWidth: 1
                    }
                  },
            }}
            data={data}
            keys={[ 'HT', 'MT', 'TD', 'LT', 'SPG']}
            indexBy="Tier"
            margin={{ top: 30, right: 80, bottom: 50, left: 60 }}
            padding={0.3}
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
            // labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
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
