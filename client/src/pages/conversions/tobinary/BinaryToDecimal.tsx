export interface Parameters {
  inputType: string,
  outputType: string,
  inputValue: string,
  setOutputValue: Function
}

const BinaryToDecimal = ({inputType, outputType, inputValue, setOutputValue}: Parameters) => {
  setOutputValue("helloWorld")
  return <div>BinaryToDecimal</div>;
};

export default BinaryToDecimal;
