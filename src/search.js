// NPM
import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

// LOCAL
import "CSS/search.css";
import SearchBar from "Material/searchBar";
import TomatoLogo from "Assets/tomato.png";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { serverConv } from "Data/conversions";

const APIKey = process.env.REACT_APP_API_KEY;

export default withRouter(function Search(props) {
    const { server, setServer } = useContext(ServerContext);
    const { mode, setMode } = useContext(SearchmodeContext);

    const { addToHistory } = useContext(SearchHistoryContext);
    const [ name, setName ] = useState("");

    const searchId = async (e) => {
        e.preventDefault();
        const playerUrl = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;
        const clanUrl = `https://api.worldoftanks.${server}/wot/clans/list/?application_id=${APIKey}&search=${name}`;

        if (mode === "player") {
            fetch(playerUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].account_id))
                .then((playerID) => {
                    if (playerID !== "FAIL") {
                        addToHistory(name, playerID, server, false);
                    }
                    props.history.push(`/stats/${serverConv[server]}/${name}=${playerID}`);
                })
                .catch(console.error);
        } else {
            fetch(clanUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].clan_id))
                .then((clanID) => {
                    if (clanID !== "FAIL") {
                        addToHistory(name, clanID, server, false);
                    }
                    props.history.push(`/clan-stats/${serverConv[server]}/${name.toUpperCase()}=${clanID}`);
                })
                .catch(console.error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Tomato.gg</title>
            </Helmet>
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
                            name={name}
                            setName={setName}
                            setServer={setServer}
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
