import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _HexadecimalToDecimal = (inputValue: string) => {
    const steps: Step[] = []
    
    steps.push({
        lineNumber: "1",
        description: 
            <>Hexadecimal to Decimal Conversion. <br/>
            Hexadecimal Number is {inputValue} <br/>
            We start from the right with the least significant value and multiply by the location's hexadecimal power
            </>
    })
    
    let value = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let ov = 0
    let iv = inputValue.toUpperCase()
    let ivArray = iv.split("")
    let ivReverse = ivArray.reverse()
    for (let p = 0; p < ivReverse.length; p++) {
        // p = power
        let n = +(value.indexOf(ivReverse[p]))
        // n = hex value at that power
        let v = (n * (16 ** p))
        steps.push({
            lineNumber: "6-11",
            description:
                <>Hexadecimal Number: {inputValue} <br/>
                The value at location {p} is: {n} <br/>
                Hexadecimal power at location {p} is: 16^{p} <br/>
                Location Decimal Value is: (Location Value * Hexadecimal Power) <br/>
                Location Decimal Value is: {n} * 16^{p} = {v} <br/>
                Previous Total Value + Location Value: {ov} + {v} <br/>
                Current Total Decimal Value: {ov+v}
                </>
        })
        ov += v
    }

    steps.push({
        lineNumber: "12",
        description:
            <>Conversion Complete! <br/>
            Intial Hexadecimal Value: {inputValue} <br/>
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


const HexadecimalToDecimal = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"HexadecimalToDecimal"}
            steps={_HexadecimalToDecimal(inputValue)}
            links={links}
            codeDisplay={
                `let value = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
                    let ov = 0
                    let iv = inputValue.toUpperCase()
                    let ivArray = iv.split("")
                    let ivReverse = ivArray.reverse()
                    for (let p = 0; p < ivReverse.length; p++) {
                        // p = power
                        let n = +(value.indexOf(ivReverse[p]))
                        // n = hex value at that power
                        ov += (n * (16 ** p))
                    }
                    return binValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default HexadecimalToDecimal;