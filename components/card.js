import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  frontcardcontent: {
    minHeight: '240px',
    paddingTop: '10px',
  },

  backcardcontent: {
    minHeight: '240px',
  },

  footer: {
    background: '#C0C0C0',
    padding: '10px',
    textAlign: 'center',
    minHeight: '70px',
  },

  avatar: {
    width: '100px',
    height: '100px',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5px',
  },

  card: {
    maxWidth: '350px',
    maxHeight: '400px',
    marginLeft: '15px',
    marginRight: '15px',
    marginTop: '30px',
    minWidth: '350px',
  },

  divroot: {
    textAlign: 'center',
  },

  button: {
    marginLeft: '5px',
    background: '#FFFFFF',
  },
});

export default function SimpleCard() {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();

  return (
    <Card
      elevation={5}
      className={classes.card}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <div className={classes.divroot}>
          <div className={classes.frontcardcontent}>
            <CardContent>
              <Avatar
                className={classes.avatar}
                alt="logo"
                src="/keyvalues.PNG"
              />
              <Typography variant="h6" component="p">
                NerdWallet
              </Typography>
              <Typography variant="button" component="p">
                Personalized finance
              </Typography>
            </CardContent>
          </div>
          <div className={classes.footer}>
            <Typography variant="subtitle2" component="p">
              6 Open Positions
            </Typography>
            <Typography variant="body2" component="p">
              San Francisco, CA or Remote
            </Typography>
          </div>
        </div>
      )}
      {isShown && (
        <div>
          <CardContent className={classes.backcardcontent}>
            <Typography variant="h6" component="p">
              NerdWallet
            </Typography>
            <Typography variant="subtitle2" component="p">
              <br />
              1. CUSTOMER COMES FIRST <br />
              2. WORK/LIFE BALANCE <br />
              3. IMPRESSIVE TEAM MEMBERS <br />
              4. PRODUCT-DRIVEN <br />
              5. START-TO-FINISH OWNERSHIP <br />
              6. HAS INTERNSHIP PROGRAM <br />
              7. WEARS MANY HATS <br />
            </Typography>
          </CardContent>
          <div className={classes.footer}>
            <Button className={classes.button} variant="outlined">
              B2C
            </Button>
            <Button className={classes.button} variant="outlined">
              REMOTE-OK
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}
