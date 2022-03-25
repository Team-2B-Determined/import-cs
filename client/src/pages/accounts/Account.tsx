// Edited by Thomas & Kali

import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import "./Account.css"
import {DarkModeContext} from "../../context/DarkModeProvider";
import KeyBindEditor from "./KeyBindEditor";
import FontEditor from "./FontEditor";



const Account = () => {
  const {isDarkMode} = useContext(DarkModeContext)
  const {setDarkMode} = useContext(DarkModeContext)

  const DarkLightMode = () => {
    return <>
      <div>
        Dark Mode
      </div>
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

  return (<>
    Hello, User! You registered on June 1, 2020
    <hr/>
    <DarkLightMode/>
    <hr/>
    <FontEditor/>
    <hr/>
    <KeyBindEditor/>
  </>);
};

export default Account;
