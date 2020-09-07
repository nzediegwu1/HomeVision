import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import { logo } from '../images';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" className="app-logo" /> HomeVision
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search homes" className="mr-sm-2" />
      </Form>
    </Navbar>
  );
};

export default NavBar;
