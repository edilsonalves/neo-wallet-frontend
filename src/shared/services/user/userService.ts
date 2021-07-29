import api from '../api';

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

export { createUser };
