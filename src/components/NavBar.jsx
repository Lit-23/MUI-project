// import styled from '@emotion/styled'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { styled, AppBar, Box, Toolbar, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap:"20px",
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const src = 'https://firebasestorage.googleapis.com/v0/b/employee-management-9707e.appspot.com/o/1704110927510monkey-bananav3.avif?alt=media&token=c8a85245-ee96-439e-a9b9-ad67d167770e';

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>LitFlix</Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>
        <Search>
          <InputBase placeholder='search...'/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar  onClick={handleOpen} sx={{width:30, height:30}} src={src} />
        </Icons>
        <UserBox onClick={handleOpen}>
          <Avatar sx={{width:30, height:30}} src={src} />
          <Typography variant='span'>Con</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose} >Profile</MenuItem>
        <MenuItem onClick={handleClose} >My account</MenuItem>
        <MenuItem onClick={handleClose} >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar