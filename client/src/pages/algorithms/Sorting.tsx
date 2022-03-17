import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import SelectionSort from "../../components/algorithms/sorting/SelectionSort";
import MergeSort from "../../components/algorithms/sorting/MergeSort";
import {startCase} from 'lodash';
import QuickSort from "../../components/algorithms/sorting/QuickSort";

// https://stackoverflow.com/a/56126054
const SORTING_ALGORITHMS = {SelectionSort, MergeSort, QuickSort} as const
type SortingAlgorithm = keyof typeof SORTING_ALGORITHMS

const Sorting = () => {
    const location: any = useLocation();

    const [numbersInput, setNumbersInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [numbers, setNumbers] = useState<any[]>([])
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithm>(location.state === null ? "SelectionSort" : location.state.calculatorFeature)
    const handleSolve = () => {
        setNumbers(numbersInput.split(/[ ,]+/).map(e => Number(e)))
        historyRows.push({
            calculatorFeature: sortingAlgorithm,
            input: numbersInput,
            pathname: '/algorithms/sorting'
        });

        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }


    const SortingDropdown = () => (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Sorting Algorithm</Form.Label>
            <Form.Select
                value={sortingAlgorithm}
                onChange={e => {
                    setSortingAlgorithm(e.target.value as SortingAlgorithm)
                }}
            >
                {Object.keys(SORTING_ALGORITHMS).map(sortingAlgorithm => <option
                    value={sortingAlgorithm}>{startCase(sortingAlgorithm)}</option>)}
            </Form.Select></Form.Group>
    )


    const renderSort = (componentName: string, props?: any) => {
        const SortingAlgorithm: any = SORTING_ALGORITHMS[componentName]
        return <SortingAlgorithm numbers={numbers}/>
    }

    return (
        <Container>
            <Col xs={6}>
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
                Enter a sequence of numbers separated with spaces " " or commas ","
            </Col>
            <Col xs={3}>

                <SortingDropdown/>
            </Col>

            {renderSort(sortingAlgorithm)}
        </Container>
    );
};

export default Sorting;

