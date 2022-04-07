//Kali

import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";
import AuthService from "../../services/auth.service";
import SettingsService from "../../services/settings.service";

const KeyBindEditor = () => {

    let keyBindDict = JSON.parse(localStorage.getItem("keyBinds") || '').KeyBindDict;

    /**
     * Holds React states for the custom keybinds
     */
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

    /**
     * Display name and path names for each customizable keybind action
     */
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

    /**
     * Restores keybinds to their defaults
     */
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
        saveBindsToAccount()
        window.location.reload();
    }

    /**
     * Handles change events for choosing a keybind's key
     * @param evt onChange event for choosing the key
     */
    function handleChangeKey(evt) {
        const value = evt.target.value;
        const action = boundActions[parseInt(evt.target.name)];
        const modifier = extractModifier(state[action]) || "error";
        setState({
            ...state,
            [action]: modifier + "+" + value
        });
    }

    /**
     * Handles change events for choosing a keybind's modifier
     * @param evt onChange event for choosing the modifier
     */
    function handleChangeMod(evt) {
        const value = evt.target.value;
        const action = boundActions[parseInt(evt.target.name)];
        const key = extractKey(state[action]) || "error";
        setState({
            ...state,
            [action]: value + "+" + key
        });
    }

    /**
     * Returns the modifier of a keybind from its string
     * @param str the full keybind string
     */
    function extractModifier(str) {
        return str.split("+",1)[0];
    }

    /**
     * Returns the key of a keybind from its string
     * @param str the full keybind string
     */
    function extractKey(str) {
        return str[str.length-1];
    }

    /**
     * Validates the current binds in the input forms.
     * Assigns error values to invalid binds.
     */
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

    /**
     * Attempts to save the state of the custom keybinds
     */
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
            saveBindsToAccount()
            window.location.reload();
        } else {
            //alert("invalid binds:" + valid.arr.toString());
        }
    }

    /**
     * Saves current settings to the user's account if they are logged in
     */
    function saveBindsToAccount() {
        //IF user logged in
        if (AuthService.isLoggedIn()) {
            //updateKeyboard( localStorage.user.email, newKeybinds.stringified )
            SettingsService.updateKeyboard(JSON.parse(localStorage.getItem("user") || '').email, localStorage.getItem('keyBinds'));
        }
    }

    /**
     * Returns error message based on error id
     * @param i error id number
     */
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
        <Container fluid="md">
            <Row>
                Keyboard Mappings
            </Row>
            <Row>
                <Col md={6}>
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
            <Container fluid="sm">
                <Row style={{marginTop:15, marginBottom:15}}>
                    <Col lg={6}>{
                        <InputGroup className="mb-3" hasValidation>
                            <Col xs={7} sm={8}>
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