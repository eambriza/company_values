import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  banner: {
    display: 'flex',
    resizeMode: 'contain',
  },
  bannercontent: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: '100%',
    height: 'auto',
    display: 'inline-block',
    position: 'relative',
    marginTop: 70,
  },
  img: {
    height: '80px',

    width: '180px',
  },
});

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.banner}>
      <div className={classes.bannercontent}>
        <Typography variant="h4">
          The perfect questions to ask in your job interview.
        </Typography>
        <Typography variant="h6">
          Want to stand out from other candidates and find your dream job? This
          will only take you 20 seconds!
        </Typography>
        <img className={classes.img} src="/CQ-step-1.png" />
        <Typography variant="h6">
          Tell me what you're looking for in a company.
        </Typography>
      </div>
    </div>
  );
}
