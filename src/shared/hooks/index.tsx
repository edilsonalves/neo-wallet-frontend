import React from 'react';
import { Toaster } from 'react-hot-toast';

import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    {children}
    <Toaster />
  </AuthProvider>
);

export default AppProvider;
