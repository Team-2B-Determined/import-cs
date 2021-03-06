import {Button, Nav, Offcanvas} from "react-bootstrap";
import {FC, useState} from "react";
import CodeNavigator, {Step} from "./CodeNavigator";

import {startCase} from 'lodash';


export interface ExternalLink {
    name: string,
    url: string
}

export interface CalculatorPageProp {
    name: string,
    description: string,
    codeDisplay: string,
    steps: Step[]
    links: ExternalLink[],
    image?: string
}


const CalculatorPage: FC<CalculatorPageProp> = ({name, codeDisplay, description, steps, links, image}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const title = startCase(name)

    return (
        <div data-testid="calculator-page-root">
            <Button variant="primary" onClick={handleShow}>
                Learn more
            </Button>
            <br/><br/>

            <CodeNavigator steps={steps} codeDisplay={codeDisplay}/>

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

export default CalculatorPage;