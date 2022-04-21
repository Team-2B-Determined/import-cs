import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isBinary} from "./ConversionAlgorithms";


const _BinaryToDecimal = (inputValue: string) => {
    let binValue = inputValue.toString()
    if (!isBinary(binValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't binary"}]
    }
    const steps: Step[] = []

    let ov = 0
    let ivArray = inputValue.split("")
    let ivReverse = ivArray.reverse()
    steps.push({
        lineNumber: "1",
        description: 
            <>Binary to Decimal Conversion. <br/>
            Binary Number is {inputValue} <br/>
            We start from the right with the least significant value and multiply by the location's binary power
            </>
    })
    for (let p = 0; p < ivReverse.length; p++) {
        // p = power
        let n = +ivReverse[p]
        // n = binary value at that power
        let v = (n * (2 ** p))
        steps.push({
            lineNumber: "5-9",
            description: 
                <>Binary Number: {inputValue} <br/>
                The value at location {p} is: {n} <br/>
                Binary power at location {p} is: 2^{p} <br/>
                Location Decimal Value is: (Location Value * Binary Power) <br/>
                Location Decimal Value is: {n} * 2^{p} = {v} <br/>
                Previous Total Value + Location Value: {ov} + {v} <br/>
                Current Total Decimal Value: {ov+v}
                </>
        })
        ov += v
    }
    steps.push({
        lineNumber: "11",
        description:
            <>Conversion Complete! <br/>
            Intial Binary Value: {inputValue} <br/>
            Converted Decimal Value: {ov}
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


const BinaryToDecimal = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"BinaryToDecimal"}
            steps={_BinaryToDecimal(inputValue)}
            links={links}
            codeDisplay={
                `const BinaryToDecimal = (inputValue) => {
                    let decValue = 0
                    let binArray = inputValue.split("")
                    let binReverse = binArray.reverse()
                    for (let p = 0; p < binReverse.length; p++) {
                        // p = power
                        let n = +binReverse[p]
                        // n = binary value at that power
                        decValue += (n * (2 ** p))
                    }
                    return decValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default BinaryToDecimal;