import React from "react";
import { ResponsiveRadar } from '@nivo/radar'
import { ThemeContext } from '../../../style/theme.js';

export default function WN8Radar(props) {
    const {theme} = React.useContext(ThemeContext);
    return (
        <div style={{ height: 'calc(300px)'}}>
            <ResponsiveRadar
                theme={{ 
                    textColor: theme === 'dark' ? 'rgb(210, 210, 210)' : 'rgb(100,100,100)',  
                }}
                data={props.data}
                keys={[ 'player' ]}
                indexBy="stat"
                maxValue="auto"
                margin={{ top: 60, right: 70, bottom: 30, left: 70 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={theme === 'dark' ? 'rgb(127, 143, 199)' : 'rgb(65, 67, 163)'}
                fillOpacity={0.4}
                blendMode="multiply"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
        />
    </div>
    )
}
