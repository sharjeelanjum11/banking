import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";
import { Apps, Menu } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LoginIcon from '@mui/icons-material/Login';
import PaymentsIcon from '@mui/icons-material/Payments';
import { makeStyles } from "@mui/styles";

// Define your custom styles
const useStyles = makeStyles({
  menuSliderContainer: {
    width: 250,
    background: "#fffa9d",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: "150px",
    height: "150px",
  },
  listItem: {
    color: "tan",
  },
});

const listItems = [
  {
    listIcon: <HomeIcon />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <LoginIcon />,
    listText: "Login",
    listPath: "/login",
  },
  {
    listIcon: <PaymentsIcon />,
    listText: "Send Money",
    listPath: "/smoney",
  },

  {
    listIcon: <AccountBalanceIcon/>,
    listText: "Transactions",
    listPath: "/transactions",
  },
  {
    listIcon: <ContactMailIcon />,
    listText: "Contacts",
    listPath: "/contact",
  },
];

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar
        className={classes.avatar}
        src="https://i.ibb.co/rx5DFbs/avatar.png"
        alt="Juaneme8"
      />
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem
            className={classes.listItem}
            button
            key={index}
            component={Link}
            to={listItem.listPath}
            onClick={toggleSlider}
          >
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ backgroundColor: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <Menu style={{ color: "red" ,width:"80px" ,height:"40px"}} />
            </IconButton>
            <h1 style={{ color: "tan" }}>PayLux</h1>
            <Box sx={{ flexGrow: 1 }} />
            <Box display={{ xs: "none", md: "block" }}>
              <Avatar
                className={classes.avatar}
                src="https://i.ibb.co/rx5DFbs/avatar.png"
                alt="Juaneme8"
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="left" onClose={toggleSlider}>
        {sideList()}
      </Drawer>
    </>
  );
};

export default Sidebar;
