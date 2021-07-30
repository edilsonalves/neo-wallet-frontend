import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-hot-toast';

import { ValidationError } from 'yup';
import validationScheme from './validations';
import { useAuth } from '../../../../shared/hooks/auth';
import { useMain } from '../../../../shared/hooks/main';
import { getValidationErrors } from '../../../../shared/utils';
import { createTransfer } from '../../../../shared/services/transaction';

import Button from '../../../../shared/components/Button';
import Input from '../../../../shared/components/Input';
import InputCurrency from '../../../../shared/components/InputCurrency';

import * as styled from './styles';

interface FormData {
  fakeKey: string;
  description: string;
  value: string;
}

const Transfer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user } = useAuth();
  const { handleTransaction } = useMain();

  const handleSubmit = useCallback(
    async (formData: FormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        await validationScheme.validate(formData, { abortEarly: false });
        const transaction = await createTransfer({
          accountId: user.account.id,
          fakeKey: formData.fakeKey,
          description: formData.description,
          value: formData.value,
        });

        if (transaction) {
          handleTransaction(transaction);
          toast.success('Transferência realizada com sucesso!');
        }
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
    [user, handleTransaction]
  );

  return (
    <styled.Container>
      <h1>Nova transferência</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="fakeKey" placeholder="Chave da conta" />
        <Input name="description" placeholder="Descrição" />
        <InputCurrency name="value" placeholder="Valor" />
        <Button type="submit">Transferir</Button>
      </Form>
    </styled.Container>
  );
};

export default Transfer;
