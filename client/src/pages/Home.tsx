// contributors: Kali
import Logo from "../images/import_cs_logo.png"
import {Card, Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import Algorithms from "./algorithms/Algorithms";
import DataStructures from "./datastructures/DataStructures";
import React from "react";

const Home = () => {

    const LogoSplash = () => {
        return <>
            <Card>
                <Card.Img variant="top" src={Logo}/>
                <Card.Body>
                    <Card.Title>Welcome to import CS</Card.Title>
                    <Card.Text>The online stepwise CS calculator</Card.Text>
                </Card.Body>
            </Card>
        </>
    }

    const AlgorithmsTab = () => {
        return <>
            <a href={"/algorithms"}>View Main Page</a>
            <Algorithms/>
        </>
    }

    const DataStructuresTab = () => {
        return <>
            <a href={"/datastructures"}>View Main Page</a>
            <DataStructures/>
        </>
    }

    const MoreTab = () => {
        return <>
            <div>Links to:</div>
            <p>
                <a href={"/calculations"}>Calculations Page</a>
            </p>
            <p>
                <a href={"/conversions"}>Conversions Page</a>
            </p>
            <div>External Resources:</div>
            <p>
                <a href={"https://www.w3schools.com/bootstrap5/index.php"}>W3 Schools</a>
            </p>
        </>
    }

    const AboutTab = () => {
        return <>
            <h2>import CS</h2>
            <p>import CS is an online stepwise calculator geared towards helping students, educators, and anyone
                interested in demonstrating computer science concepts.
            </p>
            <p>This is Team TBD's Senior Project at CSULB.</p>
            <p>The Github for this project can be found
                <a href={"https://github.com/Team-2B-Determined/import-cs"}>here</a>
            </p>
        </>
    }

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={8} sm={6} md={4} lg={true}>
                        <LogoSplash/>
                    </Col>
                    <Col sm={12} lg={8}>
                        <Card>
                            <Card.Body>
                                <Tabs defaultActiveKey="algorithms" id="home-quick-access" className="mb-3">
                                    <Tab eventKey="algorithms" title="Algorithms">
                                        <AlgorithmsTab/>
                                    </Tab>
                                    <Tab eventKey="datastructures" title="Data Structures">
                                        <DataStructuresTab/>
                                    </Tab>
                                    <Tab eventKey="more" title="More">
                                        <MoreTab/>
                                    </Tab>
                                    <Tab eventKey="about" title="About">
                                        <AboutTab/>
                                    </Tab>
                                </Tabs>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
