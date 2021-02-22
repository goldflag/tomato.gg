import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import SelectQuery from "./select";

export default function SearchBar(props) {
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

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Enter Username (e.g. Goldflag)"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => props.setName(e.target.value)}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <SelectQuery
                setServer={props.setServer}
                server={props.server}
                setMode={props.setMode}
                mode={props.mode}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
