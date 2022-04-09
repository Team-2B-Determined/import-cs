import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import QuickSort from "../algorithms/sorting/QuickSort";

test('check quick sort first and last state array state', async () => {
    const user = userEvent.setup()
    render(<QuickSort numbers={[0, 14, 1, -15]}/>);
    const linkElement = screen.getByTestId("calculator-page-root");
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("arr=[-15, 0, 1, 14]")
});
