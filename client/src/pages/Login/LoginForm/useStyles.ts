import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  label: {
    fontSize: 15,
    color: 'rgb(0,0,0,1)',
    fontWeight: 700,
    paddingLeft: '0px',
    margin: '0rem',
    textTransform: 'uppercase',
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
    padding: 10,
    width: 160,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 12,
    backgroundColor: '#f14140',
    fontWeight: 'bold',
  },
}));

export default useStyles;
