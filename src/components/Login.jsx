import React, { useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import "./Signup.css"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';










const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const useStyles = makeStyles((theme) => ({
  card: {

    maxWidth: "30rem",
    margin: 'auto !important',
    marginTop: '8rem !important',
    padding: '2rem !important',
    textAlign: 'center !important',
    
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2rem !important',
  },
  textField: {
    marginBottom: '1rem !important',
    
  },
  header: {
    backgroundColor: 'black',
    width:"100%",
    color: 'white',
  },
  submitButton: {
    marginTop: '2rem !important',
    backgroundColor: 'orange !important',
    color: 'white',
    
   '&:hover': {
    backgroundColor: 'darkorange',
  },
   
  },
  link: {
    marginTop: '2rem !important',
  },
}));

const Login = () => {
  const navigate=useNavigate()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://applicationfirst-382308.uc.r.appspot.com/login', { email, password })
    .then((res)=>{
 
      if(res.data.success){
        localStorage.setItem("token",res.data.token);
        setOpen(true);
        navigate('/');}
  })
      .catch((error) => {
        console.log(error);
        // TODO: handle login error
      });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (

    <>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>

    <Card className={classes.card}>
      <CardHeader className={classes.header} title="Login Account" />
      <CardContent>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            className={classes.textField}
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            label="Password"
            type="password"
            className={classes.textField}
            fullWidth
            value={password}
            onChange={handlePasswordChange}
          />
          <Button className={classes.submitButton} type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </form>
        <Link  to="/signup">Don't have an account? Sign up</Link>
      </CardContent>
    </Card>
    </>
  );
};

export default Login;
