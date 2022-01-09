import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
  },
  authWrapper: {
    paddingTop: 23,
  },
  welcome: {
    paddingBottom: 40,
    color: '#000000',
  },
}));

export default useStyles;
