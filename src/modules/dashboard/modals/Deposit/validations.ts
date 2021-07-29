import * as Yup from 'yup';

const validationScheme = Yup.object().shape({
  value: Yup.string()
    .required('Campo obrigatório')
    .test('value', 'Digite um valor válido', (value) => value !== '0.00'),
});

export default validationScheme;
