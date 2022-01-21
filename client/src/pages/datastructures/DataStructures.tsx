import CalculationsList, {Item} from "../../components/CalculationsList";

const DataStructures = () => {
  const items:Item[] = [
    {name:"Binary Search Tree", href:"/BinarySearchTree", body:"Binary Search Tree is a node-based binary tree data structure which has the following properties:\n" +
          "\n" +
          "The left subtree of a node contains only nodes with keys lesser than the node’s key.\n" +
          "The right subtree of a node contains only nodes with keys greater than the node’s key.\n" +
          "The left and right subtree each must also be a binary search tree.", image:"https://static.thenounproject.com/png/642305-200.png"},
    {name:"Linked List", href:"#", body:"[More details about Linked List]", image:"https://static.thenounproject.com/png/642306-200.png"},
    {name:"Array List", href:"#", body:"[More details about Array List]", image:"https://cdn4.iconfinder.com/data/icons/miscellaneous-150-solid/128/series_category_array_list_sequence_file_folder_arrange-512.png"}
  ]

  return (
    <div>
      <CalculationsList title={"Data structures"} items={items} />
    </div>
  );
};

export default DataStructures;
