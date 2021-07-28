import React from 'react';

import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';

import logoImage from '../../assets/images/logo.svg';

import * as styled from './styles';

const SignIn: React.FC = () => {
  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <form>
          <Input name="cpf" placeholder="CPF" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </form>

        <span>Não tem uma cadastro?</span>
        <a href="signup">Criar cadastro</a>
      </styled.Content>
    </styled.Container>
  );
};

export default SignIn;
