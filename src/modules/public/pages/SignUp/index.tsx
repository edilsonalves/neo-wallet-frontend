import React from 'react';

import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';

import logoImage from '../../assets/images/logo.svg';

import * as styled from './styles';

const SignUp: React.FC = () => {
  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <form>
          <styled.InputGroup>
            <Input name="firstName" placeholder="Nome" />
            <Input name="lastName" placeholder="Sobrenome" />
          </styled.InputGroup>

          <Input name="email" type="email" placeholder="E-mail" />

          <styled.InputGroup>
            <Input name="phone" placeholder="Telefone" />
            <Input name="cpf" placeholder="CPF" />
          </styled.InputGroup>

          <Input name="password" type="password" placeholder="Senha" />
          <Input
            name="passwordConfirmation"
            type="password"
            placeholder="Repita a senha"
          />

          <Button type="submit">Cadastrar</Button>
        </form>

        <span>Já tem cadastro?</span>
        <a href="signin">Entrar</a>
      </styled.Content>
    </styled.Container>
  );
};

export default SignUp;
