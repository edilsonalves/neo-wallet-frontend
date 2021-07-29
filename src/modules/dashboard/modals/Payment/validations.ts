import * as Yup from 'yup';
import { isValidBarCode } from '../../../../shared/utils';

const validationScheme = Yup.object().shape({
  barCode: Yup.string()
    .required('Campo obrigatório')
    .test('barCode', 'Digite um códido de barras válido', (value) =>
      isValidBarCode(value ?? '')
    ),
  description: Yup.string(),
  value: Yup.string()
    .required('Campo obrigatório')
    .test('value', 'Digite um valor válido', (value) => value !== '0.00'),
});

export default validationScheme;
