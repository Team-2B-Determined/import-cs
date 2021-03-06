//<img src={"import_cs_logo.png"} alt={"import CS"}>
import {Badge, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {DarkModeContext} from "../context/DarkModeProvider";
import Fuse from "fuse.js";
import _features  from "../features"
import authService from "../services/auth.service";

const features:Record<string,any>[] = Object.entries(_features).map(([key, value])=>({name:key,...value}))

const Menu = () => {
  const {isDarkMode} = useContext(DarkModeContext)

  //darkMode toggle stuff
  const {setDarkMode} = useContext(DarkModeContext)
  const [query, setQuery] = useState('');

  const fuse = new Fuse(features, {
    keys: ['name', 'runtime', 'description'],
    includeScore: true
  });

  //darkmode stuff ripped from account page
  const DarkLightMode = () => {
    return <>
      <label className="switch">
        <input className="checkbox"
               type="checkbox"
               defaultChecked={isDarkMode}
               onChange={(event) => {
                 setDarkMode(event.currentTarget.checked)
               }}/>
        <span className="slider"></span>
      </label>
    </>
  }


  const SearchDropdown = () => (
    <Nav>
      <NavDropdown title="" show={query !== ""} drop="down">
        {fuse.search(query).slice(0,5).map(feature => feature.item).map((feature, i, arr) => (<>
            <NavDropdown.Item href={feature.href} style={{width: "calc(60px + 20vw)"}}>
              <div style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}
                   className="ms-2 me-auto">
                <div className="fw-bold">{feature.name}</div>
                {feature.description}
              </div>
              {feature.runtime ? <Badge bg="primary" pill>O({feature.runtime})</Badge>: null}

            </NavDropdown.Item>
            {i < arr.length - 1 ? <Dropdown.Divider/> : null}
          </>
        ))}
      </NavDropdown>
    </Nav>
  )
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{marginBottom: 20}}>
      <Container>
        <Navbar.Brand href="/">import CS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
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

          <SearchDropdown/>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              value={query}
              onChange={event => setQuery(event.currentTarget.value)}
              className="mr-2"
              aria-label="Search"
            />
          </Form>

          <Nav>
            <NavDropdown title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              <NavDropdown.Item href="/history">History</NavDropdown.Item>
              <NavDropdown.Divider />
              <div>
                {authService.isLoggedIn() ?
                    <NavDropdown.Item
                        onClick={authService.logout}
                        href = "/">
                      Logout</NavDropdown.Item> :
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>}
              </div>

            </NavDropdown>
          </Nav>

          <DarkLightMode/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
