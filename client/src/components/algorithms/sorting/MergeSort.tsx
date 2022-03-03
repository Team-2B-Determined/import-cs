import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _mergeSort = (arr, steps) => {
    if (arr.length <= 1) {
        steps.push({
            lineNumber: "2-4",
            description: <>An element with a single element or less is already sorted.<br/>
                arr=[{displayArray(arr)}]
            </>
        })
        return arr
    }

    const split = Math.floor(arr.length / 2)
    let left = arr.slice(0, split)
    let right = arr.slice(split)
    steps.push({
        lineNumber: "5-7",
        description: <>Split the array in half so we have a left and right half.<br/>
            arr=[{displayArray(arr)}]<br/>
            left=[{displayArray(left)}], right=[{displayArray(right)}]
        </>
    })


    steps.push({
        lineNumber: "9",
        description: <>Let's sort the left half first!<br/>
            left=[{displayArray(left)}]
        </>
    })
    left = _mergeSort(left, steps)

    steps.push({
        lineNumber: "10",
        description: <>Let's sort the right half now!<br/>
            right=[{displayArray(right)}]
        </>
    })
    right = _mergeSort(right, steps)

    steps.push({
        lineNumber: "12",
        description: "Now that both sides are sorted, let's combine them back to one sorted array"
    })

    const sorted: any[] = []
    while (left.length > 0 || right.length > 0) {
        if (right.length === 0 || left[0] <= right[0]) {
            if (right.length === 0) {
                steps.push({
                    lineNumber: "14-16",
                    description: <>Add the remaining elements of the left array since the right side is empty<br/>
                        left=[{displayArray(left, [0])}], sorted=[{displayArray(sorted)}]
                    </>
                })
            } else {
                steps.push({
                    lineNumber: "14-16",
                    description: <>{left[0]} from left=[{displayArray(left, [0])}] is smaller or equal
                        to {right[0]} from right=[{displayArray(right, [0])}], so we'll add that in to the sorted
                        array<br/>
                        sorted=[{displayArray(sorted)}]
                    </>
                })
            }
            sorted.push(left.shift())
        } else {
            if (left.length === 0) {
                steps.push({
                    lineNumber: "16-18",
                    description: <>Add the remaining elements of the right sorted array since the left side is
                        empty<br/>
                        right=[{displayArray(right, [0])}], sorted=[{displayArray(sorted)}]
                    </>
                })
            } else {
                steps.push({
                    lineNumber: "16-18",
                    description: <>{right[0]} from right=[{displayArray(right, [0])}] is small or equal
                        to {left[0]} from left=[{displayArray(left, [0])}], so we'll add that in to the sorted
                        array<br/>
                        sorted=[{displayArray(sorted)}]
                    </>
                })
            }
            sorted.push(right.shift())
        }
    }

    steps.push({
        lineNumber: "21",
        description: <>Finished! The array is now sorted!<br/>
            sorted=[{displayArray(sorted)}]
        </>
    })
    return sorted
};

const generateSteps = (arr) => {
    const steps: Step[] = []
    _mergeSort(arr, steps)
    return steps
}

const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/merge-sort/"
    },
    {
        name: "[Video] Merge sort in 3 minutes",
        url: "https://youtu.be/4VqmGXwpLqc"
    }
]


const MergeSort = ({numbers}: { numbers: number[] }) => {

    return (
        <CalculatorPage
            calculatorFeature={"MergeSort"}
            steps={generateSteps(numbers)}
            links={links}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default MergeSort;