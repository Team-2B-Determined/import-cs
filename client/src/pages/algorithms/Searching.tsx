import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import {startCase} from 'lodash';
import {BsSortNumericDown} from "react-icons/bs";
import LinearSearch from "../../components/algorithms/searching/LinearSearch";
import BinarySearch from "../../components/algorithms/searching/BinarySearch";

// https://stackoverflow.com/a/56126054
const SEARCHING_ALGORITHMS = {LinearSearch,BinarySearch} as const
type SearchingAlgorithm = keyof typeof SEARCHING_ALGORITHMS

const Searching = () => {
    const location: any = useLocation();

    const [numbersInput, setNumbersInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [numbers, setNumbers] = useState<any[]>([])
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [searchingAlgorithm, setSearchingAlgorithm] = useState<SearchingAlgorithm>(location.state === null ? "LinearSearch" : location.state.calculatorFeature)
    const handleSolve = () => {
        setNumbers(numbersInput.split(/[ ,]+/).map(e => Number(e)))
        historyRows.push({
            calculatorFeature: searchingAlgorithm,
            input: numbersInput,
            pathname: '/algorithms/searching'
        });

        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }


    const SearchingDropdown = () => (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Searching Algorithm</Form.Label>
            <Form.Select
                value={searchingAlgorithm}
                onChange={e => {
                    setSearchingAlgorithm(e.target.value as SearchingAlgorithm)
                }}
            >
                {Object.keys(SEARCHING_ALGORITHMS).map(searchingAlgorithm => <option
                    value={searchingAlgorithm}>{startCase(searchingAlgorithm)}</option>)}
            </Form.Select></Form.Group>
    )


    const renderSort = (componentName: string, props?: any) => {
        const SearchingAlgorithm: any = SEARCHING_ALGORITHMS[componentName]
        return <SearchingAlgorithm numbers={numbers}/>
    }

    return (
        <Container>
            <h3>{startCase(searchingAlgorithm)} <BsSortNumericDown size={24} /></h3>
            <Col xs={6}>
                Enter a sequence of numbers separated with spaces " " or commas ","
                <InputGroup className="mb-3">
                    <FormControl
                        value={numbersInput}
                        onChange={e => setNumbersInput(e.target.value)}
                        placeholder="81 -62 -92 37 85"
                        aria-label="81 -62 -92 37 85"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleSolve}>
                        Solve
                    </Button>
                </InputGroup>
            </Col>
            <Col xs={3}>
                <SearchingDropdown/>
            </Col>

            {renderSort(searchingAlgorithm)}
        </Container>
    );
};

export default Searching;

