import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../TestUtils';
import Cart from '../components/Cart';

describe('Cart', () => {
  test('shows empty message when cart is empty', () => {
    renderWithProviders(<Cart />, {
      preloadedState: {
        cart: { items: [], total: 0 },
      },
    });

    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Return/i })).toBeInTheDocument();
  });

  test('renders cart items and total', () => {
    renderWithProviders(<Cart />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              name: 'Product A',
              price: 10,
              quantity: 2,
              image: 'test.jpg',
            },
          ],
          total: 20,
        },
      },
    });

    expect(screen.getByText('Product A')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('Quantity: 2')).toBeInTheDocument();
    expect(screen.getByText('Total: $20.00')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Go to Checkout/i })).toBeInTheDocument();
  });

  test('removes item when remove button is clicked', async () => {
    const { store } = renderWithProviders(<Cart />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              name: 'Product A',
              price: 10,
              quantity: 1,
              image: 'test.jpg',
            },
          ],
          total: 10,
        },
      },
    });

    await userEvent.click(screen.getByRole('button', { name: /Remove/i }));

    expect(store.getState().cart.items.length).toBe(0);
  });
});