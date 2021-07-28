import * as Yup from 'yup';

import { isValidCpf } from '../../../../shared/utils';

const validationScheme = Yup.object().shape({
  cpf: Yup.string()
    .required('Campo obrigatório')
    .test('cpf', 'Digite um CPF válido', (value) => isValidCpf(value)),
  password: Yup.string().required('Campo obrigatório'),
});

export default validationScheme;
