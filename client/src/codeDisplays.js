export default {
    selectionSort:
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
    }`


};
