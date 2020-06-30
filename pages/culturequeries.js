import Head from '../components/head';
import APPBAR from '../components/appbar2';
import NAV from '../components/navCQ';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  background: {
    background: 'linear-gradient(to bottom right, #e1feff, #76c6ff)',
  },
});

export default function CultureQueries(props) {
  const classes = useStyles(props);
  return (
    <div>
      <Head title="CultureQueries" description="CultureQueries" />
      <body className={classes.background}>
        <APPBAR />
        <NAV />
      </body>
    </div>
  );
}
