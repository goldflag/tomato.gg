import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./css/search.css";
import SearchBar from "./material/searchBar";
import TomatoLogo from "./assets/tomato.png";
import { ThemeContext, ServerContext, SearchHistoryContext } from "./context";
import LeaderboardGrid from "./statpages/searchComponents/leaderboardGrid";
import serverConv from "./data/serverConv";

const APIKey = process.env.REACT_APP_API_KEY;

export default withRouter(function Search(props) {
    const { theme } = useContext(ThemeContext);
    const { server, toggleServer } = useContext(ServerContext);
    const { addToHistory } = useContext(SearchHistoryContext);
    const [name, setName] = useState("");
    const [mode, setMode] = useState("Player");

    useEffect(() => {}, []);

    const searchId = async (e) => {
        e.preventDefault();
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
        <div className={"backbackground"}>
            <div className={theme === "dark" ? "backgrounddark" : "background"}>
                <div className="center">
                    <div>
                        <img
                            src={TomatoLogo}
                            alt="logo"
                            style={{
                                height: "auto",
                                width: "80%",
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "center",
                                padding: "0rem",
                            }}
                        />
                    </div>
                    <form onSubmit={searchId}>
                        <SearchBar
                            setName={setName}
                            setServer={toggleServer}
                            server={server}
                            setMode={setMode}
                            mode={mode}
                        />
                    </form>
                </div>
                <div className={"leaderboard"}>
                    {/* <LeaderboardGrid /> */}
                </div>
            </div>
        </div>
    );
});
