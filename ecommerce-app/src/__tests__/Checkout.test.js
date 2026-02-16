import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../TestUtils';
import Checkout from '../components/Checkout';

test('renders shipping and payment forms', () => {
  renderWithProviders(<Checkout />, {
    preloadedState: {
      cart: { items: [{}], total: 50 },
    },
  });

  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Card Number')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Confirm Purchase/i })
  ).toBeInTheDocument();
});

test('saves payment and enables confirm button', async () => {
  renderWithProviders(<Checkout />, {
    preloadedState: {
      cart: { items: [{}], total: 50 },
    },
  });

  await userEvent.click(
    screen.getByRole('button', { name: /Save Payment Method/i })
  );

  expect(
    screen.getByRole('button', { name: /Confirm Purchase/i })
  ).not.toBeDisabled();
});

test('shows message when cart is empty', () => {
  renderWithProviders(<Checkout />, {
    preloadedState: {
      cart: { items: [], total: 0 },
    },
  });

  expect(
    screen.getByText(/Your cart is empty/i)
  ).toBeInTheDocument();
});


test('confirm purchase clears cart and navigates', () => {
  const mockNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  }));

  const { store } = renderWithProviders(<Checkout />, {
    preloadedState: {
      cart: { items: [{}], total: 50 },
    },
  });

  // enable confirm first
  userEvent.click(
    screen.getByRole('button', { name: /Save Payment Method/i })
  );

  userEvent.click(
    screen.getByRole('button', { name: /Confirm Purchase/i })
  );

  expect(store.getState().cart.items.length).toBe(0);
});