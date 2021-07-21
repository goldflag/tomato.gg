import React from "react";
import { Loader } from "Components";
import { tableHeaders } from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";
import { TableTemplate } from "Components";

const cols = [
  {
    Header: "Period",
    accessor: "period",
  },
  {
    Header: Capital(commonStrings.battles),
    accessor: "battles",
    Cell: ({ value }) => (value ? value : 0),
  },
  {
    Header: commonStrings.wn8,
    accessor: "wn8",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: Capital(commonStrings.wr),
    accessor: "winrate",
    Cell: ({ value }) => (value ? `${value}%` : "-"),
  },
  {
    Header: commonStrings.dpg,
    accessor: "dpg",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: commonStrings.frags,
    accessor: "frags",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: commonStrings.kd,
    accessor: "kd",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: commonStrings.dmgRatio,
    accessor: "dmg_ratio",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: tableHeaders.spots,
    accessor: "spots",
    Cell: ({ value }) => (value ? value : "-"),
  },
  {
    Header: tableHeaders.survival,
    accessor: "survival",
    Cell: ({ value }) => (value ? `${value}%` : "-"),
  },
];

export default function TankRecentStats({ data }) {
  return (
    <>
      {data ? (
        <div style={{ marginTop: "1rem" }}>
          <TableTemplate data={data} cols={cols} numRows={8} />
        </div>
      ) : (
        <Loader bottom={19} top={19} />
      )}
    </>
  );
}
