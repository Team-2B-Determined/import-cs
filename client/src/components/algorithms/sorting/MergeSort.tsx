import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import displayCodes from "../../../codeDisplays";
import {Button, Col, Container, Form, FormControl, InputGroup} from "react-bootstrap";
import React, {useState} from "react";
import {HistoryRow} from "../../../pages/accounts/History";
import {useLocation} from "react-router-dom";

const displayArray = (arr: number[], highlightAtIndexes?: number[]) => {
    return [...arr].map((num, arrIndex) => {
        let displayedNum: JSX.Element | string;
        const isLastElement = arrIndex === arr.length - 1
        if (highlightAtIndexes?.includes(arrIndex)) {
            displayedNum = isLastElement ? <strong>{num}</strong> : <><strong>{num}</strong>, </>
        } else {
            displayedNum = isLastElement ? num.toString() : num.toString() + ", "
        }
        return displayedNum
    })
}

const _selectionSort = (arr: number[]): any[] => {
    const steps: Step[] = []
    arr = [...arr]

    for (let i = 0; i < (arr.length - 1); i++) {
        steps.push({
            lineNumber: "3",
            description: <>minInd is initialized to {i} as the element at that index, {arr[i]}, is the
                smallest value we know as of this iteration <br/>
                arr=[{displayArray(arr, [i])}]
            </>
        })
        let minInd = i

        for (let j = (i + 1); j < arr.length; j++) {

            if (arr[j] < arr[minInd]) {
                steps.push({
                    lineNumber: "5-7",
                    description: <>The current element, {arr[j]}, is less than {arr[minInd]}, so we set minInd
                        to {j} now <br/>
                        arr=[{displayArray(arr, [j])}]
                    </>
                })
                minInd = j
            }
        }

        if (minInd !== i) {
            steps.push({
                lineNumber: "11-13",
                description: <>Swap the elements between indexes {i} and {minInd} since a smaller element was
                    found<br/>
                    arr=[{displayArray(arr, [i, minInd])}]
                </>
            })
            const temp = arr[minInd];
            arr[minInd] = arr[i];
            arr[i] = temp;
        } else {
            steps.push({
                lineNumber: "14-16",
                description: <>A smaller element than {arr[i]} was not found<br/>
                    arr=[{displayArray(arr, [i])}]
                </>
            })
            console.log("No need to swap!")
        }
    }
    steps.push({
        lineNumber: "18",
        description: <>Finished! The array is now sorted!<br/>
            arr=[{displayArray(arr)}]
        </>
    })
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



const MergeSort = (numbers:number[]) => {

    return (
            <CalculatorPage
                title={"Merge Sort"}
                codeNavigationGuide={{
                    codeDisplay: displayCodes.selectionSort,
                    steps: _selectionSort(numbers)

                }}
                description={"The smergeort algorithm sorting an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n" +
                    "\t1) The subarray which is already sorted. \n" +
                    "\te2) Remaining subarray which is unsorted.\n" +
                    "In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "}
                links={links}
                image={"https://i.imgur.com/EerzUpo.png"}
            />
    );
};

export default MergeSort;