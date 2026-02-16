import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Home from '../components/Home';

test('renders banner and product grid', () => {
  renderWithProviders(<Home />);

  expect(
    screen.getByText('Welcome to Target Online')
  ).toBeInTheDocument();

  expect(
    screen.getByText('Wireless Headphones')
  ).toBeInTheDocument();

  expect(
    screen.getAllByRole('button', { name: /Add to Cart/i }).length
  ).toBe(10);
});
