import React from "react";
import styled from "styled-components";
import awardsData from "Data/awardsinfo.json";
import Tooltip from "react-tooltip-lite";

const AwardContainer = styled.div`
    font-family: Roboto Mono;
    font-size: 0.8rem;
`;

const AwardBreakdown = styled.div`
    display: grid;
    padding: 0.5rem 0rem;
    grid-template-columns: repeat(10, 55px);
`;

const Awards = ({ awards }) => {
  const NumberBox = (val) => {
    // TODO?: replace this with https://material-ui.com/components/badges/#dot-badge
    let width;
    if (val < 10) width = "15px";
    else if (val < 100) width = "20px";
    else if (val < 1000) width = "25px";
    else width = "30px";
    return (
      <div
        style={{
          width: width,
          height: "16px",
          backgroundColor: "rgb(199, 38, 81)",
          color: "white",
          position: "absolute",
          bottom: "5px",
          left: "30px",
          fontSize: "0.6rem",
          border: "1px solid black",
          borderRadius: "5px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: "none",
        }}
      >
        {val}
      </div>
    );
  };

  const RenderTooltip = (award) => (
    <div
      style={{
        position: "absolute",
        left: "-250px",
        top: "40px",
        backgroundColor: "rgb(40, 40, 40)",
        padding: "0.5rem",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          lineHeight: "1.5rem",
          color: "rgb(255, 255, 255)",
          fontSize: "0.9rem",
        }}
      >
        {awardsData[award].name}
      </div>
      <div
        style={{
          width: "200px",
          color: "rgb(200, 200, 200)",
          fontSize: "0.7rem",
        }}
      >
        {awardsData[award].desc}
      </div>
    </div>
  );

  const RenderAwards = (awards, type) =>
    Object.entries(awards).map(([awardName, count], i) => {
      return count > 0 ? (
        <Tooltip key={i} arrow={false} direction="right" content={RenderTooltip(awardName)}>
          {NumberBox(count)}
          <img
            style={{ width: "50px" }}
            src={require(`Assets/awards/${type}/${awardName}.png`)}
            alt={awardName}
          />
        </Tooltip>
      ) : null;
    });

  const types = { battleHeroes: "Battle Heroes", main: "Honorary Ranks", epic: "Epic Medals" };
  return (
    <AwardContainer>
      {Object.entries(types).map(([key, label]) => {
        if (Object.keys(awards[key]).length) {
          return (
            <React.Fragment key={key}>
              {label}
              <AwardBreakdown>{RenderAwards(awards[key], key)}</AwardBreakdown>
            </React.Fragment>
          );
        }
        return null;
      }
      )}
    </AwardContainer>
  );
};

export default Awards;
