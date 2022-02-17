import CalculatorPage from "../../../components/CalculatorPage";
const SelectionSort = () => {


  const binaryAddition = () => {
    // logic gates
    const xor = (a, b) => a === b ? 0 : 1;
    const and = (a, b) => a == 1 && b == 1 ? 1 : 0;
    const or = (a, b) => a || b;

    const halfAdder = (a, b) => {
      const sum = xor(a,b);
      const carry = and(a,b);
      return [sum, carry];
    }

    function fullAdder(a, b, carry){
      const x = halfAdder(a, b);
      const y = halfAdder(carry, x[0]);
      const carry2 = or(carry, x[1]);
      return [y[0], carry2];
    }
// output the sum of 2 binary numbers
    const addBinary = (a, b) => {

      let sum = '';
      let carry = '';

      for(var i = a.length-1;i>=0; i--){
        if(i == a.length-1){
          //half add the first pair
          const halfAdd = halfAdder(a[i],b[i]);
          sum = halfAdd[0]+sum;
          carry = halfAdd[1];
        }else{
          //full add the rest
          const fullAdd = fullAdder(a[i],b[i],carry);
          sum = fullAdd[0]+sum;
          carry = fullAdd[1];
        }
      }
      return carry + sum;
    }
  }

  const addBinary = (arr) => {

    let sum = '';
    let carry = '';

    for(var i = a.length-1;i>=0; i--){
      if(i == a.length-1){
        //half add the first pair
        const halfAdd = halfAdder(a[i],b[i]);
        sum = halfAdd[0]+sum;
        carry = halfAdd[1];
      }else{
        //full add the rest
        const fullAdd = fullAdder(a[i],b[i],carry);
        sum = fullAdd[0]+sum;
        carry = fullAdd[1];
      }
    }
    return carry + sum;
  }


  const links = [
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/selection-sort/"
    },
    {
      name: "Video (2:42)",
      url: "https://www.youtube.com/watch?v=g-PGLbMth_g"
    }
  ]

  return (
      <>
        aoeiaoei
        <CalculatorPage
            codeNavigationGuide={{
              code: binaryAddition,
              steps: [{description:"some descirptino",lineNumber:"5",dataStructure:[234,54]}]
            }}
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n" +
                "\t1) The subarray which is already sorted. \n" +
                "\te2) Remaining subarray which is unsorted.\n" +
                "In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "}
            links={links}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
      </>


  );
};

export default SelectionSort;