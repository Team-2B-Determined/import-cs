import AlgorithmFrame, {ExternalLink} from "../../components/AlgorithmFrame";

const SelectionSort = () => {
    const selectionSort = (arr: number[]): number[] => {
        const len: number = arr.length;
        let minInd: number = -1;
        for (let i = 0; i < (len - 1); i++) {
            minInd = i

            for (let j = (i + 1); j < len; j++) {
                if (arr[j] < arr[minInd]) {
                    minInd = j
                }
            }

            if (minInd !== i) {
                [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
            }
        }
        return arr;
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
        <AlgorithmFrame
            codeNavigationGuide={{
                code: selectionSort,
                steps: [{description: "adds stuff", lineNumber: "3"}, {description: "adds less", lineNumber: "4-6"}]
            }}
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n" +
                "\t1) The subarray which is already sorted. \n" +
                "\te2) Remaining subarray which is unsorted.\n" +
                "In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "}
            links={links}
            image={"https://i.imgur.com/EerzUpo.png"}
        />


    );
};

export default SelectionSort;