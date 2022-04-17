import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _HexadecimalToBinary = (inputValue: string) => {
    const steps: Step[] = []

    steps.push({
        lineNumber: "1-5",
        description:
            <>Hexadecimal To Binary Conversion. <br/>
            Hexadecimal Number is {inputValue} <br/>
            From least to greatest significant value (Right to Left) the Hexadecimal number, digit by digit, is converted to Binary<br/>
            Bin=Hex: [0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F]
            </>
    })

    let hexValue = inputValue.toString().toUpperCase()
    let binValue = ""
    let binList = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
    let hexList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    for (let i = hexValue.length; i > 0; i--){
        let x = hexList.indexOf(hexValue[i-1])
        steps.push({
            lineNumber: "6-9",
            description:
                <>Current Hexadecimal Digit: {hexValue[i - 1]} <br/>
                    Match Bin with Hex <br/>
                    Bin=Hex: [0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A,
                    1011=B, 1100=C, 1101=D, 1110=E, 1111=F] <br/>
                    Binary group is: {binList[x]} <br/>
                    Current total Binary Value = {binValue} <br/>
                    Add to total Binary Value: {binList[x]} + {binValue} = {binList[x].toString() + binValue.toString()}
                </>
        })
        binValue = binList[x] + binValue
    }

    steps.push({
        lineNumber: "10",
        description:
            <>Conversion Complete! <br/>
            Initial Hexadecimal Value: {inputValue} <br/>
            Converted Binary Value: {binValue}
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


const HexadecimalToBinary = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"HexadecimalToBinary"}
            steps={_HexadecimalToBinary(inputValue)}
            links={links}
            codeDisplay={
                `const HexadecimalToBinary = (inputValue) => {
                    let hexValue = inputValue.toString()
                    let binValue = ""
                    let binList = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
                    let hexList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
                    for (let i = hexValue.length; i > 0; i--){
                        let x = hexList.indexOf(hexValue[i-1])
                        binValue = binList[x] + binValue
                    }
                    return binValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default HexadecimalToBinary;