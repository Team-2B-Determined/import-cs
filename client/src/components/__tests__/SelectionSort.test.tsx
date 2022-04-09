import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectionSort from "../algorithms/sorting/SelectionSort";
import userEvent from "@testing-library/user-event";

test('check selection sort first and last state array state', async () => {
    const user = userEvent.setup()
    render(<SelectionSort numbers={[0, 14, 1, -15]}/>);
    const linkElement = screen.getByTestId("calculator-page-root");
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("arr=[-15, 0, 1, 14]")
});
