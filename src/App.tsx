import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './shared/styles/theme';
import GlobalStyle from './shared/styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
