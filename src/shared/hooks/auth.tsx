import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api';
import User from '../entities/user';
import { getUser } from '../services/user';

interface AuthState {
  token: string;
  user: User;
}

interface Credentials {
  cpf: string;
  password: string;
}

interface AuthContextData {
  user: User;
  syncUser(): void;
  signIn(credentials: Credentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@NeoWallet:token');
    const user = localStorage.getItem('@NeoWallet:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const syncUser = useCallback(async () => {
    getUser().then((result) => {
      setData({ token: data.token, user: result });
    });
  }, [data]);

  const signIn = useCallback(async ({ cpf, password }: Credentials) => {
    const { data } = await api.post('sessions', {
      cpf,
      password,
    });

    const { token, user } = data;

    localStorage.setItem('@NeoWallet:token', token);
    localStorage.setItem('@NeoWallet:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@NeoWallet:token');
    localStorage.removeItem('@NeoWallet:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, syncUser, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
