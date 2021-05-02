// NPM
import React, { useState, useContext, useRef, useMemo } from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalizedStrings from "Functions/localizedStrings";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";

// LOCAL
import MobileSelect from "./mobileSelect";
import { serverConv } from "Data/conversions";
import { ServerContext, SearchHistoryContext, SearchmodeContext } from "Context";
import { useHistory } from "react-router-dom";
import { options, searchNames } from "Functions/searchFunctions";

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

const Form = styled.form`
    margin-left: 0.5rem;
`

const Root = styled.div`
    padding: 2px 4px;
    display: flex;
    align-items: center;
    width: 250px;
    height: 30px;
    border-radius: ${({ radius }) => radius ? "15px 15px 0px 0px" : "15px"};
    border-bottom: 2px solid ${({ radius }) => radius ? "rgb(70, 70, 100)" : "rgba(0, 0, 0, 0)"};
    background-color: rgb(40, 40, 70);
    box-shadow: 0px 1px 3px rgba(30, 30, 50, 1);
    transition: background-color 0.2s;
    :hover {
        background-color: rgb(50, 50, 80);
        box-shadow: 0px 1px 3px rgba(40, 40, 60, 1) ;
    }
`

const Input = styled(InputBase)`
    flex: 1 !important;
    font-size: 0.9rem !important;
    color: rgb(255, 255, 255) !important;
    padding-left: 10px !important;
` 

const Icon = styled(IconButton)`
    padding: 10 !important;
    color: white !important;
`

const Options = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    position: absolute;
    box-shadow: 0px 1px 3px rgba(30, 30, 50, 1);
    z-index: 6;
`;

function SearchBar() {
    const history = useHistory();
    const { addToHistory } = useContext(SearchHistoryContext);
    const { mode, setMode } = useContext(SearchmodeContext);
    const { server, setServer } = useContext(ServerContext);
    const [ name, setName ] = useState();
    const [ data, setData ] = useState();
    const time = useRef();

    const nameOptions = useMemo(() => options(name, setName, data), [data]);

    const onSubmit = (e) => {
        e.preventDefault();
        setData(null);
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

    return (
        <Form onSubmit={onSubmit}>
            <Root radius={data}>
                <Input
                    placeholder={mode === "player" ? strings.placeholder : strings.clanPlaceholder}
                    inputProps={{ "aria-label": strings.ariaLabel }}
                    value={mode === "player" ? name : name.toUpperCase()}
                    onChange={(e) => { 
                        setName(e.target.value); 
                        if (mode === "player") {
                            if (e.target.value.length >= 3) searchNames(e.target.value, time, setData);
                            else setData(null);
                        }
                    }}                />
                <MobileSelect setServer={setServer} server={server} setMode={setMode} mode={mode} />
                <Icon type="submit" aria-label={strings.searchAriaLabel}>
                    <SearchIcon />
                </Icon>
            </Root>
            <OutsideClickHandler onOutsideClick={() => setData(null)}>
                <Options> 
                    {nameOptions}
                </Options>
            </OutsideClickHandler>
        </Form>
    );
}

export default SearchBar;
