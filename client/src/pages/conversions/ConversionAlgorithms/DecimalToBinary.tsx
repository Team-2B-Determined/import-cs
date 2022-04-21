import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isDecimal} from "./ConversionAlgorithms";


const _DecimalToBinary = (inputValue: string) => {
    let decValue = inputValue.toString().toUpperCase()
    if (!isDecimal(decValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't decimal"}]
    }
    const steps: Step[] = []
    
    steps.push({
        lineNumber: "1",
        description: 
            <>Decimal to Binary Conversion. <br/>
            Decimal Number is {inputValue} <br/>
            Decimal Number is repeatedly divided by two until it equals zero <br/>
            Binary value equals the remainder, from least to greatest significant value
            </>
    })
    
    let ov = ""
    let iv = +inputValue
    while (iv > 0) {
        let r = (iv % 2)
        // r is the remainder
        steps.push({
        lineNumber: "4-8",
        description:
            <>Current Decimal Value is: {iv} <br/>
            Divide by two: {iv}/2 = {Math.floor(iv/2)} rem: {r} <br/>
            Previous Binary String: {ov} <br/>
            Current Binary String: {r}{ov} <br/>
            </>
        })
        ov = r.toString() + ov
        iv = Math.floor(iv/2)
    }

    steps.push({
        lineNumber: "10",
        description:
            <>Conversion Complete! <br/>
            Intial Decimal Value: {inputValue} <br/>
            Converted Binary Value: {ov}
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


const DecimalToBinary = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"DecimalToBinary"}
            steps={_DecimalToBinary(inputValue)}
            links={links}
            codeDisplay={
                `const DecimalToBinary = (inputValue) => {
                    let binValue = ""
                    let decValue = +inputValue
                    while (decValue > 0) {
                        let remainder = (decValue % 2)
                        binValue = remainder.toString() + binValue
                        decValue = Math.floor(decValue / 2)
                    }
                    return binValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default DecimalToBinary;