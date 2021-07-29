import api from '../api';
import User from '../../entities/user';

interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  passwordConfirmation: string;
}

const createUser = async (data: CreateUser): Promise<void> => {
  await api.post('users', data);
};

const getUser = async (): Promise<User> => {
  const response = await api.get<User>('users');
  const user = response.data;

  return user;
};

export { createUser, getUser };
