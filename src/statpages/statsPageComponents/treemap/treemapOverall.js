// NPM
import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
import styled from "styled-components";

// LOCAL
import { MoEStars } from "Components/moeStars";
import { classConv, classDescConv, nationAdjConv, nationConv } from "Data/conversions";

const CustomToolTip = styled.div`
    min-width: 200px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
`;

const CustomColor = styled.div`
    background-color: ${({ color }) => color};
    color: rgb(250, 250, 250);
    padding: 9px;
    margin: 4px -9px;
    font-size: 14px;
`;

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.3rem 0.3rem;
`;

const TooltipLabel = styled.div`
    color: rgb(180, 180, 180);
    font-size: 0.6rem;
    margin-bottom: 0rem;
`;

const TooltipValue = styled.div`
    color: rgb(255, 255, 255);
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 0rem;
`;

const TreeMapTooltip = ({ node, type }) => {
    const { id, isLeaf, data } = node;
    const classDesc = classDescConv[data.class];
    const nationAdj = nationAdjConv[nationConv[data.nation]];

    if (id === "Stats") return null;
    var headerColor, headerContent, gridItems;

    if (isLeaf && type === "Overall") {
        headerColor = data.color;
        headerContent = `${data.name} | ${nationAdj} ${classDesc}`;
        gridItems = [
            { label: "Battles", value: data.battles },
            { label: "Winrate", value: data.winrate + "%" },
            { label: "WN8", value: data.wn8 },
            { label: "DPG", value: data.dpg },
            { label: "Frags", value: data.frags },
            { label: "Spots", value: data.spots },
            { label: "DMG Ratio", value: data.dmgratio },
            { label: "K/D", value: data.kd },
            { label: "Hits", value: data.hits },
            { label: "Armor Eff", value: data.armor },
            {
                label: "MoE",
                labelProps: {
                    style: {
                        marginTop: data.moe > 0 ? "-2px" : "0px",
                    },
                },
                value: data.moe > 0 ? <MoEStars marks={data.moe} /> : 0,
            },
            {
                label: "Mastery",
                labelProps: {
                    className: "label",
                    style: {
                        marginTop: "-6px",
                    },
                },
                value: (
                    <img
                        style={{
                            maxHeight: "20px",
                        }}
                        src={require(`Assets/masteryIcons/${data.mastery}.png`)}
                        alt={data.mastery}
                    />
                ),
            },
        ];
    } else if (isLeaf) {
        headerColor = data.color;
        headerContent = `${data.name} | ${nationAdj} ${classDesc}`;
        gridItems = [
            { label: "Battles", value: data.battles },
            { label: "Winrate", value: data.winrate + "%" },
            { label: "WN8", value: data.wn8 },
            { label: "DPG", value: data.dpg },
            { label: "Frags", value: data.frags },
            { label: "DMG Ratio", value: data.dmgratio },
            { label: "K/D", value: data.kd },
            { label: "Spots", value: data.spots },
            { label: "Survival", value: data.survival },
        ];
    } else {
        headerColor = data.wn8Color;
        headerContent = data.name;
        gridItems = [
            { label: "Battles", value: data.sumBattles },
            { label: "Winrate", value: data.wins + "%" },
            { label: "WN8", value: data.wn8 },
            { label: "DPG", value: data.dpg },
            { label: "Frags", value: data.frags },
            { label: "Spots", value: data.spots },
        ];
    }

    return (
        <CustomToolTip>
            <CustomColor color={headerColor}>{headerContent}</CustomColor>
            <Grid>
                {gridItems.map(({ label, labelProps, value }, i) => (
                    <GridItem key={i}>
                        <TooltipValue>{value}</TooltipValue>
                        <TooltipLabel {...labelProps}>{label}</TooltipLabel>
                    </GridItem>
                ))}
            </Grid>
        </CustomToolTip>
    );
};

export default function TreemapOverall({ data, type }) {
    return (
        <div style={{ height: "75vh" }}>
            <ResponsiveTreeMap
                theme={{
                    textColor: "rgb(210, 210, 210)",
                    textWeight: 600,
                    fontSize: 13,
                    fontWeight: 500,
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
                identity="id"
                value="battles"
                label={(e) => e.data.name}
                parentLabel={(e) => e.data.name}
                valueFormat=" >-.2~s"
                margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                outerPadding={3}
                innerPadding={3}
                labelSkipSize={45}
                labelTextColor="rgb(220, 220, 220)"
                borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                borderWidth={3}
                nodeOpacity={0.8}
                colors={(properties) => properties.data.color}
                parentLabelTextColor={{
                    from: "labelTextColor",
                    modifiers: [["darker", 0.3]],
                }}
                tooltip={(props) => <TreeMapTooltip {...props} type={type} />}
            />
        </div>
    );
}
