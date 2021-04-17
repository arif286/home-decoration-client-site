import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
      <>
        <Navbar bg="light" expand="md">
          <Navbar.Brand href="#home">Interior Design </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="#link">About us</NavLink>
              <NavLink to="#link">Projects</NavLink>
              <NavLink to="/admin">Admin</NavLink>
              <NavLink to="/login">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default NavBar;