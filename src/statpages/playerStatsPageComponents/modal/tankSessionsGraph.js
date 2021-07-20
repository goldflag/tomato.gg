import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SelectButton } from "Components/buttons";
import TankGraph from "./tankGraph";

const Container = styled.div`
    margin-bottom: 1rem;
    font-family: Roboto Mono;
`;

const processData = (data) =>
  data
    .map(({ timestamp, wn8, winrate, battles, frags, dpg, spots }) => ({
      x: timestamp.slice(0, 10),
      y: wn8,
      longDate: timestamp.slice(0, 10),
      winrate,
      battles,
      frags: frags,
      dpg: dpg,
      spots
    }))
    .reverse();


const states = ["Weekly", "Monthly"];
const radiuses = ["20px 0 0 20px", "0 20px 20px 0"];

export default function TankSessionsGraph({ sessionStats: { day, week, month } }) {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("Weekly");

  useEffect(() => {
    const sesweekProcessed = processData(week).slice(-52);
    const sesmonthProcessed = processData(month).slice(-12);
    const avgBattles = sesweekProcessed.reduce((acc, { battles }) => Number(acc) + Number(battles), 0) / sesweekProcessed.length;
    setData({ sesweekProcessed, sesmonthProcessed, avgBattles });
  }, [week, month]);

  return data ? (
    <Container>
      {states.map((state, i) => (
        <SelectButton key={i} radius={radiuses[i]} selected={value === state} onClick={() => setValue(state)}>
          {state}
        </SelectButton>
      ))}

      <TankGraph data={value === "Weekly" ? data.sesweekProcessed : data.sesmonthProcessed} avgBattles={data.avgBattles} />
    </Container>
  ) : null;
}