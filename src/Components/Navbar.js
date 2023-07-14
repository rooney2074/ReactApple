import React from 'react'
import './style.css'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav id='fixed' className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h1 className="navbar-brand" style={{color:'grey'}} href="/"><h1>Apple</h1></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Button id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className="mx-2" style={{backgroundColor:'purple',color:'white',borderRadius:'20px'}} variant='contained'>Home</Button>
         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </li>
        <li className="nav-item">
          <Button className="mx-2" style={{backgroundColor:'purple',color:'white',borderRadius:'20px'}} variant='contained' href="/">Contact</Button>
        </li>
        <li className="nav-item">
          <Button className="mx-2" style={{backgroundColor:'purple',color:'white',borderRadius:'20px'}} variant='contained' href="/">About</Button>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Button startIcon={<SearchIcon/>} className="btn btn-outline-success" type="submit"/>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar