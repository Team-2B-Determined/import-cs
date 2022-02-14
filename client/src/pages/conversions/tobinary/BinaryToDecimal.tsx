export interface Parameters {
  inputType: string,
  outputType: string,
  inputValue: string,
  setOutputValue: Function
}

const BinaryToDecimal = ({inputType, outputType, inputValue, setOutputValue}: Parameters) => {
  //testing push

  setOutputValue("helloWorld")
  return <div>BinaryToDecimal</div>;
};

export default BinaryToDecimal;
