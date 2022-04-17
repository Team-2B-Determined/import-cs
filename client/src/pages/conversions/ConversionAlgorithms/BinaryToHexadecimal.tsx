import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";


const _BinaryToHexadecimal = (inputValue: string) => {
    const steps: Step[] = []
    
    steps.push({
        lineNumber: "1-5",
        description: 
            <>Binary to Hexadecimal Conversion. <br/>
            Binary Number is {inputValue} <br/>
            From least to greatest significant value (Right to Left) the Binary number is broken into groups of 4 digits <br/>
            Each group of 4 Binary digits equals a Hexadecimal value <br/>
            Bin=Hex: [0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F]
            </>
    })

    let binValue = inputValue.toString()
    let hexValue = ""
    let binList = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
    let hexList = [   '0',    '1',    '2',    '3',    '4',    '5',    '6',    '7',    '8',    '9',    'A',    'B',    'C',    'D',    'E',    'F']
    for (let i = 0; i < binValue.length % 4; i++){
        binValue = '0' + binValue
    }
    steps.push({
        lineNumber: "6-8",
        description:
            <>Add filler 0s to the Binary Number to make it divisible by 4 <br/>
            Binary Number is now {binValue}
            </>
    })
    for (let i = binValue.length; i > 0; i = i-4){
        let binGroup = binValue.substring(i-4, i)
        let x = binList.indexOf(binGroup)
        steps.push({
            lineNumber: "9-13",
            description:
                <>Current Group of 4 Binary Digits is: {binGroup} <br/>
                Match Bin with Hex <br/>
                Bin=Hex: [0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F] <br/>
                Hexadecimal Digit is: {hexList[x]} <br/>
                Current Hexadecimal Value = {hexValue} <br/>
                Add to total Hexadecimal Value: {hexList[x]} + {hexValue} = {hexList[x] + hexValue}
                </>
        })
        hexValue = hexList[x] + hexValue
    }
    steps.push({
        lineNumber: "14",
        description:
            <>Conversion Complete! <br/>
                Initial Decimal Value: {inputValue} <br/>
                Converted Binary Value: {hexValue}
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


const BinaryToHexadecimal = (inputValue: string) => {

    return (
        <CalculatorPage
            name={"BinaryToHexadecimal"}
            steps={_BinaryToHexadecimal(inputValue)}
            links={links}
            codeDisplay={
                `const BinaryToHexadecimal = (inputValue) => {
                    let binValue = inputValue.toString()
                    let hexValue = ""
                    let binList = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
                    let hexList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
                    for (let i = 0; i < binValue.length % 4; i++){
                        binValue = '0' + binValue
                    }
                    for (let i = binValue.length; i > 0; i = i-4){
                        let binGroup = binValue.substring(i-4, i)
                        let x = binList.indexOf(binGroup)
                        hexValue = hexList[x] + hexValue
                    }
                    return hexValue.toString()
                };`
            }
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\\n\" +\n                    \"\\t1) The subarray which is already sorted. \\n\" +\n                    \"\\te2) Remaining subarray which is unsorted.\\n\" +\n                    \"In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default BinaryToHexadecimal;