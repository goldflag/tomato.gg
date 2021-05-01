// NPM
import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalizedStrings from "Functions/localizedStrings";
import styled from "styled-components";

// LOCAL
import MobileSelect from "./mobileSelect";
import { serverConv } from "Data/conversions";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { useHistory } from "react-router-dom";

const APIKey = process.env.REACT_APP_API_KEY;

const strings = LocalizedStrings({
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
        clanPlaceholder: "Vložte název klanu",
        clanAriaLabel: "Hledejte klan",
        searchAriaLabel: "hledat",
    },
    de: {
        placeholder: "Gib einen Spielernamen ein",
        ariaLabel: "Suche nach einem Spieler",
        clanPlaceholder: "Gib einen Clannamen ein",
        clanAriaLabel: "suche nach einem Clan",
        searchAriaLabel: "Suche",
    },
    es: {
        placeholder: "Escribe un nombre de usuario",
        ariaLabel: "buscar un jugador",
        clanPlaceholder: "Escribe un nombre de Clan",
        clanAriaLabel: "buscar un clan",
        searchAriaLabel: "buscar",
    },
    fr: {
        placeholder: "Entrez le nom d'un joueur",
        ariaLabel: "recherchez un joueur",
        clanPlaceholder: "Entrez un nom de Clan",
        clanAriaLabel: "recherche pour un clan",
        searchAriaLabel: "recherche",
    },
    hr: {
        placeholder: "Unesite korisničko ime",
        ariaLabel: "pretraži igrača",
        clanPlaceholder: "Unesite ime Klana",
        clanAriaLabel: "pretraži klan",
        searchAriaLabel: "traži",
    },
    ko: {
        placeholder: "유저네임을 입력하세요.",
        ariaLabel: "유저검색",
        clanPlaceholder: "클랜이름을 입력해주세요",
        clanAriaLabel: "클랜 검색",
        searchAriaLabel: "검색",
    },
    pl: {
        placeholder: "Wpisz nick",
        ariaLabel: "Wyszukaj gracza",
        clanPlaceholder: "Wpisz nazwę klanu",
        clanAriaLabel: "Wyszukaj klan",
        searchAriaLabel: "Szukaj",
    },
    ru: {
        placeholder: "Введите имя пользователя",
        ariaLabel: "искать игрока",
        clanPlaceholder: "Введите название клана",
        clanAriaLabel: "поиск клана",
        searchAriaLabel: "поиск",
    },
    tr: {
        placeholder: "Kullanıcı adı girin",
        ariaLabel: "oyuncu ara",
        clanPlaceholder: "Klan adı gir",
        clanAriaLabel: "klanlarda ara",
        searchAriaLabel: "arama",
    },
    zh: {
        placeholder: "輸入使用者名稱",
        ariaLabel: "搜尋玩家",
        clanPlaceholder: "輸入公會名稱",
        clanAriaLabel: "搜尋公會",
        searchAriaLabel: "搜尋",
    },
});

const Root = styled.div`
    margin-left: 0.5rem !important;
    padding: 2px 4px !important;
    display: flex !important;
    align-items: center !important;
    width: 250px !important;
    height: 30px !important;
    border-radius: 15px !important;
    background-color: rgb(40, 40, 70) !important;
    box-shadow: 0px 1px 3px rgba(30, 30, 50, 1) !important;
    transition: background-color 0.2s;
    :hover {
        background-color: rgb(50, 50, 80) !important;
        box-shadow: 0px 1px 3px rgba(40, 40, 60, 1) !important;
    }
`

const Input = styled(InputBase)`
    flex: 1 !important;
    font-size: 0.9rem !important;
    color: rgb(255, 255, 255) !important;
    margin-left: 10px !important;
` 

const Icon = styled(IconButton)`
    padding: 10 !important;
    color: white !important;
`

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
                    if (playerID !== "FAIL") addToHistory(name, playerID, server, false);
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
                    history.push(`/clan-stats/${serverConv[server]}/${name}=${clanID}`);
                })
                .catch(console.error);
        }
    };

    const classes = useStyles();

    return (
        <form onSubmit={onSubmit}>
            <Root>
                <Input
                    placeholder={mode === "player" ? strings.placeholder : strings.clanPlaceholder}
                    inputProps={{ "aria-label": strings.ariaLabel }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <MobileSelect setServer={setServer} server={server} setMode={setMode} mode={mode} />
                <Icon type="submit" className={classes.iconButton} aria-label={strings.searchAriaLabel}>
                    <SearchIcon />
                </Icon>
            </Root>
        </form>
    );
}

export default SearchBar;
