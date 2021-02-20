import React from "react";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { ThemeContext } from "../../../context";
import styled from "styled-components";
import { MoEStars } from "../../../components/moeStars";

const CustomToolTip = styled.div`
    min-width: 200px;
    .name {
        background-color: ${({ color }) => color};
        color: rgb(250, 250, 250);
        padding: 5px;
        margin: 4px -9px;
        font-size: 14px;
    }

    .entry {
        font-size: 12px;
    }

    .grid {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: auto;
    }

    .gridItem {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0.3rem 0.3rem;
    }

    .val {
        color: rgb(255, 255, 255);
        font-size: 0.8rem;
        font-weight: 500;
        margin-top: 0rem;
    }

    .label {
        color: rgb(180, 180, 180);
        font-size: 0.6rem;
        margin-bottom: 0rem;
    }
`;

const CustomColor = styled.div`
    background-color: ${({ color }) => color};
    color: rgb(250, 250, 250);
    padding: 9px;
    margin: 4px -9px;
    font-size: 14px;
`;

export default function TreemapOverall(props) {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div style={{ height: "75vh" }}>
            <ResponsiveTreeMap
                theme={{
                    textColor:
                        theme === "dark"
                            ? "rgb(210, 210, 210)"
                            : "rgb(100,100,100)",
                    textWeight: 600,
                    fontSize: 13,
                    fontWeight: 500,
                    fontFamily: "Roboto Mono",
                    tooltip: {
                        fontFamily: "Roboto Mono",
                        container: {
                            background:
                                theme === "dark"
                                    ? "rgb(40, 40, 40)"
                                    : "rgb(255, 255, 255)",
                            color:
                                theme === "dark"
                                    ? "rgb(255, 255, 255)"
                                    : "rgb(40, 40, 40)",
                        },
                    },
                }}
                data={props.data}
                identity="name"
                value="battles"
                label={function (e) {
                    return `${e.id}`;
                }}
                valueFormat=" >-.2~s"
                margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
                outerPadding={3}
                innerPadding={3}
                labelSkipSize={45}
                labelTextColor="rgb(220, 220, 220)"
                borderColor={{ from: "color", modifiers: [["darker", 0.1]] }}
                borderWidth={3}
                nodeOpacity={0.8}
                colors={(properties) => {
                    return properties.data.color;
                }}
                parentLabelTextColor={{
                    from: "labelTextColor",
                    modifiers: [["darker", 0.3]],
                }}
                tooltip={(node) => {
                    if (node.node.id !== "Stats") {
                        if (node.node.isLeaf) {
                            if (props.type === "Overall") {
                                return (
                                    <CustomToolTip>
                                        <CustomColor
                                            color={node.node.data.color}
                                        >
                                            {node.node.data.name} |{" "}
                                            {node.node.data.nation}{" "}
                                            {node.node.data.class}
                                        </CustomColor>
                                        <div className="grid">
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.battles ||
                                                        0}
                                                </div>
                                                <div className="label">
                                                    Battles
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.winrate +
                                                        "%" || 0}
                                                </div>
                                                <div className="label">
                                                    Winrate
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.wn8 || 0}
                                                </div>
                                                <div className="label">WN8</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.dpg || 0}
                                                </div>
                                                <div className="label">DPG</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.frags || 0}
                                                </div>
                                                <div className="label">
                                                    Frags
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.spots || 0}
                                                </div>
                                                <div className="label">
                                                    Spots
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.dmgratio ||
                                                        0}
                                                </div>
                                                <div className="label">
                                                    DMG Ratio
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.kd || 0}
                                                </div>
                                                <div className="label">K/D</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.hits || 0}
                                                </div>
                                                <div className="label">
                                                    Hits
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.armor || 0}
                                                </div>
                                                <div className="label">
                                                    Armor Eff
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.moe > 0 ? (
                                                        <MoEStars
                                                            marks={
                                                                node.node.data
                                                                    .moe
                                                            }
                                                        />
                                                    ) : (
                                                        0
                                                    )}
                                                </div>
                                                <div
                                                    className="label"
                                                    style={{
                                                        marginTop:
                                                            node.node.data.moe >
                                                            0
                                                                ? "-2px"
                                                                : "0px",
                                                    }}
                                                >
                                                    MoE
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    <img
                                                        style={{
                                                            maxHeight: "20px",
                                                        }}
                                                        src={require(`../../../assets/masteryIcons/${node.node.data.mastery}.png`)}
                                                        alt={
                                                            node.node.data
                                                                .mastery
                                                        }
                                                    />
                                                </div>
                                                <div
                                                    className="label"
                                                    style={{
                                                        marginTop: "-6px",
                                                    }}
                                                >
                                                    Mastery
                                                </div>
                                            </div>
                                        </div>
                                    </CustomToolTip>
                                );
                            } else {
                                return (
                                    <CustomToolTip>
                                        <CustomColor
                                            color={node.node.data.color}
                                        >
                                            {node.node.data.name} |{" "}
                                            {node.node.data.nation}{" "}
                                            {node.node.data.class}
                                        </CustomColor>
                                        <div className="grid">
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.battles ||
                                                        0}
                                                </div>
                                                <div className="label">
                                                    Battles
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.winrate +
                                                        "%" || 0}
                                                </div>
                                                <div className="label">
                                                    Winrate
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.wn8 || 0}
                                                </div>
                                                <div className="label">WN8</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.dpg || 0}
                                                </div>
                                                <div className="label">DPG</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.frags || 0}
                                                </div>
                                                <div className="label">
                                                    Frags
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.dmgratio ||
                                                        0}
                                                </div>
                                                <div className="label">
                                                    DMG Ratio
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.kd || 0}
                                                </div>
                                                <div className="label">K/D</div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.spots || 0}
                                                </div>
                                                <div className="label">
                                                    Spots
                                                </div>
                                            </div>
                                            <div className="gridItem">
                                                <div className="val">
                                                    {node.node.data.survival ||
                                                        0}
                                                </div>
                                                <div className="label">
                                                    Survival
                                                </div>
                                            </div>
                                        </div>
                                    </CustomToolTip>
                                );
                            }
                        } else {
                            return (
                                <CustomToolTip>
                                    <CustomColor
                                        color={node.node.data.wn8Color}
                                    >
                                        {node.node.data.name}
                                    </CustomColor>
                                    <div className="grid">
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.sumBattles || 0}
                                            </div>
                                            <div className="label">Battles</div>
                                        </div>
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.wins + "%" || 0}
                                            </div>
                                            <div className="label">Winrate</div>
                                        </div>
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.wn8 || 0}
                                            </div>
                                            <div className="label">WN8</div>
                                        </div>
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.dpg || 0}
                                            </div>
                                            <div className="label">DPG</div>
                                        </div>
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.frags || 0}
                                            </div>
                                            <div className="label">Frags</div>
                                        </div>
                                        <div className="gridItem">
                                            <div className="val">
                                                {node.node.data.spots || 0}
                                            </div>
                                            <div className="label">Spots</div>
                                        </div>
                                    </div>
                                </CustomToolTip>
                            );
                        }
                    }
                }}
            />
        </div>
    );
}
