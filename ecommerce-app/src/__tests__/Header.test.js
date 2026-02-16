import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Header from '../components/Header';

describe('Header', () => {
  test('renders logo and cart icon', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: { items: [] },
      },
    });

    expect(screen.getByAltText('Target Logo')).toBeInTheDocument();
    expect(screen.getByAltText(/CartIcon/i)).toBeInTheDocument();
  });

  test('shows cart count if items exist', () => {
    renderWithProviders(<Header />, {
      preloadedState: {
        cart: {
          items: [{ quantity: 2 }, { quantity: 1 }],
        },
      },
    });

    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
