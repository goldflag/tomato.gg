// NPM
import React from "react";
import LocalizedStrings from "Functions/localizedStrings";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

// LOCAL
import SelectQuery from "./select";

const Root = styled.div`
    padding: 2px 4px !important;
    display: flex !important;
    align-items: center !important;
    width: 100% !important;
    height: 50px !important;
    background-color: rgba(40, 40, 60, 0.8) !important;
    box-shadow: 0px 1px 3px rgba(30, 30, 50, 1) !important;
    transition: background-color 0.3s;
    :hover {
        background-color: rgba(50, 50, 80, 0.8) !important;
        box-shadow: 0px 1px 3px rgba(40, 40, 60, 1) !important;
    }
`

const Input = styled(InputBase)`
    flex: 1 !important;
    font-size: 16 !important;
    color: white !important;
    margin-left: 10px !important;
` 

const Icon = styled(IconButton)`
    padding: 10 !important;
    color: white !important;
`

const strings = LocalizedStrings({
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
    de: {
        placeholder: "Gib einen Spielernamen ein (z.B. Goldflag)",
        ariaLabel: "Suche nach einem Spieler",
        clanPlaceholder: "Gib einen Clannamen ein",
        clanAriaLabel: "suche nach einem Clan",
        searchAriaLabel: "Suche",
    },
    fr: {
        placeholder: "Entrez le nom d'un joueur (ex: Goldflag)",
        ariaLabel: "recherchez un joueur",
        clanPlaceholder: "Entrez un nom de Clan",
        clanAriaLabel: "recherche pour un clan",
        searchAriaLabel: "recherche",
    },
    hr: {
        placeholder: "Unesite korisničko ime (e.g. Goldflag)",
        ariaLabel: "pretraži igrača",
        clanPlaceholder: "Unesite ime Klana",
        clanAriaLabel: "pretraži klan",
        searchAriaLabel: "traži",
    },
    ko: {
        placeholder: "유저네임을 입력하세요. (예: Goldflag)",
        ariaLabel: "유저검색",
        clanPlaceholder: "클랜이름을 입력해주세요",
        clanAriaLabel: "클랜 검색",
        searchAriaLabel: "검색",
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

export default function SearchBar({ name, setName, server, setServer, mode, setMode }) {
    return (
        <Root>
            <Input
                placeholder={mode === "player" ? strings.placeholder : strings.clanPlaceholder}
                inputProps={{ "aria-label": mode === "player" ? strings.ariaLabel : strings.clanAriaLabel }}
                value={mode === "player" ? name : name.toUpperCase()}
                onChange={(e) => setName(e.target.value)}
            />
            <SelectQuery setServer={setServer} server={server} setMode={setMode} mode={mode} />
            <Icon type="submit" aria-label={strings.searchAriaLabel}>
                <SearchIcon />
            </Icon>
        </Root>
    );
}
