import CalculatorPage, {ExternalLink} from "../../CalculatorPage";
import {Step} from "../../CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _linearSearch = (arr: any[],find:any): Step[] => {
    const steps:Step[] = [{lineNumber:"2",description:"Let's begin the linear search by going through each element!"}]

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
            description: <>At i = {i}, the element {arr[i]} does not match the element, {find}, we're searching for. Let's go to the next iteration<br/>
                arr=[{displayArray(arr, [i])}]
            </>
        })
    }
    steps.push({
        lineNumber: "7",
        description: <>The element {find} is not found in the array. In this case, we return -1 by convention to indicate failure<br/>
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


const LinearSearch = ({arr,find}: { arr: any[],find:any }) => {

    return (
        <CalculatorPage
            name={"LinearSearch"}
            steps={_linearSearch(arr,find)}
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
    );
};

export default LinearSearch;