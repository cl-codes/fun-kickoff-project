import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { FormikHelpers } from 'formik';
import useStyles from './useStyles';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';

export default function Login(): JSX.Element {
  const classes = useStyles();
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        elevation={6}
        component={Paper}
        square
        marginTop="4em"
        marginBottom="4em"
        marginLeft="auto"
        marginRight="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexDirection="column"
          className={classes.authWrapper}
        >
          <Box width="100%" maxWidth={350} p={3} alignSelf="center">
            <Grid container>
              <Grid item xs>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 30,
                    letterSpacing: '0.3px',
                  }}
                  className={classes.welcome}
                  component="h1"
                  variant="h5"
                  align="center"
                >
                  Welcome back!
                </Typography>
              </Grid>
            </Grid>
            <LoginForm handleSubmit={handleSubmit} />
            <AuthFooter linkTo="/signup" asideText="Don't have an account?" btnText="Create account" />
          </Box>
          <Box p={1} alignSelf="center" />
        </Box>
      </Grid>
    </Grid>
  );
}
