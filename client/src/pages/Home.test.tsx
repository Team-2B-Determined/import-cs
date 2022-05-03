import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./Home";

test('renders home page with algorithms main page link', () => {
    render(<Home />);
    expect(screen.getByRole('link',{ name: /View Algorithms Main Page/i })).toHaveAttribute('href', '/algorithms');
});

test('renders home page with data structures main page link', () => {
    render(<Home />);
    expect(screen.getByRole('link',{ name: /View Data Structures Main Page/i })).toHaveAttribute('href', '/datastructures');
});
test('renders home page with calculations main page link', () => {
    render(<Home />);
    expect(screen.getByRole('link',{ name: /Calculations Page/i })).toHaveAttribute('href', '/calculations');
});
test('renders home page with conversions main page link', () => {
    render(<Home />);
    expect(screen.getByRole('link',{ name: /Conversions Page/i })).toHaveAttribute('href', '/conversions');
});

