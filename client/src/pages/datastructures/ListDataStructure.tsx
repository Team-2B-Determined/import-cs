import {Button, Col, Container, Form, FormControl, InputGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
import React, {ReactNode, useState} from "react";
import {HistoryRow} from "../accounts/History";
import {useLocation} from "react-router-dom";
import {startCase} from 'lodash';
import Stack from "../../components/datastructures/singleelement/Stack";
import Queue from "../../components/datastructures/singleelement/Queue";
import {BsListUl, BsStack} from "react-icons/bs";

const DATA_STRUCTURE_OPTIONS = {Stack, Queue} as const
type DataStructureType = keyof typeof DATA_STRUCTURE_OPTIONS

const ListDataStructure = () => {
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
    const [dataState, setDataState] = useState<any[]>(location.state === null ? "" : location.state.input.split(/[ ,]+/).map(e => Number(e)))
    const [crudInput, setCrudInput] = useState<string>("")
    const [crudState, setCrudState] = useState<string>(location.state === null ? "" : "build")
    const [dataStructure, setDataStructure] = useState<DataStructureType>(location.state === null ? "Stack" : location.state.calculatorFeature)
    const historyRows: HistoryRow[] = JSON.parse(localStorage.getItem("historyRows") || "[]");
    const colors = ["success", "info", "warning", "danger"]

    /**
     * Updates the internal data state.
     * Adds submission to site history.
     */
    const buildData = () => {
        setDataState(dataInput.split(/[ ,]+/).map(e => Number(e)))
        setCrudState("build")
        historyRows.push({
            calculatorFeature: dataStructure,
            input: dataInput,
            pathname: window.location.pathname
        });
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
                {['create', 'read', 'update', 'delete'].map((action, i) => (
                    <OverlayTrigger
                        key={"bottom"}
                        placement={"bottom"}
                        overlay={
                            <Tooltip hidden={false}>
                                <strong>{action}</strong> a value in the {dataStructure}.
                            </Tooltip>}>
                        <Button variant={colors[i]}>
                            <strong>{action.charAt(0).toUpperCase()}</strong>{action.slice(1)}
                        </Button>
                    </OverlayTrigger>
                ))}
        </InputGroup>
    )

    /**
     * Does all the cool step code display, I think? -Kali
     * @param componentName
     * @param props
     */
    const renderCodeSteps = (componentName: string, props?: any) => {
        const DataStructureElement: any = DATA_STRUCTURE_OPTIONS[componentName]
        return <DataStructureElement initialData={dataState}
                                     action={crudState}
                                     value={crudInput}/>
    }

    return (
        <Container>
            <h3>{startCase(dataStructure)}<BsListUl size={24} /></h3>
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
                    <Button variant="primary" id="button-addon2" onClick={buildData}>
                        {"Build " + dataStructure}
                    </Button>
                </InputGroup>
            </Col>
            <Col xs={4}>
                <CRUDInterface/>
            </Col>
            <div>
                {renderCodeSteps(dataStructure)}
            </div>
        </Container>
    );
};

export default ListDataStructure;

