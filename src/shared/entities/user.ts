import Account from './account';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  account: Account;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export default User;
