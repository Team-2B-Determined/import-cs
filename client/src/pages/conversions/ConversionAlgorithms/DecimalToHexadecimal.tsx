import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _DecimalToHexadecimal = (inputValue: string) => {
    const steps: Step[] = []
    
    steps.push({
        lineNumber: "1",
        description: 
            <>Decimal to Hexadecimal Conversion. <br/>
            Decimal Number is {inputValue} <br/>
            Decimal Number is repeatedly divided by sixteen until it equals zero <br/>
            Hexadecimal value equals the remainders, from least to greatest value
            </>
    })
    

    let letters = ['A','B','C','D','E','F']
    let ov = ""
    let iv = +inputValue
    while (iv > 0) {
        let r = (iv % 16)
        // r is the remainder
        steps.push({
        lineNumber: "5-7",
        description:
            <>Current Decimal Value is: {iv} <br/>
            Divide by sixteen: {iv}/16 = {Math.floor(iv/16)} rem: {r} <br/>
            </>
        })
        if (r > 9)
            ov = letters[r%10] + ov
        else
            ov = r.toString() + ov
        steps.push({
        lineNumber: "8-12",
        description:
            <>Convert remainder to Hexadecimal value and Add to string <br/>
            Current Hexadecimal String: {ov} <br/>
            </>
        })
        iv = Math.floor(iv/16)
    }

    steps.push({
        lineNumber: "14",
        description:
            <>Conversion Complete! <br/>
            Initial Decimal Value: {inputValue} <br/>
            Converted Hexadecimal Value: {ov}
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


const DecimalToHexadecimal = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"DecimalToHexadecimal"}
            steps={_DecimalToHexadecimal(inputValue)}
            links={links}
            codeDisplay={
                `const DecimalToHexadecimal = (inputValue) => {
                    let letters = ['A','B','C','D','E','F']
                    let hexValue = ""
                    let decValue = +inputValue
                    while (decValue > 0) {
                        let r = (decValue % 16)
                        // r is the remainder
                        if (r > 9)
                            hexValue = letters[r%10] + hexValue
                        else
                            hexValue = r.toString() + hexValue
                        decValue = Math.floor(decValue/16)
                    }
                    return hexValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default DecimalToHexadecimal;