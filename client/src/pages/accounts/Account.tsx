// Edited by Thomas

import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import "./Account.css"
import {DarkModeContext} from "../../context/DarkModeProvider";


const Account = () => {
  const [checked, setChecked] = useState(false);
  const {setDarkMode} = useContext(DarkModeContext)


  const DarkLightMode = () => {
    return <>
      <div>
        Dark Mode
      </div>
      <label className="switch">
        <input className="checkbox"
               type="checkbox"
               defaultChecked={JSON.parse(localStorage.getItem('darkMode') || '')}
               onChange={(event) => {
                 setChecked(event.currentTarget.checked)
                 setDarkMode(event.currentTarget.checked)
                 localStorage.setItem('darkMode',JSON.stringify(!JSON.parse(localStorage.getItem('darkMode') || '')))
               }}/>
        <span className="slider"></span>
      </label>
    </>
  }

  const KeyboardMapping = () => {
    return <>
      Keyboard Mappings
      {["Home Page", "Algorithms Page", "Computations Page", "Conversions Page", "Datastructures Page", "History"].map((e, i) =>
        <div>
          <Container>
            <Row style={{marginTop:15, marginBottom:15}}>
              <Col xs={3}>Alt + <strong>{i + 1}</strong> = {e}</Col>
              <Col xs={2}>{i === 2 ? <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={i + 1}
                  />
                  <Button variant="primary" id="button-addon2">
                    Save
                  </Button>
                </InputGroup> :
                <Button variant="outline-secondary" id="button-addon2">
                  Change
                </Button>
              }
              </Col>
            </Row>
          </Container>
        </div>)}
    </>
  }
  const Font = () => {
    return <>
      <div>
        Font
      </div>
      <Form>
        <Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Label
              className="me-sm-2"
              htmlFor="inlineFormCustomSelect"
              visuallyHidden
            >
            </Form.Label>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
              <option value="0">Arial</option>
              <option value="1">Times New Roman</option>
              <option value="2">Roboto</option>
              <option value="3">Lora</option>
            </Form.Select>
          </Col>
          <Col xs="1" className="my-1">
            <Form.Label
              className="me-sm-2"
              htmlFor="inlineFormCustomSelect"
              visuallyHidden
            >
            </Form.Label>
            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
              <option value="0">12</option>
              <option value="1">14</option>
              <option value="2">16</option>
              <option value="3">18</option>
            </Form.Select>
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </>
  }

  return (<>
    Hello, User! You registered on June 1, 2020
    <hr/>
    <DarkLightMode/>
    <hr/>
    <Font/>
    <hr/>
    <KeyboardMapping/>
  </>);
};

export default Account;
