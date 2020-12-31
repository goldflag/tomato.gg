import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ThemeContext } from '../style/theme.js';

export default function SmallSelectQuery(props) {
    const { theme, server } = React.useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        formControl: {
            marginLeft: t.spacing(0),
            marginRight: t.spacing(0),
            width: 45,
            color: theme === 'dark' ? 'white' : 'rgb(40, 40, 40)',
        },
        selectEmpty: {
            fontSize: '0.8em',
            paddingTop: t.spacing(0.1),
            paddingBottom: t.spacing(0.1),
            color: theme === 'dark' ? 'white' : 'rgb(40, 40, 40)',
        },
    }));

    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <Select
                    MenuProps={{
                        disableScrollLock: true
                    }}
                    value={server}
                    onChange={e => props.setServer(e.target.value)}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value={`com`}>NA</MenuItem>
                    <MenuItem value={`eu`}>EU</MenuItem>
                    <MenuItem value={`asia`}>ASIA</MenuItem>
                    <MenuItem value={`ru`}>RU</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}