import React from 'react';
import { Navbar } from 'react-bootstrap';
import { logo } from '../images';

const NavBar = () => {
  return (
    <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
      className="justify-content-between"
    >
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" className="app-logo" /> HomeVision
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
