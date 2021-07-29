import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-hot-toast';

import { ValidationError } from 'yup';
import validationScheme from './validations';
import { useAuth } from '../../../../shared/hooks/auth';
import { getValidationErrors } from '../../../../shared/utils';
import { createPayment } from '../../../../shared/services/transaction';

import Button from '../../../../shared/components/Button';
import Input from '../../../../shared/components/Input';
import InputCurrency from '../../../../shared/components/InputCurrency';

import * as styled from './styles';

interface FormData {
  barCode: string;
  description: string;
  value: string;
}

const Payment: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, syncUser } = useAuth();

  const handleSubmit = useCallback(
    async (formData: FormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        await validationScheme.validate(formData, { abortEarly: false });
        const payment = await createPayment({
          accountId: user.account.id,
          barCode: formData.barCode,
          description: formData.description,
          value: formData.value,
        });

        console.log(payment)

        // const transactions = [...user.account.transactions, payment];
        // const account = { ...user.account, transactions };
        // syncUser({ ...user, account });

        toast.success('Pagamento realizado com sucesso!');
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
    [user]
  );

  return (
    <styled.Container>
      <h1>Novo pagamento</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="barCode" placeholder="Código de barras (UUID)" />
        <Input name="description" placeholder="Descrição" />
        <InputCurrency name="value" placeholder="Valor" />
        <Button type="submit">Pagar</Button>
      </Form>
    </styled.Container>
  );
};

export default Payment;
