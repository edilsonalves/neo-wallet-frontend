import React, { useMemo, useCallback } from 'react';
import { useModal } from 'react-brave-modal';
import currency from 'currency.js';
import { MdAttachMoney } from 'react-icons/md';

import Deposit from '../../modals/Deposit';
import Rescue from '../../modals/Rescue';
import Payment from '../../modals/Payment';
import { TransactionTypeEnum } from '../../../../shared/entities/transaction';

import * as styled from './styles';

interface CardProps {
  title: string;
  textButton?: string;
  value?: string;
  disabled?: boolean;
  action?: TransactionTypeEnum;
}

const Card: React.FC<CardProps> = ({
  title,
  textButton,
  value,
  disabled,
  action,
}) => {
  const { showModal } = useModal();

  const currencyValue = useMemo(
    () => currency(value ?? 0, { precision: 2 }).toString(),
    [value]
  );

  const actionModal = useMemo(() => {
    switch (action) {
      case TransactionTypeEnum.DEPOSIT:
        return <Deposit />;
      case TransactionTypeEnum.RESCUE:
        return <Rescue />;
      case TransactionTypeEnum.PAYMENT:
        return <Payment />;
      default:
        break;
    }
  }, [action]);

  const handleAction = useCallback(() => {
    if (action && actionModal) {
      showModal({
        type: 'custom',
        data: actionModal,
      });
    }
  }, [action, actionModal, showModal]);

  return (
    <styled.Container disabled={disabled ?? false}>
      <styled.Icon>
        <MdAttachMoney />
      </styled.Icon>
      <div>
        <styled.Title>{title}</styled.Title>
        {textButton && (
          <styled.Button onClick={handleAction}>{textButton}</styled.Button>
        )}
        {value && <styled.Value>R$ {currencyValue}</styled.Value>}
      </div>
      <styled.Content></styled.Content>
    </styled.Container>
  );
};

export default Card;
