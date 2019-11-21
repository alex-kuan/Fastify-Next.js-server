import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'pink',
  },
});

function DesktopToolbar(): JSX.Element {
  const classes = useStyles({});

  return (
    <Toolbar className={classes.root}>
      <Link href="/">
        <a>
          <img src="../../../public/images/logo.png" alt="logo" />
        </a>
      </Link>
    </Toolbar>
  );
}

export default DesktopToolbar;
