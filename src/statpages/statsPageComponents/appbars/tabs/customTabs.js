import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

const CustomTabs = withStyles({
    root: {
      elevation: 10,
      backgroundColor: 'rgb(76, 90, 166)',
    },
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: 'rgb(214, 43, 97)',
      },
    },
  })(Tabs);

export default CustomTabs;