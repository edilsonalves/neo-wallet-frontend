import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import InputMask from 'react-input-mask';

import * as styled from './styles';

interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <styled.Container isFocused={isFocused}>
      <styled.MaskedInput>
        <InputMask
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          defaultValue={defaultValue}
          mask={mask}
          {...rest}
        />
      </styled.MaskedInput>
      {error && <span>{error}</span>}
    </styled.Container>
  );
};

export default MaskedInput;
