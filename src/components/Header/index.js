import React from "react";
import { Nav, Navbar, Form, Button, FormControl } from "react-bootstrap";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const HeaderNav = (props) => {
  const [state, setState] = React.useState({
    gilad: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if(event.target.checked){
      document.body.style.background = '#272424b0';
      document.getElementsByTagName('nav').style.background = '#272424b0';
    }
    else{
      document.body.style.background = 'none';
      document.getElementsByTagName('nav').style.background = 'grey';
    }
  };
  return (
    <>
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Abhishek Kumar</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#intoduction">Home</Nav.Link>
          <Nav.Link href="#intoduction">Introduction</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <FormControlLabel
          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label="Dark Mode"
        />
        </Nav>
      </Navbar>
    </>
  );
};

export default HeaderNav;
