import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleMenuClick}
        >
          <AiOutlineMenu />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => console.log('Clicked on menu item 1')}>Menu Item 1</MenuItem>
        <MenuItem onClick={() => console.log('Clicked on menu item 2')}>Menu Item 2</MenuItem>
        <MenuItem onClick={() => console.log('Clicked on menu item 3')}>Menu Item 3</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
