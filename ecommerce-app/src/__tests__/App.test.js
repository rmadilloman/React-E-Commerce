import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/slices/authSlice';
import cartReducer from '../redux/slices/cartSlice';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import App from '../App';

function renderWithAuth(isAuthenticated) {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
    },
    preloadedState: {
      auth: {
        isAuthenticated,
        user: isAuthenticated ? { username: 'user' } : null,
        error: null,
      },
      cart: {
        items: [],
        total: 0,
      },
    },
  });

  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Provider>
  );
}

describe('App routing', () => {
  test('redirects to login if not authenticated', () => {
    renderWithAuth(false);
    expect(
      screen.getByRole('button', { name: /Login/i })
    ).toBeInTheDocument();
  });

  test('shows home if authenticated', () => {
    renderWithAuth(true);
    expect(
      screen.getByText(/Welcome to Target Online/i)
    ).toBeInTheDocument();
  });
});