import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import WN8color from "../../../functions/WN8color";
import WRcolor from "../../../functions/WRcolor";

export default function WN8Heatmap({ data, type }) {
    return (
        <div style={{ height: "calc(310px)" }}>
            <ResponsiveHeatMap
                theme={{
                    textColor: "rgb(210, 210, 210)",
                    fontFamily: "Roboto Mono",
                    tooltip: {
                        fontFamily: "Roboto Mono",
                        container: {
                            backdropFilter: "blur( 7px )",
                            background: "rgb(40, 40, 70, 0.8)",
                            color: "rgb(255, 255, 255)",
                        },
                    },
                }}
                data={data}
                keys={["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]}
                indexBy="Class"
                margin={{ top: 30, right: 30, bottom: 20, left: 60 }}
                forceSquare={true}
                cellShape={({ 
                    data,
                    value,
                    x,
                    y,
                    width,
                    height,
                    color,
                    opacity,
                    borderWidth,
                    borderColor,
                    enableLabel,
                    textColor,
                    onHover,
                    onLeave,
                    onClick,
                    theme,
                }) => (
                    <g 
                        transform={`translate(${x}, ${y})`}
                        onMouseEnter={onHover}
                        onMouseMove={onHover}
                        onMouseLeave={onLeave}
                        onClick={e => onClick(data, e)}
                        style={{ cursor: 'pointer' }}
                    
                    >
                        <path
                            fill={type === "wn8" ? WN8color(value) : WRcolor(value)}
                            fillOpacity={opacity}
                            strokeWidth={1}
                            stroke={"rgba(0, 0, 0, 0)"}
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
                            style={{ fill: "white", fontSize: "0.7rem" }}
                        >
                            {value}
                        </text>
                    </g>
                )}
                axisTop={{
                    orient: "top",
                    tickSize: 5,
                    tickPadding: 5,
                    legend: "",
                    legendOffset: 36,
                }}
                axisRight={null}
                axisBottom={null}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Class",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                cellOpacity={1}
                cellBorderColor={{
                    from: "color",
                    modifiers: [["darker", 0.4]],
                }}
                labelTextColor={{ from: "color", modifiers: [["darker", 1.8]] }}
                defs={[
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(0, 0, 0, 0.1)",
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 7,
                    },
                ]}
                fill={[{ id: "lines" }]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="rowColumn"
                cellHoverOthersOpacity={0.5}
                // tooltip={(node) => {
                //     console.log(node);
                // }}
            />
        </div>
    );
}
