import { NoEncryption } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 14,
      boxShadow: 'none',
      outline: 'none',
    },
  },
  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
