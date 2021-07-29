import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './shared/routes';
import AppProvider from './shared/hooks';

import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>

      <GlobalStyle />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
