import React, { useState, useEffect } from "react";
import { TabPanel, CustomTabs, CustomTab } from "../../tabs/customTabs";
import Grid from "@material-ui/core/Grid";
import { serverConv } from "Data/conversions";
import clonedeep from "lodash.clonedeep";
import RSC from "react-scrollbars-custom";

const APIKey = process.env.REACT_APP_API_KEY;

const roleConv = {
    intelligence_officer: "Intelligence Officer",
    personnel_officer: "Personnel Officer",
    quartermaster: "Quartermaster",
    executive_officer: "Executive Officer",
    recruit: "Recruit",
    private: "Private",
    commander: "Commander",
    reservist: "Reservist",
    combat_officer: "Combat Officer",
    junior_officer: "Junior Officer",
    recruitment_officer: "Recruitment Officer",
};

export default function ClanHistory(props) {
    const [value, setValue] = useState(0);
    const [clanList, setClanList] = useState("");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    let clanInfo = <></>;
    if (clanList) {
        clanInfo = Unit();
    }
    if (props.data === "NO CLAN HISTORY") {
        clanInfo = <div>This player has no clan data</div>;
    }

    // Runs once when component mounts
    useEffect(() => {
        function getClanData() {
            const windowUrl = window.location.pathname;
            const urlParams = windowUrl.substring(7).split("/");
            const server = serverConv[urlParams[0]];
            let URL = `https://api.worldoftanks.${server}/wot/clans/info/?application_id=${APIKey}&clan_id=`;

            const clonedData = clonedeep(props.data);
            if (clonedData !== "NO CLAN HISTORY") {
                clonedData.forEach((row) => {
                    URL += `${row.clan_id}%2C+`;
                });
            }

            URL = URL.slice(0, -4);

            fetch(URL)
                .then((data) => data.json())
                .then((clanData) => {
                    // let tempList = props.data;
                    clonedData.forEach((row) => {
                        row["clan_name"] = clanData.data[row.clan_id].tag;
                        row["color"] = clanData.data[row.clan_id].color;
                        if (clanData.data[row.clan_id].emblems != null) {
                            row["icon"] = clanData.data[row.clan_id].emblems.x64.wot;
                        }
                    });
                    if (props.currentClan !== "NO CLAN") {
                        let currentClan = {
                            clan_name: props.currentClan.clan.tag,
                            color: props.currentClan.clan.color,
                            joined_at: props.currentClan.joined_at,
                            icon: props.currentClan.clan.emblems.x64.wot,
                            left_at: props.currentClan.clan.color,
                            role: props.currentClan.role,
                        };
                        clonedData.unshift(currentClan);
                    }
                    setClanList(clonedData);
                });
        }
        if (props.data !== "NO CLAN HISTORY") {
            getClanData();
        }
    }, [props.currentClan, props.data]);

    function Unit() {
        return clanList.map((row, i) => {
            if (row.clan_name) {
                let date = new Date(row.joined_at * 1000);
                const joinDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                date = new Date(row.left_at * 1000);
                let leftDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
                if (isNaN(date.getMonth())) leftDate = `Current`;
                return (
                    <Grid item xs={6} key={i}>
                        <Grid container spacing={1}>
                            <Grid item xs={5}>
                                <div
                                    style={{
                                        margin: "auto",
                                        width: "80%",
                                        fontSize: "16px",
                                        color: row.color,
                                    }}
                                >
                                    <span
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img src={row.icon} alt={row.clan_name} />
                                    </span>
                                    <span
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {`[${row.clan_name}]`}
                                    </span>
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "left",
                                        fontWeight: "500",
                                    }}
                                >
                                    <span
                                        style={{
                                            textAlign: "left",
                                            fontSize: "14px",
                                            color: "rgb(220, 220, 220)",
                                        }}
                                    >
                                        <span
                                            style={{
                                                textAlign: "left",
                                                fontSize: "13px",
                                                fontWeight: "400",
                                                color: "rgb(125, 125, 125)",
                                            }}
                                        >
                                            Joined:
                                        </span>
                                        <br />
                                        {joinDate}
                                        <br />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                fontSize: "13px",
                                                fontWeight: "400",
                                                color: "rgb(125, 125, 125)",
                                            }}
                                        >
                                            Left:
                                        </span>
                                        <br />
                                        {leftDate}
                                        <br />
                                        <span
                                            style={{
                                                textAlign: "left",
                                                fontSize: "13px",
                                                fontWeight: "400",
                                                color: "rgb(125, 125, 125)",
                                            }}
                                        >
                                            Position:
                                        </span>
                                        <br />
                                        {roleConv[row.role]}
                                    </span>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                );
            }
            return undefined;
        });
    }

    return (
        <RSC id="RSC-Example" noScrollX={true}>
            <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                <CustomTab label="CLAN HISTORY" />
            </CustomTabs>
            <TabPanel value={value} index={0}>
                <div
                    style={{
                        padding: "10px 0px 0px 10px",
                        color: "rgb(220, 220, 220)"
                    }}
                >
                    <Grid container spacing={1}>
                        {clanInfo}
                    </Grid>
                </div>
            </TabPanel>
        </RSC>
    );
}
