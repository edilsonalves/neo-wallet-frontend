import * as Yup from 'yup';

import { isValidCpf } from '../../../../shared/utils';

const validationScheme = Yup.object().shape({
  firstName: Yup.string().required('Campo obrigatório'),
  lastName: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('Digite um e-mail válido'),
  phone: Yup.string()
    .required('Campo obrigatório')
    .test(
      'phone',
      'Digite um telefone válido',
      (value) => value?.replace(/[^0-9]/g, '').length === 11
    ),
  cpf: Yup.string()
    .required('Campo obrigatório')
    .test('cpf', 'Digite um CPF válido', (value) => isValidCpf(value)),
  password: Yup.string().min(8, 'A senha de conter no mínimo 8 caracteres'),
  passwordConfirmation: Yup.string()
    .required('Campo obrigatório')
    .test('passwords-match', 'As senhas não coincidem', function (value) {
      return this.parent.password === value;
    }),
});

export default validationScheme;
