import {Button, Col, Container, Form, Row} from "react-bootstrap";
import CodeNavigator from "../../components/CodeNavigator";

const BinarySearchTree = () => {
  return (
      <div>
        <Container>
          <Row>
            <Col>
              <Form>
                <h3>Binary Search Tree</h3>
                <img src="https://static.thenounproject.com/png/642305-200.png" width="50" height = "50"/><br/>
                <br/>
                <Form.Group controlId="formParameter1">
                  <Form.Label>Array</Form.Label>
                  <Form.Control type="p1" placeholder="['mango', 'apple', 'papaya', 'orange', 'lychee', 'cherry', 'banana', 'bread', 'pineapple',..." />
                </Form.Group><br/>
                <CodeNavigator/>
              </Form>
            </Col>

            <Col>
              <h3>About...</h3><br/>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br/><br/>
                [External Links]
              </div>
            </Col>
          </Row>

        </Container>
      </div>
  );
};

export default BinarySearchTree;
