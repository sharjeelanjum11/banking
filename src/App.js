import { useState } from 'react'

import './App.css'
import {BrowserRouter as Router,Routes, Link ,Route} from 'react-router-dom';

// import Contact from './Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Sendmoney from './components/Sendmoney';
function App() {


  return (
    <div className="App">
<Router>
  <Profile></Profile>
  <Routes>
    {/* <Route exact path = "/" element={<Profile/>} /> */}
    {/* <Route exact path = "/contact" element={<Contact/>} /> */}
    <Route exact path = "/signup" element={<Signup/>} />
    <Route exact path = "/login" element={<Login/>} />
    <Route exact path = "/admin-login" element={<Admin/>} />
    <Route exact path = "/smoney" element={<Sendmoney/>} />
  </Routes>

</Router>
    </div>
  )
}

export default App
