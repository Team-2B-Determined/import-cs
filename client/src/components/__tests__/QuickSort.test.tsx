import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import QuickSort, {PIVOT_STRATEGIES} from "../algorithms/sorting/QuickSort";


const user = userEvent.setup()

for (let pivotStrategy of PIVOT_STRATEGIES) {
    test(`check selecting ${pivotStrategy} from dropdown`, async () => {
        render(<QuickSort numbers={[0, 14, 1, -15]}/>);

        await user.selectOptions(screen.getByLabelText('Pivot Strategy'), `${pivotStrategy}`);
        expect((screen.getByTestId(`option-${pivotStrategy}`) as HTMLOptionElement).selected).toBeTruthy();

        PIVOT_STRATEGIES
            .filter(strat => strat !== pivotStrategy)
            .forEach((otherPivotStrategy) => expect((screen.queryByTestId(`option-${otherPivotStrategy}`) as HTMLOptionElement).selected).toBeFalsy())
    });
    test(`check quick sort with ${pivotStrategy}`, async () => {
        const user = userEvent.setup()
        render(<QuickSort numbers={[0, 14, 1, -15]}/>);
        const linkElement = screen.getByTestId("calculator-page-root");
        expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
        await user.click(screen.getByTestId("setStepToEnd"))
        expect(linkElement).toHaveTextContent("arr=[-15, 0, 1, 14]")
    })
}



