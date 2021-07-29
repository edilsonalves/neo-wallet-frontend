import styled from 'styled-components';

export const Container = styled.div`
  width: 450px;
  padding: 50px;

  h1 {
    color: ${(props) => props.theme.colors.grey5};
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    button {
      margin-top: 30px;
    }

    > div + div {
      margin-top: 20px;
    }
  }
`;
