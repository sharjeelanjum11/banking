import React from 'react'
import { useState } from 'react';
import TextField  from '@mui/material/TextField'
import   Button  from '@mui/material/Button'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import "./Sendmoney.css"
import { message } from 'antd';
import { fontStyle, textTransform } from '@mui/system';





const useStyles = makeStyles({
  root: {
    background: 'skyblue',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  submitButton: {
    marginTop: '2rem !important',
    backgroundColor: 'orange !important',
    color: 'white',
    
   '&:hover': {
    backgroundColor: 'darkorange',
  },},
  textField: {
    marginBottom: '1rem !important',
    fontSize:"30px",
    textTransform:"capitalize",
    
  },
  title: {
    fontWeight: 'bolder !important',
    fontSize: '40px !important',
    paddingBottom: '20px',
  },
  content: {
    fontSize: '30px !important',
    paddingBottom: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    color: '#fff!important',
    backgroundColor: '#c62828!important',
    '&:hover': {
      backgroundColor: '#b71c1c!important',
    },
  },
  confirmButton: {
    color: '#fff!important',
    backgroundColor: '#43a047!important',
    '&:hover': {
      backgroundColor: '#388e3c!important',
    },
  },
  dialogPaper: {
    maxWidth: '800px',
    background:"",
    borderRadius:"15px",
    width:'500px',
    height:'400px',
    maxHeight: 'calc(100% - 64px)',
    overflowY: 'unset',
  },
});























const Sendmoney = () => {

  const classes = useStyles();
  // const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState(0);
  const[title,setTitle]=useState('');

  const [sAccount,setAccount]=useState("number")


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleFromAccountChange = (event) => {
  //   setFromAccount(event.target.value);
  // };

  const handleToAccountChange = (event) => {
    setToAccount(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };






  const handleTransferClick = async () => {
    handleClickOpen();
    try {
      const res = await axios.get(
        "https://applicationfirst-382308.uc.r.appspot.com/getuser",
        { params: { toAccount, amount } }
      );
      console.log(res.data);
      if(res.success)
      console.log(res.data.message)
      setTitle( res.data.data.name);
      setAccount( res.data.data._id);
    } catch (error) {
      console.error(error);
    }
  };











const handleConfirm = async()=>{
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "https://applicationfirst-382308.uc.r.appspot.com/transfer",
      { toAccount, amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
 
handleClose()
  } catch (error) {
    console.error(error);
  }
}

  return (
    <div>
   <div className="form">
    
<h1> Enter account numebr and enter amount</h1>
      <TextField className={classes.textField} label="To Account" value={toAccount} onChange={handleToAccountChange} />
      <TextField className={classes.textField} label="Amount" value={amount} onChange={handleAmountChange} type="number" />
      <Button className={classes.submitButton} variant="contained" onClick={handleTransferClick}>Transfer Money</Button>
     
      <Dialog classes={{ paper: classes.dialogPaper }} open={open} onClose={handleClose}>
      <DialogTitle className={classes.title}>Confirm Transaction</DialogTitle>
      <DialogContent className={classes.textField}>
      <span style={{ color: 'red' }}>Account number:</span> {sAccount}
  <br />
  <span style={{ color: 'blue' }}>Account holder name:</span> {title}
  <br />
  <span style={{ color: 'green' }}>Amount transfer:</span> Rs {amount}
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button className={classes.cancelButton} onClick={handleClose}>
          Cancel
        </Button>
        <Button className={classes.confirmButton} onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
   </div>
    </div>
  )
}

export default Sendmoney
