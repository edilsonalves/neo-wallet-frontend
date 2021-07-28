import Account from './account';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  account: Account;
  createdAt: Date;
  updatedAt: Date;
}

export default User;
