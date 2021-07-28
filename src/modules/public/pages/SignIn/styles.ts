import styled from 'styled-components';

import bannerImage from '../../assets/images/banner.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
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
    margin: 80px 0;
    text-align: center;
    width: 340px;

    input {
      border: 2px solid ${(props) => props.theme.colors.grey2};
      border-radius: 5px;
      color: ${(props) => props.theme.colors.grey5};
      height: 60px;
      width: 100%;
      padding: 10px 16px;
      transition: border-color 0.3s;

      &:focus {
        border-color: ${(props) => props.theme.colors.primary};
      }

      &::placeholder {
        color: ${(props) => props.theme.colors.grey4};
      }

      & + input {
        margin-top: 20px;
      }
    }

    button {
      background-color: ${(props) => props.theme.colors.primary};
      border: none;
      border-radius: 5px;
      color: ${(props) => props.theme.colors.light};
      font-weight: 500;
      height: 60px;
      width: 100%;
      margin-top: 30px;
      padding: 0 16px;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.9;
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
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${bannerImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
