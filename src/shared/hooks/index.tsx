import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from 'react-brave-modal';

import { AuthProvider } from './auth';
import { MainProvider } from './main';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <MainProvider>
      <ModalProvider>{children}</ModalProvider>
    </MainProvider>
    <Toaster />
  </AuthProvider>
);

export default AppProvider;
