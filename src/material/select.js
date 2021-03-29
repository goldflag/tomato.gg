// NPM
import React from "react";
// LOCAL
import { commonStrings, UPPER } from "Data/localizations";
import { SelectComponent } from "Components/customSelect";
import { serverConv } from "Data/conversions";

const servers = [
    ["com", "NA"],
    ["eu", "EU"],
    ["asia", "ASIA"],
];

const modes = [
    ["player", UPPER(commonStrings.player)],
    ["clan", UPPER(commonStrings.clan)],
];

export default function SelectQuery({ server, setServer, mode, setMode }) {
    return (
        <>
            <SelectComponent
                value={server}
                name={serverConv[server]}
                setValue={setServer}
                options={servers}
                width={40}
                background={"rgba(100, 100, 200, 0.3)"}
                border={"rgba(255, 255, 255, 1)"}
                dropdownSelectColor={"rgb(222, 13, 93)"}
            />
            <div style={{ width: "10px" }} />
            <SelectComponent
                value={mode}
                name={UPPER(commonStrings[mode])}
                setValue={setMode}
                options={modes}
                width={80}
                background={"rgba(100, 100, 200, 0.3)"}
                border={"rgba(255, 255, 255, 1)"}
            />
        </>
    );
}
