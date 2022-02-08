import BinaryAddition from "./binary/BinaryAddition";
import Badge from 'react-bootstrap/Badge'


const Computations = () => {
  return (
    <div>
        <h1>
            Computations <Badge> New</Badge>
        </h1>
      <div>
        <h5>
         Binary Computations-Add, Subtract, Multiply, or Divide <Badge> New </Badge>
        </h5>
        <BinaryAddition />
      </div>
    </div>
  );
};

export default Computations;
