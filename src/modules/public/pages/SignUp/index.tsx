import React from 'react';
import { Form } from '@unform/web';

import Input from '../../../../shared/components/Input';
import MaskedInput from '../../../../shared/components/MaskedInput';
import Button from '../../../../shared/components/Button';

import logoImage from '../../assets/images/logo.svg';

import * as styled from './styles';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
  passwordConfirmation: string;
}

const SignUp: React.FC = () => {
  const handleSubmit = (formData: FormData): void => {
    console.log(formData);
  };

  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <Form onSubmit={handleSubmit}>
          <styled.InputGroup>
            <Input name="firstName" placeholder="Nome" />
            <Input name="lastName" placeholder="Sobrenome" />
          </styled.InputGroup>

          <Input name="email" placeholder="E-mail" />

          <styled.InputGroup>
            <MaskedInput
              name="phone"
              mask="(99) 99999-9999"
              placeholder="Telefone"
            />
            <MaskedInput name="cpf" mask="999.999.999-99" placeholder="CPF" />
          </styled.InputGroup>

          <Input name="password" type="password" placeholder="Senha" />
          <Input
            name="passwordConfirmation"
            type="password"
            placeholder="Repita a senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <span>Já tem cadastro?</span>
        <a href="signin">Entrar</a>
      </styled.Content>
    </styled.Container>
  );
};

export default SignUp;
