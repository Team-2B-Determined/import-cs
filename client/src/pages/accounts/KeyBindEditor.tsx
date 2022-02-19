import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";
import React from "react";
import {forEach} from "react-bootstrap/ElementChildren";

const KeyBindEditor = () => {

    let keyBindDict = JSON.parse(localStorage.getItem("keyBinds") || '').KeyBindDict;
    let keyBindList = ["ifYouSeeThisItsError"];
    let modifiers = document.getElementsByTagName("select");
    let keys = document.getElementsByName("key");

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
        console.log("savingbinds...")
        let newMods = [""]
        for (let m = 0; m < modifiers.length; m++) {
            let modifierSelectElement = modifiers.item(m);
            if (modifierSelectElement != null && modifierSelectElement.name == "modifier") {
                let temp = modifierSelectElement.options[modifierSelectElement.selectedIndex].getAttributeNode("value");
                let value = temp != null ? temp.value : "";
                //newMods.push(modifierSelectElement.options[modifierSelectElement.selectedIndex].value || "");
                newMods.push(value || "");
                console.log(value);
            }
        }
        let newKeys = [""]
        for (let k = 0; k < keys.length; k++) {
            let keyFormElement = keys.item(k);
            if (keyFormElement != null && keyFormElement.getAttribute("name") == "key") {
                let temp = keyFormElement.getAttributeNode("value");
                let v = temp != null ? temp.value : "";
                //newKeys.push(keyFormElement.getAttribute("value") || "");
                newKeys.push(v || "");
                console.log(v || "");
            }
        }
        let j = 1;
        let newKeyBindString = [""];
        let newKeyBinds = JSON.parse(localStorage.getItem("keyBinds") || '');
        Object.keys(newKeyBinds.KeyBindDict).forEach(function(key) {
            newKeyBinds.KeyBindDict[key] = newMods[j] + "+" + newKeys[j];
            j++;
            newKeyBindString.push(newKeyBinds.KeyBindDict[key])
        });
        newKeyBinds.KeyBindString = newKeyBindString.slice(1,newKeyBindString.length-1);
        localStorage.setItem("keyBinds", JSON.stringify(newKeyBinds));
        alert(newKeyBinds.KeyBindString);
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
                                    <span className="input-group-text" id="">{e}</span>
                                </Col>
                                <select className="custom-select"
                                        name="modifier"
                                        id="inputGroupSelect01"
                                        defaultValue={extractModifier(keyBindList[i+1])}>
                                    <option value="alt">ALT</option>
                                    <option value="ctrl">CTRL</option>
                                    <option value="shift">SHIFT</option>
                                </select>
                                <FormControl
                                    name="key"
                                    placeholder="key"
                                    aria-label="key"
                                    aria-describedby="character for the hotkey"
                                    defaultValue={extractKey(keyBindList[i+1])}
                                    //onChange={event => }
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