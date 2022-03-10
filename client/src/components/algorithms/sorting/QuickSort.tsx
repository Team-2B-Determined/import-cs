import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


function _quickSort(arr, steps) {
    if (arr.length <= 1) {
        steps.push({
            lineNumber: "2-4",
            description: <>An element with a single element or less is already sorted.<br/>
                arr=[{displayArray(arr)}]
            </>
        })
        return arr;
    }

    steps.push({
        lineNumber: "5-10",
        description: "Generate a pivot. We will "
    })
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left: number[] = [];
    let right: number[] = [];
    let equal: number[] = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    return [
        ..._quickSort(left, steps),
        ...equal,
        ..._quickSort(right, steps)
    ];
}


const generateSteps = (arr) => {
    const steps: Step[] = []
    _quickSort(arr, steps)
    return steps
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


const QuickSort = ({numbers}: { numbers: number[] }) => {

    return (
        <CalculatorPage
            name={"QuickSort"}
            steps={generateSteps(numbers)}
            links={links}
            codeDisplay={`function _quickSort(arr, steps) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left= [];
    let right = [];
    let equal = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    return [
        ..._quickSort(left, steps),
        ...equal,
        ..._quickSort(right, steps)
    ];
}
`}
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default QuickSort;