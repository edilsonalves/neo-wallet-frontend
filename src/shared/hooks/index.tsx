import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from 'react-brave-modal';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ModalProvider>{children}</ModalProvider>
    <Toaster />
  </AuthProvider>
);

export default AppProvider;
