// NPM
import React from "react";
import LocalizedStrings from "react-localization";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// LOCAL
import SelectQuery from "./select";

const strings = new LocalizedStrings({
    en: {
        placeholder: "Enter a Username (e.g. Goldflag)",
        ariaLabel: "search for a player",
        clanPlaceholder: "Enter a Clan name",
        clanAriaLabel: "search for a clan",
        searchAriaLabel: "search",
    },
    cs: {
        placeholder: "Vložte přezdívku (e.g. Goldflag)",
        ariaLabel: "Hledejte hráče",
        clanPlaceholder: "Vložte název klanu",
        clanAriaLabel: "Hledejte klan",
        searchAriaLabel: "hledat",
    },
    es: {
        placeholder: "Escribe un nombre de usuario (e.g. Goldflag)",
        ariaLabel: "buscar un jugador",
        clanPlaceholder: "Escribe un nombre de Clan",
        clanAriaLabel: "buscar un clan",
        searchAriaLabel: "buscar",
    },
    fr: {
        placeholder: "Entrez le nom d'un joueur (ex: Goldflag)",
        ariaLabel: "recherchez un joueur",
        clanPlaceholder: "Entrez un nom de Clan",
        clanAriaLabel: "recherche pour un clan",
        searchAriaLabel: "recherche",
    },
    pl: {
        placeholder: "Wpisz nick (n.p. Goldflag)",
        ariaLabel: "Wyszukaj gracza",
        clanPlaceholder: "Wpisz nazwę klanu",
        clanAriaLabel: "Wyszukaj klan",
        searchAriaLabel: "Szukaj",
    },
    ru: {
        placeholder: "Введите имя пользователя (например, Goldflag)",
        ariaLabel: "искать игрока",
        clanPlaceholder: "Введите название клана",
        clanAriaLabel: "поиск клана",
        searchAriaLabel: "поиск",
    },
    tr: {
        placeholder: "Kullanıcı adı girin (örn. Goldflag)",
        ariaLabel: "oyuncu ara",
        clanPlaceholder: "Klan adı gir",
        clanAriaLabel: "klanlarda ara",
        searchAriaLabel: "arama",
    },
    zh: {
        placeholder: "輸入使用者名稱 (例如: Goldflag)",
        ariaLabel: "搜尋玩家",
        clanPlaceholder: "輸入公會名稱",
        clanAriaLabel: "搜尋公會",
        searchAriaLabel: "搜尋",
    },
});

const useStyles = makeStyles((t) => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "50px",
        borderRadius: 0,
        backgroundColor: "rgba(40, 40, 60, 0.8)",
    },
    input: {
        marginLeft: t.spacing(1),
        flex: 1,
        fontSize: 16,
        color: "white",
    },
    iconButton: {
        padding: 10,
        color: "white",
    },
    divider: {
        height: 40,
        margin: 10,
        color: "white",
    },
}));

export default function SearchBar({ name, setName, server, setServer, mode, setMode }) {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={mode === "player" ? strings.placeholder : strings.clanPlaceholder}
                inputProps={{ "aria-label": mode === "player" ? strings.ariaLabel : strings.clanAriaLabel }}
                value={mode === "player" ? name : name.toUpperCase()}
                onChange={(e) => setName(e.target.value)}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <SelectQuery setServer={setServer} server={server} setMode={setMode} mode={mode} />
            <IconButton type="submit" className={classes.iconButton} aria-label={strings.searchAriaLabel}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
