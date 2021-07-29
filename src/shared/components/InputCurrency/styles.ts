import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.light};
  border: 2px solid ${(props) => props.theme.colors.grey2};
  border-radius: 5px;
  height: 60px;
  width: 100%;
  padding: 10px 16px;
  transition: border-color 0.3s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.colors.coral};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${(props) => props.theme.colors.primary};
    `}
`;

export const InputCurrency = styled.div`
  input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.grey5};
    height: 100%;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme.colors.grey4};
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 14px;

  svg {
    color: ${(props) => props.theme.colors.coral};
    font-size: 18px;
    margin: 0;
    vertical-align: middle;
  }
`;
