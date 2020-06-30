import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  /*   buttonCoronagora: {
    fontFamily: 'Raleway',
    fontSize: 34,
    left: 150,
    color: '#FFFFFF',
    marginTop: '380',
  }, */
  banner: {
    background: `url(/keyvaluesbackgroung.jpg)`,
    backgroundPosition: 'center',
    height: '75vh',
    maxWidth: '800',
    display: 'flex',
    resizeMode: 'contain',
    marginTop: -15,
  },
  bannercontent: {
    //padding: '80px',
    color: '#FFFFFF',
    textAlign: 'center',
    //marginLeft: '166px',
    //maxWidth: '1100px',
    // textAlign: 'center',
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    position: 'relative',
    marginTop: 70,
  },

  /* text: {
    marginTop: 70,
    //textAlign: 'center',
  }, */
});

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.banner}>
      <div className={classes.bannercontent}>
        <Typography variant="h4">
          Find engineering teams that share your values
        </Typography>
        <Typography variant="h6">
          Select your top values and find teams you'll click with.
        </Typography>
      </div>
    </div>
  );
}
