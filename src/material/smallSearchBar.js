// NPM
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LocalizedStrings from "react-localization";

import SmallSelectQuery from "./smallSelect";

const Styles = styled.div`
    .select {
        display: none;
    }

    @media screen and (max-width: 1000px) {
        .select {
            display: block;
        }
    }
`;

const strings = new LocalizedStrings({
    en: {
        placeholder: "Enter a Username",
        ariaLabel: "search for a player",
        searchAriaLabel: "search",
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

export default function SmallSearchBar(props) {
    const useStyles = makeStyles((t) => ({
        root: {
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

    const classes = useStyles();
    return (
        <Paper elevation={0} className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={strings.placeholder}
                inputProps={{ "aria-label": strings.ariaLabel }}
                onChange={(e) => props.setName(e.target.value)}
            />
            <Styles>
                <div className="select">
                    <SmallSelectQuery
                        setServer={props.setServer}
                        server={props.server}
                        setMode={props.setMode}
                        mode={props.mode}
                    />
                </div>
            </Styles>

            <IconButton type="submit" className={classes.iconButton} aria-label={strings.searchAriaLabel}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
