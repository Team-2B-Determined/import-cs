export interface Parameters {
    inputType: string,
    outputType: string,
    inputValue: string,
    setOutputValue: Function
}

const ConversionAlgorithms = ({inputType, outputType, inputValue, setOutputValue}: any) => {
    let output = ""
    if (inputType == "Binary") {
        if (!isBinary(inputValue)) {
            alert("ERROR: Invalid Input Value")
            return <div></div>
        }
        if (outputType == "Decimal")
            output = BinaryToDecimal(inputValue)
        else if (outputType == "Hexadecimal")
            output = BinaryToHexadecimal(inputValue)
    }
    else if (inputType == "Decimal") {
        if (!isDecimal(inputValue)) {
            alert("ERROR: Invalid Input Value")
            return <div></div>
        }
        if (outputType == "Binary")
            output = DecimalToBinary(inputValue)
        else if (outputType == "Hexadecimal")
            output = DecimalToHexadecimal(inputValue)
    }
    else if (inputType == "Hexadecimal") {
        if (!isHexadecimal(inputValue)) {
            alert("ERROR: Invalid Input Value")
            return <div></div>
        }
        if (outputType == "Binary")
            output = HexadecimalToBinary(inputValue)
        else if (outputType == "Decimal")
            output = HexadecimalToDecimal(inputValue)
    }
    setOutputValue(output)
    return <div></div>
};

const BinaryToDecimal = (inputValue) => {
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
};
const BinaryToHexadecimal = (inputValue) => {
    let ov = ""
    ov = BinaryToDecimal(inputValue)
    ov = DecimalToHexadecimal(ov)
    return ov.toString()
};
const DecimalToBinary = (inputValue) => {
    let ov = ""
    let iv = +inputValue
    while (iv > 0) {
        let r = (iv % 2)
        // r is the remainder
        ov = r.toString() + ov
        iv = Math.floor(iv/2)
    }
    return ov.toString()
};
const DecimalToHexadecimal = (inputValue) => {
    let letters = ['A','B','C','D','E','F']
    let ov = ""
    let iv = +inputValue
    while (iv > 0) {
        let r = (iv % 16)
        // r is the remainder
        if (r > 9)
            ov = letters[r%10] + ov
        else
            ov = r.toString() + ov
        iv = Math.floor(iv/16)
    }
    return ov.toString()
};
const HexadecimalToBinary = (inputValue) => {
    let ov = ""
    ov = HexadecimalToDecimal(inputValue)
    ov = DecimalToBinary(ov)
    return ov.toString()
};
const HexadecimalToDecimal = (inputValue) => {
    let value = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
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
    return ov.toString()
};

export const isBinary = (inputValue) => {
    let binList = ['0','1']
    let ivArray = inputValue.split("")
    for(let i = 0; i < ivArray.length; i++){
        if(binList.indexOf(ivArray[i]) < 0){
            return false;
        }
    }
    return true;
};
export const isDecimal = (inputValue) => {
    let decList = ['0','1','2','3','4','5','6','7','8','9']
    let ivArray = inputValue.split("")
    for(let i = 0; i < ivArray.length; i++){
        if(decList.indexOf(ivArray[i]) < 0){
            return false;
        }
    }
    return true;
};
export const isHexadecimal = (inputValue) => {
    let hexList = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let iv = inputValue.toUpperCase()
    let ivArray = iv.split("")
    for(let i = 0; i < ivArray.length; i++){
        if(hexList.indexOf(ivArray[i]) < 0){
            return false;
        }
    }
    return true;
};
export default ConversionAlgorithms;
