import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Login from '../components/Login';

describe('Login', () => {
  test('renders form fields and button', () => {
    renderWithProviders(<Login />, {
      preloadedState: {
        auth: { error: null },
      },
    });

    expect(screen.getByPlaceholderText('Username (user)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password (admin)')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Login/i })
    ).toBeInTheDocument();
  });

  test('allows typing in fields', () => {
    renderWithProviders(<Login />, {
      preloadedState: {
        auth: { error: null },
      },
    });

    const usernameInput = screen.getByPlaceholderText('Username (user)');
    fireEvent.change(usernameInput, {
      target: { value: 'user' },
    });

    expect(usernameInput.value).toBe('user');
  });

  test('shows error on wrong credentials', () => {
    renderWithProviders(<Login />, {
      preloadedState: {
        auth: { error: null },
      },
    });

    fireEvent.change(screen.getByPlaceholderText('Username (user)'), {
      target: { value: 'wrong' },
    });

    fireEvent.change(screen.getByPlaceholderText('Password (admin)'), {
      target: { value: 'wrong' },
    });

    fireEvent.click(
      screen.getByRole('button', { name: /Login/i })
    );

    expect(
      screen.getByText(/Invalid username or password/i)
    ).toBeInTheDocument();
  });
});
