import {Button, Card, Col, Container, FormControl, InputGroup, Offcanvas, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {CodeBlock, irBlack} from "react-code-blocks";

export interface Step {
    description: string | JSX.Element,
    lineNumber: string
}


let autoPlayer;


const CodeNavigator = ({steps,codeDisplay}: { steps: Step[], codeDisplay:string}) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [stepIndex, setStepIndex] = useState(0)
    const [autoPlayDelay, setAutoPlayDelay] = useState(2)
    const [isAutoPlaying, setIsAutoPlaying] = useState(false)

    useEffect(()=>{setStepToStart()},[steps])


    const setStepToStart = () => {
        setStepIndex(0)
    }

    const setStepToEnd = () => {
        setStepIndex(steps.length - 1)
    }

    const addStepIndex = (otherOperand: number) => {
        setStepIndex(prevState => {
            const newIndex = prevState + otherOperand

            if (newIndex >= steps.length - 1) {
                setIsAutoPlaying(false)
                clearInterval(autoPlayer)
            }

            return newIndex >= steps.length ? steps.length - 1
                : newIndex < 0 ? 0
                    : newIndex
        })
    }

    const currentStep = () =>  {
        if (stepIndex >= steps.length) {
            setStepToStart()
            return steps[0]
        }
        return steps[stepIndex]
    }


    const StepsNavigation = () => (<>
        Manual navigation
        <div>
            <Button variant="outline-primary" size="sm" onClick={setStepToStart}>
                <img src="https://static.thenounproject.com/png/1297552-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(-5)}>
                <img src="https://www.vhv.rs/dpng/d/437-4375289_rewind-arrow-svg-png-icon-free-download-rewind.png"
                     width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(-1)}>
                <img
                    src="https://e7.pngegg.com/pngimages/85/844/png-clipart-computer-icons-arrow-icon-design-encapsulated-postscript-left-arrow-angle-internet.png"
                    width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(1)}>
                <img src="https://static.thenounproject.com/png/74838-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => addStepIndex(5)}>
                <img src="https://cdn0.iconfinder.com/data/icons/playback-1/24/fast-forward-512.png" width="25"
                     height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={setStepToEnd}>
                <img src="https://static.thenounproject.com/png/1297558-200.png" width="25" height="25"/><br/>
            </Button></div>
    </>)


    return (
        <div>
            <Container>
                <StepsNavigation/>
                Auto Play (every x seconds)
                <Col xs={3}>
                    <InputGroup className="mb-3">
                        <FormControl
                            value={autoPlayDelay}
                            onChange={e => setAutoPlayDelay(Number(e.target.value))}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={() => {
                            if (isAutoPlaying) {
                                clearInterval(autoPlayer)
                            } else {
                                autoPlayer = setInterval(() => addStepIndex(1), autoPlayDelay * 1000)
                            }
                            setIsAutoPlaying(prevState => !prevState)
                        }}>
                            {isAutoPlaying ? "Stop" : "Play"}
                        </Button>
                    </InputGroup>
                </Col>
                <br/>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col style={{height: 600, overflowY: "auto"}}>
                                <CodeBlock
                                    text={codeDisplay}
                                    language={"js"}
                                    showLineNumbers={true}
                                    startingLineNumber={true}
                                    theme={irBlack}
                                    highlight={currentStep().lineNumber}
                                />
                            </Col>
                            <Col style={{height: 600, overflowY: "auto"}}>
                                {
                                    steps.slice(0, stepIndex + 1).map((step, index) => {
                                        return (<div style={{marginBottom: 15}}>
                                            <strong>Step {index + 1}</strong>
                                            <br/>
                                            {step.description}
                                        </div>)
                                    }).reverse()
                                }

                            </Col>


                        </Row>

                    </Card.Body>
                </Card>

            </Container>


            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <Offcanvas.Title>
                        <h3>Selection Sort</h3>
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>

        </div>
    );
};

export default CodeNavigator;