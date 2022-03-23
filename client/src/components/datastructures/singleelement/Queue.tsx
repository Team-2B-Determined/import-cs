import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {forEach} from "react-bootstrap/ElementChildren";

const build = (arr: number[]): any[] => {
    const steps: Step[] = []
    arr = [...arr]
    let queue = [0]
    let qPointer = -1

    steps.push({
        lineNumber: "3",
        description: <>An empty queue is instantiated. <br/>
        </>
    })

    steps.push({
        lineNumber: "4",
        description: <>The stackPointer points to the last element of the stack. The queue is empty, so the queuePointer is {qPointer}<br/>
        </>
    })

    for (let i = 0; i < arr.length; i++) {

        qPointer++

        steps.push({
            lineNumber: "7",
            description: <>The queuePointer is incremented to {qPointer}.
            </>
        })

        queue[qPointer] = arr[i]

        steps.push({
            lineNumber: "8",
            description: <>The new value {queue[qPointer]} is added to the end of the stack. <br/>
                arr=[{displayArray(queue, [qPointer])}]
            </>
        })
    }
    return steps
}

const create = (queue: number[], val: number): any[] => {
    const steps: Step[] = []
    queue = [...queue]
    let qPointer = queue.length - 1

    steps.push({
        lineNumber: "6",
        description: <>The queuePointer {qPointer} points to the last element of the stack {queue[qPointer]} <br/>
            arr=[{displayArray(queue, [qPointer])}]
        </>
    })

    qPointer++

    steps.push({
        lineNumber: "7",
        description: <>The queuePointer is incremented to {qPointer}.
        </>
    })

    queue[qPointer] = val

    steps.push({
        lineNumber: "8",
        description: <>The new value {queue[qPointer]} is added to the end of the stack. <br/>
            arr=[{displayArray(queue, [qPointer])}]
        </>
    })

    return steps
}

const read = (queue: number[]): any[] => {
    const steps: Step[] = []
    queue = [...queue]
    let qPointer = queue.length - 1

    qPointer--

    steps.push({
        lineNumber: "11",
        description: <>The queuePointer is decremented to reflect that an item will be removed.<br/>
            arr=[{displayArray(queue, [qPointer])}]
        </>
    })

    queue.shift()

    steps.push({
        lineNumber: "12",
        description: <>*.shift() both removes and returns the item at the front of the queue {queue[0]}.<br/>
            arr=[{displayArray(queue)}]
        </>
    })

    return steps
}

const welcomeSteps = (): any[] => {
    const steps: Step[] = []
    steps.push({
        lineNumber: "1-12",
        description: <>Enter some values to build the data structure! <br/>
        </>
    })
    return steps
}

const callMakeSteps = (data: number[], val: number, action: string): any[] => {
    switch(action) {
        case "build":
            return build(data)
        case "create":
            return create(data,val)
        case "read":
            return read(data)
        default:
            return welcomeSteps()
    }
}


const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/queue-data-structure/"
    },
    {
        name: "Programiz",
        url: "https://www.programiz.com/dsa/queue"
    }
]


const Queue = ({initialData, action, value}: {
    initialData: number[],
    action: string,
    value: number }) => {

    return (
        <CalculatorPage
            name={"Queue"}
            steps={callMakeSteps(initialData, value, action)}
            links={links}
            codeDisplay={`class Queue {
    constructor() {
        this.items = []
        this.queuePointer = -1
    }
    push(value) {
        this.queuePointer++
        this.items[this.queuePointer] = value
    }
    pop() {
        this.queuePointer--
        return this.items.shift()
    }
}`
            }
            description={"Queues are a data structure that follow the First-In First-Out (FIFO) policy. Items are returned in the order they were added. Queues are used to in operating systems to schedule processes."}
            image={"https://cdn-icons-png.flaticon.com/512/3953/3953545.png"}
        />
    );
};

export default Queue;