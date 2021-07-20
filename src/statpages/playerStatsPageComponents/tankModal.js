import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { nationAdjConv, classDescConv, tierConv, serverConv } from "Data/conversions";
import Scrollbar from "react-scrollbars-custom";
import { WN8Color, WRColor } from "Styling/colors";
import { SelectButton, SelectButtonContainer } from "Components/buttons";
import { MoEStars } from "Components";

import TankSessions from "./modal/tankSessions";
import Awards from "./modal/awards";
import TankSessionsGraph from "./modal/tankSessionsGraph";
import TankLeaderboards from "./modal/tankLeaderboards";

const backend = process.env.REACT_APP_BACKEND;

const Modal = styled.div`
    position: fixed;
    top: 5rem;
    bottom: 1rem;
    right: 12.8rem;
    transition-duration: 1s;
    width: ${({ modalOpen }) => (modalOpen ? 730 : 0)}px;
    overflow: ${({ modalOpen }) => (modalOpen ? "auto" : "hidden")};
    background: rgba(40, 40, 50, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgb(10, 10, 10);
`;

const ModalInner = styled.div`
    position: absolute;
    top: 0;
    padding: 1rem;
    width: 100%;
`;

const TankInfoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 5fr);
    margin-bottom: 1rem;
`;

const TankInfo = styled.div`
    color: ${({ isPrem }) => isPrem ? "#FEE354" : "white"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .tier {
        font-size: 0.6rem;
        font-weight: 300;
    }
    .tierRoman {
        font-size: 3.8rem;
        font-weight: 600;
    }
    .tankName {
        font-size: 1.5rem;
        font-weight: 300;
    }
    .tankClass {
        line-height: 1.5rem;
        font-size: 0.9rem;
        font-weight: 300;
    }
`;

const Close = styled(Icon)`
    z-index: 10;
    position: sticky;
    top: 0.5rem;
    left: 0.5rem;
    color: white;
    :hover {
        color: rgb(150, 150, 150);
        cursor: pointer;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 0rem;
    background-color: ${({ color }) => color ?? 'rgba(100, 100, 150, 0.5)'};
    border-radius: 5px;
    .label {
      font-size: 0.7rem;
    }
    .value {
      font-size: 1.3rem;
    }
`;

const CardGrid = styled.div`
    font-family: Roboto Mono;
    margin: 0.5rem 0rem;
    grid-gap: 0.5rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

const SectionHeader = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 1rem;
`;

const RingedSection = styled.div`
    padding: 1rem;
    margin: 1rem 0rem;
    border: 1px double rgb(180, 180, 180);
    border-radius: 20px;
`;

const MoEMasteryCardDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;
    margin: 1rem;
    font-weight: 300;
    border: 1px double rgb(180, 180, 180);
    background-color: rgb(100, 100, 100, 0.3);
    border-radius: 20px;
`;

function MoEMasteryCard({ moe, mastery, nation }) {
  return (
    <MoEMasteryCardDiv>
      {moe ? <>
        <img src={`https://dav-static.worldoftanks.com//ptlwotus/wot/current/marksOnGun/67x71/${nation}_${moe}_mark${moe === 1 ? '' : 's'}.png`} style={{ maxHeight: "71px" }} alt={mastery} />

      </> : null}
      {mastery ? <>
        <img src={require(`Assets/masteryIcons/${mastery}.png`)} style={{ maxHeight: "70px" }} alt={mastery} />
      </> : null}
    </MoEMasteryCardDiv>
  );
}

function StatsCard({ label, value, color }) {
  return (
    <Card color={color}>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </Card>
  );
}

function TankOverallStats({ data }) {
  const topStats = [
    {
      label: "WN8",
      value: data.wn8,
      color: WN8Color(data.wn8),
    },
    {
      label: "DPG",
      value: data.dpg,
    },
    {
      label: "KPG",
      value: data.kpg,
    },
    {
      label: "Battles",
      value: data.battles,
    },
    {
      label: "Hit Ratio",
      value: data.hitratio + '%',
    },
    {
      label: "Survived",
      value: data.survival + '%',
    },
    {
      label: "Winrate",
      value: data.winrate + '%',
      color: WRColor(data.winrate),
    },
    {
      label: "Damage Ratio",
      value: data.dmgratio,
    },
    {
      label: "K/D Ratio",
      value: data.kd,
    },
    {
      label: "Spots",
      value: data.spots,
    },
    {
      label: "Armor",
      value: data.armoreff,
    },
    {
      label: "XP",
      value: data.xp,
    },
  ];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <CardGrid cols={6}>
        {topStats.map((props) => <StatsCard key={props.label} {...props} />)}
      </CardGrid>
    </div>
  );
}

const states = ["Daily", "Weekly", "Monthly"];
const radiuses = ["20px 0 0 20px", "0", "0 20px 20px 0"];

function TankSessionsTabbar({ sessionStats: { day, week, month } }) {
  const [value, setValue] = useState("Weekly");
  return (
    <div style={{ marginBottom: '1rem' }}>
      <SelectButtonContainer>
        {states.map((state, i) => (
          <SelectButton key={i} radius={radiuses[i]} selected={value === state} onClick={() => setValue(state)}>
            {state}
          </SelectButton>
        ))}
      </SelectButtonContainer>
      <TankSessions data={value === "Daily" ? day : value === "Weekly" ? week : month} />
    </div>
  );
}

export default function TankModal({ props, selectedTank, modalOpen, setModalOpen }) {
  const [sessionStats, setSessionStats] = useState();

  console.log(selectedTank);
  const fetchStats = useCallback(async () => {
    const res = await fetch(
      `${backend}/api/tanksessions/${props.server}/${props.id}/${selectedTank.id}`
    ).then((res) => res.json());
    setSessionStats(res);
  }, [props, selectedTank]);

  useEffect(() => {
    if (selectedTank) {
      fetchStats();
    }
  }, [selectedTank, fetchStats]);

  return (
    <Modal modalOpen={modalOpen}>
      {selectedTank ? (
        <Scrollbar>
          <ModalInner>
            <TankInfoGrid>
              <TankInfo isPrem={selectedTank.isPrem}>
                <div className="tier">T I E R</div>
                <div className="tierRoman">{tierConv[selectedTank.tier]}</div>
                <div className="tankName">{selectedTank.name}</div>
                <div className="tankClass">
                  {nationAdjConv.formatString(
                    nationAdjConv[selectedTank.nation],
                    classDescConv[selectedTank.class]
                  )}
                </div>
              </TankInfo>
              <img style={{ width: "220px" }} src={selectedTank.bigImage} alt={selectedTank.name} />
              <MoEMasteryCard moe={selectedTank.moe} mastery={selectedTank.mastery} nation={selectedTank.nation} />
            </TankInfoGrid>
            <TankOverallStats data={selectedTank} />
            <SectionHeader>Awards</SectionHeader>
            {/* <RingedSection> */}
              <Awards awards={selectedTank.awards} />
            {/* </RingedSection> */}
            {sessionStats?.day.length > 0 && sessionStats?.week.length > 0 && sessionStats?.month.length > 0 ? (
              <>
                <SectionHeader>Stats Graph</SectionHeader>
                {/* <RingedSection> */}
                  <TankSessionsGraph sessionStats={sessionStats} />
                {/* </RingedSection> */}
                <SectionHeader>Period Stats</SectionHeader>
                <TankSessionsTabbar sessionStats={sessionStats} />
              </>
            ) : null}
            <SectionHeader>{serverConv[props.server]} Top Players | 60 Days | Min 25 Battles </SectionHeader>
            <TankLeaderboards id={selectedTank.id} server={props.server} />
          </ModalInner>
          <Close onClick={() => setModalOpen(false)} size={40} icon={ic_close} />
        </Scrollbar>
      ) : null}
    </Modal>
  );
}
