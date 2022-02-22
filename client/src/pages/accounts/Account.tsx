// Edited by Thomas & Kali

import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import "./Account.css"
import {DarkModeContext} from "../../context/DarkModeProvider";
import KeyBindEditor from "./KeyBindEditor";
import FontEditor from "./FontEditor";



const Account = () => {
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('darkMode') || ''));
  const {setDarkMode} = useContext(DarkModeContext)

  const DarkLightMode = () => {
    return <>
      <div>
        Dark Mode
      </div>
      <label className="switch">
        <input className="checkbox"
               type="checkbox"
               defaultChecked={checked}
               onChange={(event) => {
                 setChecked(event.currentTarget.checked)
                 setDarkMode(event.currentTarget.checked)
                 localStorage.setItem('darkMode',JSON.stringify(!JSON.parse(localStorage.getItem('darkMode') || '')))
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
