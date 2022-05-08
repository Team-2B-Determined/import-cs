import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React, {useState} from "react";
import displayArray from "../../../displayArray";
import {Form} from "react-bootstrap";


const _linearSearch = (arr: any[], find: any): Step[] => {
    const steps: Step[] = [{
        lineNumber: "2",
        description: "Let's begin the linear search by going through each element!"
    }]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            steps.push({
                lineNumber: "3-5",
                description: <>Element found at index {i}! we can now return it and finish the search.
                    arr=[{displayArray(arr, [i])}]
                </>
            })
            return steps
        }
        steps.push({
            lineNumber: "3",
            description: <>At i = {i}, the element {arr[i]} does not match the element, {find}, we're searching for.
                Let's go to the next iteration<br/>
                arr=[{displayArray(arr, [i])}]
            </>
        })
    }
    steps.push({
        lineNumber: "7",
        description: <>The element {find} is not found in the array. In this case, we return -1 by convention to
            indicate failure<br/>
            arr=[{displayArray(arr)}]
        </>
    })
    return steps
}


const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/linear-search/"
    },
    {
        name: "Video (2:52)",
        url: "https://youtu.be/4GPdGsB3OSc"
    }
]


function _recursiveLinearSearch(steps: Step[], arr, index, find) {
    if (index >= arr.length) {
        steps.push({
            description: "We finished iterating through the array without finding the element, so we return -1 to show that",
            lineNumber: "2-4"
        })
        return -1;
    }
    if (arr[index] === find) {
        steps.push({
            description: <>The current element {arr[index]} is equal to the element, {find}, we're looking for. Return
                the index, {index}, of that element<br/>
                arr=[{displayArray(arr, [index])}]
            </>, lineNumber: "5-7"
        })
        return index;
    }

    steps.push({
        description: <>Element was not found in this call stack. Go to the next element by calling the function again but with the index incremented by 1. <br/>index: {index} -&gt; {index + 1}<br/>arr=[{displayArray(arr, [index])} -&gt; arr=[{displayArray(arr, [index+1])}]
        </>
        ,lineNumber: "8"
    })
    return _recursiveLinearSearch(steps, arr, index + 1, find);
}

function recursiveLinearSearch(arr, find): Step[] {
    const steps: Step[] = [{
        description: "Use a facade function to simplify the arguments required to pass in for the user.",
        lineNumber: "11-13"
    }]
    _recursiveLinearSearch(steps, arr, 0, find)
    return steps
}


const LinearSearch = ({arr, find}: { arr: any[], find: any }) => {
    const [isRecursive, setIsRecursive] = useState<boolean>(false)
    return (
        <>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        checked={isRecursive}
                        onChange={e => setIsRecursive(e.target.checked)}
                        type={"checkbox"}
                        label={`Recursive`}
                    />

                </div>
            </Form>
            {isRecursive ?
                <CalculatorPage
                    name={"RecursiveLinearSearch"}
                    steps={recursiveLinearSearch(arr, find)
                    }
                    links={[
                        {
                            name: "Stack Overflow",
                            url: "https://stackoverflow.com/questions/38311305/recursive-linear-search"
                        },
                        {
                            name: "Video (13:21)",
                            url: "https://youtu.be/VwaIqYN7GnQ"
                        }
                    ]}
                    codeDisplay={`function _recursiveLinearSearch(arr, index, find) {
            if (index >= arr.length) {
                return -1;
            }
            if (arr[index] === find) {
                return index;
            }
            return _recursiveLinearSearch(arr, index + 1, find);
        }
        
        function recursiveLinearSearch(arr, find) {
            _recursiveLinearSearch(arr, arr.length - 1, find)
        }`}
                    description={"Finds an element in the list by sequentially checking each element until the an element matches the find element. The difference compared to the default iterative approach is how the index is updated. In recursion, the index is incremented when calling the function again."}
                    image={"https://i.imgur.com/EerzUpo.png"}
                /> :
                <CalculatorPage
                    name={"LinearSearch"}
                    steps={_linearSearch(arr, find)}
                    links={links}
                    codeDisplay={`function linearSearch = (arr,find) => {
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === find) {
                        return i
                    }
                }
                return -1
            }`}
                    description={"Finds an element in the list by sequentially checking each element until the iterating element matches the desired element. The position, or index, is then returned."}
                    image={"https://i.imgur.com/EerzUpo.png"}
                />

            }

        </>
    );
};

export default LinearSearch;