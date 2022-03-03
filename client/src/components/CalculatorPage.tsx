import {Button, Nav, Offcanvas} from "react-bootstrap";
import {FC, useState} from "react";
import CodeNavigator, {Step} from "./CodeNavigator";
import {SortingAlgorithms} from "../pages/algorithms/Sorting";

import {startCase} from 'lodash';
import features from "../features";

export type CalculatorFeature = SortingAlgorithms

export interface ExternalLink {
    name: string,
    url: string
}

export interface CalculatorPageProp {
    calculatorFeature: CalculatorFeature,
    steps: Step[]
    links: ExternalLink[],
    image?: string
}


const CalculatorPage: FC<CalculatorPageProp> = ({calculatorFeature, steps, links, image}) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const title = startCase(calculatorFeature)

    return (
        <div>
            {}
            <Button variant="primary" onClick={handleShow}>
                Show details
            </Button>
            <br/><br/>

            <h3>{title}</h3>
            {image ? <img src={image} width="50" height="50"/> : null}<br/>

            <br/>
            <CodeNavigator steps={steps} calculatorFeature={calculatorFeature}/>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>{title}</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {features[title].description}
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