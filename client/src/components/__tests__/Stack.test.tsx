import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Stack from "../datastructures/singleelement/Stack";

test('check stack creation', async () => {
    const user = userEvent.setup()
    // value prop is a placeholder and not required in build, but is used to accommodate other actions
    render(<Stack initialData={[0, 14, 1, -15]} action={"build"} value={-1}/>);
    const linkElement = screen.getByTestId("calculator-page-root");
    expect(linkElement).toHaveTextContent("empty stack")
    expect(linkElement).not.toHaveTextContent("arr=[0, 14, 1, -15]")
    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
});

test('check stack push', async () => {
    const user = userEvent.setup()
    render(<Stack initialData={[0, 14, 1, -15]} action={"create"} value={20}/>);
    const linkElement = screen.getByTestId("calculator-page-root");
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
    expect(linkElement).not.toHaveTextContent("arr=[0, 14, 1, -15, 20]")
    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15, 20]")
});

test('check stack pop', async () => {
    const user = userEvent.setup()
    // value prop is a placeholder and not required in build, but is used to accommodate other actions
    render(<Stack initialData={[0, 14, 1, -15]} action={"read"} value={-1}/>);
    const linkElement = screen.getByTestId("calculator-page-root");

    expect(linkElement).toHaveTextContent("arr=[0, 14, 1, -15]")
    expect(linkElement).not.toHaveTextContent("arr=[0, 14, 1]")

    await user.click(screen.getByTestId("setStepToEnd"))
    expect(linkElement).toHaveTextContent("arr=[0, 14, 1]")
});