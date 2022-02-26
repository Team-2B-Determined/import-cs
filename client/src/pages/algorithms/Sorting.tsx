import CalculationsList, {Item} from "../../components/CalculationsList";
import {Button, Col, Container, Dropdown, DropdownButton, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import SelectionSort from "../../components/algorithms/sorting/SelectionSort";
import MergeSort from "../../components/algorithms/sorting/MergeSort";


type SortingAlgorithms = "SelectionSort" | "MergeSort"
const Sorting = () => {
    const location: any = useLocation();

    const [numbersInput, setNumbersInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [numbers, setNumbers] = useState<any[]>([])
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [sortingAlgorithm, setSortingAlgorithm] = useState<SortingAlgorithms>("SelectionSort")

    const handleSolve = () => {
        setNumbers(numbersInput.split(/[ ,]+/).map(e => Number(e)))
        historyRows.push({
            calculationFeature: "Selection Sort",
            input: numbersInput,
            pathname: "/selectionsort",
            state: `${numbersInput}`
        });

        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }


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
                    value={sortingAlgorithm}>{sortingAlgorithm}</option>)}
            </Form.Select></Form.Group>
    )

    // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
    const SORTING_ALGORITHMS: Record<SortingAlgorithms, ReactNode> = {
        SelectionSort,
        MergeSort
    }

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

