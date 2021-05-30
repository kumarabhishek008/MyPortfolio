import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const HeaderNav = (props) => {
  const [state, setState] = React.useState({
    gilad: false,
  });
  return (
    <>
      <Navbar bg="info" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Abhishek Kumar</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#intoduction">Home</Nav.Link>
          <Nav.Link href="#intoduction">Introduction</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#footer-section">Contact</Nav.Link>
          {/* <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label="Dark Mode"
        /> */}
        </Nav>
      </Navbar>
    </>
  );
};

export default HeaderNav;
