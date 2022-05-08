import CalculatorPage, {ExternalLink} from "../../../components/CalculatorPage";
import {Step} from "../../../components/CodeNavigator";
import React from "react";
import displayArray from "../../../displayArray";
import {isDecimal} from "./ConversionAlgorithms";


const _DecimalToHexadecimal = (inputValue: string) => {
    let decValue = inputValue.toString().toUpperCase()
    if (!isDecimal(decValue)) {
        return [{lineNumber:"-1",description:"Error: input wasn't decimal"}]
    }

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
        lineNumber: "8-9,10-12",
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
        name: "wikiHow",
        url: "https://www.wikihow.com/Convert-from-Decimal-to-Hexadecimal"
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
            description={""}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default DecimalToHexadecimal;