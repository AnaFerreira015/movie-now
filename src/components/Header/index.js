import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { StyledNav } from './styles';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand className="mx-3" href="">Movie Now</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="mr-auto">
            <Nav className="mx-3">Welcome, Ana</Nav>
          </StyledNav>

          <Nav>
            <Button variant="outline-danger">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default Header;