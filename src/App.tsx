import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';

import { AuthProvider } from './shared/hooks/auth';

import SignIn from './modules/public/pages/SignIn';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
