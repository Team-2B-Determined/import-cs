import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

const KeyBindEditor = () => {

    let keyBindDict = JSON.parse(localStorage.getItem("keyBinds") || '').KeyBindDict;
    let keyBindList = ["ifYouSeeThisItsError"];
    Object.keys(keyBindDict).forEach(function(key) {
        keyBindList.push(keyBindDict[key]);
    });

    function extractModifier(str) {
        return str.split("+",1);
    }

    function extractKey(str) {
        return str[str.length-1];
    }

    const saveBinds = () => {
        alert();
    }

    return <>
        Keyboard Mappings
        {["Algorithms Page", "Computations Page", "Conversions Page", "Datastructures Page", "Account", "History", "Home Page"].map((e, i) =>
            <div>
                <Container>
                    <Row style={{marginTop:15, marginBottom:15}}>
                        <Col xs={4}>{
                            <InputGroup className="mb-3">
                                <Col xs={6}>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="">{e}</span>
                                    </div>
                                </Col>
                                <select className="custom-select"
                                        id="inputGroupSelect01"
                                        defaultValue={extractModifier(keyBindList[i+1])}>
                                    <option value="alt">ALT</option>
                                    <option value="ctrl">CTRL</option>
                                    <option value="shift">SHIFT</option>
                                </select>
                                <FormControl
                                    placeholder="assign hotkey"
                                    aria-label="assign hotkey"
                                    aria-describedby="character for the hotkey"
                                    value={extractKey(keyBindList[i+1])}
                                    //onChange
                                />
                                <Button
                                    variant="primary"
                                    id="save-binding"
                                    onClick={saveBinds}
                                >
                                    Save
                                </Button>
                            </InputGroup>
                        }
                        </Col>
                    </Row>
                </Container>
            </div>)}
    </>

}

export default KeyBindEditor;