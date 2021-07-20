import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import { WN8Color } from "Styling/colors";
import { theme } from "Styling/nivoThemeLine";

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

const Tooltip = ({
    node: {
        point: { data },
    },
}) => {
    const { longDate, y, winrate, battles, frags, dpg, spots } = data;

    let headerContent = `${longDate}`;
    let gridItems = [
        { label: "Winrate", value: winrate + "%" },
        { label: "WN8", value: y },
        { label: "Frags", value: frags },
        { label: "DPG", value: dpg },
        { label: "Battles", value: battles },
        { label: "Spots", value: spots}
    ];

    return (
        <CustomToolTip>
            <CustomColor color={WN8Color(y)}>{headerContent}</CustomColor>
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

const CustomSymbol = ({ size, color, borderWidth, datum: { y, battles } }, info, avgBattles) => {
    return (
        <g>
            <circle
                r={info ? size : Math.sqrt(battles / Math.PI) * (0.5 + (25 / avgBattles)) }
                strokeWidth={borderWidth}
                stroke={"rgb(200, 200, 200)"}
                fill={WN8Color(y)}
                fillOpacity={info ? 0 : 1}
            />
        </g>
    );
};

export default function StatsByPeriodLine({ data, info, avgBattles }) {
    return (
        <div style={{ height: "350px" }}>
            <ResponsiveLine
                theme={theme}
                data={[
                    {
                        id: "StatsByPeriodLine",
                        data,
                    },
                ]}
                curve="linear"
                margin={{ top: 30, right: 30, bottom: 90, left: 80 }}
                xScale={{
                    type: "time",
                    format: "%Y-%m-%d",
                    useUTC: false,
                    precision: "day",
                }}
                yScale={{
                    type: "linear",
                    min: "auto",
                    max: "auto",
                    stacked: true,
                    reverse: false,
                }}
                xFormat="time:%Y-%m-%d"
                axisLeft={{
                    orient: "left",
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "WN8",
                    legendOffset: -55,
                    legendPosition: "middle",
                    tickValues: 6,
                }}
                axisBottom={{
                    format: "%b %d",
                    tickValues: 10,
                    legend: "Date",
                    legendOffset: 65,
                    tickRotation: -45,
                    legendPosition: "middle",
                }}
                // enablePointLabel={info ? false : true}
                pointSymbol={(props) => CustomSymbol(props, info, avgBattles)}
                pointSize={5}
                pointBorderWidth={1}
                pointBorderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                useMesh={true}
                enableSlices={false}
                colors={["rgb(58, 124, 199)"]}
                tooltip={(node) => <Tooltip node={node} />}
            />
        </div>
    );
}
