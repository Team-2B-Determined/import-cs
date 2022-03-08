import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import SelectionSort from "../../components/algorithms/sorting/SelectionSort";
import MergeSort from "../../components/algorithms/sorting/MergeSort";
import {startCase} from 'lodash';
import Stack from "../../components/datastructures/singleelement/Stack";
import Queue from "../../components/datastructures/singleelement/Queue";


export type DataStructureType = "Stack" | "Queue"
const SingleElementDataStructures = () => {
    const location: any = useLocation();

    /**
     * Input field for values,
     * to instantiate the data structure.
     */
    const [dataInput, setDataInput] = useState<string>(
        location.state === null ? "" : location.state.input)

    /**
     * The actual state of the data structure,
     * loaded from input, changed onSubmit
     */
    const [dataState, setDataState] = useState<any[]>([])

    /**
     * Input field for CRUD
     */
    const [crudInput, setCrudInput] = useState<string>(
        location.state === null ? "" : location.state.input)

    /**
     * Stores the history values locally.
     * So we don't have to call localStorage elsewhere. Probably.
     */
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");

    /**
     * Stores what data structure
     * we are currently working with.
     */
    const [dataStructure, setDataStructure] = useState<DataStructureType>(
        location.state === null ? "Stack" : location.state.calculatorFeature)

    /**
     * Updates the current data state.
     * Adds submission to site history.
     */
    const buildData = () => {
        setDataState(dataInput.split(/[ ,]+/).map(e => Number(e)))
        /**
         * disabling this until I figure out how to do history
         *
        historyRows.push({
            calculatorFeature: sortingAlgorithm,
            input: dataInput,
            pathname: `/algorithms/sorting`,
            state: `${dataInput}`
        });
         */
        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }

    /**
     * Drop down menu for choosing different data structure types.
     * Updates the state of current data structure being used
     * @constructor
     */
    const DataStructDropdown = () => (
        <Form.Group controlId="formBasicSelect">
            <Form.Label>Select Data Structure</Form.Label>
            <Form.Select
                value={dataStructure}
                onChange={e => {setDataStructure(e.target.value as DataStructureType)}}>
                {Object.keys(DATA_STRUCTURE_OPTIONS).map(dataStructure =>
                    <option value={dataStructure}>
                        {startCase(dataStructure)}
                    </option>)}
            </Form.Select></Form.Group>
    )

    /**
     * Create of CRUD
     */
    const create = () => {
        //setDataState(dataInput.split(/[ ,]+/).map(e => Number(e)))
        /**
         * disabling this until I figure out how to do history
         *
         historyRows.push({
            calculatorFeature: sortingAlgorithm,
            input: dataInput,
            pathname: `/algorithms/sorting`,
            state: `${dataInput}`
        });
         */
        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }

    /**
     * Read of CRUD
     */
    const read = () => {
        //setDataState(dataInput.split(/[ ,]+/).map(e => Number(e)))
        /**
         * disabling this until I figure out how to do history
         *
         historyRows.push({
            calculatorFeature: sortingAlgorithm,
            input: dataInput,
            pathname: `/algorithms/sorting`,
            state: `${dataInput}`
        });
         */
        localStorage.setItem("historyRows", JSON.stringify(historyRows));
    }

    /**
     * UI for CRUD
     */
    const CRUDInterface = () => (
        <InputGroup className="mb-3" hidden={false}>
            <FormControl
                value={dataInput}
                onChange={e => setCrudInput(e.target.value)}
                placeholder="81"
                aria-label="81"
                aria-describedby="basic-addon2"/>
            <Button variant="outline-success" id="button-addon2" onClick={create}>
                Push Value
            </Button>
            <Button variant="outline-warning" id="button-addon2" onClick={read}>
                Pop
            </Button>
        </InputGroup>
    )

    /**
     * Define which types are valid as options??? (I need to read the docs later -Kali)
     */
    // https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime
    const DATA_STRUCTURE_OPTIONS: Record<DataStructureType, ReactNode> = {
        Stack,
        Queue
    }

    /**
     * Does all the cool step code display, I think? -Kali
     * @param componentName
     * @param props
     */
    const renderCRUD = (componentName: string, props?: any) => {
        const DataStructureRender: any = DATA_STRUCTURE_OPTIONS[componentName]
        return <DataStructureRender numbers={dataState}/>
    }

    return (
        <Container>
            <Col xs={3}>
                <DataStructDropdown/>
            </Col>
            <Col>
                Enter a sequence of numbers separated with spaces " " or commas ","
            </Col>
            <Col xs={6}>
                <InputGroup className="mb-3">
                    <FormControl
                        value={dataInput}
                        onChange={e => setDataInput(e.target.value)}
                        placeholder="81 -62 -92 37 85"
                        aria-label="81 -62 -92 37 85"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={buildData}>
                        {"Build " + dataStructure}
                    </Button>
                </InputGroup>
            </Col>
            <Col>
                {"Current state of the stack"}
            </Col>
            <Col xs={3}>
                <CRUDInterface/>
            </Col>
            {renderCRUD(dataStructure)}
        </Container>
    );
};

export default SingleElementDataStructures;

