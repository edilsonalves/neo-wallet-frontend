import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';

import * as styled from './styles';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <styled.MaskedInput>
      <InputMask
        ref={inputRef}
        defaultValue={defaultValue}
        mask={mask}
        {...rest}
      />
    </styled.MaskedInput>
  );
};

export default MaskedInput;
