// NPM
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalizedStrings from "react-localization";

// LOCAL
import MobileSelect from "./mobileSelect";
import { serverConv } from "Data/conversions";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { useHistory } from "react-router-dom";

const APIKey = process.env.REACT_APP_API_KEY;

const strings = new LocalizedStrings({
    en: {
        placeholder: "Enter a Username",
        clanPlaceholder: "Enter a Clan name",
        ariaLabel: "search for a player",
        clanAriaLabel: "search for a clan",
        searchAriaLabel: "search",
    },
    cs: {
        placeholder: "Vložte přezdívku",
        ariaLabel: "Hledejte hráče",
        searchAriaLabel: "hledat",
    },
    es: {
        placeholder: "Escribe un nombre de usuario",
        ariaLabel: "buscar un jugador",
        searchAriaLabel: "buscar",
    },
    fr: {
        placeholder: "Entrez le nom d'un joueur",
        ariaLabel: "recherchez un joueur",
        searchAriaLabel: "recherche",
    },
    tr: {
        placeholder: "Kullanıcı adı girin",
        ariaLabel: "oyuncu ara",
        searchAriaLabel: "arama",
    },
    zh: {
        placeholder: "輸入使用者名稱",
        ariaLabel: "搜尋玩家",
        searchAriaLabel: "搜尋",
    },
    pl: {
        placeholder: "Wpisz nick",
        ariaLabel: "Wyszukaj gracza",
        searchAriaLabel: "Szukaj",
    },
});

const useStyles = makeStyles((t) => ({
    root: {
        marginLeft: "0.5rem",
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "250px",
        height: "30px",
        borderRadius: 15,
        backgroundColor: "rgba(40, 40, 60, 0.8)",
    },
    input: {
        marginLeft: t.spacing(1),
        flex: 1,
        fontSize: 12,
        color: "white",
    },
    iconButton: {
        padding: 10,
        color: "white",
    },
}));

function SearchBar() {
    const history = useHistory();
    const { addToHistory } = useContext(SearchHistoryContext);
    const { mode, setMode } = useContext(SearchmodeContext);
    const { server, setServer } = useContext(ServerContext);
    const [name, setName] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) return;

        if (mode === "player") {
            const playerUrl = `https://api.worldoftanks.${server}/wot/account/list/?language=en&application_id=${APIKey}&search=${name}`;
            fetch(playerUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].account_id))
                .then((playerID) => {
                    if (playerID !== "FAIL") {
                        addToHistory(name, playerID, server, false);
                    }
                    history.push(`/stats/${serverConv[server]}/${name}=${playerID}`);
                })
                .catch(console.error);
        } else {
            const clanUrl = `https://api.worldoftanks.${server}/wot/clans/list/?application_id=${APIKey}&search=${name}`;
            fetch(clanUrl)
                .then((res) => res.json())
                .then((data) => (data.status === "error" || data.meta.count === 0 ? "FAIL" : data.data[0].clan_id))
                .then((clanID) => {
                    if (clanID !== "FAIL") {
                        addToHistory(name, clanID, server, true);
                    }
                    history.push(`/clan-stats/${serverConv[server]}/${clanID}`);
                })
                .catch(console.error);
        }
    };

    const classes = useStyles();

    return (
        <form onSubmit={onSubmit}>
            <Paper elevation={0} className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={mode === "player" ? strings.placeholder : strings.clanPlaceholder}
                    inputProps={{ "aria-label": strings.ariaLabel }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <MobileSelect setServer={setServer} server={server} setMode={setMode} mode={mode} />
                <IconButton type="submit" className={classes.iconButton} aria-label={strings.searchAriaLabel}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </form>
    );
}

export default SearchBar;
