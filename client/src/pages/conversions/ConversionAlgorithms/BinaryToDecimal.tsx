import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _BinaryToDecimal = (inputValue: string) => {
    const steps: Step[] = []
    let spotVal = 0
    let totalVal = 0

    let ov = 0
    let ivArray = inputValue.split("")
    let ivReverse = ivArray.reverse()
    steps.push({
        lineNumber: "3",
        description: 
            <>Binary to Decimal Conversion. <br/>
            Binary Number is {inputValue} <br/>
            We start from the right with the least significant value
            </>
    })
    for (let p = 0; p < ivReverse.length; p++) {
        // p = power
        let n = +ivReverse[p]
        // n = binary value at that power
        let v = (n * (2 ** p))
        steps.push({
            lineNumber: "5",
            description: 
                <>The value at location {p} is {n}. <br/>
                This is multiplied with the binary power at the location {p} which is 2^{p} <br/>
                Location Value is {v} <br/>
                This is added to the total value: {ov} + {v}
                </>
        })
        ov += v
        steps.push({
            lineNumber: "6",
            description: 
                <>Current Total Decimal Value: {ov}
                </>
        })
    }
    steps.push({
        lineNumber: "10",
            description:
                <>Decimal Value: {ov}
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
                    let ov = 0
                    let ivArray = inputValue.split("")
                    let ivReverse = ivArray.reverse()
                    for (let p = 0; p < ivReverse.length; p++) {
                        // p = power
                        let n = +ivReverse[p]
                        // n = binary value at that power
                        ov += (n * (2 ** p))
                    }
                    return ov.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default BinaryToDecimal;