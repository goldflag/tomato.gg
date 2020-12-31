import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SmallSelectQuery from './smallSelect';

import { ThemeContext } from '../style/theme.js';

export default function SmallSearchBar(props) {
    const { theme } = React.useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '250px',
            height: '30px',
            borderRadius: 15,
            backgroundColor: theme === 'dark' ? 'rgb(40, 40, 40)' : 'white'
        },
        input: {
            marginLeft: t.spacing(1),
            flex: 1,
            fontSize: 12,
            color: theme === 'dark' ? 'white' : 'rgb(40, 40, 40)',
        },
        iconButton: {
            padding: 10,
            color: theme === 'dark' ? 'white' : 'rgb(40, 40, 40)',
        },
        divider: {
            height: 25,
            margin: 8,
            background: theme === 'dark' ? 'rgb(40, 40, 40)' : 'white'
        },
    }));

    const classes = useStyles();
    return (
        <Paper component="form" elevation={0} className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Enter a Username"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={e => props.setName(e.target.value)}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <SmallSelectQuery setServer={props.setServer} server={props.server} setMode={props.setMode} mode={props.mode} />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}