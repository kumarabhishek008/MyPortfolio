import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";

const HeaderNav = (props) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Abhishek Kumar</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Introduction</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default HeaderNav;
