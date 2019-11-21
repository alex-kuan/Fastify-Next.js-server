import { createMuiTheme } from '@material-ui/core';
import { grey, cyan } from '@material-ui/core/colors';

const defaults = {
  palette: {
    primary: {
      light: cyan[300],
      main: '#00B5CC',
      dark: cyan[500],
      contrastText: grey[50],
    },
    secondary: {
      light: cyan[300],
      main: '#156774',
      dark: '#00B5CC',
      contrastText: grey[50],
    },
    text: {
      secondary: '#bababf',
    },
  },
  typography: {
    fontFamily: '"Lato"',
  },
};

const theme = {
  ...defaults,
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&:hover $notchedOutline': {
          borderColor: '#00B5CC',
        },
      },
      notchedOutline: {
        borderWidth: '1px !important',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '1px',
        letterSpacing: '1px',
      },
      contained: {
        boxShadow: 'none',
      },
      containedSecondary: {
        border: 'solid 1px',
        borderColor: defaults.palette.secondary.main,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: '#414042',
      },
    },
    MuiDivider: {
      light: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '0.9rem',
      },
      h3: {
        fontWeight: 300,
        fontSize: '2.4rem',
      },
    },
  },
};

export default createMuiTheme(theme);
