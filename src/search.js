// NPM
import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";

// LOCAL
import "CSS/search.css";
import SearchBar from "Material/searchBar";
import TomatoLogo from "Assets/tomato.png";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { serverConv } from "Data/conversions";

const APIKey = process.env.REACT_APP_API_KEY;

export default withRouter(function Search(props) {
    const { server, toggleServer } = useContext(ServerContext);
    const { searchmode, toggleSearchmode } = useContext(SearchmodeContext);

    const { addToHistory } = useContext(SearchHistoryContext);
    const [name, setName] = useState("");
    const [mode, setMode] = useState("Player");

    useEffect(() => {}, []);

    const searchId = async (e) => {
        e.preventDefault();
        const playerUrl = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;
        const clanUrl = `https://api.worldoftanks.${server}/wot/clans/list/?application_id=${APIKey}&search=${name}`;

        if (searchmode === "player") {
            fetch(playerUrl)
            .then((res) => res.json())
            .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].account_id))
            .then((playerID) => {
                if (playerID !== "FAIL") {
                    addToHistory(name, playerID, server);
                }
                props.history.push(`/stats/${serverConv[server]}/${name}=${playerID}`);
            })
            .catch(console.error);
        }
        else {
            fetch(clanUrl)
            .then((res) => res.json())
            .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].clan_id))
            .then((clanID) => {
                console.log(clanID)
                props.history.push(`/clan-stats/${serverConv[server]}/${clanID}`);
            })
            .catch(console.error);
        }
    };

    return (
        <div>
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
                        }}
                    />
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
            </div>
            <div className={"leaderboard"}>{/* <LeaderboardGrid /> */}</div>
        </div>
    );
});
