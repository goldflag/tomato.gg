import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppsIcon from '@material-ui/icons/Apps';
import PublicIcon from '@material-ui/icons/Public';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import smallLogo from '../assets/smalllogo.png';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <List>
            <Link to='/'>
                <ListItem button key={'1'}>
                    <ListItemIcon><AppsIcon style={{color: 'rgb(31, 45, 90)'}}/></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
            </Link>
            <Link to='/tanks'>
                <ListItem button key={'2'}>
                    <ListItemIcon><BarChartIcon style={{color: 'rgb(31, 45, 90)'}}/></ListItemIcon>
                    <ListItemText primary={'Tank Stats'} />
                </ListItem>
            </Link>
            <Link to='/server-stats'>
                <ListItem button key={'3'}>
                    <ListItemIcon><PublicIcon style={{color: 'rgb(31, 45, 90)'}}/></ListItemIcon>
                    <ListItemText primary={'Server Stats'} />
                </ListItem>
            </Link>
            <Link to='/stats-reference'>
                <ListItem button key={'4'}>
                    <ListItemIcon><LibraryBooksIcon style={{color: 'rgb(31, 45, 90)'}}/></ListItemIcon>
                    <ListItemText primary={'Stats Reference'} />
                </ListItem>
            </Link>
            <Link to='/about'>
                <ListItem button key={'5'}>
                    <ListItemIcon><InfoIcon style={{color: 'rgb(31, 45, 90)'}}/></ListItemIcon>
                    <ListItemText primary={'About'} />
                </ListItem>
            </Link>
        </List>
        <Divider />
    </div>
  );

  return (
    <div>
        <React.Fragment key={'top'}>
          <Button onClick={toggleDrawer('top', true)}><span style={{fontSize: '1.7rem'}}><img src={smallLogo} alt='smalllogo' style={{maxWidth: '70px', padding: '0 15px 0 0'}}/></span></Button>
          <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
            {list('🍅')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}