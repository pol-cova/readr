import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='mx-auto'>
      <Navbar.Brand href="#home" style={{ fontSize: '24px', fontWeight: 'bold', padding:'20px'}}>ReadR</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#trend">Trend</Nav.Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#reviews">Reviews</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-light" className="mr-2">
            Login
          </Button>
          <Button variant="outline-light">Signup</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
