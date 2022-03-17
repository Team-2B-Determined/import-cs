import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import SelectionSort from "../../components/algorithms/sorting/SelectionSort";
import MergeSort from "../../components/algorithms/sorting/MergeSort";
import {startCase} from 'lodash';
import Stack from "../../components/datastructures/singleelement/Stack";
import Queue from "../../components/datastructures/singleelement/Queue";
import QuickSort from "../../components/algorithms/sorting/QuickSort";

const DATA_STRUCTURE_OPTIONS = {Stack, Queue} as const
type DataStructureType = keyof typeof DATA_STRUCTURE_OPTIONS

const SingleElementDataStructures = () => {
    const location: any = useLocation();

    /**
     * dataInput: Input field for initial data values
     * dataState: Internal state of data values
     * crudInput: Input field for CRUD
     * crudState: Action taken for CRUD
     * dataStructure: Data structure currently selected
     * historyRows: History values stored locally
     */
    const [dataInput, setDataInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [dataState, setDataState] = useState<any[]>([])
    const [crudInput, setCrudInput] = useState<string>(location.state === null ? "" : location.state.input)
    const [crudState, setCrudState] = useState<string>(location.state === null ? "" : location.state.input)
    const [dataStructure, setDataStructure] = useState<DataStructureType>(location.state === null ? "Stack" : location.state.calculatorFeature)
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");

    /**
     * Updates the internal data state.
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
        setCrudState("create");
        let data = dataState;
        data.push(Number(crudInput));
        setDataState(data);
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
        setCrudState("read");
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
                value={crudInput}
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
     * Does all the cool step code display, I think? -Kali
     * @param componentName
     * @param props
     */
    const renderCRUD = (componentName: string, props?: any) => {
        const DataStructureElement: any = DATA_STRUCTURE_OPTIONS[componentName]
        return <DataStructureElement initialData={dataState}
                                    action={crudState}
                                    value={crudInput}/>
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
                <div>
                    {"The " + dataStructure + " currently looks like:"}
                </div>
                {dataState.toString()}
            </Col>
            <Col xs={3}>
                <CRUDInterface/>
            </Col>
            {renderCRUD(dataStructure)}
        </Container>
    );
};

export default SingleElementDataStructures;

