export interface Parameters {
    inputType: string,
    outputType: string,
    inputValue: string,
    setOutputValue: Function
}

const ConversionAlgorithms = ({inputType, outputType, inputValue, setOutputValue}: Parameters) => {
    let output = ""
    if (inputType == "Binary") {
        if (outputType == "Decimal")
            output = BinaryToDecimal(inputValue)
        else if (outputType == "Hexadecimal")
            output = BinaryToHexadecimal(inputValue)
    }
    else if (inputType == "Decimal") {
        if (outputType == "Binary")
            output = DecimalToBinary(inputValue)
        else if (outputType == "Hexadecimal")
            output = DecimalToHexadecimal(inputValue)
    }
    else if (inputType == "Hexadecimal") {
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
    return ov.toString()
};
const HexadecimalToDecimal = (inputValue) => {
    let ov = ""
    return ov.toString()
};
export default ConversionAlgorithms;
