import React, { useState, useContext } from "react";
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
    const [name, setName] = useState("");
    const [mode, setMode] = useState("Player");

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
        <div className="topbar">
            <div className="smallMenu">
                <SmallMenu />
            </div>
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
    );
});
