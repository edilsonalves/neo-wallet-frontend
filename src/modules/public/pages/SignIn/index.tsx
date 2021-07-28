import React from 'react';
import { Form } from '@unform/web';

import MaskedInput from '../../../../shared/components/MaskedInput';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';

import logoImage from '../../assets/images/logo.svg';

import * as styled from './styles';

interface FormData {
  cpf: string;
  password: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = (formData: FormData): void => {
    console.log(formData);
  };

  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <Form onSubmit={handleSubmit}>
          <MaskedInput name="cpf" mask="999.999.999-99" placeholder="CPF" />
          <Input name="password" type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
        </Form>

        <span>Não tem uma cadastro?</span>
        <a href="signup">Criar cadastro</a>
      </styled.Content>
    </styled.Container>
  );
};

export default SignIn;
