import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { nationAdjConv, classDescConv, tierConv } from "Data/conversions";
import TankSessions from "./modal/tankSessions";
import Awards from "./modal/awards";
import { Loader } from "Components";
import { TabPanel, CustomTabs, CustomTab } from "Components/customTabs";
import Scrollbar from "react-scrollbars-custom";
import { WN8Color, WRColor } from "Styling/colors";

const backend = process.env.REACT_APP_BACKEND;

const Modal = styled.div`
    position: fixed;
    top: 5rem;
    bottom: 1rem;
    right: 1rem;
    transition-duration: 1s;
    width: ${({ modalOpen }) => (modalOpen ? 720 : 0)}px;
    overflow: ${({ modalOpen }) => (modalOpen ? "auto" : "hidden")};
    background: rgba(40, 40, 50, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgb(10, 10, 10);
`;

const ModalInner = styled.div`
    position: absolute;
    top: 0;
    padding: 1rem;
`;

const TankInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 4fr 6fr;
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
    padding: 1rem 0rem;
    background-color: ${({color}) => color ?? 'rgba(100, 100, 150, 0.5)'};
    border-radius: 5px;
    .label {
      font-size: 0.8rem;
    }
    .value {
      font-size: 1.5rem;
    }
`;

const CardGrid = styled.div`
    font-family: Roboto Mono;
    margin: 0.5rem 0rem;
    grid-gap: 0.5rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

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
      label: "Winrate",
      value: data.winrate + '%',
      color: WRColor(data.winrate),
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
  ];

  const bottomStats = [
    {
      label: "Hit Ratio",
      value: data.hitratio + '%',
    },
    {
      label: "Survived",
      value: data.survival + '%',
    },
    {
      label: "K/D Ratio",
      value: data.kd,
    },
    {
      label: "Damage Ratio",
      value: data.dmgratio,
    },
    {
      label: "Spots",
      value: data.spots,
    },
    {
      label: "Armor",
      value: data.armoreff,
    },
  ];

  return (
    <>
      <CardGrid cols={5}>
        {topStats.map((props) => <StatsCard key={props.label} {...props} />)}
      </CardGrid>
      <CardGrid cols={6}>
        {bottomStats.map((props) => <StatsCard key={props.label} {...props} />)}
      </CardGrid>
    </>
  );
}

function TankSessionsTabbar({ sessionStats: { day, week, month } }) {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomTabs value={value} onChange={handleChange} aria-label="7 day tank stats">
        <CustomTab label={`DAILY`} />
        <CustomTab label={`WEEKLY`} />
        <CustomTab label={`MONTHLY`} />
      </CustomTabs>
      <TankSessions data={value === 0 ? day : value === 1 ? week : month} />
    </>
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
              <img style={{ width: "200px" }} src={selectedTank.bigImage} alt={selectedTank.name} />
            </TankInfoGrid>
            <TankOverallStats data={selectedTank} />
            <Awards awards={selectedTank.awards} />
            {sessionStats ? <TankSessionsTabbar sessionStats={sessionStats} /> : <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />}
          </ModalInner>
          <Close onClick={() => setModalOpen(false)} size={40} icon={ic_close} />
        </Scrollbar>
      ) : null}
    </Modal>
  );
}
