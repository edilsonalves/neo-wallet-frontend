import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';

import SignIn from './modules/public/pages/SignIn';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <SignIn />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
