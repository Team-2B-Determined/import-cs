import CalculationsList, {Item} from "../../components/CalculationsList";
import {BsSearch, BsSortNumericDown} from "react-icons/bs";
import React from "react";

const Algorithms = () => {
  const items:Item[] = [
    {name:"Sorting", href:"/algorithms/sorting", body:"Sorting algorithms such as selection and merge.", image:<BsSortNumericDown />},
    {name:"Searching", href:"/algorithms/searching", body:"Finding an element in an array", image:<BsSearch/>},
  ]

  return (
    <div>
      <CalculationsList title={"Algorithms"} items={items} />
    </div>
  );
};

export default Algorithms;

