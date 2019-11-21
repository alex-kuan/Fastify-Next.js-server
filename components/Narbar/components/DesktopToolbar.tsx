import { makeStyles } from '@material-ui/styles';
import Link from 'next/link';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    paddingTop: '5px',
  },
  menuButton: {

  },
});

function DesktopToolbar(): JSX.Element {
  const classes = useStyles({});

  return (
    <Toolbar className={classes.root}>
      <div className={classes.logo}>
        <Link href="/" prefetch={false}>
          <a>
            <img src="/images/logo.png" alt="logo" height="50px" />
          </a>
        </Link>
      </div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
}

export default DesktopToolbar;
