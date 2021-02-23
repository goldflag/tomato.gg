import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ServerContext } from "Context";

export default function SmallSelectQuery(props) {
    const { server } = React.useContext(ServerContext);

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
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    MenuProps={{
                        disableScrollLock: true,
                    }}
                    value={server}
                    onChange={(e) => props.setServer(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value={`com`}>NA</MenuItem>
                    <MenuItem value={`eu`}>EU</MenuItem>
                    <MenuItem value={`asia`}>ASIA</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
