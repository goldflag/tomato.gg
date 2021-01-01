import React from "react";
import { ResponsiveRadar } from "@nivo/radar";
import { ThemeContext } from "../../../style/theme.js";

export default function WN8Radar(props) {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div style={{ height: "calc(300px)" }}>
            <ResponsiveRadar
                theme={
                    {
                    textColor:
                        theme === "dark"
                            ? "rgb(210, 210, 210)"
                            : "rgb(100,100,100)",
                    tooltip: {
                        container: {
                            background: theme === 'dark' ? 'rgb(40, 40, 40)' : 'rgb(255, 255, 255)',
                            color: theme === 'dark' ?  'rgb(255, 255, 255)' : 'rgb(40, 40, 40)',
                        },
                    },
                    }
                }
                data={props.data}
                keys={["overall", "recent"]}
                indexBy="stat"
                maxValue="auto"
                margin={{ top: 60, right: 70, bottom: 30, left: 70 }}
                curve="linearClosed"
                borderWidth={2}
                // borderColor={{[ 'red', 'blue' ]}}
                colors={["rgb(100, 155, 209)", "rgb(162, 97, 199)"]}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: "background" }}
                dotBorderWidth={2}
                dotBorderColor={{ from: "color" }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                fillOpacity={0.4}
                blendMode="multiply"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                isInteractive={true}
                legends={[
                    {
                        anchor: "top-left",
                        direction: "column",
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        symbolSize: 12,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
}
