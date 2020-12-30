import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const CustomTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontWeight: 600,
      marginRight: theme.spacing(4),
      fontFamily: 'Segoe UI, Futura',
      color: 'rgb(250, 250, 250)',
      '&:focus': {
          opacity: 1,
        },
    },
    selected: {},
  }))((props) => <Tab disableRipple {...props} />);

  export default CustomTab;