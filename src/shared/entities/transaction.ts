import Account from './account';

interface Transaction {
  id: string;
  type: TransactionTypeEnum;
  status: TransactionStatusEnum;
  fakeKey?: string;
  barCode?: string;
  description?: string;
  value: number;
  account: Account;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export enum TransactionTypeEnum {
  DEPOSIT = 'deposit',
  RESCUE = 'rescue',
  PAYMENT = 'payment',
  OUTGOING_TRANSFER = 'outgoingTransfer',
  INCOMING_TRANSFER = 'incomingTransfer',
}

export const transactionType = {
  deposit: 'Depósito',
  rescue: 'Resgate',
  payment: 'Pagamento',
  outgoingTransfer: 'Transferência de entrada',
  incomingTransfer: 'Transferência de saída',
};

export enum TransactionStatusEnum {
  SUCCESS = 'success',
  FAILURE = 'failure',
  SCHEDULED = 'scheduled',
}

export default Transaction;
