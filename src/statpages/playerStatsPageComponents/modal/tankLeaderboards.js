// NPM
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Local
import { TableTemplate } from "Components";
import { tableHeaders } from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";
import { SelectButton } from "Components/buttons";
import { serverConv } from "Data/conversions";

const backend = process.env.REACT_APP_BACKEND;

const cols = [
  {
    Header: Capital(commonStrings.rank),
    accessor: "rank",
    disableFilters: true,
  },
  {
    Header: tableHeaders.username,
    accessor: "username",
    disableFilters: true,
    Cell: ({ row: { original, values } }) => <Link to={original.url}> {values.username}</Link>,
  },
  {
    Header: Capital(commonStrings.battles),
    accessor: "battles",
    disableFilters: true,
  },
  {
    Header: commonStrings.wn8,
    accessor: "wn8",
    disableFilters: true,
  },
  {
    Header: Capital(commonStrings.longWR),
    accessor: "winrate",
    disableFilters: true,
    Cell: ({ value }) => `${value}%`,
  },
  {
    Header: commonStrings.dpg,
    accessor: "dpg",
    disableFilters: true,
  },
  {
    Header: Capital(commonStrings.frags),
    accessor: "frags",
    disableFilters: true,
  },
  {
    Header: commonStrings.kd,
    accessor: "kd",
    disableFilters: true,
  },
  // {
  //     Header: tableHeaders.spots,
  //     accessor: "spots",
  //     disableFilters: true,
  // },
  {
    Header: tableHeaders.survival,
    accessor: "survived",
    disableFilters: true,
    Cell: ({ value }) => `${value}%`,
  },
];

const states = ["dpg", "wn8", "frags", "winrate"];
const radiuses = ["20px 0 0 20px", "0", "0", "0 20px 20px 0"];

export default function TankLeaderboards({ id, server }) {

  const [data, setData] = useState();
  const [type, setType] = useState("dpg");

  useEffect(() => {
    fetch(`${backend}/api/tankpage/${id}/${server}/${type}/0`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.leaderboard)
        data.leaderboard.forEach((player) => {
          player.url = `/stats/${serverConv[server]}/${player.username}=${player.player_id}`;
        });
        setData(data);
      });
  }, [server, type, id]);

  return (
    <>
      {data ?
        <>
          {states.map((state, i) => (
            <SelectButton key={i} radius={radiuses[i]} selected={type === state} onClick={() => setType(state)}>
              {state}
            </SelectButton>
          ))}
          <div style={{ height: "1rem" }} />
          <TableTemplate data={data.leaderboard} initialSortCol={type} cols={cols} type={type} numRows={10} />
        </> : null}
    </>
  );
}