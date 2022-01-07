import { NoEncryption } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: 23,
  },
  welcome: {
    fontSize: 50,
    paddingBottom: 40,
    color: '#000000',
    fontWeight: 700,
  },
  submit: {
    boxShadow: 'none',
  },
}));

export default useStyles;
