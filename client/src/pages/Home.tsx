// contributors: Kali
import Logo from "../images/import_cs_logo.png"
import {Card, CardGroup, Col, Container, Nav, Row, Tab, Tabs} from "react-bootstrap";
import Algorithms from "./algorithms/Algorithms";
import Computations from "./computations/Computations";
import DataStructures from "./datastructures/DataStructures";
import Conversions from "./conversions/Conversions";

const Home = () => {
  return (
      <div>
          <Container>
              <Row>
                  <Col>
                      <Card>
                          <Card.Img variant="top" src={Logo} />
                          <Card.Body>
                              <Card.Title>Welcome to import CS</Card.Title>
                              <Card.Text>The online stepwise CS calculator</Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={8}>
                      <Card>
                          <Card.Body>
                              <Tabs defaultActiveKey="algorithms" id="home-quick-access" className="mb-3">
                                  <Tab eventKey="algorithms" title="Algorithms">
                                      <Algorithms/>
                                  </Tab>
                                  <Tab eventKey="datastructures" title="Data Structures">
                                      <DataStructures/>
                                  </Tab>
                                  <Tab eventKey="more" title="More">
                                      <div>Link to conversions?</div>
                                      <div>Link to calculations?</div>
                                      <div>Link to external resources?</div>
                                  </Tab>
                                  <Tab eventKey="about" title="About">
                                      <div>import CS</div>
                                      <div>import CS is an online stepwise calculator geared towards helping students, educators,</div>
                                      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique aliquam neque, vel varius nisi suscipit nec. Donec porta erat arcu, at imperdiet tortor tincidunt vel. Sed dictum pretium enim ultrices lobortis. Proin felis magna, venenatis ac rutrum a, volutpat et dui. Nulla ac orci sit amet risus aliquam interdum. Aliquam scelerisque massa sed felis dignissim bibendum. Phasellus eu ipsum in risus venenatis pharetra vitae fringilla mauris. Nunc at ante ut erat pharetra hendrerit nec ac nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>
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
