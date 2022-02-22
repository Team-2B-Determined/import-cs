import {Button, Col, Form, Row} from "react-bootstrap";
import React from "react";

const FontEditor = () => {
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

export default FontEditor;