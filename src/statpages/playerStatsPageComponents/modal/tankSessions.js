// NPM
import React from "react";

// LOCAL
import { tableHeaders } from "Components/tableComponents";
import { Capital, commonStrings } from "Data/localizations";
import { TableTemplate } from "Components";

const cols = [
    {
        Header: "Time",
        accessor: "timestamp",
        Cell: ({ value }) => value.slice(0, 10),
    },
    {
        Header: Capital(commonStrings.battles),
        accessor: "battles",
    },
    {
        Header: commonStrings.wn8,
        accessor: "wn8",
    },
    {
        Header: Capital(commonStrings.wr),
        accessor: "winrate",
        Cell: ({ value }) => `${value}%`,
    },
    {
        Header: commonStrings.dpg,
        accessor: "dpg",
    },
    {
        Header: commonStrings.frags,
        accessor: "frags",
    },
    {
        Header: commonStrings.kd,
        accessor: "kd",
        Cell: ({ value }) => value ? value : "Inf",
    },
    {
        Header: commonStrings.dmgRatio,
        accessor: "dmgratio",
        Cell: ({ value }) => value ? value : "Inf",
    },
    {
        Header: tableHeaders.spots,
        accessor: "spots",
    },
    {
        Header: tableHeaders.survival,
        accessor: "survived",
        Cell: ({ value }) => `${value}%`,
    },
];

function TankSessions({ data }) {
    return <TableTemplate data={data} initialSortCol={"timestamp"} cols={cols}/>;
}

export default TankSessions;
