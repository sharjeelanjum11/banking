import React,{useEffect,useState} from 'react';
import "./Profile.css";
import { BrowserRouter as Router, Routes, Link, Route,useNavigate } from "react-router-dom";
import { AiOutlineHome,AiOutlineSetting,AiOutlineTransaction,AiOutlineLogout } from 'react-icons/ai';

import { MdPayments,MdHelpCenter } from "react-icons/md";
import axios from 'axios';
import { message } from 'antd';
import { blue } from '@material-ui/core/colors';
import Sidebar from './Sidebar';
import Navbar from './Navbar';



const Profile = () => {

















  return (
    <>
    {/* <Navbar/> */}
<Sidebar/>
    </>
  );
};

export default Profile;



















{/* <div className="maind">
      <div className="sidediva">
        <div className="logo">
          <h1>PayLux</h1>
        </div>
        <div className="profavat">.....................</div>
        <div className="navs">
          <Link to="/">Home</Link>
          <Link to="/signup">Transactions</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/payments">Settings</Link>
        </div>
        <div className="botlinks">
          <Link to="/help">Help</Link>
          <Link to="#">Logout</Link>
        </div>
      </div>

      <div className="areaprof">
        <div className="balance">
          <h3>Total balnce</h3>
          <h1>67888$</h1>
        </div>
      </div>
    </div> */}