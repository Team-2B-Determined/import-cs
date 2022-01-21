import {Button, Form, Card, Offcanvas, ListGroup, Container, Row, Col} from "react-bootstrap";
import {useState} from "react";



const PrototypeNavPage = () => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Show details
            </Button>
            <br/><br/>

            <h3>SelectionSort</h3>
            <img src="https://i.imgur.com/EerzUpo.png" width="50" height="50"/><br/>

            <Form>
                <Form.Group>
                    <Form.Label>Array</Form.Label>
                    <Form.Control placeholder="['mango', 'apple', 'papaya', 'orange', 'lychee', 'cherry', 'banana', 'bread', 'pineapple', 'pear', 'strawberry', 'kiwi']" readOnly />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Size</Form.Label>
                    <Form.Control placeholder="12" readOnly />
                </Form.Group>
            </Form>
            <br/><br/>

            <Button variant="outline-primary" size="sm">
                <img src="https://static.thenounproject.com/png/1297552-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm">
                <img src="https://www.vhv.rs/dpng/d/437-4375289_rewind-arrow-svg-png-icon-free-download-rewind.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm">
                <img src="https://e7.pngegg.com/pngimages/85/844/png-clipart-computer-icons-arrow-icon-design-encapsulated-postscript-left-arrow-angle-internet.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm">
                <img src="https://static.thenounproject.com/png/74838-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm">
                <img src="https://cdn0.iconfinder.com/data/icons/playback-1/24/fast-forward-512.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm">
                <img src="https://static.thenounproject.com/png/1297558-200.png" width="25" height="25"/><br/>
            </Button>
            <br/>

            <Card>
                <Container>
                    <Card.Body>
                        <Row>
                            <Col style={{width: 100}}>
                                <ListGroup>
                                    <ListGroup.Item>{"Declare integers: i, j, min_idx"}</ListGroup.Item>
                                    <ListGroup.Item>{"For (i = 0; i < n-1; i++)"}</ListGroup.Item>
                                    <ListGroup.Item active>{".....min_idx = i"}</ListGroup.Item>
                                    <ListGroup.Item>{".....For (j = i+1; j < n; j++)"}</ListGroup.Item>
                                    <ListGroup.Item>{".....If arr[j] < arr[min_idx], then mid_idx = j"}</ListGroup.Item>
                                </ListGroup>
                            </Col>

                            <Col>
                                {"['mango'] -> [apple] -> [papaya] -> [orange] -> [lychee] -> [cherry] -> [banana] -> [bread] -> [pineapple] -> [] -> [] -> []"}
                            </Col>



                        </Row>

                    </Card.Body>
                </Container>
            </Card>


            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>Selection Sort</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>

        </div>
    );
};

export default PrototypeNavPage;