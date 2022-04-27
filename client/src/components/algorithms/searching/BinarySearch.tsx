import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _binarySearch = (arr: any[], find: any): Step[] => {
    const steps: Step[] = [{
        lineNumber: "1",
        description: "In binary search, the precondition is that the array must already be sorted. Otherwise, it may give an incorrect result"
    }]
    steps.push({
        lineNumber: "2-3",
        description: "Define the beginning and end of the given array to search."
    })
    let start = 0;
    let end = arr.length - 1;

    steps.push({
        lineNumber: "5",
        description:
            "Search the array until we've gone through all possible values with binary search. A trick is to assert that the start index cannot be greater than the end index"
    })
    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        steps.push({
            lineNumber: "6",
            description: <>Establish the midpoint {mid} given the subarray from index {start} to {end}</>
        })

        if (arr[mid] === find) {
            steps.push({
                lineNumber: "8-10",
                description: <>Element {find} found at index {mid}! we can now return it and finish the search.
                    arr=[{displayArray(arr, [mid])}]
                </>
            })
            /// return mid
            return steps;
        }

        if (find < arr[mid]) {
            end = mid - 1;
            steps.push({
                lineNumber: "12-14",
                description: <>Since {find} is less than {arr[mid]}, we know we can ignore everything above the midpoint. Let's remove the excess.<br/>
                    arr=[{displayArray(arr, [mid,arr.length-1])}] <br/>
                    arr[0:{end}] = [{displayArray(arr.slice(0,mid))}]
                </>
            })
        } else {
            start = mid + 1;
            steps.push({
                lineNumber: "14-16",
                description: <>Since {find} is the same or greater than {arr[mid]}, we know we can ignore everything at and below the midpoint. Let's remove the excess.<br/>
                    arr=[{displayArray(arr, [0,mid])}] <br/>
                    arr[{start}:{end+1}] = [{displayArray(arr.slice(start,end+1))}]
                </>
            })
        }
    }

    steps.push({lineNumber:"18",description:"Element was not found, so return -1 to signal that"})

    // return -1
    return steps

}


const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/binary-search/"
    },
    {
        name: "Video (6:21)",
        url: "https://youtu.be/P3YID7liBug"
    }
]


const BinarySearch = ({arr, find}: { arr: any[], find: any }) => {

    return (
        <CalculatorPage
            name={"BinarySearch"}
            steps={_binarySearch(arr, find)}
            links={links}
            codeDisplay={`function binarySearch(arr, find) {
      let start = 0;
      let end = arr.length - 1;
    
      while (start <= end) {
        let mid = Math.floor((start + end) / 2);
    
        if (arr[mid] === find) {
          return mid;
        }
    
        if (find < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
      return -1;
    }`}
            description={"Finds an element in a sorted list by comparing the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array."}            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default BinarySearch;