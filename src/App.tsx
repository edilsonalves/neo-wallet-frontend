import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';

import AppProvider from './shared/hooks';

import SignIn from './modules/public/pages/SignIn';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
