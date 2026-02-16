import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../TestUtils';
import Register from '../components/Register';

test('renders form fields and button', () => {
  renderWithProviders(<Register />);

  expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /Register/i })
  ).toBeInTheDocument();
});

test('allows typing in fields and submits', () => {
  renderWithProviders(<Register />);

  fireEvent.change(screen.getByPlaceholderText('Username'), {
    target: { value: 'newuser' },
  });

  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });

  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'pass123' },
  });

  fireEvent.click(
    screen.getByRole('button', { name: /Register/i })
  );

  expect(
    screen.getByText(/Account created/i)
  ).toBeInTheDocument();
});