import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  title1: {
    flexGrow: 1,
    fontFamily: 'Raleway',
    paddingLeft: '400px',
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '0px',
    },
  },
  title: {
    marginRight: '10px',
  },
  title2: {
    marginRight: '12px',
    marginLeft: '12px',
    paddingRight: '400px',
    [theme.breakpoints.down('lg')]: {
      paddingRight: '0px',
    },
  },
  button: {
    fontFamily: 'Raleway',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'none',
    left: 'auto',
    right: 0,
  },

  toolbarcolor: {
    backgroundColor: 'white',
    minHeight: '50px',
  },

  avatar: {
    height: '35px',
    marginRight: '15px',
    minWidth: '35px',
    width: '35px',
    left: '410px',
    [theme.breakpoints.down('lg')]: {
      left: '0px',
    },
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolbarcolor}>
            <Avatar
              className={classes.avatar}
              variant="square"
              alt="KeyValues Logo"
              src="/keyvalues.PNG"
            />
            <Typography variant="body2" noWrap className={classes.title1}>
              <Button className={classes.button} href="/">
                {'{ key: values }'}
              </Button>
            </Typography>

            <Typography variant="body2" noWrap className={classes.title}>
              <Button
                className={classes.button}
                href="/culturequeries"
                as="culture-queries"
              >
                Culture Queries
              </Button>
            </Typography>
            <Typography variant="body2" noWrap className={classes.title}>
              <Button
                className={classes.button}
                onClick={() => {
                  alert('Estara Disponivel Brevemente');
                }}
              >
                About
              </Button>
            </Typography>
            <Typography variant="body2" noWrap className={classes.title}>
              <Button
                className={classes.button}
                onClick={() => {
                  alert('Estara Disponivel Brevemente');
                }}
              >
                Blog
              </Button>
            </Typography>
            <Typography variant="body2" noWrap className={classes.title2}>
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
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
