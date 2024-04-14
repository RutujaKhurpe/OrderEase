import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import backgroundImage from '../assest/halfpizza.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    //background: `url(${backgroundImage}) no-repeat left`,
    backgroundSize: 'cover',
    minHeight: '100vh',
   
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  imageOverlay: {
    position:'absolute',
    top: 0,
    right: '95%',
    width: '50%', // Adjust as needed
    height: '70%',
    background: `url(${backgroundImage}) no-repeat left`,
    backgroundSize: 'cover',
    zIndex: -1,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // You can add further logic for authentication here
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
    <div className={classes.imageOverlay}></div>
    <div>
      <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  </Container>
);
};

export default Login;


