// Edited by Thomas & Kali

import React, {useContext, useState} from "react";
import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import "./Account.css"
import {DarkModeContext} from "../../context/DarkModeProvider";
import KeyBindEditor from "./KeyBindEditor";
import FontEditor from "./FontEditor";
import authService from "../../services/auth.service";



const Account = () => {
  const {isDarkMode} = useContext(DarkModeContext)
  const {setDarkMode} = useContext(DarkModeContext)

  const getWelcome = () => {

    if(authService.isLoggedIn()) {

      // @ts-ignore
      let user = JSON.parse(localStorage.getItem("user"))
      let userName = user.email.split('@')[0]
      return "Welcome " + userName + "!"
    }
    else {
      return "Welcome! Please feel free to adjust your settings here. If you wish your settings to persist across browsers and devices, please log in or register an account!"
    }
  }

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
    {getWelcome()}
    <hr/>
    <DarkLightMode/>
    <hr/>
    <FontEditor/>
    <hr/>
    <KeyBindEditor/>
  </>);
};

export default Account;
