import * as Yup from 'yup';

const validationScheme = Yup.object().shape({
  fakeKey: Yup.string()
    .required('Campo obrigatório')
    .test('fakeKey', 'Digite uma chave de conta válida', (value) =>
      value?.length === 13
    ),
  description: Yup.string(),
  value: Yup.string()
    .required('Campo obrigatório')
    .test('value', 'Digite um valor válido', (value) => value !== '0.00'),
});

export default validationScheme;
