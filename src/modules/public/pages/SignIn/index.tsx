import React from 'react';

import logoImage from '../../assets/images/logo.svg';

import * as styled from './styles';

const SignIn: React.FC = () => {
  return (
    <styled.Container>
      <styled.Background />

      <styled.Content>
        <img src={logoImage} alt="Logo" />

        <form>
          <input placeholder="CPF" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>

          <span>Não tem uma cadastro?</span>
          <a href="signup">Criar cadastro</a>
        </form>
      </styled.Content>
    </styled.Container>
  );
};

export default SignIn;
