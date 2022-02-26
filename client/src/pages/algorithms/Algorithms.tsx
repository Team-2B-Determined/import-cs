import CalculationsList, {Item} from "../../components/CalculationsList";

const Algorithms = () => {
  const items:Item[] = [
    {name:"Sorting", href:"/algorithms/sorting", body:"Sorting algorithms such as selection and merge.", image:"https://i.imgur.com/EerzUpo.png"},
    {name:"Merge Sort", href:"#", body:"[More details about Merge Sort]", image:"https://i.imgur.com/EerzUpo.png"},
    {name:"Binary Search", href:"#", body:"[More details about Binary Search]", image:"https://cdn-icons-png.flaticon.com/512/38/38790.png"}
  ]

  return (
    <div>
      <CalculationsList title={"Algorithms"} items={items} />
    </div>
  );
};

export default Algorithms;

