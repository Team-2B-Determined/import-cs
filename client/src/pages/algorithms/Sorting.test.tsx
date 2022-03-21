import React from 'react';
import { render, screen } from '@testing-library/react';
import Sorting from "./Sorting";

test('renders learn react link', () => {
    render(<Sorting />);
    const linkElement = screen.getByText(/Finished! The array is now sorted!/i);
    expect(linkElement).toBeInTheDocument();
});
