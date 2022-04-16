import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React, {useState} from "react";
import displayArray from "../../../displayArray";
import {Col, Form} from "react-bootstrap";


function _quickSort(arr, pivotStrategy: PivotStrategy, steps) {
    if (arr.length <= 1) {
        steps.push({
            lineNumber: "2-4",
            description: <>An element with a single element or less is already sorted.<br/>
                arr=[{displayArray(arr)}]
            </>
        })
        return arr;
    }

    let pivot;
    switch (pivotStrategy) {
        case "First Element":
            pivot = arr[0]
            steps.push({
                lineNumber: "6",
                description: <>Simply assign the pivot to the first element for
                    the <strong>{pivotStrategy}</strong> pivot strategy
                    <br/>arr=[{displayArray(arr, [0])}]</>
            })
            break;
        case "Random Element":
            const randomIndex = Math.floor(Math.random() * arr.length)
            pivot = arr[randomIndex];
            steps.push({
                lineNumber: "6",
                description: <>Assign the pivot to a random element in the array for
                    the <strong>{pivotStrategy}</strong> pivot strategy.
                    Index
                    {randomIndex} is selected and will be the pivot<br/>{displayArray(arr, [randomIndex])}</>
            })
            break;
        case "Median-of-3":
            steps.push({
                lineNumber: "6-9,10-21",
                description: <>We will be finding the median of the first, middle, and last element to select the pivot
                    for the <strong>{pivotStrategy}</strong> pivot strategy</>
            })

            const firstIndex = 0
            const midIndex = Math.floor(arr.length / 2);
            const lastIndex = arr.length - 1

            const first = arr[firstIndex]
            const mid = arr[midIndex]
            const last = arr[lastIndex]
            steps.push({
                lineNumber: "6-8",
                description: <>Create three variables that target the first, middle, and last element<br/>
                    arr = [{displayArray(arr, [firstIndex, midIndex, lastIndex])}]<br/>first = {first}<br/>mid
                    = {mid}<br/>last
                    = {last}</>
            })


            let medianLineNumbers = ""
            let medianIndex;
            if ((first >= mid && first <= last) || (first >= last && first <= mid)) {
                medianIndex = firstIndex
                medianLineNumbers = "11-13"
            } else if ((mid >= first && mid <= last) || (mid >= last && mid <= first)) {
                medianIndex = midIndex
                medianLineNumbers = "14-16"
            } else {
                medianIndex = lastIndex
                medianLineNumbers = "17-19"
            }

            steps.push({
                lineNumber: medianLineNumbers += ", 21",
                description: <>Assign the pivot to <strong>{arr[medianIndex]}</strong> as it is the median of the
                    three<br/>arr = [{displayArray(arr, [medianIndex])}]
                </>
            })
            pivot = arr[medianIndex]

            break;
    }


    steps.push({
        lineNumber: pivotStrategy !== "Median-of-3" ? "8-9,10" : "23-25",
        description: "Create 3 arrays: one for less than, equal, and greater than the pivot"
    })
    let less: number[] = [];
    let equal: number[] = [];
    let greater: number[] = [];

    for (let val of arr) {
        if (val < pivot) {
            steps.push({
                lineNumber: pivotStrategy !== "Median-of-3" ? "13-15" : "28-30",
                description: <>{val} will be added to <strong>less=[{displayArray(less)}]</strong> since it's less than
                    the pivot, {pivot}
                </>
            })
            less.push(val);
        } else if (val === pivot) {
            steps.push({
                lineNumber: pivotStrategy !== "Median-of-3" ? "15-17" : "30-32",
                description: <>{val} will be added to <strong>equal=[{displayArray(equal)}]</strong> since it's equal to
                    the pivot, {pivot}
                </>
            })
            equal.push(val);
        } else {
            steps.push({
                lineNumber: pivotStrategy !== "Median-of-3" ? "17-19" : "32-34",
                description: <>{val} will be added to <strong>greater=[{displayArray(greater)}]</strong> since it's less
                    than the pivot, {pivot}
                </>
            })
            greater.push(val);
        }
    }

    steps.push({
        lineNumber: pivotStrategy !== "Median-of-3" ? "22" : "37",
        description: <>Let's sort the less array first! <br/>less=[{displayArray(less)}]
        </>
    })
    const sortedLess = _quickSort(less, pivotStrategy, steps)
    steps.push({
        lineNumber: pivotStrategy !== "Median-of-3" ? "24" : "39",
        description: <>Let's sort the greater array now! <br/>greater=[{displayArray(greater)}]
        </>
    })
    const sortedGreater = _quickSort(greater, pivotStrategy, steps)

    const sortedArr = [
        ...sortedLess,
        ...equal,
        ...sortedGreater
    ];

    steps.push({
        lineNumber: pivotStrategy !== "Median-of-3" ?"21-25" : "36-40" ,
        description: <>Combine both sorted left and right array together to finish! <br/>arr=[{displayArray(sortedArr)}]
        </>
    })
    return sortedArr
}


