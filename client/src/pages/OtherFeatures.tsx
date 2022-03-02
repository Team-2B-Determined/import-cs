//authors:kali

import {Card, CardGroup, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import Logo from "../images/import_cs_logo.png";
import Algorithms from "./algorithms/Algorithms";
import DataStructures from "./datastructures/DataStructures";
import React, {useContext, useState} from "react";
import {DarkModeContext} from "../context/DarkModeProvider";
import FontEditor from "./accounts/FontEditor";
// import {ThemeContext, themes} from '../context/ThemeContext';
// import ThemeButton from '../components/ThemeButton';

const OtherFeatures = () => {
    function Toolbar(props) {
        return (
            <button onClick={props.changeTheme}>
                Change Theme
            </button>
        );
    }


    const [checked, setChecked] = useState(false);
    const {setDarkMode} = useContext(DarkModeContext)

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
        <div>
            <Container fluid>
                <Row>
                    <Col xs={8} sm={6} md={4} lg={true}>
                        <DarkLightMode/>
                    </Col>
                    <Col>
                        <FontEditor/>
                    </Col>
                </Row>
            </Container>
            <CardGroup style={{color:"blue"}}>
                <Card>
                    Sample Text to editor
                </Card>
                <Card style={{color:"red"}}>
                    Element 2
                </Card>
                <Card>
                    <p>
                        Third box
                    </p>
                </Card>
            </CardGroup>
        </div>
    );
};

export default OtherFeatures;