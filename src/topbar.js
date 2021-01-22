import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import "./css/topbar.css";
import SmallSearchBar from "./material/smallSearchBar";
import DiscordLogo from "./assets/Discord.svg";
import SmallMenu from "./material/smallMenu";
import { withRouter } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext, ServerContext, SearchHistoryContext } from "./context";
import serverConv from "./data/serverConv";

const APIKey = process.env.REACT_APP_API_KEY;

export default withRouter(function Topbar(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { server, toggleServer } = useContext(ServerContext);
    const { addToHistory } = useContext(SearchHistoryContext);
    const [ name, setName ] = useState("");
    const [ mode, setMode ] = useState("Player");

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
            /* position: fixed; */
            margin-left: 0em;
        }
        
        .smallMenu {
            display: none;
        }
        
        .field {
            padding-top: 1.1rem;
            /* margin: 0 auto; */
            right: 100px;
            position: absolute;
        }
        
        .discord {
            padding-top: 1rem;
            /* margin: 0 auto; */
            right: 58px;
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
        
        // *:focus {
        //     outline: none;
        // }

        .serverSelectButtons {
            display: flex;
            margin-top: 0.4rem;
            /* margin: 0 auto; */
            right: 440px;
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
        }
    `;

    const searchId = async (e) => {
        e.preventDefault();
        if (!name) return;
        const url = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                data.status === "error" || data.meta.count === 0
                    ? "FAIL"
                    : data.data[0].account_id
            )
            .then((playerID) => {
                if (playerID !== "FAIL") {
                    addToHistory(name, playerID, server);
                }
                props.history.push(
                    `/stats/${serverConv[server]}/${name}=${playerID}`
                );
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
                        <div className="serverSelectButtons" style={{ padding: '10px', width: '100px', height: '20px' }}>
                            <ButtonGroup variant="text" aria-label="text primary button group">
                                <Button 
                                    style={{ backgroundColor: server === "com" ? 'rgb(222, 13, 93)' : 'rgb(37, 46, 105)' }} 
                                    onClick={() => toggleServer('com')}
                                    className="selectButton"
                                >
                                    NA
                                </Button>
                                <Button 
                                    style={{ borderLeft: '1px solid rgb(30, 30, 30)', backgroundColor: server === "eu" ? 'rgb(222, 13, 93)' : 'rgb(37, 46, 105)' }} 
                                    onClick={() => toggleServer('eu')}
                                    className="selectButton"
                                >
                                    EU
                                </Button>
                                <Button 
                                    style={{ borderLeft: '1px solid rgb(30, 30, 30)', backgroundColor: server === "asia" ? 'rgb(222, 13, 93)' : 'rgb(37, 46, 105)' }} 
                                    onClick={() => toggleServer('asia')}
                                    className="selectButton"
                                >
                                    ASIA
                                </Button>
                            </ButtonGroup>
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
                    <div className="light">
                        <DarkModeToggle
                            onChange={toggleTheme}
                            checked={theme === "light" ? false : true}
                            size={40}
                        />
                    </div>
                    <div className="discord">
                        <a target="blank" href="https://discord.gg/qA2bV7K">
                            <img
                                src={DiscordLogo}
                                width="33"
                                height="33"
                                alt="discordicon"
                            />
                        </a>
                    </div>
                </div>
            {/* </Styles> */}
        </div>
    );
});
