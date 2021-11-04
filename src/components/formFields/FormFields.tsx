import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Field, ErrorMessage } from 'formik';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

interface formFieldProps {
  firstName: string,
  lastName: string,
  label: string,
  email: string,
  password: string,

}

const theme = createTheme();

export const FormFields: React.FC<formFieldProps> = ({ firstName, lastName, label, email, password }) => {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  autoComplete="fname"
                  name={firstName}
                  required
                  fullWidth
                  variant="outlined"
                  id="firstName"
                  label={label}
                  autoFocus
                  helperText={<ErrorMessage name={firstName} render={(msg)=>(
                    <span className="errorMessage">{msg}</span>
                  )} />}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  variant="outlined"
                  id="lastName"
                  label="Last Name"
                  name={lastName}
                  autoComplete="lname"
                  helperText={<ErrorMessage name={lastName} render={(msg)=>(
                    <span className="errorMessage">{msg}</span>
                  )} />}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  variant="outlined"
                  id="email"
                  label="Email Address"
                  name={email}
                  type="email"
                  autoComplete="email"
                  helperText={<ErrorMessage name={email} render={(msg)=>(
                    <span className="errorMessage">{msg}</span>
                  )} />}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  required
                  fullWidth
                  variant="outlined"
                  name={password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={<ErrorMessage name={password} render={(msg)=>(
                    <span className="errorMessage">{msg}</span>
                  )} />}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <br />
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}