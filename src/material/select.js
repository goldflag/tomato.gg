import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ThemeContext, ServerContext } from "../context";

export default function SelectQuery(props) {
    const { theme } = React.useContext(ThemeContext);
    const { server } = React.useContext(ServerContext);

    const useStyles = makeStyles((t) => ({
        formControl: {
            marginLeft: t.spacing(0),
            marginRight: t.spacing(1),
            minWidth: 30,
            color: theme === "dark" ? "white" : "rgb(40, 40, 40)",
        },
        selectEmpty: {
            paddingTop: t.spacing(1.1),
            paddingBottom: t.spacing(1.1),
            color: theme === "dark" ? "white" : "rgb(40, 40, 40)",
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    value={server}
                    onChange={(e) => props.setServer(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value={"com"}>NA</MenuItem>
                    <MenuItem value={"eu"}>EU</MenuItem>
                    <MenuItem value={"asia"}>ASIA</MenuItem>
                    <MenuItem value={"ru"}>RU</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
