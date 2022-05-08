import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isBinary} from "./ConversionAlgorithms";


const _BinaryToHexadecimal = (inputValue: string) => {
    let binValue = inputValue.toString()
    if (!isBinary(binValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't binary"}]
    }

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
            lineNumber: "9,10-13",
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
        name: "wikiHow",
        url: "https://www.wikihow.com/Convert-Binary-to-Hexadecimal"
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
            description={""}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default BinaryToHexadecimal;