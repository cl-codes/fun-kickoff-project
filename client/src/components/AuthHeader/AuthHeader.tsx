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
      display="flex"
      justifyContent="center"
      alignSelf="flex-end"
      marginRight={0}
      className={classes.authHeader}
    >
      <Typography className={classes.accAside}>{asideText}</Typography>
      <Link to={linkTo} className={classes.link}>
        {btnText}
      </Link>
    </Box>
  );
};

export default AuthFooter;
