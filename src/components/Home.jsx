import React from 'react'
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
 
        <Navbar/>
      <div className="bg">
        <div className="container">
          <h1>Making banking a breeze with PayLux </h1>
          <p>
            Send and Recieve Money within seconds From Anywhere in the world
          </p>
          <Paper
            component="form"
            sx={{
              p: "0px 0px",
              m: "auto",
              mt: "10px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="I am Looking For"
              
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              style={{
                backgroundColor: "#102030",
                borderRadius: "0px",
                color: "white",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div className="bg" style={{ backgroundColor: "white" }}>
        <div className="about">
          <h1>
            What is <span style={{ color: "#102030" }}>MicroMate?</span>
          </h1>
          <hr />
          <p>
            MicroMate is a microjob providng place that provide a large number of the online job
            services Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quasi ullam doloremque quam laborum molestias minima esse in eos dolorum nisi eveniet deleniti, culpa ab provident deserunt quod inventore cumque temporibus!Lorem export default .
            MicroMate is a microjob providng place that provide a large number of the online job
            services Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quasi ullam doloremque quam laborum molestias minima esse in eos dolorum nisi
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
