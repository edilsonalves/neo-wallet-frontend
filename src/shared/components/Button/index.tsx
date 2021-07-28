import React, { ButtonHTMLAttributes } from 'react';

import * as styled from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <styled.Button {...rest}>{children}</styled.Button>;
};

export default Button;
