import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    color: '#000000',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '0.3rem',
  },
}));

export default useStyles;
