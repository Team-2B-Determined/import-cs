import {Button, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import React, {ReactNode, useEffect, useState} from "react";
import {CodeBlock, irBlack} from "react-code-blocks";
import {BsForward, BsSkipBackward, BsSkipEnd, BsSkipForward, BsSkipStart} from "react-icons/bs";
import { IconContext } from "react-icons";

export interface Step {
    description: string | JSX.Element,
    lineNumber: string
}


let autoPlayer;


const CodeNavigator = ({steps,codeDisplay}: { steps: Step[], codeDisplay:string}) => {
    const [stepIndex, setStepIndex] = useState(0)
    const [autoPlayDelay, setAutoPlayDelay] = useState(2)
    const [isAutoPlaying, setIsAutoPlaying] = useState(false)
    
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

    const StepsNavigation = () => {
        const navigations:[ReactNode,React.MouseEventHandler<HTMLButtonElement>][] = [[<BsSkipStart />,setStepToStart],[<BsSkipBackward/>,() => addStepIndex(-5)],[<BsForward style={{transform:"rotateY(180deg)"}}/>,() => addStepIndex(-1)],[<BsForward/>,() => addStepIndex(1)],[<BsSkipForward/>,() => addStepIndex(5)],[<BsSkipEnd/>,setStepToEnd]]
        return <>
            Manual navigation
            <div>
                <IconContext.Provider value={{size: "32"}}>
                    {navigations.map(([Icon,onClickHandler])=>(
                        <Button variant="outline" size="sm" onClick={onClickHandler} data-testid={onClickHandler.name}>{Icon}</Button>
                        ))}
                </IconContext.Provider>
            </div>
        </>
    }


    return (
        <div>
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
                <StepsNavigation/>

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

        </div>
    );
};

export default CodeNavigator;