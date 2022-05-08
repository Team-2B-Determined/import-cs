import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isHexadecimal} from "./ConversionAlgorithms";


const _HexadecimalToDecimal = (inputValue: string) => {
    let hexValue = inputValue.toString().toUpperCase()
    if (!isHexadecimal(hexValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't hexadecimal"}]
    }

    const steps: Step[] = []
    
    steps.push({
        lineNumber: "1-5",
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
            lineNumber: "6-9,10",
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
            Initial Hexadecimal Value: {inputValue} <br/>
            Converted Decimal Value: {ov}
            </>
    })

    return steps
}


const links: ExternalLink[] = [
    {
        name: "wikiHow",
        url: "https://www.wikihow.com/Convert-Hexadecimal-to-Binary-or-Decimal"
    },
    {
        name: "Video",
        url: "https://youtu.be/dQw4w9WgXcQ"
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
                    let decValue = 0
                    let hexValue = inputValue.toUpperCase()
                    let hexArray = hexValue.split("")
                    let hexReverse = hexArray.reverse()
                    for (let p = 0; p < hexReverse.length; p++) {
                        // p = power
                        let n = +(value.indexOf(hexReverse[p]))
                        // n = hex value at that power
                        decValue += (n * (16 ** p))
                    }
                    return decValue.toString()
                };`
            }
            description={""}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default HexadecimalToDecimal;