import { Button, Col, Container, Form, FormControl, InputGroup , Offcanvas} from "react-bootstrap";
import React, {useState } from "react";
import { HistoryRow } from "../accounts/History";
import { useLocation } from "react-router-dom";
import {add, sub, mul, div} from "../../components/computations/calc";
import Badge from 'react-bootstrap/Badge'



type computationType = '+' | '-' | '×' | '÷'  ;
const computationLookUp = { "+": 'BinaryAddition', "-": 'BinarySubtraction', "×": 'BinaryMultiplication', "÷": 'BinaryDivision' }

const isBinary = (inputValue) => {
let binList = ['0','1']
let ivArray = inputValue.split("")
for(let i = 0; i < ivArray.length; i++){
    if(binList.indexOf(ivArray[i]) < 0){
        return false;
    }
}
return true;
};

const Computations = () => {
    const location: any = useLocation();
    console.log(location.state);
    const [numbersInput1, setNumbersInput1] = useState<string>(location.state === null ? "" : location.state.input.split(",")[0]);
    let [numbersInput2, setNumbersInput2] = useState<string>(location.state === null ? "" : location.state.input.split(",")[1]);

    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [computation, setComputation] = useState<computationType>("+");
    const [result, setResult] = useState<string>();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getDetailTittle = () => {
        if (computation === '+')
            return "Binary Addition Explanation"
        if (computation === '-')
            return "Binary Subtraction Explanation"
        if (computation === '×')
            return "Binary Multiplication Explanation"
        if (computation === '÷')
            return "Binary Division Explanation"

    }

    const getDetailTittleDescription = () => {
        if (computation === '+')
            return "Binary Addition Explanation"
        if (computation === '-')
            return "Binary Subtraction Explanation"
        if (computation === '×')
            return "Binary Multiplication Explanation"
        if (computation === '÷')
            return "Binary Division Explanation"
    }


    const handleSolve = () => {
        if (!isBinary(numbersInput1) || (!isBinary(numbersInput2))){
            alert("ERROR: Invalid Binary Input Value")
            return
        }

        switch (computation){
            case "+":
                setResult(add(numbersInput1,numbersInput2))
                break
            case "-":
                setResult(sub(numbersInput1,numbersInput2))
                break
            case "×":
                setResult(mul(numbersInput1,numbersInput2))
                break
            case "÷":
                if (parseInt(numbersInput2)===0) {
                    alert("ERROR: Cannot Divide By 0")
                    break
                }
                    setResult(div(numbersInput1, numbersInput2))
                    break

        }

        historyRows.push({
            calculatorFeature: computationLookUp[computation],
            input: `${numbersInput1},${numbersInput2}`, // numbersInput1 + ',' + numbersInput2
            pathname: "/computations",
        });

        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    };

    const ComputationsDropdown = () => (
        <Form.Group controlId="formBasicSelect">
            <Form.Select
                value={computation}
                onChange={(e) => {
                    console.log(e);
                    setComputation(e.target.value as computationType);
                }}
            >

                <option value={'+'}>+</option>
                <option value={'-'}>-</option>
                <option value={'×'}>×</option>
                <option value={'÷'}>÷</option>

            </Form.Select>
        </Form.Group>
    );


    return (

        <Container>
            <h1>Welcome to Computation Page <Badge pill bg = "primary"> New</Badge> </h1>
            <h4>Binary Computations-Add, Subtract, Multiply, or Divide <Badge pill bg = "success"> New </Badge> </h4>

            <Col xs={10}>
                <InputGroup className="mb-3">
                    <FormControl
                        value={numbersInput1}
                        onChange={(e) => setNumbersInput1(e.target.value)}
                        placeholder="1st Binary Input Number"
                        aria-describedby="basic-addon2"
                    />
                    <ComputationsDropdown />
                    <FormControl
                        value={numbersInput2}
                        onChange={(e) => setNumbersInput2(e.target.value)}
                        placeholder="2nd Binary Input Number"

                        aria-describedby="basic-addon2"
                    />
                    <Button variant="primary" id="button-addon2" onClick={handleSolve}>
                        Solve
                    </Button>
                    <Button variant="outline-primary" id="button-addon2" onClick={()=>{setNumbersInput1(""); setNumbersInput2("");setResult("")}}>
                        Clear
                    </Button>
                </InputGroup>
               <FormControl
                   disabled={true}
                   value={result}
                   />
            </Col>
            <Button variant="primary" onClick={handleShow}>
                Show Detail
            </Button>
            <Offcanvas show ={show} onHide={handleClose} placement ={'end'}>
                <Offcanvas.Header closeButton>

                    <Offcanvas.Title>{getDetailTittle()}</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    {getDetailTittleDescription()}
                    <br/>
                    <br/>
                    Example:
                    <br/>
                    <br/>
                    {numbersInput1} {computation} {numbersInput2}
                    <br/>
                    = {result} (Answer)
                </Offcanvas.Body>
            </Offcanvas>
            <br/><br/>
        </Container>


    );
};

export default Computations;
