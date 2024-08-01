import React from 'react';
import { render, screen } from '@testing-library/react';
import Weather from './Weather';

test('renders current weather', () => {
  render(<Weather />);
  const linkElement = screen.getByText(/Current Weather/i);
  expect(linkElement).toBeInTheDocument();
});
