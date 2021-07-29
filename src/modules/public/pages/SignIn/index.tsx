import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { ValidationError } from 'yup';
import validationScheme from './validations';
import { getValidationErrors } from '../../../../shared/utils';

import { useAuth } from '../../../../shared/hooks/auth';

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
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (formData: FormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        await validationScheme.validate(formData, { abortEarly: false });
        await signIn({
          cpf: formData.cpf,
          password: formData.password,
        });

        history.push('/dashboard');
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        } else if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Entre em contato com o administrador');
        }
      }
    },
    [signIn, history]
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
        <Link to="/signup">Criar cadastro</Link>
      </styled.Content>
    </styled.Container>
  );
};

export default SignIn;
