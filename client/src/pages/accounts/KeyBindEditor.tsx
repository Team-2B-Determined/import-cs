//Kali

import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";

const KeyBindEditor = () => {

    let keyBindDict = JSON.parse(localStorage.getItem("keyBinds") || '').KeyBindDict;

    const [state, setState] = React.useState({
        algorithms: keyBindDict["algorithms"],
        computations: keyBindDict["computations"],
        datastructures: keyBindDict["datastructures"],
        conversions: keyBindDict["conversions"],
        account: keyBindDict["account"],
        history: keyBindDict["history"],
        home: keyBindDict["home"]});
    const [valid, setValid] = React.useState(
        {arr: [0, 0, 0, 0, 0, 0, 0]}
    )
    const boundDisplay = [
        "Algorithms Page",
        "Computations Page",
        "Datastructures Page",
        "Conversions Page",
        "Account",
        "History",
        "Home Page"];
    const boundActions = [
        "algorithms",
        "computations",
        "datastructures",
        "conversions",
        "account",
        "history",
        "home"];
    function restoreDefaults() {
        localStorage.setItem('keyBinds',
            JSON.stringify(
                {KeyBindString: "alt+1,alt+2,alt+3,alt+4,alt+8,alt+9,alt+0",
                    KeyBindDict: {
                        algorithms: "alt+1",
                        computations: "alt+2",
                        datastructures: "alt+3",
                        conversions: "alt+4",
                        account: "alt+8",
                        history: "alt+9",
                        home: "alt+0"}}));
        window.location.reload();
    }

    function handleChangeKey(evt) {
        const value = evt.target.value;
        const action = boundActions[parseInt(evt.target.name)];
        const modifier = extractModifier(state[action]) || "error";
        setState({
            ...state,
            [action]: modifier + "+" + value
        });
    }

    function handleChangeMod(evt) {
        const value = evt.target.value;
        const action = boundActions[parseInt(evt.target.name)];
        const key = extractKey(state[action]) || "error";
        setState({
            ...state,
            [action]: value + "+" + key
        });
    }

    function extractModifier(str) {
        return str.split("+",1)[0];
    }

    function extractKey(str) {
        return str[str.length-1];
    }

    function validateBinds() {
        let validationList = [""];
        let success = true;
        let validationState = valid.arr;
        Object.keys(state).forEach(function(key) {
            let uniqueBind = state[key];
            if (uniqueBind.length - extractModifier(uniqueBind).length != 2) {
                // error not valid bind
                validationState[boundActions.indexOf(key)] = 1;
                success = false;
                validationList.push("e1");
            } else if (validationList.includes(uniqueBind)) {
                // error not unique binds
                validationState[boundActions.indexOf(key)] = 2;
                validationState[validationList.indexOf(uniqueBind)-1] = 2;
                success = false;
                validationList.push("e2");
            } else {
                validationState[boundActions.indexOf(key)] = 0;
                validationList.push(uniqueBind);
            }});
        setValid({arr: validationState});
        return success;
    }

    const saveBinds = () => {
        if (validateBinds()) {
            console.log("savingbinds...");
            let newKeyBindString = [""];
            Object.keys(state).forEach(function (key) {
                newKeyBindString.push(state[key]);
            });
            let formatString = newKeyBindString.toString().substring(1);
            localStorage.setItem('keyBinds',
                JSON.stringify(
                    {
                        KeyBindString: formatString,
                        KeyBindDict: {
                            algorithms: state["algorithms"],
                            computations: state["computations"],
                            datastructures: state["datastructures"],
                            conversions: state["conversions"],
                            account: state["account"],
                            history: state["history"],
                            home: state["home"]
                        }
                    }));
            console.log(formatString);
            //window.location.reload();
        } else {
            alert("invalid binds:" + valid.arr.toString());
        }
    }

    function errorCodeMessage(i) {
        switch (i) {
            case 1:
                return "Please enter one single character";
            case 2:
                return "Please enter a unique binding";
            default:
                return "";
        }
    }

    return <>
        <Container>
            <Row>
                Keyboard Mappings
            </Row>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Col>
                            <Button
                                variant="secondary"
                                id="restoreDefaults"
                                onClick={restoreDefaults}>
                                Restore Defaults
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                variant="primary"
                                id="save-binding"
                                onClick={saveBinds}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        {boundDisplay.map((e, i) =>
        <div>
            <Container>
                <Row style={{marginTop:15, marginBottom:15}}>
                    <Col xs={8}>{
                        <InputGroup className="mb-3" hasValidation>
                            <Col xs={8}>
                                <span className="input-group-text"
                                      id=""
                                >{e}</span>
                            </Col>
                            <select className="custom-select"
                                    name={i.toString()}
                                    id="inputGroupSelect01"
                                    defaultValue={extractModifier(state[boundActions[i]])}
                                    onChange={handleChangeMod}>
                                <option value="alt">ALT</option>
                                <option value="ctrl">CTRL</option>
                                <option value="shift">SHIFT</option>
                            </select>
                            <FormControl
                                name={i.toString()}
                                placeholder="key"
                                aria-label="key"
                                aria-describedby="character for the hotkey"
                                defaultValue={extractKey(state[boundActions[i]])}
                                onChange={handleChangeKey}
                                required
                                isInvalid={!(valid.arr[i]==0)}
                            />
                            <FormControl.Feedback type="invalid">
                                {errorCodeMessage(valid.arr[i])}
                            </FormControl.Feedback>
                        </InputGroup>
                    }
                    </Col>
                </Row>
            </Container>
        </div>)}
    </>

}

export default KeyBindEditor;