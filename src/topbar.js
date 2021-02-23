import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "CSS/topbar.css";
import SmallSearchBar from "Material/smallSearchBar";
import DiscordLogo from "Assets/Discord.svg";
import SmallMenu from "Material/smallMenu";
import { withRouter } from "react-router-dom";
import { ServerContext, SearchHistoryContext } from "Context";
import { serverConv } from "Data/conversions";
import { IconButton, Chip, Avatar } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";

const APIKey = process.env.REACT_APP_API_KEY;

const Styles = styled.div`
    .topbar {
        font-family: "Roboto";
        font-size: 12;
        color: white;
        background-color: rgba(101, 106, 173, 0.692);
        padding: 0px 10px 10px 0px;
        display: flex;
        float: left;
        width: 100%;
        height: 4rem;
        border-bottom: 1px solid rgb(100, 95, 129);
        margin-left: 0em;
    }

    .smallMenu {
        display: none;
    }

    .recent {
        margin-top: 0.4rem;
        left: 10px;
        position: absolute;
    }

    .recent-chip {
        color: white;
        border-color: white;
        svg {
            color: rgba(255, 255, 255, 0.86);
        }
        svg:hover {
            color: white;
        }
    }

    .field {
        padding-top: 1.1rem;
        right: 30px;
        position: absolute;
    }

    .discord {
        padding-top: 1rem;
        right: 10px;
        position: absolute;
    }

    .discord:hover {
        opacity: 0.5;
    }

    .light {
        padding-top: 1rem;
        padding: 22px 0 0 0;
        right: 10px;
        position: absolute;
    }

    .serverSelectButtons {
        margin-top: 0.4rem;
        right: 395px;
        position: absolute;
    }

    .selectButton {
        font-family: "Segoe UI";
        font-size: 0.9rem;
        font-weight: 600;
        color: rgb(210, 210, 210);
        // background-color: rgb(71, 99, 214);
        padding: 1rem 0rem;
        min-width: 55px;
        border-width: 0px;
    }

    .selectButton:hover {
        color: rgb(255, 255, 255);
    }

    @media screen and (max-width: 1000px) {
        .smallMenu {
            display: block;
        }
        .discord {
            display: none;
        }
        .field {
            right: 59px;
        }
        .serverSelectButtons {
            display: none;
        }
        .recent {
            display: none;
        }
    }
`;
export default withRouter(function Topbar(props) {
    const { server, toggleServer } = useContext(ServerContext);
    const { history, addToHistory, removeFromHistory, clearHistory } = useContext(SearchHistoryContext);
    const [name, setName] = useState("");
    const [mode, setMode] = useState("Player");

    const redirectToPlayerStatsPage = (playerName, playerID, playerServer) => {
        toggleServer(playerServer);
        props.history.push(`/stats/${serverConv[playerServer]}/${playerName}=${playerID}`);
    };

    const searchId = async (e) => {
        e.preventDefault();
        if (!name) return;
        const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].account_id))
            .then((playerID) => {
                if (playerID !== "FAIL") {
                    addToHistory(name, playerID, server);
                }
                props.history.push(`/stats/${serverConv[server]}/${name}=${playerID}`);
            })
            .catch(console.error);
    };

    return (
        <div>
            {/* <Styles> */}
            <div className="topbar">
                <div className="smallMenu">
                    <SmallMenu />
                </div>
                <Styles>
                    <div className="recent">
                        {history
                            .slice(0, Math.min(history.length, 5)) // No more than 5 recent searches
                            .map(({ name, id, server }) => (
                                <Chip
                                    key={name}
                                    variant="outlined"
                                    className="recent-chip"
                                    avatar={
                                        <Avatar
                                            alt={server}
                                            src={require(`Assets/flagIcons/${server}mini.png`)}
                                            style={{ maxHeight: "21px" }}
                                        />
                                    }
                                    onClick={() => redirectToPlayerStatsPage(name, id, server)}
                                    onDelete={() => removeFromHistory(id)}
                                    label={name}
                                    style={{
                                        // backgroundColor: "rgb(219, 55, 96)",
                                        margin: "10px 5px 5px 5px",
                                    }}
                                />
                            ))}
                        {history.length ? (
                            <IconButton
                                aria-label="clear history"
                                size="small"
                                onClick={clearHistory}
                                style={{
                                    marginTop: "5px",
                                    color: "white",
                                }}
                            >
                                <DeleteOutline />
                            </IconButton>
                        ) : null}
                    </div>
                    <div
                        className="serverSelectButtons"
                        style={{
                            padding: "10px",
                            width: "100px",
                            height: "20px",
                        }}
                    >
                        <ButtonGroup variant="text" aria-label="text primary button group">
                            <Button
                                style={{
                                    backgroundColor: server === "com" ? "rgb(222, 13, 93)" : "rgb(37, 46, 105)",
                                }}
                                onClick={() => toggleServer("com")}
                                className="selectButton"
                            >
                                NA
                            </Button>
                            <Button
                                style={{
                                    borderLeft: "1px solid rgb(30, 30, 30)",
                                    backgroundColor: server === "eu" ? "rgb(222, 13, 93)" : "rgb(37, 46, 105)",
                                }}
                                onClick={() => toggleServer("eu")}
                                className="selectButton"
                            >
                                EU
                            </Button>
                            <Button
                                style={{
                                    borderLeft: "1px solid rgb(30, 30, 30)",
                                    backgroundColor: server === "asia" ? "rgb(222, 13, 93)" : "rgb(37, 46, 105)",
                                }}
                                onClick={() => toggleServer("asia")}
                                className="selectButton"
                            >
                                ASIA
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="discord">
                        <a target="blank" href="https://discord.gg/qA2bV7K">
                            <img src={DiscordLogo} width="33" height="33" alt="discordicon" />
                        </a>
                    </div>
                </Styles>
                <div className="field">
                    <form onSubmit={searchId}>
                        <SmallSearchBar
                            setName={setName}
                            setServer={toggleServer}
                            server={server}
                            setMode={setMode}
                            mode={mode}
                        />
                    </form>
                </div>
            </div>
            {/* </Styles> */}
        </div>
    );
});
