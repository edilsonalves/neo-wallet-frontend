import styled from 'styled-components';

import bannerImage from '../../assets/images/banner.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${bannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  img {
    width: 120px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0 20px;
    text-align: center;
    width: 400px;

    > input + input {
      margin-top: 20px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.grey5};
    font-size: 14px;
    margin-top: 30px;
  }

  a {
    color: ${(props) => props.theme.colors.grey5};
    font-size: 14px;
    margin-top: 8px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  input + & {
    margin-top: 20px;
  }
`;
