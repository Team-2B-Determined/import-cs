import CalculatorPage, {ExternalLink} from "../../components/CalculatorPage";
import {Step} from "../../components/CodeNavigator";

const SelectionSort = () => {

    const __hiddenSteps: Step[] = []

    const selectionSort = (arr: number[]): any[] => {
        for (let i = 0; i < (arr.length - 1); i++) {
            __hiddenSteps.push({
                dataStructure: [...arr],
                lineNumber: "3",
                description: `The minimum index is initialized to ${i} as its element is the smallest value we know as of this iteration`
            })
            let minInd = i

            for (let j = (i + 1); j < arr.length; j++) {

                if (arr[j] < arr[minInd]) {
                    __hiddenSteps.push({
                        dataStructure: [...arr],
                        lineNumber: "7",
                        description: `The current element ${arr[j]} is smaller than ${arr[minInd]}, so we want minInd to be ${arr[j]} now`
                    })
                    minInd = j
                }
            }

            if (minInd !== i) {
                [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
            }
        }
        __hiddenSteps.push({
            dataStructure: [...arr],
            lineNumber: "16",
            description: `Finished! The array should look like`
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

    return (
        <>
            {selectionSort([81, -62, -92, 37, 85])}
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