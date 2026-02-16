import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import PostCheckout from '../components/PostCheckout';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('PostCheckout', () => {
  test('renders success message and button', () => {
    renderWithProviders(<PostCheckout />);

    expect(
      screen.getByText('Purchase Successful!')
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Continue Shopping/i })
    ).toBeInTheDocument();
  });

  test('button navigates to home', () => {
    renderWithProviders(<PostCheckout />);

    fireEvent.click(
      screen.getByRole('button', { name: /Continue Shopping/i })
    );

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
