import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '700',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '0.3rem',
  },
  accBtn: {
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    backgroundColor: '#ffffff',
    color: '#3a8dff',
    boxShadow: 'none',
  },
  link: {
    color: 'primary',
  },
}));

export default useStyles;
