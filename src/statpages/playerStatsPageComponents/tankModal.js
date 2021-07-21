import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { nationAdjConv, classDescConv, tierConv, serverConv } from "Data/conversions";
import Scrollbar from "react-scrollbars-custom";
import { WN8Color, WRColor } from "Styling/colors";
import { SelectButton, SelectButtonContainer } from "Components/buttons";
import { TabPanel, CustomTabsV2, CustomTabV2 } from "Components/customTabs";

import TankSessions from "./modal/tankSessions";
import Awards from "./modal/awards";
import TankSessionsGraph from "./modal/tankSessionsGraph";
import TankLeaderboards from "./modal/tankLeaderboards";
import TankRecentStats from "./modal/tankRecentStats";

const backend = process.env.REACT_APP_BACKEND;

const Modal = styled.div`
  opacity: ${({ modalOpen }) => (modalOpen ? 1 : 0)};
  visibility: ${({ modalOpen }) => (modalOpen ? null : 'hidden')};
  position: fixed;
  top: 5rem;
  bottom: 1rem;
  right: 12.8rem;
  transition-duration: 0.6s;
  width: 730px;
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
  color: ${({ isPrem }) => (isPrem ? "#FEE354" : "white")};
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
  transition: filter 0.1s;
  :hover {
    cursor: pointer;
    filter: drop-shadow(0 0 0.3rem hsl(195, 10%, 89%));
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0rem;
  background-color: ${({ color }) => color ?? "rgba(100, 100, 150, 0.5)"};
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

const MoEMasteryCardDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin: 1rem;
  font-weight: 300;
  border: 1px double rgb(180, 180, 180);
  background-color: rgb(70, 70, 100, 0.3);
  border-radius: 20px;
`;

function MoEMasteryCard({ moe, mastery, nation }) {
  return (
    <MoEMasteryCardDiv>
      {moe ? (
        <>
          <img
            src={`https://dav-static.worldoftanks.com//ptlwotus/wot/current/marksOnGun/67x71/${nation}_${moe}_mark${
              moe === 1 ? "" : "s"
            }.png`}
            style={{ maxHeight: "71px" }}
            alt={mastery}
          />
        </>
      ) : null}
      {mastery ? (
        <>
          <img src={require(`Assets/masteryIcons/${mastery}.png`)} style={{ maxHeight: "70px" }} alt={mastery} />
        </>
      ) : null}
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
      value: data.hitratio + "%",
    },
    {
      label: "Survived",
      value: data.survival + "%",
    },
    {
      label: "Winrate",
      value: data.winrate + "%",
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
        {topStats.map((props) => (
          <StatsCard key={props.label} {...props} />
        ))}
      </CardGrid>
    </div>
  );
}

const states = ["Daily", "Weekly", "Monthly"];
const radiuses = ["20px 0 0 20px", "0", "0 20px 20px 0"];

function TankSessionsTabbar({ sessionStats: { day, week, month } }) {
  const [value, setValue] = useState("Weekly");
  return (
    <div style={{ marginBottom: "1rem" }}>
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
  const [recentStats, setRecentStats] = useState();
  const [leaderboardStats, setLeaderboardStats] = useState();
  const [leaderBoardType, setLeaderBoardType] = useState("dpg");
  const [page, setPage] = useState("main");

  console.log(selectedTank);

  const fetchStats = useCallback(async () => {
    Promise.all(
      [
        `${backend}/api/playertanksessions/${props.server}/${props.id}/${selectedTank.id}`,
        `${backend}/api/recenttank/${props.server}/${selectedTank.id}/60`,
        `${backend}/api/playertankrecents/${props.server}/${props.id}/${selectedTank.id}`,
      ].map((url) => fetch(url))
    )
      .then((arr) => Promise.all(arr.map((res) => res.json())))
      .then(([sessionData, serverData, playerData]) => {
        serverData["period"] = "Server";
        setRecentStats([serverData, ...playerData.reverse()]);
        console.log([serverData, ...playerData.reverse()]);
        setSessionStats(sessionData);
      });
  }, [props, selectedTank]);

  useEffect(() => {
    if (selectedTank) fetchStats();
  }, [selectedTank, fetchStats]);

  useEffect(() => {
    async function fetchLeaderboards() {
      const leaderboardData = await fetch(
        `${backend}/api/tankpage/${selectedTank.id}/${props.server}/${leaderBoardType}/0`
      ).then((d) => d.json());
      leaderboardData.leaderboard.forEach((player) => {
        player.url = `/stats/${serverConv[props.server]}/${player.username}=${player.player_id}`;
      });
      setLeaderboardStats(leaderboardData);
    }
    if (selectedTank) fetchLeaderboards();
  }, [props, selectedTank, leaderBoardType]);

  const statsSection = (
    <>
      {selectedTank ? (
        <>
          <SectionHeader>Recent Stats</SectionHeader>
          <TankRecentStats data={recentStats} />
          {sessionStats?.day.length > 0 && sessionStats?.week.length > 0 && sessionStats?.month.length > 0 ? (
            <>
              <SectionHeader>Stats Graph</SectionHeader>
              <TankSessionsGraph sessionStats={sessionStats} />
              <SectionHeader>Period Stats</SectionHeader>
              <TankSessionsTabbar sessionStats={sessionStats} />
            </>
          ) : null}
        </>
      ) : null}
    </>
  );

  const awardsSection = (
    <>
      {selectedTank ? (
        <>
          <SectionHeader>Awards</SectionHeader>
          <Awards awards={selectedTank.awards} />
        </>
      ) : null}
    </>
  );

  const leaderboardsSection = (
    <>
      {selectedTank ? (
        <>
          <SectionHeader>{serverConv[props.server]} Top Players | 60 Days | Min 25 Battles </SectionHeader>
          <TankLeaderboards setType={setLeaderBoardType} type={leaderBoardType} data={leaderboardStats} />
        </>
      ) : null}
    </>
  );

  const tabs = [
    {
      label: "TANK STATS",
      value: "main",
      body: statsSection,
    },
    {
      label: "AWARDS",
      value: "awards",
      body: awardsSection,
    },
    {
      label: "LEADERBOARDS",
      value: "leaderboards",
      body: leaderboardsSection,
    },
  ];

  const ModalTabs = (
    <>
      <CustomTabsV2
        value={page}
        indicatorColor="primary"
        styles={{ backgroundColor: "rgb(76, 90, 166)" }}
        onChange={(e, val) => setPage(val)}
        aria-label="tabs"
        variant="scrollable"
        scrollButtons="auto"
      >
        {tabs.map(({ label, icon, value }, i) =>
          // prettier-ignore
          <CustomTabV2 label={<div>{label} {icon}</div>} value={value} key={i} />
        )}
      </CustomTabsV2>
      {tabs.map(({ body, value }, i) => (
        <TabPanel value={page} index={value} key={i}>
          {body}
        </TabPanel>
      ))}
    </>
  );

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
                  {nationAdjConv.formatString(nationAdjConv[selectedTank.nation], classDescConv[selectedTank.class])}
                </div>
              </TankInfo>
              <img style={{ width: "220px" }} src={selectedTank.bigImage} alt={selectedTank.name} />
              <MoEMasteryCard moe={selectedTank.moe} mastery={selectedTank.mastery} nation={selectedTank.nation} />
            </TankInfoGrid>
            <TankOverallStats data={selectedTank} />
            {ModalTabs}
          </ModalInner>
          <Close onClick={() => setModalOpen(false)} size={40} icon={ic_close} />
        </Scrollbar>
      ) : null}
    </Modal>
  );
}
