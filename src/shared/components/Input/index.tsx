import React, { InputHTMLAttributes } from 'react';

import * as styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return <styled.Input {...props} />;
};

export default Input;
