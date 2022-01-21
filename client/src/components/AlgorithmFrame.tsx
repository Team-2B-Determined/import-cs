import {Button, Form, Nav, Offcanvas} from "react-bootstrap";
import {useState} from "react";
import CodeNavigator from "./CodeNavigator";

export interface ExternalLinks {
    name: string,
    url: string
}

export interface Parameter {
    name: string,
    type: string,
    default: string
}

export interface Algorithm {
    title: string,
    description: string,
    parameters: Parameter[],
    links: ExternalLinks[],
    image?: string
}

const AlgorithmFrame = ({title, description, parameters, links, image}: Algorithm) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Show details
            </Button>
            <br/><br/>

            <h3>{title}</h3>
            {image ? <img src={image} width="50" height="50"/> : null}<br/>

            <Form>
                {parameters.map((parameter) => (
                    <Form.Group>
                        <Form.Label>{parameter.name}</Form.Label>
                        <Form.Control placeholder={parameter.default}/>
                    </Form.Group>
                ))}
            </Form>

            <CodeNavigator/>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>{title}</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {description}
                    <br/>
                    <br/>
                    <h4>External Links</h4>
                    {links.map((link) => (
                        <Nav.Link href={link.url}>{link.name}</Nav.Link>
                        ))}

                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
};

export default AlgorithmFrame;