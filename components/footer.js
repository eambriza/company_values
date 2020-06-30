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
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: '100%',
    // minHeight: '30px',
  },

  form: {
    width: '25ch',
    backgroundColor: '#FFFFFF',
    marginLeft: '10px',
    marginRight: '10px',
  },

  subscribe: {
    backgroundColor: '#00d6b9',
    color: '#FFFFFF',
    marginRight: '10px',
  },

  subscribe1: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    marginLeft: '10px',
    fontSize: '10px',
    fontWeight: 'bold',
  },

  toolbar: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    //flexWrap: 'wrap',
    justifyContent: 'center',
    //maxWidth: '1100px',
    textAlign: 'center',
    //width: '100%',
    height: 'auto',
    //display: 'inline-block',
    position: 'relative',
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="up" in={trigger}>
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
          <Toolbar className={classes.toolbar}>
            <Typography variant="body1">
              Sign up for Key Values weekly newsletter!
            </Typography>

            <Input
              className={classes.form}
              placeholder="  Enter email address"
              inputProps={{ 'aria-label': 'description' }}
            />
            <Button
              className={classes.subscribe}
              variant="contained"
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              Subscribe
            </Button>
            <Typography variant="body1">or say hi 👋</Typography>
            <Button
              className={classes.subscribe1}
              variant="contained"
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              @eric
            </Button>
            <Button
              className={classes.subscribe1}
              variant="contained"
              onClick={() => {
                alert('Estara Disponivel Brevemente');
              }}
            >
              @marcelo
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
