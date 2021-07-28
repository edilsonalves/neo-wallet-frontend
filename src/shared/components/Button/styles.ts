import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.light};
  font-weight: 500;
  height: 60px;
  width: 100%;
  padding: 0 16px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
