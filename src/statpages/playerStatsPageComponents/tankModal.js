import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { ic_close } from "react-icons-kit/md/ic_close";
import { nationAdjConv, classDescConv, tierConv } from "Data/conversions";
import TankSessions from "./modal/tankSessions";
import Awards from "./modal/awards";
import { Loader } from "Components";

const backend = process.env.REACT_APP_BACKEND;

const Modal = styled.div`
    position: fixed;
    top: 5rem;
    bottom: 1rem;
    right: 1rem;
    transition-duration: 1s;
    width: ${({ selectedTank }) => (selectedTank ? 750 : 0)}px;
    background: rgba(40, 40, 50, 0.8);
    backdrop-filter: blur(5px);
    box-shadow: 0px 0px 10px rgb(10, 10, 10);
`;

const ModalInner = styled.div`
    padding: 1rem;
`;

const TankInfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 6fr;
`;

// const TankImage = styled.image``

const TankInfo = styled.div`
    color: ${({isPrem}) => isPrem ? "#FEE354" : "white"};
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
    padding: 1rem;
    background-color: rgba(100, 100, 150, 0.5);
    border-radius: 5px;
    .label {
      font-size: 1rem;
    }
    .value {
      font-size: 2rem;

    }
`;

const CardGrid = styled.div`
    font-family: Roboto Mono;
    margin: 0.5rem 0rem;
    grid-gap: 0.5rem 0.5rem;
    display: grid;
    grid-template-columns: repeat(${({cols}) => cols}, 1fr);
`;

function StatsCard({label, value}) {
  return (
    <Card>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
   </Card>
  );
}

function TankOverallStats({data}) {
  const stats = [
    {
      label: "WN8",
      value: data.wn8,
    },
    {
      label: "Winrate",
      value: data.winrate,
    },
    {
      label: "DPG",
      value: data.dpg,
    },
    {
      label: "DPG",
      value: data.dpg,
    },
    {
      label: "DPG",
      value: data.dpg,
    },
  ];
  return (
    <>
    <CardGrid cols={5}>
      {stats.map((props) => <StatsCard {...props}/>)}
    </CardGrid>
    <CardGrid cols={6}>
      {stats.map((props) => <StatsCard {...props}/>)}
    </CardGrid>
    </>
  );
}

export default function TankModal({ props, selectedTank, setSelectedTank }) {
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
        <Modal selectedTank={selectedTank}>
            {selectedTank ? (
                <ModalInner>
                    <TankInfoGrid>
                        <Close onClick={() => setSelectedTank(null)} size={40} icon={ic_close} />
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
                    <Awards awards={selectedTank.awards}/>
                    {sessionStats ? <TankSessions data={sessionStats} /> : <Loader color={"rgba(40, 40, 70, 0.5)"} bottom={50} top={20} />}
                </ModalInner>
            ) : null}
        </Modal>
    );
}
