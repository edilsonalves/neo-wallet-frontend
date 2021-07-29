import styled, { css } from 'styled-components';

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.light};
  border-bottom: 4px solid ${(props) => props.theme.colors.grey2};
  border-radius: 10px;
  height: 150px;
  width: 290px;
  padding: 40px;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;

      &,
      button {
        cursor: not-allowed;
      }
    `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lightPurple};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.purple};
  font-size: 32px;
  height: 70px;
  width: 70px;
  margin-right: 15px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.grey5};
  font-size: 18px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.lightPurple};
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.colors.purple};
  font-size: 12px;
  font-weight: 500;
  margin-top: 6px;
  padding: 5px 8px;
`;

export const Value = styled.strong`
  color: ${(props) => props.theme.colors.dark};
`;

export const Content = styled.div``;
