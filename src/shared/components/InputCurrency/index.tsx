import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import CurrencyInput from 'react-currency-masked-input';
import { FiAlertCircle } from 'react-icons/fi';

import * as styled from './styles';

interface InputCurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({ name, ...rest }) => {
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
    <styled.Container isErrored={!!error} isFocused={isFocused}>
      <styled.InputCurrency>
        <CurrencyInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
          defaultValue={defaultValue && defaultValue}
          min="0"
          {...rest}
        />
      </styled.InputCurrency>
      {error && (
        <styled.Error title={error}>
          <FiAlertCircle />
        </styled.Error>
      )}
    </styled.Container>
  );
};

export default InputCurrency;
