import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
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
        // <Styles>
        <Paper elevation={0} className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Enter a Username"
                inputProps={{ "aria-label": "enter a username" }}
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

            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
        // </Styles>
    );
}
