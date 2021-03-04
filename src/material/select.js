import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
    en: {
        player: "PLAYER",
        clan: "CLAN",
    },
});

const useStyles = makeStyles((t) => ({
    formControl: {
        marginLeft: t.spacing(0),
        marginRight: t.spacing(1),
        minWidth: 30,
        color: "white",
    },
    selectEmpty: {
        paddingTop: t.spacing(1.1),
        paddingBottom: t.spacing(1.1),
        color: "white",
    },
}));

export default function SelectQuery({ server, setServer, mode, setMode }) {
    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.formControl}>
                <Select
                    value={server}
                    onChange={(e) => setServer(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="com">NA</MenuItem>
                    <MenuItem value="eu">EU</MenuItem>
                    <MenuItem value="asia">ASIA</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="player">{strings.player}</MenuItem>
                    <MenuItem value="clan">{strings.clan}</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
