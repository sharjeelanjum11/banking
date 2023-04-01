import React from "react";
import { Form ,Input,message,notification } from "antd";

import { useNavigate,Link } from 'react-router-dom';
import axios from "axios";
// import "../style/Register.css";
const Register = () => {
 
 
 
  // const openNotification = () => {
  //   notification.open({
  //     message: 'Notification Title',
  //     description:
  //       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    
  //   });

  const navigate = useNavigate();
  const onfinishevent = async (values) => {
   try {
    const res = await axios.post('/register',values)
    if(res.data.success){
      message.success('Register successfuly')
      notification.open({
        message:'Notification opened',
       
      })
      navigate('/login')
    }else{
      message.error(res.data.message);
    }
    
   }catch (error) {
    console.log(error);
    message.error('Something went wrong')
   }
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishevent} className="register-form">
            <h1>Register Form</h1>
            <Form.Item label="Cnic" name="cnic">
    <Input type="text"  required/>
</Form.Item>
<Form.Item label="Name" name="name">
    <Input type="text"  required/>
</Form.Item>
<Form.Item label="Email" name="email">
    <Input type="Email"  required/>
</Form.Item>
<Form.Item label="Password" name="date">
    <Input type="date"  required/>
</Form.Item>
<Link to='/login'  className="m-2">Already Register? Login here</Link>
<button className="btn btn-danger" type="submit">Register</button>

        </Form>
      </div>
    </>
  );
};

export default Register;
