import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import * as styled from './styles';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ mask, ...rest }) => {
  return (
    <styled.MaskedInput>
      <InputMask mask={mask} {...rest} />
    </styled.MaskedInput>
  );
};

export default MaskedInput;
