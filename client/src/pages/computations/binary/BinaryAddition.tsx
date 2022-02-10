import { Form, FormControl, FormLabel, Button,Offcanvas} from "react-bootstrap";
import React, {Component, useState} from "react";

const BinaryAddition = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div>

        <Form>
            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Input 1 </FormLabel>
                <FormControl type = "input" placeholder = "1001 0011 0101 0010" />
            </Form.Group>

            <Form.Select aria-label ="Default select example">
                <option value="+">+</option>
                <option value="-"> - </option>
                <option value="×">×</option>
                <option value="÷">÷</option>
            </Form.Select>


            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Input 2 </FormLabel>
                <FormControl type = "input" placeholder = "1111 0011 0111 1010" />
            </Form.Group>


        <Button variant="primary" type="submit" >
            Calculate
        </Button>
            <Button variant="outline-primary" type="submit" >
                Clear
            </Button>


            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Binary Value </FormLabel>
                <FormControl type = "output" placeholder = "answer ?" />
            </Form.Group>


            <Button variant="primary" onClick={handleShow}>
                Show Detail
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Full Explanation</Offcanvas.Title>
                </Offcanvas.Header>
                Binary Value
                <Offcanvas.Body>
                    Testing Off Canvas
                </Offcanvas.Body>
            </Offcanvas>



            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Decimal Value </FormLabel>
                <FormControl type = "output" placeholder = "answer ?" />
            </Form.Group>


            <Button variant="primary" onClick={handleShow}>
                Show Detail
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Full Explanation</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    Decimal Value:
                    <br/>
                    <br/>
                    Example:
                    <br/>
                    <br/>
                    170 + 204
                    <br/>
                    = 374 (Answer)
                </Offcanvas.Body>
            </Offcanvas>
            <br/><br/>

        </Form>

    </div>;
};

export default BinaryAddition;