import React from 'react';
import { render, screen } from '@testing-library/react';
import MergeSort from "../algorithms/sorting/MergeSort";
import userEvent from "@testing-library/user-event";

test('check merge sort first and last state array state', async () => {
    const user = userEvent.setup()
    render(<MergeSort numbers={[0, 14, 1, -15]}/>);
    const linkElement = screen.getByTestId("calculator-page-root");
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
    expect(linkElement).toHaveTextContent("left=[0, 14], right=[1, -15]")

    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("sorted=[-15, 0, 1, 14]")
});
