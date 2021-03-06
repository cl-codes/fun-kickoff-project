import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  inputs: {
    margin: '0.3rem',
    marginLeft: '0.5rem',
    height: '2rem',
    padding: '0px',
  },
  forgot: {
    paddingRight: 10,
    color: '#3a8dff',
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f14140',
  },
}));

export default useStyles;
