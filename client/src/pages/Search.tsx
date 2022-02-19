import {Badge, Button, Col, Container, FormControl, InputGroup, ListGroup} from "react-bootstrap";
import Fuse from "fuse.js";
import React, {useState} from "react";
import features from "../features.json"


const Search = () => {
    const [query, setQuery] = useState('');

    const fuse = new Fuse(features, {
        keys: [
            'name',
            'runtime',
            'description'
        ],
        includeScore: true
    });

    const results = fuse.search(query);
    const featureResults = query ? results.map(feature => feature.item) : features;


    return (
        <>
            <Container>
                <Col xs={6}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={query}
                            onChange={event => setQuery(event.currentTarget.value)}
                            placeholder="Selection Sort"
                        />
                    </InputGroup>
                </Col>
            </Container>


            <ListGroup as="ol" numbered>
                {featureResults.map(feature => <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}
                         className="ms-2 me-auto">
                        <div className="fw-bold">{feature.name}</div>
                        {feature.description}
                    </div>
                    <Badge bg="primary" pill>
                        O({feature.runtime})
                    </Badge>
                </ListGroup.Item>)}
            </ListGroup>
        </>
    )
}

export default Search