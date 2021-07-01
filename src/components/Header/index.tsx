import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="mx-3" href="">Movie Now</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{marginLeft: '75%'}}>
            <Nav className="mx-3">Welcome, Ana</Nav>
          </Nav>

          <Nav>
            <Button variant="outline-danger">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;