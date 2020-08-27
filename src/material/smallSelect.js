import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: 60,

  },
  selectEmpty: {
    fontSize: '0.8em',
    paddingTop: theme.spacing(0.1),
    paddingBottom: theme.spacing(0.1),
  },
}));

export default function SmallSelectQuery(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          MenuProps={{
            disableScrollLock: true
          }}
          value={props.server}
          onChange={e => props.setServer(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'com'}>NA</MenuItem>
          <MenuItem value={'eu'}>EU</MenuItem>
          <MenuItem value={'asia'}>ASIA</MenuItem>
          <MenuItem value={'ru'}>RU</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl className={classes.formControl}>
        <Select
          MenuProps={{
            disableScrollLock: true
          }}
          value={props.mode}
          onChange={e => props.setMode(e.target.value)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'Player'}>Player</MenuItem>
          <MenuItem value={'Clan'}>Clan</MenuItem>
        </Select>
      </FormControl> */}
    </div>
  );
}