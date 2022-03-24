import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import ConversionAlgorithms from "./ConversionAlgorithms/ConversionAlgorithms";
import BinaryToDecimal from "./ConversionAlgorithms/BinaryToDecimal";
import DecimalToBinary from "./ConversionAlgorithms/DecimalToBinary";

const CONVERSION_ALGORITHMS = {DecimalToBinary, BinaryToDecimal} as const
type ConversionAlgorithm = keyof typeof CONVERSION_ALGORITHMS

const Conversions = () => {
    const [inputType, setInputType] = useState<string>("Binary")
    const [outputType, setOutputType] = useState<string>("Decimal")
    const [inputValue, setInputValue] = useState<string>("1011")
    const [componentAlgorithm, setComponentAlgorithm] = useState<ConversionAlgorithm>("BinaryToDecimal")
    const [outputValue, setOutputValue] = useState<string>("")
    const [showConversion, setShowConversion] = useState<boolean>(false)

    const handleInputSelect = (e) => {
        setShowConversion(false)
        setOutputValue("")
        setInputType(e.target.value)
    }
    const handleOutputSelect = (e) => {
        setShowConversion(false)
        setOutputValue("")
        setOutputType(e.target.value)
    }
    const handleInputValue = (e) => {
        setShowConversion(false)
        setOutputValue("")
        setInputValue(e.target.value)
    }
    const onSubmitClick = (e) => {
        e.preventDefault()
        if (`${inputType}To${outputType}` in CONVERSION_ALGORITHMS) {
            setShowConversion(true)
            setComponentAlgorithm(`${inputType}To${outputType}` as ConversionAlgorithm)
        } else {
            setOutputValue("Error: invalid input and output type combo")
        }

    }
    const showOutput = () => {
        if (!showConversion)
            return null
        else
            return <ConversionAlgorithms inputType={inputType} outputType={outputType} inputValue={inputValue}
                                         setOutputValue={setOutputValue}/>
    }

    const renderConversion = () => {
        const ConversionAlgorithm: any = CONVERSION_ALGORITHMS[componentAlgorithm]
        return ConversionAlgorithm(inputValue)

    }

    return (
        <div>{showOutput()}
            <h1>Conversions Page</h1>
            <Form>
                <Row>
                    <Form.Group as={Col} controlId="formGridInputType">
                        <Form.Label>Input Type:</Form.Label>
                        <Form.Select aria-label="OutputConversionType" onChange={handleInputSelect}>
                            <option>Binary</option>
                            <option>Decimal</option>
                            <option>Hexadecimal</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridOutputType">
                        <Form.Label>Output Type:</Form.Label>
                        <Form.Select aria-label="OutputConversionType" onChange={handleOutputSelect}>
                            <option>Binary</option>
                            <option selected>Decimal</option>
                            <option>Hexadecimal</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col} controlId="formGridInputBox">
                        <Form.Label>Input Value:</Form.Label>
                        <Form.Control type="string" placeholder="1011" onChange={handleInputValue}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridOutputBox">
                        <Form.Label>Output Value:</Form.Label>
                        <Form.Control type="string" value={outputValue}
                                      placeholder="Readonly converted output value here..." readOnly/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" onClick={onSubmitClick}>
                    Convert
                </Button>

                <Form.Group controlId="Explanation">
                    <Form.Label>Explanation:</Form.Label>
                    {renderConversion()}
                </Form.Group>
            </Form>
        </div>
    );
};

export default Conversions;
