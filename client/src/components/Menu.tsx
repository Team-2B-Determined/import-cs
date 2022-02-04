//<img src={"import_cs_logo.png"} alt={"import CS"}>
import {Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {DarkModeContext} from "../context/DarkModeProvider";

const Menu = () => {
  //darkMode toggle stuff
  const [checked, setChecked] = useState(false);
  const {setDarkMode} = useContext(DarkModeContext)

  //darkmode stuff ripped from account page
  const DarkLightMode = () => {
    return <>
      <label className="switch">
        <input className="checkbox" type="checkbox" checked={checked}
               onChange={(event) => {
                 setChecked(event.currentTarget.checked)
                 setDarkMode(event.currentTarget.checked)
               }}/>
        <span className="slider"></span>
      </label>
    </>
  }


  return (
    <Navbar collapseOnSelect expand="lg"  bg="primary" variant="dark" style={{marginBottom: 20}}>
      <Container>
        <Navbar.Brand href="/">import CS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Calculator" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/algorithms">Algorithms</NavDropdown.Item>
              <NavDropdown.Item href="/computations">
                Computations
              </NavDropdown.Item>
              <NavDropdown.Item href="/datastructures">
                Data Structures
              </NavDropdown.Item>
              <NavDropdown.Item href="/conversions">
                Conversions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/otherFeatures">Other Features</Nav.Link>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button href="/search">Search</Button>
          </Form>
            <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/account">Account</NavDropdown.Item>
            <NavDropdown.Item href="/history">History</NavDropdown.Item>
            <Dropdown.Divider />
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          </NavDropdown>
            </Nav>

          <DarkLightMode/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