const generateSteps = (arr, pivotStrategy: PivotStrategy) => {
    const steps: Step[] = []
    _quickSort(arr, pivotStrategy, steps)
    return steps
}


const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/quick-sort/"
    },
    {
        name: "[Video] Quick sort in 4 minutes",
        url: "https://youtu.be/Hoixgm4-P4M"
    }
]

export const PIVOT_STRATEGIES = ["First Element", "Random Element", "Median-of-3"] as const
type PivotStrategy = typeof PIVOT_STRATEGIES[number]

const QuickSort = ({numbers}: { numbers: number[] }) => {
    const [pivotStrategy, setPivotStrategy] = useState<PivotStrategy>("First Element")
    let pivotDisplay = "";

    switch (pivotStrategy) {
        case "First Element":
            pivotDisplay += "const pivot = arr[0]"
            break;
        case "Random Element":
            pivotDisplay += "const pivot = arr[Math.floor(Math.random() * arr.length)]"
            break;
        case "Median-of-3":
            pivotDisplay += `const first = arr[0]
    const mid = Math.floor(arr.length / 2)
    const last = arr[arr.length-1]

    let median
    if ((first >= mid && first <= last) || (first >= last && first <= mid)) {
        median = 0
    }
    else if ((mid >= first && mid <= last) || (mid >= last && mid <= first)) {
        median = Math.floor(arr.length / 2);
    }
    else {
        median = arr.length - 1
    }

    pivot = arr[median]`
            break;
    }

    return (<>
            <Col xs={3}>
                <Form.Group controlId="formBasicSelect">
                    <Form.Label>Pivot Strategy</Form.Label>
                    <Form.Select
                        value={pivotStrategy}
                        onChange={e => {
                            setPivotStrategy(e.target.value as PivotStrategy)
                        }}
                    >
                        {PIVOT_STRATEGIES.map(pivotStrategy => <option data-testid={`option-${pivotStrategy}`} value={pivotStrategy}>
                            {pivotStrategy}
                        </option>)}
                    </Form.Select></Form.Group>
            </Col>
            <CalculatorPage
                name={"QuickSort"}
                steps={generateSteps(numbers, pivotStrategy)}
                links={links}
                codeDisplay={`function _quickSort(arr, steps) {
    if (arr.length <= 1) {
        return arr;
    }
    
    ${pivotDisplay}

    let less: number[] = [];
    let equal: number[] = [];
    let greater: number[] = [];

    for (let val of arr) {
        if (val < pivot) {
            less.push(val);
        } else if (val === pivot) {
            equal.push(val);
        } else {
            greater.push(val);
        }
    }
    return [
        ..._quickSort(less, pivotStrategy,steps),
        ...equal,
        ..._quickSort(greater, pivotStrategy,steps)
    ];
}
`}
                description={"Quicksort is an in-place, divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting."}
                image={"https://i.imgur.com/EerzUpo.png"}
            />
        </>
    );
};

export default QuickSort;