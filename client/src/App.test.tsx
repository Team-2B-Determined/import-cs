import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome greeting at home', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to import/i);
  expect(linkElement).toBeInTheDocument();
});
