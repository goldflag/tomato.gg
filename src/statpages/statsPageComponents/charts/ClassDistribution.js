import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { ThemeContext } from "../../../context";

export default function ClassDistribution(props) {
    const { theme } = React.useContext(ThemeContext);
    return (
        <div style={{ height: "calc(300px)" }}>
            <ResponsivePie
                theme={{
                    textColor:
                        theme === "dark"
                            ? "rgb(255, 255, 255)"
                            : "rgb(100,100,100)",
                    tooltip: {
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
                margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
                innerRadius={0.5}
                padAngle={0.7}
                colors={[
                    "rgb(84, 140, 196)",
                    "rgb(68, 103, 219)",
                    "rgb(93, 53, 212)",
                    "rgb(138, 53, 212)",
                    "rgb(212, 38, 186)",
                ]}
                borderWidth={2}
                borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor={
                    theme === "dark" ? "rgb(210, 210, 210)" : "rgb(100,100,100)"
                }
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={5}
                radialLabelsLinkHorizontalLength={5}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: "color" }}
                slicesLabelsSkipAngle={10}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}
