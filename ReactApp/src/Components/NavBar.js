import React from 'react';
import Logo from '../images/buelogo.jpg';
import {IconButton, MenuItem, Menu} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import '../style.css';


export default function NavBar() {

    
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <img className = 'logo' src= {Logo} alt="Smiley face"/>
            <ul className = 'nav-bar'> 
                <li>Home</li>
                <li>Setup</li>
                <li>Boards</li>
                <li>Services</li>
                {auth && (
            <div className = 'profile-icon'>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
            </ul>
        </div>
    )
}
