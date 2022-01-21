import CalculationsList, {Item} from "../../components/CalculationsList";

const Algorithms = () => {
  const items:Item[] = [
    {name:"Selection Sort", href:"/SelectionSort", body:"The Selection Sort is a very basic sort. It works by finding the smallest element in the array and putting it at the beginning of the list and then repeating that process on the unsorted remainder of the data.", image:"https://i.imgur.com/EerzUpo.png"},
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

