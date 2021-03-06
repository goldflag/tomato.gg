import React from "react";
import { ResponsivePie } from "@nivo/pie";

export default function ClassDistribution(props) {
    return (
        <div style={{ height: "calc(300px)" }}>
            <ResponsivePie
                theme={{
                    fontFamily: "Roboto Mono",
                    textColor: "rgb(255, 255, 255)",
                    tooltip: {
                        container: {
                            backdropFilter: "blur( 7px )",
                            background: "rgb(40, 40, 70, 0.8)",
                            color: "rgb(255, 255, 255)",
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
                radialLabelsTextXOffset={6}
                radialLabelsTextColor={"rgb(210, 210, 210)"}
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={10}
                radialLabelsLinkHorizontalLength={10}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor={{ from: "color" }}
                radialLabelsSkipAngle={5}
                sliceLabelsSkipAngle={10}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}
