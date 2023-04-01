import React, { useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import "./Signup.css"
import { message } from 'antd';

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

const Signup = () => {
  document.title = "Signup";
  const classes = useStyles();
  const navigate = useNavigate();

  const [_id, setCnic] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [dob, setDob] = useState('2004-04-04');
  const balance = 0;
  const account_type= "current";

  const handleCnicChange = (event) => {
    setCnic(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };
  const handleDobChange = (event) => {
    setDob(event.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleRegister = () => {
    const age = calculateAge();
    if (age > 18) {
      const data = { _id, name, email, password, dob, accountDetail: { balance, account_type }, amount: 20 };
      axios.post('https://applicationfirst-382308.uc.r.appspot.com/signup', data)
        .then((res) => {
          // Handle success
          message.success(res.data.message);
          navigate('/login');
        })
        .catch((error) => {
          // Handle error
          message.error('Registration failed');
        });
    } else {
      message.warning('User must be 18 or older to register');
    }
  };

  return (
    <>


<Card className={classes.card}>
      <CardHeader className={classes.header} title="Create Account" />
      <CardContent>
        <form className={classes.form} onSubmit={handleRegister}>
        <TextField className={classes.textField} label="CNIC" variant="outlined" value={_id} onChange={handleCnicChange} />
        <TextField className={classes.textField} label="Name" variant="outlined" value={name} onChange={handleNameChange} />
        <TextField className={classes.textField} label="Email" variant="outlined" value={email} onChange={handleEmailChange}  />
        <TextField className={classes.textField} label="Password" variant="outlined" type="password" value={password} onChange={handlePassChange} />
        <TextField className={classes.textField} label="Date of Birth" variant="outlined" type="date" value={dob} onChange={handleDobChange} />
        <Button className={classes.submitButton} variant="contained" onClick={handleRegister}>Sign Up</Button>
      
        </form>
        <Link  to="/login">Already have an account? Login up</Link>
      </CardContent>
    </Card>




     
</>
);
};

export default Signup;






//  <h1>PayLux</h1>
// <img src={logo} alt="logo" className={classes.logo} />
// <form className={classes.form}>
//   <TextField className={classes.textField} label="CNIC" variant="outlined" value={_id} onChange={handleCnicChange} InputProps={{ className: classes.input }} />
// <TextField className={classes.textField} label="Name" variant="outlined" value={name} onChange={handleNameChange} InputProps={{ className: classes.input }} />
// <TextField className={classes.textField} label="Email" variant="outlined" value={email} onChange={handleEmailChange} InputProps={{ className: classes.input }} />
// <TextField className={classes.textField} label="Password" variant="outlined" type="password" value={password} onChange={handlePassChange} InputProps={{ className: classes.input }} />
// <TextField className={classes.textField} label="Date of Birth" variant="outlined" type="date" value={dob} onChange={handleDobChange} InputProps={{ className: classes.input }} />
// <Button className={classes.submitButton} variant="contained" onClick={handleRegister}>Sign Up</Button>
// </form>
// <Link href="/login" variant="body1" className={classes.link}>Already have an account? Log in</Link> 