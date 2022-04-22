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
        if (computation === '+') {
            return (
                <div>
                    <div>Now that we know binary numbers, we will learn how to add them. Binary addition is much like
                        your normal everyday addition (decimal addition), except that it carries on a value of 2 instead
                        of a value of 10.
                    </div>
                    <br/>
                    <div>For example:</div>
                    <div>"Now that we know binary numbers, we will learn how to add them. Binary addition is much like
                        your normal everyday addition (decimal addition), except that it carries on a value of 2 instead
                        of a value of 10.
                    </div>
                </div>
            );
        }
                /*"For example:" +
                " In decimal addition, if you add 8 + 2 you get ten, which you write as 10; in the sum this gives a digit 0 and a carry of 1. Something similar happens in binary addition when you add 1 and 1; the result is two (as always), but since two is written as 10 in binary, we get after summing 1 + 1 in binary, a digit 0 and a carry of 1.\n" +
                "\n" +
                "Binary Addition Protocol:\n" +
                "0 + 0 = 0\n" +
                "0 + 1 = 1\n" +
                "1 + 0 = 1\n" +
                "1 + 1 = 10 (which is 0 carry 1)"
                */
        if (computation === '-')
            return "Binary subtraction is one of the four binary operations, where we perform the subtraction method for two binary numbers (comprising only two digits, 0 and 1). " +
                "This operation is similar to the basic arithmetic subtraction performed on decimal numbers in Maths. " +
                "Hence, when we subtract 1 from 0, we need to borrow 1 from the next higher order digit, to reduce the digit by 1 and the remainder left here is also 1."+
                "Binary Subtraction Protocol:\n" +
                "0 - 0 = 0\n" +
                "1 - 0 = 1\n" +
                "1 - 1  =0\n" +
                "0 - 1 = 1 (Borrow 1)"
        if (computation === '×')
            return "Binary multiplication is similar to the multiplication of decimal numbers." +
                " We have a multiplier and a multiplicand." +
                " The result of multiplication results in a product. " +
                "Since only binary digits are involved in binary multiplication, we get to multiply only 0s and 1s." +
                " The rules for binary multiplication are as follows." +
                "Binary Addition Protocol:\n" +
                "0 × 0 = 0\n" +
                "0 × 1 = 0\n" +
                "1 × 0  =0\n" +
                "1 × 1 = 1"
        if (computation === '÷')
            return "Binary division, similar to other binary arithmetic operations, is performed on binary numbers. " +
                "The algorithm for binary division is somewhat similar to decimal division, the only difference here lies in the rules followed using the digits '0' and '1'. " +
                "Binary multiplication and binary subtraction are the two binary arithmetic operations that are performed while performing binary division. " +
                "The use of only '0' and '1' makes binary division quite simpler in comparison to decimal division. Other operations that are used while performing binary division are binary multiplication and binary subtraction."+
                "0 ÷ 1 = 0\n" +
                "1 ÷ 1 = 1\n" +
                "Division By Zero is Meaningless"
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
                    Therefore:
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
