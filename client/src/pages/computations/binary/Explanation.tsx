import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isBinary} from "../../conversions/ConversionAlgorithms/ConversionAlgorithms";

const getCompDetail = (computation: string) => {
    if(computation === '+'){
        return "Adding Two Binary Numbers";
    }
    if(computation === '-'){
        return "Subtracting Two Binary Numbers";
    }
    if(computation === '×'){
        return "Multiplying Two Binary Numbers";
    }
    if(computation === '÷'){
        return "Dividing Two Binary Numbers";
    }

}

const _BinaryToDecimal = (numberInput1: string, numberInput2: string, computation: string, result: string) => {
    let binValue = numberInput1.toString()
    if (!isBinary(binValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't binary"}]
    }
    const steps: Step[] = []

    let ov = 0
    let ivArray = numberInput1.split("")
    let ivReverse = ivArray.reverse()
    steps.push({
        lineNumber: "1",
        description:
            <>{getCompDetail(computation)} <br/>
                First Binary Number is {numberInput1} <br/>
                Second Binary Number is {numberInput2} <br />
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
                <>First Binary Number: {numberInput1} <br/>
                    Second Binary Number: {numberInput2} <br/>
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
                Intial First Binary Value: {numberInput1} <br/>
                Initial Second Binary Value: {numberInput2} <br/>
                Converted Decimal Value: {ov}
            </>
    })
    steps.push({
        lineNumber: "12",
        description:
            <>Final Binary Value: {result} <br/>
            </>
    })

    return steps
}


const links: ExternalLink[] = [
    {
        name: "GeeksForGeeks",
        url: "https://www.geeksforgeeks.org/binary-representations-in-digital-logic/#:~:text=Binary%20is%20a%20base%2D2,build%20the%20normal%20decimal%20number.&text=The%20binary%20number%20is%20traversed%20from%20left%20to%20right."
    },
    {
        name: "Video (5:32)",
        url: "https://www.youtube.com/watch?v=5OBZYhJnne0"
    }
]


const Explanation = (numberInput1: string, numberInput2: string, computation: string, result: string) => {

    return (
        <CalculatorPage
            name={"BinaryToDecimal"}
            steps={_BinaryToDecimal(numberInput1, numberInput2, computation, result)}
            links={links}
            codeDisplay={
                `const firstBinaryInput = (inputValue) => {
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

export default Explanation;