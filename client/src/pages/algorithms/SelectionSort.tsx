import AlgorithmFrame, {Parameter, ExternalLinks} from "../../components/AlgorithmFrame";

const SelectionSort = () => {
    const parameters:Parameter[] = [
        {
            name: "array",
            type: "string",
            default: "['mango', 'apple', 'papaya', 'orange', 'lychee', 'cherry', 'banana', 'bread', 'pineapple', 'pear', 'strawberry', 'kiwi']"
        },
        {
            name: "size",
            type: "string",
            default: "12"
        }
    ]

    const links:ExternalLinks[] = [
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
            title={"Selection Sort"}
            description={"The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.\n" +
            "\t1) The subarray which is already sorted. \n" +
            "\te2) Remaining subarray which is unsorted.\n" +
            "In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. "}
            parameters={parameters}
            links={links}
            image={"https://i.imgur.com/EerzUpo.png"}
        />
    );
};

export default SelectionSort;