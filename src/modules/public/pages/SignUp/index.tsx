import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../../../shared/components/Input';
import MaskedInput from '../../../../shared/components/MaskedInput';
import Button from '../../../../shared/components/Button';
import { getValidationErrors } from '../../../../shared/utils';

import logoImage from '../../assets/images/logo.svg';

import validationScheme from './validations';
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
