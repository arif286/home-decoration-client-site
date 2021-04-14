import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <>
        <Navbar expand="md">
          <h3
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
            }}
            href="#home"
          >
            Interior <span style={{fontWeight:500}}>Design</span>{" "}
          </h3>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className="header-link" to="/home">
                Home
              </NavLink>
              <NavLink className="header-link" to="#link">
                About us
              </NavLink>
              <NavLink className="header-link" to="#link">
                Projects
              </NavLink>
              <NavLink className="header-link" to="/admin">
                Admin
              </NavLink>
              <NavLink className="header-link" to="/login">
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
};

export default NavBar;