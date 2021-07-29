import User from './user';
import Transaction from './transaction';

interface Account {
  id: string;
  fakeKey: string;
  balance: number;
  income: number;
  user: User;
  transactions: Transaction[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

export default Account;
