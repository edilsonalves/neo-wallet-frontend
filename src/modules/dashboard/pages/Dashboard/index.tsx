import React, { useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import currency from 'currency.js';
import { IoPersonCircleOutline } from 'react-icons/io5';

import { useAuth } from '../../../../shared/hooks/auth';
import { useMain } from '../../../../shared/hooks/main';
import {
  TransactionTypeEnum,
  transactionType,
} from '../../../../shared/entities/transaction';
import { formatDate } from '../../../../shared/utils';

import logoImage from '../../assets/images/logo.svg';
import Card from '../../components/Card';

import * as styled from './styles';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
  const history = useHistory();
  const { user, signOut } = useAuth();
  const { balance, income, transactions, syncTransactions } = useMain();

  useEffect(() => {
    syncTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transactionList = useMemo(
    () =>
      transactions?.map((transaction) => ({
        id: transaction.id,
        type: transactionType[transaction.type],
        data: formatDate(transaction.createdAt),
        value: currency(transaction.value, { precision: 2 }).toString(),
      })),
    [transactions]
  );

  const handleSignOut = useCallback(() => {
    signOut();
    history.push('/');
  }, [signOut, history]);

  return (
    <styled.Container>
      <styled.SideBar>
        <styled.LogoBox>
          <img src={logoImage} alt="Logo" />
        </styled.LogoBox>
      </styled.SideBar>

      <styled.Content>
        <styled.TopBar>
          <styled.NameBox>
            {`${user.firstName} ${user.lastName}`}
            <button onClick={handleSignOut}>Sair</button>
          </styled.NameBox>

          <styled.Avatar>
            <IoPersonCircleOutline />
          </styled.Avatar>
        </styled.TopBar>

        <styled.CardArea>
          <div>
            <styled.CardRow>
              <Card title="Saldo" value={balance.toString()} />
              <Card title="Rendimento" value={income.toString()} />
            </styled.CardRow>

            <styled.CardRow>
              <Card
                title="Depósito"
                textButton="novo depósito"
                action={TransactionTypeEnum.DEPOSIT}
              />
              <Card
                title="Resgate"
                textButton="novo resgate"
                action={TransactionTypeEnum.RESCUE}
              />
            </styled.CardRow>

            <styled.CardRow>
              <Card
                title="Pagamento"
                textButton="novo pagamento"
                action={TransactionTypeEnum.PAYMENT}
              />
              <Card
                title="Transferência"
                textButton="nova transferência"
                disabled
              />
            </styled.CardRow>
          </div>

          <styled.TableBox>
            <h1>Transações</h1>

            <styled.Table>
              {transactionList?.map((item) => (
                <styled.Item key={item.id}>
                  <div>
                    <h2>{item.type}</h2>
                    <h3>Data: {item.data}</h3>
                  </div>

                  <strong>R$ {item.value}</strong>
                </styled.Item>
              ))}
            </styled.Table>
          </styled.TableBox>
        </styled.CardArea>
      </styled.Content>
    </styled.Container>
  );
};

export default Dashboard;
