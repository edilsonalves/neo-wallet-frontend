import api from '../api';
import Transaction from '../../entities/transaction';

interface CreateDeposit {
  accountId: string;
  value: string;
}

interface CreateRescue {
  accountId: string;
  value: string;
}

interface CreatePayment {
  accountId: string;
  barCode: string;
  description?: string;
  value: string;
}

const createDeposit = async (data: CreateDeposit): Promise<Transaction> => {
  const response = await api.post<Transaction>('transactions/deposit', data);
  const transaction = response.data;

  return transaction;
};

const createRescue = async (data: CreateRescue): Promise<Transaction> => {
  const response = await api.post<Transaction>('transactions/rescue', data);
  const transaction = response.data;

  return transaction;
};

const createPayment = async (data: CreatePayment): Promise<Transaction> => {
  const response = await api.post<Transaction>('transactions/payment', data);
  const transaction = response.data;

  return transaction;
};

const getTransactions = async (): Promise<Transaction[]> => {
  const response = await api.get<Transaction[]>('transactions');
  const transactions = response.data;

  return transactions;
};

export { createDeposit, createRescue, createPayment, getTransactions };
