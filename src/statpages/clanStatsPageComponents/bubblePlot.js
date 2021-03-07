// NPM
import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import styled from "styled-components";

// LOCAL
import { WN8color } from "Functions/colors";
import { clanPositions } from "Data/localizations";

const CustomToolTip = styled.div`
    min-width: 200px;
    backdrop-filter: blur(7px);
    background-color: rgb(40, 40, 70, 0.8);
    color: rgb(255, 255, 255);
    border-radius: 5px;
    padding: 5px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
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
    height: 500px;
`;

const BubblePlotTooltip = ({ node, data }) => {
    const { battles, x, y, winrate, username, role } = data;
    let headerContent = `${username}`;
    let gridItems = [
        { label: "Winrate", value: winrate + "%" },
        { label: "WN8", value: x },
        { label: "Battles", value: battles },
        { label: "Avg. Tier", value: y },
    ];

    return (
        <CustomToolTip>
            <CustomColor color={WN8color(x)}>
                {headerContent}
                <TooltipLabel size={0.8}>{clanPositions[role]}</TooltipLabel>
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
                fill={WN8color(node.data.x)}
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

export default function BubblePlot({ mode, data }) {
    return (
        <Bubble>
            <ResponsiveScatterPlot
                data={data}
                theme={theme}
                colors={{ scheme: "purpleRed_green" }}
                margin={{ top: 30, right: 30, bottom: 70, left: 90 }}
                xScale={{ type: "linear", min: "auto", max: "auto" }}
                yScale={{ type: "linear", min: "auto", max: "auto" }}
                blendMode="multiply"
                nodeSize={(node) => Math.sqrt(node.battles / Math.PI) * (mode === 0 ? 0.2 : 1.2)}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "WN8",
                    legendPosition: "middle",
                    legendOffset: 46,
                }}
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "Avg. Tier",
                    legendPosition: "middle",
                    legendOffset: -60,
                }}
                tooltip={(node) => <BubblePlotTooltip node={node} data={node.node.data} />}
                renderNode={CustomNode}
            />
        </Bubble>
    );
}
