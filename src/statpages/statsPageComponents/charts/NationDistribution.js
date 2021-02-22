import React from "react";
import { ResponsivePie } from "@nivo/pie";

export default function NationDistribution(props) {
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
                    "rgb(124, 209, 50)",
                    "rgb(226, 232, 51)",
                    "rgb(232, 154, 51)",
                    "rgb(51, 160, 232)",
                    "rgb(100, 132, 222)",
                    "rgb(135, 123, 227)",
                    "rgb(207, 145, 242)",
                    "rgb(242, 145, 208)",
                    "rgb(224, 123, 127)",
                    "rgb(123, 224, 189)",
                    "rgb(222, 113, 117)",
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
                slicesLabelsTextColor="rgb(230, 230, 230)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
}
