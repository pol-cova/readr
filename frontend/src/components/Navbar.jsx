import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="justify-content-center">
      <Navbar.Brand href="#home" style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Your Logo
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#trend" style={{ fontSize: '18px' }}>
          Trend
        </Nav.Link>
        <Nav.Link href="#home" style={{ fontSize: '18px' }}>
          Home
        </Nav.Link>
        <Nav.Link href="#reviews" style={{ fontSize: '18px' }}>
          Reviews
        </Nav.Link>
      </Nav>
      <Nav>
        <Button variant="outline-light" className="mr-2" style={{ fontSize: '18px' }}>
          Login
        </Button>
        <Button variant="outline-light" style={{ fontSize: '18px' }}>
          Signup
        </Button>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
