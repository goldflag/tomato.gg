// NPM
import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import LocalizedStrings from "react-localization";

// LOCAL
import { ServerContext, SearchHistoryContext } from "Context";
import { serverConv } from "Data/conversions";
import MobileMenu from "./mobileMenu";
import SearchHistory from "./searchHistory";
import ServerSelectButtons from "./serverSelect";
import SearchBar from "./searchBar";
import Discord from "./discord";

const APIKey = process.env.REACT_APP_API_KEY;

const StyledTopbar = styled.div`
    width: 100%;
    height: 4rem;
    background-color: rgba(101, 106, 173, 0.692);
    border-bottom: 1px solid rgb(100, 95, 129);
    font-family: "Roboto";
    color: white;
    display: flex;
    align-items: center;
`;

export const strings = new LocalizedStrings({
    en: {
        server: "select default server",
    },
    cs: {
        server: "vyberte výchozí server",
    },
    es: {
        server: "seleccionar servidor predeterminado",
    },
    fr: {
        server: "Sélectionnez un serveur par défaut",
    },
    tr: {
        server: "Varsayılan sunucuyu seç",
    },
    pl: {
        server: "Wybierz domyślny serwer",
    },
    ru: {
        server: "Выберите свой сервер",
    },
});

export default withRouter(function Topbar(props) {
    const { server, toggleServer } = useContext(ServerContext);
    const { addToHistory } = useContext(SearchHistoryContext);
    const [name, setName] = useState("");
    const [mode, setMode] = useState("Player");

    const searchId = (e) => {
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
        <StyledTopbar>
            <MobileMenu />
            <SearchHistory />
            <ServerSelectButtons />
            <SearchBar
                onSubmit={searchId}
                setName={setName}
                setServer={toggleServer}
                server={server}
                setMode={setMode}
                mode={mode}
            />
            <Discord />
        </StyledTopbar>
    );
});
