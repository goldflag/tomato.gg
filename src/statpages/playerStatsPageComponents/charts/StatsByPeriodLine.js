import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import { WN8Color } from "Styling/colors";

const color = {
    WR: "rgb(58, 124, 199)",
    WN8: "rgb(92, 58, 199)",
    DPG: "rgb(148, 36, 173)",
};

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

export default function StatsByPeriodLine({ data }) {
    return (
        <div style={{ height: "340px" }}>
            <ResponsiveLine
                theme={{
                    fontFamily: "Roboto Mono",
                    textColor: "rgb(210, 210, 210)",
                    grid: {
                        line: {
                            stroke: "rgba(200, 200, 200, 0.5)",
                            strokeWidth: 1,
                        },
                    },
                    tooltip: {
                        container: {
                            backdropFilter: "blur( 7px )",
                            background: "rgb(40, 40, 70, 0.8)",
                            color: "rgb(255, 255, 255)",
                        },
                    },
                }}
                data={[{ 
                    id: "StatsByPeriodLine",
                    data 
                }]}
                curve="cardinal"
                margin={{ top: 23, right: 30, bottom: 80, left: 75 }}
                xScale={{ type: "point" }}
                yScale={{ type: "linear", min: "auto", max: "auto", stacked: true, reverse: false }}
                yFormat=" >-.0f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: "bottom",
                    tickSize: 5,
                    tickPadding: 10,
                    legend: "Date",
                    legendOffset: 60,
                    legendPosition: "middle",
                    tickRotation: -45,
                    tickValues: 15,
                }}
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
                colors={["rgb(58, 124, 199)"]}
                pointSize={10}
                pointBorderWidth={2}
                pointLabelYOffset={-12}
                useMesh={true}
                enableCrosshair={false}
                tooltip={(node) => <Tooltip node={node} />}
            />
        </div>
    );
}
