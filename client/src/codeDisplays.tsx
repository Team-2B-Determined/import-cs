import {SortingAlgorithms} from "./pages/algorithms/Sorting";

export default {
    SelectionSort:
        `function selectionSort = arr => {
        for (let i = 0; i < (arr.length - 1); i++) {
            let minInd = i
            for (let j = (i + 1); j < arr.length; j++) {
                if (arr[j] < arr[minInd]) {
                    minInd = j
                }
            }

            if (minInd !== i) {
                const temp = arr[minInd];
                arr[minInd] = arr[i];
                arr[i] = temp;
            } else {
                console.log("No need to swap!")
            }
        }
        return arr
    }`,
    MergeSort:
        `const mergeSort = arr => {
        if (arr.length <= 1) {
            return arr
        }
        const split = Math.floor(arr.length / 2)
        let left = arr.slice(0, split)
        let right = arr.slice(split)
    
        left = mergeSort(left)
        right = mergeSort(right)
    
        const sorted = []
        while (left.length > 0 || right.length > 0) {
            if (right.length === 0 || left[0] <= right[0]) {
                sorted.push(left.shift())
            } else {
                sorted.push(right.shift())
            }
        }
        
        return sorted
    }`
} as Record<SortingAlgorithms, string>
