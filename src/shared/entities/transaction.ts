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
  createdAt: Date;
  updatedAt: Date;
}

enum TransactionTypeEnum {
  DEPOSIT = 'deposit',
  RESCUE = 'rescue',
  PAYMENT = 'payment',
  OUTGOING_TRANSFER = 'outgoingTransfer',
  INCOMING_TRANSFER = 'incomingTransfer',
}

enum TransactionStatusEnum {
  SUCCESS = 'success',
  FAILURE = 'failure',
  SCHEDULED = 'scheduled',
}

export default Transaction;
