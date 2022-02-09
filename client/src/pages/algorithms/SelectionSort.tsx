import CalculatorPage, {ExternalLink} from "../../components/CalculatorPage";
import {Step} from "../../components/CodeNavigator";

const SelectionSort = () => {

    const __hiddenSteps: Step[] = []

    const displayArray = (arr: any, highlightAtIndexes?: number[]) => {
        return [...arr].map((num, arrIndex) => highlightAtIndexes?.includes(arrIndex) ? <>
            <strong>{num}</strong>, </> : num + ", ")
    }

    const selectionSort = (arr: number[]): any[] => {
        for (let i = 0; i < (arr.length - 1); i++) {
            __hiddenSteps.push({
                lineNumber: "3",
                description: <>minInd is initialized to {i} as the element at that index, {arr[i]}, is the
                    smallest value we know as of this iteration <br/>
                    arr=[{displayArray(arr, [i])}]
                </>
            })
            let minInd = i

            for (let j = (i + 1); j < arr.length; j++) {

                if (arr[j] < arr[minInd]) {
                    __hiddenSteps.push({
                        lineNumber: "6-8",
                        description: <>The current element, {arr[j]}, is less than {arr[minInd]}, so we set minInd
                            to {j} now <br/>
                            arr=[{displayArray(arr, [j])}]
                        </>
                    })
                    minInd = j
                }
            }

            if (minInd !== i) {
                __hiddenSteps.push({
                    lineNumber: "12-14",
                    description: <>Swap the elements between indexes {i} and {minInd} since a smaller element was found<br/>
                        arr=[{displayArray(arr, [i, minInd])}]
                    </>
                })
                const temp = arr[minInd];
                arr[minInd] = arr[i];
                arr[i] = temp;
            } else {
                __hiddenSteps.push({
                    lineNumber: "15-17",
                    description: <>A smaller element than {arr[i]} was not found<br/>
                        arr=[{displayArray(arr, [i])}]
                    </>
                })
                console.log("No need to swap!")
            }
        }
        __hiddenSteps.push({
            lineNumber: "18",
            description: <>Finished! The array is now sorted!<br/>
                arr=[{displayArray(arr)}]
            </>
        })
        return arr
    }


    const links: ExternalLink[] = [
        {
            name: "GeeksForGeeks",
            url: "https://www.geeksforgeeks.org/selection-sort/"
        },
        {
            name: "Video (2:42)",
            url: "https://www.youtube.com/watch?v=g-PGLbMth_g"
        }
    ]

    selectionSort([81, -62, -92, 37, 85])

    const historyRows = JSON.parse(localStorage.getItem("historyRows") || "[]");
    historyRows.push({calculationFeature: "C123123omputations", input: "(111)2 + (10101011)2", link: "/computations"});

    console.log(historyRows)
    localStorage.setItem("historyRows", JSON.stringify(historyRows));

    return (
        <>
            <CalculatorPage
                codeNavigationGuide={{
                    code: selectionSort,
                    steps: __hiddenSteps
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