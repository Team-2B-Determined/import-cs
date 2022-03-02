import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import React from "react";
import FormRange from "react-bootstrap/FormRange";

const FontEditor = () => {

    let fontsPref = JSON.parse(localStorage.getItem('fontsPref') || '');

    /**
     * Holds React state for the font size and family from the form
     */
    const [state, setState] = React.useState(
        {
            family: fontsPref.family,
            fSize: fontsPref.fSize
        }
    )

    /**
     * List of font family options
     */
    const familyOptions = [
        "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
        "Arial",
        "Comic Sans MS",
        "Courier",
        "Georgia",
        "Impact",
        "Times New Roman"];

    /**
     * List of font family display names
     */
    const familyDisplay = [
        "Lato (Default)",
        "Arial",
        "Comic Sans MS",
        "Courier",
        "Georgia",
        "Impact",
        "Times New Roman"];

    /**
     * List of font sizing options
     */
    const fSizeOptions = [
        "0.6rem",
        "0.8rem",
        "1.0rem",
        "1.2rem",
        "1.4rem",
        "Custom"];

    /**
     * Holds React state for showing the custom size slider
     */
    const [isCustom, setCustom] =React.useState(
        {
            value: !fSizeOptions.includes(state.fSize)
        }
    )

    /**
     * Handles change events for choosing a font family
     * @param evt onChange event for choosing font family
     */
    function handleChangeFamily(evt) {
        setState({
            ...state,
            family: evt.target.value
        });
    }

    /**
     * Handles change events for choosing a font size
     * @param evt onChange event for choosing font size
     */
    function handleChangeFSize(evt) {
        let s = evt.target.value
        switch (s) {
            case "Custom":
                setCustom({
                    value: true
                })
                break;
            default:
                setCustom({
                    value: false
                })
                setState({
                    ...state,
                    fSize: s
                });
                break;
        }
    }

    /**
     * Returns the float of a size value in rem
     * @param str font size in rem
     */
    function getFSizeFloat(str) {
        return parseFloat(str.split("rem",1)[0])
    }

    /**
     * Handles change events for choosing a custom font size
     * @param evt onChange event for choosing custome font size
     */
    function handleChangeCustomFSize(evt) {
        setState({
            ...state,
            fSize: evt.target.value.toString() + "rem"
        });
    }

    /**
     * Saves current state of fonts preferences to local storage
     */
    const saveFonts = () => {
        console.log("saving fonts...");
        localStorage.setItem('fontsPref',
            JSON.stringify(
                {
                    family: state.family,
                    fSize: state.fSize
                }));
        window.location.reload();
    }

    function restoreDefaults(){
        localStorage.setItem('fontsPref',
            JSON.stringify(
                {
                    family: "Lato, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
                    fSize: "1.0rem"
                }));
        window.location.reload();
    }


    return <>
        <div>
            <Row>
                <Col>
                    Font Options
                </Col>
                <Col>
                    <Button type="submit"
                            onClick={restoreDefaults}>
                        Restore Defaults
                    </Button>
                </Col>
            </Row>
        </div>
        <Form>
            <Row className="align-items-center">
                <Col xs="auto" className="my-1">
                    <Form.Label
                        className="me-sm-2"
                        htmlFor="inlineFormCustomSelect"
                        visuallyHidden>
                    </Form.Label>
                    <Form.Select className="me-sm-2"
                                 id="inlineFormCustomSelect"
                                 onChange={handleChangeFamily}
                                 defaultValue={state.family}>
                        {familyOptions.map((e, i) =>
                            <option value={e}>{familyDisplay[i]}</option>
                        )}
                    </Form.Select>
                </Col>
                <Col xs="auto" className="my-1">
                    <Form.Label
                        className="me-sm-2"
                        htmlFor="inlineFormCustomSelect"
                        visuallyHidden>
                    </Form.Label>
                    <Form.Select className="me-sm-2"
                                 id="inlineFormCustomSelect"
                                 onChange={handleChangeFSize}
                                 defaultValue={(isCustom.value?"Custom":state.fSize)}>
                        {fSizeOptions.map((e, i) =>
                            <option value={e}>{(e==="1.0rem"?"Default":e)}</option>
                        )}
                    </Form.Select>
                </Col>
                <Col xs="auto" hidden={!isCustom.value}>
                    <FormRange min={0.5}
                               max={2.0}
                               step={0.1}
                               onChange={handleChangeCustomFSize}
                               defaultValue={getFSizeFloat(state.fSize)}>
                    </FormRange>
                    {getFSizeFloat(state.fSize).toFixed(1)}
                </Col>
                <Col xs="auto" className="my-1">
                    <Button type="submit"
                            onClick={saveFonts}>
                        Save
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
}

export default FontEditor;