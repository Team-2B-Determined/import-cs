import CalculationsList, {Item} from "../../components/CalculationsList";
import {BsListUl, BsStack} from "react-icons/bs";

const DataStructures = () => {
  const items:Item[] = [
    {name:"Stacks and Queues", href:"/datastructures/single-element",
      body:"Stacks are a container that stores items using LIFO.\n" +
          "Queues are a container that stores items using FIFO.",
      image:<BsStack/>},
    {name:"Lists", href:"/datastructures/lists",
      body:"THIS PAGE CONTAINS UNIMPLEMENTED FEATURES",
      image:<BsListUl/>}
  ]

  return (
    <div>
      <CalculationsList title={"Data structures"} items={items} />
    </div>
  );
};

export default DataStructures;
