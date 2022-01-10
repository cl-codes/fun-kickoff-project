import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box
      p={1}
      className={classes.authFooter}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 0,
        fontWeight: '500',
        fontSize: '13px',
        color: '#f14140',
        marginBottom: '2rem',
        letterSpacing: '0.1px',
      }}
    >
      <Typography className={classes.accAside} sx={{ fontWeight: '500', fontSize: '13px', letterSpacing: '0.1px' }}>
        {asideText}
      </Typography>
      <Link to={linkTo}>{btnText}</Link>
    </Box>
  );
};

export default AuthFooter;
