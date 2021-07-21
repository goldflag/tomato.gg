// NPM
import React from "react";
import { Link } from "react-router-dom";

// Local
import { TableTemplate } from "Components";
import { tableHeaders } from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";
import { SelectButton, SelectButtonContainer } from "Components/buttons";

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
  {
    Header: tableHeaders.survival,
    accessor: "survived",
    disableFilters: true,
    Cell: ({ value }) => `${value}%`,
  },
];

const states = ["dpg", "wn8", "frags", "winrate"];
const radiuses = ["20px 0 0 20px", "0", "0", "0 20px 20px 0"];

export default function TankLeaderboards({ data, type, setType }) {
  return (
    <>
      {data ?
        <>
          <SelectButtonContainer>
            {states.map((state, i) => (
              <SelectButton key={i} radius={radiuses[i]} selected={type === state} onClick={() => setType(state)}>
                {state}
              </SelectButton>
            ))}
          </SelectButtonContainer>
          <TableTemplate data={data.leaderboard} initialSortCol={type} cols={cols} numRows={10} />
        </> : null}
    </>
  );
}