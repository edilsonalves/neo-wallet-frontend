import styled from 'styled-components';

export const MaskedInput = styled.div`
  width: 100%;

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
  }
`;
