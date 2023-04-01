import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { message } from 'antd';
import "./Signup.css"
import { AiOutlineUser } from 'react-icons/ai';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width:'100vw',
    maxWidth: '35vw',
    margin: 'auto',
  

 
    '& > *': {
      margin: theme.spacing(1),
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize:"14pt",
    },
    "& .MuiInputLabel-root": {
      color: "white",
      fontSize:"14pt",
    },
  },
  input:{
    borderBottom:"1px solid skyblue",
   
    '&::focused': {
    
  }

  },
  button: {
    width:"50%",
    margin:"auto",
    marginTop: theme.spacing(3),
    borderRadius:"14px",
    fontWeight:"bolder",
    backgroundColor: 'lightblue',
    color:"black",  '&:hover': {
      backgroundColor: 'red',
    },
     
    
  }, 
}));

const Admin = () => {
  const navigate=useNavigate()
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');





  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

 

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };


  const handleRegister = () => {
    const data = {email,password};
    axios.post('http://localhost:8000/admin', data)
    .then((res)=>{
        
        if(res.data.success){
          localStorage.setItem("token",res.data.token);
   
          navigate('/');}
    }).catch((err)=>{
        message.error('Login failed');
    })
  };

  return (
    <>
    <h1>PayLux</h1>

    <div className="formd">  <form className={classes.form}>
    <AiOutlineUser size={80}  style={{margin:"auto"}}/>
      <h1>Admin Panel</h1>
    
      
      <TextField className={classes.input} label="Email" value={email} onChange={handleEmailChange} />
      <TextField className={classes.input} label="Password" value={password} type="password" onChange={handlePassChange} />

      <Button     className={classes.button}      onClick={handleRegister}>Login</Button>
  
    </form></div>
  </>
  );
};

export default Admin;
