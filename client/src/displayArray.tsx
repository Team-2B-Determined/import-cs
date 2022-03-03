import React from "react";

export default (arr: number[], highlightAtIndexes?: number[]) => {
    return [...arr].map((num, arrIndex) => {
        let displayedNum: JSX.Element | string;
        const isLastElement = arrIndex === arr.length - 1
        if (highlightAtIndexes?.includes(arrIndex)) {
            displayedNum = isLastElement ? <strong>{num}</strong> : <><strong>{num}</strong>, </>
        } else {
            displayedNum = isLastElement ? num.toString() : num.toString() + ", "
        }
        return displayedNum
    })
}