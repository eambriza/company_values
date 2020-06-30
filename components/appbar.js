import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
//import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
//import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from "@material-ui/icons/Menu";
//import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
//import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Avatar from '@material-ui/core/Avatar';
//import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Raleway',
    marginLeft: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  appbarcolor: {
    color: '#487867',
    backgroundColor: 'white',
  },
  button: {
    fontFamily: 'Raleway',
    fontSize: '20px',
    color: '#487867',
    textTransform: 'none',
  },
  buttonDrawer: {
    fontFamily: 'Raleway',
    fontSize: '15px',
    color: '#487867',
    textTransform: 'none',
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        elevation={1}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.appbarcolor}>
          <Avatar variant="square" alt="KeyValues Logo" src="/keyvalues.PNG" />
          <Typography variant="h6" noWrap className={classes.title}>
            <Button className={classes.button} href="/">
              key: values
            </Button>
          </Typography>

          <Typography variant="h4" noWrap className={classes.title}>
            <Button
              className={classes.button}
              href="/culturequeries"
              as="culture-queries"
            >
              Culture Queries
            </Button>
          </Typography>
          <Typography variant="h4" noWrap className={classes.title}>
            <Button
              className={classes.button}
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              About
            </Button>
          </Typography>
          <Typography variant="h4" noWrap className={classes.title}>
            <Button
              className={classes.button}
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              Blog
            </Button>
          </Typography>
          <Typography variant="h4" noWrap className={classes.title}>
            <Button
              className={classes.button}
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              Submit
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
