// NPM
import React from "react";
import { ResponsiveScatterPlot, ScatterPlot } from "@nivo/scatterplot";
import styled from "styled-components";

// LOCAL
import { WN8Color } from "Styling/colors";
import { clanPositions, commonStrings } from "Data/localizations";

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
`;

const CustomToolTip = styled.div`
    min-width: 200px;
    backdrop-filter: blur(7px);
    background-color: rgb(40, 40, 70, 0.8);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 5px;
`;

const CustomColor = styled.div`
    background-color: ${({ color }) => color};
    color: rgb(250, 250, 250);
    padding: 9px;
    margin: 4px -5px;
    font-size: 1rem;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.3rem 0.3rem;
`;

const TooltipLabel = styled.div`
    color: rgb(180, 180, 180);
    font-size: ${({ size }) => size}rem;
    margin-bottom: 0rem;
`;

const TooltipValue = styled.div`
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: 500;
    margin-top: 0rem;
`;

const Bubble = styled.div`
    height: 340px;
`;

const Tooltip = ({
    data
}) => {
    const { longDate, y, winrate, battles, frags, dpg, tier } = data;

    let headerContent = `${longDate}`;
    let gridItems = [
        { label: "Winrate", value: winrate + "%" },
        { label: "WN8", value: y },
        { label: "Frags", value: frags },
        { label: "DPG", value: dpg },
        { label: "Battles", value: battles },
        { label: "Avg. Tier", value: tier },
    ];

    return (
        <CustomToolTip>
            <CustomColor color={WN8Color(y)}>
                {headerContent}
            </CustomColor>
            <Grid>
                {gridItems.map(({ label, labelProps, value }, i) => (
                    <GridItem key={i}>
                        <TooltipValue>{value}</TooltipValue>
                        <TooltipLabel size={0.8} {...labelProps}>
                            {label}
                        </TooltipLabel>
                    </GridItem>
                ))}
            </Grid>
        </CustomToolTip>
    );
};

const CustomNode = ({ node, x, y, size, color, blendMode, onMouseEnter, onMouseMove, onMouseLeave, onClick }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <circle
                r={size}
                fill={WN8Color(node.data.y)}
                style={{ mixBlendMode: blendMode }}
                onMouseEnter={onMouseEnter}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
            />
        </g>
    );
};

const theme = {
    fontFamily: "Roboto Mono",
    textColor: "rgb(255, 255, 255)",
    grid: {
        line: {
            stroke: "rgba(200, 200, 200, 0.5)",
            strokeWidth: 1,
        },
    },
    tooltip: {
        fontFamily: "Roboto Mono",
        container: {
            backdropFilter: "blur( 7px )",
            background: "rgb(40, 40, 70, 0.8)",
            color: "rgb(255, 255, 255)",
        },
    },
};


export default function StatsByPeriodScatter({ data, mode }) {
  console.log(data)
    return (
        <Bubble>
              <ResponsiveScatterPlot
                theme={theme}
                margin={{ top: 30, right: 30, bottom: 70, left: 90 }}
                blendMode="multiply"
                data={[
                    {
                        id: "StatsByPeriodScatter",
                        data,
                    },
                ]}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    precision: 'day',
                }}
                xFormat="time:%Y-%m-%d"
                axisLeft={{
                  tickValues: 6,
                  legend: "WN8",
                  legendOffset: -55,
                  legendPosition: "middle",
                }}
                axisBottom={{
                    format: '%b %d',
                    tickValues: 15,
                    tickRotation: -45,
                    legend: "Date",
                    legendOffset: 55,
                    legendPosition: "middle",
                }}
                tooltip={(node) => <Tooltip data={node.node.data} />}
                renderNode={CustomNode}
                nodeSize={(node) => Math.sqrt(node.battles / Math.PI) * (mode === 0 ? 3 : 2.5)}

            />
        </Bubble>
    );
}
