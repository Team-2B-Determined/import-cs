import {Button, Col, Form, Row} from "react-bootstrap";

const Conversions = () => {
  return (
    <div>
        <h1>Conversions Page</h1>
        <Form>
            <Row>
                <Form.Group as={Col} controlId="formGridInputType">
                    <Form.Label>Input Type:</Form.Label>
                    <Form.Select aria-label="InputConversionType">
                        <option>Binary</option>
                        <option>Decimal</option>
                        <option>Hexadecimal</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridOutputType">
                    <Form.Label>Output Type:</Form.Label>
                    <Form.Select aria-label="OutputConversionType">
                        <option>Binary</option>
                        <option>Decimal</option>
                        <option>Hexadecimal</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridInputBox">
                    <Form.Label>Input Value:</Form.Label>
                    <Form.Control type="string" placeholder="10110101" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridOutputBox">
                    <Form.Label>Output Value:</Form.Label>
                    <Form.Control type="string" placeholder="Readonly converted output value here..." readOnly />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Convert
            </Button>

            <Form.Group controlId="Explanation">
                <Form.Label>Explanation:</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Lorem ipsum..." />
                <Button variant="primary" type="submit">
                    Next Step
                </Button>
                <Button variant="primary" type="submit">
                    Show All Steps
                </Button>
            </Form.Group>
        </Form>
    </div>
  );
};

export default Conversions;
