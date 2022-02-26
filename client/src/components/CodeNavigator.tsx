import {Button, Card, Col, Container, FormControl, InputGroup, Offcanvas, Row} from "react-bootstrap";
import React, {useState} from "react";
import {CodeBlock, irBlack} from "react-code-blocks";

export interface Step {
    description: string | JSX.Element,
    lineNumber: string,
}


export interface CodeNavigationGuide {
    codeDisplay: string,
    steps: Step[]
}


interface CodeNavigatorState {
    show: boolean,
    stepIndex: number,
    autoPlayDelay: number,
    isAutoPlaying: boolean
}

// Due to input field losing focus with function components, class based component is used
// More info: https://stackoverflow.com/questions/42573017
class CodeNavigator extends React.Component<{ codeNavigationGuide: CodeNavigationGuide }, CodeNavigatorState> {
    state = {
        show: false,
        stepIndex: 0,
        autoPlayDelay: 2,
        isAutoPlaying: false
    }

    autoPlayer;

    setStepToStart = () => {
        this.setState({stepIndex: 0})
    }

    setStepToEnd = () => {
        this.setState({stepIndex: this.props.codeNavigationGuide.steps.length - 1})
    }


    addStepIndex = (otherOperand: number) => {
        this.setState((prevState,props) => {
            const newIndex = prevState.stepIndex + otherOperand
            let isAutoPlaying = prevState.isAutoPlaying
            const stepsLength = props.codeNavigationGuide.steps.length
            if (newIndex >= stepsLength - 1) {
                isAutoPlaying = false
                clearInterval(this.autoPlayer)
            }

            const stepIndex = newIndex >= stepsLength ? stepsLength - 1
                : newIndex < 0 ? 0
                : newIndex
            return {isAutoPlaying, stepIndex}
        })

    }

    // Use function rather than expression to prevent stale states for listeners
    currentStep = () => this.props.codeNavigationGuide.steps[this.state.stepIndex]


    StepsNavigation = () => (<>
        Manual navigation
        <div>
            <Button variant="outline-primary" size="sm" onClick={this.setStepToStart}>
                <img src="https://static.thenounproject.com/png/1297552-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => this.addStepIndex(-5)}>
                <img src="https://www.vhv.rs/dpng/d/437-4375289_rewind-arrow-svg-png-icon-free-download-rewind.png"
                     width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => this.addStepIndex(-1)}>
                <img
                    src="https://e7.pngegg.com/pngimages/85/844/png-clipart-computer-icons-arrow-icon-design-encapsulated-postscript-left-arrow-angle-internet.png"
                    width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => this.addStepIndex(1)}>
                <img src="https://static.thenounproject.com/png/74838-200.png" width="25" height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={() => this.addStepIndex(5)}>
                <img src="https://cdn0.iconfinder.com/data/icons/playback-1/24/fast-forward-512.png" width="25"
                     height="25"/><br/>
            </Button>
            <Button variant="outline-primary" size="sm" onClick={this.setStepToEnd}>
                <img src="https://static.thenounproject.com/png/1297558-200.png" width="25" height="25"/><br/>
            </Button></div> Auto Play (every x seconds)
        <Col xs={3}>
            <InputGroup className="mb-3">
                <FormControl
                    value={this.state.autoPlayDelay}
                    autoFocus={true}
                    onChange={e => this.setState({autoPlayDelay: Number(e.target.value)})}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={() => {
                    if (this.state.isAutoPlaying) {
                        clearInterval(this.autoPlayer)
                    } else {
                        this.autoPlayer = setInterval(() => this.addStepIndex(1), this.state.autoPlayDelay * 1000)
                    }
                    this.setState(prevState => ({isAutoPlaying: !prevState.isAutoPlaying}))
                }}>
                    {this.state.isAutoPlaying ? "Stop" : "Play"}
                </Button>
            </InputGroup>
        </Col>
    </>)


    render() {
        return (
            <div>
                <Container>
                    <this.StepsNavigation/>
                    <br/>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col style={{
                                    height: 600,
                                    overflowY: "auto"
                                }}>
                                    <CodeBlock
                                        text={this.props.codeNavigationGuide.codeDisplay}
                                        language={"js"}
                                        showLineNumbers={true}
                                        startingLineNumber={true}
                                        theme={irBlack}
                                        highlight={this.currentStep().lineNumber}
                                    />
                                </Col>
                                <Col style={{height: 600, overflowY: "auto"}}>
                                    {
                                        this.props.codeNavigationGuide.steps.slice(0, this.state.stepIndex + 1).map((step, index) => {
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

                <Offcanvas show={this.state.show} onHide={()=>this.setState({show: false})} placement={'end'}>
                    <Offcanvas.Header>
                        <Offcanvas.Title>
                            <h3>Selection Sort</h3>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                </Offcanvas>

            </div>
        )

    }
}
;

export default CodeNavigator;