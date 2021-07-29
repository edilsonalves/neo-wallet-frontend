import React, { createContext, useContext, useState, useCallback } from 'react';

import { useAuth } from './auth';
import Transaction from '../entities/transaction';
import { getTransactions } from '../services/transaction';
import { useEffect } from 'react';

interface MainContextData {
  balance: number;
  income: number;
  transactions: Transaction[];
  syncTransactions(): void;
  handleTransaction(transaction: Transaction): void;
}

const AuthContext = createContext<MainContextData>({} as MainContextData);

const MainProvider: React.FC = ({ children }) => {
  const { user } = useAuth();
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (user) {
      setBalance(user.account.balance);
      setIncome(user.account.income);
    }
  }, [user]);

  const syncTransactions = useCallback(async () => {
    getTransactions().then((result) => {
      setTransactions(result);
    });
  }, []);

  const handleTransaction = useCallback((transaction: Transaction) => {
    setBalance(transaction.account.balance);
    setIncome(transaction.account.income);
    setTransactions((state) =>
      state ? [...state, transaction] : [transaction]
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        balance,
        income,
        transactions,
        syncTransactions,
        handleTransaction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useMain = (): MainContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useMain must be used within a MainProvider');
  }

  return context;
};

export { MainProvider, useMain };
