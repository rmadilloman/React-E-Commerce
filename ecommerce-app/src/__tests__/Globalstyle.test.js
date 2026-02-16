import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';

test('renders GlobalStyle without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>Test</div>
      </>
    </ThemeProvider>
  );
});
