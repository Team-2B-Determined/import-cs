import {Button, Col, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import {startCase} from 'lodash';
import {BsSortNumericDown} from "react-icons/bs";
import LinearSearch from "../../components/algorithms/searching/LinearSearch";
import BinarySearch from "../../components/algorithms/searching/BinarySearch";

// https://stackoverflow.com/a/56126054
const SEARCHING_ALGORITHMS = {LinearSearch, BinarySearch} as const
type SearchingAlgorithm = keyof typeof SEARCHING_ALGORITHMS

const Searching = () => {
    const location: any = useLocation();

    const [arrInput, setArrInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [findInput, setFindInput] = useState<any>(1)
    const [arr, setArr] = useState<any[]>([])
    const [find, setFind] = useState<any>(1)

    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const [searchingAlgorithm, setSearchingAlgorithm] = useState<SearchingAlgorithm>(location.state === null ? "LinearSearch" : location.state.calculatorFeature)
    const handleSearch = () => {
        setArr(arrInput.split(/[ ,]+/))
        setFind(findInput)
        historyRows.push({
            calculatorFeature: searchingAlgorithm,
            input: arrInput,
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


    const renderSearch = (componentName: string, props?: any) => {
        const SearchingAlgorithm: any = SEARCHING_ALGORITHMS[componentName]
        return <SearchingAlgorithm arr={arr} find={find}/>
    }

    return (
        <Container>
            <h3>{startCase(searchingAlgorithm)} <BsSortNumericDown size={24}/></h3>
            <Row>
                <Col xs={6}>
                    Enter a sequence of numbers separated with spaces " " or commas ","
                    <InputGroup className="mb-3">
                        <FormControl
                            value={arrInput}
                            onChange={e => setArrInput(e.target.value)}
                            placeholder="81 -62 -92 37 85"
                            aria-label="81 -62 -92 37 85"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                </Col>
                <Col xs={2}>
                    Find Element
                    <InputGroup className="mb-3">
                        <FormControl
                            value={findInput}
                            onChange={e => setFindInput(e.target.value)}
                            placeholder="81 -62 -92 37 85"
                            aria-label="81 -62 -92 37 85"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
                <Col xs={3}>
                    <SearchingDropdown/>
                </Col>

                {renderSearch(searchingAlgorithm)}
        </Container>
);
};

export default Searching;

