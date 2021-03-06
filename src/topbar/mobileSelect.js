// NPM
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import { commonStrings, UPPER } from "Data/localizations";

const SmallSelectWrapper = styled.div`
    display: none;
    @media screen and (max-width: 1000px) {
        display: block;
    }
`;

function MobileSelect({ server, setServer, mode, setMode }) {
    const useStyles = makeStyles((t) => ({
        formControl: {
            marginLeft: t.spacing(0),
            marginRight: t.spacing(0),
            width: 45,
            color: "white",
        },
        selectEmpty: {
            fontSize: "0.8em",
            paddingTop: t.spacing(0.1),
            paddingBottom: t.spacing(0.1),
            color: "white",
        },
    }));

    const classes = useStyles();
    return (
        <SmallSelectWrapper>
            <FormControl className={classes.formControl}>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
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
                    <MenuItem value="player">{UPPER(commonStrings.player)}</MenuItem>
                    <MenuItem value="clan">{UPPER(commonStrings.clan)}</MenuItem>
                </Select>
            </FormControl>
        </SmallSelectWrapper>
    );
}

export default MobileSelect;
