import { Form, FormControl, FormLabel, Button,} from "react-bootstrap";

const BinaryAddition = () => {
    return <div>

        <Form>
            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Input 1 </FormLabel>
                <FormControl type = "input" placeholder = "1001 0011 0101 0010" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
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
                <FormControl type = "output" placeholder = "answer" />
            </Form.Group>

            <Form.Group className= "mb-3"
                        controlId= "exampleForm.ControlInput1">
                <FormLabel> Decimal Value </FormLabel>
                <FormControl type = "output" placeholder = "answer" />
            </Form.Group>



        </Form>

    </div>;
};

export default BinaryAddition;