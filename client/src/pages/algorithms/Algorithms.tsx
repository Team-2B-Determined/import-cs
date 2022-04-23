import CalculationsList, {Item} from "../../components/CalculationsList";

const Algorithms = () => {
  const items:Item[] = [
    {name:"Sorting", href:"/algorithms/sorting", body:"Sorting algorithms such as selection and merge.", image:"https://i.imgur.com/EerzUpo.png"},
    {name:"Searching", href:"/algorithms/searching", body:"Finding an element in an array", image:"https://i.imgur.com/EerzUpo.png"},
  ]

  return (
    <div>
      <CalculationsList title={"Algorithms"} items={items} />
    </div>
  );
};

export default Algorithms;

