import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {forEach} from "react-bootstrap/ElementChildren";

const build = (arr: number[]): any[] => {
    const steps: Step[] = []
    arr = [...arr]
    let stack = [0]
    let stackPointer = -1

    steps.push({
        lineNumber: "3-4",
        description: <>An empty stack is instantiated. The stackPointer points to the top element of the stack. The stack is empty, so the stackPointer is {stackPointer}<br/>
        </>
    })

    for (let i = 0; i < arr.length; i++) {

        stack[++stackPointer] = arr[i]

        steps.push({
            lineNumber: "7",
            description: <>The stackPointer is incremented to {stackPointer}. The new value {stack[stackPointer]} is added to the top of the stack. <br/>
                arr=[{displayArray(stack, [stackPointer])}]
            </>
        })
    }
    return steps
}

const create = (stack: number[], val: number): any[] => {
    const steps: Step[] = []
    stack = [...stack]
    let stackPointer = stack.length - 1

    steps.push({
        lineNumber: "6",
        description: <>The stackPointer {stackPointer} points to the top element of the stack {stack[stackPointer]} <br/>
            arr=[{displayArray(stack, [stackPointer])}]
        </>
    })

    stack[++stackPointer] = val

    steps.push({
        lineNumber: "7",
        description: <>The stackPointer is incremented to {stackPointer}. The new value {stack[stackPointer]} is added to the top of the stack. <br/>
            arr=[{displayArray(stack, [stackPointer])}]
        </>
    })

    return steps
}

const read = (stack: number[]): any[] => {
    const steps: Step[] = []
    stack = [...stack]
    let stackPointer = stack.length - 1

    steps.push({
        lineNumber: "10",
        description: <>The stackPointer {stackPointer} points to the top element of the stack and that value {stack[stackPointer]} is returned.<br/>
            arr=[{displayArray(stack, [stackPointer])}]
        </>
    })

    stackPointer--
    stack.pop()

    steps.push({
        lineNumber: "10",
        description: <>The stackPointer is decremented to {stackPointer} <br/>
            arr=[{displayArray(stack, [stackPointer])}]
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
        url: "https://www.geeksforgeeks.org/selection-sort/"
    },
    {
        name: "Video (2:42)",
        url: "https://www.youtube.com/watch?v=g-PGLbMth_g"
    }
]


const Stack = ({initialData, action, value}: {
    initialData: number[],
    action: string,
    value: number }) => {

    return (
        <CalculatorPage
            name={"Stack"}
            steps={callMakeSteps(initialData, value, action)}
            links={links}
            codeDisplay={`class Stack {
    constructor() {
        this.items = []
        this.stackPointer = -1
    }
    push(value) {
        this.items[++this.stackPointer] = value
    }
    pop() {
        return this.items[this.stackPointer--]
    }
}`
        }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default Stack;