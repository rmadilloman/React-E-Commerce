import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

import theme from './theme';
import authReducer from './redux/slices/authSlice';
import cartReducer from './redux/slices/cartSlice';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        auth: authReducer,
        cart: cartReducer,
      },
      preloadedState,
    }),
    route = '/',
  } = {}
) {
  return {
    store,
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={[route]}>
            {ui}
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    ),
  };
}
