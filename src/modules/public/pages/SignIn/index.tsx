import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import MaskedInput from '../../../../shared/components/MaskedInput';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';

import { getValidationErrors } from '../../../../shared/utils';
import logoImage from '../../assets/images/logo.svg';

import validationScheme from './validations';
import * as styled from './styles';

interface FormData {
  cpf: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (formData: FormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        await validationScheme.validate(formData, { abortEarly: false });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        console.log(errors);
      }
    },
    []
  );

  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
