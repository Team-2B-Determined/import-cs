import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import SelectionSort from "../../components/algorithms/sorting/SelectionSort";
import MergeSort from "../../components/algorithms/sorting/MergeSort";
import {startCase} from 'lodash';
import Stack from "../../components/datastructures/singleelement/Stack";


export type SortingAlgorithms = "SelectionSort" | "MergeSort" | "Stack"
const SingleElementDataStructures = () => {
    const location: any = useLocation();

    const [numbersInput, setNumbersInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [numbers, setNumbers] = useState<any[]>([])
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithms>(location.state === null ? "SelectionSort" : location.state.calculatorFeature)

    /**
     * Updates the numbersInput state. Adds submission to site history.
     */
    const handleSolve = () => {
        setNumbers(numbersInput.split(/[ ,]+/).map(e => Number(e)))
        historyRows.push({
            calculatorFeature: sortingAlgorithm,
            input: numbersInput,
            pathname: `/algorithms/sorting`,
            state: `${numbersInput}`
        });
        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }

    /**
     * Drop down menu for choosing different data structure types.
     * Updates the state of current data structure being used
     * @constructor
     */
    const SortingDropdown = () => (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Sorting Algorithm</Form.Label>
            <Form.Select
                value={sortingAlgorithm}
                onChange={e => {
                    setSortingAlgorithm(e.target.value as SortingAlgorithms)
                }}
            >
                {Object.keys(SORTING_ALGORITHMS).map(sortingAlgorithm => <option
                    value={sortingAlgorithm}>{startCase(sortingAlgorithm)}</option>)}
            </Form.Select></Form.Group>
    )

    /**
     * Define which types are valid as options??? (I need to read the docs later -Kali)
     */
    // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
    const SORTING_ALGORITHMS: Record<SortingAlgorithms, ReactNode> = {
        SelectionSort,
        MergeSort,
        Stack
    }

    /**
     * Does all the cool step code display, I think? -Kali
     * @param componentName
     * @param props
     */
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

export default SingleElementDataStructures;
